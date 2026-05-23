# `Transaction` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Transaction`
- **Extends:** `Model`
- **Source:** `app/Models/Transaction.php`
- **Table:** `{$wpdb->prefix}fluentform_transactions` (raw: `fluentform_transactions`)
- **Primary key:** `id`

## Relationships

- **`form()`** — `belongsTo` → `Form::class`
- **`submission()`** — `belongsTo` → `Submission::class`
- **`subscription()`** — `belongsTo` → `Subscription::class`

## Public Methods

### `scopeBySubmission($query, $submissionId)`

### `scopeByChargeId($query, $chargeId)`

### `scopeOnetime($query)`

### `scopeRefunds($query)`

### `scopeSubscriptionType($query)`

### `scopePaid($query)`

## Quick example

```php
use FluentForm\App\Models\Transaction;

// Query
$transaction = Transaction::find($id);
$transaction_set = Transaction::where('id', '>', 0)->limit(10)->get();
```
