# Base BTC

<el-tag effect="plain">SKU:A011-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_btc_01.webp"><img src="assets/img/product_pics/module/module_btc_02.webp"></div>

##  Description

**BTC** is a M5 base that allows you sit your M5 core instead of laying them down or hang on the wall. BTC is not just a sit for holding the M5 core but also comes with serveral features like temperature and humiluty detection(by SHT30), and charging base.

**Note:**

* Although M5Core [BASIC](https://docs.m5stack.com/#/en/core/basic) or [GRAY](https://docs.m5stack.com/#/en/core/gray) can be attached to this base, but BTC can not charge them. Actually, our Cores, as we know, are built in chargin chip (IP5306). After plugged a USB cable in, the Core was charging without any charger.

* Once M5Core has been attached to BTC, it can not controll ENV Unit at this time. Because BTC has been built in SHT30 sensor which will cause IIC address conflict.

## Product Features

-  SHT30 inside

## Include

-  Type-C USB Cable
-  M3 x 16
-  Tools
-  BTC Base

<img src="assets/img/product_pics/module/module_btc_04.webp" width="30%" height="30%">

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>59g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*45*20mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## PinMap

**SHT30**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
 <tr><td>SHT30</td><td>SCL</td><td>GND</td><td>SDA</td><td>3V3</td></tr>
</table>


## Related Link

- [DHT12 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)

- [SHT30 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)

## Example

### Arduino IDE

[BTC2.1 & SHT30 Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino/BTC2.1)

[BTC & DHT12 Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino/BTC)

## Version Change

<table>
   <thead>
      <tr> 
         <th>Release Date</th>
         <th>Product Change</th>
         <th>Note:</th>
      </tr>
   </thead>    
   <tbody>
      <tr>
         <td>2017.7</td>
         <td>Initial public release</td>
         <td>/</td>
      </tr>
      <tr>
         <td>2020.5</td>
         <td>DHT12 changed to SHT30</td>
         <td>/</td>
      </tr>
   <tbody>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/btc-standing-base';

   anchor_search(purchase_link);
   scrollFunc();

</script>