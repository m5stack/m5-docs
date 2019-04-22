# ENV - 温湿度和压力传感器 {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_env.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_env_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-1172588101.29.f64c4476tugBw5&id=578200145474)**

## 描述

**<mark>ENV</mark>** 是一款集成 **DHT12** ( 环境温湿度传感器 ) 和压强传感器 **BMP280** 的 Unit。使用这个 Unit 可以测量空气中的温度、湿度和气压大小。

该 Unit 与 M5Core 通过 Grove A 接口通信，DHT12 的 IIC 地址是 **0x5C**, BMP280 的 IIC 地址是 **0x76**。

## 特性

-  温度测量
    - 范围: -20 ~ 60 ℃
    - 精度: ±0.2 ℃
-  湿度测量
    - 范围: 20 ~ 95 %RH
    - 精度: 0.1 %
-  气压测量
    - 范围: 300 ~ 1100 hPa
    - 精度: ±1 hPa
-  GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
-  Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x ENV Unit
- 1x Grove 线

## 应用

- 气象站
- 储谷仓环境监控

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[BMP280 的库](https://github.com/adafruit/Adafruit_BMP280_Library)**

## 例程

### 1. Arduino IDE

这是ENV的例程，能读取温湿度值和气压值。可是在编译程序之前需要先安装库 `Adafruit BMP280 Library`，然后拷贝 `Adafruit_Sensor.h` 到 `Adafruit BMP280 Library` 的安装路径 `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library` 下。

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV)。*

```arduino
/*
    Install Adafruit BMP280 Library first.
*/
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include "Adafruit_Sensor.h"
#include <Adafruit_BMP280.h>

// new two objects
DHT12 dht12;
Adafruit_BMP280 bme;

// initialization
M5.begin();
Wire.begin();
bme.begin();

// read data
float tmp = dht12.readTemperature();
float hum = dht12.readHumidity();
float pressure = bme.readPressure();
```

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png">

## 原理图

<img src="assets/img/product_pics/unit/env_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core (GROVE 接口 A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV温湿度和压力传感器 Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
