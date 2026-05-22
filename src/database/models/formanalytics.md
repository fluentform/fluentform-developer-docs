# `FormAnalytics` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\FormAnalytics`
- **Extends:** `Model`
- **Source:** `app/Models/FormAnalytics.php`
- **Table:** `{$wpdb->prefix}fluentform_form_analytics` (raw: `fluentform_form_analytics`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`

## Quick example

```php
use FluentForm\App\Models\FormAnalytics;

// Query
$formanalytics = FormAnalytics::find($id);
$formanalytics_set = FormAnalytics::where('id', '>', 0)->limit(10)->get();
```
