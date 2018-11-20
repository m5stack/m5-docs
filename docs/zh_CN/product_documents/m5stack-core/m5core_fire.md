# M5Stack FIRE

## 描述

M5Core **<mark>FIRE</mark>**是一款基于**ESP32**芯片(集成Wi-Fi和蓝牙)的升级版开发板，包括红色的主板、M5GO底座和M5GO充电底座。你可以用[M5Flow](http://flow.m5stack.com), MicroPython或Arduino来编程它. 这个红色主板包含3个按键、喇叭、LCD(320x240)、TF卡插槽、**MPU6050**和**MAG3110**。

M5GO底座内置PORT B, PORT C, 2个RGBLed灯条(SK6812), 一个麦克风和一个电池(550mAh)。

M5GO CHG.底座包含POGO Pin。FIRE主控通过POGO Pin与这个充电底座连接，而且主控和底座都内置磁铁，所以主控随意放置，都可很好地吸附到充电底座上。

## 特性

-  可编程，支持[M5Flow](http://flow.m5stack.com), MicroPython和Arduino
-  支持外置TF卡(最大16G)
-  支持LEGO件

## 参数

| 主控资源        | 参数      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 4MB SRAM, Wi-Fi, dual mode Bluetooth         |
| Flash          | 16M-Bytes            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| Microphone          | MEMS Analog BSE3729 Microphone            |
| LED          | SK6812 3535 RGB LED x 10            |
| **MEMS**          | MPU6050, MAG3110            |
| Battery          | 550mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 56g            |

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

*MPU6050 i2c address: 0x68*

| MPU6050      | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |
| 5V            | 5V            |
| GND           | GND           |

*MAG3110 i2c address: 0x0e*

| MAG3110      | ESP32 Chip    |
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

-  1x M5Stack FIRE主控
-  1x M5GO 底座
-  1x M5GO CHG. 充电底座
-  Type-C USB 线
-  说明书

## 文档

-  **例程** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples) - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU6050](https://www.invensense.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf) - [MAG3110](https://www.nxp.com/docs/en/data-sheet/MAG3110.pdf)

-  **GitHub** - [Arduino](https://github.com/m5stack/M5Stack) - [MicroPython](https://github.com/m5stack/M5GO)

- **[旗舰店](https://www.aliexpress.com/store/product/M5Stack-NEW-PSRAM-2-0-FIRE-IoT-Kit-Dual-Core-ESP32-16M-FLash-4M-PSRAM-Development/3226069_32847906756.html?spm=2114.12010615.8148356.10.1c93724d7cJ5rG.html)**

-  **<mark>快速上手</mark>** - Arduino - [MacOS](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS) - [Windows_64](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows) - [MicroPython](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## READ MORE

### Diagram of Fire

<figure>
    <img src="assets/img/product_pics/core/fire/product_pic_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/simple_sch_just_for_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/interface_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/m5_fire_04.jpg">
</figure>