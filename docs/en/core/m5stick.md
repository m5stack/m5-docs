# M5Stick

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="250" height="250">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stick_get_started_arduino)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)** &nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp; 🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-New-M5Stick-Mini-Development-Kit-ESP32-1-3-OLED-80mAh-Battery-Inside-Buzzer-IR/3226069_32947692973.html?spm=a2g1y.12024536.productList_5885011.subject_1)**&nbsp;&nbsp;&nbsp;

## Description

<mark>**M5Stick**</mark> is a mini esp32 development board including 1.3' OLED Screen(64x128), led, button, buzzer, IR Transmitter, 80mAh-Battery and **optional MEMS(MPU9250)**. Usually, you can put it on your wrist with `WATCH BELT` or band it on the wall with `WALL` or `BRICK`.

There are two version of it. One M5Stick does not contain MPU9250, another version contains MPU9250 and some accessories(likes `WATCH BELT`, `WALL` and `BRICK`).

## Feature

-  Programming Support: Arduino, UiFlow(Blockly, MicroPython)
-  Wearable
-  Optional MEMS: MPU9250

## PinMap

| *BLUE_LED*        | *ESP32*      |
| :----------:  |:------------: |
| LED_Pin         | GPIO19         |

| *BUTTON*        | *ESP32*      |
| :----------:  |:------------: |
| Button_Pin         | GPIO35         |

| *BUZZER*        | *ESP32*      |
| :----------:  |:------------: |
| Buzzer_Pin         | GPIO26         |

| *IR*        | *ESP32*      |
| :----------:  |:------------: |
| Buzzer_Pin         | GPIO17         |

| *GROVE*        | *ESP32*      |
| :----------:  |:------------: |
| SDA         | GPIO25         |
| SCL          | GPIO13            |


**Optional:**

| *MPU9250*        | *ESP32*      |
| :----------:  |:------------: |
| SDA         | GPIO22         |
| SCL         | GPIO21         |



## Include

-  1x M5Stick including 80mAh-Battery
-  1x Type-C USB Cable

**MPU9250 Version:**
-  Some accessories: `WATCH BELT`, `WALL` and `BRICK`

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)
