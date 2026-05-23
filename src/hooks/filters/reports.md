# Reports Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="8 Filters" />

<explain-block title="fluentform/report_migration_batch_size">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/report_migration_batch_size', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$batchSize = apply_filters('fluentform/report_migration_batch_size', 200);`

This filter is located in `app/Services/Report/ReportHelper.php` (line 359).

</explain-block>

<explain-block title="fluentform/report_migration_max_batches">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/report_migration_max_batches', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$maxBatches = apply_filters('fluentform/report_migration_max_batches', 50);`

This filter is located in `app/Services/Report/ReportHelper.php` (line 360).

</explain-block>

<explain-block title="fluentform/reports/completion_rate">

**Parameters**

- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/reports/completion_rate', function ($args, $this) {
    return $args;
}, 10, 2);
```

**Reference**

`$data = apply_filters('fluentform/reports/completion_rate', [], $this->sanitizeReportAttributes());`

This filter is located in `app/Http/Controllers/ReportController.php` (line 163).

</explain-block>

<explain-block title="fluentform/reports/country_heatmap">

**Parameters**

- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/reports/country_heatmap', function ($args, $this) {
    return $args;
}, 10, 2);
```

**Reference**

`$data = apply_filters('fluentform/reports/country_heatmap', [], $this->sanitizeReportAttributes());`

This filter is located in `app/Http/Controllers/ReportController.php` (line 212).

</explain-block>

<explain-block title="fluentform/reports/heatmap_data">

**Parameters**

- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/reports/heatmap_data', function ($args, $this) {
    return $args;
}, 10, 2);
```

**Reference**

`$data = apply_filters('fluentform/reports/heatmap_data', [], $this->sanitizeReportAttributes());`

This filter is located in `app/Http/Controllers/ReportController.php` (line 196).

</explain-block>

<explain-block title="fluentform/reports/revenue_analysis">

**Parameters**

- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/reports/revenue_analysis', function ($args, $this) {
    return $args;
}, 10, 2);
```

**Reference**

`$data = apply_filters('fluentform/reports/revenue_analysis', [], $this->sanitizeReportAttributes());`

This filter is located in `app/Http/Controllers/ReportController.php` (line 96).

</explain-block>

<explain-block title="fluentform/reports/submissions_analysis">

**Parameters**

- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/reports/submissions_analysis', function ($args, $this) {
    return $args;
}, 10, 2);
```

**Reference**

`$data = apply_filters('fluentform/reports/submissions_analysis', [], $this->sanitizeReportAttributes());`

This filter is located in `app/Http/Controllers/ReportController.php` (line 113).

</explain-block>

<explain-block title="fluentform/reports/subscriptions">

**Parameters**

- `$args` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/reports/subscriptions', function ($args, $this) {
    return $args;
}, 10, 2);
```

**Reference**

`$data = apply_filters('fluentform/reports/subscriptions', [], $this->sanitizeReportAttributes());`

This filter is located in `app/Http/Controllers/ReportController.php` (line 262).

</explain-block>
