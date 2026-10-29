# Dynamic Fields Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="10 Filters" />

<explain-block title="fluentform/chat_field_before_render">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/chat_field_before_render', function ($data, $form) {
    return $data;
}, 10, 2);
```

**Reference**

`return apply_filters('fluentform/chat_field_before_render', $data, $form);`

This filter is located in `src/classes/Chat/ChatField.php` (line 239).

</explain-block>

<explain-block title="fluentform/chat_field_send_icon">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$sendSvgIcon` — see source

**Usage**

```php
add_filter('fluentform/chat_field_send_icon', function ($sendSvgIcon) {
    return $sendSvgIcon;
}, 10, 1);
```

**Reference**

`$chatSvgIcon = apply_filters('fluentform/chat_field_send_icon', $sendSvgIcon);`

This filter is located in `src/classes/Chat/ChatField.php` (line 211).

</explain-block>

<explain-block title="fluentform/chat_gpt_waiting_message">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/chat_gpt_waiting_message', function ($value, $form) {
    return $value;
}, 10, 2);
```

**Reference**

`$message = apply_filters('fluentform/chat_gpt_waiting_message','', $form);`

This filter is located in `src/classes/Chat/ChatFieldController.php` (line 113).

</explain-block>

<explain-block title="fluentform/dynamic_field_filter_default_config">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- See source

**Usage**

```php
add_filter('fluentform/dynamic_field_filter_default_config', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$defaultConfig = apply_filters('fluentform/dynamic_field_filter_default_config' . $source, []);`

This filter is located in `src/Components/DynamicField/DynamicField.php` (line 322).

</explain-block>

<explain-block title="fluentform/dynamic_field_filter_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$fields` — see source

**Usage**

```php
add_filter('fluentform/dynamic_field_filter_fields', function ($fields) {
    return $fields;
}, 10, 1);
```

**Reference**

`return apply_filters("fluentform/dynamic_field_filter_fields", $fields);`

This filter is located in `src/Components/DynamicField/DynamicField.php` (line 731).

</explain-block>

<explain-block title="fluentform/dynamic_field_filter_get_result">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- See source

**Usage**

```php
add_filter('fluentform/dynamic_field_filter_get_result', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/dynamic_field_filter_get_result' . $source, [], $config);`

This filter is located in `src/Components/DynamicField/DynamicField.php` (line 412).

</explain-block>

<explain-block title="fluentform/dynamic_field_filter_value_options">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- See source

**Usage**

```php
add_filter('fluentform/dynamic_field_filter_value_options', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$options = apply_filters('fluentform/dynamic_field_filter_value_options' . $source, []);`

This filter is located in `src/Components/DynamicField/DynamicField.php` (line 321).

</explain-block>

<explain-block title="fluentform/dynamic_field_re_fetch_result_and_resolve_value">

**Parameters**

- `$field` — see source

**Usage**

```php
add_filter('fluentform/dynamic_field_re_fetch_result_and_resolve_value', function ($field) {
    return $field;
}, 10, 1);
```

**Reference**

`$field = apply_filters('fluentform/dynamic_field_re_fetch_result_and_resolve_value', $field);`

This filter is located in `app/Hooks/filters.php` (line 176).

</explain-block>

<explain-block title="fluentform/dynamic_field_sources">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$sources` — see source

**Usage**

```php
add_filter('fluentform/dynamic_field_sources', function ($sources) {
    return $sources;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/dynamic_field_sources', $sources);`

This filter is located in `src/Components/DynamicField/DynamicField.php` (line 303).

</explain-block>

<explain-block title="fluentform/openai_model">

<Badge type="tip" vertical="top" text="Pro" />

Change the OpenAI model used by every ChatGPT feature: API verification, **Create Using AI** form building, and ChatGPT feeds. Available from Fluent Forms Pro 6.2.17.

The default is `gpt-5.6-luna`. Return any model that supports OpenAI's **Chat Completions** endpoint and that your API key can access. An empty or non-string value keeps the default. A retired, non-chat or misspelled model fails when you verify the API key, and the settings page shows OpenAI's error message.

ChatGPT feeds pass the form ID, so different forms can use different models. API verification and **Create Using AI** pass `null`, because no form exists yet.

**Parameters**

- `$model` (string) OpenAI model ID. Default `gpt-5.6-luna`
- `$formId` (int|null) Form ID for ChatGPT feeds; `null` for API verification and Create Using AI

**Usage**

```php
// Use a larger model for every ChatGPT feature.
add_filter('fluentform/openai_model', function ($model, $formId) {
    return 'gpt-5.6-terra';
}, 10, 2);
```

```php
// Use a larger model only for the ChatGPT feeds on form 12.
add_filter('fluentform/openai_model', function ($model, $formId) {
    if (12 === $formId) {
        return 'gpt-5.6-terra';
    }
    return $model;
}, 10, 2);
```

**Reference**

`$model = apply_filters('fluentform/openai_model', self::DEFAULT_MODEL, $formId);`

This filter is located in `src/classes/Chat/ChatApi.php` -> getModel()

</explain-block>
