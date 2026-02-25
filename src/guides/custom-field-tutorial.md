# Creating a Custom Field

<Badge type="tip" vertical="top" text="Guide" /> <Badge type="warning" vertical="top" text="Intermediate" />

This tutorial walks through creating a custom "Star Rating" form field from scratch. You'll learn how custom fields work in Fluent Forms by building one step by step.

For the full API reference, see [BaseFieldManager Class](/api/classes/base-field-manager/).

[[toc]]

## Overview

Custom fields in Fluent Forms require a class that extends `BaseFieldManager`. Your class must implement four methods:

| Method | Purpose |
|--------|---------|
| `getComponent()` | Define the field's data structure, settings, and editor appearance |
| `render()` | Output the field's HTML on the frontend |
| `getGeneralEditorElements()` | Define which settings appear in the General tab |
| `getAdvancedEditorElements()` | Define which settings appear in the Advanced tab |

## Step 1: Create the Plugin

Create `wp-content/plugins/ff-star-rating/ff-star-rating.php`:

```php
<?php
/**
 * Plugin Name: FF Star Rating Field
 * Description: Adds a star rating field to Fluent Forms.
 * Version: 1.0.0
 * Requires Plugins: fluentform
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('fluentform/loaded', function () {
    require_once __DIR__ . '/StarRatingField.php';
    new StarRatingField();
});
```

## Step 2: Define the Field Class

Create `wp-content/plugins/ff-star-rating/StarRatingField.php`:

```php
<?php

class StarRatingField extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'star_rating',                  // Unique field key
            'Star Rating',                  // Field title (shown in editor)
            ['rating', 'star', 'review'],   // Search tags for the editor
            'general'                       // Editor group: 'general' or 'advanced'
        );
    }
}
```

The constructor registers your field with Fluent Forms. The `key` must be unique across all fields.

## Step 3: Define the Component Structure

Implement `getComponent()` to describe your field's attributes and settings:

```php
public function getComponent()
{
    return [
        'index'          => 16,
        'element'        => $this->key,
        'attributes'     => [
            'name'  => $this->key,
            'class' => '',
            'value' => '',
            'type'  => 'radio',
        ],
        'settings'       => [
            'container_class'   => '',
            'label'             => $this->title,
            'label_placement'   => '',
            'help_message'      => '',
            'admin_field_label' => 'Star Rating',
            'max_stars'         => '5',
            'validation_rules'  => [
                'required' => [
                    'value'   => false,
                    'message' => __('This field is required', 'fluentform'),
                ],
            ],
            'conditional_logics' => [],
        ],
        'editor_options' => [
            'title'      => 'Star Rating',
            'icon_class' => 'ff-edit-rating',
            'template'   => 'inputHidden',
        ],
    ];
}
```

Key points:
- **`index`** controls the position in the editor's field list
- **`attributes`** are the HTML attributes for the input element
- **`settings`** define the configurable options (label, validation, custom settings)
- **`editor_options.template`** determines how the field previews in the form editor

## Step 4: Define Editor Settings

Specify which settings appear in the editor's General and Advanced tabs:

```php
public function getGeneralEditorElements()
{
    return [
        'label',
        'admin_field_label',
        'label_placement',
        'validation_rules',
    ];
}

public function getAdvancedEditorElements()
{
    return [
        'name',
        'help_message',
        'container_class',
        'class',
        'conditional_logics',
    ];
}
```

Each key in these arrays must match a key in your component's `settings` or `attributes`.

## Step 5: Render the Frontend HTML

Implement the `render()` method to output the field's HTML:

```php
public function render($data, $form)
{
    $elementName = $data['element'];
    $data        = apply_filters('fluentform/rendering_field_data_' . $elementName, $data, $form);

    $maxStars  = isset($data['settings']['max_stars']) ? (int) $data['settings']['max_stars'] : 5;
    $fieldName = $data['attributes']['name'];
    $fieldId   = 'ff_' . $form->id . '_' . $fieldName;

    $ariaRequired = '';
    if (!empty($data['settings']['validation_rules']['required']['value'])) {
        $ariaRequired = 'required';
    }

    $elMarkup = "<div class='ff-star-rating-wrapper' id='{$fieldId}_wrapper'>";
    for ($i = 1; $i <= $maxStars; $i++) {
        $elMarkup .= sprintf(
            '<label class="ff-star-label" data-value="%1$d">'
            . '<input type="radio" name="%2$s" value="%1$d" %3$s style="display:none;" />'
            . '<span class="ff-star" style="cursor:pointer;font-size:24px;color:#ccc;">&#9733;</span>'
            . '</label>',
            $i,
            esc_attr($fieldName),
            $ariaRequired
        );
    }
    $elMarkup .= '</div>';

    $elMarkup .= "<style>
        #{$fieldId}_wrapper .ff-star-label.active .ff-star,
        #{$fieldId}_wrapper .ff-star-label.hover .ff-star {
            color: #ffb900 !important;
        }
    </style>";

    $elMarkup .= "<script>
        (function() {
            var wrapper = document.getElementById('{$fieldId}_wrapper');
            var labels = wrapper.querySelectorAll('.ff-star-label');

            labels.forEach(function(label) {
                label.addEventListener('click', function() {
                    var val = this.getAttribute('data-value');
                    labels.forEach(function(l, idx) {
                        l.classList.toggle('active', (idx + 1) <= val);
                    });
                });

                label.addEventListener('mouseenter', function() {
                    var val = this.getAttribute('data-value');
                    labels.forEach(function(l, idx) {
                        l.classList.toggle('hover', (idx + 1) <= val);
                    });
                });

                label.addEventListener('mouseleave', function() {
                    labels.forEach(function(l) {
                        l.classList.remove('hover');
                    });
                });
            });
        })();
    </script>";

    // Use the parent helper to wrap with label, help text, and error container
    $html = $this->buildElementMarkup($elMarkup, $data, $form);

    $this->printContent('fluentform/rendering_field_html_' . $elementName, $html, $data, $form);
}
```

::: warning
Always use `$this->buildElementMarkup()` and `$this->printContent()` from the parent class. These ensure labels, help text, error messages, and conditional logic work correctly.
:::

## Step 6: Add Input Validation (Optional)

Validate the submitted value on the server:

```php
public function __construct()
{
    parent::__construct(
        'star_rating',
        'Star Rating',
        ['rating', 'star', 'review'],
        'general'
    );

    // Add custom validation
    add_filter(
        'fluentform/validate_input_item_' . $this->key,
        [$this, 'validateInput'], 10, 5
    );
}

public function validateInput($errorMessage, $field, $formData, $fields, $form)
{
    $fieldName = $field['name'];

    if (empty($formData[$fieldName])) {
        return $errorMessage;
    }

    $value    = (int) $formData[$fieldName];
    $maxStars = 5;

    if ($value < 1 || $value > $maxStars) {
        return ['Please select a valid rating between 1 and ' . $maxStars];
    }

    return $errorMessage;
}
```

## Step 7: Customize Display in Entries (Optional)

Transform how the value appears in admin entries and email notifications:

```php
public function __construct()
{
    parent::__construct(
        'star_rating',
        'Star Rating',
        ['rating', 'star', 'review'],
        'general'
    );

    add_filter('fluentform/validate_input_item_' . $this->key, [$this, 'validateInput'], 10, 5);
    add_filter('fluentform/response_render_' . $this->key, [$this, 'renderResponse'], 10, 4);
}

public function renderResponse($response, $field, $form_id, $isHtml)
{
    if (!$response) {
        return $response;
    }

    if ($isHtml) {
        $stars = (int) $response;
        return str_repeat('&#9733;', $stars) . str_repeat('&#9734;', 5 - $stars);
    }

    return $response . '/5';
}
```

## Complete Code

See the full implementation with all methods combined:

```php
<?php

class StarRatingField extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'star_rating',
            'Star Rating',
            ['rating', 'star', 'review'],
            'general'
        );

        add_filter('fluentform/validate_input_item_' . $this->key, [$this, 'validateInput'], 10, 5);
        add_filter('fluentform/response_render_' . $this->key, [$this, 'renderResponse'], 10, 4);
    }

    public function getComponent()
    {
        return [
            'index'          => 16,
            'element'        => $this->key,
            'attributes'     => [
                'name'  => $this->key,
                'class' => '',
                'value' => '',
                'type'  => 'radio',
            ],
            'settings'       => [
                'container_class'    => '',
                'label'              => $this->title,
                'label_placement'    => '',
                'help_message'       => '',
                'admin_field_label'  => 'Star Rating',
                'max_stars'          => '5',
                'validation_rules'   => [
                    'required' => [
                        'value'   => false,
                        'message' => __('This field is required', 'fluentform'),
                    ],
                ],
                'conditional_logics' => [],
            ],
            'editor_options' => [
                'title'      => 'Star Rating',
                'icon_class' => 'ff-edit-rating',
                'template'   => 'inputHidden',
            ],
        ];
    }

    public function getGeneralEditorElements()
    {
        return [
            'label',
            'admin_field_label',
            'label_placement',
            'validation_rules',
        ];
    }

    public function getAdvancedEditorElements()
    {
        return [
            'name',
            'help_message',
            'container_class',
            'class',
            'conditional_logics',
        ];
    }

    public function render($data, $form)
    {
        $elementName = $data['element'];
        $data        = apply_filters('fluentform/rendering_field_data_' . $elementName, $data, $form);

        $maxStars  = isset($data['settings']['max_stars']) ? (int) $data['settings']['max_stars'] : 5;
        $fieldName = $data['attributes']['name'];
        $fieldId   = 'ff_' . $form->id . '_' . $fieldName;

        $ariaRequired = '';
        if (!empty($data['settings']['validation_rules']['required']['value'])) {
            $ariaRequired = 'required';
        }

        $elMarkup = "<div class='ff-star-rating-wrapper' id='{$fieldId}_wrapper'>";
        for ($i = 1; $i <= $maxStars; $i++) {
            $elMarkup .= sprintf(
                '<label class="ff-star-label" data-value="%1$d">'
                . '<input type="radio" name="%2$s" value="%1$d" %3$s style="display:none;" />'
                . '<span class="ff-star" style="cursor:pointer;font-size:24px;color:#ccc;">&#9733;</span>'
                . '</label>',
                $i,
                esc_attr($fieldName),
                $ariaRequired
            );
        }
        $elMarkup .= '</div>';

        $elMarkup .= "<style>
            #{$fieldId}_wrapper .ff-star-label.active .ff-star,
            #{$fieldId}_wrapper .ff-star-label.hover .ff-star {
                color: #ffb900 !important;
            }
        </style>";

        $elMarkup .= "<script>
            (function() {
                var wrapper = document.getElementById('{$fieldId}_wrapper');
                var labels = wrapper.querySelectorAll('.ff-star-label');
                labels.forEach(function(label) {
                    label.addEventListener('click', function() {
                        var val = this.getAttribute('data-value');
                        labels.forEach(function(l, idx) {
                            l.classList.toggle('active', (idx + 1) <= val);
                        });
                    });
                    label.addEventListener('mouseenter', function() {
                        var val = this.getAttribute('data-value');
                        labels.forEach(function(l, idx) {
                            l.classList.toggle('hover', (idx + 1) <= val);
                        });
                    });
                    label.addEventListener('mouseleave', function() {
                        labels.forEach(function(l) { l.classList.remove('hover'); });
                    });
                });
            })();
        </script>";

        $html = $this->buildElementMarkup($elMarkup, $data, $form);
        $this->printContent('fluentform/rendering_field_html_' . $elementName, $html, $data, $form);
    }

    public function validateInput($errorMessage, $field, $formData, $fields, $form)
    {
        $fieldName = $field['name'];
        if (empty($formData[$fieldName])) {
            return $errorMessage;
        }

        $value = (int) $formData[$fieldName];
        if ($value < 1 || $value > 5) {
            return ['Please select a valid rating between 1 and 5'];
        }

        return $errorMessage;
    }

    public function renderResponse($response, $field, $form_id, $isHtml)
    {
        if (!$response) {
            return $response;
        }

        if ($isHtml) {
            $stars = (int) $response;
            return str_repeat('&#9733;', $stars) . str_repeat('&#9734;', 5 - $stars);
        }

        return $response . '/5';
    }
}
```

## Related Resources

- [BaseFieldManager API Reference](/api/classes/base-field-manager/) — Full method documentation
- [Editor Element UI Components](https://github.com/fluentform/fluentform/blob/master/app/Services/FormBuilder/ElementCustomization.php) — 69 built-in settings components
- [Default Elements Source](https://github.com/fluentform/fluentform/blob/master/app/Services/FormBuilder/DefaultElements.php) — See how core fields are structured
- [Existing Components](https://github.com/fluentform/fluentform/tree/master/app/Services/FormBuilder/Components) — Reference render implementations
