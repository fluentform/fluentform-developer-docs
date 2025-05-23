
<explain-block title="fluentform/editor_init">

**Description**

This action runs right after initializing the fluent form editor in the admin panel. If you need to do anything in the background you can use this action.

**Parameters**
- `$components` (array) Editor Components

**Usage**

```php
add_action('fluentform/editor_init', function($components) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`$this->app->doAction('fluentform/editor_init', $components);`

This hook is located in `fluentform/app/Modules/Component/Component.php`.

</explain-block>


<explain-block title="fluentform/before_editor_start">

**Description**

This action runs before the fluent form editor in the admin panel. If you need to do anything in the background you can use this action.

**Usage**

```php
add_action('fluentform/before_editor_start', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_editor_start');`

This hook is located in `fluentform/app/Views/admin/form/editor.php`.

</explain-block>


<explain-block title="fluentform/after_editor_start">

**Description**

This action runs after the fluent form editor wrapper. If you need to do anything in the background you can use this action.

**Usage**

```php
add_action('fluentform/after_editor_start', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_editor_start');`

This hook is located in `fluentform/app/Views/admin/form/editor.php`.

</explain-block>

----------------------------------------

<explain-block title="fluentform/after_all_entries_render">

**Description**

This action runs after rendering the all entries page.

**Usage**

```php
add_action('fluentform/after_all_entries_render', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_all_entries_render');`

This hook is located in `fluentform/app/views/admin/all_entries.php`.

</explain-block>

----------------------------------------

<explain-block title="fluentform/before_all_entries_render">

**Description**

This action runs before rendering the all entries page.

**Usage**

```php
add_action('fluentform/before_all_entries_render', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_all_entries_render');`

This hook is located in `fluentform/app/views/admin/all_entries.php`.

</explain-block>


<explain-block title="fluentform/admin_nave_menu_{$itemKey}">

**Description**

This action runs when admin menu render. You can hook into it and run your script when admin menu render.


**Usage:**

```php
add_action('fluentform/admin_nave_menu_{$itemKey}', function() {
   // Do your stuff here
}, 10, 0);
```
**Note:** `{$itemKey}` is a dynamic nav item name. Replace `{$itemKey}` with Fluent Forms admin name item key.

**Reference**

`do_action("fluentform/admin_nav_menu_{$itemKey}");`

This action is located in `fluentform/app/Modules/Registerer/AdminBar.php`

</explain-block>


<explain-block title="fluentform/before_no_permission">

**Description**

This action runs before rendering no permission view.


**Usage:**

```php
add_action('fluentform/before_no_permission', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/before_no_permission');`

This action is located in `fluentform/app/Views/admin/no_permission.php`

</explain-block>


<explain-block title="fluentform/after_no_permission">

**Description**

This action runs after rendering no permission view.


**Usage:**

```php
add_action('fluentform/after_no_permission', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/after_no_permission');`

This action is located in `fluentform/app/Views/admin/no_permission.php`

</explain-block>