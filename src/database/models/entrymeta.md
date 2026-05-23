# `EntryMeta` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\EntryMeta`
- **Extends:** `Model`
- **Source:** `app/Models/EntryMeta.php`
- **Table:** `{$wpdb->prefix}fluentform_submission_meta` (raw: `fluentform_submission_meta`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`entry()`** — `belongsTo` → `Entry::class`

## Quick example

```php
use FluentForm\App\Models\EntryMeta;

// Query
$entrymeta = EntryMeta::find($id);
$entrymeta_set = EntryMeta::where('id', '>', 0)->limit(10)->get();
```
