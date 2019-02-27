# M5Core WHITE {docsify-ignore-all}

## Description

**The White M5Core is a main board of M5GO IOT Starter Kit.** The White M5Core is similar with M5Core GRAY. But it's bottom module is M5GO Base, not the same as M5Core GRAY.

It equips the ESP32 with everything necessary to program, run and develop on the wonderchip. It also features a MEMS Chip(**MPU9250**), and a TFT LCD, so you can create a 3D remote gesture controller, a simple "Leap Motion" via M5Stack GRAY in a day in stead of couple weeks and so on.

The a Bottom board on the back of M5Core. It's designed for expanding gpio on M-Bus besides I2S Pins(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)for DIY. Each gpio on M-Bus is expanded as pin and port for convenience and flexibility.

## Feature

-  Programming Support
    -  UiFlow
    -  MicroPython
    -  Arduino
-  Compatible LEGO
-  TF Card Support

## PARAMETER

| Source        | Parameter      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth         |
| Flash          | 16MB            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| **MEMS**          | MPU9250            |
| Battery          | 150mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 120g with bottom, 100g only core            |

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

**<mark>NOTE:</mark>**

*We have several kinds of Cores, the following figures show the main differece with them.*

- *If you want to **view** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md).*

- *If you want to **download** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx).*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05.png">

## Include

-  1x M5Core WHITE
-  1x M5GO Base
-  1x M5GO CHG BASE
-  Type-C USB Cable
-  User Manual

## Related Link

-  **Example** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples) - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html?spm=2114.12010615.8148356.6.44fa2da3D2i5Yi)**

-  **<mark>Quick Start</mark>**
  - Arduino - [MacOS](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](/en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](/en/quick_start/m5core/m5stack_core_get_started_MicroPython)

- **[The difference between M5Cores](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md)**

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_main_board.jpg" width="500">
</figure>
