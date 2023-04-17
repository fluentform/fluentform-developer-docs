
<explain-block title="fluentform/before_insert_submission">

**Description**

This action runs before a submission is inserting

**Parameters**
- `$insertData` Insert Model
- `$data` Form Data
- `$form` Form Object

**Usage:**
```php 
add_action('fluentform/before_insert_submission', function($insertData, $data, $form) {
   // Do whatever you want before inserting a submission
}, 10, 3);
```

**Reference**

`do_action('fluentform/before_insert_payment_form', $insertData, $formDataRaw, $this->form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/submission_inserted">

**Description**

This action runs after a submission was inserted 

**Parameters**
- `$submissionId` Submission ID
- `$formData` Form Data
- `$form` Form Object

**Usage:**
```php 
add_action('fluentform/submission_inserted', function($submissionId, $formData, $form) {
   // Do whatever you want with the new submission
}, 10, 3);
```

**Reference**

`$this->app->doAction('fluentform/submission_inserted', $insertId, $formData, $form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_submission_confirmation">

**Description**

This action runs when tags have been added to a contact

**Parameters**
- `$submissionId` Submission ID
- `$formData` Form  Data
- `$form` Form Object

**Usage:**
```php 
add_action('fluentform/before_submission_confirmation', function($submissionId, $formData, $form) {
   // Do whatever you want here
}, 10, 3);
```

**Reference**

`do_action('fluentform/before_submission_confirmation', $insertId, $formData, $form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_form_actions_processing">

**Description**

This action fires after form submission and before processing the form’s additional actions. If you want to do any task before form submission

**Parameters**
- `$submissionId` Submission ID
- `$formData` Form  Data
- `$form` Form Object

**Usage:**
```php 
add_action('fluentform/before_form_actions_processing', function($submissionId, $formData, $form){  
     // Do your stuff here
}, 10, 3)
```

**Reference**

`do_action('fluentform/before_form_actions_processing', $insertId, $this->formData, $this->form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

------------------------------------------------

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

`do_action('fluentform/before_insert_payment_form', $insertData, $formDataRaw, $this->form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/submission_inserted_{$form_type}_form">

**Description**

This action runs after a submission was inserted

**Parameters**
- `$submissionId`  (int)    Submission Id
- `$formData` (array)  Form Raw Data
- `$form`     (object) Form Object

**Usage:**
```php 
add_action('fluentform/submission_inserted_{$form_type}_form', function ($submissionId, $formData, $form){
   // Do whatever you want with the new submission base on specifiy form type
}, 10, 3);
```
**Note:** `{$form_type}` is dynamic value. Replace `{$form_type}` with your form type.

**Reference**

`$this->app->doAction('fluentform/submission_inserted', $insertId, $formData, $form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/notify_on_form_submit">

**Description**

This action runs after a submission was inserted

**Parameters**
- `$submissionId`  (int)    Submission Id
- `$formData` (array)  Form Raw Data
- `$form`     (object) Form Object

**Usage:**
```php 
add_action('fluentform/notify_on_form_submit', function ($submissionId, $formData, $form){
   // Do whatever you want with the new submission base on specifiy form type
}, 10, 3);
```

**Reference**

`do_action('fluentform/notify_on_form_submit', $insertId, $this->formData, $this->form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`, `fluentfomrpro/src/Payments/Classes/PaymentAction.php`.

</explain-block>


