# `FormMeta` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\FormMeta`
- **Extends:** `Model`
- **Source:** `app/Models/FormMeta.php`
- **Table:** `{$wpdb->prefix}fluentform_form_meta` (raw: `fluentform_form_meta`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`

## Public Methods

### `prepare($attributes, $predefinedForm)`

### `retrieve($key, $formId = null, $default  = null)`

### `store(Form $form, $formMeta)`

### `persist($formId, $metaKey, $metaValue)`

### `remove($formId, $metaKey)`

## Quick example

```php
use FluentForm\App\Models\FormMeta;

// Query
$formmeta = FormMeta::find($id);
$formmeta_set = FormMeta::where('id', '>', 0)->limit(10)->get();
```
