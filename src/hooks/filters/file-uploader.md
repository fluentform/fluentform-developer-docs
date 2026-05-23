# File Uploader Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="9 Filters" />

These filters let you modify file upload validation, paths, and processing.

<explain-block title="fluentform/change_file_upload_location">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$location` — see source

**Usage**

```php
add_filter('fluentform/change_file_upload_location', function ($location) {
    return $location;
}, 10, 1);
```

**Reference**

`$location = apply_filters('fluentform/change_file_upload_location', $location);`

This filter is located in `src/Uploader.php` (line 869).

</explain-block>

<explain-block title="fluentform/default_file_upload_url">

You can modify default file upload path using the filter.

**Parameters**

- `$filePath` (string) File Location Path
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/default_file_upload_url', function ($filePath, $form) {
    // Do your stuff here
    
    return $filePath;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/default_file_upload_url', $filePath, $form);`

This filter is located in FluentFormPro\src\Uploader -> getProcessedUrl($file, $location)

</explain-block>

<explain-block title="fluentform/default_upload_path">

You can modify uploaded file default path using the filter.

**Parameters**

- `$filePath` (array) File Default Path
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/default_upload_path', function ($filePath, $form) {
    // Do your stuff here
    
    return $filePath;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/default_upload_path', $filePath, $this->form);`

This filter is located in FluentFormPro\src\Uploader -> copyToDefault($files)

</explain-block>

<explain-block title="fluentform/file_upload_button_text">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$btnText` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/file_upload_button_text', function ($btnText, $form) {
    return $btnText;
}, 10, 2);
```

**Reference**

`$btnText = apply_filters('fluentform/file_upload_button_text', $btnText, $form);`

This filter is located in `src/Components/Uploader.php` (line 52).

</explain-block>

<explain-block title="fluentform/file_upload_messages">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$args` — see source

**Usage**

```php
add_filter('fluentform/file_upload_messages', function ($args) {
    return $args;
}, 10, 1);
```

**Reference**

`$uploadMessages = apply_filters('fluentform/file_upload_messages', [`

This filter is located in `src/Components/Uploader.php` (line 55).

</explain-block>

<explain-block title="fluentform/file_upload_params">

You can modify file upload location using the filter.

**Parameters**

- `$param` (array) File Upload Location URL and Path
- `$formData` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/file_upload_params', function ($param, $formData, $form) {
    // Do your stuff here
    
    return $param;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/file_upload_params', $param, $this->formData, $this->form);`

This filter is located in FluentFormPro\src\Uploader -> upload()

</explain-block>

<explain-block title="fluentform/file_upload_settings_for_js">

**Parameters**

- `$args` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/file_upload_settings_for_js', function ($args, $form) {
    return $args;
}, 10, 2);
```

**Reference**

`$fileUploadSettings = apply_filters('fluentform/file_upload_settings_for_js', [], $form);`

This filter is located in `app/Services/FluentConversational/Classes/Form.php` (line 558).

</explain-block>

<explain-block title="fluentform/file_upload_validation_error">

You can modify file upload validation error using the filter.

**Parameters**

- `$errors` (array) Validation Error
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/file_upload_validation_error', function ($errors, $form) {
    // Do your stuff here
    
    return $errors;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/file_upload_validation_error', $errors, $this->form);`

This filter is located in FluentFormPro\src\Uploader -> upload()

</explain-block>

<explain-block title="fluentform/file_upload_validations">

You can modify file upload validation rules and message using the filter.

**Parameters**

- `$delegateValidations` (array) Rules and Message Set
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/file_upload_validations', function ($delegateValidations, $form) {
    // Do your stuff here
    
    return $delegateValidations; 
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/file_upload_validations', $delegateValidations, $this->form);`

This filter is located in FluentFormPro\src\Uploader -> upload()

</explain-block>

<explain-block title="fluentform/file_uploaded">

You can modify uploaded file using the filter.

**Parameters**

- `$uploadFile` (array) Uploaded File
- `$formData` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/file_uploaded', function ($uploadFile, $formData, $form) {
    // Do your stuff here
    
    return $uploadFile;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/file_uploaded', $uploadFile, $formData, $form);`

This filter is located in FluentFormPro\src\Uploader -> uploadToTemp($files, $field)

</explain-block>

<explain-block title="fluentform/skip_cloud_file_decryption">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/skip_cloud_file_decryption', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$isSkip = apply_filters('fluentform/skip_cloud_file_decryption', false);`

This filter is located in `src/Uploader.php` (line 162).

</explain-block>

<explain-block title="fluentform/temp_file_cleanup_batch_size">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/temp_file_cleanup_batch_size', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$maxDeletions = apply_filters('fluentform/temp_file_cleanup_batch_size', 50);`

This filter is located in `src/Uploader.php` (line 703).

</explain-block>

<explain-block title="fluentform/temp_file_delete_time">

You can modify temporary file delete time using the filter.

**Parameters**

- `$time` (string) Temp File Delete Time (milliseconds)

**Usage**

```php
add_filter('fluentform/temp_file_delete_time', function ($time) {
    // Do your stuff here
    
    return $time;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/temp_file_delete_time',  2 * 3600);`

This filter is located in FluentFormPro\src\Uploader -> removeOldTempFiles()

</explain-block>

<explain-block title="fluentform/uploaded_file_name">

You can modify uploaded file name using the filter.

**Parameters**

- `$file` (array) Uploaded File
- `$originalFileArray` (array) Original File
- `$formData` (array) Form Data
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/uploaded_file_name', function ($file, $originalFileArray, $formData, $form) {
    // Do your stuff here
    
    return $file;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/uploaded_file_name', $file, $originalFileArray, $this->formData, $this->form);`

This filter is located in FluentFormPro\src\Uploader -> renameFileName($file)

</explain-block>

<explain-block title="fluentform/uploader_args">

You can modify uploaded file args using the filter.

**Parameters**

- `$args` (array) Upload Files Args
- `$filesArray` (array) Files Array
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/uploader_args', function ($args, $filesArray, $form) {
    // Do your stuff here
    
    return $args;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/uploader_args', $args, $filesArray, $this->form);`

This filter is located in FluentFormPro\src\Uploader -> uploadToTemp($files, $field)

</explain-block>
