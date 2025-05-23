
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

`do_action('fluentform/before_insert_submission', $insertData, $formDataRaw, $this->form);`

This action is located in `fluentform/app/Services/Form/SubmissionHandlerService.php`

</explain-block>


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

This action runs after all the actions are completed regarding the form submission and before the submission confirmation message.

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

<explain-block title="fluentform/entry_confirmation">

**Description**

This action runs during the confirmation process of double opt-in. Using this action fluent form confirms the subscription of double optin. You can also use this to run your script during the confirmation process.

**Parameters**
- `$_REQUEST` (array)  Global PHP Request

**Usage:**
```php
add_action('fluentform/entry_confirmation', function($_REQUEST) {
   // Do whatever you want here
}, 10);
```

**Reference**

`do_action('fluentform/entry_confirmation', $_REQUEST);`

This action is located in `fluentformpor/src/classes/SharePage/SharePage.php`

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

---------------------------------------------------

<explain-block title="fluentform/submission_user_changed">

**Description**

This action runs after a submission user changed

**Parameters**
- `$submission`  (object)   Submission
- `$user`     (object)   User

**Usage:**
```php
add_action('fluentform/submission_user_changed', function ($submission, $user){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/submission_user_changed', $submission, $user);`

This action is located in `fluentform/app/Services/Submission/SubmissionService.php -> updateSubmissionUser()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/before_deleting_entries">

**Description**

This action runs before deleting a submission.

**Parameters**
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php
add_action('fluentform/before_deleting_entries', function ($submissionIds, $formId){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/before_deleting_entries', $submissionIds, $formId);`

This action is located in `fluentform/app/Services/Submission/SubmissionService.php -> deleteEntries()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/after_deleting_submissions">

**Description**

This action runs after deleting a submission.

**Parameters**
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php
add_action('fluentform/after_deleting_submissions', function ($submissionIds, $formId){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/after_deleting_submissions', $submissionIds, $formId);`

This action is located in `fluentform/app/Services/Submission/SubmissionService.php -> deleteEntries()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/submission_note_stored">

**Description**

This action runs after submission note saved.

**Parameters**
- `$submissionMetaId`  (int)   Submission meta ID
- `$submissionMeta`     (object)   Submission meta

**Usage:**
```php
add_action('fluentform/submission_note_stored', function ($submissionMetaId, $submissionMeta){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/submission_note_stored', $submissionMeta->id, $submissionMeta);`

This action is located in `fluentform/app/Services/Submission/SubmissionService.php -> storeNote()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/log_data">

**Description**

This action for adding log on FluentForm log table.  You should do_action and pass log data for adding log.

**Usage:**
```php
do_action('fluentform/log_data', [
    'parent_source_id' => $submission->form_id,
    'source_type'      => 'submission_item',
    'source_id'        => $submission->id,
    'component'        => 'My Log',
    'status'           => 'info',
    'title'            => 'Log title',
    'description'      => 'Log Description',
]);
```

**Data**
- `parent_source_id` (int) Form ID
- `source_type` (string) Source type
- `source_id` (int) Submission ID
- `component` (sort string) Component title
- `status` (string) Status
  - `info` For informative log
  - `pending` For pending log
  - `error` For error log
  - `success` For success log
  - `failed` For failed log
- `title` (string) Message title
- `description` (string) Message details

This action is added in `fluentform/app/Hooks/actions.php`.

</explain-block>


