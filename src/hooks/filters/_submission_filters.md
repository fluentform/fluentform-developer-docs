<explain-block title="fluentform/insert_response_data">

**Description**

You can modify or format the submitted data using this filter. The returned data will be inserted as submission response.

**Parameters**

- `$formData` (array) Form Data
- `$formId` (int) Form ID
- `$inputConfigs` (array) Form Inputs

**Usage**

```php
add_filter('fluentform/insert_response_data', function ($formData, $formId, $inputConfigs) {
   // Do your stuff here
   
   return $formData;
},10, 3);
```

**Reference**

`apply_filters('fluentform/insert_response_data', $formData, $formId, $inputConfigs);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> prepareInsertData()

</explain-block>

<explain-block title="fluentform/find_submission">

**Description**

You can modify a submission by using this filter.

**Parameters**

- `$submission` (array) Form Submission
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/find_submission', function ($submission, $formId) {
   // Do your stuff here
   
   return $submission;
}, 10, 2);
```

**Reference**

`apply_filters('fluentform/find_submission', $submission, $this->form->id);`

This filter is located in FluentForm\App\Services\Submission\SubmissionService -> find($submissionId)

</explain-block>

<explain-block title="fluentform/truncate_password_values">

You can toggle password truncation before rendering on Submission by using this filter.

**Parameters**

- `$isTurncate` (boolean) Whether Password is truncated
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/truncate_password_values', function ($isTruncate, $formId) {
   // Do your stuff here
   
   return $isTruncate;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/truncate_password_values', true, $formId)`

This filter is located in FluentForm\App\Helpers\Helper -> shouldHidePassword($formId)

</explain-block>

<explain-block title="fluentform/entry_statuses_core">

You can modify or add more submission statuses by using this filter.

**Parameters**

- `statuses` (array) statuses
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/entry_statuses_core', function ($statuses , $form_id) {
   // Do your stuff here
    $statuses = [
        'unread' => 'Unread',
        'read'   => 'Read'
    ];

  return $statuses;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/entry_statuses_core', $data, $form_id);`

This filter is located in FluentForm\App\Helpers\Helper -> getEntryStatuses($form_id = false)

</explain-block>

<explain-block title="fluentform/reportable_inputs">

You can modify or add more inputs for making Submission Report by using this filter.

**Parameters**

- `$reportableInputs` (array) Reportable Inputs

**Usage**

```php
add_filter('fluentform/reportable_inputs', function($reportableInputs) {
   // Do your stuff here

  return $reportableInputs;
}, 10, 1);

```


**Reference**

`apply_filters('fluentform/reportable_inputs', $reportableInputs);`

This filter is located in FluentForm\App\Helpers\Helper -> getReportableInputs()

</explain-block>

<explain-block title="fluentform/subfield_reportable_inputs">

You can modify or add more inputs as subfield for making Submission Report by using this filter.

**Parameters**

- `$subFieldReportableInputs` (array) Reportable Inputs as Subfield

**Usage**

```php
add_filter('fluentform/subfield_reportable_inputs', function ($subFieldReportableInputs) {
    // Do your stuff here

    return $subFieldReportableInputs;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/subfield_reportable_inputs', ['tabular_grid']);`

This filter is located in FluentForm\App\Helpers\Helper -> getSubFieldReportableInputs()

</explain-block>

<explain-block title="fluentform/next_submission">

You can modify next or previous submission using this filter.

**Parameters**

- `$submission` (array) Current Submission
- `$entryId` (string) Form Submission ID
- `$attributes` (array) Submission attributes

**Usage**

```php
add_filter('fluentform/next_submission', function ($submission, $entryId, $attributes) {
   // Do your stuff here

   return $submission;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/next_submission', $submission, $entryId, $attributes);`

This filter is located in FluentForm\App\Models\Form -> findAdjacentSubmission($attributes = []) and FluentForm\App\Models\Form -> findPreviousSubmission($attributes = []) and

</explain-block>

<explain-block title="fluentform/step_string">

This filter returns the input labels for the Submission on the submission page.

**Parameters**

- `$stepText` (string) Active Step Text

**Usage**

```php
add_filter('fluentform/step_string', function ($stepText) {
   // Do your stuff here

   return $stepText;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/step_string', $stepText);`

This filter is located in FluentForm\App\Modules\Component\Component -> getEditorShortcodes()

</explain-block>

<explain-block title="fluentform/get_raw_responses">

This filter returns the raw response of Submission.

**Parameters**

- `$responses` (array) Response Data
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/get_raw_responses', function($responses, $formId) {
   // Do your stuff here

   return $responses;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/get_raw_responses', $response, $formId);`

This filter is located in FluentForm\App\Models\Submission -> paginateEntries($attributes = [])

</explain-block>

<explain-block title="fluentform/export_data">

You can use this filter to modify the exported submission.

**Parameters**

- `$data` (array) Default Values
- `$form` (object) Form Object
- `$exportData` (array) Export Data
- `$inputLabels` (array) Input Labels

**Usage**

```php
add_filter('fluentform/export_data', function($data, $form, $exportData, $inputLabels) {
   // Do your stuff here

   return $data;
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/export_data', $data, $form, $exportData, $inputLabels);`

This filter is located in FluentForm\App\Services\Transfer\TransferService -> exportEntries($args)

</explain-block>

<explain-block title="fluentform/insert_response_data">

If you want to alter the submitted data you can use this filter. The returned data will be inserted into the submission as response.

**Parameters**

- `$formData` (array) Entry Response as key-value pair where input name as key and response as value
- `$formId` (int) Form ID
- `$inputConfigs` (array) Full form inputs fields as 2 dimensional array

**Usage**

```php
add_filter('fluentform/insert_response_data', function($formData, $formId, $inputConfigs) {
   // Do your stuff here

   return $formData;
}, 10, 1);

```
The following would apply to a specific form with id 5:
```php
add_filter('fluentform/insert_response_data', function($formData, $formId, $inputConfigs) {
   // Do your stuff here
   
   if ($formId != 5) {
      return $formData;
   }

   return $formData;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/insert_response_data', $formData, $formId, $inputConfigs);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> prepareInsertData($formData = false)

</explain-block>

<explain-block title="fluentform/disable_ip_logging">

You can toggle the IP logging of form submission using the the filter.

**Parameters**

- `$status` Check whether IP based logging is enabled
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/disable_ip_logging', function($status, $formId) {
   // Do your stuff here

   return $status;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/disable_ip_logging', $disableIpLog, $formId);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> prepareInsertData($formData = false)

</explain-block>

<explain-block title="fluentform/filter_insert_data">

This filter is available just before a submission inserted into the database. But If you want to change response data then you should use fluentform_insert_response_data filter hook.

**Parameters**

- `$response` (array) Submission Data
```php
$response = [
    'form_id'       => 5, // Form ID
    'serial_number' => 1, // Numeric Serial Number
    'response'      => json_encode($response), // The submitted response as JSON
    'source_url'    => $source_url, // source url eg: https://domain.com/contact-form
    'user_id'       => 1, // current user id
    'browser'       => 'Chrome',
    'device'        => 'ipad',
    'ip'            => '127.0.0.1',
    'created_at'    => '2019-12-31 23:12:34',
    'updated_at'    => '2019-12-31 23:12:34'
];
```

**Usage**

```php
add_filter('fluentform/filter_insert_data', function($response) {
   // Do your stuff here

   return $response;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/filter_insert_data', $response);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> prepareInsertData($formData = false)

</explain-block>

<explain-block title="fluentform/max_submission_count">

You can define maximum submission count to prevent malicious attack using this filter.

**Parameters**

- `$count` (int) Form Submission Count
- `$formId` (int) Form ID

**Usage**

The following would apply to a specific form with id 5:
```php
add_filter('fluentform/max_submission_count', function ($count, $formId) {
   if ($formId != 5) {
       return;
   }
   // Do your stuff here

   return $count;
}, 10, 2);

```
**Reference**

`**Reference**

`apply_filters('fluentform/validation_user_registration_errors', $errors, $formData, $this->form, $fields);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> preventMaliciousAttacks()`

</explain-block>

<explain-block title="fluentform/min_submission_interval">

You can define minimum submission interval of a form using this Filter.

**Parameters**

- `$count` (int) Form Submission Interval Count
- `$formId` (int) Form ID

**Usage**

The following would apply to a specific form with id 5:
```php
add_filter('fluentform/min_submission_interval', function($count, $formId) {
   if ($formId != 5) {
       return;
   }
   // Do your stuff here

   return $count;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/min_submission_interval', 30, $this->form->id);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> preventMaliciousAttacks()

</explain-block>

<explain-block title="fluentform/too_many_requests">

You can modify validation message for malicious attack prevention, maximum submission count and minimum submission interval using this filter.

**Parameters**

- `$message` (string) Validation Message
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/too_many_requests', function($message, $formId) {
   // Do your stuff here

   return $message;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/too_many_requests', 'Too Many Requests.', $this->form->id), 'fluentform');`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> preventMaliciousAttacks()

</explain-block>

<explain-block title="fluentform/supported_conditional_fields">

You can add or modify form fields as to support as conditional using this filter.

**Parameters**

- `$supportedConditionalFields` (array) Form Field Names

**Usage**

```php
add_filter('fluentform/supported_conditional_fields', function ($supportedConditionalFields) {
   // Do your stuff here

   return $supportedConditionalFields;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/supported_conditional_fields', $supportedConditionalFields);`

This filter is located in FluentForm\App\Modules\Form\Inputs -> supportedConditionalFields()

</explain-block>

<explain-block title="fluentform/submission_logs">

You can modify submission logs of a submission using this Filter.

**Parameters**

- `$submissionLogs` (array) Submission Logs
- `$submissionId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/submission_logs', function($submissionLogs, $submissionId) {
   // Do your stuff here

   return $submissionLogs;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/submission_logs', $logs, $submissionId);`

This filter is located in FluentForm\App\Services\Logger\Logger -> getSubmissionLogs($submissionId, $attributes = [])

</explain-block>

<explain-block title="fluentform/submission_api_logs">

You can modify submission API logs or integration logs of a submission using this Filter.

**Parameters**

- `$submissionLogs` (array) Submission Logs
- `$submissionId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/submission_api_logs', function($submissionLogs, $submissionId) {
   // Do your stuff here

   return $submissionLogs;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/submission_api_logs', $logs, $submissionId);`

This filter is located in FluentForm\App\Services\Logger\Logger -> getSubmissionLogs($submissionId, $attributes = [])

</explain-block>

<explain-block title="fluentform/all_logs">

You can modify all logs by using this filter.

**Parameters**

- `$logs` (array) Logs

**Usage**

```php
add_filter('fluentform/all_logs', function($logs) {
   // Do your stuff here

   return $logs;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/get_logs', $logs);`

This filter is located in FluentForm\App\Services\Logger\Logger -> get($attributes = [])

</explain-block>

<explain-block title="fluentform/api_all_logs">

You can modify all API logs / integration logs using this filter.

**Parameters**

- `$logs` (array) Logs

**Usage**

```php
add_filter('fluentform/api_all_logs', function($logs) {
   // Do your stuff here

   return $logs;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/api_all_logs', $logs);`

This filter is located in FluentForm\App\Modules\Logger\DataLogger -> getApiLogs()

</explain-block>

<explain-block title="fluentform/get_log_filters">

You can use this filter to modify all the log filters.

**Parameters**

- `$filters` (array) All Log Filters

**Usage**

```php
add_filter('fluentform/get_log_filters', function ($filters) {
    // Do your stuff here
    
    return $filters;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/get_log_filters', ['statuses' => $statuses, 'components' => $components, 'forms' => $forms]);`

This filter is located in FluentForm\App\Services\Logger\Logger -> getFilters($attributes = [])

</explain-block>

<explain-block title="fluentform/show_payment_entries">

You can toggle status of payment submission to show by using this filter.

**Parameters**

- `$status` (boolean) Whether the payment entries status is enabled

**Usage**

```php
add_filter('fluentform/show_payment_entries', function($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/show_payment_entries', false);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> register()

</explain-block>

<explain-block title="fluentform/entry_lists_labels">

This filter returns the input labels for the Submission on the Submission page.

**Parameters**

- `$labels` (array) Form Input Labels
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/entry_lists_labels', function ($labels, $form) {
    // Do your stuff here
    
    return $labels;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/entry_lists_labels', $labels, $form);`

This filter is located in FluentForm\App\Services\Form\FormService -> getInputsAndLabels($formId, $with = ['admin_label', 'raw'])

</explain-block>

<explain-block title="fluentform/all_entry_labels">

This filter returns the input labels for the Submission on the Submission page.

**Parameters**

- `$labels` (array) Form Input Labels
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/all_entry_labels', function ($labels, $formId) {
    // Do your stuff here
    
    return $labels;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/all_entry_labels', $labels, $formId);`

This filter is located in FluentForm\App\Services\Form\FormService -> getInputsAndLabels($formId, $with = ['admin_label', 'raw'])

</explain-block>

<explain-block title="fluentform/all_entry_labels_with_payment">

This filter returns the input labels for the payment submission on the submission page.

**Parameters**

- `$labels` (array) Form Input Labels
- `$isActive` (boolean) Whether Payment is active
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/all_entry_labels_with_payment', function ($labels, $isActive, $form) {
    // Do your stuff here
    
    return $labels;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/all_entry_labels_with_payment',  $labels, false, $form);`

This filter is located in FluentForm\App\Services\Form\FormService -> getInputsAndLabels($formId, $with = ['admin_label', 'raw'])

</explain-block>

<explain-block title="fluentform/get_logs">

You can use this filter to get all the logs.

**Parameters**

- `$logs` (array) All Logs

**Usage**

```php
add_filter('fluentform/get_logs', function ($logs) {
    // Do your stuff here
    
    return $logs;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/get_logs', $logs);`

This filter is located in FluentForm\App\Services\Logger\Logger -> get($attributes = [])

</explain-block>

<explain-block title="fluentform/get_log_filters">

You can use this filter to modify all the log filters.

**Parameters**

- `$filters` (array) All Log Filters

**Usage**

```php
add_filter('fluentform/get_log_filters', function ($filters) {
    // Do your stuff here
    
    return $filters;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/get_log_filters', ['statuses' => $statuses, 'components' => $components, 'forms' => $forms]);`

This filter is located in FluentForm\App\Services\Logger\Logger -> getFilters($attributes = [])

</explain-block>

<explain-block title="fluentform/is_handling_submission">

You can use this filter to handle async submission request.

**Parameters**

- `$status` (boolean) Whether handle submission is enabled

**Usage**

```php
add_filter('fluentform/is_handling_submission', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/is_handling_submission', $status);`

This filter is located in FluentForm\boot\globals.php -> fluentFormIsHandlingSubmission()

</explain-block>

<explain-block title="fluentform/entries_vars">

You can use this filter to modify entries variables which has been localized.

**Parameters**

- `$data` (array) Entry Variables
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/entries_vars', function ($data, $form) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```
```php
$data = [
    'all_forms_url'       => admin_url('admin.php?page=fluent_forms'),
    'forms'               => $forms,
    'form_id'             => $form->id,
    'enabled_auto_delete' => Helper::isEntryAutoDeleteEnabled($form_id),
    'current_form_title'  => $form->title,
    'entry_statuses'      => Helper::getEntryStatuses($form_id),
    'entries_url_base'    => admin_url('admin.php?page=fluent_forms&route=entries&form_id='),
    'no_found_text'       => __('Sorry! No entries found. All your entries will be shown here once you start getting form submissions', 'fluentform'),
    'has_pro'             => defined('FLUENTFORMPRO'),
    'printStyles'         => [fluentformMix('css/settings_global.css')],
    'email_notifications' => $formattedNotification,
    'available_countries' => getFluentFormCountryList(),
    'upgrade_url'      => fluentform_upgrade_url(),
    'form_entries_str' => TranslationString::getEntriesI18n(),
];
```

**Reference**

`apply_filters('fluentform/entries_vars', $data, $form);`

This filter is located in FluentForm\app\Modules\Entries\Entries -> renderEntries($form_id)

</explain-block>

<explain-block title="fluentform/submission_labels">

You can use this filter to modify Submission labels.

**Parameters**

- `$labels` (array) Label Names
- `$submission` (array) Current Form Submission
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/submission_labels', function ($labels, $submission, $form) {
    // Do your stuff here
    
    return $labels;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_labels', $resources['labels'], $submission, $submission->form);`

This filter is located in FluentForm\app\Services\Form\FormServices -> getDisabledComponents()

</explain-block>

<explain-block title="fluentform/submission_vars">

You can modify submission variables on double optin confirmation by using this filter.

**Parameters**

- `$submissionVars` (array) Submission Variable
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/submission_vars', function ($submissionVars, $formId) {
    // Do your stuff here
    
    return $submissionVars;
}, 10, 2);

```
```php
$submissionVars = [
    'settings'        => $settings,
    'title'           => 'Submission Confirmed - ' . $form->title,
    'form_id'         => $formId,
    'entry'           => $entry,
    'form'            => $form,
    'bg_color'        => $settings['custom_color'],
    'landing_content' => $message,
    'has_header'      => false,
    'isEmbeded'       => !!ArrayHelper::get($_GET, 'embedded')
];
```

**Reference**

`apply_filters('fluentform/submission_vars', $submissionVars, $formId);`

This filter is located in FluentFormPro\src\classes\DoubleOption -> confirmSubmission($data)

</explain-block>

<explain-block title="fluentform/step_form_entry_vars">

You can modify step form submission variables by using this filter.

**Parameters**

- `$entryVars` (array) Step Form Submission Variables
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/step_form_entry_vars', function ($entryVars, $form) {
    // Do your stuff here
    
    return $entryVars;
}, 10, 2);

```
```php
$entryVars = [
    'form_id' => $form->id,
    'current_form_title' => $form->title,
    'has_pro' => defined('FLUENTFORMPRO'),
    'all_forms_url' => admin_url('admin.php?page=fluent_forms'),
    'printStyles' => [fluentformMix('css/settings_global.css')],
    'entries_url_base' => admin_url('admin.php?page=fluent_forms&route=msformentries&form_id='),
    'available_countries' => getFluentFormCountryList(),
    'no_found_text' => __('Sorry! No entries found. All your entries will be shown here once you start getting form submissions', 'fluentformpro')
];
```

**Reference**

`apply_filters('fluentform/step_form_entry_vars', $entryVars, $form);`

This filter is located in FluentFormPro\src\classes\StepFormEntries -> renderEntries($form_id)

</explain-block>

<explain-block title="fluentform/all_entries">

You can modify all submissions using the filter.

**Parameters**

- `$submission` (array) Form Submission

**Usage**

```php
add_filter('fluentform/all_entries', function ($submission) {
    // Do your stuff here
    
    return $submission;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/all_entries', $entries['submissions']);`

This filter is located in FluentFormPro\src\classes\StepFormEntries -> getEntries()

</explain-block>

<explain-block title="fluentform/single_response_data">

You can modify submission of a certain form using this filter.

**Parameters**

- `$submission` (array) Form Submission
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/single_response_data', function ($submission, $formId) {
    // Do your stuff here
    
    return $submission;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/single_response_data', $submission, $this->formId);`

This filter is located in FluentFormPro\src\classes\StepFormEntries -> getstepFormEntry()

</explain-block>

<explain-block title="fluentform/single_response_input_fields">

You can modify inputs of a submission under a certain form using this filter.

**Parameters**

- `$inputs` (array) Form Inputs
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/single_response_input_fields', function ($inputs, $formId) {
    // Do your stuff here
    
    return $inputs;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/single_response_input_fields', $formMeta['inputs'], $this->formId);`

This filter is located in FluentFormPro\src\classes\StepFormEntries -> getstepFormEntry()

</explain-block>

<explain-block title="fluentform/single_response_input_labels">

You can modify input labels of a submission under a certain form using this filter.

**Parameters**

- `$labels` (array) Form Input Labels
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/single_response_input_labels', function ($labels, $formId) {
    // Do your stuff here
    
    return $labels;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/single_response_input_labels', $formMeta['labels'], $this->formId);`

This filter is located in FluentFormPro\src\classes\StepFormEntries -> getstepFormEntry()

</explain-block>

<explain-block title="fluentform/submission_cards">

You can use this filter to modify submission page cards.

**Parameters**

- `$cards` (array) Submission Cards
- `$resources` (array) Submission Resources
- `$submission` (array) Submission

**Usage**

```php
add_filter('fluentform/submission_cards', function ($cards, $resources, $submission) {
    // Do your stuff here
    
    return $cards;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_cards', $cards, $resources, $submission);`

This filter is located in Fluentform\app\services\Submission\SubmissionService -> resources($attributes)

</explain-block>

<explain-block title="fluentform/submission_order_data">

You can use this filter to toggle submission payment order.

**Parameters**

- `$order_data` (boolean) Whether submission payment order is available
- `$submission` (array) Submission
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/submission_order_data', function ($order_data, $submission, $form) {
    // Do your stuff here
    
    return $order_data;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submission_order_data', $order_data, $submission, $form);`

This filter is located in Fluentform\app\services\Submission\SubmissionService -> _getEntry()

</explain-block>

<explain-block title="fluentform/auto_read_submission">

You can use this filter to toggle submission status to read automatically.

**Parameters**

- `$autoRead` (boolean) Whether change submission status to read
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/auto_read_submission', function ($autoRead, $form) {
    // Do your stuff here
    
    return $autoRead;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/auto_read', $autoRead, $form);`

This filter is located in Fluentform\app\Modules\Entries\Entries -> _getEntry()

</explain-block>

<explain-block title="fluentform/auto_read_submission">

You can use this filter to toggle submission status to read automatically.

**Parameters**

- `$autoRead` (boolean) Whether change submission status to read
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/auto_read_submission', function ($autoRead, $form) {
    // Do your stuff here
    
    return $autoRead;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/auto_read_submission', $autoRead, $form);`

This filter is located in Fluentform\app\Services\Submission\SubmissionService -> find($submissionId)

</explain-block>

<explain-block title="fluentform/submissions_widgets">

You can use this filter to modify submission widgets.

**Parameters**

- `$widgets` (array) Submission Widgets
- `$resources` (array) Submission Resources
- `$submission` (array) Submission

**Usage**

```php
add_filter('fluentform/submissions_widgets', function ($widgets, $resources, $submission) {
    // Do your stuff here
    
    return $widgets;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/submissions_widgets', $widgets, $resources, $submission);`

This filter is located in Fluentform\app\Services\Submission\SubmissionService -> resources($attributes)

</explain-block>

<explain-block title="fluentform/submission_resources">

You can use this filter to modify all submission resources.

**Parameters**

- `$resources` (array) Submission Resources

**Usage**

```php
add_filter('fluentform/submission_resources', function ($resources) {
    // Do your stuff here
    
    return $resources;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/submission_resources', $resources);`

This filter is located in Fluentform\app\Services\Submission\SubmissionService -> resources($attributes)

</explain-block>

<explain-block title="fluentform/format_{$element}_response_as_html">

This filter allows you to determine whether a specific form element's response should be formatted as HTML. The `{$element}` in the filter name is dynamically replaced with the actual element type (supported elements: `select`, `input_checkbox`, `input_radio`, `address`, `select_country`, `gdpr_agreement`, `terms_and_condition`, `dynamic_field` and `multi_payment_component`).

**Parameters**

- `$isHtml` (boolean) Whether to format the response as HTML
- `$response` (mixed) The form field response value
- `$field` (array) The form field configuration

**Usage**

```php
// Example for select element
add_filter('fluentform/format_select_response_as_html', function($isHtml, $response, $field) {
    // Always format select fields as HTML
    return true;
}, 10, 3);

// Example for checkbox element
add_filter('fluentform/format_input_checkbox_response_as_html', function($isHtml, $response, $field) {
    // Custom logic to determine HTML formatting
    return $isHtml;
}, 10, 3);
```

**Reference**

`apply_filters("fluentform/format_{$element}_response_as_html", $isHtml, $response, $field);`

This filter is located in `FluentForm\app\Hooks\filters.php` within the response rendering filter for various elements.

</explain-block>
