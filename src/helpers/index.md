## Helper Classes

Fluent Forms provides few helper classes that you can interact easily to build advanced functionalities on your plugin.
Many of these functions are used by the plugin itself; however, you are free to use them in your own addon if you find them convenient.

# Fluent Forms Core Helper Class

- Class with Namespace: `\FluentForm\App\Helpers\Helper`
- Method Types: `static`

[[toc]]

<a name="method-helper-get-forms"></a>

### `Helper::advancedOptionsValueLabelMap($options)`

**Source:** `app/Helpers/Helper.php` (line 137)

---

### `Helper::arrayFilterRecursive($arrayItems)`

**Source:** `app/Helpers/Helper.php` (line 1116)

---

### `Helper::deleteFormMeta($formId, $metaKey)`

**Source:** `app/Helpers/Helper.php` (line 303)

---

### `Helper::fileUploadLocations()`

**Source:** `app/Helpers/Helper.php` (line 874)

---

### `Helper::flattenAdvancedOptions($options)`

**Source:** `app/Helpers/Helper.php` (line 110)

Sanitize form inputs recursively.

---

### `Helper::formExtraCssClass()`

The `Helper::formExtraCssClass` method returns form extra css class that set in form settings page.

**Arguments** 
- `form` - (object) Form Object

```php
use FluentForm\App\Helpers\Helper;

$form = Helper::getForm(240);
$extraCssClass = Helper::formExtraCssClass($form);
// extra css class
```
-----------------------------------------

<a name="method-helper-is-multi-step-form"></a>

### `Helper::getAjaxUrl()`

**Source:** `app/Helpers/Helper.php` (line 1401)

Shortcode parse on validation message

---

### `Helper::getCountryCodeFromHeaders()`

**Source:** `app/Helpers/Helper.php` (line 1524)

Determine pro payment script is compatible or not
Script is compatible if pro version meets the minimum required version

---

### `Helper::getDefaultDateTimeFormatForMoment()`

**Source:** `app/Helpers/Helper.php` (line 1406)

Shortcode parse on validation message

---

### `Helper::getDuplicateFieldNames()`

The `Helper::getDuplicateFieldNames` method returns duplicate field name index name pair if it has.

**Arguments**
- `fields` - (string) Form Fields JSON String.

```php
use FluentForm\App\Helpers\Helper;

$form = Helper::getForm(240);
$duplicates = Helper::getDuplicateFieldNames($form->form_fields);
if ($duplicates) {
    print_r($duplicates);
    /*
     * Array ( [7] => email )
     */
}
```
--------------------------------------------------

<a name="method-helper-is-json"></a>

### `Helper::getEntryStatuses()`

The `Helper::getEntryStatuses` method returns fluentform submission core statuses array key name pair.

**Arguments**
- `form_id` - (int) Form ID. Optional, pass if possible for more form specify activated statuses.

```php
use FluentForm\App\Helpers\Helper;

$entryStatuses = Helper::getEntryStatuses(240);
/*
  
[
 "unread" => "Unread"
  "read" => "Read"
  "favorites" => "Favorites"
  "trashed" => "Trashed"
]

 */
```
--------------------------------------------------

<a name="method-helper-get-numeric-formatted"></a>

### `Helper::getForm()`

The `Helper::getForm` method return form as object.

**Arguments**
- `form_id` - (int) Form ID

```php
use FluentForm\App\Helpers\Helper;

$form = Helper::getForm(240); // pass your form id
/*
$form->type // form
$form->title // Conversational Form (240)
$form->created_at // 2023-03-10 10:44:00
$form->updated_at // 2023-03-15 13:51:39
$form->form_fields // "{"fields":[{"index":6,"element":"input_number","attributes":{...},"settings":{...}}, {...}], ..., "}"
*/
```
---------------------------------------

<a name="method-helper-set-form-meta"></a>

### `Helper::getFormAdminPermalink($route, $form)`

**Source:** `app/Helpers/Helper.php` (line 834)

---

### `Helper::getFormInstaceClass($formId)`

**Source:** `app/Helpers/Helper.php` (line 375)

---

### `Helper::getFormMeta()`

The `Helper::getFormMeta` method returns a meta value for specific meta key. If not found return default value passed by arguments.

**Arguments** 
- `form_id` - (int) Form ID
- `meta_key` - (string) Meta key
- `default` - (mixed) Default Meta value. Optional, if omitted pass '' as default;

```php
use FluentForm\App\Helpers\Helper;

$value = Helper::getFormMeta(240, '_my_meta_key');
/* 
[
  0 => "string"
  "mixed" => [45, '34', true, 'string']
]
*/
```
---------------------------------------

<a name="method-helper-form-extra-css-class"></a>

### `Helper::getForms()`

The `Helper::getForms` method returns all forms with form id as keyed array.

```php
use FluentForm\App\Helpers\Helper;

$forms = Helper::getForms();
/*
[
    0 => "Select a Fluent Forms"
  335 => "Blank Form (335)"
  333 => "Conversational Form (333)"
  332 => "Blank Form (332)"
  309 => "Chain Select field (309)"
  306 => "Step Custom HTML (306)"
  241 => "Polling Form (241)"
  240 => "Conversational Form (240)"
  237 => "User With Additional info (237)"
]
*/
```
------------------------------------------

<a name="method-helper-get-form"></a>

### `Helper::getFormSettingsUrl($form)`

**Source:** `app/Helpers/Helper.php` (line 841)

---

### `Helper::getFormsIdsFromBlocks($content)`

**Source:** `app/Helpers/Helper.php` (line 468)

---

### `Helper::getFrontendFacingUrl($args = '')`

**Source:** `app/Helpers/Helper.php` (line 1519)

Determine pro payment script is compatible or not
Script is compatible if pro version meets the minimum required version

---

### `Helper::getHtmlElementClass($value1, $value2, $class = 'active', $default = '')`

**Source:** `app/Helpers/Helper.php` (line 171)

---

### `Helper::getInputNameFromShortCode($value)`

**Source:** `app/Helpers/Helper.php` (line 1044)

---

### `Helper::getIpinfo()`

**Source:** `app/Helpers/Helper.php` (line 1089)

---

### `Helper::getLandingPageEnabledForms()`

**Source:** `app/Helpers/Helper.php` (line 1495)

Determine pro payment script is compatible or not
Script is compatible if pro version meets the minimum required version

---

### `Helper::getLogInitiator($action, $type = 'log')`

**Source:** `app/Helpers/Helper.php` (line 1072)

---

### `Helper::getNextTabIndex($increment = 1)`

**Source:** `app/Helpers/Helper.php` (line 364)

---

### `Helper::getNumericFormatted()`

The `Helper::getNumericFormatted` method returns formatted numeric value in specify format depend on format config passed by arguments.

**Arguments**
- `input` - (numeric) Numeric input Value.
- `config` - (array) Numeric Formatter config.

```php
use FluentForm\App\Helpers\Helper;
use FluentForm\Framework\Support\Arr;

$formatterConfig = Arr::get($numericField, 'raw.settings.numeric_formatter');
if ($formatterConfig) {
    $formattedValue = Helper::getNumericFormatted(123456789, $formatterConfig);
    // 123,456,789
}
```
--------------------------------------------------

<a name="method-helper-get-numeric-value"></a>

### `Helper::getNumericFormatters()`

**Source:** `app/Helpers/Helper.php` (line 606)

---

### `Helper::getNumericValue()`

The `Helper::getNumericValue` method convert formatted numeric value to numeric value depend on format config passed by arguments, and returns numeric value.

**Arguments**
- `formated_value` - (string) Numeric Formatted Value.
- `config` - (array) Numeric Formatter config.

```php
use FluentForm\App\Helpers\Helper;
use FluentForm\Framework\Support\Arr;

$formatterConfig = Arr::get($numericField, 'raw.settings.numeric_formatter');
if ($formatterConfig) {
    $numericValue = Helper::getNumericValue('123,456,789', $formatterConfig);
    // 123456789
}
```
--------------------------------------------------

<a name="method-helper-get-duplicate-field-names"></a>

### `Helper::getPreviewUrl()`

The `Helper::getPreviewUrl` method return form preview url.

**Arguments** 
- `form_id` - (int) Form ID
- `type` - (string) Form Type. Optional, if omitted return normal preview url
  - `conversational` For conversational form preview url
  - `classic` Form classic preview url

```php
use FluentForm\App\Helpers\Helper;

$previewUrl = Helper::getPreviewUrl(240, 'conversational');
// http://fluentformsite.test/?fluent-form=240
```
--------------------------------------------------

<a name="method-helper-set-submission-meta"></a>

### `Helper::getRankingFieldsWithDuplicateOptionValues($fields)`

**Source:** `app/Helpers/Helper.php` (line 709)

---

### `Helper::getReportableInputs()`

**Source:** `app/Helpers/Helper.php` (line 223)

Determines if the given string is a valid json.

---

### `Helper::getRestInfo()`

The `Helper::getRestInfo` method returns rest information configuration.

```php
use FluentForm\App\Helpers\Helper;

$restInfo = Helper::getRestInfo();
/*
 [
  "base_url" => "https://youresite.com/wp-json/"
  "url" => "https://youresite.com/wp-json/fluentform/v1"
  "nonce" => "91fa485ac5"
  "namespace" => "fluentform"
  "version" => "v1"
 ]
 */
```
--------------------------------------------------

### `Helper::getShortCodeIds($content, $tag = 'fluentform', $selector = 'id')`

**Source:** `app/Helpers/Helper.php` (line 421)

---

### `Helper::getSubFieldReportableInputs()`

**Source:** `app/Helpers/Helper.php` (line 248)

Determines if the given string is a valid json.

---

### `Helper::getSubmissionMeta()`

The `Helper::getSubmissionMeta` method returns a submission meta value for specific meta key. If not found return default value passed by arguments.

**Arguments**
- `submission_id` - (int) Submission ID
- `meta_key` - (string) Meta key
- `default` - (mixed) Default Meta value. Optional, if omitted pass false as default;

```php
use FluentForm\App\Helpers\Helper;

$value = Helper::getSubmissionMeta(2, '_my_meta_key');
/* 
[
  0 => "string"
  "mixed" => [45, '34', true, 'string']
]
*/
```
--------------------------------------------------

<a name="method-helper-unread-count"></a>

### `Helper::getTabularGridFormatValue($girdData,
        $field,
        $rowJoiner = '<br />',
        $colJoiner = ', ',
        $type = '')`

**Source:** `app/Helpers/Helper.php` (line 991)

---

### `Helper::getWhiteListedFields($formId)`

**Source:** `app/Helpers/Helper.php` (line 1356)

---

### `Helper::hasBrTag($content)`

**Source:** `app/Helpers/Helper.php` (line 937)

---

### `Helper::hasFormElement($formId, $elementName)`

**Source:** `app/Helpers/Helper.php` (line 549)

---

### `Helper::hasPartialEntries($formId)`

**Source:** `app/Helpers/Helper.php` (line 594)

---

### `Helper::hasPro()`

**Source:** `app/Helpers/Helper.php` (line 1490)

Determine pro payment script is compatible or not
Script is compatible if pro version meets the minimum required version

---

### `Helper::isAutoloadCaptchaEnabled()`

**Source:** `app/Helpers/Helper.php` (line 1094)

---

### `Helper::isAutosaveEnabled()`

**Source:** `app/Helpers/Helper.php` (line 1099)

---

### `Helper::isBlockEditor()`

**Source:** `app/Helpers/Helper.php` (line 1127)

---

### `Helper::isConversionForm()`

The `Helper::isConversionForm` method check form is conversational or not. If conversational return true otherwise false.

**Arguments** 
- `form_id` - (int) Form ID

```php
use FluentForm\App\Helpers\Helper;

$isConversionForm = Helper::isConversionForm(240);
// true
```
------------------------------------------------

<a name="method-helper-get-preview-url"></a>

### `Helper::isDefaultWPDateEnabled()`

**Source:** `app/Helpers/Helper.php` (line 1461)

Shortcode parse on validation message

---

### `Helper::isElementorEditor()`

**Source:** `app/Helpers/Helper.php` (line 1598)

If elementor editor is open

---

### `Helper::isEntryAutoDeleteEnabled()`

The `Helper::isEntryAutoDeleteEnabled` method check form has enabled submission auto delete or not. If enabled return true otherwise false.

**Arguments**
- `form_id` - (int) Form ID.

```php
use FluentForm\App\Helpers\Helper;

$isEntryAutoDeleteEnable = Helper::isEntryAutoDeleteEnabled(240);
if ($isEntryAutoDeleteEnable) {
    // do stuff
}
```
--------------------------------------------------

<a name="method-helper-is-fluentform-admin-page"></a>

### `Helper::isFluentAdminPage()`

The `Helper::isFluentAdminPage` method check current page is fluentform admin page or not. If admin page return true otherwise false.

```php
use FluentForm\App\Helpers\Helper;

$isFluentFormAdminPage = Helper::isFluentAdminPage();
if ($isFluentFormAdminPage) {
    // do stuff
}
```
--------------------------------------------------

<a name="method-helper-get-rest-info"></a>

### `Helper::isJson()`

The `Helper::isJson` method check given value is json or not. If json return true otherwise false.

**Arguments**
- `data` - (string) Data to check.

```php
use FluentForm\App\Helpers\Helper;

$form = Helper::getForm(240);
$isJson = Helper::isJson($form->form_fields);
if ($isJson) {
    /json_decode($form->form_fields)
}
```
--------------------------------------------------

<a name="method-helper-is-entry-auto-delete-enabled"></a>

### `Helper::isMultiStepForm()`

The `Helper::isMultiStepForm` method check form has multistep or not. If it has multistep return true otherwise false.

**Arguments** 
- `form_id` - (int) Form ID

```php
use FluentForm\App\Helpers\Helper;

$isMultiStepForm = Helper::isMultiStepForm(240);
// false
```
-----------------------------------------------

<a name="method-helper-is-conversational-form"></a>

### `Helper::isOptionGroup($option)`

**Source:** `app/Helpers/Helper.php` (line 59)

Sanitize form inputs recursively.

---

### `Helper::isPaymentCompatible()`

**Source:** `app/Helpers/Helper.php` (line 1467)

---

### `Helper::isProPaymentScriptCompatible()`

**Source:** `app/Helpers/Helper.php` (line 1482)

Determine pro payment script is compatible or not
Script is compatible if pro version meets the minimum required version

---

### `Helper::isSiteEditor()`

**Source:** `app/Helpers/Helper.php` (line 1611)

Check if we're in block editor context (Site Editor, Template Editor, or Post/Page Editor)
Covers all Gutenberg block editor contexts including mobile/tablet preview iframes

---

### `Helper::isSlackEnabled()`

**Source:** `app/Helpers/Helper.php` (line 190)

Determines if the given string is a valid json.

---

### `Helper::isTabIndexEnabled()`

**Source:** `app/Helpers/Helper.php` (line 513)

---

### `Helper::isUniqueValidation($validation, $field, $formData, $fields, $form)`

**Source:** `app/Helpers/Helper.php` (line 557)

---

### `Helper::makeMenuUrl($page = 'fluent_forms_settings', $component = null)`

**Source:** `app/Helpers/Helper.php` (line 148)

---

### `Helper::maybeDecryptUrl($url)`

**Source:** `app/Helpers/Helper.php` (line 1105)

---

### `Helper::replaceBrTag($content, $with = '')`

**Source:** `app/Helpers/Helper.php` (line 924)

---

### `Helper::resetTabIndex()`

**Source:** `app/Helpers/Helper.php` (line 382)

---

### `Helper::resolveValidationRulesGlobalOption(&$field)`

**Source:** `app/Helpers/Helper.php` (line 1133)

---

### `Helper::safeUnserialize($data)`

**Source:** `app/Helpers/Helper.php` (line 1586)

Fixes PHP Object Injection Vulnerability

---

### `Helper::sanitizeAdvancedOptions($options, $depth = 0)`

**Source:** `app/Helpers/Helper.php` (line 66)

Sanitize form inputs recursively.

---

### `Helper::sanitizeArrayKeysAndValues($values)`

**Source:** `app/Helpers/Helper.php` (line 1506)

Determine pro payment script is compatible or not
Script is compatible if pro version meets the minimum required version

---

### `Helper::sanitizeForCSV($content)`

**Source:** `app/Helpers/Helper.php` (line 942)

---

### `Helper::sanitizeOrderValue($orderType = '')`

**Source:** `app/Helpers/Helper.php` (line 955)

---

### `Helper::sanitizer($input, $attribute = null, $fields = [])`

**Source:** `app/Helpers/Helper.php` (line 38)

Sanitize form inputs recursively.

---

### `Helper::setFormMeta()`

The `Helper::setFormMeta` method set a meta value for specific form. If success return meta ID otherwise return null.

**Arguments** 
- `form_id` - (int) Form ID
- `meta_key` - (string) Meta key
- `meta_value` - (mixed) Meta value. If needed to be stored with json encrypted

```php
use FluentForm\App\Helpers\Helper;

$metaID = Helper::setFormMeta(240, '_my_meta_key', ['string', "mixed" => [45, '34', true, 'string']]);
//meta id - 2656
```
-------------------------------------

<a name="method-helper-get-form-meta"></a>

### `Helper::setSubmissionMeta()`

The `Helper::setSubmissionMeta` method set a meta value for specific submission. If success return meta ID otherwise return null.

**Arguments**
- `submission_id` - (int) Submission ID
- `meta_key` - (string) Meta key
- `meta_value` - (mixed) Meta value. If needed to be stored with serialized encrypted
- `form_id` - (int) Form ID. Optional, it omitted form ID detect automatically.

```php
use FluentForm\App\Helpers\Helper;

$metaID = Helper::setSubmissionMeta(2, '_my_meta_key', ['string', "mixed" => [45, '34', true, 'string']], 240);
//meta id - 2657
```
--------------------------------------------------

<a name="method-helper-get-submission-meta"></a>

### `Helper::setSubmissionMetaAsArrayPush($submissionId, $metaKey, $value, $formId = false)`

**Source:** `app/Helpers/Helper.php` (line 326)

---

### `Helper::shortCodeParseOnValidationMessage($message, $form, $fieldName)`

**Source:** `app/Helpers/Helper.php` (line 1384)

Shortcode parse on validation message

---

### `Helper::shouldHidePassword($formId)`

**Source:** `app/Helpers/Helper.php` (line 969)

---

### `Helper::unreadCount()`

The `Helper::unreadCount` method returns total count of unread submission.

**Arguments**
- `form_id` - (int) Form ID

```php
use FluentForm\App\Helpers\Helper;

$unreadSubmissionCount = Helper::unreadCount(240);
// 5
```
--------------------------------------------------

<a name="method-helper-get-entry-statuses"></a>

### `Helper::validateInput($field, $formData, $form, $fieldName = '', $inputValue = [])`

**Source:** `app/Helpers/Helper.php` (line 1163)

Validate form input value against database values

---
