# Global Settings — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="2 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/global-settings/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/global-settings`

- **Controller:** `GlobalSettingsController@index`
- **Policy:** `GlobalSettingsPolicy`
- **Source:** `app/Http/Routes/api.php` line 117

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/global-settings' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/global-settings`

- **Controller:** `GlobalSettingsController@store`
- **Policy:** `GlobalSettingsPolicy`
- **Source:** `app/Http/Routes/api.php` line 118

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/global-settings' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

