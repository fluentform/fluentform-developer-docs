# Payment Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="55 Filters" />

These filters let you modify payment processing, order items, statuses, receipts, and gateway-specific settings.

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

<explain-block title="fluentform/authorizenet_modal_styles">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$defaultStyles` — see source

**Usage**

```php
add_filter('fluentform/authorizenet_modal_styles', function ($defaultStyles) {
    return $defaultStyles;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/authorizenet_modal_styles', $defaultStyles);`

This filter is located in `src/Payments/PaymentMethods/AuthorizeNet/AuthorizeNetProcessor.php` (line 802).

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
    'cancelled'          => __('Cancelled', 'fluentformpro'),
    'requires_review'    => __('Requires Review', 'fluentformpro')
];
```

**Reference**

`apply_filters('fluentform/available_payment_statuses', $paymentStatuses);`

::: warning Registering a custom status is required
Changing a transaction's status from the admin is validated against this list, so a status
that is not registered here cannot be selected or applied.

Validation only runs when the status actually changes. A row that already holds a status
this build does not register keeps it, and its other fields (payer name, email, addresses)
remain editable.
:::

Two classes define this list and both apply the filter: `FluentForm\App\Modules\Payments\PaymentHelper` (free) and `FluentFormPro\Payments\PaymentHelper` (Pro). The array above is Pro's — `requires_review` is Pro-only and is not present in the free list, so register any status you rely on through the filter rather than assuming a hardcoded default.

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

<explain-block title="fluentform/form_payment_settings">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$paymentSettings` — see source
- `$formId` — see source

**Usage**

```php
add_filter('fluentform/form_payment_settings', function ($paymentSettings, $formId) {
    return $paymentSettings;
}, 10, 2);
```

**Reference**

`$paymentSettings = apply_filters('fluentform/form_payment_settings', $paymentSettings, $formId);`

This filter is located in `src/Payments/AjaxEndpoints.php` (line 231).

</explain-block>

<explain-block title="fluentform/global_settings_component_payment_vars">

**Parameters**

- `$paymentVars` — see source

**Usage**

```php
add_filter('fluentform/global_settings_component_payment_vars', function ($paymentVars) {
    return $paymentVars;
}, 10, 1);
```

**Reference**

`$globalSettingVars['payment_vars'] = apply_filters('fluentform/global_settings_component_payment_vars', $paymentVars);`

This filter is located in `app/Modules/Payments/PaymentHandler.php` (line 391).

</explain-block>

<explain-block title="fluentform/global_settings_payment_sub_menu_items">

**Parameters**

- `$subMenuItems` — see source

**Usage**

```php
add_filter('fluentform/global_settings_payment_sub_menu_items', function ($subMenuItems) {
    return $subMenuItems;
}, 10, 1);
```

**Reference**

`$subMenuItems = apply_filters('fluentform/global_settings_payment_sub_menu_items', $subMenuItems);`

This filter is located in `app/Modules/Payments/PaymentHandler.php` (line 324).

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

<explain-block title="fluentform/paddle_amount_mismatch_strict">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/paddle_amount_mismatch_strict', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$strict = apply_filters('fluentform/paddle_amount_mismatch_strict', true);`

This filter is located in `src/Payments/PaymentMethods/Paddle/PaddleProcessor.php` (line 438).

</explain-block>

<explain-block title="fluentform/paddle_checkout_vars">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$checkoutVars` — see source

**Usage**

```php
add_filter('fluentform/paddle_checkout_vars', function ($checkoutVars) {
    return $checkoutVars;
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/paddle_checkout_vars', $checkoutVars));`

This filter is located in `src/Payments/PaymentMethods/Paddle/PaddleProcessor.php` (line 567).

</explain-block>

<explain-block title="fluentform/paddle_payment_args">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$paymentArgs` — see source
- `$submission` — see source
- `$transaction` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/paddle_payment_args', function ($paymentArgs, $submission, $transaction, $form) {
    return $paymentArgs;
}, 10, 4);
```

**Reference**

`$paymentArgs = apply_filters('fluentform/paddle_payment_args', $paymentArgs, $submission, $transaction, $form);`

This filter is located in `src/Payments/PaymentMethods/Paddle/PaddleProcessor.php` (line 178).

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

<explain-block title="fluentform/payment_config">

**Parameters**

- `$paymentConfig` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_config', function ($paymentConfig, $form) {
    return $paymentConfig;
}, 10, 2);
```

**Reference**

`$paymentConfig = apply_filters('fluentform/payment_config', $paymentConfig, $form->id);`

This filter is located in `app/Modules/Payments/PaymentHandler.php` (line 211).

</explain-block>

<explain-block title="fluentform/payment_confirmation_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$this` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_confirmation_message', function ($message, $this, $form) {
    return $message;
}, 10, 3);
```

**Reference**

`$message = apply_filters('fluentform/payment_confirmation_message', $message, $this->getSubmission(), $form);`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 546).

</explain-block>

<explain-block title="fluentform/payment_confirming_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/payment_confirming_message', function ($message, $submission, $this) {
    return $message;
}, 10, 3);
```

**Reference**

`'confirming_text'    => apply_filters('fluentform/payment_confirming_message', __('Confirming Payment, Please wait...', 'fluentformpro'), $submission, $this->getForm()),`

This filter is located in `src/Payments/PaymentMethods/Paystack/PaystackProcessor.php` (line 227).

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

<explain-block title="fluentform/payment_error_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$errorMessage` — see source
- `$value` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_error_message', function ($errorMessage, $value, $form) {
    return $errorMessage;
}, 10, 3);
```

**Reference**

`$errors[] = apply_filters('fluentform/payment_error_message', $errorMessage, null, $form);`

This filter is located in `src/Payments/PaymentMethods/Square/SquareProcessor.php` (line 411).

</explain-block>

<explain-block title="fluentform/payment_failed_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$title` — see source
- `$this` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_failed_title', function ($title, $this, $form) {
    return $title;
}, 10, 3);
```

**Reference**

`$title = apply_filters('fluentform/payment_failed_title', $title, $this->getSubmission(), $form);`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 536).

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

<explain-block title="fluentform/payment_gateway_messages">

**Parameters**

- `$gatewayMessages` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_gateway_messages', function ($gatewayMessages, $form) {
    return $gatewayMessages;
}, 10, 2);
```

**Reference**

`$gatewayMessages = apply_filters('fluentform/payment_gateway_messages', $gatewayMessages, $form);`

This filter is located in `app/Modules/Component/Component.php` (line 1557).

</explain-block>

<explain-block title="fluentform/payment_handler_messages">

**Parameters**

- `$paymentMessages` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_handler_messages', function ($paymentMessages, $form) {
    return $paymentMessages;
}, 10, 2);
```

**Reference**

`$paymentMessages = apply_filters('fluentform/payment_handler_messages', $paymentMessages, $form);`

This filter is located in `app/Modules/Component/Component.php` (line 1526).

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

<explain-block title="fluentform/payment_modal_opening_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/payment_modal_opening_message', function ($message, $submission, $this) {
    return $message;
}, 10, 3);
```

**Reference**

`'message'            => apply_filters('fluentform/payment_modal_opening_message', __('Payment Modal is opening, Please complete the payment', 'fluentformpro'), $submission, $this->getForm()),`

This filter is located in `src/Payments/PaymentMethods/Paystack/PaystackProcessor.php` (line 226).

</explain-block>

<explain-block title="fluentform/payment_pending_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$pendingMessage` — see source
- `$submission` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_pending_message', function ($pendingMessage, $submission, $form) {
    return $pendingMessage;
}, 10, 3);
```

**Reference**

`'error'     => apply_filters('fluentform/payment_pending_message', $pendingMessage, $submission, $form)`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 808).

</explain-block>

<explain-block title="fluentform/payment_pending_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$pendingTitle` — see source
- `$submission` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_pending_title', function ($pendingTitle, $submission, $form) {
    return $pendingTitle;
}, 10, 3);
```

**Reference**

`'title'     => apply_filters('fluentform/payment_pending_title', $pendingTitle, $submission, $form),`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 806).

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

<explain-block title="fluentform/payment_receipt_pre_render_payment_info_list">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$preRender` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/payment_receipt_pre_render_payment_info_list', function ($preRender, $this) {
    return $preRender;
}, 10, 2);
```

**Reference**

`$preRender = apply_filters('fluentform/payment_receipt_pre_render_payment_info_list', $preRender, $this->entry);`

This filter is located in `src/Payments/Classes/PaymentReceipt.php` (line 226).

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

<explain-block title="fluentform/payment_success_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$title` — see source
- `$this` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_success_title', function ($title, $this, $form) {
    return $title;
}, 10, 3);
```

**Reference**

`$title = apply_filters('fluentform/payment_success_title', $title, $this->getSubmission(), $form);`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 533).

</explain-block>

<explain-block title="fluentform/payment_verification_error">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$verificationError` — see source
- `$submission` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/payment_verification_error', function ($verificationError, $submission, $form) {
    return $verificationError;
}, 10, 3);
```

**Reference**

`'errors'      => apply_filters('fluentform/payment_verification_error', $verificationError, $submission, $form),`

This filter is located in `src/Payments/PaymentMethods/Paystack/PaystackProcessor.php` (line 322).

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

<explain-block title="fluentform/paypal_delayed_check_vars">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$delayedCheckVars` — see source

**Usage**

```php
add_filter('fluentform/paypal_delayed_check_vars', function ($delayedCheckVars) {
    return $delayedCheckVars;
}, 10, 1);
```

**Reference**

`wp_localize_script('ff_paypal', 'ff_paypal_vars',apply_filters('fluentform/paypal_delayed_check_vars',  $delayedCheckVars));`

This filter is located in `src/Payments/PaymentMethods/PayPal/PayPalProcessor.php` (line 1322).

</explain-block>

<explain-block title="fluentform/paypal_orders_api_args">

<Badge type="tip" vertical="top" text="Pro" /> <Badge type="warning" vertical="top" text="Added in 6.2.3" />

Filter the payload sent to PayPal's Orders API v2 before the order is created. Use this to inject additional metadata, override line-item descriptions, attach `application_context` overrides, or augment the `purchase_units` array.

**Parameters**

- `$args` (array) Request body about to be POSTed to `/v2/checkout/orders`
- `$submission` (object) Current submission row
- `$form` (object) Form being processed

**Usage**

```php
add_filter('fluentform/paypal_orders_api_args', function ($args, $submission, $form) {
    $args['application_context']['brand_name'] = 'My Brand';
    return $args;
}, 10, 3);
```

**Reference**

`apply_filters('fluentform/paypal_orders_api_args', $args, $submission, $form);`

This filter is located in `FluentFormPro\Payments\PaymentMethods\PayPal\PayPalProcessor`.

</explain-block>

<explain-block title="fluentform/paypal_payment_cancelled_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$cancelledMessage` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/paypal_payment_cancelled_message', function ($cancelledMessage, $submission, $this) {
    return $cancelledMessage;
}, 10, 3);
```

**Reference**

`'error'     => apply_filters('fluentform/paypal_payment_cancelled_message', $cancelledMessage, $submission, $this->form)`

This filter is located in `src/Payments/PaymentMethods/PayPal/PayPalProcessor.php` (line 785).

</explain-block>

<explain-block title="fluentform/paypal_payment_cancelled_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$cancelledTitle` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/paypal_payment_cancelled_title', function ($cancelledTitle, $submission, $this) {
    return $cancelledTitle;
}, 10, 3);
```

**Reference**

`'title'     => apply_filters('fluentform/paypal_payment_cancelled_title', $cancelledTitle, $submission, $this->form),`

This filter is located in `src/Payments/PaymentMethods/PayPal/PayPalProcessor.php` (line 783).

</explain-block>

<explain-block title="fluentform/paypal_payment_processing_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$messageTxt` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/paypal_payment_processing_message', function ($messageTxt, $submission, $this) {
    return $messageTxt;
}, 10, 3);
```

**Reference**

`$messageTxt = apply_filters('fluentform/paypal_payment_processing_message', $messageTxt, $submission, $this->form);`

This filter is located in `src/Payments/PaymentMethods/PayPal/PayPalProcessor.php` (line 747).

</explain-block>

<explain-block title="fluentform/paypal_payment_sandbox_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$sandboxMessage` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/paypal_payment_sandbox_message', function ($sandboxMessage, $submission, $this) {
    return $sandboxMessage;
}, 10, 3);
```

**Reference**

`$message = apply_filters('fluentform/paypal_payment_sandbox_message', $sandboxMessage, $submission, $this->form);`

This filter is located in `src/Payments/PaymentMethods/PayPal/PayPalProcessor.php` (line 753).

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

<explain-block title="fluentform/paypal_pending_message_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$messageTitle` — see source
- `$submission` — see source

**Usage**

```php
add_filter('fluentform/paypal_pending_message_title', function ($messageTitle, $submission) {
    return $messageTitle;
}, 10, 2);
```

**Reference**

`'title'     => apply_filters('fluentform/paypal_pending_message_title', $messageTitle, $submission),`

This filter is located in `src/Payments/PaymentMethods/PayPal/PayPalProcessor.php` (line 771).

</explain-block>

<explain-block title="fluentform/paypal_subscription_api_args">

<Badge type="tip" vertical="top" text="Pro" /> <Badge type="warning" vertical="top" text="Added in 6.2.3" />

Filter the payload sent to PayPal's Subscriptions API before a subscription is created.

**Parameters**

- `$args` (array) Subscription request body
- `$submission` (object) Current submission row
- `$form` (object) Form being processed

**Usage**

```php
add_filter('fluentform/paypal_subscription_api_args', function ($args, $submission, $form) {
    $args['custom_id'] = 'ff-' . $submission->id;
    return $args;
}, 10, 3);
```

**Reference**

`apply_filters('fluentform/paypal_subscription_api_args', $args, $submission, $form);`

This filter is located in `FluentFormPro\Payments\PaymentMethods\PayPal\PayPalProcessor`.

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

<explain-block title="fluentform/paypal_verify_ipn">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/paypal_verify_ipn', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$shouldVerifyIpn = apply_filters('fluentform/paypal_verify_ipn', true);`

This filter is located in `src/Payments/PaymentMethods/PayPal/API/IPN.php` (line 158).

</explain-block>

<explain-block title="fluentform/paystack_amount_mismatch_strict">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/paystack_amount_mismatch_strict', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$strict = apply_filters('fluentform/paystack_amount_mismatch_strict', true);`

This filter is located in `src/Payments/PaymentMethods/Paystack/PaystackProcessor.php` (line 93).

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

This filter is located in FluentFormPro\src\Payments\PaymentMethods\PayPal\API\IPN -> verifyIPN()

</explain-block>

<explain-block title="fluentform/razorpay_amount_mismatch_strict">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/razorpay_amount_mismatch_strict', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$strict = apply_filters('fluentform/razorpay_amount_mismatch_strict', true);`

This filter is located in `src/Payments/PaymentMethods/RazorPay/RazorPayProcessor.php` (line 267).

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

<explain-block title="fluentform/recurring_payment_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$message` — see source
- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/recurring_payment_message', function ($message, $args, $this) {
    return $message;
}, 10, 3);
```

**Reference**

`'title'            => apply_filters('fluentform/recurring_payment_message', __('Subscription Status changed to ', 'fluentformpro') . $newStatus, [], $this->getForm()),`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 1169).

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

<explain-block title="fluentform/single_payment_item_fallback_value">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/single_payment_item_fallback_value', function ($value, $data, $form) {
    return $value;
}, 10, 3);
```

**Reference**

`$productPrice = apply_filters('fluentform/single_payment_item_fallback_value', 0, $data, $form);`

This filter is located in `src/Payments/Components/MultiPaymentComponent.php` (line 153).

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

    return $paymentArgs;
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

<explain-block title="fluentform/stripe_checkout_args_inline">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$intentArgs` — see source
- `$submission` — see source
- `$transaction` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/stripe_checkout_args_inline', function ($intentArgs, $submission, $transaction, $form) {
    return $intentArgs;
}, 10, 4);
```

**Reference**

`$intentArgs = apply_filters('fluentform/stripe_checkout_args_inline', $intentArgs, $submission, $transaction, $form);`

This filter is located in `src/Payments/PaymentMethods/Stripe/StripeInlineProcessor.php` (line 83).

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

<explain-block title="fluentform/stripe_inline_custom_css">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$stripeCustomCss` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/stripe_inline_custom_css', function ($stripeCustomCss, $form) {
    return $stripeCustomCss;
}, 10, 2);
```

**Reference**

`'custom_style'    => apply_filters('fluentform/stripe_inline_custom_css', $stripeCustomCss, $form->id),`

This filter is located in `src/Payments/PaymentHandler.php` (line 238).

</explain-block>

<explain-block title="fluentform/stripe_payment_cancelled_message">

**Parameters**

- `$message` — see source
- `$submission` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/stripe_payment_cancelled_message', function ($message, $submission, $this) {
    return $message;
}, 10, 3);
```

**Reference**

`'error'     => apply_filters('fluentform/stripe_payment_cancelled_message', __('Looks like you have cancelled the payment. Please try again!', 'fluentform'), $submission, $this->form)`

This filter is located in `app/Modules/Payments/PaymentMethods/Stripe/StripeProcessor.php` (line 377).

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

<explain-block title="fluentform/stripe_sca_strict_security">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/stripe_sca_strict_security', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$strictMode = apply_filters('fluentform/stripe_sca_strict_security', true);`

This filter is located in `src/Payments/PaymentMethods/Stripe/StripeInlineProcessor.php` (line 384).

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

<explain-block title="fluentform/stripe_subscription_args_inline">

**Parameters**

- `$subscriptionArgs` — see source
- `$submission` — see source
- `$transaction` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/stripe_subscription_args_inline', function ($subscriptionArgs, $submission, $transaction, $this) {
    return $subscriptionArgs;
}, 10, 4);
```

**Reference**

`$subscriptionArgs = apply_filters('fluentform/stripe_subscription_args_inline', $subscriptionArgs, $submission, $transaction, $this->getForm());`

This filter is located in `app/Modules/Payments/PaymentMethods/Stripe/StripeInlineProcessor.php` (line 139).

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

    return $orderItems;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_order_items', $this->orderItems, $this->submissionData, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getOrderItems($forced = false)

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

    return $subscriptionItems;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_subscription_items', $this->subscriptionItems, $this->submissionData, $this->form);`

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getSubscriptionItems()

</explain-block>

<explain-block title="fluentform/subscription_confirmation_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$note` — see source
- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/subscription_confirmation_message', function ($note, $args, $this) {
    return $note;
}, 10, 3);
```

**Reference**

`$note = apply_filters('fluentform/subscription_confirmation_message', $note, [], $this->getForm());`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 1147).

</explain-block>

<explain-block title="fluentform/subscription_items_">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- See source

**Usage**

```php
add_filter('fluentform/subscription_items_', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$transaction->items = apply_filters('fluentform/subscription_items_'.$transaction->payment_method, [], $transaction);`

This filter is located in `src/Payments/Orders/OrderData.php` (line 184).

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
