# THERMAL - 人体红外成像Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_thermal_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.70.3a93425e5PQbBs&id=576966170317)**

## 描述

<mark>Thermal</mark>是一款内置热电堆传感器(一种热释红外传感器，型号MLX90640)的Unit，可以用了测量物体表面温度，并由各个表面温度不同组成的温度梯度而形成热成像图。MLX90640的像素是32x64。

该Unit同样与M5Core通过PORT A(I2C)接口通信。

使用该Unit可以方便的测量各个物体表面温度(正常误差±1.5°C)


## 特性

-  32x24像素
-  目标温度：-40°C ÷ 300°C
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 应用

-  高精度的非接触性测温器
-  生物移动检测
-  可视化红外成像

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [MLX90640](http://www.alldatasheet.com/datasheet-pdf/pdf/884988/MELEXIS/MLX90640.html)

## 例程

<!-- ### 1. Arduino IDE

```arduino
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/example_unit_thermal_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_thermal_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>