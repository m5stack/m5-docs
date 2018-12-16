# ENV - 温湿度和压力传感器

<img src="assets/img/product_pics/units/M5GO_Unit_env.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_env_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-1172588101.29.f64c4476tugBw5&id=578200145474)**

## 描述

<mark>ENV</mark>是一款集成DHT12(环境温湿度传感器)和压强传感器BMP280的Unit，这个Unit连接了M5Core之后能很方便的读取环境中的温湿度值和大气压强。接M5Core的GROVE A口。

## 特性

-  温度测量
    - 范围: 20 ~ 60℃
    - 精度: ±0.2℃
-  湿度测量
    - 范围: 20 ~ 95℃
    - 精度: 0.1%
-  气压测量
    - 范围: 300 ~ 1100hPa
    - 精度: ±1hPa
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 例程

### 1. Arduino IDE

```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/ENV/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/example_unit_env_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/example_unit_env_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/ENV/UIFlow)。

## 原理图

<img src="assets/img/product_pics/units/env_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>