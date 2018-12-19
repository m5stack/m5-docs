# M5GO IOT Starter Kit

中文 | [English](/en/product_documents/m5stack-core/m5go_iot_starter_kit) | [日本語](ja/product_documents/m5stack-core/m5go_iot_starter_kit)

## 描述

**<mark>M5GO IOT Starter Kit</mark>**是一款以白色M5Core主控为核心，附带6个units(ENV, IR, RGB, PIR, ANGLE, HUB)的物联网开发套件。

你可以用[UiFlow](http://flow.m5stack.com)或Arduino IDE对它编程。

我们也提供了一些物联网开发课程方便你更快上手使用，如果你对这个感兴趣的话，欢迎给我司发邮件<tech@m5stack.com>。

## 特性

-  可编程，支持[UiFlow](http://flow.m5stack.com), MicroPython和Arduino
-  支持外置TF卡(最大16G)

## 参数

| 主控资源        | 参数      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520K, Wi-Fi, dual mode Bluetooth         |
| Flash)          | 4M-Bytes            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| **MEMS**          | MPU9250            |
| Battery          | 550mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 300g with bottom            |

## 管脚映射

**POGO Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED灯条**

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**麦克风MIC**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

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

| PORT A(I2C)       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |
| 5V            | 5V            |
| GND           | GND           |

| PORT B(I/O)       | ESP32 Chip    |
| :----------:  |:------------: |
| G36           | GPIO36        |
| G26           | GPIO26        |
| 5V            | 5V            |
| GND           | GND           |

| PORT C(UART2)       | ESP32 Chip    |
| :----------:  |:------------: |
| RXD           | GPIO16        |
| TXD           | GPIO17        |
| 5V            | 5V            |
| GND           | GND           |

**MEMS传感器**

*MPU9250 i2c address: 0x68*

| MPU9250      | ESP32 Chip    |
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

<figure>
  <img src="assets/img/product_pics/core/M-BUS.png" alt="M_BUS" width="300" height="300">
</figure>

## 包含

-  1x white M5Core主控
-  1x M5GO 底座
-  6x Units(ENV, IR, RGB, PIR, ANGLE, HUB)
-  4x LEGO 接插件
-  3x GROVE 线
-  Type-C USB 线
-  说明书

## 文档

-  **例程** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples) - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **[旗舰店](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.690a425eFsoYVX&id=568283585553)**

-  **<mark>快速上手</mark>** - Arduino - [MacOS](/zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](/zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) - [MicroPython](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_01.png" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_02.png" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_03.png" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_04.png" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_05.png" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_06.png" width="500">
</figure>
