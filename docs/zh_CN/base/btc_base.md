# Base BTC

<el-tag effect="plain">SKU:A011-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_btc_01.webp"><img src="assets/img/product_pics/module/module_btc_02.webp"></div>

## 描述

**BTC** 是一款集成了"SHT30"的温湿度传感器底座，除了用作固定M5Core之外，运用其内置的温湿度传感器能够制作环境监测器或是一些与环境数据采集相关的应用.

**注意:**

* 兼容BTC底座的有 [BASIC](https://docs.m5stack.com/#/zh_CN/core/basic) 与 [GRAY](https://docs.m5stack.com/#/zh_CN/core/gray) 两款主控，当将USB线连接BTC底座，仅对M5Core的电路板进行供电，并不会为其内部的锂电池充电.只有将USB线连接至M5Core时，才会对M5Core电池充电且同时为电路板供电.

* 当M5Core连接至BTC底座后，将无法同时控制 ENV Unit.这是因为在 BTC 已经内置了SHT30传感器，两者将产生 I2C 地址冲突.

##  产品特性

-  内置SHT30

##  包含

-  Type-C USB
-  2x M3x16螺丝
-  六角扳手
-  BTC底座

<img src="assets/img/product_pics/module/module_btc_04.webp" width="30%" height="30%">

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>59g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*45*20mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

##  管脚映射

**SHT30**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
 <tr><td>SHT30</td><td>SCL</td><td>GND</td><td>SDA</td><td>3V3</td></tr>
</table>

## 相关链接

- [DHT12 datashee](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)

- [SHT30 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)

## 案例程序

### Arduino IDE

[BTC2.1 & SHT30 Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino/BTC2.1)

[BTC & DHT12 Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino/BTC)



## 版本变更

<table>
   <thead>
      <tr> 
         <th>上市日期</th>
         <th>产品变动</th>
         <th>备注：</th>
      </tr>
   </thead>    
   <tbody>
      <tr>
         <td>2017.7</td>
         <td>首次发售</td>
         <td>/</td>
      </tr>
      <tr>
         <td>2020.5</td>
         <td>DHT12修改为SHT30</td>
         <td>/</td>
      </tr>
   <tbody>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/btc-standing-base';

   anchor_search(purchase_link);
   scrollFunc();

</script>