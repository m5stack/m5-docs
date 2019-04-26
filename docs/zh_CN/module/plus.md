# Module PLUS {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_plus_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_plus_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.6e32425el3pHvc&id=579821616764)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**PLUS** 是M5Stack堆叠模块系列中的一款，功能增强型模块.模块配备了锂电池（500mAh）、齿轮电位器、红外发射器.集成MEGA28，提供麦克风接口焊盘，并且对M5Core的端口PORT B(GPIO),PORT C(UART)进行的拓展.PLUS模块能够升级你的硬件资源，为你带来更好的开发体验.

通讯协议: I2C (0x62).

## 产品特性

-  500mAh 锂电池
-  可编程齿轮电位器
-  红外发射器
-  PORT B & PORT C

## 包含

-  1x M5Stack PLUS 模块

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[PLUS 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/firmware_328p)**

## 例程

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/Arduino).*

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

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Encoder.mp4" type="video/mp4">
</video>