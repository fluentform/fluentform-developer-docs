
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

----------------------------------------

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

----------------------------------------

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