# NETMASTER WIFI SWITCH - Enable / Disable

## Bu bot ne işe yarar?

Bu bot kablosuz **WIFI** ayarınızı açıp kapatmanıza yarar.

#

## Botu kullanmak için:

Proje dizinindeki **kütüphaneleri** yükleyin:

#

### `npm install`

#

main.js dosyasının içerisindeki **username** / **password** değişkenini kendi modem panelinizin kullanıcı adı ve şifresi ile değiştirin. Ayrıca Varsayılan Ağ Geçidini kontrol edip farklı ise değiştirin. Varsayılan Ağ geçidini öğrenmek için **komut satırına** `ipconfig` yazabilirsiniz.

```
   Default Gateway . . . . . . . . . : 192.168.0.1
```

```javascript
/*   

Varsayılan Kullanıcı Adı: admin
Varsayılan Parola: password
Varsayılan Modem Adresi: 192.168.0.1

 */

// Buradan değiştirebilirsiniz
const username = "admin";
const password = "password";
const modem_url = "http://192.168.0.1";
```

#

## Botu Çalıştırmak için:

Proje dizininde bir **komut satırı açın** ve şu komutu girin:

### `node main.js`

#

```
<====== PAGE LOADED ======>
<====== LOGIN SUCCESFULL ======>
<====== WIFI PAGE LOADED ======>

<====== WIFI DISABLED ======>

<====== CLOSING THE BOT ======>
```

#

```
<====== PAGE LOADED ======>
<====== LOGIN SUCCESFULL ======>
<====== WIFI PAGE LOADED ======>

<====== WIFI ENABLED ======>

<====== CLOSING THE BOT ======>
```
