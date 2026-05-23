# Array Helper aka Arr

- Class with Namespace: `\FluentForm\Framework\Support\Arr`
- Method Types: `static`

  [[toc]]

<a name="method-array-add"></a>

### `Arr::accessible($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 33)

Determine whether the given value is array accessible.

---

### `Arr::add()`

The `Arr::add` method adds a given key / value pair to an array if the given key doesn't already exist in the array:
```php 
use FluentForm\Framework\Support\Arr;

$array = Arr::add(['name' => 'Desk'], 'price', 100);

// ['name' => 'Desk', 'price' => 100]
```
    

<a name="method-array-collapse"></a>

### `Arr::arrayKeyExists($array, $key)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 206)

Alias of exists.

---

### `Arr::arsort($array, $flags = SORT_REGULAR)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 924)

Sort an array in descending order and maintain index association.

---

### `Arr::asort($array, $flags = SORT_REGULAR)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 910)

Sort an array in ascending order and maintain index association.

---

### `Arr::collapse()`

The `Arr::collapse` method collapses an array of arrays into a single array:
```php 
use FluentForm\Framework\Support\Arr;

$array = Arr::collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<a name="method-array-divide"></a>

### `Arr::compare($array1, $array2, $path = [])`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1250)

Compare two nested arrays side by side

---

### `Arr::contains(array $array, $values)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1183)

Check if the value(s) exist in an array using "dot" notation.

---

### `Arr::containsAny(array $array, $values)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1217)

Check if the any value exist in an array using "dot" notation.

---

### `Arr::crossJoin(...$arrays)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 84)

Cross join the given arrays, returning all possible permutations.

---

### `Arr::divide()`

The `Arr::divide` method returns two arrays, one containing the keys, and the other containing the values of the given array:
```php 
use FluentForm\Framework\Support\Arr;

[$keys, $values] = Arr::divide(['name' => 'Desk']);

// $keys: ['name']

// $values: ['Desk']
```

<a name="method-array-dot"></a>

### `Arr::DoesNotEndLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1441)

Return non-matching ending of items from array (similar to mysql's NOT LIKE%)

---

### `Arr::DoesNotStartLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1409)

Return non-matching starting of items from array (similar to mysql's NOT %LIKE)

---

### `Arr::dot()`

The `Arr::dot` method flattens a multi-dimensional array into a single level array that uses "dot" notation to indicate depth:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

$flattened = Arr::dot($array);

// ['products.desk.price' => 100]
```

<a name="method-array-except"></a>

### `Arr::endsLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1425)

Return matching ending of items from array (similar to mysql's LIKE%)

---

### `Arr::every($array, callable $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1700)

Tests whether all elements in the array pass the
test implemented by the provided callback.

---

### `Arr::except()`

The `Arr::except` method removes the given key / value pairs from an array:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['name' => 'Desk', 'price' => 100];

$filtered = Arr::except($array, ['price']);

// ['name' => 'Desk']
```
<a name="method-array-first"></a>

### `Arr::exists($array, $key)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 176)

Determine if the given key exists in the provided array.

---

### `Arr::filterRecursive($array, ?callable $cb = null, $mode = 0)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 271)

Recursively filter an array like array_filter.

---

### `Arr::find($array, callable $callback, $findKey = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1719)

Finds the first element in the array that satisfies the
condition implemented by the callback function.

---

### `Arr::findKey($array, callable $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1738)

Finds the first key in the array that satisfies the
condition implemented by the callback function.

---

### `Arr::findPath($array, $value, $ci = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 320)

Recursively search the value and return the path of first match.

---

### `Arr::findSimilar($needle, array $haystack, $accuracy = 60)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1751)

Find similar words in an array.

---

### `Arr::first()`

The `Arr::first` method returns the first element of an array passing a given truth test:
```php 
use FluentForm\Framework\Support\Arr;

$array = [100, 200, 300];

$first = Arr::first($array, function ($value, $key) {
    return $value >= 150;
});

// 200
```
A default value may also be passed as the third parameter to the method. This value will be returned if no value passes the truth test:
```php 
use FluentForm\Framework\Support\Arr;

$first = Arr::first($array, $callback, $default);
```

<a name="method-array-flatten"></a>

### `Arr::firstKey($array, ?callable $callback = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 248)

Returns the key of the first item (matching the specified
callback if given) or null if there is no such item.

---

### `Arr::flatten()`

The `Arr::flatten` method flattens a multi-dimensional array into a single level array:

```php 
use FluentForm\Framework\Support\Arr;

$array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

$flattened = Arr::flatten($array);

// ['Joe', 'PHP', 'Ruby']
```

<a name="method-array-forget"></a>

### `Arr::forget()`

The `Arr::forget` method removes a given key / value pair from a deeply nested array using "dot" notation:

```php 
use FluentForm\Framework\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

Arr::forget($array, 'products.desk');

// ['products' => []]
```

<a name="method-array-get"></a>

### `Arr::get()`

The `Arr::get` method retrieves a value from a deeply nested array using "dot" notation:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

$price = Arr::get($array, 'products.desk.price');

// 100
```

The `Arr::get` method also accepts a default value, which will be returned if the specific key is not found:

```php 
use FluentForm\Framework\Support\Arr;

$discount = Arr::get($array, 'products.desk.discount', 0);

// 0
```

<a name="method-array-has"></a>

### `Arr::has()`

The `Arr::has` method checks whether a given item or items exists in an array using "dot" notation:

```php 
use FluentForm\Framework\Support\Arr;

$array = ['product' => ['name' => 'Desk', 'price' => 100]];

$contains = Arr::has($array, 'product.name');

// true

$contains = Arr::has($array, ['product.price', 'product.discount']);

// false
```

<a name="method-array-last"></a>

### `Arr::hasAny($array, $keys)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 530)

Determine if any of the keys exist in an array using "dot" notation.

---

### `Arr::inArray($array, $value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 562)

Alias of contains.

---

### `Arr::insertAfter($array, $key, $newKey, $newValue)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1653)

Inserts an item after the specified key in the given array. If the
key is not found, inserts the item at the end of the array.

---

### `Arr::insertAt($array, $pos, $newItem)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1602)

Insert a new item in the array at the given position.

---

### `Arr::insertBefore($array, $key, $newKey, $newValue)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1623)

Inserts an item before the specified key in the given array. If the
key is not found, inserts the item at the beginning of the array.

---

### `Arr::isAssoc(array $array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 576)

Determines if an array is associative.
An array is "associative" if it doesn't have
sequential numerical keys beginning with zero.

---

### `Arr::isList($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 590)

Determines if an array is a list.
An array is a "list" if all array keys are sequential
integers starting from 0 with no gaps in between.

---

### `Arr::isTrue($array, $key)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 615)

Determines if the given key contains a boolean value.
Returns true for true, 1, "1", "true", "on" and "yes"
Returns false for false, "0", "false", "off", "no", and ""
Returns for all non-boolean values.

---

### `Arr::keyExists($array, $key)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 195)

Alias of exists.

---

### `Arr::keysDoesNotEndLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1577)

Return non-matching ending of items from array by keys

---

### `Arr::keysDoesNotStartLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1529)

Return non-matching starting of items from array by keys

---

### `Arr::keysEndLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1553)

Return matching ending of items from array by keys

---

### `Arr::keysLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1457)

Return matching items from array by keys

---

### `Arr::keysNotLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1481)

Return non-matching items from array by keys

---

### `Arr::keysStartLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1505)

Return matching starting of items from array by keys

---

### `Arr::krsort($array, $flags = SORT_REGULAR)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 952)

Sort an array by key in descending order.

---

### `Arr::ksort($array, $flags = SORT_REGULAR)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 938)

Sort an array by key in ascending order.

---

### `Arr::last()`

The `Arr::last` method returns the last element of an array passing a given truth test:
```php 
use FluentForm\Framework\Support\Arr;

$array = [100, 200, 300, 110];

$last = Arr::last($array, function ($value, $key) {
    return $value >= 150;
});

// 300
```

A default value may be passed as the third argument to the method. This value will be returned if no value passes the truth test:
```php 
use FluentForm\Framework\Support\Arr;

$last = Arr::last($array, $callback, $default);
```

<a name="method-array-only"></a>

### `Arr::lastKey($array, ?callable $callback = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 361)

Returns the key of the last item (matching the specified
callback if given) or null if there is no such item.

---

### `Arr::like($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1361)

Return matching items from array (similar to mysql's %LIKE%)

---

### `Arr::map($value, $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1171)

Maps a function to all non-iterable elements of an array or an object.
This is similar to `array_walk_recursive()` but acts upon objects too.

---

### `Arr::mergeMissing(&$array1, &$array2)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1300)

Merge the items from the first array into the
second array if the second array is missing it.

---

### `Arr::mergeMissingValues(array $array, array $defaults)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1328)

Recursively merge the given array with defaults.
Overwrite $array with $defaults if only $array
contains null or empty values or doesn't exist.

---

### `Arr::natcasesort($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 978)

Sort an array using a case insensitive "natural order" algorithm.

---

### `Arr::natsort($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 965)

Sort an array using a "natural order" algorithm.

---

### `Arr::notLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1377)

Return non-matching items from array (similar to mysql's NOT %LIKE%)

---

### `Arr::of(array $array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 22)

Makes a collection from array

---

### `Arr::only()`

The `Arr::only` method returns only the specified key / value pairs from the given array:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];

$slice = Arr::only($array, ['name', 'price']);

// ['name' => 'Desk', 'price' => 100]
```
<a name="method-array-pluck"></a>

### `Arr::passThrough(array $items, array $callbacks, $mode = 0)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1772)

Pass the items through a series of callbacks.

---

### `Arr::pluck()`

The `Arr::pluck` method retrieves all of the values for a given key from an array:
```php 
use FluentForm\Framework\Support\Arr;

$array = [
    ['developer' => ['id' => 1, 'name' => 'Jewel']],
    ['developer' => ['id' => 2, 'name' => 'Adre']],
];

$names = Arr::pluck($array, 'developer.name');

// ['Jewel', 'Adre']
```
You may also specify how you wish the resulting list to be keyed:
```php 
use FluentForm\Framework\Support\Arr;

$names = Arr::pluck($array, 'developer.name', 'developer.id');

// [1 => 'Jewel', 2 => 'Adre']
```
<a name="method-array-prepend"></a>

### `Arr::prepend()`

The `Arr::prepend` method will push an item onto the beginning of an array:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['one', 'two', 'three', 'four'];

$array = Arr::prepend($array, 'zero');

// ['zero', 'one', 'two', 'three', 'four']
```

If needed, you may specify the key that should be used for the value:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['price' => 100];

$array = Arr::prepend($array, 'Desk', 'name');

// ['name' => 'Desk', 'price' => 100]
```

<a name="method-array-pull"></a>

### `Arr::pull()`

The `Arr::pull` method returns and removes a key / value pair from an array:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['name' => 'Desk', 'price' => 100];

$name = Arr::pull($array, 'name');

// $name: Desk

// $array: ['price' => 100]
```

A default value may be passed as the third argument to the method. This value will be returned if the key doesn't exist:
```php 
use FluentForm\Framework\Support\Arr;

$value = Arr::pull($array, $key, $default);
```
<a name="method-array-random"></a>

### `Arr::query($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 761)

Convert the array into a query string.

---

### `Arr::random()`

The `Arr::random` method returns a random value from an array:
```php 
use FluentForm\Framework\Support\Arr;

$array = [1, 2, 3, 4, 5];

$random = Arr::random($array);

// 4 - (retrieved randomly)
```
You may also specify the number of items to return as an optional second argument. Note that providing this argument will return an array, even if only one item is desired:
```php 
use FluentForm\Framework\Support\Arr;

$items = Arr::random($array, 2);

// [2, 5] - (retrieved randomly)
```

<a name="method-array-set"></a>

### `Arr::rsort($array, $flags = SORT_REGULAR)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 896)

Sort an array in descending order.

---

### `Arr::select($array, $keys)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 643)

Select an array of values from an array.

---

### `Arr::set()`

The `Arr::set` method sets a value within a deeply nested array using "dot" notation:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

Arr::set($array, 'products.desk.price', 200);

// ['products' => ['desk' => ['price' => 200]]]
```

<a name="method-array-sort"></a>

### `Arr::shuffle($array, $seed = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 860)

Shuffle the given array and return the result.

---

### `Arr::some($array, callable $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1681)

Tests whether at least one element in the array passes
the test implemented by the provided callback.

---

### `Arr::sort()`

The `Arr::sort` method sorts an array by its values:
```php 
use FluentForm\Framework\Support\Arr;

$array = ['Desk', 'Table', 'Chair'];

$sorted = Arr::sort($array);

// ['Chair', 'Desk', 'Table']
```

You may also sort the array by the results of the given Closure:
```php 
use FluentForm\Framework\Support\Arr;

$array = [
    ['name' => 'Desk'],
    ['name' => 'Table'],
    ['name' => 'Chair'],
];

$sorted = array_values(Arr::sort($array, function ($value) {
    return $value['name'];
}));

/*
    [
        ['name' => 'Chair'],
        ['name' => 'Desk'],
        ['name' => 'Table'],
    ]
*/
```
<a name="method-array-sort-recursive"></a>

### `Arr::sortRecursive()`

The `Arr::sortRecursive` method recursively sorts an array using the `sort` function for numeric sub=arrays and `ksort` for associative sub-arrays:
```php 
use FluentForm\Framework\Support\Arr;

$array = [
    ['Roman', 'Taylor', 'Li'],
    ['PHP', 'Ruby', 'JavaScript'],
    ['one' => 1, 'two' => 2, 'three' => 3],
];

$sorted = Arr::sortRecursive($array);

/*
    [
        ['JavaScript', 'PHP', 'Ruby'],
        ['one' => 1, 'three' => 3, 'two' => 2],
        ['Li', 'Roman', 'Taylor'],
    ]
*/
```

<a name="method-array-where"></a>

### `Arr::sortRecursiveDesc($array,
        $options = SORT_REGULAR,
        $desc = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1065)

Recursively sort an array by keys and values in Descending order.

---

### `Arr::startsLike($array, $pattern)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1393)

Return matching starting of items from array (similar to mysql's %LIKE)

---

### `Arr::toCssClasses($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1080)

Conditionally compile classes from an array into a CSS class list.

---

### `Arr::toObject($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1102)

Transforms an array to \stdClass

---

### `Arr::uasort($array, callable $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1005)

Sort an array with a user-defined comparison
function and maintain index association.

---

### `Arr::uksort($array, callable $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1018)

Sort an array by keys using a user-defined comparison function.

---

### `Arr::undot($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 144)

Convert a flatten "dot" notation array into an expanded array.

---

### `Arr::usort($array, callable $callback)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 991)

Sort an array by values using a user-defined comparison function.

---

### `Arr::where()`

The `Arr::where` method filters an array using the given Closure:
```php 
use FluentForm\Framework\Support\Arr;

$array = [100, '200', 300, '400', 500];

$filtered = Arr::where($array, function ($value, $key) {
    return is_string($value);
});

// [1 => '200', 3 => '400']
```

### `Arr::whereNotNull($array)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1125)

Filter items where the value is not null.

---

### `Arr::whereNotTrue($array, $strict = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1138)

Filter items where the value is not null.

---

### `Arr::wrap($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Arr.php` (line 1151)

If the given value is not an array and not null, wrap it in one.

---
