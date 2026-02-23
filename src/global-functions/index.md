## Global Functions

Fluent Forms provides a set of global functions located in the `boot/globals.php` file. These functions are available throughout the plugin and can be used in your custom code, themes, or plugins.

[[toc]]

### wpFluentForm($key = null): mixed
Get the Fluent Forms application instance or a specific core module.

**Parameters**
- `$key` `string|null` Module name (e.g., `'db'`, `'request'`, `'path.app'`)

**Return** `mixed` — Application instance or the requested module

**Usage**
```php
// Get the app instance
$app = wpFluentForm();

// Get the database module
$db = wpFluentForm('db');

// Get the request module
$request = wpFluentForm('request');
```

---

### wpFluent(): Builder
Get the Fluent Forms database query builder instance for direct database queries.

**Return** `\FluentForm\Framework\Database\Query\Builder`

**Usage**
```php
// Query the submissions table
$submissions = wpFluent()->table('fluentform_submissions')
    ->where('form_id', 5)
    ->get();
```

---

### fluentFormApi($module = 'forms'): Form|Submission
Get the Fluent Forms PHP API for forms or submissions. This is the recommended way to interact with Fluent Forms data programmatically.

**Parameters**
- `$module` `string` Module name — `'forms'` or `'submissions'`

**Return** `\FluentForm\App\Api\Form` or `\FluentForm\App\Api\Submission`

**Usage**
```php
// Get the Forms API
$formsApi = fluentFormApi('forms');
$form = $formsApi->find($formId);

// Get the Submissions API
$submissionsApi = fluentFormApi('submissions');
```

---

### fluentFormRender($atts): string
Render a Fluent Form programmatically (equivalent to the `[fluentform]` shortcode).

**Parameters**
- `$atts` `array` Shortcode attributes:
  - `id` `int` Form ID (required)
  - `title` `string|null` Form title override
  - `css_classes` `string` Additional CSS classes
  - `permission` `string` Required user capability
  - `type` `string` Form type — `'classic'` (default) or `'conversational'`
  - `permission_message` `string` Message shown when user lacks permission

**Return** `string` — Rendered form HTML

**Usage**
```php
// Render form #5 in a template
echo fluentFormRender(['id' => 5]);

// With custom CSS class and permission check
echo fluentFormRender([
    'id'         => 5,
    'css_classes' => 'my-custom-form',
    'permission' => 'read',
]);
```

---

### fluentFormSanitizer($input, $attribute, $fields): mixed
Recursively sanitize form input values based on field type. Used internally during submission processing.

**Parameters**
- `$input` `mixed` The input value to sanitize
- `$attribute` `string|null` The field attribute name
- `$fields` `array` Form field definitions

**Return** `mixed` — Sanitized input

**Usage**
```php
$cleanValue = fluentFormSanitizer($userInput, 'email', $formFields);
```

---

### fluentFormIsHandlingSubmission(): bool
Check if the current request is a Fluent Forms submission or async request.

**Return** `bool`

**Usage**
```php
if (fluentFormIsHandlingSubmission()) {
    // Current request is a form submission
}
```

---

### fluentFormHandleScheduledTasks(): void
Process failed scheduled actions (retry up to 4 times). Called by WordPress cron.

**Usage**
```php
// Manually trigger scheduled task processing
fluentFormHandleScheduledTasks();
```

---

### fluentFormHandleScheduledEmailReport(): void
Process scheduled email reports. Called by WordPress cron.

---

### fluentFormEditorShortCodes(): array
Get the list of available editor shortcodes for form notifications and confirmations.

**Return** `array` — Array of shortcode groups

---

### fluentFormGetAllEditorShortCodes($form): array
Get all editor shortcodes available for a specific form, including form-specific field shortcodes.

**Parameters**
- `$form` `object` The form object

**Return** `array` — Array of all available shortcodes

---

### getFluentFormCountryList(): array
Get the full list of countries with their codes.

**Return** `array` — Associative array of country code => country name

---

### fluentFormMix($path): string
Generate a URL for static assets within the Fluent Forms plugin.

**Parameters**
- `$path` `string` Relative path to the asset

**Return** `string` — Full URL to the asset

---

### fluentform_sanitize_html($html): string
Sanitize HTML content while preserving allowed tags (including iframes, SVGs, and custom elements). Removes event handlers and JavaScript protocols.

**Parameters**
- `$html` `string` HTML content to sanitize

**Return** `string` — Sanitized HTML

**Usage**
```php
$safeHtml = fluentform_sanitize_html($rawHtml);
```

---

### fluentform_backend_sanitizer($inputs, $sanitizeMap): array
Sanitize backend inputs recursively using a map of sanitization callbacks.

**Parameters**
- `$inputs` `array` Input data to sanitize
- `$sanitizeMap` `array` Associative array of `key => callback` pairs

**Return** `array` — Sanitized input data

**Usage**
```php
$clean = fluentform_backend_sanitizer($data, [
    'title' => 'sanitize_text_field',
    'email' => 'sanitize_email',
    'content' => 'wp_kses_post',
]);
```

---

### fluentformCanUnfilteredHTML(): bool
Check if the current user can use unfiltered HTML or if field sanitization is disabled.

**Return** `bool`

---

### fluentValidator($data, $rules, $messages): Validator
Create a validation instance for data validation.

**Parameters**
- `$data` `array` Data to validate
- `$rules` `array` Validation rules
- `$messages` `array` Custom error messages

**Return** `Validator`

**Usage**
```php
$validator = fluentValidator($data, [
    'email' => 'required|email',
    'name'  => 'required|string',
]);

if ($validator->validate()->fails()) {
    $errors = $validator->errors();
}
```
