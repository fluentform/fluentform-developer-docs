# Quick Start

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Beginner" />

Build your first Fluent Forms extension in under 10 minutes. By the end of this guide, you'll have a working WordPress plugin that adds custom functionality to Fluent Forms.

[[toc]]

## What You'll Build

A small plugin that:
- Adds a custom "Thank You" message to the admin entries page after each submission
- Logs submission data to a custom database option for analytics
- Demonstrates the core hook pattern used by all Fluent Forms extensions

## Step 1: Create the Plugin File

Create a new file at `wp-content/plugins/my-ff-extension/my-ff-extension.php`:

```php
<?php
/**
 * Plugin Name: My Fluent Forms Extension
 * Description: A simple extension that adds custom functionality to Fluent Forms.
 * Version: 1.0.0
 * Author: Your Name
 * Requires Plugins: fluentform
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}
```

## Step 2: Wait for Fluent Forms to Load

Always hook into `fluentform/loaded` to ensure Fluent Forms is fully initialized before your code runs:

```php
add_action('fluentform/loaded', function () {
    // Your extension code goes here
});
```

::: tip Why not `plugins_loaded`?
The `fluentform/loaded` hook fires after Fluent Forms has registered all its internal services, models, and hooks. Using `plugins_loaded` may cause errors if Fluent Forms hasn't finished initializing.
:::

## Step 3: Hook Into Form Submissions

Inside the `fluentform/loaded` callback, add a submission handler:

```php
add_action('fluentform/loaded', function () {

    // Fires after a submission is successfully inserted
    add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {

        // Log the submission to a custom option
        $log = get_option('my_ff_submission_log', []);
        $log[] = [
            'submission_id' => $submissionId,
            'form_id'       => $form->id,
            'form_title'    => $form->title,
            'submitted_at'  => current_time('mysql'),
        ];

        // Keep only the last 50 entries
        $log = array_slice($log, -50);
        update_option('my_ff_submission_log', $log);

    }, 10, 3);
});
```

## Step 4: Add a Custom Admin Notice

Show a notice on the Fluent Forms entries page with submission count:

```php
add_action('fluentform/loaded', function () {

    // Submission handler (from Step 3)
    add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
        $log = get_option('my_ff_submission_log', []);
        $log[] = [
            'submission_id' => $submissionId,
            'form_id'       => $form->id,
            'form_title'    => $form->title,
            'submitted_at'  => current_time('mysql'),
        ];
        $log = array_slice($log, -50);
        update_option('my_ff_submission_log', $log);
    }, 10, 3);

    // Admin notice showing recent submission count
    add_action('admin_notices', function () {
        $screen = get_current_screen();
        if (!$screen || strpos($screen->id, 'fluent_forms') === false) {
            return;
        }

        $log = get_option('my_ff_submission_log', []);
        $today = array_filter($log, function ($entry) {
            return date('Y-m-d', strtotime($entry['submitted_at'])) === date('Y-m-d');
        });

        if (!empty($today)) {
            $count = count($today);
            echo '<div class="notice notice-success"><p>';
            echo sprintf('Fluent Forms received <strong>%d</strong> submission(s) today.', $count);
            echo '</p></div>';
        }
    });
});
```

## Step 5: Activate and Test

1. Go to **Plugins > Installed Plugins** in your WordPress admin
2. Activate **My Fluent Forms Extension**
3. Submit a test entry through any Fluent Form
4. Navigate to **Fluent Forms > Entries** — you should see the custom notice

## Complete Plugin Code

Here's the final plugin file:

```php
<?php
/**
 * Plugin Name: My Fluent Forms Extension
 * Description: A simple extension that adds custom functionality to Fluent Forms.
 * Version: 1.0.0
 * Author: Your Name
 * Requires Plugins: fluentform
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('fluentform/loaded', function () {

    add_action('fluentform/submission_inserted', function ($submissionId, $formData, $form) {
        $log = get_option('my_ff_submission_log', []);
        $log[] = [
            'submission_id' => $submissionId,
            'form_id'       => $form->id,
            'form_title'    => $form->title,
            'submitted_at'  => current_time('mysql'),
        ];
        $log = array_slice($log, -50);
        update_option('my_ff_submission_log', $log);
    }, 10, 3);

    add_action('admin_notices', function () {
        $screen = get_current_screen();
        if (!$screen || strpos($screen->id, 'fluent_forms') === false) {
            return;
        }

        $log = get_option('my_ff_submission_log', []);
        $today = array_filter($log, function ($entry) {
            return date('Y-m-d', strtotime($entry['submitted_at'])) === date('Y-m-d');
        });

        if (!empty($today)) {
            $count = count($today);
            echo '<div class="notice notice-success"><p>';
            echo sprintf('Fluent Forms received <strong>%d</strong> submission(s) today.', $count);
            echo '</p></div>';
        }
    });
});
```

## Key Concepts

| Concept | What You Learned |
|---------|-----------------|
| `fluentform/loaded` | The entry point for all Fluent Forms extensions |
| `fluentform/submission_inserted` | Hook that fires after a form submission is saved |
| Hook parameters | Submissions provide `$submissionId`, `$formData`, and `$form` |
| Priority & arguments | `add_action('hook', $callback, $priority, $argCount)` |

## Next Steps

- [Prerequisites & Dev Environment](/guides/prerequisites/) — Set up a proper development workflow
- [Creating a Custom Field](/guides/custom-field-tutorial/) — Add your own field type to the form builder
- [Building a Custom Integration](/guides/custom-integration-tutorial/) — Send form data to external services
- [Action Hooks Reference](/hooks/actions/) — Browse all available action hooks
- [Filter Hooks Reference](/hooks/filters/) — Browse all available filter hooks
