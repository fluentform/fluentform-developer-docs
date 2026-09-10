# Filter Hooks

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="331 Filters" />

Fluent Forms provides filter hooks that let you modify data and behavior. Filters receive a value, let you change it, and return the modified result. They are organized by category below.

## Categories

| Category | Filters | Description |
|----------|---------|-------------|
| [Submission](./submission/) | 44 | Modify submission data, responses, and entries |
| [Form](./form/) | 49 | Modify form rendering, validation, and fields |
| [Settings](./settings/) | 43 | Modify admin settings and permissions |
| [Integration](./integration/) | 27 | Modify integration feeds and notifications |
| [Miscellaneous](./miscellaneous/) | 57 | File uploads, analytics, permissions, shortcodes |
| [Email](./email/) | 26 | Modify email notifications and templates |
| [File Uploader](./file-uploader/) | 9 | Modify file upload validation and paths |
| [Quiz](./quiz/) | 6 | Modify quiz results and scoring |
| [User Registration](./user-registration/) | 10 | Modify user registration fields and roles |
| [Webhook](./webhook/) | 5 | Modify webhook request arguments |
| [Payment](./payment/) | 55 | Modify payment processing and gateway settings |
| [PDF](./pdf/) | 7 | Control PDF add-on behaviour (public download links) |

## Quick Example

```php
// Modify submission data before it's saved to the database
add_filter('fluentform/insert_response_data', function ($formData, $formId, $inputConfigs) {
    // Add a custom field value
    $formData['custom_field'] = 'custom_value';

    return $formData;
}, 10, 3);
```
