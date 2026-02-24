# FluentForm Developer Docs — Improvement Plan

## Overview
Comprehensive plan to fix bugs, remove wrong content, and improve the FluentForm developer documentation.

---

## Phase 1: Critical Fixes (Quick Wins)

### 1.1 Remove FluentCRM data from FluentForm docs
- **Files:** `src/database/_parts/_subscriber_schema.md`, `src/database/_parts/_funnel_schema.md`
- **Issue:** These contain FluentCRM database schemas (contact_owner, company_id, trigger_name, life_time_value) — wrong product entirely
- **Action:** Delete both files. They are orphan partials not included anywhere in the database/index.md

### 1.2 Fix homepage duplicate link
- **File:** `src/index.md` (line 57-59)
- **Issue:** "Extend Form Field" and "Extend Fields" both link to `api/classes/base-field-manager`
- **Action:** Change "Extend Fields" to "Extend Integrations" pointing to `api/classes/integration-manager-controller`, since that link is missing from the homepage list but exists in the nav

### 1.3 Fix typo "Database Molders" → "Database Models"
- **File:** `src/getting-started/index.md` (line 22)
- **Action:** Replace `│   └── Models      # Database Molders` with `│   └── Models      # Database Models`

### 1.4 Fix typo "fluetnforms" → "fluentforms"
- **File:** `src/api/classes/base-processor/index.md` (line 5)
- **Action:** Replace `fluetnforms` with `fluentforms`

### 1.5 Fix code example bug — wrong return variable
- **File:** `src/hooks/filters/_payment_filters.md` (line 45)
- **Issue:** `fluentform/submission_order_items` filter example returns `$submission` instead of `$orderItems`
- **Action:** Change `return $submission;` to `return $orderItems;`

### 1.6 Fix wrong file reference for PayPal IPN filter
- **File:** `src/hooks/filters/_payment_filters.md` (line 1110)
- **Issue:** Says filter is in `FluentFormPro\src\PaymentMethods\Stripe\API\Customer -> createCustomer()` — this is completely wrong (Stripe Customer class for a PayPal filter!)
- **Action:** Change to `FluentFormPro\src\Payments\PaymentMethods\PayPal\API\IPN -> verifyIPN()`

### 1.7 Fix sitemap plugin — missing hostname
- **File:** `src/.vuepress/config.js` (line 232-234)
- **Issue:** Sitemap plugin config is empty `{}`, no hostname set
- **Action:** Add hostname: `{ hostname: 'https://developers.fluentforms.com' }`

---

## Phase 2: Content Gaps

### 2.1 Complete the Global Functions page
- **File:** `src/global-functions/index.md`
- **Issue:** Only 14 lines, 1 function documented (`wpFluentForm`)
- **Action:** Document key global functions from `app/functions/helpers.php` in the free plugin:
  - `wpFluentForm()` (already exists)
  - `wpFluentFormAddons()`
  - `fluentFormApi($module)`
  - `fluentFormSanitizer($input, $attribute, $fields)`
  - `fluentFormHandleScheduledTasks()`
  - `fluentFormHandleScheduledEmailReport()`
  - `fluentImportCsv($file, $delimiter)`
  - `isFluentAdminPage()`
  - `fluentform_get_active_theme_slug()`
  - `fluentFormIsHandlingSubmission()`
- Also uncomment the "Utility Functions" section in `src/.vuepress/sidebars/global-functions.js`

### 2.2 Build the file-structure page (or remove dead link)
- **Directory:** `src/file-structure/` — exists but is empty (0 files)
- **Issue:** No page exists, but the getting-started page already has directory structure inline
- **Action:** Remove the empty directory since `getting-started/index.md` already covers directory structure. No pages link to `/file-structure/` directly anyway.

### 2.3 Add `requires_review` to payment status documentation
- **File:** `src/hooks/filters/_payment_filters.md`
- **Issue:** Payment status filters/docs don't mention the `requires_review` status that exists in the codebase
- **Action:** Find payment status references and add `requires_review` as a valid status value where payment statuses are listed

---

## Phase 3: Configuration & Polish

### 3.1 Fix nav typo "Helpers Classes" → "Helper Classes"
- **File:** `src/.vuepress/config.js` (line 117)
- **Action:** Change `'Helpers Classes'` to `'Helper Classes'`

### 3.2 Clean up commented-out sidebar sections
- **File:** `src/.vuepress/sidebars/db-schema.js` (lines 22-31)
  - Remove commented-out "Database Models" section referencing `/database/models/campaign` (FluentCRM model)
- **File:** `src/.vuepress/sidebars/global-functions.js` (lines 10-17)
  - Uncomment if utility functions page is created (see 2.1), otherwise remove

### 3.3 Fix getting-started grammar and content
- **File:** `src/getting-started/index.md`
- **Action:** Fix minor grammar issues:
  - "It comes lots of integrations" → "It comes with lots of integrations"
  - "step forms , post create and update , user registration ,payments" → fix inconsistent spacing around commas

---

## Execution Order

1. Phase 1 (1.1–1.7) — all quick fixes, can be done in one pass
2. Phase 2 (2.1–2.3) — content work
3. Phase 3 (3.1–3.3) — polish

Each phase will be committed separately.
