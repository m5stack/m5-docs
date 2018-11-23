# M5Stack BASIC

## 概要

**<mark>M5Stack BASIC</mark>**は**ESP32**チップがベースです。**Blockly**、**Arduino**、**MicroPython**などでプログラミングすることができます。

**M5Stack BASIC**にはESP32プログラミングに必要なものに加えて、TFT液晶も装備されています。簡易版"Leap Motion"のような3Dリモートジェスチャーコントローラなども短時間で作ることが出来るでしょう。

ボトムボードはDIY用のI2Sピン(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)の他に、M-Bus上のGPIOを拡張利用できるようにデザインされています。

?>M5Stack BASICにIMUは内蔵されていません。

## 特徴

- プログラミングサポート
  - Arduino
  - ESP-IDF
  - MicroPython
- [TFカード](https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89)サポート

## スペック

|項目|詳細|
|:---|:---|
|ESP32| 240MHz x 2コア, 600 DMIPS, 520KB SRAM, Wi-Fi, デュアルモードBluetooth|
|Flash| 4MB |
|電源入力| 5V @ 500mA |
|インターフェース| USB Type-C x 1, Grove(I2C+I/0+UART) x 1|
|画面| 2 inch, 320x240 Colorful TFT LCD, ILI9342 |
|スピーカー| 1W-0928|
|電池| 150mAh @ 3.7V 内蔵|
|動作温度| 32°F to 104°F ( 0°C to 40°C ) |
|サイズ| 54 x 54 x 12.5 mm |
|ケース| プラスチック ( PC )|
|重量| 120g (ボトムモジュール含む）, 100g（コアのみ） |

## ピンマップ

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

**GROVE A**

| GROVE A(I2C) | ESP32 Chip |
|:-------------|:-----------|
| SCL          | GPIO22     |
| SDA          | GPIO21     |
| 5V           | 5V         |
| GND          | GND        |

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

- 1x M5Stack BASIC
- 1x M5Stack BASIC ボトムモジュール
- USB Type-C ケーブル
- ユーザーマニュアル

## ドキュメント

- **回路図**
  - [Schematic](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)

- **サンプルコード**
  - [Arduino Example](https://github.com/m5stack/M5Stack/tree/master/examples)

- **データシート**
  - [ESP32(中国語)](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

- **GitHub**
  - [M5Stack](https://github.com/m5stack/M5Stack)

- **クイックスタート (Arduino)**
  - [macOS](/en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS)
  - [Windows](/en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](/en/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
  <img src="assets/img/product_pics/core/basic/basic_01.jpg" alt="basic_01" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_02.jpg" alt="basic_02" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_03.jpg" alt="basic_03" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_04.jpg" alt="basic_04" width="40%" height="40%">
</figure>
<figure>
  <img src="assets/img/product_pics/core/basic/basic_05.jpg" alt="basic_05" width="40%" height="40%">
</figure>

## 関連情報
  
- [M5Stack BASIC 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/3647/)
- [M5Stack BASIC 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-ESP32-Wifi-BLE-IoT-arduino/3226069_32837164440.html)