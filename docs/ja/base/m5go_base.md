# M5GO ベース

## 概要

M5GOベースは、[M5GO IOT Starter Kit](ja/product_documents/m5stack-core/m5go_iot_starter_kit)および[M5Fire](ja/product_documents/m5stack-core/m5core_fire)キットのベースです

M5GOベースは、600mAhバッテリ、Mバスバスインタフェース、マイク、赤色充電インジケータLED、2つのRGBストリップ（10）、PORT BおよびPORT Cで構成されています。

M5GOベースの充電処理中、赤いLEDが点滅し、バッテリが完全に点灯します。

## ピンマップ

**POGO Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

*RGBライトは10本あり、左右に5本あります*

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**MIC**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

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

**M-Bus**

<figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="500" height="500">
</figure>

## 関連情報

- **[回路図](https://github.com/m5stack/M5GO/blob/master/hardware/schematics/M5GO_Base.pdf)**
- **[M5GO IOT Starter Kit リンクを購入する](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html)**

<figure>
    <img src="assets/img/product_pics/bases/m5go_base_01.png" width="65%" height="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/bases/m5go_base_02.png" width="65%" height="65%">
</figure>
