# M5GO IoT Starter Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_04" width="250" height="250">

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-M5GO-IoT-arduino-ESP32-MicroPython-IR-550/32881911596.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5GO IoT Starter Kit</mark>**は6つのユニット(ENV, IR, RGB, PIR, ANGLE, HUB)と1つの白いM5Core(ESP32ベース)からなる、IoTプログラミング学習キットです。

[UIFlow](http://flow.m5stack.com)や**Arduino IDE**を使用してプログラミングすることができます。

また私たちはIoTプログラミングトレーニングコースも提供しています。 興味がある方は、電子メール<tech@m5stack.com>までご連絡ください。

## 特徴

- プログラミングサポート
  - [UIFlow](http://flow.m5stack.com)
  - Arduino
  - MicroPython
- TFカード (サポート最大16GB)

## ピンマップ

#### M5GOピン

**LCD画面 & TFカード**

*LCD解像度：320x240*
*TFカード(最大16GB)*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF卡</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**ボタン & スピーカー**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>ボタンピン</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>スピーカー</td><td> </td><td> </td><td> </td><td>スピーカーピン</td></tr>
</table>

**GROVEポートA**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**9DoFセンサーMPU9250**

*I2Cアドレス: 0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

#### M5GOベース

**GROVEポートB**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE B</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>

**GROVEポートC**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LEDバー & MIC**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td><td>GPIO25</td></tr>
 <tr><td>LEDバー</td><td>SIGピン</td><td> </td><td> </td></tr>
 <tr><td>MIC</td><td> </td><td>MICピン</td><td> </td></tr>
</table>

## スペック

| 項目 | 詳細 |
|:----|:-----|
| <mark>ESP32</mark> | 240MHz x 2 cores, 600 DMIPS, 520KB SRAM, Wi-Fi, デュアルモード Bluetooth |
| Flash | 16MB |
| 電源入力 | 5V @ 500mA |
| インターフェース | Type-C x 1, Grove(I2C+I/0+UART) x 1 |
| LCD | 2 inch, 320x240 フルカラーTFT LCD, ILI9342 |
| スピーカー | 1W-0928 |
| マイク | Analog BSE3729 Microphone |
| LED |	SK6812 3535 RGB LED x 10 |
| センサー | MPU9250 |
| 電池 | 550mAh @ 3.7V 内蔵 |
| 動作温度 | 0°C to 40°C ( 32°F to 104°F ) |
| サイズ | 54 x 54 x 12.5 mm |
| ケース | プラスチック ( PC ) |

**<mark>メモ:</mark>**

*各コアの主な仕様は以下の表の通りです。*

- *比較表の**チェック**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_ja.md)。*

- *比較表の**ダウンロード**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04_ja.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05_ja.png">

## パッケージ内容

- 1x M5Core（白）
- 6x 6種類のユニット(ENV, IR, RGB, PIR, ANGLE, HUB)
- 4x LEGO アクセサリ
- 3x Grove ケーブル
- 1x USB Type-C ケーブル
- 1x ユーザーマニュアル

## 関連リンク

- **データシート**
  - [ESP32(中国語)](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 関連動画

- **m5stackの紹介**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>