# Global Search — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="1 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/global-search/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/global-search`

- **Controller:** `GlobalSearchController@index`
- **Policy:** `—`
- **Source:** `app/Http/Routes/api.php` line 180

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/global-search' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

