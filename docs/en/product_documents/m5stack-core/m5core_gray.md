# M5Core GRAY

[中文](/zh_CN/product_documents/m5stack-core/m5core_gray) | English | [日本語](ja/product_documents/m5stack-core/m5core_gray)

## DESCRIPTION

The M5Core **<mark>GRAY</mark>** is a development kit based on <mark>ESP32</mark> chip composed of a gray M5Core and a Bottom Base board. You can even program The M5Core GRAY through Blockly, Arduino or MicroPython.

The M5Core GRAY equips the ESP32 with everything necessary to program, run and develop on the wonderchip. It also features a MEMS Chip(**MPU9250**), and a TFT LCD, so you can create a 3D remote gesture controller, a simple "Leap Motion" via M5Core GRAY in a day in stead of couple weeks and so on.

The a Bottom board on the back of M5Core. It's designed for expanding gpio on M-Bus besides I2S Pins(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)for DIY. Each gpio on M-Bus is expanded as pin and port for convenience and flexibility.

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
| Flash          | 4M-Bytes            |
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

**MEMS Sensor**

<mark>*IIC Address of MPU9250 is 0x68*</mark>

| MPU9250       | ESP32 Chip      |
| :----------:  |:------------: |
| SCL        | GPIO22         |
| SDA          | GPIO21            |

**GROVE**

| Port A(I2C)       | ESP32 Chip    |
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

-  1x M5Core GRAY
-  1x M5Core Bottom
-  Type-C USB Cable
-  User Manual

## DOCUMENTS

-  **[Schematic](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)**

-  **Example** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples) - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)


-  **GitHub** - [Arduino](https://github.com/m5stack/M5Stack) - [MicroPython](https://github.com/m5stack/M5GO)

- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-In-Stock-ESP32-Mpu9250-9Axies-Motion-Sensor-Core-Development-Kit-Extensible-IoT-Development-Board/3226069_32836393710.html?spm=2114.12010615.8148356.12.25e96be7zRik8r.html)**

-  **<mark>Quick Start</mark>**
  - Arduino - [MacOS](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](/en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](/en/quick_start/m5core/m5stack_core_get_started_MicroPython)

- **[The difference between M5Cores](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_diff_between_m5cores.md)**

<figure>
  <img src="assets/img/product_pics/core/gray/gray_01.jpg" alt="gray_01" width="500px" height="500px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/gray/gray_02.jpg" alt="gray_02" width="500px" height="500px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/gray/gray_03.jpg" alt="gray_03" width="500px" height="500px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/gray/gray_04.jpg" alt="gray_04" width="65%" height="65%">
</figure>
<figure>
  <img src="assets/img/product_pics/core/gray/gray_05.jpg" alt="gray_05" width="65%" height="65%">
</figure>
