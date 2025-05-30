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
