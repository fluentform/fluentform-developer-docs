# Security Best Practices

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Important" />

When building Fluent Forms extensions, follow these security practices to protect your users and their data.

[[toc]]

## Input Sanitization

Always sanitize user input before storing or processing it. Fluent Forms provides built-in helpers alongside WordPress core functions.

### FluentForm Sanitization Functions

```php
// Sanitize HTML while preserving allowed tags (iframes, SVGs)
$safeHtml = fluentform_sanitize_html($rawHtml);

// Recursively sanitize backend inputs with a callback map
$clean = fluentform_backend_sanitizer($data, [
    'title'   => 'sanitize_text_field',
    'email'   => 'sanitize_email',
    'url'     => 'esc_url_raw',
    'content' => 'wp_kses_post',
]);
```

### WordPress Core Sanitization

| Function | Use For |
|----------|---------|
| `sanitize_text_field()` | Single-line text inputs |
| `sanitize_textarea_field()` | Multi-line text |
| `sanitize_email()` | Email addresses |
| `absint()` | Positive integers |
| `esc_url_raw()` | URLs for storage |
| `wp_kses_post()` | Rich HTML content |

### When to Sanitize

- **On input**: Sanitize all data coming from `$_GET`, `$_POST`, `$_REQUEST`, or the `$request` object
- **On storage**: Sanitize before `update_option()`, database inserts, or `update_post_meta()`
- **Form data in hooks**: The `$formData` parameter in submission hooks is already sanitized by Fluent Forms, but any additional data you collect should be sanitized manually

```php
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    // $formData is already sanitized by Fluent Forms
    // But if you fetch additional data, sanitize it:
    $customHeader = sanitize_text_field($_SERVER['HTTP_X_CUSTOM_HEADER'] ?? '');
}, 10, 3);
```

## Output Escaping

Always escape data when rendering it in HTML, attributes, or JavaScript.

| Function | Context |
|----------|---------|
| `esc_html()` | Inside HTML tags |
| `esc_attr()` | Inside HTML attributes |
| `esc_url()` | In `href` or `src` attributes |
| `esc_js()` | Inside inline JavaScript |
| `wp_kses_post()` | When allowing safe HTML |

```php
// In your custom field render method
public function render($data, $form)
{
    $label = esc_html($data['settings']['label']);
    $name  = esc_attr($data['attributes']['name']);
    $value = esc_attr($data['attributes']['value']);

    $html = "<label>{$label}</label>";
    $html .= "<input type='text' name='{$name}' value='{$value}' />";

    echo $html;
}
```

## Capability Checks

Always verify user permissions before performing admin actions.

### In REST API Policies

```php
use FluentForm\Framework\Foundation\Policy;
use FluentForm\Framework\Request\Request;

class MyPolicy extends Policy
{
    public function verifyRequest(Request $request)
    {
        // Check for Fluent Forms management capability
        return current_user_can('fluentform_settings_manager');
    }
}
```

### In Admin Hooks

```php
add_action('admin_init', function () {
    if (!current_user_can('fluentform_settings_manager')) {
        return;
    }

    // Safe to process admin actions
});
```

### Available Fluent Forms Capabilities

| Capability | Description |
|-----------|-------------|
| `fluentform_forms_manager` | Manage forms (create, edit, delete) |
| `fluentform_entries_viewer` | View form entries |
| `fluentform_settings_manager` | Manage plugin settings |
| `fluentform_full_access` | Full access to all Fluent Forms features |

### Check Unfiltered HTML Permission

```php
if (fluentformCanUnfilteredHTML()) {
    // User can use unfiltered HTML
} else {
    // Sanitize HTML strictly
    $content = wp_kses_post($content);
}
```

## Nonce Verification

Use nonces for any custom admin AJAX actions or form handlers:

```php
// Generate nonce in your admin page
$nonce = wp_create_nonce('my_ff_extension_action');

// Verify in your handler
add_action('wp_ajax_my_ff_action', function () {
    if (!wp_verify_nonce($_POST['_nonce'] ?? '', 'my_ff_extension_action')) {
        wp_send_json_error(['message' => 'Security check failed.'], 403);
    }

    if (!current_user_can('fluentform_settings_manager')) {
        wp_send_json_error(['message' => 'Permission denied.'], 403);
    }

    // Process the action
});
```

::: tip
Fluent Forms REST API routes handle nonce verification automatically through the Policy system. You only need manual nonce checks for custom `wp_ajax_*` handlers.
:::

## Database Query Safety

### Use the Query Builder

The Fluent Forms query builder (`wpFluent()`) uses prepared statements internally:

```php
// Safe - parameters are automatically escaped
$submissions = wpFluent()->table('fluentform_submissions')
    ->where('form_id', $formId)
    ->where('status', 'read')
    ->get();
```

### Avoid Raw Queries

If you must use `$wpdb` directly, always use prepared statements:

```php
global $wpdb;

// Safe - using prepare()
$results = $wpdb->get_results(
    $wpdb->prepare(
        "SELECT * FROM {$wpdb->prefix}fluentform_submissions WHERE form_id = %d AND status = %s",
        $formId,
        $status
    )
);
```

::: warning
Never concatenate user input directly into SQL queries. Always use `$wpdb->prepare()` or the query builder.
:::

## Validating Form Submissions

### Server-Side Validation

Always validate on the server, even if you have client-side validation:

```php
add_filter('fluentform/validate_input_item_my_field', function ($errorMessage, $field, $formData, $fields, $form) {
    $fieldName = $field['name'];
    $value = $formData[$fieldName] ?? '';

    if (!empty($value) && !preg_match('/^[A-Z]{2}\d{6}$/', $value)) {
        return ['Please enter a valid reference number (e.g., AB123456).'];
    }

    return $errorMessage;
}, 10, 5);
```

### Using FluentValidator

```php
$validator = fluentValidator($data, [
    'email' => 'required|email',
    'name'  => 'required|string|max:100',
    'age'   => 'numeric|min:18',
]);

if ($validator->validate()->fails()) {
    $errors = $validator->errors();
    wp_send_json_error(['errors' => $errors], 422);
}
```

## Secure External API Calls

When your extension communicates with external APIs:

```php
// Use WordPress HTTP API (not curl directly)
$response = wp_remote_post('https://api.example.com/data', [
    'headers' => [
        'Authorization' => 'Bearer ' . $apiKey,
        'Content-Type'  => 'application/json',
    ],
    'body'    => wp_json_encode($payload),
    'timeout' => 30,
]);

// Always check for errors
if (is_wp_error($response)) {
    error_log('API call failed: ' . $response->get_error_message());
    return;
}

$code = wp_remote_retrieve_response_code($response);
$body = json_decode(wp_remote_retrieve_body($response), true);
```

### Store API Keys Securely

```php
// Store encrypted in options
update_option('my_ff_api_key', $apiKey, 'no'); // 'no' = don't autoload

// Never expose in frontend HTML or JavaScript
// Never log API keys
```

## Security Checklist

Use this checklist when reviewing your extension:

- [ ] All user inputs are sanitized before storage
- [ ] All outputs are escaped for their context (HTML, attribute, URL, JS)
- [ ] Admin actions check user capabilities
- [ ] Custom AJAX handlers verify nonces
- [ ] Database queries use prepared statements or the query builder
- [ ] Server-side validation exists for all custom fields
- [ ] API keys are stored in options, not hardcoded
- [ ] External API calls use `wp_remote_*()` with error handling
- [ ] No sensitive data is exposed in JavaScript or HTML source
- [ ] File uploads are validated for type and size

## Related Resources

- [Global Functions](/global-functions/) — `fluentform_sanitize_html()`, `fluentform_backend_sanitizer()`, `fluentformCanUnfilteredHTML()`, `fluentValidator()`
- [Helper Classes](/helpers/) — Protector helper for additional security utilities
- [Extending REST API](/api/extending-rest-api/) — Policy-based authorization for custom endpoints
