# Global Functions

<Badge type="tip" vertical="top" text="Global Helpers" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

Helper functions registered at plugin boot and available in any PHP context. Source: `boot/globals.php`.

## `fluentFormApi($module = 'forms')`

**Source:** `boot/globals.php` (line 268)

---

## `fluentFormEditorShortCodes()`

**Source:** `boot/globals.php` (line 119)

---

## `fluentFormGetAllEditorShortCodes($form)`

**Source:** `boot/globals.php` (line 128)

---

## `fluentFormGetRandomPhoto()`

**Source:** `boot/globals.php` (line 279)

---

## `fluentFormHandleScheduledEmailReport()`

**Source:** `boot/globals.php` (line 253)

---

## `fluentFormHandleScheduledTasks()`

**Source:** `boot/globals.php` (line 235)

---

## `fluentFormIsHandlingSubmission()`

**Source:** `boot/globals.php` (line 210)

---

## `fluentFormMix($path = '')`

**Source:** `boot/globals.php` (line 9)

**** DO NOT CALL ANY FUNCTIONS DIRECTLY FROM THIS FILE ******
This file will be loaded even before the framework is loaded
so the $app is not available here, only declare functions here.

/**
Get fluentform instance or other core modules

**Parameters**

- `$key` (`string`) — @return mixed
- `$path` (`string`) — @return string

**Returns:** `mixed` — /

---

## `fluentFormPrintUnescapedInternalString($string)`

**Source:** `boot/globals.php` (line 312)

Print internal content (not user input) without escaping.

---

## `fluentFormRender($atts)`

**Source:** `boot/globals.php` (line 296)

---

## `fluentFormSanitizer($input, $attribute = null, $fields = [])`

**Source:** `boot/globals.php` (line 60)

**Returns:** `\FluentForm\Framework\Database\Query\Builder|\FluentForm\Framework\Database\Query\WPDBConnection` — /

---

## `fluentFormWasSubmitted($action = 'fluentform_submit')`

**Source:** `boot/globals.php` (line 197)

---

## `fluentImplodeRecursive($glue, array $array)`

**Source:** `boot/globals.php` (line 145)

Recursively implode a multi-dimentional array

**Parameters**

- `$glue` (`string`) — @param array  $array

**Returns:** `string`

---

## `fluentValidator($data = [], $rules = [], $messages = [])`

**Source:** `boot/globals.php` (line 498)

---

## `fluentformCanUnfilteredHTML()`

**Source:** `boot/globals.php` (line 486)

---

## `fluentformGetPages()`

**Source:** `boot/globals.php` (line 503)

---

## `fluentformLoadFile($path)`

**Source:** `boot/globals.php` (line 491)

---

## `fluentformSanitizeCSS($css)`

**Source:** `boot/globals.php` (line 468)

Sanitizes CSS.

**Returns:** `mixed` — $css

---

## `fluentform_backend_sanitizer($inputs, $sanitizeMap = [])`

**Source:** `boot/globals.php` (line 443)

Sanitize inputs recursively.

**Parameters**

- `$input` (`array`) — @param array $sanitizeMap

**Returns:** `array` — $input

---

## `fluentform_get_active_theme_slug()`

**Source:** `boot/globals.php` (line 170)

---

## `fluentform_iframe_srcdoc_sanitize($value)`

**Source:** `boot/globals.php` (line 324)

---

## `fluentform_integrations_url()`

**Source:** `boot/globals.php` (line 263)

---

## `fluentform_kses_js($content)`

**Source:** `boot/globals.php` (line 433)

---

## `fluentform_mb_strpos($haystack, $needle)`

**Source:** `boot/globals.php` (line 226)

---

## `fluentform_options_sanitize($options)`

**Source:** `boot/globals.php` (line 319)

---

## `fluentform_sanitize_html($html)`

**Source:** `boot/globals.php` (line 339)

---

## `fluentform_upgrade_url()`

**Source:** `boot/globals.php` (line 258)

---

## `getFluentFormCountryList()`

**Source:** `boot/globals.php` (line 187)

---

## `isWpAsyncRequest($action)`

**Source:** `boot/globals.php` (line 205)

---

## `wpFluent()`

**Source:** `boot/globals.php` (line 64)

---

## `wpFluentForm($key = null)`

**Source:** `boot/globals.php` (line 42)

---

## `wpFluentFormAddComponent(BaseComponent $component)`

**Source:** `boot/globals.php` (line 72)

---
