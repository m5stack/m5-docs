# M5Core WHITE



## 概要

**この白いM5CoreはM5GO IOT Starter Kitのメインボードです。** M5Core Whiteは、M5Core GRAYに似たスペックです。しかしFlashの容量が16MBに増え、M5GOベースを備えている点が異なります。

ESP32を備えた素晴らしいボードです。MEMS Chip(**MPU9250**)やTFT液晶も備えており、3Dジェスチャコントローラや、簡単な "Leap Motion" のようなプロダクトを数週間で作ることも可能です。

M5Coreの下のボトムボードには、I2Sピン(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)の他にM-BusベースのDIY向け拡張用GPIOが用意されています。

## 特徴

- プログラミングサポート
  - UiFlow
  - MicroPython
  - Arduino
- LEGO 互換ホール
- TFカード (サポート最大16GB)

## スペック

| 項目 | 詳細 |
|:----|:-----|
| <mark>ESP32</mark> | 240MHz x 2 core, 600 DMIPS, 520KB SRAM, Wi-Fi, デュアルモード Bluetooth |
| Flash   | 16MB       |
| 電源入力   | 5V @ 500mA |
| インターフェース | USB Type-C x 1, Grove(I2C+I/0+UART) x 1 |
| LCD | 2 inch, 320x240 フルカラーTFT液晶, ILI9342 |
| スピーカー | 1W-0928 |
| **MEMS** | MPU9250 |
| 電池 | 150mAh @ 3.7V, inside  vb |
| 動作温度 | 32°F to 104°F ( 0°C to 40°C ) |
| サイズ | 54 x 54 x 12.5 mm |
| ケース材質 | Plastic ( PC ) |
| 重量 | 120g（ボトム部含む）, 100g（コアのみ）|

## ピンマップ

**ポゴピン**

| POGO Pin | ESP32 Chip |
|:--------|:-----------|
| SCL      | GPIO22     |
| SDA      | GPIO21     |

**LEDバー**

| LED Pin | ESP32 Chip |
|:--------|:-----------|
| LED Pin | GPIO15     |

**マイク**

| MIC Pin | ESP32 Chip |
|:--------|:-----------|
| MIC Pin | GPIO34     |

**スピーカー**

| Speak Pin | ESP32 Chip |
|:----------|:-----------|
| Speak Pin | GPIO25     |

**ボタン**

| Button Pin | ESP32 Chip |
|:-----------|:-----------|
| BUTTON A   | GPIO39     |
| BUTTON B   | GPIO38     |
| BUTTON C   | GPIO37     |

**Grove**

| PORT A(I2C) | ESP32 Chip |
|:------------|:-----------|
| SCL         | GPIO22     |
| SDA         | GPIO21     |
| 5V          | 5V         |
| GND         | GND        |

| PORT B(I/O) | ESP32 Chip |
|:------------|:-----------|
| G36         | GPIO36     |
| G26         | GPIO26     |
| 5V          | 5V         |
| GND         | GND        |

| PORT C(UART2) | ESP32 Chip |
|:--------------|:-----------|
| RXD           | GPIO16     |
| TXD           | GPIO17     |
| 5V            | 5V         |
| GND           | GND        |

**MEMS Chip**

<mark>*MPU9250 I2Cアドレス: 0x68*</mark>

| MPU9250 | ESP32 Chip |
|:--------|:-----------|
| SCL     | GPIO22     |
| SDA     | GPIO21     |
| 5V      | 5V         |
| GND     | GND        |

**LCD**

| ILI9341 | ESP32 Chip |
|:--------|:-----------|
| MOSI    | GPIO23     |
| MISO    | /          |
| CLK     | GPIO18     |
| CS      | GPIO14     |
| DC      | GPIO27     |
| RST     | GPIO33     |
| BL      | GPIO32     |

**TFカード**

| TFCard Pin | ESP32 Chip |
|:-----------|:-----------|
| MOSI       | GPIO23     |
| MISO       | GPIO19     |
| CLK        | GPIO18     |
| CS         | GPIO4      |

**M-Bus**

<figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="300" height="300">
</figure>

## パッケージ内容

- 1x M5Core WHITE
- 1x M5GO ベース
- 1x M5GO CHG ベース
- USB Type-C ケーブル
- ユーザーマニュアル

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
  - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **GitHub**
  - [Arduino](https://github.com/m5stack/M5Stack)
  - [MicroPython](https://github.com/m5stack/M5GO)

- **<mark>クイックスタート</mark>**
  - Arduino
    - [MacOS](/ja/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS)
    - [Windows_64](/ja/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](/ja/quick_start/m5core/m5stack_core_get_started_MicroPython)

- **[M5Coreによる違い](https://github.com/m5stack/M5-回路図/blob/master/Core/hardware_diff_between_m5cores.md)**

<figure>
    <img src="assets/img/product_pics/core/m5go/m5go_main_board.jpg" width="500">
</figure>

## 関連資料

- **[M5GO IoT Starter Kit 購入 (AliExpress)](https://www.aliexpress.com/store/product/M5Stack-M5GO-IoT-arduino-ESP32-MicroPython-IR-550/3226069_32881911596.html)**