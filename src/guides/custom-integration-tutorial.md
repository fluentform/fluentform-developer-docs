# Building a Custom Integration

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Intermediate" />

This tutorial walks through building a complete Fluent Forms integration that sends submission data to an external API. You'll create an integration that appears in the Fluent Forms modules list and can be configured per-form.

For the full API reference, see [IntegrationManagerController](/api/classes/integration-manager-controller/).

[[toc]]

## Overview

A Fluent Forms integration has two parts:

1. **Global Settings** — API keys and connection credentials (configured once)
2. **Form Feed Settings** — Per-form configuration for what data to send and when

The `IntegrationManagerController` base class handles most of the UI generation. You only need to define the data structure and the submission handler.

## What You'll Build

An integration that sends form submissions to a webhook URL (similar to Zapier/Make). The integration will:

- Store a webhook URL in global settings
- Allow per-form field mapping
- Send a JSON POST request on each submission

## Step 1: Create the Plugin

Create `wp-content/plugins/ff-webhook-integration/ff-webhook-integration.php`:

```php
<?php
/**
 * Plugin Name: FF Webhook Integration
 * Description: Send Fluent Forms submissions to any webhook URL.
 * Version: 1.0.0
 * Requires Plugins: fluentform
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('fluentform/loaded', function ($app) {
    require_once __DIR__ . '/WebhookIntegration.php';
    new WebhookIntegration($app);
});
```

## Step 2: Extend IntegrationManagerController

Create `wp-content/plugins/ff-webhook-integration/WebhookIntegration.php`:

```php
<?php

use FluentForm\App\Http\Controllers\IntegrationManagerController;
use FluentForm\Framework\Foundation\Application;

class WebhookIntegration extends IntegrationManagerController
{
    public function __construct(Application $application)
    {
        parent::__construct(
            $application,
            'Custom Webhook',          // Integration title
            'custom_webhook',          // Unique integration key
            'custom_webhook_settings', // Option key for storing global settings
            'custom_webhook_feed',     // Settings key for form feeds
            11                         // Priority in the integrations list
        );

        $this->description = 'Send form submissions to any webhook URL as JSON.';
        $this->logo = plugins_url('logo.png', __FILE__);

        $this->registerAdminHooks();
    }
}
```

The constructor parameters tell Fluent Forms how to identify and store your integration's data.

## Step 3: Define Global Settings Fields

The global settings page is where users enter their API credentials. Implement `getGlobalFields()`:

```php
public function getGlobalFields($fields)
{
    return [
        'logo'             => $this->logo,
        'menu_title'       => __('Webhook Settings', 'fluentform'),
        'menu_description' => __('Configure your webhook endpoint URL.', 'fluentform'),
        'valid_message'    => __('Your webhook URL is configured', 'fluentform'),
        'invalid_message'  => __('Please enter a valid webhook URL', 'fluentform'),
        'save_button_text' => __('Save Settings', 'fluentform'),
        'fields'           => [
            'webhookUrl' => [
                'type'       => 'url',
                'label'      => __('Webhook URL', 'fluentform'),
                'label_tips' => __('Enter the URL where form data should be sent', 'fluentform'),
            ],
        ],
        'hide_on_valid'    => true,
        'discard_settings' => [
            'section_description' => __('Your webhook is connected.', 'fluentform'),
            'button_text'         => __('Disconnect Webhook', 'fluentform'),
            'data'                => [
                'webhookUrl' => '',
            ],
            'show_verify' => true,
        ],
    ];
}
```

## Step 4: Save and Load Global Settings

```php
public function getGlobalSettings($settings)
{
    $globalSettings = get_option($this->optionKey);

    if (!$globalSettings) {
        $globalSettings = [];
    }

    $defaults = [
        'webhookUrl' => '',
        'status'     => false,
    ];

    return wp_parse_args($globalSettings, $defaults);
}

public function saveGlobalSettings($settings)
{
    if (empty($settings['webhookUrl'])) {
        $settings = [
            'webhookUrl' => '',
            'status'     => false,
        ];
        update_option($this->optionKey, $settings, 'no');

        wp_send_json_success([
            'message' => __('Settings updated. Webhook disconnected.', 'fluentform'),
            'status'  => false,
        ], 200);
    }

    // Validate the URL
    $url = esc_url_raw($settings['webhookUrl']);

    if (!filter_var($url, FILTER_VALIDATE_URL)) {
        wp_send_json_error([
            'message' => __('Please enter a valid URL.', 'fluentform'),
        ], 400);
    }

    $settings = [
        'webhookUrl' => $url,
        'status'     => true,
    ];

    update_option($this->optionKey, $settings, 'no');

    wp_send_json_success([
        'message' => __('Webhook URL saved and verified.', 'fluentform'),
        'status'  => true,
    ], 200);
}
```

## Step 5: Push Integration to Form Feeds

```php
public function pushIntegration($integrations, $formId)
{
    $integrations[$this->integrationKey] = [
        'title'                => $this->title . ' Integration',
        'logo'                 => $this->logo,
        'is_active'            => $this->isConfigured(),
        'configure_title'      => __('Configuration Required!', 'fluentform'),
        'global_configure_url' => admin_url('admin.php?page=fluent_forms_settings#custom_webhook'),
        'configure_message'    => __('Please configure your webhook URL first.', 'fluentform'),
        'configure_button_text'=> __('Set Webhook URL', 'fluentform'),
    ];

    return $integrations;
}
```

## Step 6: Define Form Feed Defaults and Settings

```php
public function getIntegrationDefaults($settings, $formId)
{
    return [
        'name'                  => '',
        'fieldEmailAddress'     => '',
        'custom_field_mappings' => (object) [],
        'conditionals'          => [
            'conditions' => [],
            'status'     => false,
            'type'       => 'all',
        ],
        'enabled' => true,
    ];
}

public function getSettingsFields($settings, $formId)
{
    return [
        'fields' => [
            [
                'key'         => 'name',
                'label'       => __('Feed Name', 'fluentform'),
                'required'    => true,
                'placeholder' => __('Your Feed Name', 'fluentform'),
                'component'   => 'text',
            ],
            [
                'key'           => 'custom_field_mappings',
                'label'         => __('Map Fields', 'fluentform'),
                'sub_title'     => __('Map your form fields to webhook data keys.', 'fluentform'),
                'required'      => true,
                'component'     => 'map_fields',
                'primary_fileds'=> [
                    [
                        'key'           => 'fieldEmailAddress',
                        'label'         => __('Email Address', 'fluentform'),
                        'required'      => true,
                        'input_options' => 'emails',
                    ],
                ],
            ],
            [
                'key'       => 'conditionals',
                'label'     => __('Conditional Logic', 'fluentform'),
                'tips'      => __('Send data conditionally based on submission values.', 'fluentform'),
                'component' => 'conditional_block',
            ],
            [
                'key'            => 'enabled',
                'label'          => __('Status', 'fluentform'),
                'component'      => 'checkbox-single',
                'checkbox_label' => __('Enable this feed', 'fluentform'),
            ],
        ],
        'integration_title' => $this->title,
    ];
}

public function getMergeFields($list, $listId, $formId)
{
    // No dynamic fields to fetch for a simple webhook
    return [];
}
```

## Step 7: Handle Form Submissions

The `notify()` method is called when a form is submitted and the integration feed is active:

```php
public function notify($feed, $formData, $entry, $form)
{
    $feedData  = $feed['processedValues'];
    $settings  = get_option($this->optionKey);

    if (empty($settings['webhookUrl'])) {
        do_action('fluentform/integration_action_result', $feed, 'failed', 'Webhook URL not configured.');
        return;
    }

    // Build the payload
    $payload = [
        'form_id'       => $form->id,
        'form_title'    => $form->title,
        'submission_id' => $entry->id,
        'email'         => $feedData['fieldEmailAddress'] ?? '',
        'fields'        => $feedData['custom_field_mappings'] ?? [],
        'submitted_at'  => current_time('c'),
    ];

    // Send the webhook
    $response = wp_remote_post($settings['webhookUrl'], [
        'headers' => [
            'Content-Type' => 'application/json',
        ],
        'body'    => wp_json_encode($payload),
        'timeout' => 30,
    ]);

    if (is_wp_error($response)) {
        do_action('fluentform/integration_action_result', $feed, 'failed', $response->get_error_message());
        return;
    }

    $code = wp_remote_retrieve_response_code($response);

    if ($code >= 200 && $code < 300) {
        do_action('fluentform/integration_action_result', $feed, 'success', 'Data sent to webhook successfully.');
    } else {
        $body = wp_remote_retrieve_body($response);
        do_action('fluentform/integration_action_result', $feed, 'failed', 'Webhook returned HTTP ' . $code . ': ' . $body);
    }
}
```

::: tip
Use `do_action('fluentform/integration_action_result', $feed, $status, $message)` to log integration results. This makes debugging visible in the Fluent Forms logs.
:::

## Complete Code

```php
<?php

use FluentForm\App\Http\Controllers\IntegrationManagerController;
use FluentForm\Framework\Foundation\Application;

class WebhookIntegration extends IntegrationManagerController
{
    public function __construct(Application $application)
    {
        parent::__construct(
            $application,
            'Custom Webhook',
            'custom_webhook',
            'custom_webhook_settings',
            'custom_webhook_feed',
            11
        );

        $this->description = 'Send form submissions to any webhook URL as JSON.';
        $this->logo = plugins_url('logo.png', __FILE__);
        $this->registerAdminHooks();
    }

    public function getGlobalFields($fields)
    {
        return [
            'logo'             => $this->logo,
            'menu_title'       => __('Webhook Settings', 'fluentform'),
            'menu_description' => __('Configure your webhook endpoint URL.', 'fluentform'),
            'valid_message'    => __('Your webhook URL is configured', 'fluentform'),
            'invalid_message'  => __('Please enter a valid webhook URL', 'fluentform'),
            'save_button_text' => __('Save Settings', 'fluentform'),
            'fields'           => [
                'webhookUrl' => [
                    'type'       => 'url',
                    'label'      => __('Webhook URL', 'fluentform'),
                    'label_tips' => __('Enter the URL where form data should be sent', 'fluentform'),
                ],
            ],
            'hide_on_valid'    => true,
            'discard_settings' => [
                'section_description' => __('Your webhook is connected.', 'fluentform'),
                'button_text'         => __('Disconnect Webhook', 'fluentform'),
                'data'                => ['webhookUrl' => ''],
                'show_verify'         => true,
            ],
        ];
    }

    public function getGlobalSettings($settings)
    {
        $globalSettings = get_option($this->optionKey);
        if (!$globalSettings) {
            $globalSettings = [];
        }
        return wp_parse_args($globalSettings, [
            'webhookUrl' => '',
            'status'     => false,
        ]);
    }

    public function saveGlobalSettings($settings)
    {
        if (empty($settings['webhookUrl'])) {
            update_option($this->optionKey, ['webhookUrl' => '', 'status' => false], 'no');
            wp_send_json_success([
                'message' => __('Webhook disconnected.', 'fluentform'),
                'status'  => false,
            ], 200);
        }

        $url = esc_url_raw($settings['webhookUrl']);
        if (!filter_var($url, FILTER_VALIDATE_URL)) {
            wp_send_json_error([
                'message' => __('Please enter a valid URL.', 'fluentform'),
            ], 400);
        }

        update_option($this->optionKey, ['webhookUrl' => $url, 'status' => true], 'no');
        wp_send_json_success([
            'message' => __('Webhook URL saved and verified.', 'fluentform'),
            'status'  => true,
        ], 200);
    }

    public function pushIntegration($integrations, $formId)
    {
        $integrations[$this->integrationKey] = [
            'title'                 => $this->title . ' Integration',
            'logo'                  => $this->logo,
            'is_active'             => $this->isConfigured(),
            'configure_title'       => __('Configuration Required!', 'fluentform'),
            'global_configure_url'  => admin_url('admin.php?page=fluent_forms_settings#custom_webhook'),
            'configure_message'     => __('Please configure your webhook URL first.', 'fluentform'),
            'configure_button_text' => __('Set Webhook URL', 'fluentform'),
        ];
        return $integrations;
    }

    public function getIntegrationDefaults($settings, $formId)
    {
        return [
            'name'                  => '',
            'fieldEmailAddress'     => '',
            'custom_field_mappings' => (object) [],
            'conditionals'          => [
                'conditions' => [],
                'status'     => false,
                'type'       => 'all',
            ],
            'enabled' => true,
        ];
    }

    public function getSettingsFields($settings, $formId)
    {
        return [
            'fields' => [
                [
                    'key'         => 'name',
                    'label'       => __('Feed Name', 'fluentform'),
                    'required'    => true,
                    'placeholder' => __('Your Feed Name', 'fluentform'),
                    'component'   => 'text',
                ],
                [
                    'key'            => 'custom_field_mappings',
                    'label'          => __('Map Fields', 'fluentform'),
                    'sub_title'      => __('Map your form fields to webhook data keys.', 'fluentform'),
                    'required'       => true,
                    'component'      => 'map_fields',
                    'primary_fileds' => [
                        [
                            'key'           => 'fieldEmailAddress',
                            'label'         => __('Email Address', 'fluentform'),
                            'required'      => true,
                            'input_options' => 'emails',
                        ],
                    ],
                ],
                [
                    'key'       => 'conditionals',
                    'label'     => __('Conditional Logic', 'fluentform'),
                    'tips'      => __('Send data conditionally based on submission values.', 'fluentform'),
                    'component' => 'conditional_block',
                ],
                [
                    'key'            => 'enabled',
                    'label'          => __('Status', 'fluentform'),
                    'component'      => 'checkbox-single',
                    'checkbox_label' => __('Enable this feed', 'fluentform'),
                ],
            ],
            'integration_title' => $this->title,
        ];
    }

    public function getMergeFields($list, $listId, $formId)
    {
        return [];
    }

    public function notify($feed, $formData, $entry, $form)
    {
        $feedData = $feed['processedValues'];
        $settings = get_option($this->optionKey);

        if (empty($settings['webhookUrl'])) {
            do_action('fluentform/integration_action_result', $feed, 'failed', 'Webhook URL not configured.');
            return;
        }

        $payload = [
            'form_id'       => $form->id,
            'form_title'    => $form->title,
            'submission_id' => $entry->id,
            'email'         => $feedData['fieldEmailAddress'] ?? '',
            'fields'        => $feedData['custom_field_mappings'] ?? [],
            'submitted_at'  => current_time('c'),
        ];

        $response = wp_remote_post($settings['webhookUrl'], [
            'headers' => ['Content-Type' => 'application/json'],
            'body'    => wp_json_encode($payload),
            'timeout' => 30,
        ]);

        if (is_wp_error($response)) {
            do_action('fluentform/integration_action_result', $feed, 'failed', $response->get_error_message());
            return;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code >= 200 && $code < 300) {
            do_action('fluentform/integration_action_result', $feed, 'success', 'Data sent successfully.');
        } else {
            $body = wp_remote_retrieve_body($response);
            do_action('fluentform/integration_action_result', $feed, 'failed', 'HTTP ' . $code . ': ' . $body);
        }
    }
}
```

## Related Resources

- [IntegrationManagerController API Reference](/api/classes/integration-manager-controller/) — Full method documentation
- [Integration Feed Fields API](https://fluentforms.com/docs/integration-feed-fields-api/) — Available input components for settings
- [MailChimp Integration Source](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php) — Reference implementation
- [Integration Action Hooks](/hooks/actions/integration/) — Hooks fired during integration processing
