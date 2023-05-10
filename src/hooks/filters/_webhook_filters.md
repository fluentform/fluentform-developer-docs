<explain-block title="fluentform/webhook_request_args">

You can modify webhook request arguments using the filter.

**Parameters**

- `$payload` (array) Webhook Request Payload
- `$settings` (array) Webhook Feed
- `$formData` (array) Form Data
- `$form` (object) Form Object
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_args', function ($payload, $settings, $formData, $form, $entryId) {
    // Do your stuff here
    
    return $payload;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/webhook_request_args', $payload, $settings, $formData, $form, $entry->id);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> notify($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="fluentform/webhook_request_method">

You can modify webhook request method using the filter.

**Parameters**

- `$method` (array) Webhook Request Method
- `$settings` (array) Webhook Feed
- `$data` (array) Form Data
- `$form` (object) Form Object
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_method', function ($method, $settings, $data, $form, $entryId) {
    // Do your stuff here
    
    return $method;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/webhook_request_method', $method, $settings, $data, $form, $entryId);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> getWebHookRequestMethod($settings, $data, $form, $entryId)

</explain-block>

<explain-block title="fluentform/webhook_request_headers">

You can modify webhook request header data using the filter.

**Parameters**

- `$requestHeaders` (array) Webhook Request Header
- `$settings` (array) Webhook Feed
- `$data` (array) Form Data
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_headers', function ($requestHeaders, $settings, $data, $form, $entryId) {
    // Do your stuff here
    
    return $requestHeaders;
}, 10, 4);

```

**Reference**

`apply_filters('fluentform/webhook_request_headers', $requestHeaders, $settings, $data, $form, $entryId);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> getWebHookRequestMethod($settings, $data, $form, $entryId)

</explain-block>

<explain-block title="fluentform/webhook_request_data">

You can modify webhook selected request data using the filter.

**Parameters**

- `$selectedData` (array) Webhook Request Selected Data
- `$settings` (array) Webhook Feed
- `$data` (array) Form Data
- `$form` (object) Form Object
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_data', function ($selectedData, $settings, $data, $form, $entry) {
    // Do your stuff here
    
    return $selectedData;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/webhook_request_data', $selectedData, $settings, $data, $form, $entryId);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> getWebHookRequestData($settings, $data, $form, $entry)

</explain-block>

<explain-block title="fluentform/webhook_request_url">

You can modify webhook request URL using the filter.

**Parameters**

- `$url` (array) Webhook Request URL
- `$settings` (array) Webhook Feed
- `$data` (array) Form Data
- `$form` (object) Form Object
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_url', function ($url, $settings, $data, $form, $entryId) {
    // Do your stuff here
    
    return $url; 
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/webhook_request_url', $re$url, $settings, $data, $form, $entryId);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> getWebHookRequestUrl($settings, $data, $form, $entryId, $requestMethod, $requestData)

</explain-block>