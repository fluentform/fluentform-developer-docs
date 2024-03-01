# Base Field Manager
<Badge type="tip" vertical="top" text="FIELD API" /> <Badge type="tip" vertical="top" text="EXTEND FIELDS" />
The Fluent Forms `BaseFieldManager` Functions provides developers with a future-proof way to add new form fields easily.

The API Functions are automatically included when Fluent Forms Booted, and they will be available anytime within init hook. The `BaseFieldManager` class is located at in [`fluentform/app/Services/FormBuilder/BaseFieldManager.php`](https://github.com/fluentform/fluentform/blob/master/app/Services/FormBuilder/BaseFieldManager.php).

Please check out the GitHub file to get more information.

**Notice: Please do not initiate this class directly. You should extend this class to add anew form field.**

#### [Example Implementation](/api/classes/base-field-manager/#all-together)

## Methods
- [`getComponent()`](/api/classes/base-field-manager/#getcomponent)
- [`render()`](/api/classes/base-field-manager/#render-data-form)
- [`getGeneralEditorElements()`](/api/classes/base-field-manager/#getgeneraleditorelements)
- [`getAdvancedEditorElements()`](/api/classes/base-field-manager/#getadvancededitorelements)

### getComponent()
```php
    /*
     * Implement your method to describe the full element
     * return $component array
     */
    abstract function getComponent()
```

This is an abstract class that you have to implement in your own class. From this method you have to return the full attributes of the element which will be available for settings in the form editor as well as in your [`render()`](/api/classes/base-field-manager/#render-data-form) function.

Here is an example of a custom element (Advanced Phone Field) structure which is available in our pro version of Fluent Forms

```php
function getComponent()
    {
        return [
            'index'          => 15, // The priority of your element
            'element'        => $this->key, // this is the unique identifier.
            'attributes'     => [
                'name'        => $this->key, // initial name of the input field
                'class'       => '', // Custom element class holder
                'value'       => '', // Default Value holder
                'type'        => 'tel', // type of your element eg: text/number/email/tel
                'placeholder' => __('Mobile Number', 'fluentformpro') // Default Placeholder
            ],
            'settings'       => [
                'container_class'     => '',
                'placeholder'         => '',
                'label'               => $this->title,
                'label_placement'     => '',
                'help_message'        => '',
                'admin_field_label'   => '',
                'validation_rules'    => [
                    'required'           => [
                        'value'   => false,
                        'message' => __('This field is required', 'fluentformpro'),
                    ],
                    'valid_phone_number' => [
                        'value'   => false,
                        'message' => __('Phone number is not valid', 'fluentformpro')
                    ]
                ],
                'conditional_logics'  => []
            ],
            'editor_options' => [
                'title'      => $this->title . ' Field',
                'icon_class' => 'el-icon-phone-outline', // icon of the form in editor
                'template'   => 'inputText' // The template that will show in editor preview
            ],
        ];
    }
```

The code is already self-explanatory. But you have to keep the structure as same as the example. The array need to have the following keys:


- index
- element
- attributes (will be used for rendering in editor and frontend)
  - name
  - class
  - value
  - type
  - placeholder
- settings
  - label
  - container_class
  - label_placement
  - help_message
  - admin_field_label
  - validation_rules
  - conditional_logics
- editor_options (For Editor)
  - title
  - icon_class
  - template ([View Available Templates](https://github.com/fluentform/fluentform/tree/master/resources/assets/admin/components/templates))


Please check our other element implementations in `fluentformpro/src/Components` folder to get an idea about the available attributes.

To check all the existing get component data structure please [check this file](https://github.com/fluentform/fluentform/blob/5f400dbcdc/app/Services/FormBuilder/DefaultElements.php). That file contains all free and some pro version data attributes implementation.

### render($data, $form)
```php
    /*
     * Implement render html for your form element. You have to print your element html
     * @param: $element array - Contain the total element with attributes, settings etc
     * @param: $form object - Form Object of the current form rendering in that time.
     * @return void
     */
    abstract function render($element, $form);
```
You have to implement this method and print the final html for your custom element. Please check other implementations in pro versions `fluentformpro/src/Components` folder. The DOM need to be symmetric, and you must have to use the parent class function to generate the DOM's to make the conditional logic/error messages work.

Please check the all element `render(compile())` method in these files.

[https://github.com/fluentform/fluentform/tree/master/app/Services/FormBuilder/Components](https://github.com/fluentform/fluentform/tree/master/app/Services/FormBuilder/Components)

### getGeneralEditorElements()
This is an important method that you have to implement when implementing your own element class. This method will return what settings will show in the general settings of your form element.

**For example:**

```php
    public function getGeneralEditorElements()
    {
        return [
            'label',
            'admin_field_label',
            'placeholder',
            'value',
            'label_placement',
            'validation_rules',
        ];
    }
```
Please note that, These keys need to be matched with either your component’s settings or attributes keys.

### getAdvancedEditorElements()
This is an important method to that you have to implement when implementing your own element class. This method will return what settings will show in the advanced settings of your form element. By default, it returns the following

**For example:**

```php
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

You should implement this method if you want to add or remove any settings.

Please note that, These keys need to be matched with either your component’s settings or attributes keys.

### Element Settings UI components for EditorElements
There has 69 UI components for making any type of settings ui for your element. You can even implement your own by implementing `generalEditorElement` and `advancedEditorElement` method. Please check the source code or phone field element in pro version.

**Where to find the built-in UI components:** Please check in the [GitHub source file here](https://github.com/fluentform/fluentform/blob/5f400dbcdc/app/Services/FormBuilder/ElementCustomization.php)

## Implementing this class
Create a php class and then extend this class. Here is the example where we can use they must use methods

```php
class MyAwesomeFFElement extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'key',
            'Element title',
            ['tag1', 'tag2', 'tag3'],
            'general' // where to push general/advanced
        );
    }

    function getComponent()
    {
        return []; // return your element structure
    }

    public function getGeneralEditorElements()
    {
        return []; // return your general settings keys
    }

    public function getAdvancedEditorElements()
    {
        return []; // return your advanced settings keys
    }

    public function render($data, $form)
    {
        // print your valid html for this element
    }
}

/*
 * Finally initialize the class
 */
add_action('fluentform/loaded', function () {
    new MyAwesomeFFElement();
});
```
## Further read
### Validate data of inputed from frontend
If you want to validate user input data for your form submission you have implement a filter hook
```php
add_filter('fluentform/validate_input_item_{YOUR_ELEMENT_KEY}', function ($errorMessage, $field, $formData, $fields, $form) {
    $fieldName = $field['name'];
    if (empty($formData[$fieldName])) {
        return $errorMessage;
    }
    $value = $formData[$fieldName]; // This is the user input value

    /*
     * You can validate this value and return $errorMessage
     */

    return [$errorMessage];

}, 10, 5);
```

Learn more about this validation [here](/hooks/filters/#_fluentform_response_render______field__element__)

### Transforming Input Data in Entries/Emails
Maybe you collected the data as array or key of any dynamic data, and you need to transform that data to anywhere that is viewable at admin panel entries/email/3rd party integrations.
```php
/**
* @param $response string|array|number|null - Original input from form submission
* @param $field array - the form field component array
* @param $form_id - form id
* @param $isHtml - For HTML render 
* @return string
*/
add_filter('fluentform/response_render_{element_key}', function($response, $field, $form_id, $isHtml) {
     // $response is the original input from your user 
     // you can now alter the $response and return
     return $response;
}, 10, 4);
```
## All Together
Your ideal implementation will look like this if you want to use both custom validation and custom response render.
```php
class MyAwesomeFFElement extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'myAwesome_ff_element_key',
            'Element title',
            ['tag1', 'tag2', 'tag3'],
            'general' // where to push general/advanced
        );

        add_filter('fluentform/response_render_' . $this->key, array($this, 'renderResponse'), 10, 4);
        add_filter('fluentform/validate_input_item_' . $this->key, array($this, 'validateInput'), 10, 5);
    }

    function getComponent()
    {
        return []; // return your element structure
    }

    public function getGeneralEditorElements()
    {
        return []; // return your general settings keys
    }

    public function getAdvancedEditorElements()
    {
        return []; // return your advanced settings keys
    }

    public function render($data, $form)
    {
        // print your valid html for this element
    }

    /**
     * @param $response string|array|number|null - Original input from form submission
     * @param $field array - the form field component array
     * @param $form_id - form id
     * @param $isHtml - For HTML
     * @return string
     */
    public function renderResponse($response, $field, $form_id, $isHtml)
    {
        // $response is the original input from your user
        // you can now alter the $response and return
        return $response;
    }

    public function validateInput($errorMessage, $field, $formData, $fields, $form)
    {
        $fieldName = $field['name'];
        if (empty($formData[$fieldName])) {
            return $errorMessage;
        }
        $value = $formData[$fieldName]; // This is the user input value
        /*
         * You can validate this value and return $errorMessage
         */
        return [$errorMessage];
    }
}

/*
 * Finally initialize the class
 */
add_action('fluentform/loaded', function () {
    new MyAwesomeFFElement();
});
```

## Final Note
It’s highly recommended to explore our source files and try to understand the design. Once you get if it’s very easy to implement your own custom input elements. Also, please check our a step by step your custom new field creation guide here [How to Create Your Own Custom Field in Fluentforms](https://fluentforms.com/docs/how-to-create-your-own-custom-field-with-fluent-forms/).

If you have any question please feel free to reach at our [support team](https://wpmanageninja.com/support-tickets/) or ask questions in our [facebook community group](https://www.facebook.com/groups/fluentforms/)