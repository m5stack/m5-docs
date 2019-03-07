# PLUS模块 {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_plus_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_plus_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.6e32425el3pHvc&id=579821616764)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

<mark>Plus</mark>是一个增强型模块，内置了500mAh的电池、齿轮电位器(encoder)、IR发送器、麦克风焊盘、PORT B(GPIO Port)和PORT C(UART Port)。你可以把它与M5Core堆叠在一起，增强M5Core的功能，Plus模块与M5Core通过I2C通信。I2C地址是0x62。

## 特性

-  500mAh锂电池
-  可编程的齿轮电位器，可以前后旋动和单击
-  支持红外发送
-  包含PORT B和PORT C

## 包含

-  1x PLUS模块

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[模块内MEGA328固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/firmware_328p)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程`plus_read_encoder.ino`请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/Arduino)。*


```arduino
/*
* 读取齿轮电位器的数据和发送红外光线
*/
#include <Arduino.h>
#include <M5Stack.h>

#define IrPin 13
#define PLUS_ADDR 0x62

// declaration
int32_t number = 0;
uint8_t press = 0;

// initialization
M5.begin(true, false, false);
Wire.begin();
ledcSetup(1, 38000, 10); ledcAttachPin(IrPin, 1);// IR Pin setting

// read data
Wire.requestFrom(PLUS_ADDR, 2);
while(Wire.available()) {
    int8_t encode = Wire.read();
    uint8_t press_n = Wire.read();
    number += encode;
    if(press_n == 0xff) {
        press = 0;//encoder was pressed
    }
    else {
        press = 1;//encoder was releaed
    }
}
```

## 原理图

<img src="assets/img/product_pics/module/plus_sch.png">

## 相关视频

**PLUS 的演示 - 菜单界面的翻页与选择**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Encoder.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>