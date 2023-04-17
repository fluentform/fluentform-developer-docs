# Fluent Forms CLI

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Fluent Forms integrates with [WP-CLI](https://wp-cli.org/), enabling you to run certain Fluent Forms tasks via the command line interface, without using a web browser.

## What is WordPress CLI?

WP-CLI is a command line interface for [WordPress](https://wordpress.org/). It offers an alternative to the WordPress admin bar. Using the command line makes it easier for developers, agencies and hosting providers to run actions with fewer clicks, run them remotely, and even perform complex scripts based on certain conditions.

## What is Fluent Forms CLI?

Fluent Forms CLI is a set of commands integrated into WP-CLI to allow developers to run certain Fluent Forms tasks in a command line.

## Syntax

CLI commands syntax:

```bash
wp fluentform <command> [--argument]
```

## Available Commands

Currently, the following Fluent Forms commands are available:

### `wp fluentform stats`
It will return overall Fluent Forms stats like forms, submissions

### `wp fluentform activate_license`
Activate Fluent Forms Pro license key via command line

**Arguments**
- `key` Your Fluent Forms Pro License Key

**Example**
```bash
wp fluentform activate_license --key=YOUR_LICENSE_KEY
```

### `wp fluentform license_status`
See Fluent Forms Pro License Status

**Example**
```bash
wp fluentform license_status
```

## Help

For information about an individual command, use the following format:

```bash
wp help fluentform <command>
```
