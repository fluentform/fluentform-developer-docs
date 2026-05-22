# `Entry` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Entry`
- **Extends:** `Model`
- **Source:** `app/Models/Entry.php`
- **Table:** `{$wpdb->prefix}fluentform_submissions` (raw: `fluentform_submissions`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`entryMeta()`** — `hasMany` → `EntryMeta::class`
- **`logs()`** — `hasMany` → `Log::class`
- **`entryDetails()`** — `hasMany` → `EntryDetails::class`

## Public Methods

### `paginateEntries($attributes = [])`

### `countByGroup($formId)`

### `amend($id, $data = [])`

### `remove($entryIds)`

## Quick example

```php
use FluentForm\App\Models\Entry;

// Query
$entry = Entry::find($id);
$entry_set = Entry::where('id', '>', 0)->limit(10)->get();
```
