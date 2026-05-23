# `Subscription` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Subscription`
- **Extends:** `Model`
- **Source:** `app/Models/Subscription.php`
- **Table:** `{$wpdb->prefix}fluentform_subscriptions` (raw: `fluentform_subscriptions`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`submission()`** — `belongsTo` → `Submission::class`
- **`transactions()`** — `hasMany` → `Transaction::class`

## Public Methods

### `getOriginalPlanAttribute($value)`

### `getVendorResponseAttribute($value)`

### `scopeBySubmission($query, $submissionId)`

### `scopeByVendorSubscriptionId($query, $vendorId)`

### `scopeActive($query)`

## Quick example

```php
use FluentForm\App\Models\Subscription;

// Query
$subscription = Subscription::find($id);
$subscription_set = Subscription::where('id', '>', 0)->limit(10)->get();
```
