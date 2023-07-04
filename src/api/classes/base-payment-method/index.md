# Base Payment Method
<Badge type="tip" vertical="top" text="PAYMENT API" /> <Badge type="tip" vertical="top" text="EXTEND PAYMENT METHOD" />
The Fluent Forms `BasePaymentMethod` Class provides developers with a simple way to add new Payment methods easily. The [BaseProcessor](/api/classes/base-processor) Class is also required for the payment method background processing. The `BasePaymentMethod` class mainly works for displaying and storing the payment method settings, while the [BaseProcessor](/api/classes/base-processor) class process and finalize the payments.

The API Functions are automatically included when Fluent Forms Pro Booted. The BaseFieldManager class is located in `src/Payments/PaymentMethods/BasePaymentMethod.php`.

**Notice: Please do not initiate this class directly. You should extend this class to add start adding a new payment method**

#### [Example Implementation](/api/classes/base-payment-method/#all-together)

## Methods
- [`__construct()`](/api/classes/base-payment-method/#construct)
- [`init()`](/api/classes/base-payment-method/#init)
- [`pushPaymentMethodToForm()`](/api/classes/base-payment-method/#pushpaymentmethodtoform-methods)
- [`modifyTransaction()`](/api/classes/base-payment-method/#modifytransaction-transaction)
- [`getGlobalFields()`](/api/classes/base-payment-method/#getglobalfields)
- [`getGlobalSettings()`](/api/classes/base-payment-method/#getglobalsettings)

### __construct()
This is an example of how you can extend the BasePaymentMethod. This key will be used to identify the payment later on for the payment actions.
```php
<?php

use FluentFormPro\Payments\PaymentMethods\BasePaymentMethod;

class MyCustomPaymentMethod extends BasePaymentMethod
{    
     /*
     * Extend your payment method with a payment key identifier
     */
     public function __construct()
     {
         parent::__construct('myCustomPaymentKey');
     }
```

### init()
This is the main function that will run all the required actions for this payment settings and processing. These hooks will be called dynamically during the payment processing & settings after the payment method setup is completed.
```php
 public function init()
    {
        add_filter('fluentform/payment_method_settings_validation_'.$this->key, array($this, 'validateSettings'), 10, 2);

        if(!$this->isEnabled()) {
            return;
        }

        add_filter('fluentform/transaction_data_' . $this->key, array($this, 'modifyTransaction'), 10, 1);

        add_filter(
            'fluentform/available_payment_methods',
            [$this, 'pushPaymentMethodToForm']
        );
    }
```

### pushPaymentMethodToForm($methods)
This method will push the payment method with existing $methods to form editor. So it can be added to your fluentforms. Here is the format you need to follow to add the method. The $methods parameter is available with the [fluentform/available_payment_methods](/hooks/filters/#fluentform_available_payment_methods) hook.

```php
/*
* @param $methods - Payment Methods Array data
*/    
public function pushPaymentMethodToForm($methods)
{
    $methods[$this->key] = [
        'title' => __('CustomPayment Method', 'fluentformpro'),
        'enabled' => 'yes',
        'method_value' => $this->key,
        'settings' => [
            'option_label' => [
                 'type' => 'text',
                 'template' => 'inputText',
                 'value' => 'Pay with MyCustomPaymentMethod ',
                 'label' => 'Method Label'
             ]
         ]
    ];
    return $methods;
}
```

### modifyTransaction($transaction)
This method modifies a transaction record with the payment method dashboard entry url. Use this to link the transaction with your payment method’s dashboard transaction page using the `$transaction->charge_id` charge id. The `$transaction` parameter is available with the [fluentform/transaction_data_{$key}](/hooks/filters/#fluentform_transaction_data___key_) hook.

```php
/*
* @param $transaction - Transaction Data array
*/
public function modifyTransaction($transaction)
{
   if ($transaction->charge_id) {
        $transaction->action_url =  'https://dashboard.mypaymentsitedemo.com/app/payments/'.$transaction->charge_id;
    }
    return $transaction;
}
```

### getGlobalFields()
This method will return all the admin settings for the current payment method. You can add your own settings also here. In the end of this page you will see an example with the settings format.

```php
abstract public function getGlobalFields();
```

### getGlobalSettings()
This method should return the saved data from the database. It will be based on the settings that were provided by [getGlobalFields()](/api/classes/base-payment-method/#getglobalfields) method. You can get your settings like this `get_option(‘fluentform_payment_settings_{method_key}’, [])`;

```php
abstract public function getGlobalSettings();
```

## Further read

### Validate settings of payment method
If you want to validate the payment admin settings use this hook

```php
add_filter('fluentform/payment_method_settings_validation_{method_key}', function ($errors, $settings) {
        if(!($settings['test_api_key']) && !($settings['live_api_key'])) {
             $errors['test_api_key'] = __('API Key is required', 'fluentformpro');
        }
        return $errors;
}, 10, 2);
```

## All Together
Your ideal implementation should look like this with validation.

```php
class MyCustomPaymentMethod extends BasePaymentMethod
{
    public function __construct()
    {
        parent::__construct('myCustomPaymentKey');
    }

    public function init()
    {  
        add_filter('fluentform/payment_method_settings_validation_' . $this->key, array($this, 'validateSettings'), 10, 2);

        add_filter('fluentform/transaction_data_' . $this->key, array($this, 'modifyTransaction'), 10, 1);

        add_filter(
            'fluentform/available_payment_methods',
            [$this, 'pushPaymentMethodToForm']
        );
    }

    public function pushPaymentMethodToForm($methods)
    {
        $methods[$this->key] = [
            'title' => __('CustomPayment Method', 'fluentformpro'),
            'enabled' => 'yes',
            'method_value' => $this->key,
            'settings' => [
                'option_label' => [
                    'type' => 'text',
                    'template' => 'inputText',
                    'value' => 'Pay with MyCustomPaymentMethod ',
                    'label' => 'Method Label'
                ]
            ]
        ];

        return $methods;
    }

    public function validateSettings($errors, $settings)
    {
        if(!($settings['test_api_key']) && !($settings['live_api_key'])) {
            $errors['test_api_key'] = __('API Key is required', 'fluentformpro');
        }
        return $errors;
    }

    public function modifyTransaction($transaction)
    {
        return $transaction;
    }

    public function getGlobalFields()
    {
        return [
            'label' => 'MyCustom Payment Settings',
            'fields' => [
                [
                    'settings_key' => 'is_active',
                    'type' => 'yes-no-checkbox',
                    'label' => 'Status',
                    'checkbox_label' => 'Enable MyCustom Payment Payment Method'
                ],
                [
                    'settings_key' => 'payment_mode',
                    'type' => 'input-radio',
                    'label' => 'Payment Mode',
                    'options' => [
                        'test' => 'Test Mode',
                        'live' => 'Live Mode'
                    ],
                    'info_help' => 'Select the payment mode. for testing purposes you should select Test Mode otherwise select Live mode.',
                    'check_status' => 'yes'
                ],
                [
                    'settings_key' => 'test_api_key',
                    'type' => 'input-text',
                    'data_type' => 'password',
                    'placeholder' => 'Test API Key',
                    'label' => 'Test API Key',
                    'inline_help' => 'Provide your test api key for your test payments',
                    'check_status' => 'yes'
                ],
                [
                    'settings_key' => 'live_api_key',
                    'type' => 'input-text',
                    'data_type' => 'password',
                    'label' => 'Live API Key',
                    'placeholder' => 'Live API Key',
                    'inline_help' => 'Provide your live api key for your live payments',
                    'check_status' => 'yes'
                ]
            ]
        ];
    }

    public function getGlobalSettings()
    {
        return get_option('fluentform_payment_settings_'.$this->key, []);
    }
}
```

## Final Note
It’s highly recommended to explore our source files and try to understand the procedure. Once you understand it’s very easy to implement your own custom payment method.

If you have any questions please feel free to reach to our [support team](https://wpmanageninja.com/support-tickets/) or ask questions in our [facebook community group](https://www.facebook.com/groups/fluentforms/)