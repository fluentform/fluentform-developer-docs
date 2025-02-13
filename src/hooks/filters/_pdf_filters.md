<explain-block title="fluentform/pdf_watermark_image_position">

This filter allows you to modify the position of the watermark image in PDF exports.

**Parameters**

- `$position` (string) Default position of the watermark
- `$feedId` (int) The ID of the current PDF feed

**Usage**

```php
add_filter('fluentform/pdf_watermark_image_position', function ($position, $feedId) {
    // Modify the position here
    // Common values: 'P' (centered), 'F' (centered on printable area), 'C' (center)
    return 'C';
}, 10, 2);
```

**Reference**

This filter is typically applied when setting up the watermark image for PDF generation in Fluent Forms.

`apply_filters('fluentform/pdf_watermark_image_position', 'F', $feedId);`

This filter is located in fluentforms-pdf/Classes/Templates/TemplateManager.php -> pdfBuilder()

</explain-block>

<explain-block title="fluentform/pdf_watermark_image_size">

This filter allows you to customize the size of the watermark image in PDF exports.

**Parameters**

- `$size` (mixed) Default size of the watermark (can be string, array, or number)
- `$feedId` (int) The ID of the current PDF feed

**Usage**

```php
add_filter('fluentform/pdf_watermark_image_size', function ($size, $feedId) {
    // Modify the size here
    // You can return:
    // - A string: 'P' (proportional), 'F' (fill), 'D' (default)
    // - An array: [width, height] in points
    // - A number: margin adjustment in points
    
    // Example: Increase size by reducing margins
    return -10; // Reduces margins by 10 points, effectively making the watermark image larger
    
    // Or use specific dimensions:
    // $a4_width = 595.276;  // A4 width in points
    // $a4_height = 841.890; // A4 height in points
    // return [$a4_width, $a4_height];
}, 10, 2);
```

**Reference**

This filter is applied when setting the watermark image size for PDF generation in Fluent Forms.

`apply_filters('fluentform/pdf_watermark_image_size', 'D', $feedId);`

This filter is located in fluentforms-pdf/Classes/Templates/TemplateManager.php -> pdfBuilder()

</explain-block>
