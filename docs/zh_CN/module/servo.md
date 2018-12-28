# SERVO

<img src="assets/img/product_pics/module/module_servo_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_03.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.6c6f425e2rHsr9&id=581189197514)**

## 描述

Servo是一个普通舵机(比如常见的9g舵机)驱动模块，它理论上可以同时驱动12路舵机。可是实际测试中，因为同时带动12路舵机时，电流很大，所以这个模块暂时能同时驱动9路舵机。过段时间，我们会推出改进升级版本，敬请期待。

Servo模块使用起来非常简单，因为内置了MEGA328芯片来管理多路舵机，所以使用的时候，只需要M5Core与Servo模块堆叠之后，通过GRVOE接口(I2C)通信(I2C地址是0x53)。编程时，在Arduino IDE环境下，也只需2-3行即可驱动。而且还支持UiFlow编程，只需要拖拽代码块即可使用。

## 特性

-  支持同时控制多路舵机
-  支持6-24V的宽电压范围输入
-  支持Arduino和UiFlow编程，非常简单

## 包含

-  1x M5Stack Servo Module
-  1x 电源适配接口

## 应用

-  人形机器人
-  仿生多关节机器人
-  3轴舵机云台

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/Arduino)。*

```arduino
#include <Arduino.h>
#include <M5Stack.h>
#include <Wire.h>

#define SERVO_ADDR 0x53
void setup() {
    M5.begin(true, false, true);
    Wire.begin(21, 22, 100000);
}

// addr 0x01 mean control the number 1 servo by us
void Servo_write_us(uint8_t number, uint16_t us) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x00 | number);
    Wire.write(us & 0x00ff);
    Wire.write(us >> 8 & 0x00ff);
    Wire.endTransmission();
}

void loop() {
    for(uint8_t i = 0; i < 12; i++){
        Servo_write_us(i, 700);
        // Servo_write_angle(i, 0);
    }
    delay(1000);
    for(uint8_t i = 0; i < 12; i++){
        Servo_write_us(i, 2300);
        // Servo_write_angle(i, 180);
    }
    delay(1000);
}
```


<!-- ## 原理图 -->