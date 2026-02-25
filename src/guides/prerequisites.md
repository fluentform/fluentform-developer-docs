# Prerequisites & Dev Environment

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Beginner" />

Set up your development environment for building Fluent Forms extensions.

[[toc]]

## System Requirements

### Minimum Requirements

| Requirement | Version |
|------------|---------|
| PHP | 7.4+ |
| WordPress | 5.6+ |
| MySQL | 5.6+ / MariaDB 10.0+ |

### Recommended Versions

| Requirement | Version |
|------------|---------|
| PHP | 8.1+ |
| WordPress | 6.4+ |
| MySQL | 8.0+ / MariaDB 10.6+ |

### Fluent Forms Versions

| Version | What It Includes |
|---------|-----------------|
| **Fluent Forms (Free)** | Core form builder, hooks, REST API, CLI, base field manager |
| **Fluent Forms Pro** | Payment processing, advanced fields, integrations, user registration, post creation |

::: tip
Most hooks and APIs documented here work with the free version. Features that require Pro are marked with a <Badge type="error" vertical="middle" text="Pro" /> badge.
:::

## Local Development Setup

### Option 1: Local by Flywheel (Recommended)

[Local](https://localwp.com/) provides a one-click WordPress environment with PHP, MySQL, and SSL pre-configured.

1. Download and install [Local](https://localwp.com/)
2. Create a new site (select the PHP version matching your requirements)
3. Install Fluent Forms from **Plugins > Add New**
4. Your plugin directory is at: `~/Local Sites/{site-name}/app/public/wp-content/plugins/`

### Option 2: wp-env (Docker-based)

If you prefer Docker, WordPress provides the official [`@wordpress/env`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) tool:

```bash
npm -g install @wordpress/env
```

Create a `.wp-env.json` in your extension directory:

```json
{
    "core": "WordPress/WordPress#6.4",
    "plugins": [
        ".",
        "https://downloads.wordpress.org/plugin/fluentform.latest-stable.zip"
    ],
    "phpVersion": "8.1"
}
```

Start the environment:

```bash
wp-env start
```

### Option 3: Manual Setup (MAMP/XAMPP/Valet)

Any PHP development environment with Apache/Nginx and MySQL will work. Ensure:
- PHP extensions: `mbstring`, `xml`, `curl`, `zip`, `gd` or `imagick`
- `mod_rewrite` enabled (Apache) or proper rewrite rules (Nginx)

## Recommended Dev Tools

### Debugging

**[Query Monitor](https://wordpress.org/plugins/query-monitor/)** — The essential WordPress debugging plugin. Shows:
- PHP errors and warnings
- Database queries with timing
- Hook firing order
- REST API debugging
- HTTP API calls

**WordPress Debug Mode** — Add to `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);     // Logs errors to wp-content/debug.log
define('WP_DEBUG_DISPLAY', false); // Don't show errors on screen
define('SCRIPT_DEBUG', true);      // Use unminified JS/CSS
```

### Code Editor

Any editor works, but these have strong WordPress/PHP support:

- **[VS Code](https://code.visualstudio.com/)** with [Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) for PHP intelligence
- **[PhpStorm](https://www.jetbrains.com/phpstorm/)** with built-in WordPress support

### WP-CLI

[WP-CLI](https://wp-cli.org/) is the command-line interface for WordPress. Fluent Forms also includes [its own CLI commands](/cli/):

```bash
# Check Fluent Forms stats
wp fluentform stats

# Activate Pro license
wp fluentform activate_license --key=YOUR_LICENSE_KEY
```

## Extension File Structure

A typical Fluent Forms extension follows this structure:

```yaml
my-ff-extension/
├── my-ff-extension.php    # Main plugin file with header
├── src/
│   ├── MyCustomField.php  # Custom field classes
│   └── MyIntegration.php  # Integration classes
├── assets/
│   ├── css/               # Stylesheets
│   └── js/                # Scripts
└── readme.txt             # WordPress.org readme (optional)
```

### Plugin Header

Every extension starts with a standard WordPress plugin header:

```php
<?php
/**
 * Plugin Name: My Fluent Forms Extension
 * Description: Adds custom functionality to Fluent Forms.
 * Version: 1.0.0
 * Author: Your Name
 * Requires at least: 5.6
 * Requires PHP: 7.4
 * Requires Plugins: fluentform
 */
```

The `Requires Plugins: fluentform` header (WordPress 6.5+) ensures Fluent Forms is active before your extension loads.

### Bootstrap Pattern

Always wait for Fluent Forms to load:

```php
add_action('fluentform/loaded', function ($app) {
    // $app is the Fluent Forms application instance
    // Same as calling wpFluentForm()

    // Register your custom field
    new MyCustomField();

    // Register your integration
    new MyIntegration($app);
});
```

## Useful Global Functions

These functions are available after Fluent Forms loads:

| Function | Purpose |
|----------|---------|
| [`wpFluentForm()`](/global-functions/#wpfluentform-key-null-mixed) | Get the app instance or a module |
| [`wpFluent()`](/global-functions/#wpfluent-builder) | Get the database query builder |
| [`fluentFormApi('forms')`](/global-functions/#fluentformapi-module-forms-form-submission) | PHP API for forms |
| [`fluentFormApi('submissions')`](/global-functions/#fluentformapi-module-forms-form-submission) | PHP API for submissions |
| [`fluentFormRender()`](/global-functions/#fluentformrender-atts-string) | Render a form programmatically |

See the full [Global Functions Reference](/global-functions/) for more.

## Next Steps

- [Quick Start](/guides/quick-start/) — Build your first extension
- [Creating a Custom Field](/guides/custom-field-tutorial/) — Add a custom field type
- [Building a Custom Integration](/guides/custom-integration-tutorial/) — Send data to external services
