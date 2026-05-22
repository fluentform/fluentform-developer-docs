# `EntryDetails` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\EntryDetails`
- **Extends:** `Model`
- **Source:** `app/Models/EntryDetails.php`
- **Table:** `{$wpdb->prefix}fluentform_entry_details` (raw: `fluentform_entry_details`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`submission()`** — `belongsTo` → `Submission::class`

## Quick example

```php
use FluentForm\App\Models\EntryDetails;

// Query
$entrydetails = EntryDetails::find($id);
$entrydetails_set = EntryDetails::where('id', '>', 0)->limit(10)->get();
```
