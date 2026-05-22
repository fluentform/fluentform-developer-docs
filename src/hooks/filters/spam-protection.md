# Spam Protection Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="warning" vertical="top" text="5 Filters" />

These filters let you replace the default user-facing messages emitted when a spam protection mechanism rejects a submission. All five were introduced in **6.2.1**.

<explain-block title="fluentform/akismet_spam_message">

Replace the message returned when Akismet flags a submission as spam.

**Parameters**

- `$message` (string) Default message returned to the submitter

**Usage**

```php
add_filter('fluentform/akismet_spam_message', function ($message) {
    return __('We could not process your submission. Please try again or contact us directly.', 'your-textdomain');
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/akismet_spam_message', __('Submission marked as spammed. Please try again', 'fluentform'));`

This filter is located in `FluentForm\App\Modules\Form\FormHandler`.

</explain-block>

<explain-block title="fluentform/cleantalk_check_spam">

**Parameters**

- `$value` — see source
- `$form` — see source
- `$formData` — see source

**Usage**

```php
add_filter('fluentform/cleantalk_check_spam', function ($value, $form, $formData) {
    return $value;
}, 10, 3);
```

**Reference**

`$isSpamCheck = apply_filters('fluentform/cleantalk_check_spam', true, $form->id, $formData);`

This filter is located in `app/Services/Form/FormValidationService.php` (line 519).

</explain-block>

<explain-block title="fluentform/cleantalk_fields">

**Parameters**

- `$cleanTalkRequest` — see source
- `$formData` — see source
- `$form` — see source

**Usage**

```php
add_filter('fluentform/cleantalk_fields', function ($cleanTalkRequest, $formData, $form) {
    return $cleanTalkRequest;
}, 10, 3);
```

**Reference**

`$cleanTalkRequest = apply_filters('fluentform/cleantalk_fields', $cleanTalkRequest, $formData, $form);`

This filter is located in `app/Modules/Form/CleanTalkHandler.php` (line 118).

</explain-block>

<explain-block title="fluentform/cleantalk_spam_result">

**Parameters**

- `$isSpam` — see source
- `$form` — see source
- `$formData` — see source

**Usage**

```php
add_filter('fluentform/cleantalk_spam_result', function ($isSpam, $form, $formData) {
    return $isSpam;
}, 10, 3);
```

**Reference**

`return apply_filters('fluentform/cleantalk_spam_result', $isSpam, $form->id, $formData);`

This filter is located in `app/Services/Form/FormValidationService.php` (line 526).

</explain-block>

<explain-block title="fluentform/hcaptcha_failed_message">

Replace the message returned when hCaptcha verification fails.

**Parameters**

- `$message` (string) Default hCaptcha failure message

**Usage**

```php
add_filter('fluentform/hcaptcha_failed_message', function ($message) {
    return __('Captcha check failed. Please retry.', 'your-textdomain');
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/hcaptcha_failed_message', __('hCaptcha verification failed, please try again.', 'fluentform'));`

This filter is located in `FluentForm\App\Modules\Form\FormHandler`.

</explain-block>

<explain-block title="fluentform/hcaptcha_lang">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/hcaptcha_lang', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$locale = apply_filters('fluentform/hcaptcha_lang', '');`

This filter is located in `app/Services/FormBuilder/Components/Hcaptcha.php` (line 44).

</explain-block>

<explain-block title="fluentform/honeypot_spam_message">

Replace the message returned when the honeypot trap rejects a submission.

**Parameters**

- `$message` (string) Default honeypot rejection message

**Usage**

```php
add_filter('fluentform/honeypot_spam_message', function ($message) {
    return __('Your submission could not be accepted. Please reload the page and try again.', 'your-textdomain');
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/honeypot_spam_message', __('Sorry! You can not submit this form at this moment!', 'fluentform'));`

This filter is located in `FluentForm\App\Modules\Form\HoneyPot`.

</explain-block>

<explain-block title="fluentform/recaptcha_failed_message">

Replace the message returned when Google reCAPTCHA verification fails.

**Parameters**

- `$message` (string) Default reCAPTCHA failure message

**Usage**

```php
add_filter('fluentform/recaptcha_failed_message', function ($message) {
    return __('Please confirm you are not a robot and try again.', 'your-textdomain');
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/recaptcha_failed_message', __('reCaptcha verification failed, please try again.', 'fluentform'));`

This filter is located in `FluentForm\App\Modules\Form\FormHandler`.

</explain-block>

<explain-block title="fluentform/recaptcha_lang">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/recaptcha_lang', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$locale = apply_filters('fluentform/recaptcha_lang', '');`

This filter is located in `app/Services/FormBuilder/Components/Recaptcha.php` (line 56).

</explain-block>

<explain-block title="fluentform/turnstile_failed_message">

Replace the message returned when Cloudflare Turnstile verification fails.

**Parameters**

- `$message` (string) Default Turnstile failure message

**Usage**

```php
add_filter('fluentform/turnstile_failed_message', function ($message) {
    return __('Verification did not complete. Please refresh and try again.', 'your-textdomain');
}, 10, 1);
```

**Reference**

`apply_filters('fluentform/turnstile_failed_message', __('Turnstile verification failed, please try again.', 'fluentform'));`

This filter is located in `FluentForm\App\Modules\Form\FormHandler`.

</explain-block>

<explain-block title="fluentform/turnstile_lang">

**Parameters**

- `$value` — see source

**Usage**

```php
add_filter('fluentform/turnstile_lang', function ($value) {
    return $value;
}, 10, 1);
```

**Reference**

`$locale = apply_filters('fluentform/turnstile_lang', '');`

This filter is located in `app/Services/FormBuilder/Components/Turnstile.php` (line 49).

</explain-block>
