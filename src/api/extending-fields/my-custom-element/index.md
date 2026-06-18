# Custom Element With Custom Vue
<Badge type="tip" vertical="top" text="FIELD API" /> <Badge type="tip" vertical="top" text="EXTEND FIELDS" /> <Badge type="tip" vertical="top" text="CUSTOM EDITOR COMPONENT" />
The Fluent Forms `BaseFieldManager` extension allows developers to create custom form fields with custom editor components.

This guide demonstrates how to create a custom field called `MyCustomElement` by extending the [`BaseFieldManager`](/api/classes/base-field-manager/) class, along with implementing custom Vue components for the editor interface.

## Implementation Overview

To create a custom field, you'll need to:

1. Create a PHP class that extends [`BaseFieldManager`](/api/classes/base-field-manager/)
2. Register custom Vue components for the editor interface
3. Implement the required methods for field rendering and configuration

## PHP Class Implementation

First, create a PHP class that extends [`BaseFieldManager`](/api/classes/base-field-manager/):

```php
<?php

namespace MyPlugin\CustomFields;

use FluentForm\App\Services\FormBuilder\BaseFieldManager;
use FluentForm\Framework\Helpers\ArrayHelper as Arr;

class MyCustomElement extends BaseFieldManager
{
    /**
     * Wrapper class for the element
     * @var string
     */
    protected $wrapperClass = 'my_custom_element_wrapper';

    public function __construct()
    {
        parent::__construct(
            'my_custom_element', // Unique element key
            'My Custom Element', // Element title
            ['custom', 'element', 'advanced'], // Search tags
            'advanced' // Position (general/advanced)
        );

        // Add filter for response rendering
        add_filter('fluentform/response_render_' . $this->key, array($this, 'renderResponse'), 10, 4);
        add_filter('fluentform/validate_input_item_' . $this->key, array($this, 'validateInput'), 10, 5);
        
        // Enqueue custom editor assets
        add_action('fluentform/loading_editor_assets', function () {
            wp_enqueue_script(
                'my-custom-element-editor',
                MY_PLUGIN_URL . 'assets/js/custom-element.js',
                [],
                '1.0.0',
                true
            );
        });
    }

    function getComponent()
    {
        return [
            'index'          => 25, // Priority in the form editor
            'element'        => 'my_custom_element',
            'attributes'     => [
                'name'      => 'my_custom_element',
                'data-type' => 'my_custom_element'
            ],
            'settings'       => [
                'label'              => __('My Custom Element', 'my-plugin'),
                'admin_field_label'  => '',
                'custom_option'      => '',
                'conditional_logics' => [],
                'container_class'    => '',
                'custom_settings'    => [
                    'option_one' => '',
                    'option_two' => '',
                    'show_extra' => 'hide'
                ],
                'validation_rules'   => [
                    'required' => [
                        'value'   => false,
                        'message' => __('This field is required', 'my-plugin'),
                    ],
                ],
            ],
            'editor_options' => [
                'title'         => __('My Custom Element', 'my-plugin'),
                'icon_class'    => 'el-icon-s-operation',
                'template'      => 'CustomEditorField', // IMPORTANT: Must be 'CustomEditorField' to use custom Vue components
                'componentName' => 'MyCustomElementEditor', // IMPORTANT: Must match the Vue component name in JavaScript
            ],
        ];
    }

    public function getGeneralEditorElements()
    {
        return [
            'label',
            'label_placement',
            'admin_field_label',
            'custom_option',
            'custom_settings', // This will use the custom settings component
            'validation_rules',
        ];
    }

    public function getAdvancedEditorElements()
    {
        return [
            'container_class',
            'name',
            'conditional_logics'
        ];
    }

    public function getEditorCustomizationSettings()
    {
        return [
            'custom_option' => [
                'template' => 'selectGroup',
                'label'    => __('Custom Option', 'my-plugin'),
                'options'  => [
                    [
                        'value' => 'option1',
                        'label' => __('Option 1', 'my-plugin')
                    ],
                    [
                        'value' => 'option2',
                        'label' => __('Option 2', 'my-plugin')
                    ],
                    [
                        'value' => 'option3',
                        'label' => __('Option 3', 'my-plugin')
                    ]
                ]
            ],
            'custom_settings' => [
                'template'      => 'CustomSettingsField', // IMPORTANT: Must be 'CustomSettingsField' to use custom Vue components
                'label'         => __('Custom Settings', 'my-plugin'),
                'componentName' => 'MyCustomSettingsComponent' // IMPORTANT: Must match the Vue component name in JavaScript
            ],
        ];
    }

    /**
     * Render the element on the frontend
     * @param array $data Element data
     * @param object $form Form object
     * @return void
     */
    public function render($data, $form)
    {
        $elementName = $data['element'];

        // Add default class
        $data['attributes']['class'] = trim('ff-el-form-control ' . Arr::get($data, 'attributes.class', ''));
        $data['attributes']['id'] = $this->makeElementId($data, $form);
        
        // Add tab index if available
        if ($tabIndex = \FluentForm\App\Helpers\Helper::getNextTabIndex()) {
            $data['attributes']['tabindex'] = $tabIndex;
        }

        // Set aria-required attribute
        $ariaRequired = Arr::get($data, 'settings.validation_rules.required.value') ? 'true' : 'false';
        
        // Get custom settings
        $customOption = Arr::get($data, 'settings.custom_option');
        $showExtra = Arr::get($data, 'settings.custom_settings.show_extra', 'hide') === 'show';
        
        // Enqueue frontend assets if needed
        wp_enqueue_script(
            'my-custom-element-frontend',
            MY_PLUGIN_URL . 'assets/js/custom-element-frontend.js',
            ['jquery'],
            '1.0.0',
            true
        );
        
        // Create element markup
        $elMarkup = '<div class="my_custom_element_container">';
        $elMarkup .= '<input ' . $this->buildAttributes($data['attributes'], $form) . ' aria-required="' . $ariaRequired . '">';
        
        if ($showExtra) {
            $elMarkup .= '<div class="extra_content">Extra content is visible</div>';
        }
        
        $elMarkup .= '</div>';
        
        // Build final HTML
        $html = $this->buildElementMarkup($elMarkup, $data, $form);
        
        // Output the HTML
        echo apply_filters('fluentform/rendering_field_html_' . $elementName, $html, $data, $form);
    }

    /**
     * Format the field value for display in entries, emails, etc.
     * @param mixed $data Field value
     * @param array $field Field settings
     * @param int $form_id Form ID
     * @param bool $isHtml Whether HTML output is expected
     * @return string
     */
    public function renderResponse($data, $field, $form_id, $isHtml)
    {
        if (is_array($data)) {
            return implode(', ', $data);
        }
        
        return $data;
    }

    /**
     * Validate the field input
     * @param array $errorMessage Error message array
     * @param array $field Field settings
     * @param array $formData Form data
     * @param array $fields All form fields
     * @param object $form Form object
     * @return array
     */
    public function validateInput($errorMessage, $field, $formData, $fields, $form)
    {
        $fieldName = $field['name'];
        if (empty($formData[$fieldName])) {
            return $errorMessage;
        }
        $value = $formData[$fieldName]; // This is the user input value
        
        // Add your custom validation logic here
        
        return $errorMessage;
    }
}
```

## Important Notes About Component Names

### In PHP:

1. In the `getComponent()` method, set `'template' => 'CustomEditorField'` to tell Fluent Forms to use a custom Vue component.
2. The `componentName` property in `editor_options` must match exactly the name you register in JavaScript.
3. Similarly, in `getEditorCustomizationSettings()`, use `'template' => 'CustomSettingsField'` and set `componentName` to match your settings component name.

These connections are critical - if the names don't match exactly, Fluent Forms won't be able to find and render your custom components.

## JavaScript Implementation

Next, create a JavaScript file to register your custom Vue components:

```javascript
// custom-element.js

import MyCustomElementEditor from './components/MyCustomElementEditor.vue';
import MyCustomSettingsComponent from './components/MyCustomSettingsComponent.vue';

// Register the components with EXACTLY the same names used in PHP
window.ffEditorOptionsCustomComponents = window.ffEditorOptionsCustomComponents || {};

// IMPORTANT: These keys must match the componentName values in PHP
window.ffEditorOptionsCustomComponents.MyCustomElementEditor = MyCustomElementEditor;
window.ffEditorOptionsCustomComponents.MyCustomSettingsComponent = MyCustomSettingsComponent;
```

## Vue Component for Editor

Create a Vue component for the main editor interface:
- props
  - `item`  The field data

```vue
<!-- MyCustomElementEditor.vue -->
<template>
  <div class="my-custom-element-editor">
    <h3>My Custom Element Editor</h3>
    <!-- Add your custom editor UI here -->
  </div>
</template>

<script>
export default {
  // IMPORTANT: This name must match the componentName in PHP
  name: 'MyCustomElementEditor',
  props: ['item'],
  mounted() {
    // The field data is available in this.item
    // Do your initialization work here
  }
}
</script>
```

## Vue Component for Custom Settings

Create a Vue component for the custom settings:

- props
  - `listItem`  Field settings options data - `object`
  - `editItem`  Field data - `object`
  - `form_items` All fields data - `array`

```vue
<!-- MyCustomSettingsComponent.vue -->
<template>
  <div class="my-custom-settings">
    <!-- Add your custom settings UI here -->
    
    <!-- Example settings -->
    <el-form-item label="Option One">
      <el-input v-model="editItem.settings.custom_settings.option_one" 
                placeholder="Enter Option One"></el-input>
    </el-form-item>
    
    <el-form-item label="Option Two">
      <el-input v-model="editItem.settings.custom_settings.option_two" 
                placeholder="Enter Option Two"></el-input>
    </el-form-item>
    
    <el-form-item>
      <el-checkbox v-model="editItem.settings.custom_settings.show_extra" 
                   :true-label="'show'" 
                   :false-label="'hide'">
        Show Extra Content
      </el-checkbox>
    </el-form-item>
  </div>
</template>

<script>
export default {
  // IMPORTANT: This name must match the componentName in PHP
  name: 'MyCustomSettingsComponent',
  props: ['listItem', 'editItem', 'form_items'],
  mounted() {
    // Initialize settings if they don't exist
    if (!this.editItem.settings.custom_settings) {
      this.$set(this.editItem.settings, 'custom_settings', {
        option_one: '',
        option_two: '',
        show_extra: 'hide'
      });
    }
  }
}
</script>

<style>
.my-custom-settings {
  padding: 10px;
}
</style>
```

## Registering the Custom Field

Finally, initialize your custom field in your plugin:

```php
<?php
// In your plugin's main file or a separate file

add_action('fluentform/loaded', function () {
    require_once 'path/to/MyCustomElement.php';
    new \MyPlugin\CustomFields\MyCustomElement();
});
```

## Debugging Custom Components

If your custom components aren't appearing in the editor, check the following:

1. Open your browser's developer console to look for errors
2. Verify that your JavaScript file is being loaded (check the Network tab)
3. Confirm that the component names match exactly between PHP and JavaScript
4. Add console.log statements in your JavaScript to verify component registration
5. Check that the Vue components are properly exported and imported

A common debugging technique is to add this to your JavaScript:

```javascript
console.log('Available components:', Object.keys(window.ffEditorOptionsCustomComponents));
```

## Complete Example

The complete implementation includes:

1. A PHP class that extends `BaseFieldManager`
2. JavaScript file to register Vue components
3. Vue components for the editor interface and settings
4. Initialization code to register the custom field

This approach allows you to create fully customized form fields with their own settings and rendering logic, while integrating seamlessly with the Fluent Forms editor.

## Key Points to Remember

- The `getComponent()` method defines the structure of your custom field
- `getGeneralEditorElements()` and `getAdvancedEditorElements()` control which settings appear in the editor
- `getEditorCustomizationSettings()` defines custom settings components
- The `render()` method outputs the HTML for your field on the frontend
- Custom Vue components must be registered in the `ffEditorOptionsCustomComponents` global object
- The `componentName` property in your field definition must match the name of your Vue component
- Use `$set` in Vue components to ensure reactivity when adding new properties
- Always initialize your settings objects to prevent "undefined" errors

## Frontend Rendering Considerations

When rendering your custom field on the frontend, consider:

1. Accessibility: Use ARIA attributes and proper semantic HTML
2. Mobile responsiveness: Test on different screen sizes
3. Validation: Implement both client-side and server-side validation
4. Error handling: Display meaningful error messages
5. Styling: Use CSS that works with the form's theme

## All Together

Your ideal implementation will look like this if you want to use both custom validation and custom response render:

```php
class MyCustomElement extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'my_custom_element',
            'My Custom Element',
            ['custom', 'element', 'advanced'],
            'general'
        );

        add_filter('fluentform/response_render_' . $this->key, array($this, 'renderResponse'), 10, 4);
        add_filter('fluentform/validate_input_item_' . $this->key, array($this, 'validateInput'), 10, 5);
        
        // Enqueue assets
        add_action('fluentform/loading_editor_assets', array($this, 'enqueueEditorAssets'));
    }

    // Implement required methods...
    
    public function enqueueEditorAssets()
    {
        wp_enqueue_script(
            'my-custom-element-editor',
            MY_PLUGIN_URL . 'assets/js/custom-element.js',
            [],
            '1.0.0',
            true
        );
    }
}

/*
 * Initialize the class
 */
add_action('fluentform/loaded', function () {
    new MyCustomElement();
});
```

By following this comprehensive guide, you can create powerful custom form fields that integrate perfectly with the Fluent Forms editor interface.