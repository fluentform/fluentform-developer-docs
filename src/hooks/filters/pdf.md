# PDF Filters

<Badge type="tip" vertical="top" text="Filter Hooks" /> <Badge type="tip" vertical="top" text="Add-on" /> <Badge type="warning" vertical="top" text="6 Filters" />

Filters exposed by the **Fluent Forms PDF** add-on (`fluentforms-pdf`). Use these to customize mPDF configuration, the PDF body / CSS, template list, and watermark behavior. Source repo: `fluentforms-pdf`.

<explain-block title="fluentform/mpdf_config">

<Badge type="tip" vertical="top" text="Add-on" />

**Parameters**

- See source for parameters and types

**Usage**

```php
add_filter('fluentform/mpdf_config', function ($value) {
    // modify and return
    return $value;
}}, 10, 1);
```

**Reference**

`$mpdfConfig = apply_filters('fluentform/mpdf_config', $mpdfConfig);`

This filter is located in `fluentforms-pdf/Modules/FluentForms/Templates/TemplateManager.php` (line 101).

</explain-block>

<explain-block title="fluentform/pdf_body_parse">

<Badge type="tip" vertical="top" text="Add-on" />

**Parameters**

- See source for parameters and types

**Usage**

```php
add_filter('fluentform/pdf_body_parse', function ($value) {
    // modify and return
    return $value;
}}, 10, 1);
```

**Reference**

`$htmlBody = apply_filters('fluentform/pdf_body_parse', $htmlBody, $submissionId, $formData, $form);`

This filter is located in `fluentforms-pdf/Modules/FluentForms/Templates/GeneralTemplate.php` (line 94).

</explain-block>

<explain-block title="fluentform/pdf_generator_css">

<Badge type="tip" vertical="top" text="Add-on" />

**Parameters**

- See source for parameters and types

**Usage**

```php
add_filter('fluentform/pdf_generator_css', function ($value) {
    // modify and return
    return $value;
}}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/pdf_generator_css', $pdfGeneratorCss, $appearance);`

This filter is located in `fluentforms-pdf/Modules/FluentForms/Templates/TemplateManager.php` (line 293).

</explain-block>

<explain-block title="fluentform/pdf_templates">

<Badge type="tip" vertical="top" text="Add-on" />

**Parameters**

- See source for parameters and types

**Usage**

```php
add_filter('fluentform/pdf_templates', function ($value) {
    // modify and return
    return $value;
}}, 10, 1);
```

**Reference**

`return apply_filters('fluentform/pdf_templates', $templates, $form);`

This filter is located in `fluentforms-pdf/Modules/FluentForms/FluentFormsIntegration.php` (line 593).

</explain-block>

<explain-block title="fluentform/pdf_watermark_image_position">

<Badge type="tip" vertical="top" text="Add-on" />

**Parameters**

- See source for parameters and types

**Usage**

```php
add_filter('fluentform/pdf_watermark_image_position', function ($value) {
    // modify and return
    return $value;
}}, 10, 1);
```

**Reference**

`$watermarkImagePosition = apply_filters('fluentform/pdf_watermark_image_position', 'F', $feedId);`

This filter is located in `fluentforms-pdf/Modules/FluentForms/Templates/TemplateManager.php` (line 183).

</explain-block>

<explain-block title="fluentform/pdf_watermark_image_size">

<Badge type="tip" vertical="top" text="Add-on" />

**Parameters**

- See source for parameters and types

**Usage**

```php
add_filter('fluentform/pdf_watermark_image_size', function ($value) {
    // modify and return
    return $value;
}}, 10, 1);
```

**Reference**

`$watermarkImageSize = apply_filters('fluentform/pdf_watermark_image_size', 'D', $feedId);`

This filter is located in `fluentforms-pdf/Modules/FluentForms/Templates/TemplateManager.php` (line 182).

</explain-block>
