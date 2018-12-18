# RELAY - 继电器Unit

<img src="assets/img/product_pics/units/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_relay_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.55.3a93425e5PQbBs&id=577469172757)**

## 描述

<mark>RELAY</mark>是一款继电器Unit，通过该Unit可以安全地用弱电控制强电，用M5Core或者手机来控制家里的电视、空调、冰箱等大功率电器。控制直流电的话，最大控制30V，3A；控制交流的话，最大控制220V，3A。


## 特性
-  DC: 3A @ 30V; AC: 3A @ 220V
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

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

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/RELAY/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/example_unit_relay_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/example_unit_relay_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/RELAY/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/units/relay_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>