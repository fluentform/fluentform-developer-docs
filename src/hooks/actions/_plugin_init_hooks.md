
<explain-block title="fluentform/loaded">

**Description**

This action fires after fluentform plugin is loaded.

**Parameters**

- `$app` (object) App Instance

**Usage**

```php
add_action('fluentform/loaded', function($app) {
   // Do your stuff here
}, 10, 1);
```

**Reference**

`do_action('fluentform/loaded', $app);`

This hook is located in fluentform/boot/app.php

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

<explain-block title="fluentform/global_menu">

**Description**

This action runs before rendering the admin menu.


**Usage**

```php
add_action('fluentform/global_menu', function() {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/global_menu');`

This hook is located in `app/Views/admin/**/*.php`.

</explain-block>
