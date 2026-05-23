# Report — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="15 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/report/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/report/api-logs`

- **Controller:** `ReportController@getApiLogs`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 160

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/api-logs' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/completion-rate`

- **Controller:** `ReportController@getCompletionRate`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 156

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/completion-rate' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/country-heatmap`

- **Controller:** `ReportController@getCountryHeatmap`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 159

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/country-heatmap' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/form-stats`

- **Controller:** `ReportController@getFormStats`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 157

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/form-stats' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/forms/{form_id}`

- **Controller:** `ReportController@form`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 170

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/forms/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/heatmap-data`

- **Controller:** `ReportController@getHeatmapData`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 158

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/heatmap-data' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/net-revenue`

- **Controller:** `ReportController@netRevenue`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 167

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/net-revenue' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/overview-chart`

- **Controller:** `ReportController@getOverviewChart`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 154

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/overview-chart' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/payment-types`

- **Controller:** `ReportController@getPaymentTypes`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 163

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/payment-types' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/revenue-chart`

- **Controller:** `ReportController@getRevenueChart`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 155

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/revenue-chart' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/select-forms`

- **Controller:** `ReportController@getFormsDropdown`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 166

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/select-forms' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/report/submissions`

- **Controller:** `ReportController@submissions`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 169

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/report/submissions' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/submissions-analysis`

- **Controller:** `ReportController@submissionsAnalysis`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 168

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/submissions-analysis' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/subscriptions`

- **Controller:** `ReportController@getSubscriptions`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 162

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/subscriptions' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/report/top-performing-forms`

- **Controller:** `ReportController@getTopPerformingForms`
- **Policy:** `ReportPolicy`
- **Source:** `app/Http/Routes/api.php` line 161

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/report/top-performing-forms' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

