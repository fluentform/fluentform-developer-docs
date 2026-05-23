# Roles — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="2 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/roles/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/roles`

- **Controller:** `RolesController@index`
- **Policy:** `RoleManagerPolicy`
- **Source:** `app/Http/Routes/api.php` line 124

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/roles' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/roles`

- **Controller:** `RolesController@addCapability`
- **Policy:** `RoleManagerPolicy`
- **Source:** `app/Http/Routes/api.php` line 125

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/roles' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

