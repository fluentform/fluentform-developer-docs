# Form Styler Hooks

<Badge type="tip" vertical="top" text="Action Hooks" /> <Badge type="warning" vertical="top" text="2 Hooks" /> <Badge type="error" vertical="top" text="Pro" />

These hooks fire during form styling and visual customization.

<explain-block title="fluentform/form_styler">

**Description**

This action runs before rendering the form styler in preview section.

**parameters**
- `$formId` (int) Form Id

**Usage:**
```php 
add_action('fluentform/form_styler', function($formId) {
   // Do your stuff
}, 10, 1);
```

**Reference**

`do_action('fluentform/form_styler', $form_id);`

This action is located in `fluentform/app/Views/frameless/show_preview.php`

</explain-block>

-----------------------------------------

<explain-block title="fluentform/after_style_generated">

**Description**

This action runs after generating the style meta for the form.

**parameters**
- `$formId` (int) Form Id

**Usage:**
```php 
add_action('fluentform/after_style_generated', function($formId) {
   // Do your stuff
}, 10, 1);
```

**Reference**

`do_action('fluentform/after_style_generated', $formId);`

This action is located in `fluentformpro/src/classes/FormStyler.php`

</explain-block>