# Conversational Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="3 Filters" />

<explain-block title="fluentform/conversational_extra_inputs">

**Parameters**

- `$inputs` — see source
- `$formId` — see source

**Usage**

```php
add_filter('fluentform/conversational_extra_inputs', function ($inputs, $formId) {
    return $inputs;
}, 10, 2);
```

**Reference**

`return apply_filters('fluentform/conversational_extra_inputs', $inputs, $formId);`

This filter is located in `app/Services/FluentConversational/Classes/Form.php` (line 685).

</explain-block>

<explain-block title="fluentform/conversational_field_types">

**Parameters**

- `$fieldTypes` — see source

**Usage**

```php
add_filter('fluentform/conversational_field_types', function ($fieldTypes) {
    return $fieldTypes;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/conversational_field_types', $fieldTypes);`

This filter is located in `app/Services/FluentConversational/Classes/Converter/Converter.php` (line 990).

</explain-block>

<explain-block title="fluentform/conversational_form_address_gmap_api_key">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/conversational_form_address_gmap_api_key', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$question['GmapApiKey'] = apply_filters('fluentform/conversational_form_address_gmap_api_key', '');`

This filter is located in `app/Services/FluentConversational/Classes/Converter/Converter.php` (line 137).

</explain-block>
