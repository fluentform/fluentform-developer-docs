<explain-block title="fluentform/is_form_renderable">

You can check if the form is renderable using this filter.

**Parameters**

- `$isAllowed` (array) Form Status
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/is_form_renderable', function ($isAllowed, $form){
   // Do your stuff here
   
   return $isAllowed;
}, 10, 2);
```

**Reference**

`apply_filters('fluentform/is_form_renderable', $isAllowed, $this->form);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateRestrictions(&$fields)

</explain-block>

<explain-block title="fluentform/conversational_url_slug">
You can change any conversational form URL Slug, by default it is fluent-form.

**Parameters**

- `$slug` (string) URL Slug

**Usage**

```php
add_filter('fluentform/conversational_url_slug', function ($slug){
   // Do your stuff here
   
   return $slug;
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/conversational_url_slug', 'fluent-form');`

This filter is located in FluentForm\App\Services\FluentConversational\Classes\Form -> renderDesignSettings($formId)

> By default, Fluent Form’s conversional form’s URL looks like this: yourdomain.com/?fluent-form=FORM_ID&form=OPTIONAL_SECURITY_CODE
> 
> But if you want to customize it and make it pretty something like yourdomain.com/my-forms/FORM_ID/OPTIONAL_SECURITY_CODE then please follow this tutorial
>
> First copy and paste this code to your theme’s functions.php file or in your custom code snippet plugin

```php
/*
 * Internal Function for Fluent Forms Custom Slug
 * Do not EDIT this function
 */
function customFfLandingPageSlug($slug)
{
    add_action('init', function () use ($slug) {
        add_rewrite_endpoint($slug, EP_ALL);
    });
    add_action('wp', function () use ($slug) {
        global $wp_query;
        if (isset($wp_query->query_vars[$slug])) {
            $formString = $wp_query->query_vars[$slug];
            if (!$formString) {
                return;
            }
            $array = explode('/', $formString);

            $formId = $array[0];

            if (!$formId || !is_numeric($formId)) {
                return;
            }

            $secretKey = '';
            if (count($array) > 1) {
                $secretKey = $array[1];
            }

            $paramKey = apply_filters('fluentform/conversational_url_slug', 'fluent-form');

            $_GET[$paramKey] = $formId;
            $_REQUEST[$paramKey] = $formId;

            $request = wpFluentForm('request');
	    $request->set($paramKey, $formId);
	    $request->set('form', $secretKey);
        }
    });
}

/*
 * Creating custom slug for conversational form landing page
 *
 * my-forms is your custom slug for the form
 * if your form id is 123 then the landing page url will be then
 * https://your-domain.com/my-forms/123
 * if you use Security Code on conversational form then the url will be
 * https://your-domain.com/my-forms-x/123/SECURITY-CODE
 *
 * After paste the code to your theme's functions.php file please re-save the permalink settings
*/

customFfLandingPageSlug('my-forms'); // you may change the "my-forms" for your own page slug

```
> Once you add the code, please feel free to change the ‘my-forms’ to your own slug that you want
>
> If your form id is 123 then the landing page url will be then your-domain.com/my-forms/123
> 
> If you use Security Code on conversational form then the url will be your-domain.com/my-forms/123/SECURITY-CODE
>
> Please note that once you add the code make sure you re-save your permalink from Settings -> Permalinks (on wp-admin)

</explain-block>

<explain-block title="fluentform/numeric_styles">

You can modify or add more numeric formatters to number inputs using this filter.

**Parameters**

- `$numericFormatters` (array) all numeric formats

**Usage**

```php
add_filter('fluentform/numeric_styles', function($numericFormatters) {
   // Do your stuff here

  return $staus;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/numeric_styles', $numericFormatters);`

This filter is located in FluentForm\App\Helpers\Helper -> getNumericFormatters()

</explain-block>

<explain-block title="fluentform/form_store_attributes">

You can modify Form attributes just Before storing the Form to the Database.

**Parameters**

- `$storeAttributes` (array) Form default attributes

**Usage**

```php
add_filter('fluentform/form_store_attributes', function ($storeAttributes) {
   // Do your stuff here

   return $storeAttributes;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/form_store_attributes', array_filter($storeAttributes));`

This filter is located in FluentForm\App\Models\Form -> prepare($attributes = [])

</explain-block>

<explain-block title="fluentform/forms_default_settings">

You can modify Form Default Settings using this filter.

**Parameters**

- `$defaultSettings` (array) Form default Settings

**Usage**

```php
add_filter('fluentform/forms_default_settings', function ($defaultSettings) {
   // Do your stuff here

   return $defaultSettings;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/forms_default_settings', array_filter($data));`

This filter is located in FluentForm\App\Models\Form -> getFormsDefaultSettings($formId = false)

</explain-block>

<explain-block title="fluentform/create_default_settings">

You can modify Form Default Settings while creating a new form using this filter.

**Parameters**

- `$defaultSettings` (array) Form default Settings

**Usage**

```php
add_filter('fluentform/create_default_settings', function($defaultSettings) {
   // Do your stuff here

   return $defaultSettings;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/create_default_settings', array_filter($defaultSettings));`

This filter is located in FluentForm\App\Models\Form -> getFormsDefaultSettings($formId = false)

</explain-block>

<explain-block title="fluentform/editor_components">

You can modify or add more Form Component using this filter.

**Parameters**

- `$editorComponents` (array) Editor Components
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/editor_components', function($editorComponents, $formId) {
   // Do your stuff here
   
    $component = $this->getComponent();
    
    if ($component) {
        $components['advanced'][] = $component;
    }
    
    return $components;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/editor_components', $editorComponents, $formId);`

This filter is located in FluentForm\App\Modules\Component\Component -> index()

</explain-block>

<explain-block title="fluentform/load_default_public">

This filter allows you to toggle the loading of default public styles for Fluent Forms.

**Parameters**

- `$status` (boolean) Whether to load the default public styles (true) or not (false).
- `$form` (Object) Form object. Maybe an empty object in some cases.
- `$postId` (int) The current post ID. May be 0 if not available.

**Usage**

```php

add_filter('fluentform/load_default_public', function ($status, $form, $postId) {
// Your custom logic here

return $status;
}, 10, 3);
```

**Reference**

This filter is applied in multiple locations:

1. `FluentForm\App\Modules\Component\Component::maybeLoadFluentFormStyles()`
2. `FluentForm\App\Modules\Component\Component::renderForm()`
3. In the `wp` action hook for handling form previews
4. In the `enqueue_block_editor_assets` action hook for Gutenberg integration

Example of filter application:

```php
$loadPublicStyle = apply_filters('fluentform/load_default_public', $initialStatus, $form, $postId);
```

**Note:** This filter replaces the deprecated `fluentform_load_default_public` filter. It's recommended to use `fluentform/load_default_public` in all new code.

</explain-block>

<explain-block title="fluentform/load_styles">

This filter is available before loading fluentform styles.

**Parameters**

- `$status` (boolean) True / False
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/load_styles', function ($status, $form) {
   // Do your stuff here

   return $status;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/load_styles', false, $post);`

This filter is located in FluentForm\App\Modules\Component\Component -> maybeLoadFluentFormStyles()

</explain-block>

<explain-block title="fluentform/global_form_vars">

This filter returns the variables for localizing with fluentform script.

**Parameters**

- `$globalVars` (array) Localized Global Variable Array

**Usage**

```php
add_filter('fluentform/global_form_vars', function ($globalVars) {
   // Do your stuff here

   return $globalVars;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/global_form_vars', $data);`

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

</explain-block>

<explain-block title="fluentform/form_vars_for_JS">

You can modify Form Default Variables Javascript using this filter.

**Parameters**

- `$form_vars` (array) Form Variables
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/form_vars_for_JS', function($form_vars, $form) {
   // Do your stuff here

   return $form_vars;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/form_vars_for_JS', $form_vars, $form);`

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts))

</explain-block>

<explain-block title="fluentform/disabled_analytics">

Using this filter you can toggle the form analytics.

**Parameters**

- `$status` (boolean) whether form analytics is enabled

**Usage**

```php
add_filter('fluentform/disabled_analytics', function($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/disabled_analytics', $disableAnalytics);`

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

</explain-block>

<explain-block title="fluentform/date_i18n">

This filter returns date fields internationalized strings.

**Parameters**

- `$i18n` (array) Internationalized Strings

**Usage**

```php
add_filter('fluentform/date_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/date_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Component\Component -> getDatei18n()

</explain-block>

<explain-block title="'fluentform/settings_module_' . $module">

This filter returns form extra settings component.

**Parameters**

- `$component` (array) Components
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/settings_module_' . $module, function ($component, $formId) {
   // Do your stuff here

   return $result;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/settings_module_' . $module, $component, $formId);`

This filter is located in FluentForm\App\Modules\Form\Settings\ExtraSettings -> getExtraSettingsComponent()

</explain-block>

<explain-block title="fluentform/form_settings_ajax">

You can modify a form setting Ajax using this filter.

**Parameters**

- `$settings` (array) Form Settings
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/form_settings_ajax', function ($settings, $formId) {
   // Do your stuff here

   return $settings;
}, 10, 2);

```

**Reference**

`applyFilters('fluentform/form_settings_ajax', $settings, $formId);`

This filter is located in FluentForm\App\Settings\FormSettings -> getGeneralSettingsAjax()

</explain-block>

<explain-block title="fluentform/form_fields_update">

This filter returns the updated field when updating a form field.

**Parameters**

- `$formFields` (array) Form Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/form_fields_update', function ($formFields, $formId) {
   // Do your stuff here

   return $defaultSettings;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/form_fields_update', $formFields, $formId);`

This filter is located in FluentForm\App\Services\Form\Updater -> update($attributes = [])

</explain-block>

<explain-block title="'fluentform/response_render_' . $field['element']">

This filter returns response data for the form inputs.

**Parameters**

- `$value` (array) Field Element
- `$field` (array) Field Data
- `$formId` (int) Form ID
- `$isHtml` (boolean) Whether the value rendered as HTML

**Usage**

```php
add_filter('fluentform/response_render_textarea', function ($value, $field, $formId, $isHtml) {
    if (!$isHtml || !$value) {
         return $value;
    }
     
    return '<span style="white-space: pre-line">' . $value . '</span>';
}, 10, 4);

add_filter('fluentform/response_render_input_password', function ($value, $field, $formId, $isHtml = false) {
    if (Helper::shouldHidePassword($formId)) {
        $value = str_repeat('*', 6) . ' ' . __('(truncated)', 'fluentform');
    }

    return $value;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/response_render_' . $field['element'], $response, $field, $formId, $isHtml);;`

This filter is located in FluentForm\App\Modules\Form\FormDataParser -> parseData($response, $fields, $formId, $isHtml = false)

</explain-block>

<explain-block title="fluentform/form_submission_confirmation">

You can use this filter hook to alter form confirmation message after a successful form submission.

**Parameters**

- `$confirmation` (array) Confirmation Details
```php
$confirmation = [
    'redirectTo'           => 'samePage'  // or customUrl or customPage
    'messageToShow'        => 'Thank you for your message. We will get in touch with you shortly'
    'customPage'           => '' 
    'samePageFormBehavior' => 'hide_form' // or reset_form 
    'customUrl'            => 'https://yourcustomurl.com'
];
```
- `$formData` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/form_submission_confirmation', function($confirmation, $formData, $form) {
   // Do your stuff here

   return $confirmation;
}, 10, 3);

```
The following would apply to a specific form with id 5:
```php
add_filter('fluentform/form_submission_confirmation', function($confirmation, $formData, $form)
{
   if ($form->id != 5) {
      return $confirmation;
   }

   // Do your stuffs here 
   return $confirmation;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/submission_confirmation', $returnData, $form, $confirmation);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> getReturnData($insertId, $form, $formData)

</explain-block>

<explain-block title="fluentform/submission_message_parse">

This filter parses the shortcode of the confirmation / email body message.

**Parameters**

- `$confirmation` (array) Confirmation Details
- `$insertId` (string) Submission ID
- `$formData` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/submission_message_parse', function($confirmation, $insertId, $formData, $form) {
   // Do your stuff here

   return $confirmation;
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/submission_message_parse', $confirmation['messageToShow'], $insertId, $formData, $form);`

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerServices -> getReturnData($insertId, $form, $formData)

</explain-block>

<explain-block title="fluentform/validations">

This filter returns all validations before form submission.

**Parameters**

- `$originalValidations` (array) Default Validations
- `$form` (object) Form Object
- `$formData` (array) Form Data

**Usage**

```php
add_filter('fluentform/validations', function ($originalValidations, $form, $formData) {
   // Do your stuff here

   return $originalValidations;
}, 10, 3);

```

**Reference**

` apply_filters('fluentform/validations', $originalValidations, $this->form, $formData);`

This filter is located in FluentForm\App\Services\Form -> validateSubmission(&$fields, &$formData)

</explain-block>

<explain-block title="'fluentform/validate_input_item_' . $field['element']">

This filter returns validations for specific field before form submission.

**Parameters**

- `$validation` (string) Form's Validation Message
- `$field` (array) Field Settings
- `$formData` (array) Form Data
- `$fields` (array) All Fields of the Form
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/validate_input_item_' . $field['element'], function($validation, $field, $formData, $fields, $form) {
   // Do your stuff here

   return $validation;
}, 10, 5);

```
Similar Filter for Other Input
```php
/*
 * Common Filter hook names
 * Text/Mask: fluentform/validate_input_item_input_text
 * Email: fluentform/validate_input_item_input_email
 * Textarea: fluentform/validate_input_item_textarea
 * Numeric: fluentform/validate_input_item_input_number
 * Range Slider: fluentform/validate_input_item_rangeslider
 * Address: fluentform/validate_input_item_address
 * Country Select: fluentform/validate_input_item_select_country
 * Select: fluentform/validate_input_item_select
 * Radio: fluentform/validate_input_item_input_radio
 * Checkbox: fluentform/validate_input_item_input_checkbox
 * Website URL: fluentform/validate_input_item_input_input_url
 * Date: fluentform/validate_input_item_input_input_date
 * Image Upload: fluentform/validate_input_item_input_image
 * File Upload: fluentform/validate_input_item_input_file
 * Phone Field: fluentform/validate_input_item_phone
 * Color Picker: fluentform/validate_input_item_color_picker
 * Net Promoter Score: fluentform/validate_input_item_net_promoter_score
 * Password: fluentform/validate_input_item_input_password
 * Ratings: fluentform/validate_input_item_ratings
 */
```
**Reference**

`apply_filters('fluentform/validate_input_item_' . $field['element'], '', $field, $formData, $fields, $this->form, $errors);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateSubmission(&$fields, &$formData)

</explain-block>

<explain-block title="fluentform/validation_errors">

This filter return all the validation errors.

**Parameters**

- `$errors` (array) Errors
- `$formData` (array) Form Data
- `$form` (Object) Form Object
- `$fields` (array) Form Fields

**Usage**

```php
add_filter('fluentform/validation_errors', function ($errors, $formData, $form, $fields) {
   // Do your stuff here

   return $errors;
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/validation_errors', $errors, $formData, $this->form, $fields);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateSubmission(&$fields, &$formData)

</explain-block>

<explain-block title="fluentform/prevent_malicious_attacks">

You can toggle malicious attack prevention using this filter.

**Parameters**

- `$status` (boolean) Whether Malicious Attack Prevention Enabled
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/prevent_malicious_attacks', function($status, $formId) {
   // Do your stuff here

   return $status;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/prevent_malicious_attacks', true, $this->form->id);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> preventMaliciousAttacks()

</explain-block>

<explain-block title="fluentform/honeypot_status">

You can toggle Honeypot status using this filter.

**Parameters**

- `$status` (boolean) Whether Honeypot status is Enabled
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/honeypot_status', function($status, $formId) {
   // Do your stuff here

   return $status;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/honeypot_status', $status, $formId);`

This filter is located in FluentForm\App\Modules\Form\Honeypot -> isEnabled($formId = false)

</explain-block>

<explain-block title="fluentform/honeypot_name">

You can change Honeypot name using this filter just before rendering the form.

**Parameters**

- `$name` (string) Honeypot Field Name
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/honeypot_name', function($name, $formId) {
   // Do your stuff here
   $customStr = 'custom_name';
   $name = 'item__' . $formId . '__fluent_checkme_' . $customStr;

   return $name;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/honeypot_name', 'item__' . $formId . '__fluent_checkme_', $formId);`

This filter is located in FluentForm\App\Modules\Form\HoneyPot -> getFieldName($formId)

</explain-block>

<explain-block title="fluentform/predefined_forms">

You can add or modify Predefined Forms in Form Templates using this filter.

**Parameters**

- `$forms` (array) Template Forms

**Usage**

```php
add_filter('fluentform/predefined_forms', function ($forms) {
   // Do your stuff here

   return $forms;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/predefined_forms', $forms);`

This filter is located in FluentForm\App\Models\Traits\PredefinedForms -> findPredefinedForm($attributes = [])

</explain-block>

<explain-block title="fluentform/predefined_dropdown_forms">

You can add or modify Predefined Post Forms in Form Templates using this filter.

**Parameters**

- `$forms` (array) Template Post Forms

**Usage**

```php
add_filter('fluentform/predefined_dropdown_forms', function($forms) {
   // Do your stuff here

   return $forms;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/predefined_dropdown_forms', $dropDownForms),`

This filter is located in FluentForm\App\Services\Form\FormService -> templates()

</explain-block>

<explain-block title="'fluentform/editor_init_element_' . $formField['element']">

Rendered form fields can be modified using this filter.

**Parameters**

- `$formField` (array) Form Field
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/editor_init_element_input_text', function ($element) {
    if (!isset($element['attributes']['maxlength'])) {
        $element['attributes']['maxlength'] = '';
    }
    
    return $element;
});
```
```php
add_filter('fluentform/editor_init_element_input_number', function ($item) {
    if (!isset($item['settings']['number_step'])) {
        $item['settings']['number_step'] = '';
    }
    if (!isset($item['settings']['numeric_formatter'])) {
        $item['settings']['numeric_formatter'] = '';
    }
    if (!isset($item['settings']['prefix_label'])) {
        $item['settings']['prefix_label'] = '';
    }
    if (!isset($item['settings']['suffix_label'])) {
        $item['settings']['suffix_label'] = '';
    }

    return $item;
});
```

**Reference**

`apply_filters('fluentform/editor_init_element_' . $formField['element'], $formField, $form);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> enqueueEditorAssets()

</explain-block>

<explain-block title="fluentform/inner_route_has_permission">

You can check admin menu route has proper permission using this filter.

**Parameters**

- `$hasPermission` (boolean) Whether the current route has permission
- `$route` (string) Route Name
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/inner_route_has_permission', function($hasPermission, $route, $formId) {
   // Do your stuff here

   return $hasPermission;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/form_inner_route_permission_set', Acl::hasPermission($toVerifyPermission), $route, $formId);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderFormAdminRoute()

</explain-block>

<explain-block title="fluentform/form_admin_menu">

You can modify admin menu items using this filter.

**Parameters**

- `$permission` (array) Admin Permission Set
- `$form_id` (int) Form ID
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/form_admin_menu', function($formAdminMenus, $form_id, $form) {
   // Do your stuff here

   return $formAdminMenus;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/form_admin_menu', $formAdminMenus, $form_id, $form);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderFormInnerPages()

</explain-block>

<explain-block title="fluentform/form_settings_menu">

You can modify form settings menu items using this filter.

**Parameters**

- `$permission` (array) Admin Permission Set

**Usage**

```php
add_filter('fluentform/form_settings_menu', function ($settingsMenus, $form_id) {
   // Do your stuff here

   return $settingsMenus;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/form_settings_menu', $settingsMenus, $form_id);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderSettings($form_id)

</explain-block>

<explain-block title="fluentform/editor_element_search_tags">

You can modify editor element search tags using this filter.

**Parameters**

- `$searchTags` (array) Editor Fields
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/editor_element_search_tags', function ($searchTags, $form) {
   // Do your stuff here

   return $searchTags;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/editor_element_search_tags', $searchTags, $form);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> enqueueEditorAssets()

</explain-block>

<explain-block title="fluentform/editor_element_settings_placement">

Using this filter you can insert more editor settings for input in the editor.

**Parameters**

- `$placements` (array) Editor Fields
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/editor_element_settings_placement', function ($placements, $form) {
   // Do your stuff here

   return $placements;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/editor_element_settings_placement', $elementPlacements, $form);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> enqueueEditorAssets()

</explain-block>

<explain-block title="fluentform/conversational_editor_elements">

You can modify conversational editor elements using this filter.

**Parameters**

- `$elements` (array) Conversational Editor Elements
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/conversational_editor_elements', function ($elements, $formId) {
    // Do your stuff here
    
    return $elements;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/conversational_editor_elements', $elements, $formId);`

This filter is located in FluentForm\App\Modules\Widgets\EditorButtonModule -> pageSupportedMediaButtons()

</explain-block>

<explain-block title="'fluentform/input_data_' . $element">

This filter returns the input labels for the Submission on the Submission page.

**Parameters**

- `$fieldData` (array) Form Data of the Field
- `$field` (array) Field Data
- `$formData` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/input_data_input_number', function ($fieldData, $field, $formData, $form) {
    // Do your stuff here
    $formatter = ArrayHelper::get($field, 'raw.settings.numeric_formatter');
    if (!$formatter) {
        return $value;
    }
        
    return Helper::getNumericValue($value, $formatter);
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/input_data_' . $element, $formData[$fieldName], $field, $formData, $this->form);`

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateSubmission(&$fields, &$formData)

</explain-block>

<explain-block title="fluentform/before_render_item">

You can use this filter to modify the form inputs before form render.

**Parameters**

- `$item` (array) Input Item
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/before_render_item', function ($item, $form) {
    // Do your stuff here
    
    return $item;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/before_render_item',  $item, $form);`

This filter is located in FluentForm\App\Services\FormBuilder -> buildFormBody($form)

</explain-block>

<explain-block title="fluentform/frontend_date_format">

You can modify date formats to show in form frontend using the filter.

**Parameters**

- `$dateFormats` (array) Date formats Settings
- `$settings` (array) Field Settings  
- `$form` (object) Form Object  

**Usage**

```php
add_filter('fluentform/frontend_date_format', function ($dateFormats, $settings, $form) {
    // Do your stuff here
    
    return $dateFormats;
}, 10, 3);

```
Date formats to filter:
```php
[
    'dateFormat'    => $dateFormat,
    'enableTime'    => $hasTime,
    'noCalendar'    => ! $this->hasDate($dateFormat),
    'disableMobile' => true,
    'time_24hr'     => $time24,
];
```

**Reference**

`apply_filters('fluentform/frontend_date_format', $dateFormats, $settings, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\DateTime -> getDateFormatConfigJSON($settings, $form)

</explain-block>

<explain-block title="'fluentform/is_hide_submit_btn_' . $form->id">

You can hide / show submit button using the filter.

**Parameters**

- `$status` (boolean) Whether show / hide Submit Button

**Usage**

```php
add_filter('fluentform/is_hide_submit_btn_' . $form->id, function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/is_hide_submit_btn_' . $form->id, false);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\SubmitButton -> compile($data, $form)

</explain-block>

<explain-block title="fluentform/submit_button_force_no_style">

You can modify admin menu items using this filter.

**Parameters**

- `$permission` (array) Admin Permission Set
- `$form_id` (int) Form ID
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/form_admin_menu', function($formAdminMenus, $form_id, $form) {
   // Do your stuff here

   return $formAdminMenus;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/form_admin_menu', $formAdminMenus, $form_id, $form);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderFormInnerPages()

</explain-block>

<explain-block title="fluentform/submit_button_force_no_style">

You can adjust submit button style to have no style using this filter.

**Parameters**

- `$status` (boolean) Whether the submit button style is active

**Usage**

```php
add_filter('fluentform/submit_button_force_no_style', function($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/submit_button_force_no_style', $status);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\SubmitButton -> compile($data, $form)

</explain-block>

<explain-block title="fluentform/disable_inputmode">

You can disable text input field using the filter.

**Parameters**

- `$status` (boolean) Whether text input is disabled

**Usage**

```php
add_filter('fluentform/disable_inputmode', function ($status) {
   // Do your stuff here

   return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/disable_inputmode', $status);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\Text -> compile($data, $form)

</explain-block>

<explain-block title="fluentform/form_class">

You can use this filter to modify a form CSS classes.

**Parameters**

- `$item` (array) Input Item
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/form_class', function ($css_class, $targetForm) use ($form) {
    if ($targetForm->id == $form->id) {
        $css_class .= ' ff_calc_form';
    }
    return $css_class;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/form_class', $formClass, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> build($form, $extraCssClass = '', $instanceCssClass = '', $atts = [])

</explain-block>

<explain-block title="fluentform/disable_accessibility_fieldset">

You can use this filter to toggle form accessibility status and fieldset.

**Parameters**

- `$status` (boolean) Whether the accessibility status is enabled
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/disable_accessibility_fieldset', function ($status, $form) {
    // Do your stuff here
    
    return $status;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/disable_accessibility_fieldset', true, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> build($form, $extraCssClass = '', $instanceCssClass = '', $atts = [])

</explain-block>

<explain-block title="fluentform/form_input_types">

You can use this filter to add more form input types.

**Parameters**

- `$types` (array) Form Input Types

**Usage**

```php
add_filter('fluentform/form_input_types', function ($types) {
    // Do your stuff here
    
    return $types;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/form_input_types', $types);`

This filter is located in FluentForm\App\Services\Parser\Form -> setInputTypes($types = [])

</explain-block>

<explain-block title="fluentform/form_payment_fields">

You can use this filter to add more form payment input fields.

**Parameters**

- `$types` (array) Form Payment Input Types

**Usage**

```php
add_filter('fluentform/form_payment_fields', function ($types) {
    // Do your stuff here
    
    return $types;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/form_payment_fields', $types);`

This filter is located in FluentForm\App\Services\Parser\Form -> hasPaymentFields()

</explain-block>

<explain-block title="fluentform/form_payment_inputs">

You can use this filter to modify form payment input fields types

**Parameters**

- `$data` (array) Form Payment Input Types

**Usage**

```php
add_filter('fluentform/form_payment_inputs', function ($data) {
    // Do your stuff here
    
    return $data;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/form_payment_inputs', $data);`

This filter is located in FluentForm\App\Services\Parser\Form -> getPaymentInputFields($with = ['element'])

</explain-block>

<explain-block title="fluentform/show_preview_promo">

You can use this filter to toggle preview promo.

**Parameters**

- `$status` (boolean) Whether to show preview promo

**Usage**

```php
add_filter('fluentform/show_preview_promo', function ($status) {
    // Do your stuff here
    
    return $status;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/show_preview_promo', true);`

This filter is located in FluentForm\app\views\frameless\template\show_preview.php

</explain-block>

<explain-block title="fluentform/rendering_form">

This filter hook is fired before form render. You can use this to change rendered form.

**Parameters**

- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/rendering_form', function ($form) {
    // Do your stuff here
    
    return $form;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/rendering_form', $form);`

This filter is located in FluentForm\app\Modules\Component\Component -> renderForm($atts)

</explain-block>

<explain-block title="fluentform/submission_confirmation">

This filter is available just before sending the success message to the user. You can use this filter hook to alter the form confirmation message and redirect settings dynamically.

**Parameters**

- `$returnData` (array) Submitted Data
- `$form` (object) Form Object
- `$confirmation` (array) Submission Confirmation Message
- `$insertId` (int) Submission ID
- `$formData` (array) Form Data

**Usage**

```php
add_filter('fluentform/submission_confirmation', function ($returnData, $form, $confirmation, $insertId, $formData) {
    // Do your stuff here
    
    return $returnData;
}, 10, 5);

```
```php
$returnData = [
    'redirectUrl' => wp_sanitize_redirect(urldecode($redirectUrl)),
    'message'     => $message,
];
```

**Reference**

`apply_filters('fluentform/submission_confirmation', $returnData, $form, $confirmation, $insertId, $formData);`

This filter is located in FluentForm\app\Services\Form\SubmissionHandlerService -> getReturnData($insertId, $form, $formData)

</explain-block>


