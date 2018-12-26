# RGB - 三色灯Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rgb_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.78.159c425eoqBTTY&id=578321806638)**

## 描述

<mark>RGB</mark>是一款集成3颗RGB Led的Unit，可以方便显示多彩颜色。一个Unit分别有IN口和OUT口，所以多个Unit可以通过GRVE线串联起来。

## 特性

-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

<!-- ### 1. Arduino IDE

```arduino
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/example_unit_rgb_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_rgb_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/unit/rgb_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>