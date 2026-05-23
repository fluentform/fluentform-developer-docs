# Conversational Form Hooks

<Badge type="tip" vertical="top" text="Action Hooks" /> <Badge type="warning" vertical="top" text="2 Hooks" />

These hooks fire during conversational form rendering.

<explain-block title="fluentform/conversational_enqueue_assets">

<Badge type="warning" vertical="top" text="Added in 6.2.x" />

Fires after the conversational form's CSS and JS bundles are enqueued. Hook in here to enqueue additional scripts/styles that depend on the conversational runtime being loaded, or to enqueue add-on assets only when the conversational view is active.

**Parameters**

- `$form` (object) The form being rendered

**Usage**

```php
add_action('fluentform/conversational_enqueue_assets', function ($form) {
    wp_enqueue_script(
        'my-conversational-extension',
        plugin_dir_url(__FILE__) . 'assets/extension.js',
        ['fluent_forms_conversational_form'],
        '1.0.0',
        true
    );
}, 10, 1);
```

**Reference**

`do_action('fluentform/conversational_enqueue_assets', $form);`

This action is located in `FluentForm\App\Services\FluentConversational\Classes\Form`.

</explain-block>

<explain-block title="fluentform/conversational_frame_footer">

**Description**

This action runs after rendering the conversational frame footer.

**Usage**
```php 
add_action('fluentform/conversational_frame_footer', function() {
   // Do your stuff
}, 10, 0);
```

**Reference**

`do_action('fluentform/conversational_frame_footer');`

This action is located in `fluentform/app/Views/public/conversational-form.php`

</explain-block>

<explain-block title="fluentform/conversational_frame_head">

**Description**

This action runs after rendering the conversational frame header.

**Usage**
```php 
add_action('fluentform/conversational_frame_head', function() {
   // Do your stuff
}, 10, 0);
```

**Reference**

`do_action('fluentform/conversational_frame_head');`

This action is located in `fluentform/app/Views/public/conversational-form.php`

</explain-block>
