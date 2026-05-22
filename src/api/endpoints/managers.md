# Managers — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="4 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/managers/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `DELETE` `/wp-json/fluentform/v1/managers`

- **Controller:** `ManagersController@removeManager`
- **Policy:** `RoleManagerPolicy`
- **Source:** `app/Http/Routes/api.php` line 133

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/managers' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/managers`

- **Controller:** `ManagersController@index`
- **Policy:** `RoleManagerPolicy`
- **Source:** `app/Http/Routes/api.php` line 131

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/managers' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/managers`

- **Controller:** `ManagersController@addManager`
- **Policy:** `RoleManagerPolicy`
- **Source:** `app/Http/Routes/api.php` line 132

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/managers' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/managers/users`

- **Controller:** `ManagersController@getUsers`
- **Policy:** `RoleManagerPolicy`
- **Source:** `app/Http/Routes/api.php` line 134

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/managers/users' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

