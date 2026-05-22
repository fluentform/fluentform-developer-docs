# `Scheduler` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Scheduler`
- **Extends:** `Model`
- **Source:** `app/Models/Scheduler.php`
- **Table:** `{$wpdb->prefix}ff_scheduled_actions` (raw: `ff_scheduled_actions`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`submission()`** — `belongsTo` → `Submission::class`

## Quick example

```php
use FluentForm\App\Models\Scheduler;

// Query
$scheduler = Scheduler::find($id);
$scheduler_set = Scheduler::where('id', '>', 0)->limit(10)->get();
```
