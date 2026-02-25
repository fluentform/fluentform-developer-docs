# Fluent Forms CLI

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Fluent Forms integrates with [WP-CLI](https://wp-cli.org/), enabling you to run certain Fluent Forms tasks via the command line interface, without using a web browser.

[[toc]]

## What is WordPress CLI?

WP-CLI is a command line interface for [WordPress](https://wordpress.org/). It offers an alternative to the WordPress admin bar. Using the command line makes it easier for developers, agencies and hosting providers to run actions with fewer clicks, run them remotely, and even perform complex scripts based on certain conditions.

## Requirements

- [WP-CLI](https://wp-cli.org/) installed and configured
- SSH access to your server (or a local development environment)
- Fluent Forms plugin activated

## Syntax

CLI commands syntax:

```bash
wp fluentform <command> [--argument]
```

For help on any command:

```bash
wp help fluentform <command>
```

## Available Commands

### `wp fluentform stats`

Returns overall Fluent Forms statistics including form count, submission count, and other summary data.

```bash
wp fluentform stats
```

**Example Output:**

```
+-------------------+-------+
| Metric            | Count |
+-------------------+-------+
| Total Forms       | 24    |
| Total Submissions | 1,847 |
| Unread Entries    | 12    |
+-------------------+-------+
```

---

### `wp fluentform activate_license` <Badge type="error" vertical="middle" text="Pro" />

Activate your Fluent Forms Pro license key via the command line. Useful for automated deployments and staging environment setup.

**Arguments**
- `--key` (required) Your Fluent Forms Pro License Key

```bash
wp fluentform activate_license --key=YOUR_LICENSE_KEY
```

**Example Output:**

```
Success: License activated successfully.
```

**Common Errors:**

| Error | Cause |
|-------|-------|
| `Invalid license key` | The key is incorrect or expired |
| `License limit reached` | All activations for your license are in use |
| `Could not connect` | Server cannot reach the licensing API |

---

### `wp fluentform license_status` <Badge type="error" vertical="middle" text="Pro" />

Check the current Fluent Forms Pro license status. Useful for verifying deployments.

```bash
wp fluentform license_status
```

**Example Output:**

```
+----------------+----------------------------+
| Property       | Value                      |
+----------------+----------------------------+
| Status         | Active                     |
| License Key    | ****-****-****-ABCD        |
| Expires        | 2026-12-31                 |
| Activations    | 2 / 5                      |
+----------------+----------------------------+
```

## Usage in Scripts

You can combine Fluent Forms CLI with shell scripts for automation:

```bash
#!/bin/bash
# Deploy script: activate license on new environment

wp plugin activate fluentform
wp plugin activate fluentformpro

wp fluentform activate_license --key=$FF_LICENSE_KEY

echo "Fluent Forms setup complete"
wp fluentform stats
```

## Multisite

On WordPress multisite, use the `--url` flag to target a specific site:

```bash
wp fluentform stats --url=subsite.example.com
```
