# `User` Model

<Badge type="tip" vertical="top" text="Model" /> <Badge type="warning" vertical="top" text="Auto-extracted" />

## Class

- **Class:** `FluentForm\App\Models\User`
- **Extends:** `Model`
- **Source:** `app/Models/User.php`
- **Table:** `{$wpdb->prefix}users` (raw: `users`)
- **Primary key:** `id`

## Public Methods

### `getIdAttribute()`

The table associated with the model.

### `getNameAttribute()`

Get the name of the user.

### `getEmailAttribute()`

Get the email of the user.

### `getPermalinkAttribute()`

Get the permalink of the user.

## Quick example

```php
use FluentForm\App\Models\User;

// Query
$user = User::find($id);
$user_set = User::where('id', '>', 0)->limit(10)->get();
```
