<explain-block title="fluentform/file_upload_options">

You can change Fluent Forms default file upload location by using this filter.

**Parameters**

- `$locations` (array) File Upload Location

**Usage**

```php
add_filter('fluentform/file_upload_options', function ($locations){

   // Do your stuff here
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/file_upload_options', $locations);`

This filter is located in FluentForm\App\Helpers\Helper -> fileUploadLocations()

</explain-block>

<explain-block title="fluentform/skip_no_conflict">

You can toggle the no conflict mode using this filter.

**Parameters**

- `$isConflict` (boolean) Whether no conflict mode is enabled

**Usage**

```php
add_filter('fluentform/skip_no_conflict', function ($isSkip) {
   // Do your stuff here
   
   return $isSkip;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/skip_no_conflict', $isSkip);`

This filter is located in FluentForm\App\Hooks\actions.php

</explain-block>

<explain-block title="fluentform/permission_set">

You can add or modify Fluentform Permission Set using this filter.

**Parameters**

- `$permissionSet` (array) Permission set

**Usage**

```php
add_filter('fluentform/permission_set', function ($permissionSet) {
   // Do your stuff here
   
   array_push($permissionSet, 'fluentform_dashboard_access');
   return $permissionSet;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/permission_set', $data);`

This filter is located in FluentForm\App\Modules\Acl -> getPermissionSet()

</explain-block>

<explain-block title="'fluentform/verify_user_permission_' . $permission">

This filter verifies each permission.

**Parameters**

- `$allowed` (array) Form default Settings
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/verify_user_permission_' . $permission, function ($allowed, $formId) {
   // Do your stuff here

   return $allowed;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/verify_user_permission_' . $permission, $allowed, $formId);`

This filter is located in FluentForm\App\Modules\Acl -> hasPermission($permissions, $formId = false)

</explain-block>

<explain-block title="fluentform/current_user_capability">

You can modify Current User Capability using this filter.

**Parameters**

- `$capability` (array) User Capabilities

**Usage**

```php
add_filter('fluentform/current_user_capability', function ($capability) {
   // Do your stuff here

   return $capability;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/current_user_capability', static::$capability);`

This filter is located in FluentForm\App\Modules\Acl -> getCurrentUserCapability()

</explain-block>

<explain-block title="fluentform/current_user_permissions">

You can modify Current User Permission using this filter.

**Parameters**

- `$userPermissions` (array) Current User Permissions

**Usage**

```php
add_filter('fluentform/current_user_permissions', function ($userPermissions) {
   // Do your stuff here

   return $userPermissions;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/current_user_permissions', $userPermissions);`

This filter is located in FluentForm\App\Models\Form -> getUserPermissions($user = false)

</explain-block>

<explain-block title="fluentform/nonce_error">

You can modify NONCE error message using this filter.

**Parameters**

- `$errorMessage` (string) Error Message

**Usage**

```php
add_filter('fluentform/nonce_error', function ($errorMessage) {
   // Do your stuff here

   return $errorMessage;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/nonce_error', $message);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateNonce()

</explain-block>

<explain-block title="fluentform/shortcode_defaults">

This filter sets the defaults values for the shortcode.

**Parameters**

- `$defaults` (array) Default Shortcode Values
- `$atts` (array) Shortcode Attributes

**Usage**

```php
add_filter('fluentform/shortcode_defaults', function($defaults , $atts) {
   // Do your stuff here

   return $atts;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/shortcode_defaults', $data, $atts);`

This filter is located in FluentForm\App\Modules\Component\Component -> addFluentFormShortCode()

</explain-block>

<explain-block title="fluentform/shortcode_feed_text">

This filter returns the message of the shortcode for a feed.

**Parameters**

- `$feedText` (string) Shortcode Feed Text
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/shortcode_feed_text', function ($feedText, $form) {
   // Do your stuff here

   return $feedText;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/shortcode_feed_text', $feedText, $form);`

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

</explain-block>

<explain-block title="fluentform/parse_default_value">

You can modify form default shortcode value using this filter.

**Parameters**

- `$value` (string) Parseable Shortcode Value
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/parse_default_value', function($value, $form) {
   // Do your stuff here

   return $value;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/parse_default_value', $attrDefaultValues[$pattern], $form);`

This filter is located in FluentForm\App\Modules\Component\Component -> replaceEditorSmartCodes($output, $form)


</explain-block>

<explain-block title="fluentform/parse_default_values">

You can modify Shortcode's all parseable values using this filter.

**Parameters**

- `$attrDefaultValues` (array) Parseable All Shortcode Values

**Usage**

```php
add_filter('fluentform/parse_default_values', function($attrDefaultValues) {
   // Do your stuff here

   return $attrDefaultValues;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/parse_default_values', $attrDefaultValues);`

This filter is located in FluentForm\App\Modules\Component\Component -> replaceEditorSmartCodes($output, $form)

</explain-block>

<explain-block title="fluentform/akismet_fields">

This filter is used in the Akismet handler.

**Parameters**

- `$info` (array) Akismet Data
- `$data` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/akismet_fields', function ($info, $data, $form) {
   // Do your stuff here

   return $info;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/akismet_fields', $info, $data, $form);`

This filter is located in FluentForm\App\Modules\AkismetHandler -> getAkismetFields($data, $form)

</explain-block>

<explain-block title="fluentform/find_shortcode_params">

This filter returns Fluent Forms shortcode used in the site.

**Parameters**

- `$params` (array) Post Type

**Usage**

```php
add_filter('fluentform/find_shortcode_params', function($params) {
   // Do your stuff here

   return $params;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/find_shortcode_params', $params);`

This filter is located in FluentForm\App\Services\Form\FormService -> findShortCodePage($formId)

</explain-block>

<explain-block title="fluentform/will_parse_url_value">

You can toggle redirect URL parsing in confirmation Message using the filter.

**Parameters**

- `$status` (boolean) Whether Parse the URL
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/will_parse_url_value', function($status, $form) {
   // Do your stuff here

   return $status;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/will_parse_url_value', $parseUrl, $form);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerServices -> getReturnData($insertId, $form,
$formData)

</explain-block>

<explain-block title="fluentform/akismet_check_spam">

You can toggle Akismet spam checking using this filter.

**Parameters**

- `$status` (boolean) Whether Spam Check is enabled
- `$formId` (int) Form ID
- `$formData` (array) Form Data

**Usage**

```php
add_filter('fluentform/akismet_check_spam', function($status, $formId, $formData) {
   // Do your stuff here

   return $status;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/akismet_check_spam', $isSpamCheck, $form->id, $formData);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> isSpam($formData, $form)

</explain-block>

<explain-block title="fluentform/akismet_spam_result">

You can toggle Akismet spam result using this filter.

**Parameters**

- `$isSpam` (boolean) Whether Spam Check is enabled
- `$formId` (int) Form ID
- `$formData` (array) Form Data

**Usage**

```php
add_filter('fluentform/akismet_spam_result', function($isSpam, $formId, $formData) {
   // Do your stuff here

   return $defaultSettings;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/akismet_spam_result', $isSpam, $form->id, $formData);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> isSpam($formData, $form)

</explain-block>

<explain-block title="fluentform/has_recaptcha">

You can toggle Recaptcha using this filter.

**Parameters**

- `$status` (boolean) Whether Recaptcha is enabled

**Usage**

```php
add_filter('fluentform/has_recaptcha', function($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/has_recaptcha', $hasAutoRecap);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateReCaptcha()

</explain-block>

<explain-block title="fluentform/disable_captcha">

You can disable specific captcha validation using this filter. This is useful when you want to bypass captcha validation in certain scenarios.

**Parameters**

- `$isDisabled` (boolean) Whether captcha validation is disabled
- `$form` (object) Form Object
- `$captchaType` (string) The type of captcha ('recaptcha', 'hcaptcha', 'turnstile')

**Usage**

```php
add_filter('fluentform/disable_captcha', function($isDisabled, $form, $captchaType) {
   // Disable reCAPTCHA for a specific form
   if ($captchaType === 'recaptcha' && $form->id === 123) {
      return true;
   }
   
   return $isDisabled;
}, 10, 3);
```

**Reference**

`apply_filters('fluentform/disable_captcha', false, $this->form, 'recaptcha');`
`apply_filters('fluentform/disable_captcha', false, $this->form, 'hcaptcha');`
`apply_filters('fluentform/disable_captcha', false, $this->form, 'turnstile');`

This filter is located in `FluentForm\App\Services\Form\FormValidationService` -> `validateReCaptcha()`, `validateHCaptcha()`, and `validateTurnstile()`

</explain-block>

<explain-block title="fluentform/has_hcaptcha">

You can toggle Hcaptcha using this filter.

**Parameters**

- `$status` (boolean) Whether Hcaptcha is enabled

**Usage**

```php
add_filter('fluentform/has_hcaptcha', function($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/has_hcaptcha', $hasAutoHcap);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateHCaptcha()

</explain-block>

<explain-block title="fluentform/has_turnstile">

You can toggle Turnstile using this filter.

**Parameters**

- `$status` (boolean) Whether Turnstile is enabled

**Usage**

```php
add_filter('fluentform/has_turnstile', function($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/has_turnstile', $hasAutoTurnsTile);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateTurnstile()

</explain-block>

<explain-block title="fluentform/recaptcha_v3_ref_score">

You can set Recaptcha Reference Score using this filter. By default, score is set to 0.5.

**Parameters**

- `$score` Reference Score between 0 and 1

**Usage**

```php
add_filter('fluentform/recaptcha_v3_ref_score', function($score) {
   // Do your stuff here

   return $score;
}, 10, 1);

```

**Reference**

`apply_filters('fluentforms/recaptcha_v3_ref_score', $value);`

This filter is located in FluentForm\App\Modules\ReCaptcha\ReCaptcha -> validate($token, $secret = null, $version = '
v2_visible')

</explain-block>

<explain-block title="'fluentform/editor_shortcode_callback_group_' . $group">

You can modify shortcode group using the filter.

**Parameters**

- `$handler` (array) All Shortcode Group
- `$form` (object) Form Object
- `$handlerArray` (array) Shortcode Handlers Group

**Usage**

```php
add_filter('fluentform/editor_shortcode_callback_group_' . $group, function ($handler, $form, $handlerArray) {
   // Do your stuff here

   return '{' . $handler . '}';
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/editor_shortcode_callback_group_' . $group, '{' . $handler . '}', $form, $handlerArray);`

This filter is located in FluentForm\App\Services\FormBuilder\EditorShortcodeParser -> filter($value, $form)

</explain-block>

<explain-block title="'fluentform/editor_shortcode_callback_' . $handler">

You can modify shortcode handler using the filter.

**Parameters**

- `$handler` (array) Shortcode Handler Array
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/editor_shortcode_callback_' . $handler, function ($handler, $form) {
   // Do your stuff here

   return $handler;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/editor_shortcode_callback_' . $handler, $handler, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\EditorShortcodeParser -> filter($value, $form)

</explain-block>

<explain-block title="fluentform/editor_element_customization_settings">

This filter returns the input element settings components in editor.

**Parameters**

- `$settings` (array) Element settings

**Usage**

```php
add_filter('fluentform/editor_element_customization_settings', function ($settings) {
    if ($customSettings = $this->getEditorCustomizationSettings()) {
    $settings = array_merge($settings, $customSettings);
    }

    return $settings;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/editor_element_customization_settings', $element_customization_settings);`

This filter is located in FluentForm\App\Services\FormBuilder\ElementCustomization

</explain-block>

<explain-block title="fluentform/html_attributes">

You can use this filter to modify the form attributes before form render.

**Parameters**

- `$data` (array) Form HTML attributes
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/html_attributes', function ($data, $form) {
    // Do your stuff here
    
    return $data;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/html_attributes', $data, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> build($form, $extraCssClass = '',
$instanceCssClass = '', $atts = [])

</explain-block>

<explain-block title="fluentform/all_data_skip_password_field">

You can use this filter to skip password for {all_data} shortcode.

**Parameters**

- `$status` (boolean) Whether to skip the password field

**Usage**

```php
add_filter('fluentform/all_data_skip_password_field', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/all_data_skip_password_field',  __return_true());`

This filter is located in FluentForm\App\Services\FormBuilder\ShortcodeParser -> getOtherData($key)

</explain-block>

<explain-block title="fluentform/all_data_without_hidden_fields">

You can use this filter to skip hidden field for {all_data} shortcode.

**Parameters**

- `$status` (boolean) Whether to skip the hidden field

**Usage**

```php
add_filter('fluentform/all_data_without_hidden_fields', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/all_data_without_hidden_fields',  __return_true());`

This filter is located in FluentForm\App\Services\FormBuilder\ShortcodeParser -> getOtherData($key)

</explain-block>

<explain-block title="fluentform/all_data_shortcode_html">

You can use this filter to modify {all_data} shortcode as HTML.

**Parameters**

- `$html` (string) HTML string
- `$formFields` (array) Form Fields
- `$inputLabels` (array) Input Labels
- `$response` (object) Form Response

**Usage**

```php
add_filter('fluentform/all_data_shortcode_html', function ($html, $formFields, $inputLabels, $response) {
    // Do your stuff here
    
    return $html;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/all_data_shortcode_html',  __return_true());`

This filter is located in FluentForm\App\Services\FormBuilder\ShortcodeParser -> getOtherData($key)

</explain-block>

<explain-block title="fluentform/shortcode_parser_callback_pdf.download_link.public">

You can use this filter to modify the public PDF download link.

**Parameters**

- `$key` (string) Key Name
- `$instance` (object) Shortcode Parser Instance

**Usage**

```php
add_filter('fluentform/shortcode_parser_callback_pdf.download_link.public', function ($key, $instance) {
    // Do your stuff here
    
    return $key;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/shortcode_parser_callback_pdf.download_link.public', $key, $instance);`

This filter is located in FluentForm\App\Services\FormBuilder -> getOtherData($key)

</explain-block>

<explain-block title="fluentform/shortcode_parser_callback_random_string">

You can use this filter to modify the any shortcode with random string.

**Parameters**

- `$value` (string) Name of the Shortcode after .
- `$prefix` (string) Prefix of the Shortcode before .
- `$instance` (object) Shortcode Parser Instance

**Usage**

```php
add_filter('fluentform/shortcode_parser_callback_random_string', function ($value, $prefix, $instance) {
    // Do your stuff here
    
    return $value;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/shortcode_parser_callback_random_string', $value, $prefix, static::getInstance());`

This filter is located in FluentForm\App\Services\FormBuilder -> getOtherData($key)

</explain-block>

<explain-block title="'fluentform/smartcode_group_' . $group">

You can use this filter to modify the smartcode with a specific group.

**Parameters**

- `$property` (string) Smartcode Name
- `$instance` (object) Shortcode Parser Instance

**Usage**

```php
add_filter('fluentform/smartcode_group_' . $group, function ($property, $instance) {
    // Do your stuff here
    
    return $value;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/smartcode_group_' . $group, $property, static::getInstance());`

This filter is located in FluentForm\App\Services\FormBuilder -> getOtherData($key)

</explain-block>

<explain-block title="'fluentform/shortcode_parser_callback_' . $key">

You can use this filter to modify the any shortcode with matching key.

**Parameters**

- `$key` (string) Key Name
- `$instance` (object) Shortcode Parser Instance

**Usage**

```php
add_filter('fluentform/shortcode_parser_callback_' . $key, function ($key, $instance) {
    // Do your stuff here
    
    return $key;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/shortcode_parser_callback_' . $key, static::getInstance());`

This filter is located in FluentForm\App\Services\FormBuilder -> getOtherData($key)

</explain-block>

<explain-block title="fluentform/editor_validation_rule_settings">

You can modify validation rule for any input using the filter.

**Parameters**

- `$validation_rule_settings` (array) Validation Rule Settings for all input

**Usage**

```php
add_filter('fluentform/editor_validation_rule_settings', function ($validation_rule_settings) {
    // Do your stuff here
    
    return $validation_rule_settings;
}, 10, 1);

```

```php
$validation_rule_settings = [
    'required' => [
        'template'  => 'inputRadio',
        'label'     => __('Required', 'fluentform'),
        'help_text' => __('Select whether this field is a required field for the form or not.', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'valid_phone_number' => [
        'template'  => 'inputRadio',
        'label'     => __('Validate Phone Number', 'fluentform'),
        'help_text' => __('Select whether the phone number should be validated or not.', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'email' => [
        'template'  => 'inputRadio',
        'label'     => __('Validate Email', 'fluentform'),
        'help_text' => __('Select whether to validate this field as email or not', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'url' => [
        'template'  => 'inputRadio',
        'label'     => __('Validate URL', 'fluentform'),
        'help_text' => __('Select whether to validate this field as URL or not', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'min' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Min Value', 'fluentform'),
        'help_text' => __('Minimum value for the input field.', 'fluentform'),
    ],
    'digits' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Digits', 'fluentform'),
        'help_text' => __('Number of digits for the input field.', 'fluentform'),
    ],
    'max' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Max Value', 'fluentform'),
        'help_text' => __('Maximum value for the input field.', 'fluentform'),
    ],
    'max_file_size' => [
        'template'  => 'maxFileSize',
        'label'     => __('Max File Size', 'fluentform'),
        'help_text' => __('The file size limit uploaded by the user.', 'fluentform'),
    ],
    'max_file_count' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Max Files Count', 'fluentform'),
        'help_text' => __('Maximum user file upload number.', 'fluentform'),
    ],
    'allowed_file_types' => [
        'template'  => 'inputCheckbox',
        'label'     => __('Allowed Files', 'fluentform'),
        'help_text' => __('Allowed Files', 'fluentform'),
        'fileTypes' => [
            [
                'title' => __('Images', 'fluentform'),
                'types' => ['jpg', 'jpeg', 'gif', 'png', 'bmp'],
            ],
            [
                'title' => __('Audio', 'fluentform'),
                'types' => ['mp3', 'wav', 'ogg', 'oga', 'wma', 'mka', 'm4a', 'ra', 'mid', 'midi'],
            ],
            [
                'title' => __('Video', 'fluentform'),
                'types' => [
                    'avi',
                    'divx',
                    'flv',
                    'mov',
                    'ogv',
                    'mkv',
                    'mp4',
                    'm4v',
                    'divx',
                    'mpg',
                    'mpeg',
                    'mpe',
                ],
            ],
            [
                'title' => __('PDF', 'fluentform'),
                'types' => ['pdf'],
            ],
            [
                'title' => __('Docs', 'fluentform'),
                'types' => [
                    'doc',
                    'ppt',
                    'pps',
                    'xls',
                    'mdb',
                    'docx',
                    'xlsx',
                    'pptx',
                    'odt',
                    'odp',
                    'ods',
                    'odg',
                    'odc',
                    'odb',
                    'odf',
                    'rtf',
                    'txt',
                ],
            ],
            [
                'title' => __('Zip Archives', 'fluentform'),
                'types' => ['zip', 'gz', 'gzip', 'rar', '7z', ],
            ],
            [
                'title' => __('Executable Files', 'fluentform'),
                'types' => ['exe'],
            ],
            [
                'title' => __('CSV', 'fluentform'),
                'types' => ['csv'],
            ],
        ],
        'options' => $fileTypeOptions,
    ],
    'allowed_image_types' => [
        'template'  => 'inputCheckbox',
        'label'     => __('Allowed Images', 'fluentform'),
        'help_text' => __('Allowed Images', 'fluentform'),
        'fileTypes' => [
            [
                'title' => __('JPG', 'fluentform'),
                'types' => ['jpg|jpeg', ],
            ],
            [
                'title' => __('PNG', 'fluentform'),
                'types' => ['png'],
            ],
            [
                'title' => __('GIF', 'fluentform'),
                'types' => ['gif'],
            ],
        ],
        'options' => [
            [
                'label' => __('JPG', 'fluentform'),
                'value' => 'jpg|jpeg',
            ],
            [
                'label' => __('PNG', 'fluentform'),
                'value' => 'png',
            ],
            [
                'label' => __('GIF', 'fluentform'),
                'value' => 'gif',
            ],
        ],
    ],
];

```

**Reference**

`apply_filters('fluentform/editor_validation_rule_settings', $validation_rule_settings);`

This filter is located in FluentForm\App\Services\FormBuilder\ValidationRuleSettings

</explain-block>

<explain-block title="fluentform/cleanup_days_count">

You can use this filter to set days count for cleanup old data through scheduler.

**Parameters**

- `$days` (int) Days Count, By default 60

**Usage**

```php
add_filter('fluentform/cleanup_days_count', function ($days) {
    // Do your stuff here
    
    return $days;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/cleanup_days_count', $days);`

This filter is located in FluentForm\App\Services\Scheduler\Scheduler -> cleanUpOldData()

</explain-block>

<explain-block title="fluentform/allowed_html_tags">

You can use this filter to add HTML attributes for sanitization.

**Parameters**

- `$tags` (array) HTML Attributes

**Usage**

```php
add_filter('fluentform/allowed_html_tags', function ($tags) {
    // Do your stuff here
    
    return $tags;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/allowed_html_tags', $tags);`

This filter is located in FluentForm\boot\globals.php -> fluentform_sanitize_html($html)

</explain-block>

<explain-block title="fluentform/backend_sanitized_values">

You can use this filter to add inputs values for sanitization.

**Parameters**

- `$inputs` (array) Form Inputs

**Usage**

```php
add_filter('fluentform/backend_sanitized_values', function ($inputs) {
    // Do your stuff here
    
    return $inputs;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/backend_sanitized_values', $inputs);`

This filter is located in FluentForm\boot\globals.php -> fluentform_backend_sanitizer($inputs, $sanitizeMap = [])

</explain-block>

<explain-block title="fluentform/disable_fields_sanitize">

You can use this filter to toggle disable fields sanitization.

**Parameters**

- `$status` (boolean) Whether disabled fields sanitization is enabled

**Usage**

```php
add_filter('fluentform/disable_fields_sanitize', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/disable_fields_sanitize', $status);`

This filter is located in FluentForm\boot\globals.php -> fluentformCanUnfilteredHTML()

</explain-block>

<explain-block title="fluentform/disabled_components">

You can use this filter to modify disabled components.

**Parameters**

- `$disabled` (array) Disabled Components

**Usage**

```php
add_filter('fluentform/disabled_components', function ($disabled) {
    // Do your stuff here
    
    return $disabled;
}, 10, 1);

```

```php
$disabled['ratings'] = [
    'disabled'    => true,
    'title'       => __('Ratings', 'fluentform'),
    'description' => __('Ratings is not available with the free version. Please upgrade to pro to get all the advanced features.', 'fluentform'),
    'image'       => '',
    'video'       => 'https://www.youtube.com/embed/YGdkNspMaEs',
];
$disabled['tabular_grid'] = [
    'disabled'    => true,
    'title'       => __('Checkable Grid', 'fluentform'),
    'description' => __('Checkable Grid is not available with the free version. Please upgrade to pro to get all the advanced features.', 'fluentform'),
    'image'       => '',
    'video'       => 'https://www.youtube.com/embed/ayI3TzXXANA',
];
```

**Reference**

`apply_filters('fluentform/disabled_components', $disabled);`

This filter is located in FluentForm\app\Services\Form\FormServices -> getDisabledComponents()

</explain-block>

<explain-block title="fluentform/validation_error">

This filter hook is fired before form render. You can use this to change rendered form.

**Parameters**

- `$errors` (array) Validation Errors
- `$formData` (array) Form Data
- `$form` (object) Form Object
- `$fields` (array) Form Fields

**Usage**

```php
add_filter('fluentform/validation_error', function ($errors, $formData, $form, $fields) {
    // Do your stuff here
    
    return $returnData;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/validation_error', $errors, $this->form, $fields, $this->formData);`

This filter is located in FluentForm\app\Services\Form\SubmissionHandlerService -> getReturnData($insertId, $form,
$formData)

</explain-block>

<explain-block title="fluentform/nonce_verify">

You can use this to toggle the nonce verification of the rendered form.

**Parameters**

- `$status` (boolean) Whether the nonce verification is enabled
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/nonce_verify', function ($status, $formId) {
    // Do your stuff here
    
    return $status;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/nonce_verify', false, $formId);`

This filter is located in FluentForm\app\Services\Form\FormValidationService -> validateNonce()

</explain-block>

<explain-block title="fluentform/https_local_ssl_verify">

You can use this to toggle the local SSL verification for async requests.

**Parameters**

- `$status` (boolean) Whether local SSL verification is enabled

**Usage**

```php
add_filter('fluentform/https_local_ssl_verify', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/https_local_ssl_verify', false);`

This filter is located in FluentForm\app\Services\WPAsync\FluentFormAsyncRequest -> dispatchAjax($data = [])

</explain-block>

<explain-block title="fluentform/conditional_shortcode_defaults">

You can use this filter to modify shortcode default.

**Parameters**

- `$default` (array) Shortcode Default
- `$atts` (array) Shortcode Attributes

**Usage**

```php
add_filter('fluentform/conditional_shortcode_defaults', function ($default, $atts) {
    // Do your stuff here
    
    return $default;
}, 10, 2);

```
```php
$default = [
    'field' => '',
    'is'    => '',
    'to'    => ''
];
```

**Reference**

`apply_filters('fluentform/conditional_shortcode_defaults', $default, $atts);`

This filter is located in FluentFormPro\src\classes\ConditionalContent -> handle($atts, $content)

</explain-block>

<explain-block title="fluentform/disable_attachment_delete">

You can toggle double option confirmation file attachment by using this filter.

**Parameters**

- `$status` (boolean) Whether the attachment is disabled
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/disable_attachment_delete', function ($status, $formId) {
    // Do your stuff here
    
    return $status;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/disable_attachment_delete', $status, $entry->form_id));`

This filter is located in FluentFormPro\src\classes\DoubleOption -> deleteAssociateFiles($entry)

</explain-block>

<explain-block title="fluentform/style_presets">

You can modify form styler by using this filter.

**Parameters**

- `$presets` (array) Form Styler Presets

**Usage**

```php
add_filter('fluentform/style_presets', function ($presets) {
    // Do your stuff here
    
    return $presets;
}, 10, 1);

```
```php
$presets = [
    '' => [
        'label' => __('Default', ''),
        'src' => ''
    ],
    'ffs_modern_b' => [
        'label' => __('Modern (Bold)', ''),
        'src' => FLUENTFORMPRO_DIR_URL . 'public/css/skin_modern_bold.css'
    ],
    'ffs_modern_l' => [
        'label' => __('Modern (Light)', ''),
        'src' => FLUENTFORMPRO_DIR_URL . 'public/css/skin_modern_light.css'
    ],
    'ffs_classic' => [
        'label' => __('Classic', ''),
        'src' => FLUENTFORMPRO_DIR_URL . 'public/css/skin_classic.css'
    ],
    'ffs_bootstrap' => [
        'label' => __('Bootstrap Style', ''),
        'src' => FLUENTFORMPRO_DIR_URL . 'public/css/skin_bootstrap.css'
    ],
];
```

**Reference**

`apply_filters('fluentform/style_presets', $presets);`

This filter is located in FluentFormPro\src\classes\FormStyler -> getPresets()

</explain-block>

<explain-block title="fluentform/post_type_selection_types_args">

You can modify post type args using this filter.

**Parameters**

- `$args` (array) Post Type Args

**Usage**

```php
add_filter('fluentform/post_type_selection_types_args', function ($args) {
    // Do your stuff here
    
    return $args;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/post_type_selection_types_args', $args);`

This filter is located in FluentFormPro\src\Components\PostSelectionField -> generalEditorElement()

</explain-block>

<explain-block title="fluentform/post_integrations_terms_args">

You can modify the arguments used to retrieve taxonomy terms for hierarchical taxonomies in post integrations.

**Parameters**

- `$termsArgs` (array) Arguments passed to get_terms() function
- `$data` (array) Field data and settings
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/post_integrations_terms_args', function ($termsArgs, $data, $form) {
    // Modify the arguments for retrieving taxonomy terms
    
    // Only modify arguments for a specific form
    if ($form->id === 123) {
        // Show terms in descending order by name
        $termsArgs['orderby'] = 'name';
        $termsArgs['order'] = 'DESC';
        
        // Only show terms that have posts
        $termsArgs['hide_empty'] = true;
        
        // Limit to parent terms only (no children)
        $termsArgs['parent'] = 0;
        
        // Exclude specific term IDs
        $termsArgs['exclude'] = [45, 67, 89];
        
        // Include only terms with specific IDs
        // $termsArgs['include'] = [12, 34, 56];
    }
    
    // For a specific taxonomy field
    if (isset($data['taxonomy_settings']['name']) && $data['taxonomy_settings']['name'] === 'category') {
        // Limit number of terms returned
        $termsArgs['number'] = 10;
        
        // Only get terms that match a specific name pattern
        $termsArgs['name__like'] = 'product';
    }
    
    return $termsArgs;
}, 10, 3);
```

**Reference**

`apply_filters('fluentform/post_integrations_terms_args', $postTermsArgs, $data, $form);`

This filter is located in FluentFormPro\src\Components\Post\Components\HierarchicalTaxonomy -> populateOptions()

</explain-block>

<explain-block title="fluentform/post_selection_types">

You can modify post selection types using this filter.

**Parameters**

- `$formattedTypes` (array) Post Selection Types

**Usage**

```php
add_filter('fluentform/post_selection_types', function ($formattedTypes) {
    // Do your stuff here
    
    return $formattedTypes;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/post_selection_types', $formattedTypes);`

This filter is located in FluentFormPro\src\Components\PostSelectionField -> generalEditorElement()

</explain-block>

<explain-block title="fluentform/pdf_html_format">

You can set HTML formatted value on PDF header, body or footer using this filter.

**Parameters**

- `$feed` (array) PDF parts (header, body or footer)

**Usage**

```php
add_filter('fluentform/pdf_html_format', function($feed) {
    $feed[] = 'body';
    return $feed;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/pdf_html_format', []);`

This filter is located in FluentForm\app\Hooks\Filters.php

</explain-block>


<explain-block title="fluentform/email_exists_validation_message">

Change User registration existing email validation message

**Parameters**
- `validationMsg` (string) Message
- `$form` (object) Form Object
- `$feed` (array) Integraion Feed Data
- `$email` (string) Email 

**Usage**

```php
add_filter('fluentform/email_exists_validation_message', function($validationMsg) {
    $validationMsg = "This email is already registered. Please choose another one.";
    return $validationMsg;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/email_exists_validation_message', $validationMsg, $form, $feed, $email);`

This filter is located in fluentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php

</explain-block>

<explain-block title="fluentform/token_based_protection_response">

This filter allows you to modify the response sent when generating a protection token.

**Parameters**

- `$response` (array) The default response containing the token
- `$formId` (int) The ID of the form

**Usage**

```php
add_filter('fluentform/token_based_protection_response', function ($response, $formId) {
    // Modify the response
    return $response;
}, 10, 2);
```
**Reference**

`apply_filters('fluentform/token_based_protection_response', ['token' => $token], $formId);`
This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> ajaxGenerateToken method.

</explain-block>

<explain-block title="fluentform/generated_protection_token">

This filter allows you to modify the generated protection token.

**Parameters**

- `$token` (string) The encrypted token
- `$formId` (int) The ID of the form
- `$timeStamp` (int) The current timestamp

**Usage**

```php
add_filter('fluentform/generated_protection_token', function ($token, $formId, $timeStamp) {
    // Modify the token
    return $token;
}, 10, 3);
```
**Reference**

`apply_filters('fluentform/generated_protection_token', Protector::encrypt($data), $formId, $timeStamp);`

This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> generateToken method.

</explain-block>

<explain-block title="fluentform/token_based_validation_error_message">

This filter allows you to customize the error message displayed when token validation fails. You can use this to provide more specific or user-friendly error messages.

**Parameters**

- `$errorMessage` (string) The default error message
- `$formId` (int) The ID of the form

**Usage**

```php
add_filter('fluentform/token_based_validation_error_message', function ($errorMessage, $formId) {
    // Customize the error message
    return "Sorry, we couldn't verify your submission. Please try again or contact support if the issue persists.";
}, 10, 2);
```
**Reference**

`apply_filters('fluentform/token_based_validation_error_message', __('Suspicious activity detected. Form submission blocked', 'fluentform'), $formId);`

This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> verify method.

</explain-block>

<explain-block title="fluentform/token_expiration_time">

This filter allows you to modify the expiration time for the protection token. If the protection token expires, form submission will fail. Adjust this value based on your security requirements and expected user behavior.

**Parameters**

- `$expirationTime` (int) The default expiration time in seconds 
- `$formId` (int) The ID of the form

**Usage**

```php
add_filter('fluentform/token_expiration_time', function ($expirationTime, $formId) {
    // Modify the expiration time
    // Default is (3600s = 1 hour)
    $expirationTime = 1800; // 30 minutes
    return $expirationTime;
}, 10, 2);
```
**Reference**

`apply_filters('fluentform/token_expiration_time', 3600, $formId);`

This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> validateToken method.

</explain-block>

<explain-block title="fluentform/token_based_validation_result">

This filter allows you to modify the result of token validation. Use this filter to implement additional validation logic if needed.

**Parameters**

- `$isValid` (bool) The initial validation result 
- `$timestamp` (int) The timestamp from the token 
- `$tokenFormId` (int) The form ID from the token 
- `$formId` (int) The current form ID

**Usage**

```php
add_filter('fluentform/token_based_validation_result', function ($isValid, $timestamp, $tokenFormId, $formId) {
    // Add additional validation logic
    $isWithinTimeFrame = (time() - $timestamp) < 3600; // Check if token is less than an hour old
    return $isValid && $isWithinTimeFrame;
}, 10, 4);
```
**Reference**

`apply_filters('fluentform/token_based_validation_result', $isValid, $timestamp, $tokenFormId, $formId);`

This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> validateToken method.

</explain-block>

<explain-block title="fluentform/token_based_spam_protection_status">

This filter allows you to modify the status of token-based spam protection for a specific form. You can use this to enable or disable protection for certain forms based on custom logic.


**Parameters**

- `$status` (bool) The current status of token-based protection 
- `$formId` (int|false) The ID of the form, or false if not specific to a form

**Usage**

```php
add_filter('fluentform/token_based_spam_protection_status', function ($status, $formId) {
    // Disable protection for a specific form
    if ($formId === 123) {
        return false;
    }
    return $status;
}, 10, 2);
```
**Reference**

`apply_filters('fluentform/token_based_spam_protection_status', $status, $formId);`

This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> isEnabled method.

</explain-block>

<explain-block title="fluentform/token_protection_name">

This filter allows you to modify the name of the token protection field. This can be useful for customizing the field name or implementing additional obfuscation.


**Parameters**

- `$tokenInputName` (string) The default name of the token input field 
- `$formId` (int) The ID of the form

**Usage**

```php
add_filter('fluentform/token_protection_name', function ($tokenInputName, $formId) {
    // Modify the token input name
    return 'custom_protection_field_' . md5($formId);
}, 10, 2);
```
**Reference**

`apply_filters('fluentform/token_protection_name', $tokenInputName, $formId);`

This filter is located in the FluentForm\App\Modules\Form\TokenBasedSpamProtection -> getFieldName method.

</explain-block>

<explain-block title="fluentform/double_optin_invalid_confirmation_url_message">

This filter allows you to customize double optin invalid confirmation URL messages

**Parameters**

- `$message` (string) The default massage

**Usage**

```php
add_filter('fluentform/double_optin_invalid_confirmation_url_message', function ($message) {
    // Modify the message
    return __('Sorry! Invalid Form Confirmation URL. Please contact the site admin.', 'fluentformpro');
}, 10, 2);
```
**Reference**

`apply_filters('fluentform/double_optin_invalid_confirmation_url_message', __('Sorry! Invalid Form Confirmation URL', 'fluentformpro'));`

This filter is located in the `FluentFormPro\classes\DoubleOptin` -> `confirmSubmission` method.

</explain-block>