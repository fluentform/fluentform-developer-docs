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


