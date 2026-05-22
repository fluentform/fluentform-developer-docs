# `Form` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Form`
- **Extends:** `Model`
- **Source:** `app/Models/Form.php`
- **Table:** `{$wpdb->prefix}fluentform_forms` (raw: `fluentform_forms`)
- **Primary key:** `id`

## Relationships

- **`formMeta()`** — `hasMany` → `FormMeta::class`
- **`conversationalMeta()`** — `hasOne` → `FormMeta::class`
- **`submissions()`** — `hasMany` → `Submission::class`
- **`submissionMeta()`** — `hasMany` → `SubmissionMeta::class`
- **`entryDetails()`** — `hasMany` → `EntryDetails::class`
- **`formAnalytics()`** — `hasMany` → `FormAnalytics::class`
- **`logs()`** — `hasMany` → `Log::class`
- **`transactions()`** — `hasMany` → `Transaction::class`
- **`orderItems()`** — `hasMany` → `OrderItem::class`

## Public Methods

### `prepare($attributes = [])`

### `getFormMeta($metaKey, $formId = null)`

### `getFormsDefaultSettings($formId = false)`

### `getAdvancedValidationSettings($formId)`

### `remove($formId)`

## Quick example

```php
use FluentForm\App\Models\Form;

// Query
$form = Form::find($id);
$form_set = Form::where('id', '>', 0)->limit(10)->get();
```
