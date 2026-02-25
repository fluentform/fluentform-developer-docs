# Payment Gateway Development

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Advanced" /> <Badge type="error" vertical="top" text="Pro" />

This guide walks through building a complete payment gateway for Fluent Forms. A payment gateway requires two classes: one for settings/display ([BasePaymentMethod](/api/classes/base-payment-method/)) and one for processing transactions ([BaseProcessor](/api/classes/base-processor/)).

[[toc]]

## Prerequisites

- Fluent Forms Pro installed and active
- A payment provider with an API (e.g., Stripe, Square, Razorpay)
- Understanding of [BasePaymentMethod](/api/classes/base-payment-method/) and [BaseProcessor](/api/classes/base-processor/) API references

## Architecture Overview

Payment gateways in Fluent Forms follow a two-class pattern:

```
BasePaymentMethod (Settings & Display)
├── Global settings (API keys, mode)
├── Push payment method to form editor
├── Validate admin settings
└── Modify transaction display

BaseProcessor (Transaction Processing)
├── Handle payment action on submission
├── Redirect to payment provider
├── Handle redirect back / webhook (IPN)
├── Insert/update transactions
└── Change payment status
```

## Step 1: Create the Plugin

```php
<?php
/**
 * Plugin Name: FF Demo Payment Gateway
 * Description: Demo payment gateway for Fluent Forms.
 * Version: 1.0.0
 * Requires Plugins: fluentform, fluentformpro
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('fluentform/loaded', function ($app) {
    // Only load if Pro payments are available
    if (!defined('FLUENTFORMPRO')) {
        return;
    }

    require_once __DIR__ . '/DemoPaymentMethod.php';
    require_once __DIR__ . '/DemoPaymentProcessor.php';

    $method = new DemoPaymentMethod();
    $method->init();

    $processor = new DemoPaymentProcessor();
    $processor->init();
});
```

## Step 2: Create the Payment Method Class

This class handles the admin settings UI and form editor integration:

```php
<?php

use FluentFormPro\Payments\PaymentMethods\BasePaymentMethod;

class DemoPaymentMethod extends BasePaymentMethod
{
    public function __construct()
    {
        parent::__construct('demo_pay');
    }

    public function init()
    {
        add_filter(
            'fluentform/payment_method_settings_validation_' . $this->key,
            [$this, 'validateSettings'], 10, 2
        );

        if (!$this->isEnabled()) {
            return;
        }

        add_filter('fluentform/transaction_data_' . $this->key, [$this, 'modifyTransaction'], 10, 1);
        add_filter('fluentform/available_payment_methods', [$this, 'pushPaymentMethodToForm']);
    }

    public function pushPaymentMethodToForm($methods)
    {
        $methods[$this->key] = [
            'title'        => __('Demo Payment', 'fluentform'),
            'enabled'      => 'yes',
            'method_value' => $this->key,
            'settings'     => [
                'option_label' => [
                    'type'     => 'text',
                    'template' => 'inputText',
                    'value'    => 'Pay with Demo Payment',
                    'label'    => 'Method Label',
                ],
            ],
        ];

        return $methods;
    }

    public function validateSettings($errors, $settings)
    {
        if (empty($settings['test_api_key']) && empty($settings['live_api_key'])) {
            $errors['test_api_key'] = __('An API Key is required.', 'fluentform');
        }

        return $errors;
    }

    public function modifyTransaction($transaction)
    {
        if ($transaction->charge_id) {
            $transaction->action_url = 'https://dashboard.demopay.example/payments/' . $transaction->charge_id;
        }

        return $transaction;
    }

    public function getGlobalFields()
    {
        return [
            'label'  => 'Demo Payment Settings',
            'fields' => [
                [
                    'settings_key'  => 'is_active',
                    'type'          => 'yes-no-checkbox',
                    'label'         => 'Status',
                    'checkbox_label'=> 'Enable Demo Payment',
                ],
                [
                    'settings_key' => 'payment_mode',
                    'type'         => 'input-radio',
                    'label'        => 'Payment Mode',
                    'options'      => [
                        'test' => 'Test Mode',
                        'live' => 'Live Mode',
                    ],
                    'info_help'    => 'Select Test Mode for development, Live Mode for production.',
                    'check_status' => 'yes',
                ],
                [
                    'settings_key' => 'test_api_key',
                    'type'         => 'input-text',
                    'data_type'    => 'password',
                    'label'        => 'Test API Key',
                    'placeholder'  => 'Test API Key',
                    'check_status' => 'yes',
                ],
                [
                    'settings_key' => 'live_api_key',
                    'type'         => 'input-text',
                    'data_type'    => 'password',
                    'label'        => 'Live API Key',
                    'placeholder'  => 'Live API Key',
                    'check_status' => 'yes',
                ],
            ],
        ];
    }

    public function getGlobalSettings()
    {
        return get_option('fluentform_payment_settings_' . $this->key, []);
    }
}
```

## Step 3: Create the Processor Class

This class handles the actual payment processing during form submission:

```php
<?php

use FluentFormPro\Payments\PaymentMethods\BaseProcessor;

class DemoPaymentProcessor extends BaseProcessor
{
    public $method = 'demo_pay';

    protected $form;

    public function init()
    {
        add_action(
            'fluentform/process_payment_' . $this->method,
            [$this, 'handlePaymentAction'], 10, 6
        );

        add_action(
            'fluentform/payment_frameless_' . $this->method,
            [$this, 'handleSessionRedirectBack']
        );
    }

    public function handlePaymentAction($submissionId, $submissionData, $form, $methodSettings, $hasSubscription, $totalPayable)
    {
        $this->form = $form;
        $this->setSubmissionId($submissionId);

        $submission  = $this->getSubmission();
        $transaction = $this->insertTransaction([
            'transaction_type' => 'onetime',
            'payment_total'    => $totalPayable,
            'status'           => 'pending',
            'currency'         => strtoupper($submission->currency),
            'payment_mode'     => $this->getPaymentMode(),
        ]);

        $this->handleRedirect($transaction, $submission, $form, $methodSettings);
    }

    protected function handleRedirect($transaction, $submission, $form, $methodSettings)
    {
        // Build return URL for after payment
        $successUrl = add_query_arg([
            'fluentform_payment' => $submission->id,
            'payment_method'     => $this->method,
            'transaction_hash'   => $transaction->transaction_hash,
            'type'               => 'success',
        ], site_url('/'));

        // Build webhook/IPN listener URL
        $webhookUrl = add_query_arg([
            'fluentform_payment_api_notify' => 1,
            'payment_method'                => $this->method,
            'submission_id'                 => $submission->id,
            'transaction_hash'              => $transaction->transaction_hash,
        ], home_url('index.php'));

        // Get API key based on mode
        $settings = get_option('fluentform_payment_settings_' . $this->method, []);
        $mode     = !empty($settings['payment_mode']) ? $settings['payment_mode'] : 'test';
        $apiKey   = ($mode === 'live') ? ($settings['live_api_key'] ?? '') : ($settings['test_api_key'] ?? '');

        // Create payment intent with your provider API
        $response = wp_remote_post('https://api.demopay.example/v1/payments', [
            'headers' => [
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type'  => 'application/json',
            ],
            'body' => wp_json_encode([
                'amount'      => number_format($transaction->payment_total / 100, 2, '.', ''),
                'currency'    => $transaction->currency,
                'redirect_url'=> $successUrl,
                'webhook_url' => $webhookUrl,
                'metadata'    => [
                    'form_id'       => $form->id,
                    'submission_id' => $submission->id,
                ],
            ]),
            'timeout' => 30,
        ]);

        if (is_wp_error($response)) {
            wp_send_json_success([
                'message' => $response->get_error_message(),
            ], 423);
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);

        if (empty($body['checkout_url'])) {
            wp_send_json_success([
                'message' => __('Could not create payment session.', 'fluentform'),
            ], 423);
        }

        // Redirect user to payment provider
        wp_send_json_success([
            'nextAction'   => 'payment',
            'actionName'   => 'normalRedirect',
            'redirect_url' => $body['checkout_url'],
            'message'      => __('Redirecting to payment...', 'fluentform'),
            'result'       => [
                'insert_id' => $submission->id,
            ],
        ], 200);
    }

    public function handleSessionRedirectBack($data)
    {
        $submissionId    = intval($data['submission_id'] ?? 0);
        $transactionHash = sanitize_text_field($data['transaction_hash'] ?? '');

        $this->setSubmissionId($submissionId);
        $submission  = $this->getSubmission();
        $transaction = $this->getTransaction($transactionHash, 'transaction_hash');

        if (!$submission || !$transaction) {
            return;
        }

        // Verify payment with your provider
        $settings = get_option('fluentform_payment_settings_' . $this->method, []);
        $mode     = !empty($settings['payment_mode']) ? $settings['payment_mode'] : 'test';
        $apiKey   = ($mode === 'live') ? ($settings['live_api_key'] ?? '') : ($settings['test_api_key'] ?? '');

        $verification = wp_remote_get('https://api.demopay.example/v1/payments/' . $transaction->charge_id, [
            'headers' => ['Authorization' => 'Bearer ' . $apiKey],
        ]);

        $payment = json_decode(wp_remote_retrieve_body($verification), true);

        if (!empty($payment['status']) && $payment['status'] === 'paid') {
            $this->handlePaid($submission, $transaction, $payment);
        } else {
            $this->changeSubmissionPaymentStatus('failed');
            $this->changeTransactionStatus($transaction->id, 'failed');
        }
    }

    protected function handlePaid($submission, $transaction, $vendorData)
    {
        if ($this->getMetaData('is_form_action_fired') === 'yes') {
            return $this->completePaymentSubmission(false);
        }

        $this->updateTransaction($transaction->id, [
            'charge_id'    => sanitize_text_field($vendorData['id']),
            'payment_note' => maybe_serialize($vendorData),
        ]);

        $this->changeSubmissionPaymentStatus('paid');
        $this->changeTransactionStatus($transaction->id, 'paid');
        $this->recalculatePaidTotal();
        $this->setMetaData('is_form_action_fired', 'yes');

        return $this->getReturnData();
    }

    public function getPaymentMode()
    {
        $settings = get_option('fluentform_payment_settings_' . $this->method, []);
        return !empty($settings['payment_mode']) ? $settings['payment_mode'] : 'test';
    }
}
```

## Payment Flow Summary

1. User submits form with payment
2. `fluentform/process_payment_{method}` fires → `handlePaymentAction()`
3. Transaction inserted with `pending` status
4. User redirected to payment provider
5. After payment, user redirected back → `handleSessionRedirectBack()`
6. Payment verified with provider API
7. Transaction and submission statuses updated

## Related Resources

- [BasePaymentMethod API Reference](/api/classes/base-payment-method/) — Settings class documentation
- [BaseProcessor API Reference](/api/classes/base-processor/) — Processor class documentation
- [Payment Action Hooks](/hooks/actions/payment/) — All payment-related action hooks
- [Payment Filter Hooks](/hooks/filters/payment/) — All payment-related filter hooks
