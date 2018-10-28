# M5Core FIRE

## 描述

这是M5Core FIRE主控板，是基础版的升级版本，以ESP32芯片为核心，支持Blockly, Arduino or MicroPython的编程，支持M5Flow。

它实现了ESP32大部分的功能，而且内置6轴传感器(MPU-6050)，3轴磁力计(MAG3110)和一块320*240的LCD屏，你可以在一两周内将M5Core主控打造成像Leap Motion那样的3D远程手势识别控制器。

## 特性

-  可编程Programming Support
-  支持Arduino、MicroPython
-  兼容乐高配件
-  支持外置SD卡(最大16G)

## 参数

| 主控资源        | 参数      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 4MB SRAM, Wi-Fi, dual mode Bluetooth         |
| Flash)          | 16M-Bytes            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| Microphone          | MEMS Analog BSE3729 Microphone            |
| LED          | SK6812 3535 RGB LED x 10            |
| MEMS          | MPU6050, MAG3110            |
| Battery          | 150mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 56g            |

## 包含

-  1x M5Stack FIRE
-  Type-C USB 线
-  说明书

## 文档

-  **例程** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples) - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU6050](https://www.invensense.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf) - [MAG3110](https://www.nxp.com/docs/en/data-sheet/MAG3110.pdf)

-  **GitHub** - [Arduino](https://github.com/m5stack/M5Stack) - [MicroPython](https://github.com/m5stack/M5GO)

- **[旗舰店](https://www.aliexpress.com/store/product/M5Stack-NEW-PSRAM-2-0-FIRE-IoT-Kit-Dual-Core-ESP32-16M-FLash-4M-PSRAM-Development/3226069_32847906756.html?spm=2114.12010615.8148356.10.1c93724d7cJ5rG.html)**

-  **<mark>快速上手</mark>** - Arduino - [MacOS](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) - [MicroPython](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## 更多

### 内部示意图

<figure>
    <img src="assets/img/product_pics/core/fire/product_pic_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/simple_sch_just_for_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/interface_fire.jpg">
</figure>