# Form Submit — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="1 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/form-submit/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `POST` `/wp-json/fluentform/v1/form-submit`

- **Controller:** `SubmissionHandlerController@submit`
- **Policy:** `—`
- **Source:** `app/Http/Routes/api.php` line 148

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/form-submit' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

