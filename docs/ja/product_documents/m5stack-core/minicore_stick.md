# M5Stick

[中文](ja/product_documents/m5stack-core/minicore_stick) | [English](/en/product_documents/m5stack-core/minicore_stick) | 日本語

## 概要

<mark>**M5Stick**</mark>は1.3インチのOLEDスクリーン(64x128)、LED、ボタン、ブザー、IR送信機と80mAhの電池を内蔵した開発用ボードです。小型なのでウェアラブルデバイスとして使用したり、壁などに固定して利用することが可能です。

**M5Stick**は２種類のモデルがあります。通常版とMPU9250版です。MPU9250版には９軸のIMUが搭載され、さらに`WATCH BELT`、`WALL`、`BRICK`が付属します。

## 特徴

- サポートプログラミング
  - Arduino
  - UIFlow (Blockly / MicroPython)
- ウェアラブル
- MEMS IMU(MPU9250版のみ)

## スペック

| 項目   | 詳細                      |
|:------|:--------------------------|
| Core  | M5Stick                   |
| カラー | 白 (通常版) / 灰 (MPU9250版)|

## ピンマップ

| *BLUE_LED* | *ESP32* |
|:-----------|:--------|
| LED_Pin    | GPIO19  |

| *BUTTON*   | *ESP32* |
|:-----------|:--------|
| Button_Pin | GPIO35  |

| *BUZZER*   | *ESP32* |
|:-----------|:--------|
| Buzzer_Pin | GPIO26  |

| *IR*       | *ESP32* |
|:-----------|:--------|
| Buzzer_Pin | GPIO17  |

| *GROVE* | *ESP32* |
|:--------|:--------|
| SDA     | GPIO25  |
| SCL     | GPIO13  |

**Optional:**

| *MPU9250* | *ESP32* |
|:----------|:--------|
| SDA       | GPIO22  |
| SCL       | GPIO21  |

## パッケージ内容

### 通常版・MPU9250版共通

- 1x M5Stick 内蔵 80mAh バッテリー
- 1x USB Type-C ケーブル

### MPU9250版のみ

- 付属品
  - `WATCH BELT`
  - `WALL`
  - `BRICK`

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

- **クイックスタート　(Arduino)**
  - 近日公開...

<figure>
  <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_01.jpg" alt="m5stick_01" height="300px" width="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.jpg" alt="m5stick_02" height="300px" width="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.jpg" alt="m5stick_03" height="300px" width="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="m5stick_04" height="40%" width="40%">
</figure>

## 関連情報

- [M5Stick 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-M5Stick-ESP32-1-3-OLED-80-mah-Ir/3226069_32947692973.html)