<explain-block title="fluentform/global_notification_active_types">

This filter returns the active notification feeds for the current form ID.

**Parameters**

- `$types` (array) Active Feeds

**Usage**

```php
add_filter('fluentform/global_notification_active_types', function ($types) {
   // Do your stuff here
   $types['notifications'] = 'email_notifications';
   return $types;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/global_notification_active_types', [], $form->id);`

This filter is located in FluentForm\App\Hooks\Handlers\GlobalNotificationHandler -> globalNotify()

</explain-block>

<explain-block title="'fluentform/notifying_async_' . $integrationKey">

This filter checks if the integration is asynchronous or not. If you are working on an integration you can return false to run the integration instantly.

**Parameters**

- `$status` (boolean) True / False
- `$formId` (int) Form Id

**Usage**

```php
add_filter('fluentform/notifying_async_' . $integrationKey, function ($status, $formId) {
   // Do your stuff here
   
   return $status; 
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/notifying_async_' . $integrationKey, true, $form->id);`

This filter is located in FluentForm\App\Hooks\Handlers\GlobalNotificationHandler -> globalNotify()

</explain-block>

<explain-block title="fluentform/api_success_log">

This filter checks the logging of the successful API calls for development environment status.

**Parameters**

- `$isDev` (boolean) Checks whether development environment is Dev or Production
- `$form` (object) Form Object
- `$feed` (array) Current Feed object

**Usage**

```php
add_filter('fluentform/api_success_log', function ($isDev, $form, $feed) {
   // Do your stuff here
   return $isDev;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/api_success_log', $isDev, $form, $feed);`

This filter is located in FluentForm\App\Hooks\actions.php

</explain-block>

<explain-block title="fluentform/api_failed_log">

This filter checks the logging of the failed API calls for development environment status.

**Parameters**

- `$isDev` (boolean) Checks whether development environment is Dev or Production
- `$form` (object) Form
- `$feed` (array) Current Feed

**Usage**

```php
add_filter('fluentform/api_failed_log', function($isDev, $form, $feed) {
   // Do your stuff here
   return $isDev;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/api_failed_log', $isDev, $form, $feed);`

This filter is located in FluentForm\App\Hooks\actions.php

</explain-block>

<explain-block title="'fluentform/get_integration_merge_fields_' . $integrationName">

This filter return all merged fields for integration of the current form.

**Parameters**

- `$list` (boolean) Checks whether list is True or False
- `$listId` (string) Get Integration List ID
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/get_integration_merge_fields_' . $integrationName, function ($list, $listId, $formId) {
   // Do your stuff here
   $mergedFields = $this->findMergeFields($listId);
   $fields = [];

   foreach ($mergedFields as $merged_field) {
       $fields[$merged_field['tag']] = $merged_field['name'];
   }

   return $fields;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/get_integration_merge_fields_' . $integrationName, false, $listId, $formId);`

This filter is located in FluentForm\App\Https\Controllers\FormIntegrationController -> integrationListComponent()

</explain-block>

<explain-block title="fluentform/validation_user_registration_errors">

This filter return user registration validation error before submission.

**Parameters**

- `$errors` (array) Errors
- `$formData` (array) Form Data
- `$form` (Object) Form Object
- `$fields` (array) Form Fields

**Usage**

```php
add_filter('fluentform/validation_user_registration_errors', function($errors, $formData, $form, $fields) {
   // Do your stuff here

   return $errors;
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/validation_user_registration_errors', $errors, $formData, $this->form, $fields);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateSubmission(&$fields, &$formData)

</explain-block>

<explain-block title="fluentform/validation_user_update_errors">

This filter return user update validation error before submission.

**Parameters**

- `$errors` (array) Errors
- `$formData` (array) Form Data
- `$form` (Object) Form Object
- `$fields` (array) Form Fields

**Usage**

```php
add_filter('fluentform/validation_user_update_errors', function($errors, $formData, $form, $fields) {
   // Do your stuff here

   return $errors;
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/validation_user_update_errors', $errors, $formData, $this->form, $fields);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateSubmission(&$fields, &$formData)

</explain-block>

<explain-block title="fluentform/mailchimp_keep_existing_interests">

You can modify double optin status to keep existing interest in mailchimp using the filter.

**Parameters**

- `$status` (string) Whether the Double Optin is pending or subscribed
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/mailchimp_keep_existing_interests', function ($status, $formId) {
   // Do your stuff here

   return $status;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/mailchimp_keep_existing_interests', $status, $form->id);`

This filter is located in FluentForm\App\Services\Integration\MailChimp\MailChimpSubscriber -> subscribe($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="fluentform/mailchimp_keep_existing_tags">

You can modify to keep existing tags in mailchimp using the filter.

**Parameters**

- `$status` (boolean) Whether the status is true or false
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/mailchimp_keep_existing_tags', function ($status, $formId) {
   // Do your stuff here

   return $status;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/mailchimp_keep_existing_tags', true, $form->id);`

This filter is located in FluentForm\App\Services\Integration\MailChimp\MailChimpSubscriber -> subscribe($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="fluentform/mailchimp_api_timeout">

This filter allows you to modify the timeout value for MailChimp API requests.

**Parameters**

- `$timeout` (int) The default timeout value in seconds

**Usage**

```php
add_filter('fluentform/mailchimp_api_timeout', function ($timeout) {
   // Do your stuff here
   // Increase timeout for slow connections
   return 60; // 60 seconds
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/mailchimp_api_timeout', $timeout);`

This filter is located in `FluentForm\App\Services\Integrations\MailChimp\MailChimp` -> `makeRequest()`

</explain-block>

<explain-block title="'fluentform/get_integration_values_' . $integrationName">

You can modify integration mapped values and settings using the filter.

**Parameters**

- `$settings` (array) Integration Settings
- `$feed` (array) Mapped Form Data
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/get_integration_values_' . $integrationName, function ($settings, $feed, $formId) {
   // Do your stuff here

   return $feed;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/get_integration_values_' . $integrationName, $settings, $feed, $formId);`

This filter is located in FluentForm\App\Services\Integrations\GlobalIntegrationManager -> getIntegrationSettings()

</explain-block>

<explain-block title="'fluentform/get_integration_defaults_' . $integrationName">

You can tweak integration default settings using the filter.

**Parameters**

- `$settings` (array) Integration Settings
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/get_integration_values_' . $integrationName, function ($settings, $formId) {
   // Do your stuff here

   return $settings;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/get_integration_defaults_' . $integrationName, $settings, $formId);`

This filter is located in FluentForm\App\Services\Integrations\GlobalIntegrationManager -> getIntegrationSettings()

</explain-block>

<explain-block title="'fluentform/save_integration_value_' . $integrationName">

You can modify integration mapped form value before saving it to the database using the filter.

**Parameters**

- `$integration` (array) Integration Settings
- `$integrationId` (int) Integration ID
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/save_integration_value_' . $integrationName, function ($integration, $integrationId, $formId) {
   // Do your stuff here

   return $integration;
}, 10, 3);

```
```php 
add_filter('fluentform/save_integration_value_mailchimp', [$this, 'sanitizeSettings'], 10, 3);

public function sanitizeSettings($integration, $integrationId, $formId)
{
    if (fluentformCanUnfilteredHTML()) {
        return $integration;
    }
    $sanitizeMap = [
        'status'                 => 'rest_sanitize_boolean',
        'enabled'                => 'rest_sanitize_boolean',
        'type'                   => 'sanitize_text_field',
        'list_id'                => 'sanitize_text_field',
        'list_name'              => 'sanitize_text_field',
        'name'                   => 'sanitize_text_field',
        'tags'                   => 'sanitize_text_field',
        'tag_ids_selection_type' => 'sanitize_text_field',
        'fieldEmailAddress'      => 'sanitize_text_field',
        'doubleOptIn'            => 'rest_sanitize_bolean',
        'resubscribe'            => 'rest_sanitize_bolean',
        'note'                   => 'sanitize_text_field',
    ];
    
    return fluentform_backend_sanitizer($integration, $sanitizeMap);
}
```

**Reference**

`apply_filters('fluentform/save_integration_value_' . $integrationName, $integration, $integrationId, $formId);`

This filter is located in FluentForm\App\Services\Integrations\GlobalIntegrationManager -> saveIntegrationSettings()

</explain-block>

<explain-block title="'fluentform/save_integration_value_' . $integrationName">

You can modify integration settings value before saving it to the database using the filter.

**Parameters**

- `$data` (array) Integration Settings
- `$integrationId` (int) Integration ID

**Usage**

```php
add_filter('fluentform/save_integration_value_' . $integrationName, function ($data, $integrationId) {
   // Do your stuff here

   return $data;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/save_integration_value_' . $integrationName, $data, $integrationId);`

This filter is located in FluentForm\App\Services\Integrations\GlobalIntegrationManager -> saveIntegrationSettings()

</explain-block>

<explain-block title="fluentform/global_notification_types">

You can use this filter to modify all global notifications keys.

**Parameters**

- `$notificationKeys` (array) Global Notification Keys
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/global_notification_types', function ($notificationKeys, $formId) {
    // Do your stuff here
    
    return $notificationKeys;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/global_notification_types', $notificationKeys, $formId);`

This filter is located in FluentForm\App\Services\Integration\GlobalIntegrationManager -> getAllFormIntegrations()

</explain-block>

<explain-block title="'fluentform/global_notification_feed_' . $feed->meta_key">

You can use this filter to modify global notifications feed data.

**Parameters**

- `$feedData` (array) Mapped Form Data
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/global_notification_feed_' . $feed->meta_key, function ($feedData, $formId) {
    // Do your stuff here
    
    return $feedData;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/global_notification_feed_' . $feed->meta_key, $feedData, $formId);`

This filter is located in FluentForm\App\Services\Integration\GlobalIntegrationManager -> getNotificationFeeds($formId)

</explain-block>

<explain-block title="fluentform/get_available_form_integrations">

You can use this filter to modify all available integrations.

**Parameters**

- `$availableIntegrations` (array) All Available Integrations
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/get_available_form_integrations', function ($availableIntegrations, $formId) {
    // Do your stuff here
    
    return $availableIntegrations;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/get_available_form_integrations', $availableIntegrations, $formId);`

This filter is located in FluentForm\App\Services\Integration\GlobalIntegrationManager -> getAllFormIntegrations()

</explain-block>

<explain-block title="'fluentform/global_integration_settings_' . $settingsKey">

You can use this filter to modify all integration field settings.

**Parameters**

- `$settings` (array) All Available Integrations Field Settings

**Usage**

```php
add_filter('fluentform/global_integration_settings_' . $settingsKey, function ($settings) {
    // Do your stuff here
    
    return $settings;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/global_integration_settings_' . $settingsKey', $settings);`

This filter is located in FluentForm\App\Services\Integration\GlobalIntegrationManager -> getGlobalSettingsAjax()

</explain-block>

<explain-block title="fluentform/global_addons">

You can use this filter show global addons.

**Parameters**

- `$addons` (string) All Addons

**Usage**

```php
add_filter('fluentform/global_addons', function ($addons) use ($isEnabled) {
    $addons[$this->integrationKey] = [
        'title'                   => $this->title,
        'category'                => $this->category,
        'disable_global_settings' => $this->disableGlobalSettings,
        'description'             => $this->description,
        'config_url'              => ('yes' != $this->disableGlobalSettings) ? admin_url('admin.php?page=fluent_forms_settings#general-' . $this->integrationKey . '-settings') : '',
        'logo'                    => $this->logo,
        'enabled'                 => ($isEnabled) ? 'yes' : 'no',
    ];
    return $addons;
}, $this->priority, 1);

```

**Reference**

`apply_filters('fluentform/global_addons', $addons);`

This filter is located in FluentForm\app\Modules\AddOnModules -> showFluentAddOns()

</explain-block>

<explain-block title="'fluentform/integration_data_' . $this->integrationKey">

You can modify any integration data through valid integration key before form submission by using this filter.

**Parameters**

- `$addData` (array) Submitted Data
- `$feed` (array) Form Feed
- `$entry` (array) Submission

**Usage**

```php
add_filter('fluentform/integration_data_' . $this->integrationKey, function ($addData, $feed, $entry) {
    // Do your stuff here
    
    return $addData;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/integration_data_' . $this->integrationKey, $addData, $feed, $entry);`

This filter is located in FluentFormPro\src\Integrations\ActiveCampaign\Bootstrap -> notify($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="fluentform/integration_constantcontact_action_by">

You can edit constant contact API url action using the filter.

**Parameters**

- `$actionName` (array) Action Name

**Usage**

```php
add_filter('fluentform/integration_constantcontact_action_by', function ($actionName) {
    // Do your stuff here
    
    return $actionName;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/integration_constantcontact_action_by', $actionName);`

This filter is located in FluentFormPro\src\Integrations\ConstantContact\API -> getApiUrl($resource)

</explain-block>

<explain-block title="fluentform/hubspot_field_data">

You can modify hubspot feed field data before form submission using the filter.

**Parameters**

- `$fields` (array) Form Fields
- `$feed` (array) Hubspot Feed
- `$entry` (array) Submission
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/hubspot_field_data', function ($fields, $feed, $entry, $form) {
    // Do your stuff here
    
    return $fields;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/hubspot_field_data', $fields, $feed, $entry, $form);`

This filter is located in FluentFormPro\src\Integrations\Hubspot\Bootstrap -> notify($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="fluentform/icontact_request_args">

You can modify IContact GET / POST Feed data using the filter.

**Parameters**

- `$options` (array) Feed Data
- `$action` (string) IContact API Action
- `$method` (string) GET/POST Method
- `$return_key` (string) Return Key

**Usage**

```php
add_filter('fluentform/icontact_request_args', function ($options, $action, $method, $return_key) {
    // Do your stuff here
    
    return $options;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/icontact_request_args', $options, $action, $method, $return_key);`

This filter is located in FluentFormPro\src\Integrations\IContact\IContactApi -> make_request( $action = null, $options = array(), $method = 'GET', $return_key = null )

</explain-block>

<explain-block title="fluentform/integration_discord_message">

You can modify discord message arguments using the filter.

**Parameters**

- `$messageArgs` (array) Discord Message Args
- `$feed` (array) Form Feed

**Usage**

```php
add_filter('fluentform/integration_discord_message', function ($messageArgs, $feed) {
    // Do your stuff here
    
    return $messageArgs; 
}, 10, 2);

```
```php
$messageArgs = [
    'embeds' => [
        0 => [
            'fields' => $fields,
            'title' => esc_html($messageTitle),
            'url' => esc_url_raw($entryLink),
            'description' => sanitize_text_field($description),
            'color' => hexdec('3F9EFF'),
            'footer' => [
                'text' => sanitize_text_field($footer)
            ]
        ],
    ],
    'content' => '*New submission on '. $form->title.' (#' . $entry->id . ')*'
];
```

**Reference**

`apply_filters('fluentform/integration_discord_message', $messageArgs, $feed);`

This filter is located in FluentFormPro\src\Integrations\Discord\Bootstrap -> notify($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="fluentform/inventory_fields_before_render">

You can use this filter to modify inventory form fields.

**Parameters**

- `$field` (array) Form Fields
- `$form` (object) Form Object
- `$previousSubmissionData` (array) Previous Form Submission

**Usage**

```php
add_filter('fluentform/inventory_fields_before_render', function ($field, $form, $previousSubmissionData) {
    // Do your stuff here
    
    return $field;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/inventory_fields_before_render', $field, $form, $previousSubmissionData);`

This filter is located in FluentFormPro\src\classes\Inventory\InventoryFieldsRenderer -> processInventoryFields($field,
$form, $previousSubmissionData)

</explain-block>

<explain-block title="fluentform/inventory_inputs">

You can use this filter to modify inventory input fields.

**Parameters**

- `$fields` (array) Inventory Input Fields

**Usage**

```php
add_filter('fluentform/inventory_inputs', function ($fields) {
    // Do your stuff here
    
    return $fields;
}, 10, 1);

```

```php
$fields = [
    'select',
    'input_radio',
    'input_checkbox',
    'multi_payment_component'
];
```

**Reference**

`apply_filters('fluentform/inventory_inputs', $fields);`

This filter is located in FluentFormPro\src\classes\Inventory\InventorySettingsManager -> getInventoryInputs()

</explain-block>

<explain-block title="fluentform/inventory_validation_error">

You can use this filter to modify inventory stock out error message.

**Parameters**

- `$stockOutMsg` (string) Error Message
- `$fieldName` (array) Inventory Fields
- `$item` (array) Inventory Item
- `$formData` (array) Form Data
- `$form` (object) Form

**Usage**

```php
add_filter('fluentform/inventory_validation_error', function ($stockOutMsg, $fieldName, $item, $formData, $form) {
    // Do your stuff here
    
    return $stockOutMsg;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/inventory_validation_error', $stockOutMsg, $fieldName, $item, $this->formData, $this->form);`

This filter is located in FluentFormPro\src\classes\Inventory\InventoryValidation -> validate()

</explain-block>