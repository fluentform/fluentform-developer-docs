
<explain-block title="fluentform/rendering_payment_form">

**Description**

This action runs when rendering payment form.

**Parameters**
- `$form` (object) Payment Form

**Usage**
```php 
add_action('fluentform/rendering_payment_form', function($form) {
   // Do your stuff when rendering payment form
}, 10, 1);
```

**Reference**

`do_action('fluentform/rendering_payment_form', $form);`

This action is located in `fluentform/app/Modules/Component/Component.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/before_insert_payment_form">

**Description**

If the form has payment then this action will be fired before submission. You can use this to do your payment related custom tasks.

**Parameters**
- `$insertData` Form response data
- `$formData` Form Raw Data
- `$form` Form Object

**Usage:**
```php 
add_action('fluentform/before_insert_payment_form', function ($insertData, $formRawData, $form){
   // Do your stuff here
}, 10, 3);
```

**Reference**

`$this->app->doAction('fluentform/submission_inserted_' . $form->type . '_form', $insertId, $formData, $form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/render_payment_entries">

**Description**

This action runs before rendering the payment entries.

**Usage:**
```php 
add_action('fluentform/render_payment_entries', function (){
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/render_payment_entries');`

This action is located in `fluentform/app/Modules/Registerer/Menu.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/rendering_payment_method_{$methodName}">

**Description**

This action runs when rendering the payment active methods.

**Parameters**
- `$paymentMethod` - (string) Current Payment Method
- `$data` - (array)  Current Payment Element
- `$form` - (object) Form

**Usage:**
```php 
add_action('fluentform/rendering_payment_method_{$methodName}', function ($paymentMethod, $data, $form){
   // Do your stuff here
}, 10, 3);
```

**Note:** `{$methodName}` is dynamic method name. Replace `{$methodName}` with Fluent Forms payment methods name.

**Reference**

`do_action('fluentform/rendering_payment_method_' . $methodName, $activatedMethod, $data, $form);`

This action is located in `fluentformpro/src/Payments/Components/PaymentMethods.php`, `fluentform/app/Services/FluentConversational/Classes/Converter/Converter.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/payment_frameless_{$paymentMethod}">

**Description**

This action runs before rendering the payment redirect handler page.

**Parameters**
- `$data` - (array) Payment Data

**Usage:**
```php 
add_action('fluentform/payment_frameless_{$paymentMethod}', function ($data){
   // Do your stuff here
}, 10, 1);
```

**Note:** `{$paymentMethod}` is dynamic method name. Replace `{$paymentMethod}` with Fluent Forms payment methods name.

**Reference**

`do_action('fluentform/payment_frameless_' . $paymentMethod, $data);`

This action is located in `fluentformpro/src/Payments/PaymentHandler.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/payment_method_render_{$paymentMethod}">

**Description**

This action runs if the form has single payment method, then the payment method is rendered using this method.

**Parameters**
- `$methodElement` (array) Payment Method Data
- `$form` (object) Form Object

**Usage:**
```php 
add_action('fluentform/payment_method_render_{$paymentMethod}', function ($methodElement, $data){
   // Do your stuff here
}, 10, 2);
```

**Note:** `{$paymentMethod}` is dynamic method name. Replace `{$paymentMethod}` with Fluent Forms payment methods name.

**Reference**

`do_action('fluentform/payment_method_render_' . $paymentMethod, $methodElement, $data);`

This action is located in `fluentformpro/src/Payments/Components/PaymentMethods.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/payment_refunded">

**Description**

This action runs after a successful refund on every payment method. You can hook into this and get the refund data.

**Parameters**
- `$refund` (array)  Refund Data
- `$form_id` (int) Form ID

**Usage:**
```php 
add_action('fluentform/payment_refunded', function($refund, $form_id) {
   // Do your stuff here
}, 10, 2);
```

**Note:** `{$paymentMethod}` is dynamic method name. Replace `{$paymentMethod}` with Fluent Forms payment methods name.

**Reference**

`do_action('fluentform_payment_refunded', $refund, $refund->form_id);`

This action is located in `fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/ipn_paypal_action_{$txn_type}">

**Description**

This action runs if the PayPal ipn verification is failed . You can hook into this and get the error data.

**Parameters**
- `$encoded_data_array` (array) Encoded Data
- `$submissionId` (int) Submission ID
- `$submission` (object) Submission Object
- `$ipnVerified` (boolean) Ipn Verification

**Usage:**
```php 
add_action('fluentform/ipn_paypal_action_{$txn_type}', function($encoded_data_array, $submissionId, $submission, $ipnVerified) {
   // Do your stuff here
}, 10, 4);
```

**Note:** `{$txn_type}` is dynamic method name. Replace `{$txn_type}` with payment txn type.

**Reference**

`do_action('fluentform/ipn_paypal_action_' . $encoded_data_array['txn_type'], $encoded_data_array, $submissionId, $submission, $ipnVerified);`

This action is located in `fluentformpro/src/Payments/PaymentMethods/PayPal/API/IPN.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/ipn_paypal_action_web_accept">

**Description**

This action runs during the web accept PayPal ipn.

**Parameters**
- `$encoded_data_array` (array) Encoded Data
- `$submissionId` (int) Submission ID
- `$submission` (object) Submission Object
- `$ipnVerified` (boolean) Ipn Verification

**Usage:**
```php 
add_action('fluentform/ipn_paypal_action_web_accept', function($encoded_data_array, $submissionId, $submission, $ipnVerified) {
   // Do your stuff here
}, 10, 4);
```

**Reference**

`do_action('fluentform/ipn_paypal_action_web_accept', $encoded_data_array, $submissionId, $submission, $ipnVerified);`

This action is located in `fluentformpro/src/Payments/PaymentMethods/PayPal/API/IPN.php`

</explain-block>





