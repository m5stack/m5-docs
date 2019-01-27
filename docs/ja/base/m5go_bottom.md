# M5GO BOTTOM

<img src="assets/img/product_pics/base/m5go_base_04.png" width="30%" height="30%"><img src="assets/img/product_pics/base/m5go_base_05.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Battery-Bottom-Charging-Base-ESP32-Kit-RFID-Magnetic-USB-C-M5GO-FIRE-Battery-Bottom-with/32959833680.html)**

## 概要

**<mark>M5GO BOTTOM</mark>**は[M5GO Lite](ja/core/m5go_lite)キット、[M5GO IoT Starter Kit](ja/core/m5go)キット、[M5Stack Fire](ja/core/fire)のボトムベースです。

M5GO BOTTOM ベースは、600mAhバッテリ、M-BUSインターフェース、マイク、充電インジケータLED、2つのRGBバー（LED 10個）、PORT BおよびPORT Cインターフェースで構成されています。

バッテリーの充電中は赤いインジケータLEDが点滅し、充電が完了すると常時点灯します。

## ピンマップ

**POGO Pin**

| POGO Pin      | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

*LEDは左右に5個ずつ、全部で10個です*

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin       | GPIO15        |

**MIC**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin       | GPIO34        |

**GROVE**

| PORT B(I/O)   | ESP32 Chip    |
| :----------:  |:------------: |
| G36           | GPIO36        |
| G26           | GPIO26        |
| 5V            | 5V            |
| GND           | GND           |

| PORT C(UART2) | ESP32 Chip    |
| :----------:  |:------------: |
| RXD           | GPIO16        |
| TXD           | GPIO17        |
| 5V            | 5V            |
| GND           | GND           |

**M-Bus**

<figure>
  <img src="assets/img/product_pics/core/M-BUS.png" alt="M_BUS" width="500" height="500">
</figure>

## 関連リンク

- **[M5GO IoT Starter Kit購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/32881911596.html)**

<img src="assets/img/product_pics/base/m5go_base_01.png" width="65%" height="65%">

<img src="assets/img/product_pics/base/m5go_base_02.png" width="65%" height="65%">

## 回路図

<img src="assets/img/product_pics/base/m5go_base_sch.png">
