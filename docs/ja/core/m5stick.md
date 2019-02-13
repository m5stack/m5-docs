# M5Stick

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="250" height="250">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="gray_02" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)** &nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp; 🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-M5Stick-ESP32-1-3-OLED-80-mah-Ir/32947692973.html)**&nbsp;&nbsp;&nbsp;

## 概要

<mark>**M5Stick**</mark>は1.3インチのOLEDスクリーン(64x128)、LED、ボタン、ブザー、IR送信機と80mAhの電池を内蔵した開発用ボードです。小型なのでウェアラブルデバイスとして使用したり、壁などに固定して利用することが可能です。

**M5Stick**は２種類のモデルがあります。通常版とMPU9250版です。MPU9250版には９軸のIMUが搭載され、さらに`WATCH BELT`、`WALL`、`BRICK`が付属します。

## 特徴

- サポートプログラミング
  - Arduino
  - UiFlow (Blockly / MicroPython)
- ウェアラブル
- MEMS IMU(MPU9250版のみ)

## ピンマップ

 <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="250" height="250">

**青色LED & ボタン & ブザー & IR送信機**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO17</td><td>GPIO19</td><td>GPIO26</td><td>GPIO35</td></tr>
 <tr><td>IR Transmitter</td><td>Transmitter Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>Blue LED</td><td> </td><td>LED Pin</td><td> </td><td> </td></tr>
<tr><td>BUZZER</td><td> </td><td> </td><td>BUZZER Pin</td></tr>
<tr><td>BUTTON</td><td> </td><td> </td><td> </td><td>BUTTON Pin</td></tr>
</table>

**OLED**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td>
 <tr><td>OLED</td><td>CS</td><td>DC</td><td>RST</td>
</table>

**GROVEインタフェース**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVEインタフェース</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**GRAY (MPU9250有り):**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>9-axis attitude sensor(MPU9250)</td><td>SCL</td><td>SDA</td>
</table>

**<mark>メモ:</mark>**

*各コアの主な仕様は以下の表の通りです。更に詳細な情報が知りたい方は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_ja.md)から。*

<img src="assets/img/product_pics/core/core_comparison_04_ja.png">

<img src="assets/img/product_pics/core/core_comparison_05_ja.png">

## パッケージ内容

- 1x M5Stick including 80mAh-Battery
- 1x Type-C USB Cable

**GRAY (MPU9250有り):**
- アクセサリ: `WATCH BELT`、`WALL`、 `BRICK`

## 回路図

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

完全な回路図は[こちら](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick)から。

## 関連リンク

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## サンプルコード

- **Arduino**
  - [M5Stick Factory Test](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)
  - [M5Stick Watch](https://github.com/eggfly/StickWatch)

    <iframe width="560" height="315"        src="https://www.youtube.com/embed/kw5ut5MAkZw" frameborder="0"     allow="accelerometer; autoplay; encrypted-media; gyroscope;      picture-in-picture" allowfullscreen></iframe>

- **UIFlow**

  - [White square game](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)
