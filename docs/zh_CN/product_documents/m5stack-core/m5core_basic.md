# M5Core BASIC

中文 | [English](/en/product_documents/m5stack-core/m5core_basic) | [日本語](ja/product_documents/m5stack-core/m5core_basic)

## 描述

M5Core **<mark>BASIC</mark>**是一款基于**ESP32**芯片(集成Wi-Fi和蓝牙)的基础版开发板，包括黑色的主板和底座。你可以用[UiFlow](http://flow.m5stack.com), MicroPython或Arduino来编程它. 这个黑色主板包含3个按键、喇叭、LCD(320x240)、TF卡插槽。底座的设计用于拓展M-Bus总线的Pin管脚出来，以方便DIY和产品设计，每个Pin脚都引出来做成了排针或排母形式，非常方便(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34这几个关于I2S功能的引脚没引出)。

## 特性

-  可编程，支持[UiFlow](http://flow.m5stack.com), MicroPython和Arduino
-  支持外置TF卡(最大16G)

## 参数

| 主控资源        | 参数      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520K, Wi-Fi, dual mode Bluetooth         |
| Flash          | 4M-Bytes            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| Battery          | 150mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 120g with bottom, 100g only core            |


## 管脚映射

**喇叭Speak**

| Speak Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| Speak Pin        | GPIO25         |

**按键Button**

| Button Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| BUTTON A        | GPIO39         |
| BUTTON B          | GPIO38            |
| BUTTON C          | GPIO37            |

**GROVE接口**

| Port A(I2C)       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |
| 5V            | 5V            |
| GND           | GND           |

**LCD屏**

| ILI9341       | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | /            |
| CLK          | GPIO18            |
| CS          | GPIO14            |
| DC          | GPIO27            |
| RST          | GPIO33            |
| BL          | GPIO32            |

**TF卡**

| TFCard Pin      | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | GPIO19            |
| CLK          | GPIO18            |
| CS          | GPIO4            |

**M-Bus总线**

*请查看本文的最后一张图片*


## 包含

-  1x M5Stack BASIC 主控
-  1x M5Core 底座
-  Type-C USB 线
-  说明书

## 文档

-  **[原理图](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)**

-  **例程** - [Arduino Example](https://github.com/m5stack/M5Stack/tree/master/examples)

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

-  **GitHub** - [Arduino GitHub](https://github.com/m5stack/M5Stack)

-  **<mark>快速上手</mark>** - Arduino - [MacOS](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) - [MicroPython](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
  <img src="assets/img/product_pics/core/basic/basic_01.jpg" alt="basic_01" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_02.jpg" alt="basic_02" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_03.jpg" alt="basic_03" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_04.jpg" alt="basic_04" width="40%" height="40%">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_05.jpg" alt="basic_05" width="40%" height="40%">
</figure>

<figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="basic_05" width="40%" height="40%">
</figure>