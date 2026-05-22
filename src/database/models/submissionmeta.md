# `SubmissionMeta` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\SubmissionMeta`
- **Extends:** `Model`
- **Source:** `app/Models/SubmissionMeta.php`
- **Table:** `{$wpdb->prefix}fluentform_submission_meta` (raw: `fluentform_submission_meta`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`submission()`** — `belongsTo` → `Submission::class`

## Public Methods

### `retrieve($key, $submissionId = null, $default  = null)`

### `persist($submissionId, $metaKey, $metaValue, $formId = null)`

### `persistArray($submissionId, $metaKey, $metaValue, $formId = null)`

## Quick example

```php
use FluentForm\App\Models\SubmissionMeta;

// Query
$submissionmeta = SubmissionMeta::find($id);
$submissionmeta_set = SubmissionMeta::where('id', '>', 0)->limit(10)->get();
```
