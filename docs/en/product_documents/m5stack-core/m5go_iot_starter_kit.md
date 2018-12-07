# M5GO IOT Starter Kit

[中文](/zh_CN/product_documents/m5stack-core/m5go_iot_starter_kit) | English | [日本語](ja/product_documents/m5stack-core/m5go_iot_starter_kit)

## DESCRIPTION

**<mark>M5GO IOT Starter Kit</mark>** is a kit designed for learning IOT programming which consists of 6 units(ENV, IR, RGB, PIR, ANGLE, HUB) and one white M5Core(based on <mark>ESP32</mark> chip).

Programming M5GO with [UiFlow](http://flow.m5stack.com) or Arduino IDE.

We also supply some courses for teaching IOT programming. If you are interesting in it, contact us through Email <tech@m5stack.com> please.

## FEATURES

-  Programming Support
-  Arduino
-  ESP-IDF
-  MicroPython
-  TF Card Support

## PARAMETER

| Source        | Parameter      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth         |
| Flash)          | 16MB            |
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

## PinMap

**POGO Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**MIC**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

**Speak**

| Speak Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| Speak Pin        | GPIO25         |

**Button**

| Button Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| BUTTON A        | GPIO39         |
| BUTTON B          | GPIO38            |
| BUTTON C          | GPIO37            |

**GROVE**

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

**MEMS Chip**

<mark>*MPU9250 i2c address: 0x68*</mark>

| MPU9250      | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |
| 5V            | 5V            |
| GND           | GND           |

**LCD**

| ILI9341       | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | /            |
| CLK          | GPIO18            |
| CS          | GPIO14            |
| DC          | GPIO27            |
| RST          | GPIO33            |
| BL          | GPIO32            |

**TF Card**

| TFCard Pin      | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | GPIO19            |
| CLK          | GPIO18            |
| CS          | GPIO4            |

**M-Bus**

<figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="300" height="300">
</figure>

## INCLUDES

-  1x white M5Core
-  1x M5GO Base
-  6x Units
-  4x LEGO Accessories
-  3x GROVE Cables
-  Type-C USB Cable
-  User Manual

## DOCUMENTS

-  **Example**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
  - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html?spm=2114.12010615.8148356.6.44fa2da3D2i5Yi)**

-  **<mark>Quick Start</mark>**
  - Arduino - [MacOS](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](/en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](/en/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_01.png" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_02.jpg" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_03.jpg" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_04.jpg" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_05.jpg" width="500">
</figure>

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_06.png" width="500">
</figure>
