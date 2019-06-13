# Unit BUTTON {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.49.3a93425e5PQbBs&id=577636117298)**

## 描述

**BUTTON** 是一个单按键 Unit，通过检测输入引脚高/低电平变化，进而判断按键状态.

**如下图所示:**

<img src="assets/img/product_pics/unit/button/unit_button_02.png">

**输出状态:**

<img src="assets/img/product_pics/unit/button/unit_button_03.png">

该 Unit 通过GROVE B端口与M5Core进行通信.

## 产品特性

- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x BUTTON Unit
- 1x Grove 线

## 应用

- 灯座开关
- 远程控制开关

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### Mini Burner

>1.Mini Burner是一个简洁快速的程序烧录器，每一个产品页面里的Mini Burner都提供了一个与产品相关的案例程序.
[点击此处下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_Button.exe)

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.Mini Burner烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
int cur_value = 0;

// initialization
M5.begin();// init
pinMode(36, INPUT);// BUTTON Pin

// read data
cur_value = digitalRead(36);// read the value of BUTTON
M5.update();
```

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.png">

## 原理图

<img src="assets/img/product_pics/unit/button_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>Btn (GPIO36)</td><td>NC (GPIO26)</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>BUTTON Pin</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>