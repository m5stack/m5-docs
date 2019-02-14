# STEPMOTOR - 步进电机驱动模块 {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_stepmotor_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_03.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.61.501375f4xEgd84&id=572288296141)**

## 描述

<mark>StepMotor驱动模块</mark>内置了MEGA328P芯片，该MEGA328芯片烧录了<mark>GRBL</mark>固件，从而可以通过GRBL固件来稳定控制步进电机。该模块通过GROVE接口(I2C)与M5Core通信。I2C地址是0x70。

## 特性

-  9-24V电源输入
-  控制3路步进电机<mark>(X, Y, Z)</mark>
-  内置锂电池

## 包含

-  1x Step Motor模块
-  12V电源
-  1x 5V 风扇扇热模块

## 应用

-  DIY 3D 打印机
-  搭建机械臂

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[模块内MEGA328固件](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/stepmotor_module/tree/master/Example/Arduino)。*

<!-- ```adrduino
/*
    If Button A was pressed,
    stepmotor will rotate back and forth at a time
*/

#include <M5Stack.h>
#include <Wire.h>

#define STEPMOTOR_I2C_ADDR 0x70

void setup() {
  M5.begin();
  Wire.begin();
}

void loop() {
  if (digitalRead(39) == LOW)  // A button
  {
    while (digitalRead(39) == LOW) delay(1);
    // Protocol:
    //  G<n> X<distance>Y<distance>Z<distance> F<speed>
    SendCommand(STEPMOTOR_I2C_ADDR, "G1 X20Y20Z20 F500");
    SendCommand(STEPMOTOR_I2C_ADDR, "G1 X0Y0Z0 F400");
  }
  // Get Data from Module.
  Wire.requestFrom(STEPMOTOR_I2C_ADDR, 1);
  if (Wire.available() > 0) {
    int u = Wire.read();
    if (u != 0) Serial.write(u);
  }
  delay(1);
  // Send Data to Module.
  while (Serial.available() > 0) {
    int inByte = Serial.read();
    SendByte(STEPMOTOR_I2C_ADDR, inByte);
  }
}
``` -->

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

*具体例程请点击[这里](https://github.com/m5stack/stepmotor_module/tree/master/Example/UIFlow)。*

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.png">

## 原理图

<img src="assets/img/product_pics/module/stepmotor_sch.png">