# Extend the REST API
<Badge type="tip" vertical="top" text="Fluent Framework" />

Fluent Forms includes a built-in REST API router that lets you register custom endpoints under the `fluentform/v1` namespace. You can define routes, controllers, and policies to build secure APIs for your extensions.

[[toc]]

## API Base URL

All Fluent Forms REST API endpoints are available at:

```
https://yourdomain.com/wp-json/fluentform/v1/
```

## Registering a Custom Endpoint

Register routes inside the `fluentform/loaded` hook using the application router:

### Routing

```php
add_action( 'fluentform/loaded', function( $app ) {
    $app->router->prefix( 'my-prefix' )->withPolicy( 'MyPlugin\Policies\MyPolicy' )->group( function( $router ) {
        $router->get( '/', 'MyPlugin\Controllers\MyController@index' );
        // more routes go here
    } );
});

```
The above code registers a route accessible at `https://yourdomain.com/wp-json/fluentform/v1/my-prefix/`.

::: warning
Make sure to autoload your classes before the `fluentform/loaded` action fires. Otherwise you'll get a `Class does not exist` error. See [Autoloading](#autoloading) below.
:::

The `prefix` and `group` methods are optional. You can also define routes directly:

```php
 $app->router->post( '/your-url-path/', 'MyPlugin\Controllers\MyController@create');
```

### Route Parameters

Define dynamic URL segments with type constraints:

```php
 $app->router->get('/show/{id}', 'MyPlugin\Controllers\MyController@show')->int('id');
```
The `int` method tells the router that the `id` parameter should be an integer. You may chain multiple methods to define multiple parameters.
The `alpha` method accepts only alphabetic characters.

```php
 /* in routes */
 $app->router->get('/show/{id}/{name}', 'MyPlugin\Controllers\MyController@show')->int('id')->alpha('name');

/*
* Route parameters can be directly accessed in the controller method
*/
public function show($id, $name)
{
    // do something
}

```

### Available Router Methods

The router supports all standard HTTP verbs:

```php
$router->get( $uri, $callback);
$router->post( $uri, $callback);
$router->put( $uri, $callback);
$router->patch( $uri, $callback);
$router->delete( $uri, $callback);
$router->any( $uri, $callback); // responds to any HTTP verb
```

## Controllers

Extend the base controller class for structured request handling:

```php
<?php

namespace MyPlugin\Controllers;

use FluentForm\Framework\Http\Controller;

class MyController extends Controller
{

    public function index()
    {
        // Your controller logic goes here
        // must return something
    }
}
```

### Controller Methods

The base controller class provides these response helpers:

| Method | Description |
|--------|-------------|
| `$this->send($data, $code)` | Send a response with data and status code |
| `$this->sendSuccess($data, $code)` | Send a success JSON response |
| `$this->sendError($data, $code)` | Send an error JSON response |
| `$this->request` | Access the request object |
| `$this->response` | Access the response object |

### Request and Response Examples

```php
// Return a success response
public function index()
{
    $data = [
        'name' => 'John Doe',
        'email' => 'john.doe@mail.com'
    ];
    return $this->sendSuccess($data, 200);
}

// Access request data
public function create()
{
    $data = $this->request->all();
    // do something with the data
    return $this->sendSuccess($data, 201);
}
```

### Reading Request Parameters

```php
public function show($id)
{
    // Get a specific parameter
    $page = $this->request->get('page', 1);
    $perPage = $this->request->get('per_page', 10);

    // Get all parameters
    $all = $this->request->all();

    // Check if parameter exists
    if ($this->request->has('search')) {
        $search = sanitize_text_field($this->request->get('search'));
    }
}
```

### Error Responses

```php
public function update($id)
{
    $form = \FluentForm\App\Models\Form::find($id);

    if (!$form) {
        return $this->sendError([
            'message' => 'Form not found.',
        ], 404);
    }

    // Validation
    $title = $this->request->get('title');
    if (empty($title)) {
        return $this->sendError([
            'message' => 'Validation failed.',
            'errors'  => [
                'title' => ['The title field is required.'],
            ],
        ], 422);
    }

    // Process update...
    return $this->sendSuccess(['message' => 'Updated successfully.'], 200);
}
```

### Pagination Pattern

```php
public function index()
{
    $page    = absint($this->request->get('page', 1));
    $perPage = absint($this->request->get('per_page', 10));
    $perPage = min($perPage, 100); // Cap at 100

    $query = wpFluent()->table('fluentform_submissions')
        ->where('form_id', $this->request->get('form_id'))
        ->orderBy('id', 'DESC');

    $total = $query->count();
    $items = $query->offset(($page - 1) * $perPage)
        ->limit($perPage)
        ->get();

    return $this->sendSuccess([
        'data'  => $items,
        'total' => $total,
        'page'  => $page,
        'per_page' => $perPage,
        'last_page' => ceil($total / $perPage),
    ], 200);
}
```

## Policies

Policies authorize requests to routes. The `verifyRequest` method must return `true` to allow access:

```php
<?php

namespace MyPlugin\Policies;

use FluentForm\Framework\Foundation\Policy;
use FluentForm\Framework\Request\Request;

class MyPolicy extends Policy
{
    /**
     * @param \FluentForm\Framework\Request\Request $request
     * @return bool
     */
    public function verifyRequest(Request $request)
    {
        return current_user_can('fluentform_forms_manager');
    }
}

```

### Common Authorization Patterns

```php
// Allow any logged-in user
public function verifyRequest(Request $request)
{
    return is_user_logged_in();
}

// Allow only admins
public function verifyRequest(Request $request)
{
    return current_user_can('manage_options');
}

// Allow specific Fluent Forms capabilities
public function verifyRequest(Request $request)
{
    return current_user_can('fluentform_settings_manager');
}

// Method-specific permissions
public function verifyRequest(Request $request)
{
    $method = $request->method();

    // Read access for viewers, write access for managers
    if ($method === 'GET') {
        return current_user_can('fluentform_entries_viewer');
    }

    return current_user_can('fluentform_forms_manager');
}
```

### Public Endpoints

For endpoints that don't require authentication, return `true`:

```php
public function verifyRequest(Request $request)
{
    return true;
}
```

::: warning
Be cautious with public endpoints. Always validate and sanitize input, and never expose sensitive data without proper authorization.
:::

## Autoloading

Your classes must be loadable before the `fluentform/loaded` action fires.

**Option 1: Manual requires** (simple plugins)

```php
require_once __DIR__ . '/Controllers/MyController.php';
require_once __DIR__ . '/Policies/MyPolicy.php';

add_action('fluentform/loaded', function ($app) {
    // Routes...
});
```

**Option 2: Composer autoloading** (recommended for larger plugins)

```json
{
    "autoload": {
        "psr-4": {
            "MyPlugin\\": "src/"
        }
    }
}
```

```php
require_once __DIR__ . '/vendor/autoload.php';

add_action('fluentform/loaded', function ($app) {
    // Routes...
});
```

## Directory Structure

A typical plugin with custom REST endpoints:

```
my-plugin/
├── my-plugin.php
├── Controllers/
│   └── MyController.php
├── Policies/
│   └── MyPolicy.php
└── composer.json (optional)
```

## Complete Example: Form Submission via REST API

Here is an example of how to configure a REST API endpoint for form submission:

```php

// Add this code to your plugin file:
add_action('fluentform/loaded', function ($app) {
    $app->router->post('/test-submit', function () use ($app) {
    try {
    $data = $app->request->get('data');

    $data['_wp_http_referer'] = isset($data['_wp_http_referer']) ? sanitize_url(urldecode($data['_wp_http_referer'])) : '';

    $app->request->merge(['data' => $data]);

    $formId = intval($app->request->get('form_id'));

    $response = (new FluentForm\App\Services\Form\SubmissionHandlerService())->handleSubmission($data, $formId);

    return $app->response->json($response);
    } catch (FluentForm\Framework\Validator\ValidationException $e) {
    return $app->response->json($e->errors(), $e->getCode());
    }
    });
});

// Use this JSON format to submit forms:
{
    "form_id": "5",
    "data": {
        "email" : "johndoe@gmail.com",
        "names": {
            "first_name": "John",
            "last_name" : "Doe"
        },
        "subject" : "test",
        "message": "Hello"
    }
}

```

## Related Resources

- [Security Best Practices](/guides/security/) — Authorization and input validation patterns
- [Global Functions](/global-functions/) — `wpFluentForm()`, `wpFluent()`, `fluentFormApi()`
- [Database Schema](/database/) — Table structures for querying data
