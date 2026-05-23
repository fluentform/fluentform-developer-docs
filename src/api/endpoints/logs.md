# Logs — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="3 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/logs/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `DELETE` `/wp-json/fluentform/v1/logs`

- **Controller:** `LogController@remove`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 90

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/logs' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/logs`

- **Controller:** `LogController@get`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 89

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/logs' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/logs/filters`

- **Controller:** `LogController@getFilters`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 91

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/logs/filters' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

