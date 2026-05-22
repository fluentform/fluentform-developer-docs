# `Log` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Log`
- **Extends:** `Model`
- **Source:** `app/Models/Log.php`
- **Table:** `{$wpdb->prefix}fluentform_logs` (raw: `fluentform_logs`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`

## Quick example

```php
use FluentForm\App\Models\Log;

// Query
$log = Log::find($id);
$log_set = Log::where('id', '>', 0)->limit(10)->get();
```
