# Unit COLOR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.55.312f425eRDFbqp&id=580005441373)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>COLOR</mark>** 是一款集成 **TCS3472** 芯片的颜色识别 Unit。

**识别颜色原理：**

在 TCS3472 中，内嵌了 3*4 阵列的滤波光电二极管和 16 位模拟转转换器。在 12 个光电二极管中，3个具有红色滤光片，3个具有绿色滤光片，3个具有蓝色滤光片，3个没有滤光片（透明）。

<img src="assets/img/product_pics/unit/color/unit_color_07.png">


检测物体颜色时，TCS3472 会返回四个通道数据 - 红色（R），绿色（G），蓝色（B）和清除（C）（未过滤）。红色，绿色和蓝色通道（RGB）的响应可用于确定特定光源的色度坐标（x，y）。

<img src="assets/img/product_pics/unit/color/unit_color_04.png">

色度计算过程概述：

<img src="assets/img/product_pics/unit/color/unit_color_05.png">

最终得到色度坐标（x，y），之后参考下图，以获得推荐的颜色。

<img src="assets/img/product_pics/unit/color/unit_color_06.png">


该 Unit 与 M5Core 通过 GROVE A 接口 ( IIC ) 通信，其 I2C 地址是 0x29 。


## 特性

-
- 工作温度范围: -40℃~85℃
-  GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
-  Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x COLOR Unit
- 1x Grove 线

## 应用

- 产品颜色验证
- 颜色追踪机器人

## 文档

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [TCS3472](https://ams.com/documents/20143/36005/TCS3472_DS000390_2-00.pdf)

## 例程

### 1. Arduino IDE

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/Arduino)。*

```arduino
/*
  Color test
    hardware: M5Stack

  please install the Adfruit TCS34725 library first ...
*/
#include <Wire.h>
#include <M5Stack.h>
#include "Adafruit_TCS34725.h"

// declaration
uint16_t clear, red, green, blue;
#define commonAnode true // set to false if using a common cathode LED

// new a object
Adafruit_TCS34725 tcs;
tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,TCS34725_GAIN_4X);

// initialization
M5.begin(true, false, false);
tcs.begin();
tcs.setIntegrationTime(TCS34725_INTEGRATIONTIME_154MS);
tcs.setGain(TCS34725_GAIN_4X);

// read data
tcs.getRawData(&red, &green, &blue, &clear);
```

烧录了例程后，串口显示终端会打印原始值，包括明光感应值(Clear)、红、绿、蓝(RGB)

下图是感应红色的输出结果

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.png">

## 原理图

<img src="assets/img/product_pics/unit/color_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core ( GROVE 接口 A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>颜色传感器 Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**COLOR 案例 - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/Color%20Unit.mp4" type="video/mp4">
</video>
