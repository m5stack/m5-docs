# HEART - 血氧心率传感器

<img src="assets/img/product_pics/units/unit_heart_01.jpg" width="30%" height="30%">
<img src="assets/img/product_pics/units/unit_heart_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**|🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.7a46425eWmFRNi&id=583999638264)**

<!-- :electric_plug:**[原理图](#原理图)** |:octocat:**[例程](#例程)**| -->

## 描述

<mark>HEART</mark>是一款能够非侵入式检测血氧和心率的Unit，集成MAX30110 pulse oximeter模块，其原理是通过红外led灯照射，检测红血球携带氧气和非携带氧气情况数量变化情况，能够得到心率的ADC值，包含两个发光二极管和一个光检测器。unit接入M5Core的GROVE A口之后，只需要将手指紧贴在unit的MAX30110模块上，即可读出生理信息。

## 特性

<!-- -  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程 -->
-  Unit内置两个Lego插件孔，方便与Lego件结合

<!-- ## 例程

```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/ENV)。 -->

<!-- ## 原理图

<img src="assets/img/product_pics/units/env_sch.jpg"> -->

<!-- ### 管脚映射

<table>
 <tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td></tr>
 <tr><td>GPS Unit</td><td>TXD</td><td>RXD</td></tr>
</table> -->

## 相关链接

- [MAX30100](https://datasheets.maximintegrated.com/en/ds/MAX30110.pdf)
