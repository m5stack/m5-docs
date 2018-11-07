# SERVO

## 描述

Servo是一个普通舵机(比如常见的9g舵机)驱动模块，它理论上可以同时驱动12路舵机。可是实际测试中，因为同时带动12路舵机时，电流很大，所以这个模块暂时能同时驱动9路舵机。过段时间，我们会推出改进升级版本，敬请期待。

Servo模块使用起来非常简单，因为内置了MEGA328芯片来管理多路舵机，所以使用的时候，只需要M5Core与Servo模块堆叠之后，通过GRVOE接口(I2C)通信(I2C地址是0x53)。编程时，在Arduino IDE环境下，也只需2-3行即可驱动。而且还支持M5Flow编程，只需要拖拽代码块即可使用。

## 特性

-  支持同时控制多路舵机
-  支持6-24V的宽电压范围输入
-  支持Arduino和M5Flow编程，非常简单

## 包含

-  1x M5Stack Servo Module
-  1x 电源适配接口

## 应用

-  人形机器人
-  仿生多关节机器人
-  3轴舵机云台

## 文档

-  **[原理图](zh_CN/file_to_display_null)**

-  **GitHub** - [Arduino GitHub](zh_CN/file_to_display_null)

-  **例程** - [Arduino Example](zh_CN/file_to_display_null)

- **[旗舰店](https://www.aliexpress.com/store/product/M5Stack-New-SERVO-Module-Board-12-Channels-Servo-Controller-with-MEGA328-Inside-Power-Adapter-6-24V/3226069_32951356502.html?spm=a2g1y.12024536.productList_5885011.pic_0)**

<figure>
    <img src="assets/img/product_pics/modules/servo_01.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/servo_02.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/servo_03.jpg" height="300" width="300">
</figure>