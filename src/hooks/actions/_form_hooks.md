
<explain-block title="fluentform/inserted_new_form">

**Description**

This action fires after the new form is created. If you want to do certain task after a form creation then you can catch this action hook and do your staff.

**parameters**
- `$formId` (int) Form Id
- `$data` (array) Form Data

**Usage:**
```php
add_action('fluentform/inserted_new_form', function($formId, $data) {
   // Do your stuff when form is created
}, 10, 2);
```

**Reference**

`do_action('fluentform/inserted_new_form', $form->id, $data);`

This action is located in `fluentform/app/Services/Form/FormService.php`

</explain-block>



<explain-block title="fluentform/form_element_start">

**Description**

This action runs before rendering the input elements of the form. If you need to do anything in the background you can use this action.

**parameters**
- `$form` (object) Form Object

**Usage:**
```php
add_action('fluentform/form_element_start', function($formId, $data) {
   // Do your stuff when form element start
}, 10, 1);
```

**Reference**

`do_action('fluentform/form_element_start', $form);`

This action is located in `fluentform/app/Services/FormBuilder/FormBuilder.php -> build()`

</explain-block>


<explain-block title="fluentform/form_duplicated">

**Description**

After a form is duplicated this action is fired.

**parameters**
- `$newFormId` (int) Form Id

**Usage:**
```php
add_action('fluentform/form_duplicated', function($form$newFormId) {
   // Do your stuff when form is duplicated
}, 10, 1);
```

**Reference**

`do_action('fluentform/form_duplicated', $form->id);`

This action is located in `fluentform/app/Services/Form/FormService.php`

</explain-block>


<explain-block title="oxygen_add_plus_fluentform_form">

**Description**

This action runs when register Fluent Forms Oxygen widget sections.

**Usage:**
```php
add_action('oxygen_add_plus_fluentform_form', function() {
   // Do your stuff when register oxyget plus widget
}, 10, 0);
```

**Reference**

`do_action('oxygen_add_plus_fluentform_form');`

This action is located in `fluentform/app/Modules/Widgets/OxygenWidget.php`

</explain-block>

-----------------------------------

<explain-block title="fluentform/load_form_assets">

**Description**

This action fires when loading the form asset.

**Parameters**
- `$formId`  (int)  Form Id

**Usage:**
```php
add_action('fluentform/load_form_assets', function($formId) {
   // Do your stuff when load form assets
}, 10, 1);
```

**Reference**

`do_action('fluentform/load_form_assets', $formId);`

This action is located in `fluentform/app/Modules/Widgets/OxygenWidget.php`, `fluentformpro/src/classes/SharePage/SharePage.php`, `fluentform/app/Hooks/actions.php`.

</explain-block>

-----------------------------------

<explain-block title="fluentform/init_custom_stylesheet">

**Description**

This action run when a custom style is applied to the form . You can also push your own style using this.

**Parameters**
- `$selectedStyle`  (string)  Selected style type
- `$formId`         (int)     Form Id

**Usage:**
```php
add_action('fluentform/init_custom_stylesheet', function($selectedStyle, $formId) {
   // Do your stuffs here
   // enque style
}, 10, 2);
```

**Reference**

`do_action('fluentform/init_custom_stylesheet', $selectedStyle, $formId);`

This action is located in `fluentformpro/src/classes/FormStyler.php`, `fluentform/app/Hooks/actions.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/form_application_view_{$route}">

**Description**

This action runs admin page view. You can hook into it and run your script depending on the current route and form ID.

**Parameters**

- `$form_id` (int) Form ID

**Usage:**

```php
add_action('fluentform/form_application_view_{$route}', function($form_id) {
   // Do your stuff here
}, 10, 2);
```
**Note:** `{$route}` is a dynamic route. Replace `{$route}` with Fluent Forms admin route key.

**Reference**

`do_action('fluentform/form_application_view_' . $route, $form_id);`

This action is located in `fluentform/app/Views/admin/form/form_wrapper.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_form_navigation">

**Description**

This action runs after add navigation buttons to the admin page header.

**Parameters**

- `$form_id` (int) Form ID
- `$route` (string) Current Route

**Usage:**

```php
add_action('fluentform/after_form_navigation', function($form_id, $route) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/after_form_navigation', $form_id, $route);`

This action is located in `fluentform/app/Views/admin/form/form_wrapper.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_form_navigation_{$route}">

**Description**

This action runs after add navigation buttons to the admin page header.

**Parameters**

- `$form_id` (int) Form ID

**Usage**

```php
add_action('fluentform/after_form_navigation_{$route}', function($form_id) {
   // Do your stuff here
}, 10, 1);
```
**Note:** `{$route}` is a dynamic route. Replace `{$route}` with Fluent Forms admin route key.

**Reference**

`do_action('fluentform/after_form_navigation_' . $route, $form_id);`

This action is located in `fluentform/app/Views/admin/form/form_wrapper.php`

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_permission_set_assignment">

**Description**

This action runs before fluentform is going to assign permission set to a role.

**Usage**

```php
add_action('fluentform/before_permission_set_assignment', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_permission_set_assignment');`

This hook is located in fluentform/app/Modules/Acl/Acl.php

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_permission_set_assignment">

**Description**

This action runs after fluentform is assigned permission set to a role.

**Usage**

```php
add_action('fluentform/after_permission_set_assignment', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_permission_set_assignment');`

This hook is located in fluentform/app/Modules/Acl/Acl.php

</explain-block>

------------------------------------------------


<explain-block title="fluentform/rendering_calculation_form">

**Description**

This action runs if the form input has calculation in it and during rendering the input . If you need to do anything in the background you can use this action.

**Parameters**
- `$form` (object) Form
- `$field` (array) Input Element

**Usage**

```php
add_action('fluentform/rendering_calculation_form', function($form, $field) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/rendering_calculation_form', $form, $field);`

This hook is located in `fluentform/app/Services/FluentConversational/Classes/Converter/Converter.php`, `fluentfomr/app/Services/FormBuilder/Components/Text.php`.

</explain-block>

------------------------------------------------


<explain-block title="fluentform/render_item_{$item_element}">

**Description**

This action runs every time an input item is rendered. If you need to do anything in the background you can use this action. $item is the key of the component that is being rendered.

**Parameters**
- `$item` (array) Input Element
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/render_item_{$item_element}', function($item, $form) {
   // Do your stuff here
}, 10, 2);
```

**Note:** `{$item_element}` is dynamic field element name. Replace `{$item_element}` with valid Fluent Forms field element name.

**Reference**

`do_action('fluentform/render_item_' . $item['element'], $item, $form);`

This hook is located in `fluentform/app/Modules/Component/Component.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_form_render">

**Description**

This action runs after the form rendering is completed. If you need to do anything in the background you can use this action.

**Parameters**
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/after_form_render', function($form) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`do_action('fluentform/after_form_render', $form);`

This hook is located in `fluentform/app/Services/FormBuilder/FormBuilder.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/form_imported">

**Description**

This action is fired after a form is imported. So you can use this hook and run your script after a form is imported

**Parameters**
- `$form_id` (int) Form ID

**Usage**

```php
add_action('fluentform/form_imported', function($form_id) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`do_action('fluentform/form_imported', $formId);`

This hook is located in `fluentform/app/Services/Form/FormService.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_form_render">

**Description**

This action fires right before the form is rendered. If you want to do certain task after a form rendering then you can catch this action hook and do your staff.

**Parameters**
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/before_form_render', function($form) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`do_action('fluentform/before_form_render', $form);`

This hook is located in `fluentform/app/Services/FormBuilder/FormBuilder.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_all_forms_render">

**Description**

This action fires before the all form page is rendering.

**Usage**

```php
add_action('fluentform/before_all_forms_render', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_all_forms_render');`

This hook is located in `fluentform/app/Views/admin/all_forms.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/after_all_forms_render">

**Description**

This action fires after all form page was rendered.

**Usage**

```php
add_action('fluentform/after_all_forms_render', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_all_forms_render');`

This hook is located in `fluentform/app/Views/admin/all_forms.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_form_screen_wrapper">

**Description**

This action runs after the fluent form editor wrapper in the admin panel. If you need to do anything in the background you can use this action.

**Parameters**
- `$form_id` (int) Form ID
- `$route` (string) Route

**Usage**

```php
add_action('fluentform/before_form_screen_wrapper', function($form_id, $route) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/before_form_screen_wrapper', $form_id, $route);`

This hook is located in `fluentform/app/Views/admin/form/form_wrapper.php`.

</explain-block>


<explain-block title="fluentform/after_form_screen_wrapper">

**Description**

This action runs after the fluent form editor wrapper in the admin panel. If you need to do anything in the background you can use this action.

**Parameters**
- `$form_id` (int) Form ID
- `$route` (string) Route

**Usage**

```php
add_action('fluentform/after_form_screen_wrapper', function($form_id, $route) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/after_form_screen_wrapper', $form_id, $route);`

This hook is located in `fluentform/app/Views/admin/form/form_wrapper.php`.

</explain-block>


------------------------------------------------

<explain-block title="fluentform/render_item_submit_button">

**Description**

This action runs every time when submit button is rendered. If you need to do anything in the background you can use this action.

**Parameters**
- `$submitButton` (array) Input Element
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/render_item_submit_button', function($submitButton, $form) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/render_item_submit_button', $form->fields['submitButton'], $form);`

This hook is located in `fluentform/app/Modules/Component/Component.php`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/starting_file_upload">

**Description**

This action run before uploading a file.

**Parameters**
- `$files` (array) Files
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/starting_file_upload', function($files, $form) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/starting_file_upload', $files, $this->form);`

This hook is located in `fluentformpro/src/Uploader.php -> upload()`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/starting_file_processing">

**Description**

This action run when processing uploaded file.

**Parameters**
- `$files` (array) Files
- `$uploadLocation` (string) Files Upload Location
- `$formData` (array) Submission Data
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/starting_file_processing', function($files, $uploadLocation, $formData, $form) {
   // Do your stuff here
}, 10, 4);
```

**Reference**

`do_action('fluentform/starting_file_processing', $files, $uploadLocation, $formData, $form);`

This hook is located in `fluentformpro/src/Uploader.php -> processFiles()`.

</explain-block>


------------------------------------------------

<explain-block title="fluentform/rendering_address_field">

**Description**

This action run when render address field.

**Parameters**
- `$field` (array) Field Data
- `$form` (object) Form Object

**Usage**

```php
add_action('fluentform/rendering_address_field', function($field, $form) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/rendering_address_field', $data, $form);`

This hook is located in `fluentform/app/Services/FormBuilder/Components/Address.php -> compile()`.

</explain-block>

------------------------------------------------

<explain-block title="fluentform/before_documentation_wrapper">

**Description**

This action run before render support page documentation.

**Usage**

```php
add_action('fluentform/before_documentation_wrapper', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_documentation_wrapper');`

This hook is located in `fluentform/app/Views/admin/docs/index.php`.

</explain-block>


<explain-block title="fluentform/after_documentation_wrapper">

**Description**

This action run after render support page documentation.

**Usage**

```php
add_action('fluentform/after_documentation_wrapper', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_documentation_wrapper');`

This hook is located in `fluentform/app/Views/admin/docs/index.php`.

</explain-block>


<explain-block title="fluentform/spam_attempt_caught">

**Description**

This action is triggered when a spam attempt is caught. You can use this to log spam attempts, notify administrators, or implement additional security measures.

**Parameters**

`$reason` (string) The reason for the spam detection

**Usage**

```php
add_action('fluentform/spam_attempt_caught', function ($reason) {
    // Log spam attempt
    error_log("Spam attempt caught: " . $reason);

    // Notify admin
    wp_mail('admin@example.com', 'Spam Attempt Detected', "A spam attempt was caught. Reason: " . $reason);
}, 10, 1);
```

**Reference**

`do_action('fluentform/spam_attempt_caught', $reason);`

This action is located in the `FluentForm\App\Modules\Form\TokenBasedSpamProtection -> handleSpam` method.

</explain-block>
