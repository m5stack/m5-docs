# ANGLE - 角度传感器Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_angle_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.40.312f425eRDFbqp&id=578201949805)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.40.312f425eRDFbqp&id=578201949805)** -->

## 描述

ANGLE是一个电位器Unit，通过这个Unit可以检测手动旋转的角度.

## 特性

-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino)。*

```arduino
#include <M5Stack.h>

// select the input pin for the potentiometer
#define sensorPin 36

// declaration
int cur_sensorValue = 0;

// initialization
M5.begin();
pinMode(sensorPin, INPUT);

// read data
cur_sensorValue = analogRead(sensorPin);
```

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_02.png" width="69%" height="69%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow)。

<!-- ## 原理图 -->

<!-- <img src="assets/img/product_pics/unit/angle_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>角度传感器Unit</td><td>传感器引脚</td><td> </td><td>5V</td><td>GND</td></tr>
</table>