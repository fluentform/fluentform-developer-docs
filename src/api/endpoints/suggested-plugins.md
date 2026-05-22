# Suggested Plugins — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="3 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/suggested-plugins/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `POST` `/wp-json/fluentform/v1/suggested-plugins/activate-plugin`

- **Controller:** `SuggestedPluginsController@activatePlugin`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 188

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/suggested-plugins/activate-plugin' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/suggested-plugins/check-plugin-statuses`

- **Controller:** `SuggestedPluginsController@checkPluginStatuses`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 186

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/suggested-plugins/check-plugin-statuses' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/suggested-plugins/install-plugin`

- **Controller:** `SuggestedPluginsController@installPlugin`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 187

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/suggested-plugins/install-plugin' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

