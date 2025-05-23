
<explain-block title="fluentform/maybe_scheduled_jobs">

**Description**

This is a smart background action to process jobs like integration data pushing by schedule time.

**Usage:**
```php
add_action('fluentform/maybe_scheduled_jobs' ,function () {
   // Do your stuff here
}, 10, 0);
```

**Reference**

`do_action('fluentform/maybe_scheduled_jobs');`

This action is located in `fluentform/boot/globals.php`

</explain-block>

---------------------------------------------------

<explain-block title="fluentform/global_notify_completed">

**Description**

This action fires after completing form integration data pushing process.

**Parameters**
- `$insertId` (int) Submission ID
- `$form` (object) Form Object

**Usage:**
```php
add_action('fluentform/global_notify_completed' ,function ($insertId, $form) {
   // Do your stuff here
}, 10, 2);
```

**Reference**

`do_action('fluentform/global_notify_completed', $insertId, $form);`

This action is located in `fluentform/app/Services/Integrations/GlobalNotificationManager.php`, `fluentform/app/Services/WPAsync/FluentFormAsyncRequest.php`

</explain-block>

<explain-block title="fluentform/save_global_integration_settings_{$settingsKey}">

**Description**

This action runs when saving a global integration settings with the settings key appended.

**Parameters**
- `$integration`   (array) Integration Settings

**Usage:**
```php
add_action('fluentform/save_global_integration_settings_{$settingsKey}', function ($integration) {
   // Do your stuff here
}, 10, 1);
```
**Note:** `{$settingsKey}` is dynamic integration key. Replace `{$settingsKey}` with specific integration key.

**Reference**

`do_action('fluentform/save_global_integration_settings_' . $settingsKey, $integration);`

This action is located in `fluentform/app/Http/Controllers/GlobalIntegrationController.php`

</explain-block>


<explain-block title="fluentform/integration_action_result">

**Description**

This action runs after completing an integration process.

**Parameters**
- `$feed` (array) Current Feed
- `$status` (string) Status
- `$note` (string) Note

**Usage:**
```php
add_action('fluentform/integration_action_result', function ($feed, $status, $note) {
   // Do your stuff here
}, 10, 3);
```


**Reference**

`do_action('fluentform/integration_action_result', $feed, $status, $message);`

This action is located in `fluentformpro/src/Integrations/**/Bootstrap.php`

</explain-block>


<explain-block title="fluentform/user_registration_before_start">

**Description**

This action runs before register user. Do your stuff before user is registering by fluentform.

**Parameters**
- `$feed` (array) User Feed
- `$submission` (object) Submission
- `$form`  (object) Form

**Usage:**
```php
add_action('fluentform/user_registration_before_start', function ($feed, $submission, $form) {
   // Do your stuff here
}, 10, 3);
```


**Reference**

`do_action('fluentform/user_registration_before_start', $feed, $entry, $form);`

This action is located in `fluentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php -> registerUser()`

</explain-block>


<explain-block title="fluentform/created_user">

**Description**

This action runs after user created. Do your stuff after user is created by fluentform.

**Parameters**
- `$userId` (int) User ID
- `$feed` (array) User Feed
- `$submission` (object) Submission
- `$form`  (object) Form

**Usage:**
```php
add_action('fluentform/created_user', function ($userId, $feed, $submission, $form) {
   // Do your stuff here
}, 10, 4);
```


**Reference**

`do_action('fluentform/created_user', $userId, $feed, $entry, $form);`

This action is located in `fluentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php -> createUser()`

</explain-block>


<explain-block title="fluentform/user_registration_completed">

**Description**

This action runs after user registration completed. Do your stuff after user is registered by fluentform.

**Parameters**
- `$userId` (int) User ID
- `$feed` (array) User Feed
- `$submission` (object) Submission
- `$form`  (object) Form

**Usage:**
```php
add_action('fluentform/user_registration_completed', function ($userId, $feed, $submission, $form) {
   // Do your stuff here
}, 10, 4);
```


**Reference**

`do_action('fluentform/user_registration_completed', $userId, $feed, $entry, $form);`

This action is located in `fluentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php -> createUser()`

</explain-block>


<explain-block title="fluentform/user_update_completed">

**Description**

This action runs after user update completed. Do your stuff after user is updated by fluentform.

**Parameters**
- `$userId` (int) User ID
- `$feed` (array) User Feed
- `$submission` (object) Submission
- `$form`  (object) Form

**Usage:**
```php
add_action('fluentform/user_update_completed', function ($userId, $feed, $submission, $form) {
   // Do your stuff here
}, 10, 4);
```


**Reference**

`do_action('fluentform/user_update_completed', $userId, $feed, $entry, $form);`

This action is located in `fluentformpro/src/Integrations/UserRegistration/UserUpdateFormHandler.php -> handleUpdateUser()`

</explain-block>
