# Post Creation Actions

<Badge type="tip" vertical="top" text="Action Hooks" /> <Badge type="warning" vertical="top" text="2 Actions" />

<explain-block title="fluentform/populate_post_form_values">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$form` — see source
- `$feed` — see source
- `$postType` — see source

**Usage**

```php
add_action('fluentform/populate_post_form_values', function ($form, $feed, $postType) {
    // your code
}, 10, 3);
```

**Reference**

`do_action('fluentform/populate_post_form_values', $form, $feed->value, $postType);`

This action is located in `src/Components/Post/PostFormHandler.php` (line 60).

</explain-block>

<explain-block title="fluentform/post_integration_success">

<Badge type="tip" vertical="top" text="Pro" />

**Parameters**

- `$postId` — see source
- `$postData` — see source
- `$entryId` — see source
- `$form` — see source
- `$feed` — see source

**Usage**

```php
add_action('fluentform/post_integration_success', function ($postId, $postData, $entryId, $form, $feed) {
    // your code
}, 10, 5);
```

**Reference**

`do_action('fluentform/post_integration_success', $postId, $postData, $entryId, $form, $feed);`

This action is located in `src/Components/Post/PostFormHandler.php` (line 451).

</explain-block>
