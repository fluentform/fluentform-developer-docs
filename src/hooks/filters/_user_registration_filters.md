<explain-block title="fluentform/user_registration_field_defaults">

You can modify User Registration integration default fields using the filter.

**Parameters**

- `$fields` (array) Default Integration Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/user_registration_field_defaults', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/user_registration_field_defaults', $fields, $formId);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getIntegrationDefaults($settings, $formId = null)

</explain-block>

<explain-block title="fluentform/user_registration_feed_fields">

You can modify User Registration feed fields using the filter.

**Parameters**

- `$fields` (array) Form Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/user_registration_feed_fields', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/user_registration_feed_fields', $fieldSettings['fields'], $formId);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getSettingsFields($settings, $formId = null)

</explain-block>

<explain-block title="fluentform/user_update_feed_fields">

You can modify User Update feed fields using the filter.

**Parameters**

- `$fields` (array) Form Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/user_update_feed_fields', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/user_update_feed_fields', $fieldSettings['fields'], $formId);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getSettingsFields($settings, $formId = null)

</explain-block>

<explain-block title="fluentform/user_registration_creatable_roles">

You can modify user roles for User Registration integration using the filter.

**Parameters**

- `$validRoles` (array) User Roles

**Usage**

```php
add_filter('fluentform/user_registration_creatable_roles', function ($validRoles) {
    // Do your stuff here
    
    return $validRoles;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/user_registration_creatable_roles', $validRoles);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\UserRegistrationApi -> getUserRoles()

</explain-block>

<explain-block title="fluentform/user_registration_feed">

You can modify User Registration feed using the filter.

**Parameters**

- `$feed` (array) Form Feed
- `$entry` (array) Form Submission
- `$form` (object) Form Object

**Usage**

```php
add_filter('fluentform/user_registration_feed', function ($feed, $entry, $form) {
    // Do your stuff here
    
    return $feed;
}, 10, 3);

```

**Reference**

`apply_filters('fluentform/user_registration_feed', $feed, $entry, $form);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\UserRegistrationApi -> createUser($feed, $formData, $entry, $form, $integrationKey)

</explain-block>

<explain-block title="fluentform/user_registration_map_fields">

You can modify User Registration field mapper using the filter.

**Parameters**

- `$fields` (array) Map Fields

**Usage**

```php
add_filter('fluentform/user_registration_map_fields', function ($fields) {
    // Do your stuff here
    
    return $fields;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/user_registration_map_fields', $fields);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\UserRegistrationApi -> userRegistrationMapFields()

</explain-block>

<explain-block title="fluentform/user_update_map_fields">

You can modify User Update field mapper using the filter.

**Parameters**

- `$fields` (array) Map Fields

**Usage**

```php
add_filter('fluentform/user_update_map_fields', function ($fields) {
    // Do your stuff here
    
    return $fields;
}, 10, 1);

```

**Reference**

`apply_filters('fluentform/user_update_map_fields', $fields);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\UserUpdateFormHandler -> userUpdateMapFields()

</explain-block>

<explain-block title="fluentform/user_registration_feed_fields">

You can modify user registration feed fields using the filter.

**Parameters**

- `$fields` (array) User Registration Feed Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/user_registration_feed_fields', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/user_registration_feed_fields', $fieldSettings['fields'], $formId);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getSettingsFields($settings, $formId = null)

</explain-block>

<explain-block title="fluentform/user_update_feed_fields">

You can modify user update feed fields using the filter.

**Parameters**

- `$fields` (array) User Update Feed Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/user_update_feed_fields', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/user_update_feed_fields', $fieldSettings['fields'], $formId);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getSettingsFields($settings, $formId = null)

</explain-block>

<explain-block title="fluentform/user_registration_field_defaults">

You can modify user registration default fields using the filter.

**Parameters**

- `$fields` (array) User Update Feed Fields
- `$formId` (int) Form ID

**Usage**

```php
add_filter('fluentform/user_registration_field_defaults', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);

```

**Reference**

`apply_filters('fluentform/user_registration_field_defaults', $fieldSettings['fields'], $formId);`

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getIntegrationDefaults($settings, $formId = null)

</explain-block>