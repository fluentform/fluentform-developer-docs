# Forms — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="16 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/forms/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `GET` `/wp-json/fluentform/v1/forms`

- **Controller:** `FormController@index`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 13

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/forms`

- **Controller:** `FormController@store`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 14

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/forms' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/ping`

- **Controller:** `FormController@ping`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 16

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/ping' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/templates`

- **Controller:** `FormController@templates`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 15

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/templates' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `DELETE` `/wp-json/fluentform/v1/forms/{form_id}`

- **Controller:** `FormController@delete`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 21

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}`

- **Controller:** `FormController@find`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 19

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/forms/{form_id}`

- **Controller:** `FormController@update`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 20

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/forms/{form_id}/clearHistory`

- **Controller:** `FormController@clearEditHistory`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 30

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/clearHistory' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/forms/{form_id}/convert`

- **Controller:** `FormController@convert`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 23

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/convert' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/forms/{form_id}/duplicate`

- **Controller:** `FormController@duplicate`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 22

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/duplicate' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}/editHistory`

- **Controller:** `FormController@formEditHistory`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 29

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/editHistory' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}/fields`

- **Controller:** `FormController@fields`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 26

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/fields' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}/findShortCodePage`

- **Controller:** `FormController@findShortCodePage`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 28

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/findShortCodePage' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}/pages`

- **Controller:** `FormController@pages`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 25

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/pages' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}/resources`

- **Controller:** `FormController@resources`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 24

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/resources' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/forms/{form_id}/shortcodes`

- **Controller:** `FormController@shortcodes`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 27

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/forms/{form_id}/shortcodes' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

