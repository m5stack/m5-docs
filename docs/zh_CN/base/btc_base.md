# Base BTC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A011</div>


<div class="product_pic"><img src="assets/img/product_pics/module/module_btc_01.png"><img src="assets/img/product_pics/module/module_btc_02.png">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

# 描述

**BTC** 是一款集成了"DHT12"的温湿度传感器底座，除了用作固定M5Core之外，运用其内置的温湿度传感器能够制作环境监测器或是一些与环境数据采集相关的应用.

**注意:**

* 兼容BTC底座的有 [BASIC](https://docs.m5stack.com/#/zh_CN/core/basic) 与 [GRAY](https://docs.m5stack.com/#/zh_CN/core/gray) 两款主控，当将USB线连接BTC底座，仅对M5Core的电路板进行供电，并不会为其内部的锂电池充电.只有将USB线连接至M5Core时，才会对M5Core电池充电且同时为电路板供电.

* 当M5Core连接至BTC底座后，将无法同时控制 ENV Unit.这是因为在 BTC 已经内置了DHT12传感器，两者将产生 I2C 地址冲突.

#  特性

-  内置DHT12

#  套件清单

-  Type-C USB
-  2x M3x16螺丝
-  六角扳手
-  BTC底座

<img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_btc_03.png" width="30%" height="30%">

#  管脚映射

**DHT12**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
 <tr><td>DHT12</td><td>SCL</td><td>GND</td><td>SDA</td><td>3V3</td></tr>
</table>

<img src="assets/img/product_pics/module/module_btc_dht12_pinmap.png">

## 相关链接

- **[DHT12 数据手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**

## 案例程序

### Arduino IDE

[请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino)获取完整代码

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/btc-standing-base';

   anchor_search(purchase_link);
   scrollFunc();

</script>