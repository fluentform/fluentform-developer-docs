# Troubleshooting & FAQ

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Reference" />

Common issues developers encounter when building Fluent Forms extensions, with solutions.

[[toc]]

## Hooks Not Firing

### Problem: My `add_action` / `add_filter` doesn't run

**Cause**: Your code runs before Fluent Forms is loaded.

**Solution**: Always wrap your hooks inside `fluentform/loaded`:

```php
// Wrong - Fluent Forms may not be loaded yet
add_action('fluentform/submission_inserted', 'my_handler', 10, 3);

// Correct
add_action('fluentform/loaded', function () {
    add_action('fluentform/submission_inserted', 'my_handler', 10, 3);
});
```

### Problem: Hook fires but doesn't receive all parameters

**Cause**: Missing the argument count parameter in `add_action` / `add_filter`.

**Solution**: Always specify the correct number of accepted arguments:

```php
// Wrong - only receives $submissionId
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    // $formData and $form will be undefined
}, 10);

// Correct
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    // All three parameters available
}, 10, 3); // ← 3 arguments
```

## Class Not Found Errors

### Problem: `Class 'FluentForm\...' not found`

**Cause**: Your code runs before Fluent Forms loads its classes, or Fluent Forms is not active.

**Solution**:

```php
// Check that Fluent Forms is active before using its classes
add_action('fluentform/loaded', function ($app) {
    // Safe to use FluentForm classes here
    $form = \FluentForm\App\Models\Form::find($formId);
});
```

### Problem: `Class 'FluentFormPro\...' not found`

**Cause**: Fluent Forms Pro is not installed or active.

**Solution**: Check before using Pro classes:

```php
add_action('fluentform/loaded', function () {
    if (!defined('FLUENTFORMPRO')) {
        return; // Pro is not available
    }

    // Safe to use Pro classes
});
```

## Custom Field Issues

### Problem: Custom field doesn't appear in the form editor

**Cause**: Field not registered or registered too late.

**Solution**: Initialize your field class inside `fluentform/loaded`:

```php
add_action('fluentform/loaded', function () {
    new MyCustomField(); // Must extend BaseFieldManager
});
```

### Problem: Custom field value not saved in submission

**Cause**: Field `name` attribute doesn't match or the field is excluded by conditional logic.

**Solution**: Ensure the `name` in `getComponent()` attributes matches what you render:

```php
// In getComponent()
'attributes' => [
    'name' => $this->key, // e.g., 'my_custom_field'
]

// In render()
echo '<input name="' . esc_attr($data['attributes']['name']) . '" />';
```

## REST API Issues

### Problem: Custom REST endpoint returns 403 Forbidden

**Cause**: Your policy's `verifyRequest()` returns `false`.

**Solution**: Check your policy class:

```php
class MyPolicy extends Policy
{
    public function verifyRequest(Request $request)
    {
        // Make sure this returns true for authorized users
        return current_user_can('fluentform_forms_manager');
    }
}
```

### Problem: `Class \MyPlugin\Policies\MyPolicy does not exist`

**Cause**: Autoloading is not configured.

**Solution**: Either use Composer autoloading or manually require the file before the `fluentform/loaded` hook fires:

```php
require_once __DIR__ . '/Policies/MyPolicy.php';
require_once __DIR__ . '/Controllers/MyController.php';

add_action('fluentform/loaded', function ($app) {
    $app->router->prefix('my-prefix')
        ->withPolicy('MyPlugin\Policies\MyPolicy')
        ->group(function ($router) {
            $router->get('/', 'MyPlugin\Controllers\MyController@index');
        });
});
```

## Integration Issues

### Problem: Integration doesn't appear in form feed settings

**Cause**: Integration is not configured (API key not set) or `pushIntegration()` has an error.

**Solution**: Check `isConfigured()` returns `true` after saving settings:

```php
public function pushIntegration($integrations, $formId)
{
    $integrations[$this->integrationKey] = [
        'title'     => $this->title,
        'logo'      => $this->logo,
        'is_active' => $this->isConfigured(), // Must return true
        // ...
    ];
    return $integrations;
}
```

### Problem: Integration `notify()` not called on submission

**Cause**: The integration feed is not enabled or conditional logic excludes it.

**Solution**: Check the feed's `enabled` field is `true` in `getIntegrationDefaults()`:

```php
public function getIntegrationDefaults($settings, $formId)
{
    return [
        'enabled' => true, // Must be true
        // ...
    ];
}
```

## Payment Issues

### Problem: Payment method not showing on form

**Cause**: `isEnabled()` returns `false` because global settings aren't saved.

**Solution**: Ensure `is_active` setting key is set to `yes` in your global settings and that `getGlobalSettings()` returns the saved data correctly.

### Problem: Payment redirect fails

**Cause**: The `wp_send_json_success` response format is incorrect.

**Solution**: Use the exact format Fluent Forms expects:

```php
wp_send_json_success([
    'nextAction'   => 'payment',
    'actionName'   => 'normalRedirect',
    'redirect_url' => $checkoutUrl,
    'message'      => 'Redirecting...',
    'result'       => [
        'insert_id' => $submission->id,
    ],
], 200);
```

## Debugging Tips

### Enable WordPress Debug Mode

Add to `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Errors are logged to `wp-content/debug.log`.

### Log Hook Execution

```php
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    error_log('Submission inserted: #' . $submissionId . ' for form #' . $form->id);
    error_log('Form data: ' . print_r($formData, true));
}, 10, 3);
```

### Query Monitor Plugin

Install [Query Monitor](https://wordpress.org/plugins/query-monitor/) to see:
- All hooks fired during a request
- Database queries with timing
- PHP errors and notices
- HTTP API calls

### Check Integration Logs

Fluent Forms logs integration results when you use:

```php
do_action('fluentform/integration_action_result', $feed, 'failed', 'Error message here');
```

These logs are visible in **Fluent Forms > Entries > {Entry} > Logs**.

### Inspect Submission Data

```php
// Dump the full submission data structure
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    error_log('=== Submission Debug ===');
    error_log('ID: ' . $submissionId);
    error_log('Form Fields: ' . print_r(array_keys($formData), true));
}, 1, 3); // Priority 1 to run early
```

## FAQ

### Can I use Fluent Forms hooks in my theme's `functions.php`?

Yes, but always wrap them in `fluentform/loaded` to ensure Fluent Forms is active:

```php
add_action('fluentform/loaded', function () {
    // Your hooks here
});
```

### How do I target a specific form in a hook?

Check the form ID inside the callback:

```php
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    if ($form->id !== 5) {
        return;
    }
    // Only runs for form #5
}, 10, 3);
```

### Where are form submissions stored in the database?

In the `fluentform_submissions` table. See the [Database Schema](/database/) for the full structure.

### How do I access a submission's data programmatically?

```php
$api = fluentFormApi('submissions');
$submission = $api->find($submissionId);
```

Or with the query builder:

```php
$submission = wpFluent()->table('fluentform_submissions')
    ->where('id', $submissionId)
    ->first();

$data = json_decode($submission->response, true);
```

### What's the difference between `fluentform/before_insert_submission` and `fluentform/submission_inserted`?

- `fluentform/before_insert_submission` fires **before** the data is saved. Use it for extra validation — throw errors here to block the submission.
- `fluentform/submission_inserted` fires **after** the data is saved. Use it for post-processing like sending data to external services.

## Related Resources

- [Submission Lifecycle](/submission-lifecycle/) — Understand the full submission flow
- [Prerequisites & Dev Environment](/guides/prerequisites/) — Set up debugging tools
- [Action Hooks Reference](/hooks/actions/) — All available action hooks
- [Filter Hooks Reference](/hooks/filters/) — All available filter hooks
