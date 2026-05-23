# What is Fluent Forms?

<Badge type="tip" vertical="top" text="Fluent Forms Core" /> <Badge type="warning" vertical="top" text="Basic" />

Fluent Forms is a user-friendly drag-and-drop WordPress contact form plugin with more than 30 form fields, 3rd party integrations, built-in entry management system, etc. With Fluent Forms, you can create forms, payment forms, and quizzes in minutes.

## Fluent Forms Versions

Fluent Forms comes in different versions:

**Fluent Forms Core** is a free WordPress plugin. It includes its main functionalities, enabling users to create forms with conditional logic, email notifications, and more.

**Fluent Forms Pro** is a paid version that adds a number of advanced features and options not found in the free version. It comes with lots of integrations and features including step forms, post creation and updates, user registration, payments with multiple gateways, and more.

## Companion Add-ons

Beyond Free and Pro, the Fluent Forms ecosystem ships several independent add-on plugins:

- **fluent-conversational-js** — Vue 3 conversational form renderer (mounted by the free plugin's `FluentConversational` service)
- **fluentform-signature** — digital signature pad field
- **fluentforms-pdf** — PDF generator (v1, mPDF, General/Invoice/Report templates)
- **fluent-pdf** — PDF generator v2 rewrite (Vue 3 + Element Plus + Vite, multi-product)
- **multilingual-forms-fluent-forms-wpml** — WPML integration

## System Requirements

- PHP **7.4** or higher (tested through 8.4)
- WordPress **6.4** or higher (tested through latest 7.0)

The plugin enforces PHP 7.4 syntax only — no PHP 8.0+ features (`match`, nullsafe `?->`, union types, named arguments, `str_contains`, `str_starts_with`, `str_ends_with`) appear in core source.

## Directory Structure

```yaml
├── app
│   ├── Api          # public PHP facades (Form, Submission)
│   ├── Helpers      # Helper, Protector, Str utility classes
│   ├── Hooks        # actions.php, filters.php, Ajax.php, Handlers/
│   ├── Http         # Controllers, Policies, Routes/, Requests/
│   ├── Models       # Eloquent-like ORM models
│   ├── Modules      # feature modules (Acl, Ai, CLI, Component, Entries,
│   │                #   Form, HCaptcha, Payments, ReCaptcha, Registerer,
│   │                #   Report, Renderer, SubmissionHandler, Transfer,
│   │                #   Turnstile, Widgets, etc.)
│   ├── Services     # business logic — Form, FormBuilder, Integrations,
│   │                #   FluentConversational, Settings, Report, Migrator,
│   │                #   Scheduler, Logger, Roles, GlobalSettings, etc.
│   ├── Views        # PHP view templates
│   └── App.php      # service container kernel
│
├── assets           # compiled CSS/JS (rebuilt from resources/ via Laravel Mix)
├── boot             # app.php, bindings.php, globals.php
├── database         # Migrations/ (Forms, FormMeta, Submissions, SubmissionDetails,
│                    #   SubmissionMeta, FormAnalytics, ScheduledActions, Logs)
├── guten_block      # React 18 / JSX source for the Gutenberg block
├── resources        # source for compiled assets
│   ├── assets       # Vue 2 admin, jQuery public, Elementor widget, SCSS
│   └── languages    # .mo / .po translation files
└── fluentform.php   # plugin entry file
```

## Frontend Stacks

| Surface | Stack | Source root |
|---------|-------|-------------|
| Admin SPA | Vue 2 Options API + Element UI 2.15 + Vuex | `resources/assets/admin/` |
| Public forms | Vanilla JS + jQuery (server-rendered HTML) | `resources/assets/public/` |
| Gutenberg block | React 18 / JSX | `guten_block/src/` |
| Conversational | Vue 3 + Element Plus (separate `fluent-conversational-js` repo) | `../fluent-conversational-js/src/` |

## REST API base

`https://your-site.com/wp-json/fluentform/v1/`

Auth: `X-WP-Nonce` header (admin REST nonce). PUT/PATCH/DELETE sent as POST with `X-HTTP-Method-Override` header.

See the [Endpoint Reference](/api/endpoints/) for every route.

## Custom Capabilities

Fluent Forms ships its own capability system (NOT standard WP `edit_posts`):

- `fluentform_full_access`
- `fluentform_forms_manager`
- `fluentform_entries_viewer`
- `fluentform_settings_manager`
- `fluentform_view_reports`

Check with `FluentForm\App\Modules\Acl::hasPermission($cap)` or `Acl::verifyRequest()`.

## Hook prefix convention
<p class="warning">
All hooks fire with the `fluentform/` slash prefix (e.g. `do_action('fluentform/submission_inserted', ...)`). Older `fluentform_` underscore-prefixed hooks still fire via `do_action_deprecated()` for back-compat but will be removed in 7.0. See the [6.2.0 upgrade guide](/upgrade-guide/6.2.0/) for migration details.
</p>
