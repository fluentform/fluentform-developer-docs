# Base Processor
<Badge type="tip" vertical="top" text="PAYMENT API" /> <Badge type="tip" vertical="top" text="EXTEND PAYMENT PROCESSOR" />
The Fluent Forms `BaseProcessor` class offers developers to process payment methods created from the [BasePaymentMethod](/api/classes/base-payment-method) class.

The API Functions is automatically called when the form has payment the selected payment methods. The BaseFieldManager class is located at the pro version of fluetnforms plugin in `src/Payments/PaymentMethods/BaseProcessor.php`.

**Notice: Please do not initiate this class directly. You should extend this class to add a new payment processor.**

#### [Example Implementation](/api/classes/base-processor/#all-together)

## Methods
- [`init()`](/api/classes/base-processor/#init)
- [`handlePaymentAction()`](/api/classes/base-processor/#handlepaymentaction)
- [`setSubmissionId()`](/api/classes/base-processor/#setsubmissionid-submissionid)
- [`insertTransaction()`](/api/classes/base-processor/#inserttransaction-data)
- [`insertRefund()`](/api/classes/base-processor/#insertrefund-data)
- [`getTransaction()`](/api/classes/base-processor/#gettransaction-transactionid-column-id)
- [`getRefund()`](/api/classes/base-processor/#getrefund-refundid-column-id)
- [`changeSubmissionPaymentStatus()`](/api/classes/base-processor/#changesubmissionpaymentstatus-newstatus)
- [`changeTransactionStatus()`](/api/classes/base-processor/#changetransactionstatus-transactionid-newstatus)
- [`recalculatePaidTotal()`](/api/classes/base-processor/#recalculatepaidtotal)
- [`updateTransaction()`](/api/classes/base-processor/#updatetransaction-transactionid-data)
- [`handleSessionRedirectBack()`](/api/classes/base-processor/#handlesessionredirectback-data)
- [`setMetaData()`](/api/classes/base-processor/#setmetadata)
- [`getReturnData()`](/api/classes/base-processor/#getreturndata)

### init()
You need to override this method using the following hooks. You can call it with your custom payment method class extended from the [BasePaymentMethod](/api/classes/base-payment-method) class. At the bottom of this page, you will see an example implementation of this method with all available parameters of these hooks.
```php
/*
* $this->method Should match your payment method key
*/
public function init()
{
    add_action('fluentform/process_payment_' . $this->method, array($this, 'handlePaymentAction'), 10, 6);
    add_action('fluentform/payment_frameless_' . $this->method, array($this, 'handleSessionRedirectBack'));

    add_action('fluentform/ipn_endpoint_' . $this->method, function () {
            //if IPN verification is needed
    });
}
```

### handlePaymentAction()
This is an abstract class that you have to implement in your own class. This is the most crucial part where the payment should be processed and then the transaction data is inserted into the database.

```php
/* 
* Process and finalize the payment transaction
* 
* 
* @param  int $submissionId  - Form Submission ID
* @param array $submissionData - Form Submission Data Array
* @param object $form - Form Object
* @param array $methodSettings - Payment Method Settings Data Array
* @param boolean $subscriptionItems - Payment has subscription item
* @param int $totalPayable - Total payable amount
*/

public abstract function handlePaymentAction($submissionId, $submissionData, $form, $methodSettings)
```

### setSubmissionId($submissionId)
This method will set the form submission ID property. It should be called from handlePaymentAction where the $submissionId parameter is available. The following methods does not need to be created in your class you can call these methods from the base class.

```php
/*
* Set the currrent submission ID
* @param $submissionId  - Form Submission ID
*/
public function setSubmissionId($submissionId)
```

### insertTransaction($data)
This method will insert the transaction data into the database. It should be called from the [`handlePaymentAction()`](/api/classes/base-processor/#handlepaymentaction) method or when you need to insert a transaction record after verifying data.

```php
/*
* @param data - Transaction Data array
*/
public function insertTransaction($data)
```

### insertRefund($data)
This method is used to insert refund data.

```php
/*
* @param data - Refund Data array
*/
public function insertRefund($data)
```


### getTransaction($transactionId, $column = ‘id’)
This method is called to get transaction data. You can use this inside [`handlePaymentAction()`](/api/classes/base-processor/#handlepaymentaction) method to process the transaction.

```php
/*
* @param transactionId - Transaction ID
* $column - Column Name to match with 
*/
public function getTransaction($transactionId, $column = 'id')
```

### getRefund($refundId, $column = ‘id’)
Use this method to get refund data.

```php
/*
* @param @refundId - RefundId ID
* $column - Column Name to match with 
*/
public function getRefund($refundId, $column = 'id')
```

### changeSubmissionPaymentStatus($newStatus)
Update the current submission status for example paid or pending. After processing a transaction update the payment status using this method.

```php
/*
*@param $newStatus - New submission status (string)
*/
public function changeSubmissionPaymentStatus($newStatus)
```

### changeTransactionStatus($transactionId, $newStatus)
Use this method to update the status of the transaction.

```php/*
*@param $transactionId - Transaction ID 
*@param $newStatus - New Status 
*/
public function changeTransactionStatus($transactionId, $newStatus)
```

### recalculatePaidTotal()
Use this method to recalculate the current submission total amount. This method does not need to be created in your class you can call this method from the base class.

```php/*
public function recalculatePaidTotal()
```

### updateTransaction($transactionId, $data)
This method updates transaction data.

```php/*
/*
*@param $transactionId - Transaction ID 
*@param $data - Transaction data array 
*/

public function updateTransaction($transactionId, $data)
```

### handleSessionRedirectBack($data)
This method handles the payment session redirect back.

```php/*
public function handleSessionRedirectBack($data)
```

### setMetaData()
Submission metadata is saved using this method.

```php/*
/*
* @param $name - Meta Name
* @param @value - Meta Value
*/
public function setMetaData($name, $value)
```

### getReturnData()
This method will return submission data which will be used during the final payment processing.

```php/*
public function getReturnData()
```

## All Together 
Here is an example implementation of the BaseProcessor class.

```php
<?php
 if (!defined('ABSPATH')) {
     exit;
 }

use \FluentFormPro\Payments\PaymentMethods\BaseProcessor;

class MyPaymentProcessor extends BaseProcessor
{
    public $method = 'methodKey';

    protected $form;  //Form Object

    public function init()
    {
        add_action('fluentform/process_payment_' . $this->method, array($this, 'handlePaymentAction'), 10, 6);

        add_action('fluentform/payment_frameless_' . $this->method, array($this, 'handleSessionRedirectBack'));
    }

    /*
    * Process and finalize the payment transaction
    * 
    * @param  int $submissionId  - Form Submission ID
    * @param array $submissionData - Form Submission Data Array
    * @param object $form - Form Object
    * @param array $methodSettings - Payment Method Settings Data Array
    * @param boolean $hasSubscription - Payment has subscription item
    * @param int $totalPayable - Total payable amount
    */

    public function handlePaymentAction($submissionId, $submissionData, $form, $methodSettings, $hasSubscription, $totalPayable)
    {
        $this->form = $form;
        $this->setSubmissionId($submissionId);

        /* Your code here : Redirect        
        *  payment method API ,then insert the transaction
        */ Transaction data format

        $this->insertTransaction([
            'transaction_type' => 'onetime',
            'payment_total' => $this->getAmountTotal(),
            'status' => 'pending', //paid or pending
            'currency' => $currency ,
            'payment_mode' => $this->getPaymentMode()
        ]);
        $this->handleRedirect($transaction, $submission, $form, $methodSettings, $hasSubscription);
    }
   
   public function handleRedirect($transaction, $submission, $form, $methodSettings, $hasSubscription)
    {
        $successUrl = add_query_arg(array(
            'fluentform_payment' => $submission->id,
            'payment_method'     => $this->method,
            'transaction_hash'   => $transaction->transaction_hash,
            'type'               => 'success'
        ), site_url('/'));

        $listener_url = add_query_arg(array(
            'fluentform_payment_api_notify' => 1,
            'payment_method'                => $this->method,
            'submission_id'                 => $submission->id,
            'transaction_hash'              => $transaction->transaction_hash,
        ), home_url('index.php'));

        $paymentArgs = array(
            'amount' => [
                'currency' => $transaction->currency,
                'value' => number_format((float) $transaction->payment_total / 100, 2, '.', '')
            ],
            'redirectUrl' => $successUrl,
            'webhookUrl' => $listener_url,
            'metadata' => json_encode([
                'form_id' => $form->id,
            ]),
        );
        $paymentIntent = (new IPN())->makeApiCall('payments', $paymentArgs, $form->id, 'POST');

        if(is_wp_error($paymentIntent)) {
  
            wp_send_json_success([
                'message' => $paymentIntent->get_error_message()
            ], 423);
        }

        wp_send_json_success([
            'nextAction'   => 'payment',
            'actionName'   => 'normalRedirect',
            'redirect_url' => $paymentIntent['redirectURL'],
            'message'      => 'Redirect Message',
            'result'       => [
                'insert_id' => $submission->id
            ]
        ], 200);
    }


    /*
    * This method is called when you are redirected back to your site.
    *
    * @param $data  - $_GET data of redirect back page
    */

    public function handleSessionRedirectBack($data)
    {
        // Here Verify and process your payment redirect back using the payment method API 
        
        $payment = (new MyPaymentAPIDemo())->makeApiCall($data); // Make API call from your payment method 
        $isSuccess = $payment['status'] == 'success';
        $submission = $this->getSubmission();
        $transactionHash = sanitize_text_field($data['transaction_hash']);
        $transaction = $this->getTransaction($transactionHash, 'transaction_hash');
        if($isSuccess) {
             // Handle payment success
             $this->handlePaid($submission, $transaction, $payment)
        } else {
             // Handle payment fail
        }
    }

    public function getPaymentMode()
    {
        return $this->method;
    }
    public function handlePaid($submission, $transaction, $vendorTransaction)
    {
        // Check if actions are fired
        if ($this->getMetaData('is_form_action_fired') == 'yes') {
            return $this->completePaymentSubmission(false);
        }
        $status = 'paid';
        // Let's make the payment as paid
        $updateData = [
            'payment_note' => maybe_serialize($vendorTransaction),
            'charge_id'    => sanitize_text_field($vendorTransaction['id']),
            'payer_email' => $vendorTransaction['email']
        ];

        $this->updateTransaction($transaction->id, $updateData);
        $this->changeSubmissionPaymentStatus($status);
        $this->changeTransactionStatus($transaction->id, $status);
        $this->recalculatePaidTotal();

        $returnData = $this->getReturnData();
        $this->setMetaData('is_form_action_fired', 'yes');

        return $returnData;
    }
}
```

## Final Note
Please check the existing payment processor files to get a more clear concept of this class and implement your custom payment system. There are other methods also to help with possessing a payment. If you have any questions please feel free to reach to our [support team](https://wpmanageninja.com/support-tickets/) or ask questions in our [facebook community group](https://www.facebook.com/groups/fluentforms/)