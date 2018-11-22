# M5Stack FIRE

## 概要

**<mark>M5Stack FIRE</mark>**は**ESP32**チップがベースです。**Blockly**、**Arduino**、**MicroPython**などでプログラミングすることができます。

**M5Stack FIRE**は、ESP32プログラミングに必要なものに加えて、~~**MPU6050**MEMSセンサー（3軸ジャイロ + 3軸加速度）、**MAG3110**MEMSセンサー(3軸地磁気)、~~ **MPU9250**MEMSセンサー(3軸ジャイロ + 3軸加速度 + 3軸地磁気) 、TFT LCDなどを備えています。簡易版"Leap Motion"のような3Dリモートジェスチャーコントローラなどを短時間で作ることが出来るでしょう。

M5Go CHG.ベースはPOGOピン、M5GoベースはPORT B, PORT C, 2つのLEDバー(SK6812)で構成されています。

## 特徴

- プログラミングサポート
  - Arduino
  - Blockly
  - ESP-IDF
  - Python
- LEGO 互換ホール
- [TFカード](https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89)サポート

## スペック

|項目|詳細|
|:---|:---|
|ESP32| 240MHz x 2コア, 600 DMIPS, 520KB SRAM, 4MB pSRAM, Wi-Fi, デュアルモードBluetooth|
|Flash| 16MB |
|電源入力| 5V @ 500mA |
|インターフェース | USB Type-C x 1, Grove(I2C+I/0+UART) x 1 |
|画面| 2 inch, 320x240 Colorful TFT LCD, ILI9342|
|スピーカー| 1W-0928 |
|マイク| MEMS Analog BSE3729 Microphone|
|LED| SK6812 3535 RGB LED x 10 |
|MEMS| ~~MPU6050, MAG3110~~ MPU9250 (MPU6500 + AK8963) |
|電池| 150mAh @ 3.7V 内蔵|
|動作温度| 32°F to 104°F ( 0°C to 40°C ) |
|サイズ| 54 x 54 x 12.5 mm |
|ケース| プラスチック ( PC ) |
|重量| 56g |

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

~~*MPU6050 i2c address: 0x68*~~

~~*MAG3110 i2c address: 0x0E*~~

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

- 1x M5Stack FIRE
- 1x M5GO ボトムモジュール
- 1x M5GO チャージベース
- USB Type-C ケーブル
- ユーザーマニュアル

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
  - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - ~~[MPU6050](https://www.invensense.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf)~~
  - ~~[MAG3110](https://www.nxp.com/docs/en/data-sheet/MAG3110.pdf)~~
  - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)
  - [MPU9250レジスタマップ](https://www.invensense.com/wp-content/uploads/2015/02/RM-MPU-9250A-00-v1.6.pdf)
  - [AK8963 (日本語)](https://strawberry-linux.com/pub/AK8963.pdf)
  - [AK8963 (英語)](https://www.akm.com/akm/en/file/datasheet/AK8963C.pdf)

- **GitHub**
  - [M5Stack](https://github.com/m5stack/M5Stack)
  - [M5GO](https://github.com/m5stack/M5GO)

- **クイックスタート (Arduino)**
  - [macOS](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS)
  - [Windows](/en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](/en/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
    <img src="assets/img/product_pics/core/fire/product_pic_fire.jpg" alt="fire_01" width="300px" height="300px">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/simple_sch_just_for_fire.jpg" alt="fire_02" width="300px" height="300px">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/interface_fire.jpg" alt="fire_03" width="300px" height="300px">
</figure>

## 関連情報

- [M5Stack FIRE 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/3953/)
- [M5Stack FIRE 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-PSRAM-2-0-IoT-ESP32-16M-FLash-4M-PSRAM-BLE/3226069_32847906756.html)
