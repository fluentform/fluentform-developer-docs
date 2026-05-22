# String Helper aka Str

- Class with Namespace: `\FluentForm\Framework\Support\Str`
- Method Types: `static`

[[toc]]

<a name="method-camel-case"></a>

### `preg_replace_array()`

The `preg_replace_array` function replaces a given pattern in the string sequentially using an array:

```php 
    $string = 'The event will take place between :start and :end';

    $replaced = preg_replace_array('/:[a-z_]+/', ['8:30', '9:00'], $string);

    // The event will take place between 8:30 and 9:00
```

<a name="method-snake-case"></a>

### `Str::acronym($string, $delimiter = '')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 56)

Makes an acronum from a string of words

---

### `Str::after()`

The `Str::after` method returns everything after the given value in a string:

```php 
    use FluentForm\Framework\Support\Str;

    $slice = Str::after('This is my name', 'This is');

    // ' my name'
```

<a name="method-str-before"></a>

### `Str::afterLast($subject, $search)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 92)

Return the remainder of a string after the last occurrence of a given value.

---

### `Str::apa($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1359)

Convert the given string to APA-style title case.
See: https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case

---

### `Str::ascii($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 114)

Transliterate a UTF-8 value to ASCII.

---

### `Str::before()`

The `Str::before` method returns everything before the given value in a string:
```php 
    use FluentForm\Framework\Support\Str;

    $slice = Str::before('This is my name', 'my name');

    // 'This is '
```

<a name="method-str-contains"></a>

### `Str::beforeLast($subject, $search)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 275)

Get the portion of a string before the last occurrence of a given value.

---

### `Str::between($subject, $from, $to)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 298)

Get the portion of a string between two given values.

---

### `Str::betweenFirst($subject, $from, $to)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 315)

Get the smallest possible portion of a string between two given values.

---

### `Str::camel()`

The `Str::camel` method converts the given string to `camelCase`:

```php 
    use FluentForm\Framework\Support\Str;

    $converted = Str::camel('foo_bar');

    // fooBar
```

<a name="method-ends-with"></a>

### `Str::charAt($subject, $index)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 346)

Get the character at the specified index.

---

### `Str::chopEnd($subject, $needle)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 382)

Remove the given string(s) if it exists at the end of the haystack.

---

### `Str::chopStart($subject, $needle)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 364)

Remove the given string(s) if it exists at the start of the haystack.

---

### `Str::contains()`

The `Str::contains` method determines if the given string contains the given value (case sensitive):

```php 
    use FluentForm\Framework\Support\Str;

    $contains = Str::contains('This is my name', 'my');

    // true
```

You may also pass an array of values to determine if the given string contains any of the values:

```php 
    use FluentForm\Framework\Support\Str;

    $contains = Str::contains('This is my name', ['my', 'foo']);

    // true
```

<a name="method-str-finish"></a>

### `Str::containsAll($haystack, $needles, $ignoreCase = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 432)

Determine if a given string contains all array values.

---

### `Str::deduplicate(string $string, string $character = ' ')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 451)

Replace consecutive instances of a given character
with a single character in the given string.

---

### `Str::endsWith()`

The `Str::endsWith` method determines if the given string ends with the given value:

```php 
    use FluentForm\Framework\Support\Str;

    $result = Str::endsWith('This is my name', 'name');

    // true
```

<a name="method-kebab-case"></a>

### `Str::finish()`

The `Str::finish` method adds a single instance of the given value to a string if it does not already end with the value:

```php 
    use FluentForm\Framework\Support\Str;

    $adjusted = Str::finish('this/string', '/');

    // this/string/

    $adjusted = Str::finish('this/string/', '/');

    // this/string/
```

<a name="method-str-is"></a>

### `Str::flushCache()`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1818)

Remove all strings from the casing caches.

---

### `Str::fromBase64($string, $strict = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1694)

Decode the given Base64 encoded string.

---

### `Str::headline($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1338)

Convert the given string to title case for each word.

---

### `Str::incrementBySlug($slug = '')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1806)

Generate a deterministic unique id by a prefix.

---

### `Str::incrementCounter($prefix = '')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1795)

Increment a counter.

---

### `Str::is()`

The `Str::is` method determines if a given string matches a given pattern. Asterisks may be used to indicate wildcards:

```php 
    use FluentForm\Framework\Support\Str;

    $matches = Str::is('foo*', 'foobar');

    // true

    $matches = Str::is('baz*', 'foobar');

    // false
```

<a name="method-str-limit"></a>

### `Str::isAscii($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 571)

Determine if a given string is 7 bit ASCII.

---

### `Str::isCapital($str)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 602)

Checks if the first character is in capital form.

---

### `Str::isCapitalized($str, $onlyFirst = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 582)

Checks if the word(s) are in capitalized form.

---

### `Str::isJson($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 677)

Determine if a given value is valid JSON.

---

### `Str::isLower($str)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 624)

Checks if the chracters are in lower case

---

### `Str::isMatch($pattern, $value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 902)

Determine if a given string matches a given pattern.

---

### `Str::isSimilar($str1, $str2, $accuracy = 60)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 649)

Checks if two words are similar

---

### `Str::isUpper($str)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 613)

Checks if the chracters are in upper case

---

### `Str::isUrl($value, array $protocols = [])`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 699)

Determine if a given value is a valid URL.

---

### `Str::isUuid($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 741)

Determine if a given string is a valid UUID.

---

### `Str::kebab()`

The `Str::kebab` method converts the given string to `kebab-case`:

```php 
    use FluentForm\Framework\Support\Str;

    $converted = Str::kebab('fooBar');

    // foo-bar
```

<a name="method-preg-replace-array"></a>

### `Str::lcfirst($string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1705)

Make a string's first character lowercase.

---

### `Str::length($value, $encoding = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 764)

Return the length of the given string.

---

### `Str::limit()`

The `Str::limit` method truncates the given string at the specified length:

```php 
    use FluentForm\Framework\Support\Str;

    $truncated = Str::limit('The quick brown fox jumps over the lazy dog', 20);

    // The quick brown fox...
```

You may also pass a third argument to change the string that will be appended to the end:

```php 
    use FluentForm\Framework\Support\Str;

    $truncated = Str::limit('The quick brown fox jumps over the lazy dog', 20, ' (...)');

    // The quick brown fox (...)
```

<a name="method-str-ordered-uuid"></a>

### `Str::lower($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 811)

Convert the given string to lower-case.

---

### `Str::ltrim(string $value, ?string $charlist = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1508)

Remove all whitespace (including special Unicode spaces) from the beginning of a string.

---

### `Str::mask($string, $character, $index, $length = null, $encoding = 'UTF-8')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 845)

Masks a portion of a string with a repeated character.

---

### `Str::match($pattern, $subject)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 884)

Get the string matching the given pattern.

---

### `Str::matchAll($pattern, $subject)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 928)

Get the string matching the given pattern.

---

### `Str::of($string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 44)

Get a new stringable object from the given string.

---

### `Str::orderedUuid()`

The `Str::orderedUuid` method generates a "timestamp first" UUID that may be efficiently stored in an indexed database column:

```php 
    use FluentForm\Framework\Support\Str;

    return (string) Str::orderedUuid();
```

<a name="method-str-plural"></a>

### `Str::padBoth($value, $length, $pad = ' ')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 947)

Pad both sides of a string with another.

---

### `Str::padLeft($value, $length, $pad = ' ')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 960)

Pad the left side of a string with another.

---

### `Str::padRight($value, $length, $pad = ' ')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 973)

Pad the right side of a string with another.

---

### `Str::parseCallback($callback, $default = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 985)

Parse a Class[@]method style callback into class and method.

---

### `Str::parseFloat($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1009)

Parse a floasting point number from a string.

---

### `Str::parseInt($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 996)

Parse an integer from a string.

---

### `Str::parseNumber($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1022)

Remove all non-numeric characters from a string.

---

### `Str::pascal($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1592)

Convert a value to Pascal case.

---

### `Str::plural()`

The `Str::plural` method converts a string to its plural form. This function currently only supports the English language:

```php 
    use FluentForm\Framework\Support\Str;

    $plural = Str::plural('car');

    // cars

    $plural = Str::plural('child');

    // children
```

You may provide an integer as a second argument to the function to retrieve the singular or plural form of the string:

```php 
    use FluentForm\Framework\Support\Str;

    $plural = Str::plural('child', 2);

    // children

    $plural = Str::plural('child', 1);

    // child
```

<a name="method-str-random"></a>

### `Str::pluralStudly($value, $count = 2)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1046)

Pluralize the last word of an English, studly caps case string.

---

### `Str::position($haystack, $needle, $offset = 0, $encoding = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1065)

Find the multi-byte safe position of the first
occurrence of a given substring in a string.

---

### `Str::random()`

The `Str::random` method generates a random string of the specified length. This function uses PHP's `random_bytes` function:

```php 
    use FluentForm\Framework\Support\Str;

    $random = Str::random(40);
```

<a name="method-str-replace-array"></a>

### `Str::remove($search, $subject, $caseSensitive = true)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1276)

Remove any occurrence of the given string in the subject.

---

### `Str::repeat(string $string, int $times)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1104)

Repeat the given string.

---

### `Str::replace($search, $replace, $subject, $caseSensitive = true)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1139)

Replace the given value in the given string.

---

### `Str::replaceArray()`

The `Str::replaceArray` method replaces a given value in the string sequentially using an array:

```php 
    use FluentForm\Framework\Support\Str;

    $string = 'The event will take place between ? and ?';

    $replaced = Str::replaceArray('?', ['8:30', '9:00'], $string);

    // The event will take place between 8:30 and 9:00
```

<a name="method-str-replace-first"></a>

### `Str::replaceEnd($search, $replace, $subject)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1235)

Replace the last occurrence of a given value if it appears at the end of the string.

---

### `Str::replaceFirst()`

The `Str::replaceFirst` method replaces the first occurrence of a given value in a string:

```php 
    use FluentForm\Framework\Support\Str;

    $replaced = Str::replaceFirst('the', 'a', 'the quick brown fox jumps over the lazy dog');

    // a quick brown fox jumps over the lazy dog
```

<a name="method-str-replace-last"></a>

### `Str::replaceLast()`

The `Str::replaceLast` method replaces the last occurrence of a given value in a string:

```php 
    use FluentForm\Framework\Support\Str;

    $replaced = Str::replaceLast('the', 'a', 'the quick brown fox jumps over the lazy dog');

    // the quick brown fox jumps over a lazy dog
```

<a name="method-str-singular"></a>

### `Str::replaceMatches($pattern, $replace, $subject, $limit = -1)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1259)

Replace the patterns matching the given regular expression.

---

### `Str::replaceStart($search, $replace, $subject)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1189)

Replace the first occurrence of the given value if it appears at the start of the string.

---

### `Str::reverse(string $value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1291)

Reverse the given string.

---

### `Str::rtrim(string $value, ?string $charlist = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1521)

Remove all whitespace (including special Unicode spaces) from the end of a string.

---

### `Str::similarityOf($str1, $str2)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 664)

Checks if two words are similar

---

### `Str::singular()`

The `Str::singular` method converts a string to its singular form. This function currently only supports the English language:

```php 
    use FluentForm\Framework\Support\Str;

    $singular = Str::singular('cars');

    // car

    $singular = Str::singular('children');

    // child
```

<a name="method-str-slug"></a>

### `Str::slug()`

The `Str::slug` method generates a URL friendly "slug" from the given string:

```php 
    use FluentForm\Framework\Support\Str;

    $slug = Str::slug('Laravel 5 Framework', '-');

    // laravel-5-framework
```

<a name="method-str-start"></a>

### `Str::snake()`

The `Str::snake` method converts the given string to `snake_case`:

```php 
    use FluentForm\Framework\Support\Str;

    $converted = Str::snake('fooBar');

    // foo_bar
```

<a name="method-starts-with"></a>

### `Str::soundsAlike($str1, $str2)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 636)

Checks if two words sounds alike

---

### `Str::squish($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1532)

Remove all "extra" blank space from the given string.

---

### `Str::start()`

The `Str::start` method adds a single instance of the given value to a string if it does not already start with the value:

```php 
    use FluentForm\Framework\Support\Str;

    $adjusted = Str::start('this/string', '/');

    // /this/string

    $adjusted = Str::start('/this/string', '/');

    // /this/string
```

<a name="method-studly-case"></a>

### `Str::startsWith()`

The `Str::startsWith` method determines if the given string begins with the given value:

```php 
    use FluentForm\Framework\Support\Str;

    $result = Str::startsWith('This is my name', 'This');

    // true
```

<a name="method-str-after"></a>

### `Str::studly()`

The `Str::studly` method converts the given string to `StudlyCase`:

```php 
    use FluentForm\Framework\Support\Str;

    $converted = Str::studly('foo_bar');

    // FooBar
```

<a name="method-title-case"></a>

### `Str::substr($string, $start, $length = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1605)

Returns the portion of the string specified by the start and length parameters.

---

### `Str::substrCount($haystack, $needle, $offset = 0, $length = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1619)

Returns the number of substring occurrences.

---

### `Str::substrReplace($string, $replace, $offset = 0, $length = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1638)

Replace text within a portion of a string.

---

### `Str::swap(array $map, $subject)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1655)

Swap multiple keywords in a string with other keywords.

---

### `Str::take($string, int $limit)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1667)

Take the first or last {$limit} characters of a string.

---

### `Str::title()`

The `Str::title` method converts the given string to `Title Case`:

```php 
    use FluentForm\Framework\Support\Str;

    $converted = Str::title('a nice title uses the correct case');

    // A Nice Title Uses The Correct Case
```

If the specified translation key does not exist, the `trans` function will return the given key. So, using the example above, the `trans` function would return `messages.welcome` if the translation key does not exist.

<a name="method-str-uuid"></a>

### `Str::toBase64($string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1682)

Convert the given string to Base64 encoding.

---

### `Str::toBool($str)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 547)

Converts a non-boolean value to boolean

---

### `Str::transliterate($string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 239)

Transliterate a string to its closest ASCII representation.

---

### `Str::trim(string $value, ?string $charlist = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1495)

Remove all whitespace (including special Unicode spaces) from both ends of a string.

---

### `Str::ucfirst($string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1718)

Make a string's first character uppercase.

---

### `Str::ucsplit($string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1731)

Split a string into pieces by uppercase characters.

---

### `Str::upper($value)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1316)

Convert the given string to upper-case.

---

### `Str::uuid()`

The `Str::uuid` method generates a UUID (version 4):

```php 
    use FluentForm\Framework\Support\Str;

    return (string) Str::uuid();
```

### `Str::wordCount(string $string)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1742)

Count the number of words in a UTF-8 string.

---

### `Str::words($value, $words = 100, $end = '...')`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 824)

Limit the number of words in a string.

---

### `Str::wordWrap($string,
        $characters = 75,
        $break = "\n",
        $cutLongWords = false)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1758)

Wrap a string to a given number of characters.

---

### `Str::wrap($value, $before, $after = null)`

**Source:** `vendor/wpfluent/framework/src/WPFluent/Support/Str.php` (line 1776)

Wrap the string with the given strings.

---
