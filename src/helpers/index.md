## Helper Classes

Fluent Forms provides few helper classes that you can interact easily to build advanced functionalities on your plugin.
Many of these functions are used by the plugin itself; however, you are free to use them in your own addon if you find them convenient.


# Fluent Forms Core Helper Class

- Class with Namespace: `\FluentForm\App\Helpers\Helper`
- Method Types: `static`

[[toc]]

<a name="method-helper-get-forms"></a>
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


