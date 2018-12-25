# PLUS模块

<img src="assets/img/product_pics/module/module_plus_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_plus_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.6e32425el3pHvc&id=579821616764)**

## 描述

<mark>Plus</mark>是一个增强型模块，内置了500mAh的电池、齿轮电位器(encoder)、IR发送器、麦克风焊盘、PORT B(GPIO Port)和PORT C(UART Port)。你可以把它与M5Core堆叠在一起，增强M5Core的增能，Plus模块与M5Core通过I2C通信。I2C地址是0x62。

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

## 例程

### 1. Arduino IDE

```c++
/*
* 读取齿轮电位器的数据
*/
Wire.requestFrom(0x62, 2);

if(Wire.available()) {
    encode  = Wire.read();//read value of encoder
    if(press_n  == 0xff) {
        pressed = 0;//button released
    }
    else {
        pressed = 1;//button pressed
    }
}
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/Arduino)。

## 原理图
