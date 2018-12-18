# EARTH - 土壤湿度传感Unit

<img src="assets/img/product_pics/units/M5GO_Unit_earth.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_earth_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.67.3a93425e5PQbBs&id=576995412485)**

## 描述

<mark>EARTH</mark>实际上是一款用于测量土壤湿度、水果含水量等固态物体的含水量的Unit。被测物体不同的含水量(湿度)，导致Unit返回的电阻值不同，从而能判断被测物体的含水量。

Unit可以输出0/1的数字信号，也可以直接输出被测物体反映的模拟量，可以调节Unit上的电位器来改变测量阈值。

## 特性

-  可调节测量阈值(通过改变Unit上的10K可调电阻)
-  数字或模拟信号输出
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

<!-- ```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/EARTH/Arduino)。 -->

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/EARTH/example_unit_earth_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/EARTH/example_unit_earth_02.png" width="69%" height="69%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/EARTH/UIFlow)。

## 原理图

<img src="assets/img/product_pics/units/earth_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>