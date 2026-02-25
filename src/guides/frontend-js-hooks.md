# Frontend JavaScript Hooks

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Intermediate" />

Fluent Forms fires several jQuery events during the form lifecycle on the client side. You can use these to add custom behavior, track analytics, integrate with third-party scripts, or modify form behavior before and after submission.

[[toc]]

## How It Works

Fluent Forms uses jQuery events triggered on the form element (`$form`) and `document.body`. You can listen for these events using standard jQuery `.on()` syntax.

All frontend code should be enqueued via WordPress and run after Fluent Forms loads its scripts.

### Enqueuing Your Script

```php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script(
        'my-ff-frontend',
        plugins_url('js/my-ff-frontend.js', __FILE__),
        ['jquery'],
        '1.0.0',
        true
    );
});
```

::: tip
You can also use the [`fluentform/after_form_render`](/hooks/actions/form/#fluentform-after-form-render) PHP action to enqueue scripts only when a specific form is on the page.
:::

## Submission Events

### fluentform_submission_success

Fired on the form element **and** on `document.body` when a submission completes successfully.

```javascript
// Listen on a specific form
jQuery(document).on('fluentform_submission_success', '.frm-fluent-form', function (e, data) {
    console.log('Submission successful!');
    console.log('Form element:', data.form);
    console.log('Server response:', data.response);

    // Access the submission ID
    var submissionId = data.response.data.result.insert_id;
    console.log('Submission ID:', submissionId);
});
```

**Event data:**

| Property | Type | Description |
|----------|------|-------------|
| `data.form` | jQuery | The form jQuery object |
| `data.config` | object | Form configuration |
| `data.response` | object | Full server response including `data.result` |

**Common use cases:**
- Send conversion events to analytics (Google Analytics, Facebook Pixel)
- Show custom success modals
- Redirect based on submitted data
- Trigger animations or UI changes

### fluentform_submission_failed

Fired on the form element when a submission fails (server-side validation error or network failure).

```javascript
jQuery(document).on('fluentform_submission_failed', '.frm-fluent-form', function (e, data) {
    console.log('Submission failed');
    console.log('Response:', data.response);
});
```

**Event data:**

| Property | Type | Description |
|----------|------|-------------|
| `data.form` | jQuery | The form jQuery object |
| `data.response` | object | Error response with validation messages |

### fluentform_reset

Fired on `document.body` after a form is reset following a successful submission (when the confirmation action is "Reset Form" rather than "Hide Form").

```javascript
jQuery(document.body).on('fluentform_reset', function (e, $form, formConfig) {
    console.log('Form was reset:', $form);
    // Re-initialize any custom field logic
});
```

## Form Targeting

### By Form ID

Target events for a specific form using its data attribute:

```javascript
// Only listen to form #5
jQuery(document).on('fluentform_submission_success', 'form[data-form_id="5"]', function (e, data) {
    // Handle form #5 submission
});
```

### By CSS Class

Add a custom CSS class to your form in the form settings, then target it:

```javascript
jQuery(document).on('fluentform_submission_success', '.my-custom-form', function (e, data) {
    // Handle forms with this class
});
```

### All Forms

Listen on the document for events from any Fluent Form:

```javascript
jQuery(document).on('fluentform_submission_success', function (e, data) {
    // Runs for every Fluent Form submission
});
```

## Next Action Events

When a submission requires additional steps (e.g., payment processing), Fluent Forms fires a dynamic event instead of the success event:

### fluentform_next_action_{actionName}

```javascript
// Example: Payment processing step
jQuery(document).on('fluentform_next_action_payment', '.frm-fluent-form', function (e, data) {
    console.log('Payment step initiated');
    console.log('Response:', data.response);
});
```

This is used internally by payment gateways (Stripe, PayPal) to handle multi-step submissions.

## Global Callback: Before Send

Fluent Forms supports a global callback system via `window.ff_before_send_callbacks`. Register a callback that runs before the AJAX request is sent:

```javascript
// Register a callback that runs before submission
window.ff_before_send_callbacks = window.ff_before_send_callbacks || {};

window.ff_before_send_callbacks['myCustomCheck'] = function ($form, formData) {
    return new Promise(function (resolve, reject) {
        // Perform async validation or data enrichment
        var formId = $form.data('form_id');

        if (formId === 5) {
            // Add custom data to the submission
            formData.data += '&custom_field=custom_value';
        }

        resolve(); // Allow submission to proceed
        // reject('Error message'); // Block submission
    });
};
```

::: warning
Callbacks must return a Promise. If the promise rejects, the submission is blocked.
:::

## Practical Examples

### Google Analytics Event Tracking

```javascript
jQuery(document).on('fluentform_submission_success', '.frm-fluent-form', function (e, data) {
    if (typeof gtag === 'function') {
        gtag('event', 'form_submission', {
            event_category: 'Fluent Forms',
            event_label: 'Form #' + data.form.data('form_id'),
        });
    }
});
```

### Facebook Pixel Conversion

```javascript
jQuery(document).on('fluentform_submission_success', 'form[data-form_id="5"]', function (e, data) {
    if (typeof fbq === 'function') {
        fbq('track', 'Lead', {
            content_name: 'Contact Form',
        });
    }
});
```

### Custom Redirect Based on Field Value

```javascript
jQuery(document).on('fluentform_submission_success', 'form[data-form_id="10"]', function (e, data) {
    var response = data.response.data.result;

    // Only redirect if the server didn't already set a redirect
    if (!response.redirectUrl) {
        // Access form data from the serialized submission
        var formEl = data.form[0];
        var department = formEl.querySelector('[name="department"]');

        if (department && department.value === 'sales') {
            window.location.href = '/thank-you-sales/';
        }
    }
});
```

### Show a Custom Modal on Success

```javascript
jQuery(document).on('fluentform_submission_success', '.frm-fluent-form', function (e, data) {
    // Create and show a modal
    var modal = document.createElement('div');
    modal.className = 'ff-custom-modal';
    modal.innerHTML = '<div class="ff-modal-content">'
        + '<h3>Thank You!</h3>'
        + '<p>Your submission has been received.</p>'
        + '<button onclick="this.closest(\'.ff-custom-modal\').remove()">Close</button>'
        + '</div>';
    document.body.appendChild(modal);
});
```

## Available JavaScript Variables

Fluent Forms exposes `fluentFormVars` globally with useful configuration:

| Variable | Description |
|----------|-------------|
| `fluentFormVars.ajaxUrl` | WordPress AJAX URL for form submissions |
| `fluentFormVars.stepAnimationDuration` | Animation duration for multi-step forms |

## Related Resources

- [Submission Lifecycle](/submission-lifecycle/) — Full server and client-side lifecycle
- [Submission Action Hooks](/hooks/actions/submission/) — PHP hooks during submission
- [Submission Filter Hooks](/hooks/filters/submission/) — PHP filters for submission data
- [Form Action Hooks](/hooks/actions/form/) — PHP hooks during form rendering
