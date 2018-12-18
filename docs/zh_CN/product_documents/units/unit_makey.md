# MAKEY

<img src="assets/img/product_pics/units/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_makey_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.51.159c425eoqBTTY&id=577636777112)**

## 描述

<mark>MAKEY</mark>是一款自带16引脚的Makey Unit，不过比市面上的Makey模块更容易编程，因为该Unit内置了MEGA328芯片来处理触摸引脚产生的信号。该Unit同样也是与M5Core相连之后，通过PORT A(I2C)控制，其I2C地址是0x51。

## 特性

-  内置Mega328p芯片，蜂鸣器，RGBLed
<!-- -  16 Keys Fruit Piano(PD0-7 & PB0-5), 1 NeoPixel pin(PC2) and 1 Buzzer pin(PC3) -->
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 应用

-  水果键盘

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

<!-- ### 1. Arduino IDE

```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/MAKEY/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/example_unit_makey_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/example_unit_makey_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/MAKEY/UIFlow)。 -->

## 原理图

<!-- <img src="assets/img/product_pics/units/makey_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>