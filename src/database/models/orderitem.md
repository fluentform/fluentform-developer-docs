# `OrderItem` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\OrderItem`
- **Extends:** `Model`
- **Source:** `app/Models/OrderItem.php`
- **Table:** `{$wpdb->prefix}fluentform_order_items` (raw: `fluentform_order_items`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`submission()`** — `belongsTo` → `Submission::class`

## Public Methods

### `scopeBySubmission($query, $submissionId)`

### `scopeProducts($query)`

### `scopeDiscounts($query)`

## Quick example

```php
use FluentForm\App\Models\OrderItem;

// Query
$orderitem = OrderItem::find($id);
$orderitem_set = OrderItem::where('id', '>', 0)->limit(10)->get();
```
