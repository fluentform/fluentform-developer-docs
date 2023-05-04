# Fluent Forms Query Builder


## Introduction
Fluent Forms database query builder provides a convenient, fluent interface to creating and running database queries. It can be used to perform most database operations in your application.

_Note: Our Query Builder is compatible the PHP Laravel Framework's Query Builder. If you are familiar with Laravel's Query Builder, you will feel right at home using the Fluent Forms Query Builder._

### Example
Here is an example Fluent Query Builder 

```php
$query = wpFluent()->table('fluentform_forms')
            ->select(['id', 'title', 'form_fields', 'type'])
            ->where('has_payment', 1)
            ->whereBetween('created_at', ['2022-12-30 00:00:00', '2023-12-30 23:59:59'])
            ->when($formId, function ($query) use ($formId) {
                return $query->where('id', $formId);
            })
            ->orderBy('id', 'ASC');
```


# Retrieving Results

### Retrieving All Rows From A Table
You may use the `table` method on the `wpFluent()function to begin a query. The `table` method returns a fluent query builder instance for the given table, allowing you to chain more constraints onto the query and then finally get the results using the `get` method:

```php
<?php
 
namespace FluentForm\App\Http\Controllers;
 
class FormController extends Controller
{
    /**
     * Show a list of all fluent forms.
     *
     * @return Response
     */
    public function index()
    {
        $forms = wpFluent()->table('fluentform_forms')
                ->select(['id', 'title', 'form_fields', 'type'])
                ->get();
 
        return [
            'available_forms' => $forms
        ];   
    }
}
```
The `get` method returns an array containing the results where each result is an instance of the PHP stdClass object. You may access each column's value by accessing the column as a property of the object:

```php
foreach ($forms as $form) {
    echo $form->title;
}
```

### Retrieving A Single Row / Column From A Table
If you just need to retrieve a single row from the database table, you may use the `first` method. This method will return a single stdClass object:

```php
$form = wpFluent()->table('fluentform_forms')->where('title', 'LIKE' , '%Blank Form%')->first();
 
echo $form->title;
```

If you don't even need an entire row, you may extract a single value from a record using the `value` method. This method will return the value of the column directly:
```php
$title = wpFluent()->table('fluentform_forms')->where('title', 'LIKE' , '%Blank Form%')->value('title');
```

### Retrieving A List Of Column Values
If you would like to retrieve an array containing the values of a single column, you may use the `pluck` method. In this example, we'll retrieve an array of all form fields:

```php
$formsFields = wpFluent()->table('fluentform_forms')->pluck('form_fields');
 
foreach ($formsFields as $formField) {
    $formField = \json_decode($formField, true);
    // do your stuff
}
```

You may also specify a custom key column for the returned Collection:
```php
$formsFields = wpFluent()->table('fluentform_forms')->pluck('form_fields', 'id');
 
foreach ($formsFields as $id => $formField) {
    $formField = \json_decode($formField, true);
    // do your stuff
}
```

### Chunking Results
If you need to work with thousands of database records, consider using the `chunk` method. This method retrieves a small chunk of the results at a time and feeds each chunk into a Closure for processing. This method is very useful for process thousands of records. For example, let's work with the entire `fluentform_forms` table in chunks of 100 records at a time:
```php
wpFluent()->table('fluentform_forms')->orderBy('id')->chunk(100, function ($forms) {
    foreach ($forms as $form) {
        //
    }
});
```

You may stop further chunks from being processed by returning false from the Closure:
```php
wpFluent()->table('fluentform_forms')->orderBy('id')->chunk(100, function ($forms) {
    // Process the records...
    
    return false;
});
```

### Aggregates
The query builder also provides a variety of aggregate methods such as `count`, `max`, `min`, `avg`, and `sum`. You may call any of these methods after constructing your query:
```php
$totalForms = wpFluent()->table('fluentform_forms')->count();
 
$price = wpFluent()->table('fluentform_transaction')->max('payment_total');
```

Of course, you may combine these methods with other clauses:
```php
$price = wpFluent()->table('fluentform_transaction')
                ->where('payment_methods', 'stripe')
                ->avg('payment_total');
```


### Determining If Records Exist
Instead of using the `count` method to determine if any records exist that match your query's constraints, you may use the `exists`:
```php
return wpFluent()->table('fluentform_transaction')->where('payment_methods', 'stripe')->exists();
```


## Selects

### Specifying A Select Clause
Of course, you may not always want to select all columns from a database table. Using the `select` method, you can specify a custom `select` clause for the query:
```php
$forms = wpFluent()->table('fluentform_forms')->select('title', 'fields as form_fields')->get();
```

The `distinct` method allows you to force the query to return distinct results:
```php
$forms = wpFluent()->table('fluentform_forms')->distinct()->get();
```

If you already have a query builder instance and wish to add a column to its existing select clause, you may use the `addSelect` method:
```php
$query = wpFluent()->table('fluentform_forms')->select('title');
 
$forms = $query->addSelect('form_fields')->get();
```


## Raw Expressions
Sometimes you may need to use a raw expression in a query. To create a raw expression, you may use the `raw` method:
```php
$forms = wpFluent()->table('fluentform_forms')
                     ->select(wpFluent()->raw('count(*) as title, status'))
                     ->where('has_payment', 1)
                     ->groupBy('title')
                     ->get();
```

### Raw Methods
Instead of using `wpFluent()->raw`, you may also use the following methods to insert a raw expression into various parts of your query.

#### `selectRaw`
The `selectRaw` method can be used in place of `select(wpFluent()->raw(...))`. This method accepts an optional array of bindings as its second argument:
```php
$orders = wpFluent()->table('fluentform_order_items')
                ->selectRaw('item_price * ? as price_with_tax', [1.0825])
                ->get();
```

#### `whereRaw / orWhereRaw`
The `whereRaw` and `orWhereRaw` methods can be used to inject a raw `where` clause into your query. These methods accept an optional array of bindings as their second argument:
```php
$orders = wpFluent()->table('fluentform_order_items')
                ->whereRaw('item_price > IF(state = "TX", ?, 100)', [200])
                ->get();
```

#### `havingRaw / orHavingRaw`
The `havingRaw` and `orHavingRaw` methods may be used to set a raw string as the value of the `having` clause. These methods accept an optional array of bindings as their second argument:
```php
$orders = wpFluent()->table('fluentform_order_items')
                ->select('quantity', DB::raw('SUM(item_price) as total_sales'))
                ->groupBy('quantity')
                ->havingRaw('SUM(item_price) > ?', [2500])
                ->get();
```

#### `orderByRaw`
The `orderByRaw` method may be used to set a raw string as the value of the `order by` clause:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->orderByRaw('updated_at - created_at DESC')
                ->get();
```


## Joins

### Inner Join Clause
The query builder may also be used to write join statements. To perform a basic "inner join", you may use the `join` method on a query builder instance. The first argument passed to the `join` method is the name of the table you need to join to, while the remaining arguments specify the column constraints for the join. Of course, as you can see, you can join to multiple tables in a single query:
```php
$submissions = wpFluent()->table('fluentform_submissions')
            ->join('users', 'users.id', '=', 'fluentform_submissions.user_id')
            ->select('fluentform_submissions.*', 'users.phone')
            ->get();
```

### left Join Clause
If you would like to perform a "left join" instead of an "inner join", use the `leftJoin` method. The leftJoin method has the same signature as the join method:
```php
$submissions = wpFluent()->table('fluentform_submissions')
            ->leftJoin('users', 'users.id', '=', 'fluentform_submissions.user_id')
            ->get();
```

### Cross Join Clause
To perform a "cross join" use the `crossJoin` method with the name of the table you wish to cross join to. Cross joins generate a cartesian product between the first table and the joined table:
```php
$submissions = wpFluent()->table('fluentform_submissions')
            ->crossJoin('users')
            ->get();
```

### Advanced Join Clauses
You may also specify more advanced join clauses. To get started, pass a `Closure` as the second argument into the `join` method. The `Closure` will receive a `JoinClause` object which allows you to specify constraints on the `join` clause:
```php
wpFluent()->table('fluentform_submissions')
        ->join('users', function ($join) {
            $join->on('fluentform_submissions.user_id', '=', 'users.id')->orOn(...);
        })
        ->get();
```

If you would like to use a "where" style clause on your joins, you may use the `where` and `orWhere` methods on a join. Instead of comparing two columns, these methods will compare the column against a value:
```php
wpFluent()->table('fluentform_submissions')
        ->join('users', function ($join) {
            $join->on('fluentform_submissions.user_id', '=', 'users.id')
                 ->where('users.id', '>', 5);
        })
        ->get();
```


## Unions

The query builder also provides a quick way to "union" two queries together. For example, you may create an initial query and use the `union` method to union it with a second query:
```php
$first = wpFluent()->table('users')
            ->whereNull('first_name');
 
$user = wpFluent()->table('users')
            ->whereNull('last_name')
            ->union($first)
            ->get();
```


## Where Clauses

### Simple Where Clauses
You may use the `where` method on a query builder instance to add `where` clauses to the query. The most basic call to where requires three arguments. The first argument is the name of the column. The second argument is an operator, which can be any of the database's supported operators. Finally, the third argument is the value to evaluate against the column.
For example, here is a query that verifies the value of the "first_name" column is equal to 'John Smith':
```php
$forms = wpFluent()->table('fluentform_forms')->where('title', '=', 'Blank Form')->get();
```

For convenience, if you want to verify that a column is equal to a given value, you may pass the value directly as the second argument to the where method:
```php
$forms = wpFluent()->table('fluentform_forms')->where('title', 'Blank Form')->get();
```

Of course, you may use a variety of other operators when writing a where clause:
```php
$orders = wpFluent()->table('fluentform_order_items')
                ->where('line_total', '>=', 1000)
                ->get();
 
$orders = wpFluent()->table('fluentform_order_items')
                ->where('line_total', '<>', 1000)
                ->get();
 
$forms = wpFluent()->table('fluentform_forms')
                ->where('title', 'like', 'T%')
                ->get();
```

You may also pass an array of conditions to the where function:
```php
$forms = wpFluent()->table('fluentform_forms')->where([
    ['status', '=', 'published'],
    ['has_payment', '<>', '1'],
])->get();
```

### Or Statements
You may chain where constraints together as well as add or clauses to the query. The `orWhere` method accepts the same arguments as the `where` method:
```php
$forms = wpFluent()->table('fluentform_forms')
                    ->where('form_fields', 'like', '%Blank Form%')
                    ->orWhere('title', 'Blank Form')
                    ->get();
```

### Additional Where Clauses
#### whereBetween
The `whereBetween` method verifies that a column's value is between two values:
```php
$orders = wpFluent()->table('fluentform_order_items')
             ->whereBetween('line_total', [1, 100])->get();
```

#### whereNotBetween
The `whereNotBetween` method verifies that a column's value lies outside two values:
```php
$orders = wpFluent()->table('fluentform_order_items')
             ->whereNotBetween('line_total', [1, 100])->get();
```

#### whereIn / whereNotIn
The `whereIn` method verifies that a given column's value is contained within the given array:
```php
$forms = wpFluent()->table('fluentform_forms')
                    ->whereIn('id', [1, 2, 3])
                    ->get();
```

The `whereNotIn` method verifies that the given column's value is not contained in the given array:
```php
$forms = wpFluent()->table('fluentform_forms')
                    ->whereNotIn('id', [1, 2, 3])
                    ->get();
```

#### whereNull / whereNotNull
The `whereNull` method verifies that the value of the given column is NULL:
```php
$forms = wpFluent()->table('fluentform_forms')
                    ->whereNull('updated_at')
                    ->get();
```

The `whereNotNull` method verifies that the column's value is not NULL:
```php
$forms = wpFluent()->table('fluentform_forms')
                    ->whereNotNull('updated_at')
                    ->get();
```

#### whereDate / whereMonth / whereDay / whereYear / whereTime
The `whereDate` method may be used to compare a column's value against a date:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->whereDate('created_at', '2016-12-31')
                ->get();
```

The `whereMonth` method may be used to compare a column's value against a specific month of a year:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->whereMonth('created_at', '12')
                ->get();
```

The `whereDay` method may be used to compare a column's value against a specific day of a month:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->whereDay('created_at', '21')
                ->get();
```

The `whereYear` method may be used to compare a column's value against a specific year:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->whereYear('created_at', '2023')
                ->get();
```

The `whereTime` method may be used to compare a column's value against a specific time:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->whereTime('created_at', '11:20:45')
                ->get();
```

The `whereTimestamp` method may be used to compare a column's value against a specific time:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->whereTimestamp('created_at', '2023-11-21 11:20:45')
                ->get();
```

#### whereColumn
The `whereColumn` method may be used to verify that two columns are equal:
```php
$forms = wpFluent()->table('fluentform_forms')
                 ->whereColumn('conditions', 'appearance_settings')
                ->get();
```

You may also pass a comparison operator to the method:
```php
$forms = wpFluent()->table('fluentform_forms')
                 ->whereColumn('updated_at', '>', 'created_at')
                ->get();
```

The `whereColumn` method can also be passed an array of multiple conditions. These conditions will be joined using the and operator:
```php
$forms = wpFluent()->table('fluentform_forms')
                 ->whereColumn([
                    ['conditions', '=', 'appearance_settings'],
                    ['updated_at', '>', 'created_at']
                ])->get();
```


### Where Exists Clauses
The `whereExists` method allows you to write where exists SQL clauses. The `whereExists` method accepts a `Closure` argument, which will receive a query builder instance allowing you to define the query that should be placed inside the "exists" clause:
```php
wpFluent()->table('fluentform_forms')
            ->whereExists(function ($query) {
                $query->select(wpFluent()->raw(1))
                      ->from('fluentform_order_items')
                      ->whereRaw('fluentform_order_items.form_id = fluentform_forms.id');
            })
            ->get();
```

The query above will produce the following SQL:
```sql
select * from fluentform_forms
where exists (
    select 1 from fluentform_order_items where fluentform_order_items.form_id = fluentform_forms.id
)
```


### Ordering, Grouping, Limit, & Offset

#### orderBy
The `orderBy` method allows you to sort the result of the query by a given column. The first argument to the `orderBy` method should be the column you wish to sort by, while the second argument controls the direction of the sort and may be either `asc` or `desc`:
```php
$forms = wpFluent()->table('fluentform_forms')
                 ->orderBy('created_at', 'DESC')
                ->get();
```

#### latest / oldest
The `latest` and `oldest` methods allow you to easily order results by date. By default, result will be ordered by the `created_at` column. Or, you may pass the column name that you wish to sort by:
```php
$forms = wpFluent()->table('fluentform_forms')
                 ->latest()
                ->get();
```

#### inRandomOrder
The `inRandomOrder` method may be used to sort the query results randomly. For example, you may use this method to fetch a random user:
```php
$forms = wpFluent()->table('fluentform_forms')
                 ->inRandomOrder()
                ->get();
```

#### groupBy / having
The `groupBy` and `having` methods may be used to group the query results. The `having` method's signature is similar to that of the `where` method:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->groupBy('id')
                ->having('id', '>', 100)
                ->get();
```
You may pass multiple arguments to the `groupBy` method to group by multiple columns:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->groupBy('id', 'status')
                ->having('id', '>', 100)
                ->get();
```

#### skip / take
To limit the number of results returned from the query, or to skip a given number of results in the query, you may use the `skip` and `take` methods:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->skip(10)
                ->take(5)
                ->get();
```
Alternatively, you may use the `limit` and `offset` methods:
```php
$forms = wpFluent()->table('fluentform_forms')
                ->limit(10)
                ->offset(5)
                ->get();
```


### Conditional Clauses
Sometimes you may want clauses to apply to a query only when something else is true. For instance, you may only want to apply a `where` statement if a given input value is present on the incoming request. You may accomplish this using `when` method:
```php
$user = $request->get('user');
 
$submissions = wpFluent()->table('fluentform_submissions')
                ->when($user, function ($query, $user) {
                    return $query->where('user_id', $user);
                })
                ->get();
```
The `when` method only executes the given `Closure` when the first parameter is `true`. If the first parameter is `false`, the Closure will not be executed.

You may pass another Closure as the third parameter to the `when` method. This Closure will execute if the first parameter evaluates as `false`. To illustrate how this feature may be used, we will use it to configure the default sorting of a query:
```php
$sortBy = null;
 
$forms = wpFluent()->table('fluentform_forms')
                ->when($sortBy, function ($query, $sortBy) {
                    return $query->orderBy($sortBy);
                }, function ($query) {
                    return $query->orderBy('title');
                })
                ->get();
```


### Inserts

The query builder also provides an `insert` method for inserting records into the database table. The `insert` method accepts an array of column names and values:
```php
wpFluent()->table('fluentform_forms')->insert(
    ['title' => 'New Form', 'has_payment' => '1', 'status' => 'published', 'form_fields' => "[...field json data]"]
);
```
You may even insert several records into the table with a single call to `insert` by passing an array of arrays. Each array represents a row to be inserted into the table:
```php
wpFluent()->table('fluentform_forms')->insert([
    ['title' => 'New Form', 'has_payment' => 0, 'status' => 'published', 'form_fields' => "[...field json data]"],
    ['title' => 'New Form 2', 'has_payment' => 0, 'status' => 'published', 'form_fields' => "[...field json data]"]
]);
```

#### Auto-Incrementing IDs
If the table has an auto-incrementing id, use the `insertGetId` method to insert a record and then retrieve the ID:
```php
$formId = wpFluent()->table('fluentform_forms')->insertGetId(
    ['title' => 'New Form', 'has_payment' => '1', 'status' => 'published', 'form_fields' => "[...field json data]"]
);
```


### Updates

Of course, in addition to inserting records into the database, the query builder can also update existing records using the `update` method. The `update` method, like the `insert` method, accepts an array of column and value pairs containing the columns to be updated. You may constrain the `update` query using `where` clauses:
```php
wpFluent()->table('fluentform_forms')
            ->where('id', 1)
            ->update(['title' => 'New updated title']);
```


### Increment & Decrement

The query builder also provides convenient methods for incrementing or decrementing the value of a given column. This is a shortcut, providing a more expressive and terse interface compared to manually writing the `update` statement.

Both of these methods accept at least one argument: the column to modify. A second argument may optionally be passed to control the amount by which the column should be incremented or decremented:
```php
wpFluent()->table('fluentform_order_items')->increment('quantity');
 
wpFluent()->table('fluentform_order_items')->increment('quantity', 5);
 
wpFluent()->table('fluentform_order_items')->decrement('quantity');
 
wpFluent()->table('fluentform_order_items')->decrement('quantity', 5);
```
You may also specify additional columns to update during the operation:
```php
wpFluent()->table('fluentform_order_items')->increment('line_total', 1, ['item_price' => '99.99']);
```


### Deletes

The query builder may also be used to delete records from the table via the `delete` method. You may constrain delete statements by adding where clauses before calling the `delete` method:
```php
wpFluent()->table('fluentform_order_items')->delete();
 
wpFluent()->table('fluentform_order_items')->where('line_total', '>', 100)->delete();
```
If you wish to truncate the entire table, which will remove all rows and reset the auto-incrementing ID to zero, you may use the `truncate` method:
```php
wpFluent()->table('fluentform_order_items')->truncate();
```


### Pessimistic Locking

The query builder also includes a few functions to help you do "pessimistic locking" on your `select` statements. To run the statement with a "shared lock", you may use the `sharedLock` method on a query. A shared lock prevents the selected rows from being modified until your transaction commits:
```php
wpFluent()->table('fluentform_order_items')->where('line_total', '>', 100)->sharedLock()->get();
```
Alternatively, you may use the `lockForUpdate` method. A "for update" lock prevents the rows from being modified or from being selected with another shared lock:
```php
wpFluent()->table('fluentform_order_items')->where('line_total', '>', 100)->lockForUpdate()->get();
```