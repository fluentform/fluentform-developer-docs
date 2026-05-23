# Messages Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="11 Filters" />

<explain-block title="fluentform/address_autocomplete_messages">

**Parameters**

- `$globalAddressMessages` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/address_autocomplete_messages', function ($globalAddressMessages, $form) {
    return $globalAddressMessages;
}, 10, 2);
```

**Reference**

`$globalAddressMessages = apply_filters('fluentform/address_autocomplete_messages', $globalAddressMessages, $form);`

This filter is located in `app/Modules/Component/Component.php` (line 710).

</explain-block>

<explain-block title="fluentform/country_restriction_message">

**Parameters**

- `$value` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/country_restriction_message', function ($value, $this) {
    return $value;
}, 10, 2);
```

**Reference**

`$message = apply_filters('fluentform/country_restriction_message', Arr::get($settings, 'fields.country.message', $defaultMessage), $this->form);`

This filter is located in `app/Services/Form/FormValidationService.php` (line 822).

</explain-block>

<explain-block title="fluentform/deny_empty_submission_message">

**Parameters**

- `$customMessage` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/deny_empty_submission_message', function ($customMessage, $this) {
    return $customMessage;
}, 10, 2);
```

**Reference**

`$customMessage = fluentform_sanitize_html(apply_filters('fluentform/deny_empty_submission_message', $customMessage, $this->form));`

This filter is located in `app/Services/Form/FormValidationService.php` (line 333).

</explain-block>

<explain-block title="fluentform/form_requires_login_message">

**Parameters**

- `$restrictions` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/form_requires_login_message', function ($restrictions, $form) {
    return $restrictions;
}, 10, 2);
```

**Reference**

`$isRenderable['message'] = apply_filters('fluentform/form_requires_login_message', $restrictions['requireLoginMsg'], $form);`

This filter is located in `app/Modules/Component/Component.php` (line 1124).

</explain-block>

<explain-block title="fluentform/form_save_progress_messages">

**Parameters**

- `$saveProgressMessages` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/form_save_progress_messages', function ($saveProgressMessages, $form) {
    return $saveProgressMessages;
}, 10, 2);
```

**Reference**

`$saveProgressMessages = apply_filters('fluentform/form_save_progress_messages', $saveProgressMessages, $form);`

This filter is located in `app/Modules/Component/Component.php` (line 1536).

</explain-block>

<explain-block title="fluentform/form_submission_messages">

**Parameters**

- `$globalMessages` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/form_submission_messages', function ($globalMessages, $form) {
    return $globalMessages;
}, 10, 2);
```

**Reference**

`$globalMessages = apply_filters('fluentform/form_submission_messages', $globalMessages, $form);`

This filter is located in `app/Modules/Component/Component.php` (line 699).

</explain-block>

<explain-block title="fluentform/ip_restriction_message">

**Parameters**

- `$value` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/ip_restriction_message', function ($value, $this) {
    return $value;
}, 10, 2);
```

**Reference**

`$message = apply_filters('fluentform/ip_restriction_message', Arr::get($settings, 'fields.ip.message', $defaultMessage), $this->form);`

This filter is located in `app/Services/Form/FormValidationService.php` (line 801).

</explain-block>

<explain-block title="fluentform/keyword_restriction_message">

**Parameters**

- `$value` — see source
- `$this` — see source

**Usage**

```php
add_filter('fluentform/keyword_restriction_message', function ($value, $this) {
    return $value;
}, 10, 2);
```

**Reference**

`$message = apply_filters('fluentform/keyword_restriction_message', Arr::get($settings, 'fields.keywords.message', $defaultMessage), $this->form);`

This filter is located in `app/Services/Form/FormValidationService.php` (line 852).

</explain-block>

<explain-block title="fluentform/schedule_form_expired_message">

**Parameters**

- `$restrictions` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/schedule_form_expired_message', function ($restrictions, $form) {
    return $restrictions;
}, 10, 2);
```

**Reference**

`$isRenderable['message'] = apply_filters('fluentform/schedule_form_expired_message', $restrictions['expiredMsg'], $form->id);`

This filter is located in `app/Modules/Component/Component.php` (line 1094).

</explain-block>

<explain-block title="fluentform/schedule_form_pending_message">

**Parameters**

- `$restrictions` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/schedule_form_pending_message', function ($restrictions, $form) {
    return $restrictions;
}, 10, 2);
```

**Reference**

`$isRenderable['message'] = apply_filters('fluentform/schedule_form_pending_message', $restrictions['pendingMsg'], $form->id);`

This filter is located in `app/Modules/Component/Component.php` (line 1089).

</explain-block>

<explain-block title="fluentform/unpublished_form_submission_message">

**Parameters**

- `$message` — see source

**Usage**

```php
add_filter('fluentform/unpublished_form_submission_message', function ($message) {
    return $message;
}, 10, 1);
```

**Reference**

`$isRenderable['message'] = apply_filters('fluentform/unpublished_form_submission_message',__('Invalid Form!', 'fluentform'));`

This filter is located in `app/Modules/Component/Component.php` (line 1001).

</explain-block>
