# Module STEPMOTOR {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_stepmotor_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_03.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.61.501375f4xEgd84&id=572288296141)**

## 描述

**STEPMOTOR** 是M5Stack堆叠模块系列中的一款，步进电机驱动模块.该模块能够通过 **GRBL** 库同时驱动3个步进电机.因此非常适合应用在运动控制项目.

模块内置MEGA328P，并且搭载**GRBL**固件,通过I2C（0x70）与M5Core通信.

集成 3 片由 DRV8825 芯片组成的步进电机驱动板，一个简单但非常强大的电路板，可以控制一个双极步进电机，并允许微步进高达1/32步。

## 产品特性

-  电源输入：9-24V
-  控制3路步进电机 **(X, Y, Z)**

## 包含

-  1x Step Motor 模块
-  1x 12V 电源 (选配)
-  1x 5V FAN 模块，用于散热 (选配)

## 应用

-  DIY 3D 打印机
-  搭建机械臂

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[STEPMOTOR 固件](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/stepmotor_module/tree/master/Example/Arduino).*

```adrduino
/*
    If Button A was pressed,
    stepmotor will rotate back and forth at a time
*/

#include <M5Stack.h>
#include <Wire.h>

#define STEPMOTOR_I2C_ADDR 0x70

// initialization
M5.begin();
Wire.begin();

// Controlling Protocol:
//  G<n> X<distance>Y<distance>Z<distance> F<speed>
SendCommand(STEPMOTOR_I2C_ADDR, "G1 X20Y20Z20 F500");
SendCommand(STEPMOTOR_I2C_ADDR, "G1 X0Y0Z0 F400");

// Get Data from Module.
Wire.requestFrom(STEPMOTOR_I2C_ADDR, 1);
if (Wire.available() > 0) {
  int u = Wire.read();
  if (u != 0) Serial.write(u);
}

// Send Data to Module.
while (Serial.available() > 0) {
  int inByte = Serial.read();
  SendByte(STEPMOTOR_I2C_ADDR, inByte);
}
```

```adrduino
/*
    If Button A was pressed,
    stepmotor will rotate back and forth at a time
*/

#include <M5Stack.h>
#include <Wire.h>

#define STEPMOTOR_I2C_ADDR 0x70

// initialization
M5.begin();
Wire.begin();

// Controlling Protocol:
//  G<n> X<distance>Y<distance>Z<distance> F<speed>
SendCommand(STEPMOTOR_I2C_ADDR, "G1 X20Y20Z20 F500");
SendCommand(STEPMOTOR_I2C_ADDR, "G1 X0Y0Z0 F400");

// Get Data from Module.
Wire.requestFrom(STEPMOTOR_I2C_ADDR, 1);
if (Wire.available() > 0) {
  int u = Wire.read();
  if (u != 0) Serial.write(u);
}

// Send Data to Module.
while (Serial.available() > 0) {
  int inByte = Serial.read();
  SendByte(STEPMOTOR_I2C_ADDR, inByte);
}
```

### 2. UIFlow

想要探索最简单的 Step motor 编程驱动方式吗？快试试Blockly编程平台[UIFlow](flow.m5stack.com).

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Module/STEPMOTOR/UIFlow).*

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.png">

## 原理图

<img src="assets/img/product_pics/module/stepmotor_sch.png">