# Module SERVO {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_servo_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_03.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.6c6f425e2rHsr9&id=581189197514)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**SERVO** 是M5Stack堆叠模块系列中的一款，舵机驱动模块.拥有12个舵机驱动通道，可同时驱动多个 SERVO 舵机.采用直流电源输入设计用于功率补充,并通过 M-BUS，自动为顶部的 M5Core 供电.将这一种简单快捷的舵机驱动方式应用在你的项目中，将提升你的开发效率.

SERVO 基于 MEGA328 芯片进行 I2C 通信(0x53).

## 产品特性

-  12x 舵机驱动通道
-  DC 输入: 6-12V
-  DC 连接器类型: XT60 (母头)

## 包含

-  1x M5Stack Servo 模块
-  1x 常规公对公 XT60 DC 连接器

## 应用

-  人形机器人
-  仿生多关节机器人
-  3轴舵机云台

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[SERVO 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/Arduino).*

```arduino
#include <Arduino.h>
#include <M5Stack.h>
#include <Wire.h>

#define SERVO_ADDR 0x53
void setup() {
    M5.begin(true, false, true);
    M5.Lcd.setTextFont(4);
    M5.Lcd.setCursor(70, 100);
    M5.Lcd.print("Servo Example");

    Wire.begin(21, 22, 100000);
}

// addr 0x01 means "control the number 1 servo by us"
void Servo_write_us(uint8_t number, uint16_t us) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x00 | number);
    Wire.write(us & 0x00ff);
    Wire.write(us >> 8 & 0x00ff);
    Wire.endTransmission();
}

// addr 0x11 means "control the number 1 servo by angle"
void Servo_write_angle(uint8_t number, uint8_t angle) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x10 | number);
    Wire.write(angle);
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

### 2. UIFlow

想要探索最简单的Servo编程驱动方式吗？快试试Blockly编程平台[UIFlow](flow.m5stack.com).

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow).*

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.png">

## 原理图

<img src="assets/img/product_pics/module/servo_sch.png">

## 相关视频

**SERVO 的使用教程**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Servo/E4%20-%20Servo%20Demo(UIFlow%20Tutorials%205).mp4" type="video/mp4">
</video>

**SERVO 的案例**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Servo.mp4" type="video/mp4">
</video>
