
<explain-block title="fluentform/addons_page_render_{$current_menu_item}">

**Description**

This action runs before rendering any addon page , for example PDF addon.

**Usage**

```php
add_action('fluentform/addons_page_render_{$current_menu_item}', function() {
   // Do your stuff here
}, 10, 0);
```

**Note:** `$current_menu_item` is dynamic addon item. Replace `$current_menu_item` with your addon menu item key.

**Reference**

`do_action('fluentform/addons_page_render_' . $current_menu_item);`

This hook is located in `fluentform/app/Views/admin/addons/index.php`.

</explain-block>

--------------------------------


<explain-block title="fluentform/addons_page_render_fluentform_pdf_settings">

**Description**

This action runs when register  PDF addon page after installed FluentForm PDF.

**Usage:**
```php 
add_action('fluentform/addons_page_render_fluentform_pdf_settings', function() {
   // Do whatever you want when rendering pdf addon page
}, 10, 0);
```

**Reference**

`do_action('fluentform/addons_page_render_fluentform_pdf_settings');`

This action is located in `fluentform/app/Views/admin/addons/pdf_promo.php`

</explain-block>