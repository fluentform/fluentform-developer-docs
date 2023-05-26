<explain-block title="fluentform/payment_submission_data">

You can use this filter to modify payment form submission data.

**Parameters**

- `$submission` (string) Form Submission Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/payment_submission_data', function ($submission, $form) {
    // Do your stuff here
    
    return $submission;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_submission_data', $submission, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> draftFormEntry()

</explain-block>

<explain-block title="fluentform/submission_order_items">

You can use this filter to modify payment order items data.

**Parameters**

- `$orderItems` (array) Payment Order Items
- `$submissionData` (array) Form Submission Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/submission_order_items', function ($orderItems, $submissionData, $form) {
    // Do your stuff here
    
    return $submission;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_order_items', $this->orderItems, $this->submissionData, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getOrderItems($forced = false)

</explain-block>

<explain-block title="'fluentform/payment_field_' . $elementName . '_pricing_options'">

You can use this filter to modify payment order items data.

**Parameters**

- `$pricingOptions` (array) Payment Pricing Options
- `$item` (array) Payment Input
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/payment_field_' . $elementName . '_pricing_options', function ($pricingOptions, $item, $this->form) {
    // Do your stuff here
    
    return $pricingOptions;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/payment_field_' . $elementName . '_pricing_options', $pricingOptions, $item, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getItemFromVariables($item, $key)

</explain-block>

<explain-block title="fluentform/submission_subscription_items">

You can use this filter to modify payment subscription items data.

**Parameters**

- `$subscriptionItems` (array) Payment Subscription Items
- `$submissionData` (array) Form Submission Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/submission_subscription_items', function ($subscriptionItems, $submissionData, $form) {
    // Do your stuff here
    
    return $submission;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_subscription_items', $this->subscriptionItems, $this->submissionData, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getSubscriptionItems()

</explain-block>

<explain-block title="fluentform/payment_entries_human_date">

You can use this filter to get payment submission date as human-readable format.

**Parameters**

- `$status` (boolean) Whether Payment Submission Date is in human-readable Format

**Usage**

```php
add_filter('fluentform/payment_entries_human_date', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_entries_human_date', true);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentEntries -> loadApp()

</explain-block>

<explain-block title="'fluentform/payment_manager_class_' . $submission->payment_method">

You can use this filter to toggle payment subscription cancellation status for payment methods.

**Parameters**

- `$handler` (boolean) Whether Payment Subscription is cancelled

**Usage**

```php
add_filter('fluentform/payment_manager_class_' . $submission->payment_method, function ($handler) {
    // Do your stuff here
    
    return $handler;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_manager_class_' . $submission->payment_method, $handler);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentManagement -> cancelSubscription($subscription)

</explain-block>

<explain-block title="fluentform/payment_receipt_pre_render_payment_info">

You can use this filter to modify payment information pre render text.

**Parameters**

- `$preRender` (string) Payment Info Text
- `$entry` (object) Form Submission Object

**Usage**

```php
add_filter('fluentform/payment_receipt_pre_render_payment_info', function ($preRender, $entry) {
    // Do your stuff here
    
    return $preRender;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_receipt_pre_render_payment_info', $preRender, $this->entry);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentReceipt -> paymentInfo()

</explain-block>

<explain-block title="fluentform/payment_receipt_pre_render_payment_info">

You can use this filter to modify payment information table's pre render text.

**Parameters**

- `$preRender` (string) Payment Info Table Text
- `$entry` (object) Form Submission Object

**Usage**

```php
add_filter('fluentform/payment_receipt_pre_render_payment_info', function ($preRender, $entry) {
    // Do your stuff here
    
    return $preRender;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_receipt_pre_render_payment_info', $preRender, $this->entry);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentReceipt -> paymentInfoTable()

</explain-block>

<explain-block title="fluentform/payment_receipt_pre_render_item_details">

You can use this filter to modify payment order items pre render text.

**Parameters**

- `$preRender` (string) Payment Order Item Text
- `$entry` (object) Form Submission Object
- `$orderItems` (object) Order Items Object

**Usage**

```php
add_filter('fluentform/payment_receipt_pre_render_item_details', function ($preRender, $entry, $orderItems) {
    // Do your stuff here
    
    return $preRender;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/payment_receipt_pre_render_item_details', $preRender, $this->entry, $orderItems);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentReceipt -> itemDetails()

</explain-block>

<explain-block title="fluentform/payment_receipt_pre_render_submission_details">

You can use this filter to modify payment submission details pre render text.

**Parameters**

- `$preRender` (string) Payment Submission Details Text
- `$entry` (object) Form Submission Object

**Usage**

```php
add_filter('fluentform/payment_receipt_pre_render_submission_details', function ($preRender, $entry) {
    // Do your stuff here
    
    return $preRender;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_receipt_pre_render_submission_details', $preRender, $this->entry);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentReceipt -> customerDetails()

</explain-block>

<explain-block title="fluentform/payment_receipt_pre_render_subscription_details">

You can use this filter to modify payment subscription details pre render text.

**Parameters**

- `$preRender` (string) Payment Subscription Text
- `$entry` (object) Form Submission Object
- `$subscriptions` (object) Payment Subscription Object

**Usage**

```php
add_filter('fluentform/payment_receipt_pre_render_subscription_details', function ($preRender, $entry, $subscriptions) {
    // Do your stuff here
    
    return $preRender;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/payment_receipt_pre_render_subscription_details', $preRender, $this->entry, $subscriptions);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentReceipt -> getSubscriptionsAndPaymentTotal($submission)

</explain-block>

<explain-block title="'fluentform/payment_field_' . $elementName . '_pricing_options'">

You can use this filter to modify payment pricing options.

**Parameters**

- `$pricingOptions` (array) Payment Pricing Options
- `$item` (array) Form Payment Inputs
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/payment_field_' . $elementName . '_pricing_options', function ($pricingOptions, $item, $form) {
    // Do your stuff here
    
    return $pricingOptions;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/payment_field_' . $elementName . '_pricing_options', $pricingOptions, $item, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getItemFromVariables($item, $key)

</explain-block>

<explain-block title="fluentform/available_payment_methods">

You can use this filter to modify available payment methods.

**Parameters**

- `$available_methods` (array) Available Payment Methods

**Usage**

```php
add_filter('fluentform/available_payment_methods', function ($available_methods) {
    // Do your stuff here
    
    return $available_methods;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/available_payment_methods', $available_methods);`

This filter is located in FluentFormPro\src\Payments\Components\PaymentMethods -> getComponent()

</explain-block>

<explain-block title="'fluentform/payment_method_contents_' . $methodName">

You can use this filter to modify specific payment method contents.

**Parameters**

- `$selectedMarkups` (string) Payment Content Markup in HTML
- `$method` (array) Payment Method
- `$data` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/payment_method_contents_' . $methodName, function ($selectedMarkups, $method, $data, $form) {
    // Do your stuff here
    
    return $selectedMarkups;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/payment_method_contents_' . $methodName, $selectedMarkups, $method, $data, $form);`

This filter is located in FluentFormPro\src\Payments\Components\PaymentMethods -> render($data, $form)

</explain-block>

<explain-block title="'fluentform/transaction_data_' . $transaction->payment_method">

You can use this filter to modify payment method of transaction which has already been completed.

**Parameters**

- `$transaction` (array) Transaction Data

**Usage**

```php
add_filter('fluentform/transaction_data_' . $transaction->payment_method, function ($transaction) {
    // Do your stuff here
    
    return $transaction;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/transaction_data_' . $transaction->payment_method, $transaction);`

This filter is located in FluentFormPro\src\Payments\Order\OrderData -> getRefunds($submissionId)

</explain-block>

<explain-block title="'fluentform_subscription_items_' . $transaction->payment_method">

You can use this filter to modify subscription payments which has already been completed.

**Parameters**

- `$transaction` (array) Transaction Data

**Usage**

```php
add_filter('fluentform_subscription_items_' . $transaction->payment_method, function ($transaction) {
    // Do your stuff here
    
    return $transaction;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/transaction_data_' . $transaction->payment_method, [], $transaction);`

This filter is located in FluentFormPro\src\Payments\Order\OrderData -> getSubscriptionTransactions($subscriptionId)

</explain-block>

<explain-block title="fluentform/subscription_transactions">

You can use this filter to modify payment subscription's transaction.

**Parameters**

- `$transactions` (array) Transaction Data
- `$subscriptionId` (int) Payment Subscription ID

**Usage**

```php
add_filter('fluentform/subscription_transactions', function ($transactions, $subscriptionId) {
    // Do your stuff here
    
    return $transactions;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/subscription_transactions', $transactions, $subscriptionId);`

This filter is located in FluentFormPro\src\Payments\Orders\OrderData -> getSubscriptionTransactions($subscriptionId)

</explain-block>

<explain-block title="'fluentform/payment_settings_' . $method">

You can use this filter to modify payment methods settings.

**Parameters**

- `$payments` (array) Payment Details

**Usage**

```php
add_filter('fluentform/payment_settings_' . $method, function ($payments) {
    // Do your stuff here
    
    return $payments;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_settings_' . $method, []);`

This filter is located in FluentFormPro\src\Payments\AjaxEndpoints -> getPaymentMethodSettings()

</explain-block>

<explain-block title="'fluentform/payment_method_settings_validation_' . $method">

You can use this filter to modify payment methods validation settings.

**Parameters**

- `$payments` (array) Payment Method Settings

**Usage**

```php
add_filter('fluentform/payment_method_settings_validation_' . $method, function ($payments, $settings) {
    // Do your stuff here
    
    return $payments;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_method_settings_validation_' . $method, [], $settings);`

This filter is located in FluentFormPro\src\Payments\AjaxEndpoints -> savePaymentMethodSettings()

</explain-block>

<explain-block title="'fluentform/payment_method_settings_save_' . $method">

You can use this filter to modify payment methods settings before saving.

**Parameters**

- `$settings` (array) Payment Method Settings

**Usage**

```php
add_filter('fluentform/payment_method_settings_save_' . $method, function ($settings) {
    // Do your stuff here
    
    return $settings;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_method_settings_save_' . $method, $settings);`

This filter is located in FluentFormPro\src\Payments\AjaxEndpoints -> savePaymentMethodSettings()

</explain-block>

<explain-block title="fluentform/payment_stripe_publishable_key">

You can use this filter to modify stripe publishable key for specific form.

**Parameters**

- `$stripeKey` (string) Stripe Publishable Key
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/payment_stripe_publishable_key', function ($stripeKey, $formId) {
    // Do your stuff here
    
    return $stripeKey;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_stripe_publishable_key', StripeSettings::getPublishableKey($form->id), $form->id);`

This filter is located in FluentFormPro\src\PaymentsHandler -> init()

</explain-block>

<explain-block title="fluentform/accepted_currencies">

You can use this filter to modify accepted currencies.

**Parameters**

- `$currencies` (array) All Accepted Currencies

**Usage**

```php
add_filter('fluentform/accepted_currencies', function ($currencies) {
    // Do your stuff here
    
    return $currencies;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/accepted_currencies', $currencies);`

This filter is located in FluentFormPro\src\PaymentsHelper -> getCurrencies()

</explain-block>

<explain-block title="fluentform/currency_symbol">

You can use this filter to modify currency symbol of accepted currencies.

**Parameters**

- `$currency_symbol` (array) Currency Symbols
- `$currency` (string) Currency Name

**Usage**

```php
add_filter('fluentform/currency_symbol', function ($currency_symbol, $currency) {
    // Do your stuff here
    
    return $currency_symbol;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/currency_symbol', $currency_symbol, $currency);`

This filter is located in FluentFormPro\src\PaymentsHelper -> getCurrencies()

</explain-block>

<explain-block title="fluentform/currencies_symbols">

You can use this filter to modify all available currency symbols.

**Parameters**

- `$symbols` (array) Currency Symbols Array

**Usage**

```php
add_filter('fluentform/currencies_symbols', function ($symbols) {
    // Do your stuff here
    
    return $symbols;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/currencies_symbols', $symbols);`

This filter is located in FluentFormPro\src\PaymentsHelper -> getCurrencySymbols()

</explain-block>

<explain-block title="fluentform/zero_decimal_currencies">

You can use this filter to modify all available zero decimal currencies.

**Parameters**

- `$zeroDecimalCurrencies` (array) Zero Decimal Currencies

**Usage**

```php
add_filter('fluentform/zero_decimal_currencies', function ($zeroDecimalCurrencies) {
    // Do your stuff here
    
    return $zeroDecimalCurrencies;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/zero_decimal_currencies', $zeroDecimalCurrencies);`

This filter is located in FluentFormPro\src\PaymentsHelper -> zeroDecimalCurrencies()

</explain-block>

<explain-block title="fluentform/available_payment_statuses">

You can use this filter to modify payment statuses.

**Parameters**

- `$paymentStatuses` (array) Payment Statuses

**Usage**

```php
add_filter('fluentform/available_payment_statuses', function ($paymentStatuses) {
    // Do your stuff here
    
    return $paymentStatuses;
}, 10, 1);

```
```php
$paymentStatuses = [
    'paid'               => __('Paid', 'fluentformpro'),
    'processing'         => __('Processing', 'fluentformpro'),
    'pending'            => __('Pending', 'fluentformpro'),
    'failed'             => __('Failed', 'fluentformpro'),
    'refunded'           => __('Refunded', 'fluentformpro'),
    'partially-refunded' => __('Partial Refunded', 'fluentformpro'),
    'cancelled'          => __('Cancelled', 'fluentformpro')
];
```

**Reference**

`apply_filters('fluentform/available_payment_statuses', $paymentStatuses);`

This filter is located in FluentFormPro\src\PaymentsHelper -> getPaymentStatuses()

</explain-block>

<explain-block title="fluentform/payment_receipt_template_base_path">

You can use this filter to change payment receipt template base path.

**Parameters**

- `$basePath` (string) Base Path
- `$fileName` (string) File Name
- `$data` (array) Payment Receipt Data

**Usage**

```php
add_filter('fluentform/payment_receipt_template_base_path', function ($basePath, $fileName, $data) {
    // Do your stuff here
    
    return $basePath;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/payment_receipt_template_base_path',  FLUENTFORMPRO_DIR_PATH . 'src/views/receipt/', $fileName, $data);`

This filter is located in FluentFormPro\src\PaymentsHelper -> loadView($fileName, $data)

</explain-block>

<explain-block title="fluentform/recurring_payment_summary_texts">

You can use this filter to modify payment subscription summary text.

**Parameters**

- `$paymentSummaryText` (string) Payment Summary
- `$plan` (array) Subscription Plan
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/recurring_payment_summary_texts', function ($paymentSummaryText, $plan, $formId) {
    // Do your stuff here
    
    return $paymentSummaryText;
}, 10, 3);

```
```php
$paymentSummaryText = [
    'has_signup_fee' => __('{first_interval_total} for first {billing_interval} then {subscription_amount} for each {billing_interval}', 'fluentformpro'),
    'has_trial'      => __('Free for {trial_days} days then {subscription_amount} for each {billing_interval}', 'fluentformpro'),
    'onetime_only'   => __('One time payment of {first_interval_total}', 'fluentformpro'),
    'normal'         => __('{subscription_amount} for each {billing_interval}', 'fluentformpro'),
    'bill_times'     => __(', for {bill_times} installments', 'fluentformpro'),
    'single_trial'   => __('Free for {trial_days} days then {subscription_amount} one time')
];
```

**Reference**

`apply_filters('fluentform/recurring_payment_summary_texts',  FLUENTFORMPRO_DIR_PATH . 'src/views/receipt/', $fileName, $data);`

This filter is located in FluentFormPro\src\PaymentsHelper -> getPaymentSummaryText($plan, $formId, $currency, $withMarkup = true)

</explain-block>

<explain-block title="fluentform/transaction_view_url">

You can use this filter to modify transaction file URL.

**Parameters**

- `$urlBase` (string) Transaction File URL

**Usage**

```php
add_filter('fluentform/transaction_view_url', function ($urlBase) {
    // Do your stuff here
    
    return $urlBase;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/transaction_view_url',  $urlBase);`

This filter is located in FluentFormPro\src\TransactionShortcodes -> getViewConfig()

</explain-block>

<explain-block title="fluentform/payment_view_config">

You can use this filter to modify payment transaction configuration.

**Parameters**

- `$config` (string) Payment Configurations

**Usage**

```php
add_filter('fluentform/payment_view_config', function ($config) {
    // Do your stuff here
    
    return $config;
}, 10, 1);

```
```php
$config = [
    'new_tab'                    => false,
    'view_text'                  => __('View', 'fluentformpro'),
    'base_url'                   => $urlBase,
    'date_format'                => get_option('date_format'),
    'date_time_format'           => $wpDateTimeFormat,
    'transactions_title'         => __('Payments', 'fluentformpro'),
    'subscriptions_title'        => __('Subscriptions', 'fluentformpro'),
    'sub_cancel_confirm_heading' => __('Are you sure you want to cancel this subscription?', 'fluentformpro'),
    'sub_cancel_confirm_btn'     => __('Yes, cancel this subscription', 'fluentformpro'),
    'sub_cancel_close'           => __('Close', 'fluentformpro')
];
```

**Reference**

`apply_filters('fluentform/payment_view_config',  $config);`

This filter is located in FluentFormPro\src\TransactionShortcodes -> getViewConfig()

</explain-block>

<explain-block title="'fluentform/pay_method_has_sub_cancel_' . $method">

You can use this filter to modify payment method if subscription has been canceled.

**Parameters**

- `$hasCancel` (boolean) Whether Payment Subscription Has Been Canceled

**Usage**

```php
add_filter('fluentform/pay_method_has_sub_cancel_' . $method, function ($hasCancel) {
    // Do your stuff here
    
    return $hasCancel;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/pay_method_has_sub_cancel_' . $method,  false);`

This filter is located in FluentFormPro\src\TransactionShortcodes -> canCancelSubscription($subscription)

</explain-block>

<explain-block title="'fluentform/payment_manager_class_' . $submission->payment_method">

You can use this filter to modify a certain payment if subscription has been canceled.

**Parameters**

- `$handler` (boolean) Whether Payment Subscription Has Been Canceled

**Usage**

```php
add_filter('fluentform/payment_manager_class_' . $submission->payment_method, function ($handler) {
    // Do your stuff here
    
    return $handler;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_manager_class_' . $submission->payment_method,  false);`

This filter is located in FluentFormPro\src\TransactionShortcodes -> cancelSubscriptionAjax()

</explain-block>

<explain-block title="fluentform/mollie_payment_args">

You can use this filter to modify payment arguments of mollie payment method.

**Parameters**

- `$paymentArgs` (array) Mollie Payment Arguments
- `$submission` (array) Form Submission
- `$transaction` (array) Payment Transaction
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/mollie_payment_args', function ($paymentArgs, $submission, $transaction, $form) {
    // Do your stuff here
    
    return $paymentArgs;
}, 10, 4);

```
```php
$paymentArgs = [
    'amount' => [
        'currency' => $transaction->currency,
        'value' => number_format((float) $transaction->payment_total / 100, 2, '.', '')
    ],
    'description' => $form->title,
    'redirectUrl' => $successUrl,
    'webhookUrl' => $listener_url,
    'metadata' => json_encode([
        'form_id' => $form->id,
        'submission_id' => $submission->id
    ]),
    'sequenceType' => 'oneoff'
];
```

**Reference**

`apply_filters('fluentform/mollie_payment_args',  $paymentArgs, $submission, $transaction, $form);`

This filter is located in FluentFormPro\src\PaymentMethods\Mollie\MollieProcessor -> handleRedirect($transaction, $submission, $form, $methodSettings)

</explain-block>

<explain-block title="'fluentform/payment_method_public_name_' . $paymentMethod">

You can use this filter to modify payment method to before showing payment info.

**Parameters**

- `$paymentMethod` (array) Payment Method Details

**Usage**

```php
add_filter('fluentform/payment_method_public_name_' . $paymentMethod, function ($paymentMethod) {
    // Do your stuff here
    
    return $paymentMethod;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_method_public_name_' . $paymentMethod',  $paymentMethod);`

This filter is located in FluentFormPro\src\views\receipt\payment-info.php

</explain-block>

<explain-block title="fluentform/paypal_checkout_args">

You can use this filter to modify payment arguments of PayPal payment method before checkout.

**Parameters**

- `$paypal_args` (array) PayPal Payment Arguments
- `$submission` (array) Form Submission
- `$transaction` (array) Payment Transaction
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/paypal_checkout_args', function ($paypal_args, $submission, $transaction, $form) {
    // Do your stuff here
    
    return $paypal_args;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/paypal_checkout_args', $paypal_args, $submission, $transaction, $form);`

This filter is located in FluentFormPro\src\PaymentMethods\PayPal\PayPalProcessor -> handlePayPalRedirect($transaction, $submission, $form, $methodSettings, $hasSubscriptions)

</explain-block>

<explain-block title="fluentform/paypal_pending_message">

You can use this filter to modify PayPal payment method default pending message.

**Parameters**

- `$message` (array) PayPal Payment Arguments
- `$submission` (array) Form Submission

**Usage**

```php
add_filter('fluentform/paypal_pending_message', function ($message, $submission) {
    // Do your stuff here
    
    return $message;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/paypal_pending_message', $message, $submission);`

This filter is located in FluentFormPro\src\PaymentMethods\PayPal\PayPalProcessor -> handleSessionRedirectBack($data)

</explain-block>

<explain-block title="fluentform/paypal_url">

You can use this filter to modify PayPal payment method URL redirection.

**Parameters**

- `$paypal_uri` (string) PayPal Payment Redirect URI
- `$ssl_check` (boolean) Whether SSL is enabled or not, By Default False
- `$ipn` (boolean) Whether Instant Payment Notification (IPN) is enabled or not, By Default False
- `$isLive` (boolean) Whether the PayPal Payment Method is live or not, By Default True

**Usage**

```php
add_filter('fluentform/paypal_url', function ($paypal_uri, $ssl_check, $ipn, $isLive) {
    // Do your stuff here
    
    return $paypal_uri;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/paypal_url', $paypal_uri, $ssl_check, $ipn, $isLive);`

This filter is located in FluentFormPro\src\PaymentMethods\PayPal\PayPalProcessor -> getPaypalRedirect($ssl_check = false, $ipn = false)

</explain-block>

<explain-block title="fluentform/process_paypal_ipn_data">

You can use this filter to modify PayPal payment method Instant Payment Notification (IPN) data.

**Parameters**

- `$encoded_data_array` (array) Instant Payment Notification (IPN) Data

**Usage**

```php
add_filter('fluentform/process_paypal_ipn_data', function ($encoded_data_array) {
    // Do your stuff here
    
    return $encoded_data_array;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/process_paypal_ipn_data', $encoded_data_array);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\Customer -> createCustomer($customerArgs, $formId)

</explain-block>

<explain-block title="fluentform/razorpay_payment_args">

You can use this filter to modify payment arguments of RazorPay payment method.

**Parameters**

- `$paymentArgs` (array) Razorpay Payment Arguments
- `$submission` (array) Form Submission
- `$transaction` (array) Payment Transaction Details
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/razorpay_payment_args', function ($paymentArgs, $submission, $transaction, $form) {
    // Do your stuff here
    
    return $paymentArgs;
}, 10, 4);

```
```php
$paymentArgs = [
    'amount'          => intval($transaction->payment_total),
    'currency'        => strtoupper($transaction->currency),
    'description'     => $form->title,
    'reference_id'    => $transaction->transaction_hash,
    'customer'        => [
        'email'   => PaymentHelper::getCustomerEmail($submission, $form),
        'name'    => PaymentHelper::getCustomerName($submission, $form),
        'contact' => PaymentHelper::getCustomerPhoneNumber($submission, $form),
    ],
    "options"         => [
        "checkout" => [
            'name'    => PaymentHelper::getCustomerName($submission, $form),
        ]
    ],
    'callback_url'    => $successUrl,
    'notes'           => [
        'form_id'       => $form->id,
        'submission_id' => $submission->id
    ],
    'callback_method' => 'get',
    'notify'          => [
        'email' => in_array('email', $globalSettings['notifications']),
        'sms'   => in_array('sms', $globalSettings['notifications']),
    ]
];
```

**Reference**

`apply_filters('fluentform/razorpay_payment_args', $paymentArgs, $submission, $transaction, $form);`

This filter is located in FluentFormPro\src\PaymentMethods\RazorPay\RazorPayProcessor -> handleRedirect($transaction, $submission, $form, $methodSettings)

</explain-block>

<explain-block title="fluentform/stripe_request_headers">

You can use this filter to modify stripe API request header.

**Parameters**

- `$headers` (array) Stripe API Request Headers

**Usage**

```php
add_filter('fluentform/stripe_request_headers', function ($headers) {
    // Do your stuff here
    
    return $headers;
}, 10, 1);

```
```php
$headers = [
    'Authorization' => 'Basic ' . base64_encode(self::get_secret_key() . ':'),
    'Stripe-Version' => self::STRIPE_API_VERSION,
    'User-Agent' => $app_info['name'] . '/' . $app_info['version'] . ' (' . $app_info['url'] . ')',
    'X-Stripe-Client-User-Agent' => json_encode($user_agent),
];
```

**Reference**

`apply_filters('fluentform/stripe_request_headers', $headers);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\ApiRequest -> get_headers()

</explain-block>

<explain-block title="fluentform/stripe_idempotency_key">

You can use this filter to modify stripe payment method idempotency key. Stripe use idempotency key for safely retrying requests without accidentally performing the same operation twice.

**Parameters**

- `$key` (string) Stripe Idempotency Key
- `$request` (array) Stripe API Request

**Usage**

```php
add_filter('fluentform/stripe_idempotency_key', function ($key, $request) {
    // Do your stuff here
    
    return $key;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/stripe_idempotency_key', $key, $request);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\ApiRequest -> request($request, $api = 'charges', $method = 'POST')

</explain-block>

<explain-block title="fluentform/stripe_request_body">

You can use this filter to modify stripe payment method API request.

**Parameters**

- `$request` (array) Stripe API Request
- `$api` (string) Stripe Idempotency Key

**Usage**

```php
add_filter('fluentform/stripe_request_body', function ($request, $api) {
    // Do your stuff here
    
    return $request;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/stripe_request_body', $request, $api);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\ApiRequest -> request($request, $api = 'charges', $method = 'POST')

</explain-block>

<explain-block title="fluentform/payment_stripe_secret_key">

You can use this filter to modify stripe payment method API secret key.

**Parameters**

- `$secretKey` (string) Stripe API Secret Key
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/payment_stripe_secret_key', function ($secretKey, $formId) {
    // Do your stuff here
    
    return $secretKey;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/payment_stripe_secret_key', $secretKey, $formId);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\Customer -> createCustomer($customerArgs, $formId)

</explain-block>

<explain-block title="fluentform/stripe_plan_name_generated">

You can use this filter to modify stripe payment method plan subscription ID before generating plan name.

**Parameters**

- `$subscriptionId` (string) Stripe Subscription ID
- `$subscription` (array) Stripe Subscription Data
- `$currency` (string) Selected Currency, By Default USD

**Usage**

```php
add_filter('fluentform/stripe_plan_name_generated', function ($subscriptionId, $subscription, $currency) {
    // Do your stuff here
    
    return $subscriptionId;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/stripe_plan_name_generated', $subscriptionId, $subscription, $currency);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\Plan -> getGeneratedSubscriptionId($subscription, $currency = 'USD')

</explain-block>

<explain-block title="fluentform/stripe_plan_name">

You can use this filter to modify stripe payment method plan name.

**Parameters**

- `$planName` (string) Stripe Plan Name
- `$subscription` (array) Stripe Subscription Data

**Usage**

```php
add_filter('fluentform/stripe_plan_name', function ($planName, $subscription) {
    // Do your stuff here
    
    return $planName;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/stripe_plan_name', $planName, $subscription);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\API\Plan -> getSubscriptionPlanBySubscription($subscription, $currency)

</explain-block>

<explain-block title="fluentform/stripe_checkout_args">

You can use this filter to modify stripe checkout arguments.

**Parameters**

- `$checkoutArgs` (string) Stripe Checkout Arguments
- `$submission` (array) Form Submission Data
- `$transaction` (array) Transaction Details
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/stripe_checkout_args', function ($checkoutArgs, $submission, $transaction, $form) {
    // Do your stuff here
    
    return $checkoutArgs;
}, 10, 4);

```
```php
$checkoutArgs = [
    'cancel_url'                 => wp_sanitize_redirect($cancelUrl),
    'success_url'                => wp_sanitize_redirect($successUrl),
    'locale'                     => 'auto',
    'billing_address_collection' => 'auto',
    'client_reference_id'        => $submission->id,
    'customer_email'             => $transaction->payer_email,
    'metadata'                   => [
        'submission_id'  => $submission->id,
        'form_id'        => $form->id,
        'transaction_id' => ($transaction) ? $transaction->id : ''
    ]
];
```

**Reference**

`apply_filters('fluentform/stripe_checkout_args', $checkoutArgs, $submission, $transaction, $form);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\StripeProcessor -> handleCheckoutSession($transaction, $submission, $form, $methodSettings)

</explain-block>

<explain-block title="fluentform/disable_stripe_connect">

You can use this filter to toggle stripe connection.

**Parameters**

- `$isDisableStripeConnect` (boolean) Whether Stripe Connection is disabled, By Default false

**Usage**

```php
add_filter('fluentform/disable_stripe_connect', function ($isDisableStripeConnect) {
    // Do your stuff here
    
    return $isDisableStripeConnect;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/disable_stripe_connect', $isDisableStripeConnect);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\StripeSettings -> getSettings()

</explain-block>

<explain-block title="fluentform/stripe_supported_shipping_countries">

You can use this filter to modify stripe supported shipping countries list.

**Parameters**

- `$countries` (array) Stripe Supported Shipping Countries

**Usage**

```php
add_filter('fluentform/stripe_supported_shipping_countries', function ($countries) {
    // Do your stuff here
    
    return $countries;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/stripe_supported_shipping_countries', $countries);`

This filter is located in FluentFormPro\src\PaymentMethods\Stripe\StripeSettings -> supportedShippingCountries()

</explain-block>


<explain-block title="fluentform/stripe_strong_customer_verify_waiting_message">

You can use this filter to modify stripe strong customer verify waiting message

**Parameters**

- `$message` (string) Waiting Message

**Usage**

```php
add_filter('fluentform/stripe_strong_customer_verify_waiting_message', function ($message) {
    // replace message if you need
    
    return $message;
});

```

**Reference**

`apply_filters('fluentform/stripe_strong_customer_verify_waiting_message', $message);`

This filter is located in FluentFormPro\src\Payments\PaymentMethods\Stripe\StripeInlineProcessor.php -> handlePaymentIntent()

</explain-block>

<explain-block title="fluentform/square_payment_args">

You can use this filter to modify payment arguments of Square payment method.

**Parameters**

- `$paymentArgs` (array) Square Payment Arguments
- `$submission` (array) Form Submission
- `$transaction` (array) Payment Transaction Details
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/square_payment_args', function ($paymentArgs, $submission, $transaction, $form) {
    // Do your stuff here
    
    return $countries;
}, 10, 4);

```
```php
$paymentArgs = [
    "idempotency_key" => $transaction->transaction_hash,
    "order"           => [
        "order" => [
            "location_id" => ArrayHelper::get($keys, "location_id"),
            "line_items"  => [
                [
                    "quantity"         => '1',
                    "item_type"        => "ITEM",
                    "metadata"         => [
                        'form_id'       => 'Form Id ' . strval($form->id),
                        'submission_id' => 'Submission Id ' . strval($submission->id)
                    ],
                    "name"             => $this->getProductNames(),
                    "base_price_money" => [
                        "amount"   => intval($transaction->payment_total),
                        "currency" => $transaction->currency
                    ]
                ]
            ],
        ]
    ],
    'pre_populated_data' => [
        'buyer_email'   => PaymentHelper::getCustomerEmail($submission, $form),
        'buyer_phone_number' => PaymentHelper::getCustomerPhoneNumber($submission, $form),
    ],
    "redirect_url"    => $listenerUrl
];
```

**Reference**

`apply_filters('fluentform/square_payment_args', $paymentArgs, $submission, $transaction, $form);`

This filter is located in FluentFormPro\src\PaymentMethods\Square\SquareProcessor -> handleRedirect()

</explain-block>

<explain-block title="fluentform/payment_methods_global_settings">

You can use this filter to modify payment methods global settings.

**Parameters**

- `$globalSettings` (array) Base Payment Method Global Settings

**Usage**

```php
add_filter('fluentform/payment_methods_global_settings', function ($globalSettings) {
    // Do your stuff here
    
    return $globalSettings;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payment_methods_global_settings', $globalSettings);`

This filter is located in FluentFormPro\src\Payments\PaymentHandler -> renderPaymentSettings()

</explain-block>

<explain-block title="fluentform/accepted_currencies">

You can use this filter to modify payment methods accepted currencies list.

**Parameters**

- `$currencies` (array) Base Payment Method Currencies

**Usage**

```php
add_filter('fluentform/accepted_currencies', function ($currencies) {
    // Do your stuff here
    
    return $currencies;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/accepted_currencies', $currencies);`

This filter is located in FluentFormPro\src\Payments\PaymentHandler -> getCurrencies()

</explain-block>

<explain-block title="fluentform/currency_symbol">

You can use this filter to modify currency symbols of payment methods accepted currencies.

**Parameters**

- `$currency_symbol` (string) Currency Symbol in Unicode
- `$currency` (string) Currency Name

**Usage**

```php
add_filter('fluentform/currency_symbol', function ($currency_symbol, $currency) {
    // Do your stuff here
    
    return $currency_symbol;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/currency_symbol', $currency_symbol, $currency);`

This filter is located in FluentFormPro\src\Payments\PaymentHandler -> getCurrencySymbol($currency = '')

</explain-block>

<explain-block title="fluentform/currencies_symbols">

You can use this filter to modify currency symbols of payment methods accepted currencies.

**Parameters**

- `$symbols` (array) Currency Symbols List in Unicode

**Usage**

```php
add_filter('fluentform/currencies_symbols', function ($symbols) {
    // Do your stuff here
    
    return $symbols;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/currencies_symbols', $symbols);`

This filter is located in FluentFormPro\src\Payments\PaymentHelper -> getCurrencySymbols()

</explain-block>

<explain-block title="fluentform/zero_decimal_currencies">

You can use this filter to modify zero payment supported currencies of payment methods.

**Parameters**

- `$zeroDecimalCurrencies` (array) Zero Decimal Payment Supported Currencies

**Usage**

```php
add_filter('fluentform/zero_decimal_currencies', function ($zeroDecimalCurrencies) {
    // Do your stuff here
    
    return $zeroDecimalCurrencies;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/zero_decimal_currencies', $zeroDecimalCurrencies);`

This filter is located in FluentFormPro\src\Payments\PaymentHelper -> zeroDecimalCurrencies()

</explain-block>


