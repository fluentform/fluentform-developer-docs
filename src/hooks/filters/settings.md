# Settings Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="43 Filters" />

These filters let you modify admin settings, global configuration, and permissions.

<explain-block title="fluentform/addOnModule_i18n">

You can alter or added more internationalize (i18n) for addon module string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/addOnModule_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/addOnModule_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getAddOnModuleI18n()

</explain-block>

<explain-block title="fluentform/addons_extra_menu">

You can modify addon modules menus using this filter.

**Parameters**

- `$extraMenus` (array) Addon Modules Menus

**Usage**

```php
add_filter('fluentform/addons_extra_menu', function ($menus) {
    $menus['fluentform_pdf'] = __('Fluent Forms PDF', 'fluentform');

    return $menus;
}, 99, 1);

```
**Reference**

`apply_filters('fluentform/addons_extra_menu', $extraMenus);`

This filter is located in FluentForm\App\Modules\Widgets\AddOnModule -> render()

</explain-block>

<explain-block title="fluentform/admin_approval_confirmation_message">

<Badge type="tip" vertical="top" text="Pro" /> <Badge type="warning" vertical="top" text="Added in 6.2.2" />

Filter the HTML content shown to a user after their submission state changes through Pro's Admin Approval flow (approved, rejected, or awaiting moderation). Lets you rewrite or localize the public-facing confirmation message without overriding the underlying templates.

**Parameters**

- `$landingContent` (string) The HTML message about to be rendered
- `$status` (string) Submission status — typically `'approved'`, `'rejected'`, or `'pending'`
- `$form` (object) The form being processed

**Usage**

```php
add_filter('fluentform/admin_approval_confirmation_message', function ($content, $status, $form) {
    if ($status === 'rejected') {
        return '<p>' . esc_html__('Thanks for submitting. We were unable to accept this entry.', 'your-textdomain') . '</p>';
    }
    return $content;
}, 10, 3);
```

**Reference**

`apply_filters('fluentform/admin_approval_confirmation_message', $landingContent, $submission->status, $form);`

This filter is located in `FluentFormPro\classes\AdminApproval\AdminApproval`.

</explain-block>

<explain-block title="fluentform/admin_approval_messages">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$approvalMessages` — see source
- `$formData` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/admin_approval_messages', function ($approvalMessages, $formData, $form) {
    return $approvalMessages;
}, 10, 3);
```

**Reference**

`$approvalMessages = apply_filters('fluentform/admin_approval_messages', $approvalMessages, $formData, $form);`

This filter is located in `src/classes/AdminApproval/AdminApproval.php` (line 139).

</explain-block>

<explain-block title="fluentform/admin_i18n">

You can alter or added more internationalize (i18n) for admin side string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/admin_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/admin_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getAdminI18n()

</explain-block>

<explain-block title="fluentform/admin_menu_bar_items">

You can add or modify Admin Menu Bar items using this filter.

**Parameters**

- `$items` (array) Admin Menu Bar items

**Usage**

```php
add_filter('fluentform/admin_menu_bar_items', function($items) {
   // Do your stuff here

   return $items;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/admin_menu_bar_items', $items);`

This filter is located in FluentForm\App\Modules\Registerer\AdminBar -> getMenuItems()

</explain-block>

<explain-block title="fluentform/advanced_validation_settings">

You can modify Advanced Validation Settings using this filter.

**Parameters**

- `$settings` (array) Form Advanced Validation Settings

**Usage**

```php
add_filter('fluentform/advanced_validation_settings', function($settings) {
   // Do your stuff here

   return $settings;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/advanced_validation_settings', $settings);`

This filter is located in FluentForm\App\Models\Form -> getAdvancedValidationSettings($formId)

</explain-block>

<explain-block title="fluentform/all_editor_shortcodes">

You can use this filter to modify all the editor shortcodes.

**Parameters**

- `$generalShortCodes` (array) All General Shortcodes
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/all_editor_shortcodes', function ($editorShortCodes, $form) {
    // Do your stuff here
    
    return $editorShortCodes;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/all_editor_shortcodes', $editorShortCodes, $form);`

This filter is located in FluentForm\boot\globals.php -> fluentFormGetAllEditorShortCodes($form)

</explain-block>

<explain-block title="fluentform/all_forms_vars">

You can modify form variables using this filter.

**Parameters**

- `$data` (array) Localized Form Vars under 'FluentFormApp'

**Usage**

```php
add_filter('fluentform/all_forms_vars', function($data) {
   // Do your stuff here

   return $vars;
}, 10, 1);

```
$data consists of the following parameters:
```php
$data = [
    'plugin'             => $this->app->config->get('app.slug'),
    'formsCount'         => $formsCount,
    'hasPro'             => defined('FLUENTFORMPRO'),
    'upgrade_url'        => fluentform_upgrade_url(),
    'adminUrl'           => admin_url('admin.php?page=fluent_forms'),
    'adminUrlWithoutPageHash' => admin_url('admin.php'),
    'isDisableAnalytics' => $this->app->applyFilters('fluentform/disabled_analytics', false),
    'plugin_public_url'    => fluentformMix(),
];
```

**Reference**

`apply_filters('fluentform/all_forms_vars', $data);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderForms()

</explain-block>

<explain-block title="fluentform/allowed_css_properties">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$style_tags` — see source

**Usage**

```php
add_filter('fluentform/allowed_css_properties', function ($style_tags) {
    return $style_tags;
}, 10, 1);
```

**Reference**

`$style_tags = apply_filters('fluentform/allowed_css_properties', $style_tags);`

This filter is located in `src/classes/Quiz/QuizController.php` (line 49).

</explain-block>

<explain-block title="fluentform/available_date_formats">

You can modify date formats using the filter.

**Parameters**

- `$dateFormats` (array) Date formats

**Usage**

```php
add_filter('fluentform/available_date_formats', function ($dateFormats) {
    // Do your stuff here
    
    return $dateFormats;
}, 10, 1);

```
Date formats to filter:
```php
[
    'm/d/Y'       => 'm/d/Y - (Ex: 04/28/2018)', // USA
    'd/m/Y'       => 'd/m/Y - (Ex: 28/04/2018)', // Canada, UK
    'd.m.Y'       => 'd.m.Y - (Ex: 28.04.2019)', // Germany
    'n/j/y'       => 'n/j/y - (Ex: 4/28/18)',
    'm/d/y'       => 'm/d/y - (Ex: 04/28/18)',
    'M/d/Y'       => 'M/d/Y - (Ex: Apr/28/2018)',
    'y/m/d'       => 'y/m/d - (Ex: 18/04/28)',
    'Y-m-d'       => 'Y-m-d - (Ex: 2018-04-28)',
    'd-M-y'       => 'd-M-y - (Ex: 28-Apr-18)',
    'm/d/Y h:i K' => 'm/d/Y h:i K - (Ex: 04/28/2018 08:55 PM)', // USA
    'm/d/Y H:i'   => 'm/d/Y H:i - (Ex: 04/28/2018 20:55)', // USA
    'd/m/Y h:i K' => 'd/m/Y h:i K - (Ex: 28/04/2018 08:55 PM)', // Canada, UK
    'd/m/Y H:i'   => 'd/m/Y H:i - (Ex: 28/04/2018 20:55)', // Canada, UK
    'd.m.Y h:i K' => 'd.m.Y h:i K - (Ex: 28.04.2019 08:55 PM)', // Germany
    'd.m.Y H:i'   => 'd.m.Y H:i - (Ex: 28.04.2019 20:55)', // Germany
    'h:i K'       => 'h:i K (Only Time Ex: 08:55 PM)',
    'H:i'         => 'H:i (Only Time Ex: 20:55)',
];
```

**Reference**

`apply_filters('fluentform/available_date_formats', $dateFormats);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\DateTime -> getAvailableDateFormats()

</explain-block>

<explain-block title="fluentform/block_editor_style_presets">

**Parameters**

- `$presets` — see source

**Usage**

```php
add_filter('fluentform/block_editor_style_presets', function ($presets) {
    return $presets;
}, 10, 1);
```

**Reference**

`$presets = apply_filters('fluentform/block_editor_style_presets', $presets);`

This filter is located in `app/Hooks/actions.php` (line 1177).

</explain-block>

<explain-block title="fluentform/build_style_from_theme">

**Parameters**

- `$value` — see source
- `$formId` — see source
- `$style` — see source

**Usage**

```php
add_filter('fluentform/build_style_from_theme', function ($value, $formId, $style) {
    return $value;
}, 10, 3);
```

**Reference**

`$loadCss = apply_filters('fluentform/build_style_from_theme', '', $formId, $style);`

This filter is located in `app/Modules/Form/Settings/FormCssJs.php` (line 77).

</explain-block>

<explain-block title="fluentform/calculation_field_messages">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$calculationMessages` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/calculation_field_messages', function ($calculationMessages, $form) {
    return $calculationMessages;
}, 10, 2);
```

**Reference**

`$calculationMessages = apply_filters('fluentform/calculation_field_messages', $calculationMessages, $form);`

This filter is located in `src/classes/Calculation.php` (line 25).

</explain-block>

<explain-block title="fluentform/conditional_content">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$content` — see source
- `$value` — see source
- `$value_2` — see source

**Usage**

```php
add_filter('fluentform/conditional_content', function ($content, $value, $value_2) {
    return $content;
}, 10, 3);
```

**Reference**

`$content = apply_filters('fluentform/conditional_content', $content, static::$formData, static::$form);`

This filter is located in `src/classes/ConditionalContent.php` (line 75).

</explain-block>

<explain-block title="fluentform/coupon_general_failure_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$formId` — see source

**Usage**

```php
add_filter('fluentform/coupon_general_failure_message', function ($value, $formId) {
    return $value;
}, 10, 2);
```

**Reference**

`'message' => wp_kses_post(__(apply_filters('fluentform/coupon_general_failure_message', 'The provided coupon is not valid', $formId), 'fluentformpro'))`

This filter is located in `src/Payments/Classes/CouponController.php` (line 26).

</explain-block>

<explain-block title="fluentform/dashboard_capability">

You can modify Fluent Forms Dashboard Capability using this filter.

**Parameters**

- `$roleName` (string) Role Name. By Default, 'fluentform_dashboard_access'

**Usage**

```php
add_filter('fluentform/dashboard_capability', function($roleName) {
   // Do your stuff here

   return $roleName;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/dashboard_capability', 'fluentform_dashboard_access');`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> register()

</explain-block>

<explain-block title="fluentform/dashboard_notices">

You can use this filter to add dashboard notices.

**Parameters**

- `$notices` (array) Notices

**Usage**

```php
add_filter('fluentform/dashboard_notices', function ($notices) {
    // Do your stuff here
    
    return $notices;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/dashboard_notices', $notices);`

This filter is located in FluentForm\app\views\admin\all_entries.php

</explain-block>

<explain-block title="fluentform/display_add_form_button">

You can toggle to support pages for showing media button using this filter.

**Parameters**

- `$isEligiblePage` (array) User Guide Links

**Usage**

```php
add_filter('fluentform/display_add_form_button', function ($isEligiblePage) {
    // Do your stuff here
    
    return $isEligiblePage;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/display_add_form_button', $isEligiblePage);`

This filter is located in FluentForm\App\Modules\Widgets\EditorButtonModule -> pageSupportedMediaButtons()

</explain-block>

<explain-block title="fluentform/double_optin_confirmation_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$defaults` — see source
- `$args` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/double_optin_confirmation_message', function ($defaults, $args, $form) {
    return $defaults;
}, 10, 3);
```

**Reference**

`$defaults['confirmation_message'] = apply_filters('fluentform/double_optin_confirmation_message', $defaults['confirmation_message'], [], $form);`

This filter is located in `src/classes/DoubleOptin.php` (line 111).

</explain-block>

<explain-block title="fluentform/double_optin_messages">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$optinMessages` — see source
- `$args` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/double_optin_messages', function ($optinMessages, $args, $form) {
    return $optinMessages;
}, 10, 3);
```

**Reference**

`$optinMessages = apply_filters('fluentform/double_optin_messages', $optinMessages, [], $form);`

This filter is located in `src/classes/DoubleOptin.php` (line 121).

</explain-block>

<explain-block title="fluentform/editor_countries">

You can modify or add more countries using the filter.

**Parameters**

- `$country_names` (array) Country Names List

**Usage**

```php
add_filter('fluentform/editor_countries', function ($country_names) {
   // Do your stuff here

   return $country_names;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/editor_countries', $country_names);`

This filter is located in FluentForm\App\Services\FormBuilder\CountryNames.php

</explain-block>

<explain-block title="fluentform/editor_i18n">

You can alter or added more internationalize (i18n) for form editor string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/editor_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/editor_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getEditorI18n()

</explain-block>

<explain-block title="fluentform/editor_shortcodes">

You can use this filter to modify all the general shortcodes.

**Parameters**

- `$generalShortCodes` (array) All General Shortcodes

**Usage**

```php
add_filter('fluentform/editor_shortcodes', function ($generalShortCodes) {
    // Do your stuff here
    
    return $generalShortCodes;
}, 10, 1);

```
```php
[
    'title'      => 'General SmartCodes',
    'shortcodes' => [
        '{wp.admin_email}'            => __('Admin Email', 'fluentform'),
        '{wp.site_url}'               => __('Site URL', 'fluentform'),
        '{wp.site_title}'             => __('Site Title', 'fluentform'),
        '{ip}'                        => __('IP Address', 'fluentform'),
        '{date.m/d/Y}'                => __('Date (mm/dd/yyyy)', 'fluentform'),
        '{date.d/m/Y}'                => __('Date (dd/mm/yyyy)', 'fluentform'),
        '{embed_post.ID}'             => __('Embedded Post/Page ID', 'fluentform'),
        '{embed_post.post_title}'     => __('Embedded Post/Page Title', 'fluentform'),
        '{embed_post.permalink}'      => __('Embedded URL', 'fluentform'),
        '{http_referer}'              => __('HTTP Referer URL', 'fluentform'),
        '{user.ID}'                   => __('User ID', 'fluentform'),
        '{user.display_name}'         => __('User Display Name', 'fluentform'),
        '{user.first_name}'           => __('User First Name', 'fluentform'),
        '{user.last_name}'            => __('User Last Name', 'fluentform'),
        '{user.user_email}'           => __('User Email', 'fluentform'),
        '{user.user_login}'           => __('User Username', 'fluentform'),
        '{browser.name}'              => __('User Browser Client', 'fluentform'),
        '{browser.platform}'          => __('User Operating System', 'fluentform'),
        '{random_string.your_prefix}' => __('Random String with Prefix', 'fluentform'),
    ],
];

```
**Reference**

`apply_filters('fluentform/editor_shortcodes', $generalShortCodes);`

This filter is located in FluentForm\boot\globals.php -> fluentFormEditorShortCodes()

</explain-block>

<explain-block title="fluentform/editor_vars">

You can modify editor variables using this filter.

**Parameters**

- `$data` (array) Editor variables

**Usage**

```php
add_filter('fluentform/editor_vars', function ($data) {
   // Do your stuff here

   return $data;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/editor_vars', $data);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> enqueueEditorAssets()

</explain-block>

<explain-block title="fluentform/email_summary_body_view_api_logs">

**Parameters**

- `$viewAllApiLogs` — see source

**Usage**

```php
add_filter('fluentform/email_summary_body_view_api_logs', function ($viewAllApiLogs) {
    return $viewAllApiLogs;
}, 10, 1);
```

**Reference**

`$viewAllApiLogs = apply_filters('fluentform/email_summary_body_view_api_logs', $viewAllApiLogs);`

This filter is located in `app/Views/email/failedIntegration/body.php` (line 193).

</explain-block>

<explain-block title="fluentform/email_summary_settings">

**Parameters**

- `$settings` — see source

**Usage**

```php
add_filter('fluentform/email_summary_settings', function ($settings) {
    return $settings;
}, 10, 1);
```

**Reference**

`$settings = apply_filters('fluentform/email_summary_settings', $settings);`

This filter is located in `app/Services/Scheduler/Scheduler.php` (line 27).

</explain-block>

<explain-block title="fluentform/entries_i18n">

You can alter or added more internationalize (i18n) for form submission string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/entries_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/entries_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getEntriesI18n()

</explain-block>

<explain-block title="fluentform/entry_migration_max_limit">

You can use this filter to set the submission migration limit.

**Parameters**

- `$maxLimit` (int) Submission Migration Max Limit, By Default 1000;
- `$key` (string) Migration Key Name
- `$totalEntries` (array) Total Submissions
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/entry_migration_max_limit', function ($maxLimit, $key, $totalEntries, $formId) {
    // Do your stuff here
    
    return $maxLimit;
}, 10, 4);

```
**Reference**

`apply_filters('fluentform/entry_migration_max_limit', static::DEFAULT_ENTRY_MIGRATION_MAX_LIMIT, $this->key, $totalEntries, $formId);`

This filter is located in FluentForm\App\Services\Migrator\Classes\CalderaMigrator -> getEntries($formId)

</explain-block>

<explain-block title="fluentform/file_type_options">

You can modify file types for upload files.

**Parameters**

- `$fileTypeOptions` (array) Supported File Type Options

**Usage**

```php
add_filter('fluentform/file_type_options', function ($fileTypeOptions) {
    // Do your stuff here
    
    return $fileTypeOptions;
}, 10, 1);

```
File Type Options Array:
```php
$fileTypeOptions = [
    [
        'label' => __('Images (jpg, jpeg, gif, png, bmp)', 'fluentform'),
        'value' => 'jpg|jpeg|gif|png|bmp',
    ],
    [
        'label' => __('Audio (mp3, wav, ogg, oga, wma, mka, m4a, ra, mid, midi)', 'fluentform'),
        'value' => 'mp3|wav|ogg|oga|wma|mka|m4a|ra|mid|midi|mpga',
    ],
    [
        'label' => __('Video (avi, divx, flv, mov, ogv, mkv, mp4, m4v, divx, mpg, mpeg, mpe)', 'fluentform'),
        'value' => 'avi|divx|flv|mov|ogv|mkv|mp4|m4v|divx|mpg|mpeg|mpe|video/quicktime|qt',
    ],
    [
        'label' => __('PDF (pdf)', 'fluentform'),
        'value' => 'pdf',
    ],
    [
        'label' => __('Docs (doc, ppt, pps, xls, mdb, docx, xlsx, pptx, odt, odp, ods, odg, odc, odb, odf, rtf, txt)', 'fluentform'),
        'value' => 'doc|ppt|pps|xls|mdb|docx|xlsx|pptx|odt|odp|ods|odg|odc|odb|odf|rtf|txt',
    ],
    [
        'label' => __('Zip Archives (zip, gz, gzip, rar, 7z)', 'fluentform'),
        'value' => 'zip|gz|gzip|rar|7z',
    ],
    [
        'label' => __('Executable Files (exe)', 'fluentform'),
        'value' => 'exe',
    ],
    [
        'label' => __('CSV (csv)', 'fluentform'),
        'value' => 'csv',
    ],
];
```
**Reference**

`apply_filters('fluentform/file_type_options', $fileTypeOptions);`

This filter is located in FluentForm\App\Services\FormBuilder\ValidationRuleSettings

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

<explain-block title="fluentform/form_inner_route_permission_set">

You can modify Admin Menu Route with permission using this filter.

**Parameters**

- `$permission` (array) Admin Permission Set

**Usage**

```php
add_filter('fluentform/form_inner_route_permission_set', function($permissions) {
   // Do your stuff here

   return $permissions;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/form_inner_route_permission_set', [
'editor'   => 'fluentform_forms_manager',
'settings' => 'fluentform_forms_manager',
'entries'  => 'fluentform_entries_viewer'
]);`

This filter is located in FluentForm\App\Modules\Registerer\AdminBar -> getMenuItems()

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

<explain-block title="fluentform/form_settings_smartcodes">

You can modify or add more smartcodes for form settings using the filter.

**Parameters**

- `$groups` (array) All Shortcode Group
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/form_settings_smartcodes', function ($groups, $form) {
   // Do your stuff here

   return $groups;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/form_settings_smartcodes', $groups, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\EditorShortcode -> getShortCodes($form)

</explain-block>

<explain-block title="fluentform/frameless_page_data">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$data` — see source

**Usage**

```php
add_filter('fluentform/frameless_page_data', function ($data) {
    return $data;
}, 10, 1);
```

**Reference**

`$data = apply_filters('fluentform/frameless_page_data', $data);`

This filter is located in `src/Payments/PaymentMethods/BaseProcessor.php` (line 569).

</explain-block>

<explain-block title="fluentform/get_global_settings_values">

You can modify global settings using the filter.

**Parameters**

- `$values` (array) All Global Settings Values
- `$key` (string) Key Name

**Usage**

```php
add_filter('fluentform/get_global_settings_values', function ($values, $key) {
   // Do your stuff here

   return $values;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/get_global_settings_values', $values, $key);`

This filter is located in FluentForm\App\Services\GlobalSettings\GlobalSettingsService -> get($attributes = [])

</explain-block>

<explain-block title="fluentform/get_meta_key_settings_response">

This filter returns settings responses meta key.

**Parameters**

- `$result` (array) Responses
- `$formId` (int) Form ID
- `$metaKey` (string) Form ID

**Usage**

```php
add_filter('fluentform/get_meta_key_settings_response', function ($result, $formId, $metaKey) {
   // Do your stuff here

   return $result;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/get_meta_key_settings_response', $result, $formId, $metaKey);`

This filter is located in FluentForm\App\Services\Settings\SettingsService -> get($attributes = [])

</explain-block>

<explain-block title="fluentform/global_default_message">

**Parameters**

- `$value` — see source
- `$key` — see source

**Usage**

```php
add_filter('fluentform/global_default_message', function ($value, $key) {
    return $value;
}, 10, 2);
```

**Reference**

`return apply_filters('fluentform/global_default_message', Arr::get(static::$globalDefaultMessages, $key , ''), $key);`

This filter is located in `app/Helpers/Traits/GlobalDefaultMessages.php` (line 23).

</explain-block>

<explain-block title="fluentform/global_default_message_setting_fields">

**Parameters**

- `$default_message_setting_fields` — see source

**Usage**

```php
add_filter('fluentform/global_default_message_setting_fields', function ($default_message_setting_fields) {
    return $default_message_setting_fields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/global_default_message_setting_fields', $default_message_setting_fields);`

This filter is located in `app/Helpers/Traits/GlobalDefaultMessages.php` (line 114).

</explain-block>

<explain-block title="fluentform/global_default_messages">

**Parameters**

- `$default_messages` — see source

**Usage**

```php
add_filter('fluentform/global_default_messages', function ($default_messages) {
    return $default_messages;
}, 10, 1);
```

**Reference**

`static::$globalDefaultMessages = apply_filters('fluentform/global_default_messages', $default_messages);`

This filter is located in `app/Helpers/Traits/GlobalDefaultMessages.php` (line 42).

</explain-block>

<explain-block title="fluentform/global_settings_component_settings_data">

**Parameters**

- `$globalSettingAppData` — see source

**Usage**

```php
add_filter('fluentform/global_settings_component_settings_data', function ($globalSettingAppData) {
    return $globalSettingAppData;
}, 10, 1);
```

**Reference**

`$globalSettingAppData = apply_filters('fluentform/global_settings_component_settings_data', $globalSettingAppData);`

This filter is located in `app/Modules/Renderer/GlobalSettings/Settings.php` (line 61).

</explain-block>

<explain-block title="fluentform/global_settings_components">

You can modify all global setting components using this filter.

**Parameters**

- `$components` (array) All Global Setting Component

**Usage**

```php
add_filter('fluentform/global_settings_components', function ($components) {
   // Do your stuff here

   return $components;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/global_settings_components', $components);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderGlobalSettings()

</explain-block>

<explain-block title="fluentform/global_settings_current_component">

You can modify selected global setting component using this filter.

**Parameters**

- `$currentComponent` (array) Selected Global Setting Component

**Usage**

```php
add_filter('fluentform/global_settings_current_component', function ($currentComponent) {
   // Do your stuff here

   return $currentComponent;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/global_settings_current_component', $currentComponent);`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> renderGlobalSettings()

</explain-block>

<explain-block title="fluentform/global_settings_i18n">

You can alter or added more internationalize (i18n) for global settings string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/global_settings_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/global_settings_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getGlobalSettingsI18n()

</explain-block>

<explain-block title="fluentform/global_settings_menu">

**Parameters**

- `$args` — see source

**Usage**

```php
add_filter('fluentform/global_settings_menu', function ($args) {
    return $args;
}, 10, 1);
```

**Reference**

`$customLinks = apply_filters('fluentform/global_settings_menu', []);`

This filter is located in `app/Modules/Registerer/Menu.php` (line 1138).

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

<explain-block title="fluentform/inventory_field_messages">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$inventoryMessages` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/inventory_field_messages', function ($inventoryMessages, $this) {
    return $inventoryMessages;
}, 10, 2);
```

**Reference**

`$inventoryMessages = apply_filters('fluentform/inventory_field_messages', $inventoryMessages, $this->form);`

This filter is located in `src/classes/Inventory/InventoryValidation.php` (line 492).

</explain-block>

<explain-block title="fluentform/ip_provider">

This filter returns the IP provider used in the phone field.

**Parameters**

- `$url` (array) IP provider URL

**Usage**

```php
add_filter('fluentform/ip_provider', function ($url) {
    // Do your stuff here
    
    return $url;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/ip_provider', $url);`

This filter is located in FluentForm\App\Services\FluentConversational\Classes\Converter\Converter -> getPhoneFieldSettings($data, $form)

</explain-block>

<explain-block title="fluentform/is_admin_page">

You can toggle the rendering page as an admin page by using this filter.

**Parameters**

- `$status` (boolean) Whether the rendering page is an Admin Page

**Usage**

```php
add_filter('fluentform/is_admin_page', function($status) {
   // Do your stuff here

  return $staus;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/is_admin_page', $status);`

This filter is located in FluentForm\App\Helpers\Helper -> isFluentAdminPage()

</explain-block>

<explain-block title="'fluentform/item_rules_' . $item['element']">

You can use this filter to modify the rules of an element.

**Parameters**

- `$message` (string) Validation Message
- `$item` (object) Current Item

**Usage**

```php
add_filter('fluentform/item_rules_' . $item['element'], function ($rules, $item) {
    // Do your stuff here
    
    return $rules;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/item_rules_' . $item['element'], $rule['message'], $item);`

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> extractValidationRule($item)

</explain-block>

<explain-block title="fluentform/itl_options">

You can use this filter to modify the JavaScript options object that is passed to the intl-tel-input library for the phone field. This allows for deep customization of the field's behavior, validation, and appearance.

**Parameters**

- `$itlOptions` (array) The configuration options for the intl-tel-input library.
- `$data` (array) (array) The configuration data for the specific phone field being rendered.
- `$form` (object) Form Object

The default configuration in Fluent Forms is:
```php
$itlOptions = [
    'separateDialCode' => false,
    'nationalMode'     => true,
    'autoPlaceholder'  => 'aggressive',
    'formatOnDisplay'  => true,
    'validationNumberTypes' => [
        'MOBILE',
        'FIXED_LINE_OR_MOBILE',
        'FIXED_LINE',
        'TOLL_FREE', //  >= Fluent Forms 6.1.10
    ]
];
```

**Common Use Cases & Examples**
1. Expand Validation to Accept Voicemails, VoIP, etc.

    By default, Fluent Forms validates against standard `MOBILE` and `FIXED_LINE` numbers. As of Fluent Forms 6.1.10, it also validates against `TOLL_FREE`. But you can expand this to include other types of validation numbers:

   - Allowed Validation Number Types
     - `FIXED_LINE` - A standard landline number.
     - `MOBILE` - A mobile (cell) phone number.
     - `FIXED_LINE_OR_MOBILE` - Used for regions where it's not possible to distinguish between fixed-line and mobile numbers from the number alone.
     - `TOLL_FREE` - Numbers that are free for the caller to dial (e.g., 800, 888 in the US).
     - `PREMIUM_RATE` - High-cost numbers for services, typically charged at a higher rate.
     - `SHARED_COST` - The cost of the call is shared between the caller and the receiver.
     - `VOIP` - Voice over IP numbers.
     - `PERSONAL_NUMBER` - A location-independent "follow-me" number that can be routed to different physical phones.
     - `PAGER` - A number for a paging service.
     - `UAN` - A Universal Access Number, used by businesses to be reachable on a single number across a country.
     - `VOICEMAIL` - A number that goes directly to a voicemail service.
```php
add_filter('fluentform/itl_options', function ($itlOptions) {
    // A list of all possible validation types that support.
    $itlOptions['validationNumberTypes'] = [
        'MOBILE',
        'FIXED_LINE_OR_MOBILE',
        'FIXED_LINE',
        'TOLL_FREE',
        'VOIP'
    ];
    return $itlOptions;
});
```
2. Display the Dial Code in a Separate Field.

   For a different UI style, you can have the country dial code appear next to the main input field instead of inside it.
```php
add_filter('fluentform/itl_options', function ($itlOptions) {
    // This splits the flag dropdown and the number input.
    $itlOptions['separateDialCode'] = true;
    return $itlOptions;
});
```

3. Use Full-Screen Dropdown

   To improve the user experience on screens, you can make the country dropdown open in a full-screen modal.
```php
add_filter('fluentform/itl_options', function ($itlOptions) {
    // The default is false. Set to true to enable.
    $itlOptions['useFullscreenPopup'] = true;
    return $itlOptions;
});
```
    
**Reference**

`apply_filters('fluentform/itl_options', $itlOptions, $data, $form);`

This filter is located in `FluentForm\App\Services\FluentConversational\Classes\Converter\Converter -> getPhoneFieldSettings($data, $form)`, `FluentFormPro\Components\PhoneField.php:273`

</explain-block>

<explain-block title="fluentform/landing_content_wrapper">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$template` — see source
- `$submission` — see source

**Usage**

```php
add_filter('fluentform/landing_content_wrapper', function ($template, $submission) {
    return $template;
}, 10, 2);
```

**Reference**

`return apply_filters('fluentform/landing_content_wrapper', $template, $submission);`

This filter is located in `src/classes/FrontEndEntryView.php` (line 224).

</explain-block>

<explain-block title="fluentform/landing_vars">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$data` — see source
- `$formId` — see source

**Usage**

```php
add_filter('fluentform/landing_vars', function ($data, $formId) {
    return $data;
}, 10, 2);
```

**Reference**

`$landingVars = apply_filters('fluentform/landing_vars', $data, $formId);`

This filter is located in `src/classes/SharePage/SharePage.php` (line 267).

</explain-block>

<explain-block title="fluentform/load_theme_style">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/load_theme_style', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`'theme_style'             => apply_filters('fluentform/load_theme_style', false) ? 'ffs_inherit_theme' : '',`

This filter is located in `app/Hooks/actions.php` (line 1183).

</explain-block>

<explain-block title="fluentform/partial_entry_admin_email_body">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$emailBody` — see source
- `$form` — see source
- `$link` — see source

**Usage**

```php
add_filter('fluentform/partial_entry_admin_email_body', function ($emailBody, $form, $link) {
    return $emailBody;
}, 10, 3);
```

**Reference**

`$emailBody = apply_filters('fluentform/partial_entry_admin_email_body', $emailBody, $form, $link);`

This filter is located in `src/classes/DraftSubmissionsManager.php` (line 1007).

</explain-block>

<explain-block title="fluentform/partial_entry_admin_email_format">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$emailFormat` — see source
- `$entry` — see source

**Usage**

```php
add_filter('fluentform/partial_entry_admin_email_format', function ($emailFormat, $entry) {
    return $emailFormat;
}, 10, 2);
```

**Reference**

`$emailFormat = apply_filters('fluentform/partial_entry_admin_email_format', $emailFormat, $entry,`

This filter is located in `src/classes/DraftSubmissionsManager.php` (line 105).

</explain-block>

<explain-block title="fluentform/payment_smartcode">

You can use this filter to modify smartcodes for Payment.

**Parameters**

- `$value` (string) Form Data
- `$property` (array) Substring after {payment.
- `$instance` (Object) Shortcode Parser Instance

**Usage**

```php
add_filter('fluentform/payment_smartcode', function ($value, $property, $instance) {
    // Do your stuff here
    
    return $item;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/payment_smartcode', $value, $property, self::getInstance());`

This filter is located in FluentForm\App\Services\FormBuilder\ShortcodeParser -> parseShortCodeFromString($parsable, $isUrl = false, $isHtml = false)

</explain-block>

<explain-block title="fluentform/payments_i18n">

You can alter or added more internationalize (i18n) for payments string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/payments_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/payments_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getPaymentsI18n()

</explain-block>

<explain-block title="fluentform/permission_callback">

This filter checks the permission callback status. You can check the current permission and change the permission status.

**Parameters**

- `$status` (boolean) Permission Status
- `$permission` (string) Permission Name

**Usage**

```php
add_filter('fluentform/permission_callback', function($status, $permission) {
    // Do your staff

    return $status;
}, 10, 2);

```

**Reference**
`apply_filters('fluentform/permission_callback', $status, $permission);`

This filter is located in FluentForm\app\Hooks\filters.php

</explain-block>

<explain-block title="fluentform/phone_field_strict_validation">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/phone_field_strict_validation', function ($value, $data, $form) {
    return $value;
}, 10, 3);
```

**Reference**

`$strictValidation = apply_filters('fluentform/phone_field_strict_validation', true, $data, $form) ? 'yes' : 'no';`

This filter is located in `src/Components/PhoneField.php` (line 275).

</explain-block>

<explain-block title="'fluentform/rendering_field_data_' . $elementName">

This filter is fired right before rendering an form field with the data and settings. You can use this filter to modify the output of a form field.

**Parameters**

- `$data` (array) Form Field Element
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/rendering_field_data_input_text', function ($data, $form)
{
   if($form->id != 5) {
      return;
   }

   // Do your stuffs here
   return $data;
}, 10, 2);

```

```php
add_filter('fluentform/rendering_field_data_select', function ($data, $form) {

    if ($form->id != 91) {
        return $data;
    }

    // check if the name attriibute is 'dynamic_dropdown'
    if (\FluentForm\Framework\Helpers\ArrayHelper::get($data, 'attributes.name') != 'dynamic_dropdown') {
        return $data;
    }
    
    // We are merging with existing options here
    $data['settings']['advanced_options'] = array_merge($data['settings']['advanced_options'], [
        [
            "label"      => "Dynamic Option 1",
            "value"      => "Dynamic Option 1",
            "calc_value" => ""
        ],
        [
            "label"      => "Dynamic Option 2",
            "value"      => "Dynamic Option 2",
            "calc_value" => ""
        ]
    ]);
    
    return $data;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/rendering_field_data_' . $elementName, $data, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\Text -> compile($data, $form)

</explain-block>

<explain-block title="'fluentform/rendering_field_html_' . $elementName">

This filter returns HTML output for each input of the form. You can hook into this and modify the HTML output of any field.

**Parameters**

- `$html` (string) HTML output of field
- `$data` (array) Form Field Element
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/rendering_field_html_text', function ($html, $data, $form) {
    // Do your stuff here

    return $html;
}, 10, 3);

```
**Reference**

`apply_filters('fluentform/rendering_field_html_' . $elementName, $html, $data, $form);`

This filter is located in FluentForm\App\Services\FormBuilder\Components\Text -> compile($data, $form)

</explain-block>

<explain-block title="fluentform/save_progress_button_text">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/save_progress_button_text', function ($data, $form) {
    return $data;
}, 10, 2);
```

**Reference**

`$buttonText = apply_filters('fluentform/save_progress_button_text', $data['settings']['button_ui']['text'], $form);`

This filter is located in `src/Components/SaveProgressButton.php` (line 439).

</explain-block>

<explain-block title="fluentform/save_progress_vars">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$args` — see source

**Usage**

```php
add_filter('fluentform/save_progress_vars', function ($args) {
    return $args;
}, 10, 1);
```

**Reference**

`$vars = apply_filters('fluentform/save_progress_vars', [`

This filter is located in `src/classes/DraftSubmissionsManager.php` (line 778).

</explain-block>

<explain-block title="fluentform/settings_capability">

You can modify Fluent Forms Settings Capability using this filter.

**Parameters**

- `$roleName` (string) Role Name. By Default, 'fluentform_settings_manager'

**Usage**

```php
add_filter('fluentform/settings_capability', function($roleName) {
   // Do your stuff here

   return $roleName;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/settings_capability', 'fluentform_dashboard_access');`

This filter is located in FluentForm\App\Modules\Registerer\Menu -> register()

</explain-block>

<explain-block title="fluentform/step_form_navigation_title">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$stepTitles` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/step_form_navigation_title', function ($stepTitles, $form) {
    return $stepTitles;
}, 10, 2);
```

**Reference**

`$stepTitles = (array) apply_filters('fluentform/step_form_navigation_title', $stepTitles, $form);`

This filter is located in `src/Components/FormStep.php` (line 100).

</explain-block>

<explain-block title="fluentform/step_next_button_class">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$data` — see source

**Usage**

```php
add_filter('fluentform/step_next_button_class', function ($value, $data) {
    return $value;
}, 10, 2);
```

**Reference**

`$btnClass = apply_filters('fluentform/step_next_button_class', 'ff-float-right ff-btn ff-btn-next ff-btn-secondary', $data);`

This filter is located in `src/Components/FormStep.php` (line 232).

</explain-block>

<explain-block title="fluentform/step_prev_button_class">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$data` — see source

**Usage**

```php
add_filter('fluentform/step_prev_button_class', function ($value, $data) {
    return $value;
}, 10, 2);
```

**Reference**

`$btnClass = apply_filters('fluentform/step_prev_button_class', 'ff-btn ff-btn-prev ff-btn-secondary', $data);`

This filter is located in `src/Components/FormStep.php` (line 214).

</explain-block>

<explain-block title="fluentform/transfer_i18n">

You can alter or added more internationalize (i18n) for form transfer string using this filter.

**Parameters**

- `$i18n` (array) All the i18n Strings

**Usage**

```php
add_filter('fluentform/transfer_i18n', function ($i18n) {
   // Do your stuff here

   return $i18n;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/transfer_i18n', $i18n);`

This filter is located in FluentForm\App\Modules\Registerer\TranslationString -> getTransferModuleI18n()

</explain-block>

<explain-block title="fluentform/user_guide_links">

You can modify documentation module user guide links using this filter.

**Parameters**

- `$guides` (array) User Guide Links

**Usage**

```php
add_filter('fluentform/user_guide_links', function ($guides) {
    // Do your stuff here
    
    return $guides;
}, 10, 1);

```
**Reference**

`apply_filters('fluentform/user_guide_links', $guides);`

This filter is located in FluentForm\App\Modules\Widgets\DocumentationModule -> getUserGuides()

</explain-block>

<explain-block title="'fluentform/validation_message_' . $item['element'] . '_' . $ruleName">

You can use this filter to modify the validation message of an element rule.

**Parameters**

- `$message` (string) Validation Message
- `$item` (object) Current Item

**Usage**

```php
add_filter('fluentform/validation_message_' . $item['element'] . '_' . $ruleName, function ($message, $item) {
    // Do your stuff here
    
    return $message;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/validation_message_' . $item['element'] . '_' . $ruleName, $rule['message'], $item);`

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> extractValidationRule($item)

</explain-block>

<explain-block title="fluentform/will_encode_url_value">

**Parameters**

- `$value` — see source
- `$redirectUrl` — see source
- `$insertId` — see source
- `$form` — see source
- `$formData` — see source

**Usage**

```php
add_filter('fluentform/will_encode_url_value', function ($value, $redirectUrl, $insertId, $form, $formData) {
    return $value;
}, 10, 5);
```

**Reference**

`$encodeUrl = apply_filters('fluentform/will_encode_url_value', false, $redirectUrl, $insertId, $form, $formData);`

This filter is located in `app/Services/Form/SubmissionHandlerService.php` (line 383).

</explain-block>

<explain-block title="fluentform/will_return_html">

You can use this filter to return Shortcode parsed data as HTML.

**Parameters**

- `$isHtml` (boolean) Whether to return Parsed Data as HTML
- `$isProvider` (boolean) Whether provider data is HTML or not
- `$key` (string) Key Name

**Usage**

```php
add_filter('fluentform/will_return_html', function ($isHtml, $isProvider, $key) {
    // Do your stuff here
    
    return $isHtml;
}, 10, 2);

```
**Reference**

`apply_filters('fluentform/will_return_html', $isHtml, $isProvider, $key);`

This filter is located in FluentForm\App\Services\FormBuilder -> buildFormBody($form)

</explain-block>
