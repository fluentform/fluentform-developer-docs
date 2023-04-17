
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

-----------------------------------

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

-----------------------------------

<explain-block title="fluentform/add_oxygen_plus_form">

**Description**

This action runs when register Fluent Forms Oxygen Plus widget subsections.

**Usage:**
```php 
add_action('fluentform/add_oxygen_plus_form', function() {
   // Do your stuff when register oxyget plus widget
}, 10, 0);
```

**Reference**

`do_action('fluentform/add_oxygen_plus_form');`

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

<explain-block title="fluentform/scripts_registered">

**Description**

This action fires after fluentform scripts are registered.

**Usage**

```php
add_action('fluentform/scripts_registered', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/scripts_registered');`

This hook is located in fluentform/app/Modules/Component/Component.php

</explain-block>

------------------------------------------------

<explain-block title="fluentform/pre_load_scripts">

**Description**

This action fires after fluentform plugin is loaded.

**Parameters**

- `$post` (object) Global post

**Usage**

```php
add_action('fluentform/pre_load_scripts', function($post) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`$this->app->doAction('fluentform/pre_load_scripts', $post);`

This hook is located in fluentform/app/Modules/Component/Component.php

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

<explain-block title="fluentform/loading_editor_assets">

**Description**

This action runs during asset loading for the editor. You can hook into this action and load your custom scripts or do other tasks.

**Parameters**
- `$form` (object) Form

**Usage**

```php
add_action('fluentform/loading_editor_assets', function($form) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`do_action('fluentform/loading_editor_assets', $form);`

This hook is located in `fluentform/app/Modules/Registerer/Menu.php`.

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