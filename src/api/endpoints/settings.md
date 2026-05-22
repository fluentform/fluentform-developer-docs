# Settings — REST Endpoints

<Badge type="tip" vertical="top" text="REST API" /> <Badge type="warning" vertical="top" text="12 Endpoints" />

All endpoints under `/wp-json/fluentform/v1/settings/...`. Auto-extracted from `app/Http/Routes/api.php`.

Auth: `X-WP-Nonce` header. PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

### `DELETE` `/wp-json/fluentform/v1/settings/{form_id}`

- **Controller:** `FormSettingsController@remove`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 41

```bash
curl -X DELETE \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/settings/{form_id}`

- **Controller:** `FormSettingsController@index`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 39

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/settings/{form_id}`

- **Controller:** `FormSettingsController@store`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 40

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/settings/{form_id}/conversational-design`

- **Controller:** `FormSettingsController@conversationalDesign`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 51

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/conversational-design' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/settings/{form_id}/customizer`

- **Controller:** `FormSettingsController@customizer`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 46

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/customizer' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/settings/{form_id}/customizer`

- **Controller:** `FormSettingsController@storeCustomizer`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 47

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/customizer' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/settings/{form_id}/entry-columns`

- **Controller:** `FormSettingsController@storeEntryColumns`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 49

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/entry-columns' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/settings/{form_id}/general`

- **Controller:** `FormSettingsController@general`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 43

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/general' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/settings/{form_id}/general`

- **Controller:** `FormSettingsController@saveGeneral`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 44

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/general' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `GET` `/wp-json/fluentform/v1/settings/{form_id}/preset`

- **Controller:** `FormSettingsController@getPreset`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 53

```bash
curl -X GET \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/preset' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/settings/{form_id}/save-preset`

- **Controller:** `FormSettingsController@savePreset`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 54

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/save-preset' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

### `POST` `/wp-json/fluentform/v1/settings/{form_id}/store-conversational-design`

- **Controller:** `FormSettingsController@storeConversationalDesign`
- **Policy:** `FormPolicy`
- **Source:** `app/Http/Routes/api.php` line 52

```bash
curl -X POST \
  'https://your-site.com/wp-json/fluentform/v1/settings/{form_id}/store-conversational-design' \
  -H 'X-WP-Nonce: <nonce>' \
  -H 'Content-Type: application/json'
```

