# Submissions — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="15 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/submissions/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/submissions`

- **Controller:** `SubmissionController@index`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 61

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/all`

- **Controller:** `SubmissionController@all`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 65

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/all' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/submissions/bulk-actions`

- **Controller:** `SubmissionController@handleBulkActions`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 63

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/submissions/bulk-actions' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/print`

- **Controller:** `SubmissionController@print`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 64

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/print' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/resources`

- **Controller:** `SubmissionController@resources`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 62

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/resources' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `DELETE` `/wp-json/fluentform/v1/submissions/{entry_id}`

- **Controller:** `SubmissionController@remove`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 66

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/{entry_id}`

- **Controller:** `SubmissionController@find`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 69

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/submissions/{entry_id}/is-favorite`

- **Controller:** `SubmissionController@toggleIsFavorite`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 72

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/is-favorite' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `DELETE` `/wp-json/fluentform/v1/submissions/{entry_id}/logs`

- **Controller:** `SubmissionLogController@remove`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 75

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/logs' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/{entry_id}/logs`

- **Controller:** `SubmissionLogController@get`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 74

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/logs' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/{entry_id}/notes`

- **Controller:** `SubmissionNoteController@get`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 77

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/notes' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/submissions/{entry_id}/notes`

- **Controller:** `SubmissionNoteController@store`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 78

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/notes' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/submissions/{entry_id}/status`

- **Controller:** `SubmissionController@updateStatus`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 71

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/status' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/submissions/{entry_id}/submission-users`

- **Controller:** `SubmissionController@submissionUsers`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 80

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/submission-users' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/submissions/{entry_id}/update-submission-user`

- **Controller:** `SubmissionController@updateSubmissionUser`
- **Policy:** `SubmissionPolicy`
- **Source:** `app/Http/Routes/api.php` line 81

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/submissions/{entry_id}/update-submission-user' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

