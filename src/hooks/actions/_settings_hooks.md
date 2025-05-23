
<explain-block title="fluentform/admin_nav_menu_{$item_key}">

**Description**

This action runs when add Fluent Forms admin menu

**Usage:**
```php
add_action('fluentform/admin_nav_menu_{$item_key}', function() {
   // Do your stuff when add fluentform admin menu
}, 10, 0);
```

**Note:** `{$item_key}` is a dynamic key. Replace `{$item_key}` with Fluent Forms admin menu key.

**Reference**

`do_action("fluentform/admin_nav_menu_{$itemKey}");`

This action is located in `fluentform/app/Modules/Registerer/AdminBar.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_save_form_settings">

**Description**

This action runs after saving the form from admin panel. You can hook into this action and extract any data you data need from the $allSettings array.

**Parameters**
- $formId (int) Form Id
- $allSettings (array) Form All Settings

**Usage:**
```php
add_action('fluentform/after_save_form_settings', function($formId, $allSettings) {
   // Do your stuff when
}, 10, 2);
```

**Reference**

`do_action('fluentform/after_save_form_settings', $formId, $attributes);`

This action is located in `fluentform/app/Services/Settings/SettingsService.php`, `fluentform/app/Modules/Form/Settings/FormSettings.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_global_settings_wrapper">

**Description**

Before rendering the form global settings page this hook is available.

**Usage:**
```php
add_action('fluentform/before_global_settings_wrapper', function() {
   // Do your stuff when
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_global_settings_wrapper');`

This action is located in `fluentform/app/Views/admin/settings/index.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_global_settings_wrapper">

**Description**

After rendering the form settings page this hook is available.

**Usage:**
```php
add_action('fluentform/after_global_settings_wrapper', function() {
   // Do your stuff when
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_global_settings_wrapper');`

This action is located in `fluentform/app/Views/admin/settings/index.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_form_settings_app">

**Description**

This action fires before fluentform plugin rendered.

**Parameters**
- `$form_id` (int) Form ID

**Usage:**
```php
add_action('fluentform/before_form_settings_app', function($form_id) {
   // Do your stuff when
}, 10, 1);
```

**Reference**

`do_action('fluentform/before_form_settings_app', $form_id);`

This action is located in `fluentform/app/Views/admin/form/settings.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_form_settings_app">

**Description**

This action fires after fluentform plugin is loaded.


**Parameters**
- `$form_id` (int) Form ID

**Usage:**
```php
add_action('fluentform/after_form_settings_app', function($form_id) {
   // Do your stuff when
}, 10, 1);
```

**Reference**

`do_action('fluentform/after_form_settings_app', $form_id);`

This action is located in `fluentform/app/Views/admin/form/settings.php`

</explain-block>

-----------------------------------------

<explain-block title="fluentform/before_global_settings_option_render">

**Description**

This action fires on each global settings component before rendering the page.

**Usage:**
```php
add_action('fluentform/before_global_settings_option_render', function() {
   // Do your stuff when
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_global_settings_option_render');`

This action is located in `fluentform/app/Views/admin/settings/settings.php`

</explain-block>

-----------------------------------------

<explain-block title="fluentform/after_global_settings_option_render">

**Description**

This hook is available before rendering the global settings option page. Fore example Custom CSS/JS page.

**Usage:**
```php
add_action('fluentform/after_global_settings_option_render', function() {
   // Do your stuff when
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_global_settings_option_render');`

This action is located in `fluentform/app/Views/admin/settings/settings.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/form_settings_container_{$current_route}">

**Description**

This hook runs before rendering the settings page container.

**Parameters**
- `$form_id` (int) Form ID

**Usage:**
```php
add_action('fluentform/form_settings_container_{$current_route}', function($form_id) {
   // Do your stuff when add fluentform admin menu
}, 10, 1);
```

**Note:** `{$current_route}` is a dynamic settings route. Replace `{$current_route}` with Fluent Forms settings route.

**Reference**

`do_action('fluentform/form_settings_container_' . $current_sub_route, $form_id);`

This action is located in `fluentform/app/Views/admin/form/settings_wrapper.php`

</explain-block>


<explain-block title="fluentform/global_settings_component_{$current_component}">

**Description**

This action fires on each global settings component. For example reCaptcha

**Usage:**
```php
add_action('fluentform/global_settings_component_{$current_component}', function() {
   // Do your stuff when add fluentform admin menu
}, 10, 0);
```

**Note:** `{$current_component}` is a dynamic component name. Replace `{$current_component}` with Fluent Forms component name.

**Reference**

`do_action('fluentform/global_settings_component_' . $currentComponent);`

This action is located in `fluentform/app/Views/admin/settings/index.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/before_tools_wrapper">

**Description**

This action fires before tool settings render. Do your stuff before tool settings rendered.

**Usage:**
```php
add_action('fluentform/before_tools_wrapper', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_tools_wrapper');`

This action is located in `fluentform/app/Views/admin/tools/index.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/after_tools_wrapper">

**Description**

This action fires after tool settings render. Do your stuff after tool settings rendered.

**Usage:**
```php
add_action('fluentform/after_tools_wrapper', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_tools_wrapper');`

This action is located in `fluentform/app/Views/admin/tools/index.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/before_tools_container">

**Description**

This action fires before tool setting body render. Do your stuff before tool settings body rendered.

**Usage:**
```php
add_action('fluentform/before_tools_container', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_tools_container');`

This action is located in `fluentform/app/Views/admin/tools/index.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/after_tools_container">

**Description**

This action fires after tool settings body render. Do your stuff after tool settings body rendered.

**Usage:**
```php
add_action('fluentform/after_tools_container', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_tools_container');`

This action is located in `fluentform/app/Views/admin/tools/index.php`

</explain-block>


<explain-block title="fluentform/email_template_after_footer">

**Description**

This action fire after email template footer rendered.


**Parameters**
- `$form` (object) Form Object
- `$notification` (array) Email Notification

**Usage:**
```php
add_action('fluentform/email_template_after_footer', function($form, $notification) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action( 'fluentform/email_template_after_footer', $form, $notification );`

This action is located in `fluentform/app/Views/email/template/footer.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/do_scheduled_tasks">

**Description**

This action fire when register schedule task event.

**Usage:**
```php
add_action('fluentform/do_scheduled_tasks', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action( 'fluentform/do_scheduled_tasks');`

This action is located in `fluentform/app/Hooks/Handlers/ActivationHandler.php -> setCronSchedule()`, `fluentform/app/Hooks/actions.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/do_email_report_scheduled_tasks">

**Description**

This action fire when register email report schedule task event.

**Usage:**
```php
add_action('fluentform/do_email_report_scheduled_tasks', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action( 'fluentform/do_email_report_scheduled_tasks');`

This action is located in `fluentform/app/Hooks/Handlers/ActivationHandler.php -> setCronSchedule()`, `fluentform/app/Hooks/actions.php`

</explain-block>

------------------------------------------

<explain-block title="fluentform/email_summary_details">

**Description**

This action fire when process email report.

**Parameters**
- `$emailData` (array) Email Send Data
- `$data` (array) Config Data
- `$emailResult` (bool|mixed) wp_mail response

**Usage:**
```php
add_action('fluentform/email_summary_details', function($emailData, $data, $emailResult) {
   // Do your stuff here
}, 10, 3);
```

**Reference**

```php
do_action('fluentform/email_summary_details', [
'recipients' => $recipients,
'email_subject' => $emailSubject,
'email_body' => $emailBody
], $data, $emailResult);
```

This action is located in `fluentform/app/Services/Scheduler/Scheduler.php -> processEmailReport()`

</explain-block>

------------------------------------------

<explain-block title="fluentform/saving_global_settings_with_key_method">

**Description**

This action fire when store global settings.

**Parameters**
- `$attributes` (array) Request params

**Usage:**
```php
add_action('fluentform/saving_global_settings_with_key_method', function($attributes) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`do_action('fluentform/saving_global_settings_with_key_method', $attributes);`

This action is located in `fluentform/app/Services/GlobalSettings/GlobalSettingsService.php-> store()`

</explain-block>