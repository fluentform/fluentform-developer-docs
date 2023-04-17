# Database Model Basic

## Introduction
Fluent Forms ORM provides a beautiful, simple ActiveRecord implementation for working with database tables. Each database table has a corresponding "Model" which is used to interact with that table. Models allow you to query for data in db tables, as well as insert new records into the table.

<p class="warning">
NOTE: Fluent Forms offers helper functions and methods to interact with Fluent Forms's database so you may use those things instead of Models directly. We are documenting these for our internal usage and very-high level usage by 3rd-party develoeprs.
</p>

## Built-in Fluent Forms DB Models
All the built-in database models are available at

- `FluentForm\App\Models\` (Free version)

In this Article we will use `FluentForm\App\Models\Form` model as an example.

## Retrieving Models
Think of each Eloquent model as a powerful query builder allowing you to fluently query the database table associated with the model. For example:

```php
<?php
 
$forms = FluentForm\App\Models\Form::all();
 
foreach ($forms as $form) {
    echo $form->title;
}

```

### Adding Additional Constraints

The ORM all method will return all of the results in the model's table. Since each model serves as a query builder, you may also add constraints to queries, and then use the get method to retrieve the results:

```php 
$subscribers = FluentForm\App\Models\Form::where('status', 'active')
               ->orderBy('id', 'DESC')
               ->limit(10)
               ->skip(5)
               ->get();
```

## Retrieving Single Models / Aggregates

Of course, in addition to retrieving all the records for a given table, you may also retrieve single records using find or first. Instead of returning a collection of models, these methods return a single model instance:

```php
// Retrieve a model by its primary key...
$subscribers = FluentForm\App\Models\Form::find(1);
 
// Retrieve the first model matching the query constraints...
$subscriber = FluentForm\App\Models\Form::where('status', 'active')->first();
```

You may also call the find method with an array of primary keys, which will return a collection of the matching records:

```php
$subscribers = FluentForm\App\Models\Form::find([1,2,3]);
 ```

## Retrieving Aggregates

You may also use the count, sum, max, and other aggregate methods available. These methods return the appropriate scalar value instead of a full model instance:
```php
$count = FluentForm\App\Models\Form::where('status', 'active')->count();

$max = FluentForm\App\Models\Form::where('status', 'active')->max('id');
```

Available aggregate methods such as `count`, `max`, `min`, `avg`, and `sum`.


# Inserting & Updating Models

## Inserts
To create a new record in the database, create a new model instance, set attributes on the model, then call the save method:

```php 
$subscriber = FluentForm\App\Models\Form::insert($form);
```

## Updates

You can update a model few different way. You can assign property and then call `save()` method

```php 
$form = FluentForm\App\Models\Form::find(1);

$form->title = 'My Form';
$subscriber->save();
```

You can also update with an array

```php 
$form = FluentForm\App\Models\Form::find(1);

$form->update([
    'title' => 'My Form',
]);
```

# Accessing Attributes

You can just call the database table column name for accessing the attributes

```php 
$form = FluentForm\App\Models\Form::find(1);

$title = $form->title;
```

# Deleting Models

To delete a model, call the delete method on a model instance:

```php 
  $form = FluentForm\App\Models\Form::find(1);
  $form->delete();
```

### Deleting Models By Query

Of course, you may also run a delete statement on a set of models. In this example, we will delete all flights that are marked as inactive. Like mass updates, mass deletes will not fire any model events for the models that are deleted:

```php
FluentForm\App\Models\Form::where('status', 'inactive')->delete();
```

# Query Scopes
Scopes allow you to define common sets of constraints that you may easily re-use throughout application. For example, you may need to frequently retrieve all forms by given statuses.

```php

    /**
     * Local scope to filter subscribers by search/query string
     * @param \FluentForm\Framework\Database\Query\Builder $query
     * @param array $statuses
     * @return \FluentForm\Framework\Database\Query\Builder $query
     */
    public function scopeFilterByStatues($query, $statuses)
    {
        if ($statuses) {
            $query->whereIn('status', $statuses);
        }

        return $query;
    }

```

Now say you want to get forms where status equal active and inactive

```php 
$forms = FluentForm\App\Models\Form::filterByStatues(['active', 'inactive'])->get();
```
Please note that, the first letter will be small case.

In the individual model documentation, you will find which Fluent Forms models have scopes.

# Relationships
Database tables are often related to one another. For example, a form has multiple form meta, or multiple submissions. Fluent Forms ORM makes managing and working with these relationships easy.
Each Model has predefined relationships and you will find those in the individual model documentation.

```php 

$form = FluentForm\App\Models\Form::find(1);

// These will return corresponding metas and submissions
$formMeta = $form->formMeta;
$formSubmission = $form->submissions;

```
