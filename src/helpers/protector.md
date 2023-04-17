# Protector Helper

- Class with Namespace: `\FluentForm\App\Helpers\Protector`
- Method Types: `static`

[[toc]]

<a name="method-protector-get-salt"></a>
### `Protector::getSalt()`

The `Protector::getSalt` method returns Fluent Forms encryption and decryption security salt.

```php 
    use FluentForm\App\Helpers\Protector;

    $ffSecuritySalt = Protector::getSalt();

    // security slot
```



<a name="method-protector-encrypt"></a>
### `Protector::encrypt()`

The `Protector::encrypt` method convert normal text to encryption text using a predefined salt and return encrypted text.

```php 
    use FluentForm\App\Helpers\Protector;

    $encryptedText = Protector::encrypt('sample text');

    // xfQuSDtj2ywFsN+alzijiAtT9oJwSjoPiqVLSA80pN73U630bsRbf/mGM7haaNWazIawwDV6Kp04BBWJlyb/oA==
```


<a name="method-protector-decrypt"></a>
### `Protector::decrypt()`

The `Protector::decrypt`  method convert encrypted text to normal text using a predefined salt and return decrypted text.

```php 
    use FluentForm\App\Helpers\Protector;

    $decryptedText = Protector::decrypt('xfQuSDtj2ywFsN+alzijiAtT9oJwSjoPiqVLSA80pN73U630bsRbf/mGM7haaNWazIawwDV6Kp04BBWJlyb/oA==');

    // sample text
```



