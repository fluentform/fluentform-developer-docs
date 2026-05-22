---
editLink: false
---

# Changelog

Flat per-release notes for Fluent Forms Free and Pro. For deeper migration / developer guidance, see the [Upgrade Guide](/upgrade-guide/6.2.0/).

---

## 6.2.3 — May 21, 2026

### Free plugin

- Adds option-group support for Dropdown and Multi-select fields
- Adds pinned-column support in the entries table
- Adds new icon presets, SVG icon support, and active/inactive color options for the Ratings field
- Adds search to the form switcher in entries
- Improves keyboard navigation in the entries table
- Improves accessibility for fixed columns and action buttons in entries
- Updates DOMPurify, PostCSS, and the Babel transform helper to address security vulnerabilities (CVE-2026-44728)
- Fixes conditional logic settings not showing for custom fields in the editor
- Fixes conditional logic not-equal check when the target field has no value
- Fixes Name field layout when a sub-field has no label
- Fixes text and list formatting differences between the editor and preview
- Fixes AI form builder losing field hints for non-English prompts
- Fixes missing submission date in Excel exports
- Fixes garbled export filenames for forms with non-Latin titles
- Fixes form import breaking confirmation and notification settings
- Fixes the Find feature missing forms inside page-builder popups
- Fixes entries not sorting by actual submission date
- Fixes form import corrupting custom CSS and JavaScript code
- Fixes visual artifacts in the collapsed form-settings sidebar
- Fixes Global Settings sidebar collapse toggle not working on desktop
- Fixes the Excel export option incorrectly labeled as xlsv
- Fixes entry Next and Previous navigation breaking on sites that use a custom DB table prefix
- Fixes fatal error when a Textarea field receives an array value during submission processing
- Fixes multi-word Google Fonts not loading in conversational forms
- Fixes `textdomain_just_in_time` notice on WordPress 6.7 and later, including WP Staging staging environments
- Fixes several strings that could not be translated on non-English admin sites
- Fixes the Entries page label showing garbled text on German-language sites
- Fixes confirmation redirect URL losing query-string values with encoded characters

### Pro plugin

- Adds Tabs style for multi-step forms with Top and Left layouts, clickable step navigation, and a compact progress bar option
- Adds a new Ranking field for ranking options by drag and drop in list or grid layout with quiz and report support
- Adds PayPal Orders API v2 and Subscriptions API support
- Adds image cropping for file upload fields with ratio and exact-dimension options
- Adds pretty URL support for Landing Page and Conversational Form share pages
- Adds keyboard shortcut support for saving form settings
- Improves Conversational Form share options with email and embed copy buttons
- Improves Landing Page share settings
- Improves the Advanced Entries Filter UX with cleaner labels, grouped operators, and tidier value inputs
- Improves the Advanced Entries Filter to support not-in and not-equal operators
- Upgrades HubSpot integration to CRM v3 and Lists v3 APIs
- Fixes custom radio and checkbox styles not rendering correctly on Safari and iOS
- Fixes payment status filter on translated admin sites
- Fixes ACF grouped fields not showing in post feed mapping
- Fixes Google Sheets integration failing when a worksheet name contains special characters
- Fixes repeater field including non-input fields in its response table
- Fixes HubSpot checkbox values being sent with an extra semicolon
- Fixes long HubSpot custom field labels being cut off in the settings dropdown
- Fixes taxonomy field showing IDs instead of names in entries and notifications
- Fixes AmoCRM OAuth redirect for amocrm.ru users
- Fixes subscription description showing recurring text when billing is set to once with a signup fee
- Fixes Landing Page media-left layout cutting off form fields
- Fixes Save Progress email not respecting SMTP plugin reply-to settings
- Fixes Authorize.Net treating held-for-review payments as failures
- Fixes Authorize.Net payment failing due to phone number validation
- Fixes HubSpot field mapping incorrectly converting text values to dates
- Fixes Dynamic field startsWith and endsWith filter options being swapped
- Fixes Advanced entries filter returning no results for numeric, date, and text searches
- Fixes italic text not rendering in custom HTML fields in conversational forms
- Fixes multi-word Google Fonts not loading in conversational forms
- Fixes save-and-resume drafts being visible across logged-in users on shared accounts
- Fixes Pipedrive Persons feed duplicating the Marketing Status field
- Fixes Pipedrive failing the API call when Marketing Status is set to No Consent
- Fixes Pipedrive integration error when campaigns are active
- Fixes Pipedrive Lead field mappings sending wrong data types for date and numeric custom fields
- Fixes Brevo integration not sending boolean field values correctly
- Fixes Brevo integration not mapping multiple-choice and category attribute types from Checkbox and Multi-select form fields
- Fixes the Offline payment method label not translatable in notifications

---

## 6.2.2 — April 23, 2026

### Free plugin

- Adds subscription field support in payment calculations
- Fix raw cookie values for smartcodes
- Hardens email attachment path resolution to keep notification attachments inside allowed paths
- Hardens predefined form payload handling and confirmation validation
- Improves compatibility for legacy predefined field option validation
- Improves form-scoped access for submission collection and print endpoints
- Tightens allowed-forms scope handling for form managers
- Ensures form settings are normalized before use
- Fix integration ActiveCampaign issue
- Preserves post feed draft values on resume
- Respects user locale in the form editor
- Improves ACL permission checks and helper coverage for delegated and full-access flows
- Hardens form HTML sanitization by blocking event handlers and escaping permission-message shortcode output
- Improve global integration settings access restriction and protects payment-filters AJAX metadata endpoint
- Sanitizes form step settings while preserving safe HTML in step button text
- Improves entry export to honor submission-info selection
- Improves multisite site setup until initialization
- Improves long entry content previews

### Pro plugin

- Adds support for subscription payments calculation
- Fixes resent email attachment path hardening and public uploaded-file deletion safety
- Hardens public UI output, modal shortcode attributes, save-and-resume email links, and webhook transport URLs
- Hardens Razorpay modal verification and validates Razorpay payments against the expected order amount
- Fixes currency-formatted payment values rejected during WPForms entry import
- Improves CSV and chained-select upload compatibility with framework v2 request files
- Fixes long partial-entry export URLs
- Loads frontend TinyMCE table and code plugins from Pro assets
- Adds `fluentform/admin_approval_confirmation_message` filter hook and preserves admin-approval raw HTML settings
- Improves post-field behavior with taxonomy-hierarchy support, safer public post-details lookup, and post-update image-state reset

---

## 6.2.1 — April 16, 2026

### Free plugin

- Hardens form-scoped permissions across legacy AJAX and REST actions
- Adds opt-in legacy HMAC fallback for pre-6.2.0 encrypted tokens to ease upgrade compatibility
- Adds filter hooks for honeypot, Akismet, and CAPTCHA spam/failed messages
- Adds database indexes to the `fluentform_form_analytics` table for faster reporting queries
- Adds mbstring fallback for servers without the extension
- Improves frontend submission reliability by falling back to the form instance AJAX URL when global vars are missing
- Fixes public PDF download support for legacy links
- Fixes draft submissions table support in entry export
- Fixes entries search ACL issue
- Fixes All Entries page localStorage persistence
- Fixes character-limit validation showing the configured message instead of a raw field name
- Fixes numeric validation so numeric-looking text is no longer treated as a number
- Fixes WPML addon activation failing with an "Invalid plugin" error

### Pro plugin

- Fixes imported entries after framework v2 request namespace changes
- Fixes imported form styles not being restored correctly
- Hardens entry, preview, webhook, Zapier, import, and resend actions with form-scoped authorization checks
- Hardens payment bulk actions and legacy payment AJAX fallbacks against unauthorized form access

---

## 6.2.0 — April 1, 2026

See the [6.2.0 upgrade guide](/upgrade-guide/6.2.0/) for the framework v2 migration (Collection return type, namespace renames, deprecated classes, hook-name normalization).
