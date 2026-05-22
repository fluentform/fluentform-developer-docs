# Integrations — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="8 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/integrations/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/integrations`

- **Controller:** `GlobalIntegrationController@index`
- **Policy:** `—`
- **Source:** `app/Http/Routes/api.php` line 97

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/integrations' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/integrations`

- **Controller:** `GlobalIntegrationController@updateIntegration`
- **Policy:** `—`
- **Source:** `app/Http/Routes/api.php` line 98

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/integrations' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/integrations/update-status`

- **Controller:** `GlobalIntegrationController@updateModuleStatus`
- **Policy:** `—`
- **Source:** `app/Http/Routes/api.php` line 99

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/integrations/update-status' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `DELETE` `/wp-json/fluentform/v1/integrations/{form_id}`

- **Controller:** `FormIntegrationController@delete`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 108

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/integrations/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/integrations/{form_id}`

- **Controller:** `FormIntegrationController@find`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 106

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/integrations/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/integrations/{form_id}`

- **Controller:** `FormIntegrationController@update`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 107

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/integrations/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/integrations/{form_id}/form-integrations`

- **Controller:** `FormIntegrationController@index`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 105

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/integrations/{form_id}/form-integrations' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/integrations/{form_id}/integration-list-id`

- **Controller:** `FormIntegrationController@integrationListComponent`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 110

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/integrations/{form_id}/integration-list-id' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

