# `Submission` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\Submission`
- **Extends:** `Model`
- **Source:** `app/Models/Submission.php`
- **Table:** `{$wpdb->prefix}fluentform_submissions` (raw: `fluentform_submissions`)
- **Primary key:** `id`

## Relationships

- **`user()`** — `belongsTo` → `User::class`
- **`form()`** — `belongsTo` → `Form::class`
- **`submissionMeta()`** — `hasMany` → `SubmissionMeta::class`
- **`logs()`** — `hasMany` → `Log::class`
- **`entryDetails()`** — `hasMany` → `EntryDetails::class`
- **`transactions()`** — `hasMany` → `Transaction::class`
- **`subscriptions()`** — `hasMany` → `Subscription::class`
- **`orderItems()`** — `hasMany` → `OrderItem::class`

## Public Methods

### `getSortColumn()`

Returns the column the entries listing should be sorted by.
Defaults to created_at so imported entries respect their original
submission date. Site owners can switch back to legacy id-based
ordering via the fluentform/entries_default_sort_column filter.

### `customQuery($attributes = [], $searchExtender = null)`

### `paginateEntries($attributes = [])`

### `findAdjacentSubmission($attributes = [])`

### `countByGroup($formId)`

### `amend($id, $data = [])`

### `remove($submissionIds)`

### `allSubmissions($attributes = [])`

### `availableForms()`

### `report($attributes)`

## Quick example

```php
use FluentForm\App\Models\Submission;

// Query
$submission = Submission::find($id);
$submission_set = Submission::where('id', '>', 0)->limit(10)->get();
```
