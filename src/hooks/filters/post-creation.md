# Post Creation Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="17 Filters" />

<explain-block title="fluentform/create_post_before_form_actions_processing">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/create_post_before_form_actions_processing', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$createPostBeforeFormActions = apply_filters('fluentform/create_post_before_form_actions_processing', true);`

This filter is located in `src/Components/Post/Bootstrap.php` (line 85).

</explain-block>

<explain-block title="fluentform/disable_acf_post_meta_revision">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/disable_acf_post_meta_revision', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`if (function_exists('acf_save_post_revision') && !apply_filters('fluentform/disable_acf_post_meta_revision', false)) {`

This filter is located in `src/Components/Post/PostFormHandler.php` (line 386).

</explain-block>

<explain-block title="fluentform/get_post_type_on_form_create">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$args` — see source

**Usage**

```php
add_filter('fluentform/get_post_type_on_form_create', function ($args) {
    return $args;
}, 10, 1);
```

**Reference**

`$publicPostTypes = get_post_types(apply_filters('fluentform/get_post_type_on_form_create', $args));`

This filter is located in `src/Components/Post/PostFeedSettings.php` (line 22).

</explain-block>

<explain-block title="fluentform/post_acf_accepted_advanced_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$advancedFields` — see source

**Usage**

```php
add_filter('fluentform/post_acf_accepted_advanced_fields', function ($advancedFields) {
    return $advancedFields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/post_acf_accepted_advanced_fields', $advancedFields);`

This filter is located in `src/Components/Post/AcfHelper.php` (line 248).

</explain-block>

<explain-block title="fluentform/post_acf_accepted_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$acceptedFields` — see source

**Usage**

```php
add_filter('fluentform/post_acf_accepted_fields', function ($acceptedFields) {
    return $acceptedFields;
}, 10, 1);
```

**Reference**

`$acceptedFields = apply_filters('fluentform/post_acf_accepted_fields', $acceptedFields);`

This filter is located in `src/Components/Post/AcfHelper.php` (line 394).

</explain-block>

<explain-block title="fluentform/post_acf_accepted_general_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$generalFields` — see source

**Usage**

```php
add_filter('fluentform/post_acf_accepted_general_fields', function ($generalFields) {
    return $generalFields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/post_acf_accepted_general_fields', $generalFields);`

This filter is located in `src/Components/Post/AcfHelper.php` (line 196).

</explain-block>

<explain-block title="fluentform/post_feed_settings_data_response">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$data` — see source
- `$formId` — see source
- `$postSettings` — see source

**Usage**

```php
add_filter('fluentform/post_feed_settings_data_response', function ($data, $formId, $postSettings) {
    return $data;
}, 10, 3);
```

**Reference**

`return apply_filters('fluentform/post_feed_settings_data_response', $data, $formId, $postSettings);`

This filter is located in `src/Components/Post/PostFeedSettings.php` (line 87).

</explain-block>

<explain-block title="fluentform/post_form_default_upload_path">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$path` — see source
- `$postId` — see source

**Usage**

```php
add_filter('fluentform/post_form_default_upload_path', function ($path, $postId) {
    return $path;
}, 10, 2);
```

**Reference**

`$path = apply_filters('fluentform/post_form_default_upload_path', $path, $postId);`

This filter is located in `src/Components/Post/PostFormHandler.php` (line 473).

</explain-block>

<explain-block title="fluentform/post_jetengine_accepted_advanced_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$advancedFields` — see source

**Usage**

```php
add_filter('fluentform/post_jetengine_accepted_advanced_fields', function ($advancedFields) {
    return $advancedFields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/post_jetengine_accepted_advanced_fields', $advancedFields);`

This filter is located in `src/Components/Post/JetEngineHelper.php` (line 576).

</explain-block>

<explain-block title="fluentform/post_jetengine_accepted_general_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$generalFields` — see source

**Usage**

```php
add_filter('fluentform/post_jetengine_accepted_general_fields', function ($generalFields) {
    return $generalFields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/post_jetengine_accepted_general_fields', $generalFields);`

This filter is located in `src/Components/Post/JetEngineHelper.php` (line 536).

</explain-block>

<explain-block title="fluentform/post_metabox_accepted_advanced_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$acceptedFields` — see source

**Usage**

```php
add_filter('fluentform/post_metabox_accepted_advanced_fields', function ($acceptedFields) {
    return $acceptedFields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/post_metabox_accepted_advanced_fields', $acceptedFields);`

This filter is located in `src/Components/Post/MetaboxHelper.php` (line 236).

</explain-block>

<explain-block title="fluentform/post_metabox_accepted_general_fields">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$acceptedFields` — see source

**Usage**

```php
add_filter('fluentform/post_metabox_accepted_general_fields', function ($acceptedFields) {
    return $acceptedFields;
}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/post_metabox_accepted_general_fields', $acceptedFields);`

This filter is located in `src/Components/Post/MetaboxHelper.php` (line 144).

</explain-block>

<explain-block title="fluentform/post_selection_label_by">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$postSelectLabelBy` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/post_selection_label_by', function ($postSelectLabelBy, $form) {
    return $postSelectLabelBy;
}, 10, 2);
```

**Reference**

`$labelBy = apply_filters('fluentform/post_selection_label_by', $postSelectLabelBy, $form);`

This filter is located in `src/Components/Post/PopulatePostForm.php` (line 138).

</explain-block>

<explain-block title="fluentform/post_selection_posts_per_page">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$value` — see source
- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/post_selection_posts_per_page', function ($value, $data, $form) {
    return $value;
}, 10, 3);
```

**Reference**

`'posts_per_page' => apply_filters('fluentform/post_selection_posts_per_page', -1, $data, $form)`

This filter is located in `src/Components/Post/PopulatePostForm.php` (line 87).

</explain-block>

<explain-block title="fluentform/post_selection_posts_pre_data">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$postPreData` — see source
- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/post_selection_posts_pre_data', function ($postPreData, $data, $form) {
    return $postPreData;
}, 10, 3);
```

**Reference**

`$posts = apply_filters('fluentform/post_selection_posts_pre_data', $postPreData, $data, $form);`

This filter is located in `src/Components/Post/PopulatePostForm.php` (line 82).

</explain-block>

<explain-block title="fluentform/post_selection_posts_query_args">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$extraParams` — see source
- `$data` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/post_selection_posts_query_args', function ($extraParams, $data, $form) {
    return $extraParams;
}, 10, 3);
```

**Reference**

`$extraParams = apply_filters('fluentform/post_selection_posts_query_args', $extraParams, $data, $form);`

This filter is located in `src/Components/Post/PopulatePostForm.php` (line 102).

</explain-block>

<explain-block title="fluentform/post_selection_value_by">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$postSelectBy` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/post_selection_value_by', function ($postSelectBy, $form) {
    return $postSelectBy;
}, 10, 2);
```

**Reference**

`$postValueBy = apply_filters('fluentform/post_selection_value_by', $postSelectBy, $form);`

This filter is located in `src/Components/Post/PopulatePostForm.php` (line 127).

</explain-block>
