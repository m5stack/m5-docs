# M5GO IoT Starter Kit

<img src="assets/img/product_pics/core/m5go/m5go_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_04" width="250" height="250">

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html?spm=2114.12010615.8148356.4.44fa29faDagj56)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5GO IoT Starter Kit</mark>**は6つのユニット(ENV, IR, RGB, PIR, ANGLE, HUB)と1つの白いM5Core(ESP32ベース)からなる、IoTプログラミング学習キットです。

[UiFlow](http://flow.m5stack.com)や**Arduino IDE**を使用してプログラミングすることができます。

また私たちはIoTプログラミングトレーニングコースも提供しています。 興味がある方は、電子メール<tech@m5stack.com>までご連絡ください。

## 特徴

- プログラミングサポート
  - Arduino
  - ESP-IDF
  - MicroPython
- [TFカード](https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89)サポート

## スペック

| 項目 | 詳細 |
|:----|:-----|
| <mark>ESP32</mark> | 240MHz x 2 cores, 600 DMIPS, 520KB SRAM, Wi-Fi, デュアルモード Bluetooth |
| Flash | 16MB |
| 電源入力 | 5V @ 500mA |
| インターフェース | Type-C x 1, Grove(I2C+I/0+UART) x 1 |
| LCD | 2 inch, 320x240 フルカラーTFT LCD, ILI9342 |
| スピーカー | 1W-0928 |
| 電池 | 150mAh @ 3.7V 内蔵 |
| 動作温度 | 0°C to 40°C ( 32°F to 104°F ) |
| サイズ | 54 x 54 x 12.5 mm |
| ケース | プラスチック ( PC ) |
| 重量 | 300g ボトム含む |

## ピンマップ

**POGOピン**

| POGO Pin | ESP32 Chip |
|:---------|:-----------|
| SCL      | GPIO22     |
| SDA      | GPIO21     |

**LEDバー**

| LED Pin | ESP32 Chip |
|:--------|:-----------|
| LED Pin | GPIO15     |

**MIC**

| MIC Pin | ESP32 Chip |
|:--------|:-----------|
| MIC Pin | GPIO34     |

**Speaker**

| Speak Pin | ESP32 Chip |
|:----------|:-----------|
| Speak Pin | GPIO25     |

**Button**

| Button Pin | ESP32 Chip |
|:-----------|:-----------|
| BUTTON A   | GPIO39     |
| BUTTON B   | GPIO38     |
| BUTTON C   | GPIO37     |

**GROVE**

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

**IMUセンサー**

*MPU9250 i2c address: 0x68*

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
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="300px" height="300px">
</figure>

## パッケージ内容

- 1x M5Core（白）
- 6x 6種類のユニット(ENV, IR, RGB, PIR, ANGLE, HUB)
- 4x LEGO アクセサリ
- 3x Grove ケーブル
- 1x USB Type-C ケーブル
- 1x ユーザーマニュアル

<img src="assets/img/product_pics/core/m5go/m5go_04.png" width="500">

<img src="assets/img/product_pics/core/m5go/m5go_05.png" width="500">

<img src="assets/img/product_pics/core/m5go/m5go_06.png" width="500">

## 関連リンク

- **データシート**
  - [ESP32(中国語)](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

## 関連動画

- **m5stackの紹介**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>