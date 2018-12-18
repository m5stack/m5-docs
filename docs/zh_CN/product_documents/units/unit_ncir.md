# NCIR - 单点红外检测Unit

<img src="assets/img/product_pics/units/M5GO_Unit_ncir.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_ncir_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.43.3a93425e5PQbBs&id=580005645359)**

## 描述

<mark>NCIR</mark>是一款可以测量人体体温和人体走动的Unit，它内置了MLX90641传感器。它与Thermal Unit的区别，主要是NCIR Unit做表面单点温度测量，而Thermal Unit做大面积范围的温度测量。

## 特性

-  高精度
-  测量温度范围: -70℃~382.2℃
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 应用

-  人体体温测量
-  物体(生物)移动检测

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [MLX90614](https://pdf1.alldatasheet.com/datasheet-pdf/view/218977/ETC2/MLX90614.html)

## 例程

<!-- ### 1. Arduino IDE

```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/NCIR/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/example_unit_ncir_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/example_unit_ncir_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/NCIR/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/units/ncir_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>