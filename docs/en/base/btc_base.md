# Base BTC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A011</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_btc_01.webp"><img src="assets/img/product_pics/module/module_btc_02.webp"></div>

##  Description

**BTC** is a M5 base that allows you sit your M5 core instead of laying them down or hang on the wall. BTC is not just a sit for holding the M5 core but also comes with serveral features like temperature and humiluty detection(by DHT12), and charging base.

**Note:**

* Although M5Core [BASIC](https://docs.m5stack.com/#/en/core/basic) or [GRAY](https://docs.m5stack.com/#/en/core/gray) can be attached to this base, but BTC can not charge them. Actually, our Cores, as we know, are built in chargin chip (IP5306). After plugged a USB cable in, the Core was charging without any charger.

* Once M5Core has been attached to BTC, it can not controll ENV Unit at this time. Because BTC has been built in DHT12 sensor which will cause IIC address conflict.

### Product Features

-  DHT12 inside

#  Include

-  Type-C USB Cable
-  M3 x 16
-  Tools
-  BTC Base

<img src="assets/img/product_pics/module/module_btc_04.webp" width="30%" height="30%"><img src="assets/img/product_pics/module/module_btc_03.webp" width="30%" height="30%">

#  PinMap

**DHT12**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
 <tr><td>DHT12</td><td>SCL</td><td>GND</td><td>SDA</td><td>3V3</td></tr>
</table>

<img src="assets/img/product_pics/module/module_btc_dht12_pinmap.webp">


#  Related Link

- [DHT12 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)

## Example

### Arduino IDE

- To get the code `BTC.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/btc-standing-base';

   anchor_search(purchase_link);
   scrollFunc();

</script>