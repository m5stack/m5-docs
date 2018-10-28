# M5Core GRAY

## 描述

这是M5Core的灰色版本，以ESP32芯片为核心，支持Blockly, Arduino or MicroPython的编程，支持M5Flow。

它实现了ESP32大部分的功能，而且内置6轴传感器(MPU-9250)和一块320*240的LCD屏，你可以在一两周内将M5Core主控打造成像Leap Motion那样的3D远程手势识别控制器。

## 特性

-  可编程Programming Support
-  支持Arduino、MicroPython
-  兼容乐高配件
-  支持外置SD卡(最大16G)

## 参数

| 主控资源        | 参数      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520K, Wi-Fi, dual mode Bluetooth         |
| Flash)          | 4M-Bytes            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| Battery          | 150mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 120g with bottom, 100g only core            |

## 包含

-  1x M5Stack GRAY
-  Type-C USB 线
-  说明书


## 文档

-  **[原理图](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)**

-  **例程** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples) - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)


-  **GitHub** - [Arduino](https://github.com/m5stack/M5Stack) - [MicroPython](https://github.com/m5stack/M5GO)

- **[旗舰店](https://www.aliexpress.com/store/product/M5Stack-Official-In-Stock-ESP32-Mpu9250-9Axies-Motion-Sensor-Core-Development-Kit-Extensible-IoT-Development-Board/3226069_32836393710.html?spm=2114.12010615.8148356.12.25e96be7zRik8r.html)**

-  **<mark>快速上手</mark>** - Arduino - [MacOS](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) - [MicroPython](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)