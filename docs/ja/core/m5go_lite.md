# M5GO Lite {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_lite_01.png" alt="gray_02" width="250" height="250"><img src="assets/img/product_pics/core/m5go/m5go_lite_04.png" alt="gray_04" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-NEW-Lite-IoT-Development-Board-Kit-ESP32-MPU9250-Grove-16MFlash-DHT12-Temperature-Humidity-Sensor-Module/32965981279.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5GO Lite</mark>**は**M5Core**と**ENV unit**と[M5GO Bottom](ja/base/m5go_bottom)のコンパクトなキットです。[M5GO IOT Starter Kit](ja/core/m5go_iot_starter_kit)のシンプルなバージョンです。

M5GO Liteは[UIFlow](http://flow.m5stack.com)やArduino IDEを使用してプログラミングすることができます。

教育用のコースなども用意しています。興味がある方は、お気軽にこちらのメールアドレスへご連絡ください。<tech@m5stack.com>

## 特徴

- サポートする開発環境
  - [UIFlow](http://flow.m5stack.com/)
  - Arduino
  - MicroPython
- TF Card サポート(最大16GB)

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

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_ja.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_ja.png">

## パッケージ内容

- 1x M5Core(白)
- 1x M5GO Base
- 1x ENV Unit
- 1x GROVE ケーブル
- USB Type-C ケーブル
- ユーザーマニュアル

<img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="270" height="270"><img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="270" height="270">

## 関連リンク

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## サンプルコード

以下はENVユニット向けのサンプルコードです。周囲の温度、湿度、気圧を計測します。事前準備として、`Adafruit BMP280 Library`をインストールする必要があります。Arduino IDEの`Preferences`->`追加のボードマネージャURL`に`https://adafruit.github.io/arduino-board-index/package_adafruit_index.json`を追記したのち、`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理`->`Adafruit BMP280`と検索します。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/m5go/m5go_lite/Arduino/ENV)*

```arduino
/*
    Install Adafruit BMP280 Library first.
*/
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include "Adafruit_Sensor.h"
#include <Adafruit_BMP280.h>

// 宣言
DHT12 dht12;
Adafruit_BMP280 bme;

// 初期化
M5.begin();
Wire.begin();
bme.begin();

// データ読み込み
float tmp = dht12.readTemperature();
float hum = dht12.readHumidity();
float pressure = bme.readPressure();
```

**より多くのサンプルコードは[こちら](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_02.png" width="55%" height="55%">

## 関連動画

- **M5Stack紹介**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>