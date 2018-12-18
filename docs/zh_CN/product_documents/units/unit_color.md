# COLOR - 颜色传感器Unit

<img src="assets/img/product_pics/units/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.55.312f425eRDFbqp&id=580005441373)**

## 描述

Color是一个颜色传感器. 通过GROVE接口(I2C)与M5Core相连，能够识别物体表面颜色，它内置了颜色传感器芯片TCS3472.

## 特性

-  高精度
-  检测的适用温度范围: -70℃~382.2℃
-  Unit上配置两个乐高安装孔

## 应用

-  RGB LED背光灯控制
-  产品颜色验证

## 文档

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [TCS3472](https://pdf1.alldatasheet.com/datasheet-pdf/view/560511/AMSCO/TCS3472.html)

## 例程

<!-- ### 1. Arduino IDE

```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/COLOR_SENSOR/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/example_unit_color_sensor_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/example_unit_color_sensor_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/COLOR_SENSOR/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/units/color_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>COLOR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>