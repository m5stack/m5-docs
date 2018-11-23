# M5Stack FIRE

## DESCRIPTION

The M5Stack **<mark>FIRE</mark>** is a development kit based on <mark>ESP32</mark> chip. FIRE is a kit which composed of red m5core, M5Go Base and M5Go CHG. Base(for charging red m5core). You can even program The M5Stack FIRE through Blockly, Arduino or MicroPython.

The M5Stack FIRE equips the ESP32 with everything necessary to program, run and develop on the wonderchip. It also features a 9-Axis (Gyro + Accelerometer + Magnetometer) MEMS (**MPU-9250**) and a TFT LCD, so you can create a 3D remote gesture controller, a simple "Leap Motion" via M5Stack FIRE in a day in stead of couple weeks and so on.

M5Go CHG. Base is composed of POGO pin. M5Go Base is composed of PORT B, PORT C, 2 RGBLed Bars(SK6812), a microphone and a Battery(600mAh).

## FEATURES

-  Programming Support
    -  M5Flow
    -  MicroPython
    -  Arduino
-  Compatible LEGO
-  TF Card Support

## PARAMETER

| Source        | Parameter      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth         |
| Flash          | 16MB Flash + 4MB pSRAM |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| Microphone          | MEMS Analog BSE3729 Microphone            |
| LED          | SK6812 3535 RGB LED x 10            |
| **MEMS**          | MPU9250 (MPU6500 + AK8963)          |
| Battery          | 550mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 56g            |

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

| MPU9250       | ESP32 Chip    |
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

-  1x M5Stack FIRE
-  1x M5GO Base
-  1x M5GO CHG BASE
-  Type-C USB Cable
-  User Manual

## DOCUMENTS

-  **Example**
    - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
    - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf) - [AK8963](https://www.akm.com/akm/en/file/datasheet/AK8963C.pdf)

-  **Register map** - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/RM-MPU-9250A-00-v1.6.pdf)

-  **GitHub** - [Arduino](https://github.com/m5stack/M5Stack) - [MicroPython](https://github.com/m5stack/M5GO)

- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-NEW-PSRAM-2-0-FIRE-IoT-Kit-Dual-Core-ESP32-16M-FLash-4M-PSRAM-Development/3226069_32847906756.html?spm=2114.12010615.8148356.10.1c93724d7cJ5rG.html)**

-  **<mark>Quick Start</mark>**
    - Arduino - [MacOS](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](/en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
    - [MicroPython](/en/quick_start/m5core/m5stack_core_get_started_MicroPython)

## READ MORE

### The difference between M5Cores

https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_diff_between_m5cores.md

### Diagram of Fire

<figure>
    <img src="assets/img/product_pics/core/fire/product_pic_fire.jpg" width="500px" height="500px">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/simple_sch_just_for_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/interface_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/m5_fire_01.jpg" >
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/m5_fire_02.jpg" >
</figure>
