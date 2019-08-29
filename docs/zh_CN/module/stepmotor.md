# Module STEPMOTOR {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_stepmotor_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_03.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-module/products/step-motor-module-adapter-fan-module)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

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
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：23.5g

## 应用

-  DIY 3D 打印机
-  搭建机械臂

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[STEPMOTOR 固件](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

- **[DRV8825 数据手册](https://www.pololu.com/file/0J590/drv8825.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_STEPMOTOR.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">


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

### 2. UIFlow

想要探索最简单的 Step motor 编程驱动方式吗？快试试Blockly编程平台[UIFlow](flow.m5stack.com).

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Module/STEPMOTOR/UIFlow).*

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.png">

## 原理图

<img src="assets/img/product_pics/module/stepmotor_sch.png">