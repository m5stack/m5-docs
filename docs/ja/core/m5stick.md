# M5Stick

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stick_get_started_arduino)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)** &nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp; 🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-New-M5Stick-Mini-Development-Kit-ESP32-1-3-OLED-80mAh-Battery-Inside-Buzzer-IR/3226069_32947692973.html?spm=a2g1y.12024536.productList_5885011.subject_1)**&nbsp;&nbsp;&nbsp;

## 概要

<mark>**M5Stick**</mark>は1.3インチのOLEDスクリーン(64x128)、LED、ボタン、ブザー、IR送信機と80mAhの電池を内蔵した開発用ボードです。小型なのでウェアラブルデバイスとして使用したり、壁などに固定して利用することが可能です。

**M5Stick**は２種類のモデルがあります。通常版とMPU9250版です。MPU9250版には９軸のIMUが搭載され、さらに`WATCH BELT`、`WALL`、`BRICK`が付属します。

## 特徴

- サポートプログラミング
  - Arduino
  - UiFlow (Blockly / MicroPython)
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

## 関連リンク

- **データシート** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 関連動画

- **m5stackの紹介**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>