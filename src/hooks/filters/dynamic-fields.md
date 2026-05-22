# Dynamic Fields Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="9 Filters" />

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
