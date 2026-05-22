# Conversational Actions

<Badge type="tip" vertical="top" text="Action Hooks" /> <Badge type="warning" vertical="top" text="1 Actions" />

<explain-block title="fluentform/adding_custom_css_js_">

**Parameters**

- See source

**Usage**

```php
add_action('fluentform/adding_custom_css_js_', function ($value) {
    // your code
}, 10, 1);
```

**Reference**

`do_action('fluentform/adding_custom_css_js_' . $formId, $formId);`

This action is located in `app/Modules/Form/Settings/FormCssJs.php` (line 30).

</explain-block>

<explain-block title="fluentform/address_map_autocomplete">

**Parameters**

- `$data` — see source
- `$form` — see source

**Usage**

```php
add_action('fluentform/address_map_autocomplete', function ($data, $form) {
    // your code
}, 10, 2);
```

**Reference**

`do_action('fluentform/address_map_autocomplete', $data, $form);`

This action is located in `app/Services/FormBuilder/Components/Address.php` (line 65).

</explain-block>

<explain-block title="fluentform/conversational_question">

**Parameters**

- `$question` — see source
- `$field` — see source
- `$form` — see source

**Usage**

```php
add_action('fluentform/conversational_question', function ($question, $field, $form) {
    // your code
}, 10, 3);
```

**Reference**

`do_action('fluentform/conversational_question', $question, $field, $form);`

This action is located in `app/Services/FluentConversational/Classes/Converter/Converter.php` (line 856).

</explain-block>

<explain-block title="fluentform/render_report">

**Parameters**

- See source

**Usage**

```php
add_action('fluentform/render_report', function ($value) {
    // your code
}, 10, 1);
```

**Reference**

`do_action('fluentform/render_report');`

This action is located in `app/Modules/Registerer/Menu.php` (line 1255).

</explain-block>

<explain-block title="fluentform/temp_files_cleaned">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$tempDir` — see source
- `$deletedCount` — see source
- `$maxFileAge` — see source
- `$maxDeletions` — see source

**Usage**

```php
add_action('fluentform/temp_files_cleaned', function ($tempDir, $deletedCount, $maxFileAge, $maxDeletions) {
    // your code
}, 10, 4);
```

**Reference**

`do_action('fluentform/temp_files_cleaned', $tempDir, $deletedCount, $maxFileAge, $maxDeletions);`

This action is located in `src/Uploader.php` (line 725).

</explain-block>

<explain-block title="fluentform/upload_to_cloud">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$files` — see source
- `$uploadLocation` — see source
- `$formData` — see source
- `$this` — see source

**Usage**

```php
add_action('fluentform/upload_to_cloud', function ($files, $uploadLocation, $formData, $this) {
    // your code
}, 10, 4);
```

**Reference**

`do_action('fluentform/upload_to_cloud', $files, $uploadLocation, $formData, $this->form);`

This action is located in `src/Uploader.php` (line 471).

</explain-block>
