# M5Stick

中文 | [English](/en/product_documents/m5stack-core/minicore_stick) | [日本語](ja/product_documents/m5stack-core/minicore_stick)

## 描述

<mark>**M5Stick**</mark> 是一个包含1.3寸OLED屏幕(64x128)，LED灯，按键，蜂鸣器，红外发射管和80mA的电池的小型ESP32开发板。你通常可以将它戴在手腕上，也可以利用我们的配件将它固定到墙上。

M5Stick有两个版本，第一个是无PSRAM的版本，另外一个是有MPU9250的版本，附送一些配件(`WATCH BELT`, `WALL` 和 `BRICK`)。

## 特性

-  支持可编程操作: Arduino, UiFlow(Blockly, MicroPython)
-  编程板可穿戴
-  可选：MEMS(MPU9250)

## 管脚映射

| *BLUE_LED*        | *ESP32*      |
| :----------:  |:------------: |
| LED_Pin         | GPIO19         |

| *BUTTON按键*        | *ESP32*      |
| :----------:  |:------------: |
| Button_Pin         | GPIO35         |

| *BUZZER蜂鸣器*        | *ESP32*      |
| :----------:  |:------------: |
| Buzzer_Pin         | GPIO26         |

| *IR红外发射管*        | *ESP32*      |
| :----------:  |:------------: |
| Buzzer_Pin         | GPIO17         |

| *GROVE*        | *ESP32*      |
| :----------:  |:------------: |
| SDA         | GPIO25         |
| SCL          | GPIO13            |


**可选:**

| *MPU9250*        | *ESP32*      |
| :----------:  |:------------: |
| SDA         | GPIO22         |
| SCL         | GPIO21         |



## 包含

-  1x M5Stick 内置 80mAh-Battery
-  1x Type-C USB 线

MPU9250 版本:
-  一些配件: `WATCH BELT`, `WALL` and `BRICK`

## 文档

-  **例程** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

- **[旗舰店](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.257b425esTi92S&id=581055502939)**

- **<mark>上手指南</mark>** - [Arduino](zh_CN/quick_start/m5core/m5stick_get_started_arduino)

<figure>
    <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_01.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.jpg" height="300" width="300">
</figure>