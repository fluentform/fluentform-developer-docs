---
editLink: false
---

# Upgrade Guide: Fluent Forms 6.2.0

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Breaking Changes" />

Fluent Forms 6.2.0 upgrades the internal WPFluent Framework to v2. If you maintain a plugin or custom code that integrates with Fluent Forms, review the changes below.

## `get()` Returns Collection Instead of Array

Starting from **6.2.0**, the `get()` method returns a **Collection** object instead of a plain PHP array:

```php
// Both of these now return a Collection, not an array
$forms = FluentForm\App\Models\Form::where('status', 'published')->get();
$forms = wpFluent()->table('fluentform_forms')->get();
```

The **items inside** are unchanged — you still access properties with `$item->name` (arrow syntax). Only the outer wrapper changed.

### Quick Fix

Add `->all()` after `->get()` to get a plain array back:

```php
$forms = FluentForm\App\Models\Form::where('status', 'published')->get()->all();
```

::: tip `->all()` vs `->toArray()`
Use `->all()` — it returns an array but keeps each item as an object (`$item->name`). `->toArray()` converts each item into an associative array too (`$item['name']`), which will break your existing property access.
:::

### What Still Works

These common patterns work the same as before — no changes needed:

```php
$forms = FluentForm\App\Models\Form::where('status', 'published')->get();

// Looping
foreach ($forms as $form) {
    echo $form->title;
}

// Counting
if (count($forms) > 0) {
    // ...
}

// Index access
$first = $forms[0];

// isset check
if (isset($forms[0])) {
    // ...
}

// JSON encoding
echo json_encode($forms);
```

### What Breaks

#### PHP Array Functions — Fatal Error

Any native `array_*` function will crash because Collection is not an array:

```php
$forms = FluentForm\App\Models\Form::get();

// ALL of these will FATAL:
array_map(fn($f) => $f->id, $forms);
array_filter($forms, fn($f) => $f->status === 'active');
array_merge($forms, $otherArray);
array_column($forms, 'id');
array_keys($forms);
array_values($forms);
array_slice($forms, 0, 5);
in_array($item, $forms);
```

**Fix — convert to array first:**

```php
$forms = FluentForm\App\Models\Form::get()->all();
array_map(fn($f) => $f->id, $forms); // works
```

**Or use Collection methods:**

```php
$forms = FluentForm\App\Models\Form::get();
$ids    = $forms->map(fn($f) => $f->id)->all();             // replaces array_map
$active = $forms->filter(fn($f) => $f->status === 'active'); // replaces array_filter
$first  = $forms->first();                                    // replaces reset()
$last   = $forms->last();                                     // replaces end()
$sliced = $forms->take(5);                                    // replaces array_slice
$exists = $forms->contains($item);                            // replaces in_array
```

See the [Collections](/database/orm/collections/) page for all available methods.

#### Empty Checks — Silent Bug

A Collection is always "truthy" in PHP, even with zero items:

```php
$forms = FluentForm\App\Models\Form::where('id', -1)->get(); // empty result

// BROKEN — these conditions no longer work as expected:
if (!$forms) { }           // always false
if (empty($forms)) { }    // always false
if ($forms) { }            // always true
```

**Fix — use `count()`:**

```php
if (!count($forms)) {
    return; // empty check
}

if (count($forms)) {
    // not-empty check
}
```

#### Type Checks and Type Hints

```php
// BROKEN
if (is_array($forms)) { }           // returns false now
function processItems(array $items) {} // TypeError

// Fix
if (is_array($forms) || $forms instanceof \Traversable) { }
processItems($forms->all());
```

## Renamed Namespaces

The following namespaces have changed. Backward-compatible aliases exist so old imports still work, but will be **removed in 7.0**.

### Database Migrations

| Old (deprecated) | New |
|-------------------|-----|
| `FluentForm\App\Databases\Migrations\FormSubmissions` | `FluentForm\Database\Migrations\Submissions` |
| `FluentForm\App\Databases\Migrations\SubmissionDetails` | `FluentForm\Database\Migrations\SubmissionDetails` |

### Framework Request Classes

| Old (deprecated) | New |
|-------------------|-----|
| `FluentForm\Framework\Request\Request` | `FluentForm\Framework\Http\Request\Request` |
| `FluentForm\Framework\Request\File` | `FluentForm\Framework\Http\Request\File` |

### ArrayHelper

| Old (deprecated) | New |
|-------------------|-----|
| `FluentForm\Framework\Helpers\ArrayHelper` | `FluentForm\Framework\Support\Arr` |

## Deprecated Classes

The following classes have been replaced with minimal stubs. They still work but log deprecation warnings in `debug.log` when `WP_DEBUG` is enabled. Will be **removed in 7.0**.

| Class | Replacement |
|-------|-------------|
| `FluentForm\App\Modules\Entries\Entries` | `FluentForm\App\Models\Submission` model or `wpFluent()` queries |
| `FluentForm\App\Modules\Entries\EntryQuery` | `FluentForm\App\Models\Submission` model or `wpFluent()` queries |
| `FluentForm\App\Modules\Entries\Report` | `FluentForm\App\Services\Report\ReportHelper` |

**Example migration:**

```php
// Before (deprecated)
$entries = wpFluentForm('FluentForm\App\Modules\Entries\Entries')->_getEntries(
    $formId, $page, $perPage, $orderBy, $status, null, $wheres
);

// After
use FluentForm\App\Models\Submission;

$query = (new Submission)->customQuery([
    'form_id'    => $formId,
    'sort_by'    => $orderBy,
    'entry_type' => $status,
    'search'     => $search,
]);
$submissions = $query->get();
```

## Hook Names (Since 5.0)

::: warning Removed in 7.0
All hooks were renamed from underscore/hyphen format to slash format in **Fluent Forms 5.0**. Old names still fire via `do_action_deprecated()` but will be **removed in 7.0**.
:::

```php
// Before (deprecated — will be removed in 7.0)
add_action('fluentform_loaded', function ($app) { });
add_filter('fluentform_editor_shortcodes', function ($shortcodes) { });

// After
add_action('fluentform/loaded', function ($app) { });
add_filter('fluentform/editor_shortcodes', function ($shortcodes) { });
```

The pattern is consistent: replace `fluentform_` or `fluentform-` with `fluentform/`.

Enable `WP_DEBUG` to see which hooks in your code need updating.

## Summary

| Change | Severity | Backward Compat | Remove in |
|--------|----------|-----------------|-----------|
| `get()` returns Collection | Fatal for `array_*` functions | No — add `->all()` | N/A |
| Database migration namespaces | Alias exists | Yes | 7.0 |
| Request class namespaces | Alias exists | Yes | 7.0 |
| ArrayHelper namespace | Alias exists | Yes | 7.0 |
| Entries/EntryQuery classes | Stub exists | Yes | 7.0 |
| Hook names (`_` → `/`) | `do_action_deprecated` | Yes | 7.0 |
