# Action Hooks

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="135 Hooks" />

Fluent Forms provides action hooks that let developers run custom code when certain events occur. They are organized by category below.

## Categories

| Category | Hooks | Description |
|----------|-------|-------------|
| [Plugin Init](./plugin-init/) | 5 | Plugin loading and initialization |
| [Submission](./submission/) | 13 | Form submission processing lifecycle |
| [Partial Submission](./partial-submission/) | 10 | Step forms, save & resume, draft entries |
| [Form](./form/) | 27 | Form creation, rendering, and deletion |
| [Form Styler](./form-styler/) | 2 | Form styling and visual customization |
| [Editor](./editor/) | 8 | Form editor UI and assets |
| [Settings](./settings/) | 19 | Admin settings and navigation |
| [Payment](./payment/) | 39 | Payment processing, refunds, subscriptions |
| [Integration](./integration/) | 8 | Third-party integrations and feeds |
| [Addon](./addon/) | 2 | Addon page rendering |
| [Conversational](./conversational/) | 2 | Conversational form rendering |

## Quick Example

```php
// Run custom code after a form submission is saved
add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
    // Your custom logic here
    error_log('New submission #' . $submissionId . ' for form: ' . $form->title);
}, 10, 3);
```
