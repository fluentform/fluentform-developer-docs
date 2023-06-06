
<explain-block title="fluentform/partial_submission_added">

**Description**

This action runs after partial submission saved.

**Parameters**
- `$formData` (array)  Form raw data
- `$response` (array)  Inserted data
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/partial_submission_added', function ($formData, $response, $submissionId, $formId){
   // Do your stuff
}, 10, 4);
```

**Reference**

`do_action('fluentform/partial_submission_added', $formData['data'], $response, $insertId, $formId);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> saveState()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/saved_progress_submission_added">

**Description**

This action runs when partial submission have no steps.

**Parameters**
- `$formData` (array)  Form raw data
- `$response` (array)  Inserted data
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/saved_progress_submission_added', function ($formData, $response, $submissionId, $formId){
   // Do your stuff
}, 10, 4);
```

**Reference**

`do_action('fluentform/saved_progress_submission_added', $formData['data'], $response, $insertId, $formId);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> saveState()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/partial_submission_step_completed">

**Description**

This action runs when partial submission steps complete.

**Parameters**
- `$activeStep` (array)  Active Step
- `$formData` (array)  Form raw data
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/partial_submission_step_completed', function ($activeStep, $formData, $submissionId, $formId){
   // Do your stuff
}, 10, 4);
```

**Reference**

`do_action('fluentform/partial_submission_step_completed', $formData['active_step'], $formData['data'], $insertId, $formId);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> saveState()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/partial_submission_updated">

**Description**

This action runs after partial submission steps complete.

**Parameters**
- `$formData` (array)  Form raw data
- `$activeStep` (array)  Active Step
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/partial_submission_updated', function ($formData, $activeStep, $submissionId, $formId){
   // Do your stuff
}, 10, 4);
```

**Reference**

`do_action('fluentform/partial_submission_updated', $formData['data'], $formData['active_step'], $insertId, $formId);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> saveState()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/saved_progress_submission_updated">

**Description**

This action runs when partial submission has no active step is.

**Parameters**
- `$formData` (array)  Form raw data
- `$activeStep` (array)  Active Step
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/saved_progress_submission_updated', function ($formData, $activeStep, $submissionId, $formId){
   // Do your stuff
}, 10, 4);
```

**Reference**

`do_action('fluentform/saved_progress_submission_updated', $formData['data'], $formData['active_step'], $insertId, $formId);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> saveState()`.

</explain-block>


---------------------------------------------------

<explain-block title="fluentform/before_partial_entry_deleted">

**Description**

This action runs before partial submission deleted.

**Parameters**
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/before_partial_entry_deleted', function ($submissionId, $formId){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/before_partial_entry_deleted', $formData['data'], $formData['active_step'], $insertId, $formId);`

This action is located in `fluentformpro/src/classes/StepFormEntries.php -> deleteEntryById()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/after_partial_entry_deleted">

**Description**

This action runs after partial submission deleted.

**Parameters**
- `$submissionId`  (int)   Submission ID
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/after_partial_entry_deleted', function ($submissionId, $formId){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/after_partial_entry_deleted', $formData['data'], $formData['active_step'], $insertId, $formId);`

This action is located in `fluentformpro/src/classes/StepFormEntries.php -> deleteEntryById()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/saved_progress_submission_deleted">

**Description**

This action runs after partial state deleted.

**Parameters**
- `$draft` (array)  Form raw data
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/saved_progress_submission_deleted', function ($draft, $formId){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/saved_progress_submission_deleted', $draft, $form->id);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> deleteSavedStateDraft()`.

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/partial_submission_deleted">

**Description**

This action runs after partial state deleted.

**Parameters**
- `$draft` (array)  Form raw data
- `$formId`     (int)   Form ID

**Usage:**
```php 
add_action('fluentform/partial_submission_deleted', function ($draft, $formId){
   // Do your stuff
}, 10, 2);
```

**Reference**

`do_action('fluentform/partial_submission_deleted', $draft, $form->id);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> deleteSavedStateDraft()`.

</explain-block>

------------------------------------------

<explain-block title="fluentform/email_form_resume_link_before_sent">

**Description**

This action fire before sending email resume link for partial submission.

**Parameters**
- `$emailFormat` (array) Email Format
- `$submittedData` (array) Partial Submitted Data
- `$requestData` (array) Request Data
- `$form` (object) Form

**Usage:**
```php 
add_action('fluentform/email_form_resume_link_before_sent', function($emailFormat, $submittedData, $requestData, $form) {
   // Do your stuff here
}, 10, 4);
```

**Reference**

`do_action('fluentform/email_form_resume_link_before_sent', $emailFormat, $submittedData, $requestData, $form);`

This action is located in `fluentformpro/src/classes/DraftSubmissionsManager.php -> emailProgressLink()`

</explain-block>
