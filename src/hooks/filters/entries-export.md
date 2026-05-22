# Entries Export Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="15 Filters" />

<explain-block title="fluentform/apply_entries_advance_filter">

**Parameters**

- `$query` — see source
- `$attributes` — see source

**Usage**

```php
add_filter('fluentform/apply_entries_advance_filter', function ($query, $attributes) {
    return $query;
}, 10, 2);
```

**Reference**

`$query = apply_filters('fluentform/apply_entries_advance_filter', $query, $attributes);`

This filter is located in `app/Models/Submission.php` (line 218).

</explain-block>

<explain-block title="fluentform/bulk_entries_print_start_on_new_page">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/bulk_entries_print_start_on_new_page', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`if ($index !== 0 && apply_filters('fluentform/bulk_entries_print_start_on_new_page', __return_true(),`

This filter is located in `app/Services/Submission/SubmissionPrint.php` (line 42).

</explain-block>

<explain-block title="fluentform/csv_sanitize_formulas">

**Parameters**

- `$formulas` — see source

**Usage**

```php
add_filter('fluentform/csv_sanitize_formulas', function ($formulas) {
    return $formulas;
}, 10, 1);
```

**Reference**

`$formulas = apply_filters('fluentform/csv_sanitize_formulas', $formulas);`

This filter is located in `app/Helpers/Helper.php` (line 946).

</explain-block>

<explain-block title="fluentform/entries_human_date">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/entries_human_date', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$useHumanDate = apply_filters('fluentform/entries_human_date', false);`

This filter is located in `app/Models/Submission.php` (line 372).

</explain-block>

<explain-block title="fluentform/entries_print_body">

**Parameters**

- `$pdfBody` — see source
- `$submissions` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/entries_print_body', function ($pdfBody, $submissions, $form) {
    return $pdfBody;
}, 10, 3);
```

**Reference**

`return apply_filters('fluentform/entries_print_body', $pdfBody, $submissions, $form);`

This filter is located in `app/Services/Submission/SubmissionPrint.php` (line 51).

</explain-block>

<explain-block title="fluentform/entries_print_css">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/entries_print_css', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/entries_print_css', ob_get_clean());`

This filter is located in `app/Services/Submission/SubmissionPrint.php` (line 148).

</explain-block>

<explain-block title="fluentform/entry_limit_reached_message">

**Parameters**

- `$restrictions` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/entry_limit_reached_message', function ($restrictions, $form) {
    return $restrictions;
}, 10, 2);
```

**Reference**

`$isRenderable['message'] = apply_filters('fluentform/entry_limit_reached_message', $restrictions['limitReachedMsg'], $form);`

This filter is located in `app/Modules/Component/Component.php` (line 1064).

</explain-block>

<explain-block title="fluentform/entry_notes">

**Parameters**

- `$notes` — see source
- `$submissionId` — see source
- `$formId` — see source

**Usage**

```php
add_filter('fluentform/entry_notes', function ($notes, $submissionId, $formId) {
    return $notes;
}, 10, 3);
```

**Reference**

`$notes = apply_filters('fluentform/entry_notes', $notes, $submissionId, $formId);`

This filter is located in `app/Services/Submission/SubmissionService.php` (line 543).

</explain-block>

<explain-block title="fluentform/entry_print_body">

**Parameters**

- `$htmlBody` — see source
- `$submission` — see source
- `$form` — see source
- `$formData` — see source

**Usage**

```php
add_filter('fluentform/entry_print_body', function ($htmlBody, $submission, $form, $formData) {
    return $htmlBody;
}, 10, 4);
```

**Reference**

`$pdfBody .= apply_filters('fluentform/entry_print_body', $htmlBody, $submission, $form, $formData);`

This filter is located in `app/Services/Submission/SubmissionPrint.php` (line 49).

</explain-block>

<explain-block title="fluentform/entry_print_with_notes">

**Parameters**

- `$value` — see source
- `$form` — see source
- `$submission` — see source

**Usage**

```php
add_filter('fluentform/entry_print_with_notes', function ($value, $form, $submission) {
    return $value;
}, 10, 3);
```

**Reference**

`if (apply_filters('fluentform/entry_print_with_notes', __return_true(), $form, $submission)) {`

This filter is located in `app/Services/Submission/SubmissionPrint.php` (line 46).

</explain-block>

<explain-block title="fluentform/export_entry_metadata">

**Parameters**

- `$temp` — see source
- `$submission` — see source
- `$form` — see source
- `$args` — see source

**Usage**

```php
add_filter('fluentform/export_entry_metadata', function ($temp, $submission, $form, $args) {
    return $temp;
}, 10, 4);
```

**Reference**

`$temp = apply_filters('fluentform/export_entry_metadata', $temp, $submission, $form, $args);`

This filter is located in `app/Services/Transfer/TransferService.php` (line 304).

</explain-block>

<explain-block title="fluentform/export_entry_metadata_labels">

**Parameters**

- `$inputLabels` — see source
- `$form` — see source
- `$args` — see source

**Usage**

```php
add_filter('fluentform/export_entry_metadata_labels', function ($inputLabels, $form, $args) {
    return $inputLabels;
}, 10, 3);
```

**Reference**

`$inputLabels = apply_filters('fluentform/export_entry_metadata_labels', $inputLabels, $form, $args);`

This filter is located in `app/Services/Transfer/TransferService.php` (line 321).

</explain-block>

<explain-block title="fluentform/front_end_entry_view_status">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$status` — see source

**Usage**

```php
add_filter('fluentform/front_end_entry_view_status', function ($status) {
    return $status;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/front_end_entry_view_status', $status);`

This filter is located in `src/classes/FrontEndEntryView.php` (line 87).

</explain-block>

<explain-block title="fluentform/store_submission_note">

**Parameters**

- `$note` — see source

**Usage**

```php
add_filter('fluentform/store_submission_note', function ($note) {
    return $note;
}, 10, 1);
```

**Reference**

`$note = apply_filters('fluentform/store_submission_note', $note);`

This filter is located in `app/Services/Submission/SubmissionService.php` (line 576).

</explain-block>

<explain-block title="fluentform/submission_notes">

**Parameters**

- `$notes` — see source
- `$submissionId` — see source
- `$formId` — see source

**Usage**

```php
add_filter('fluentform/submission_notes', function ($notes, $submissionId, $formId) {
    return $notes;
}, 10, 3);
```

**Reference**

`return apply_filters('fluentform/submission_notes', $notes, $submissionId, $formId);`

This filter is located in `app/Services/Submission/SubmissionService.php` (line 545).

</explain-block>
