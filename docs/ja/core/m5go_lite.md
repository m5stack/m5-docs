# M5GO Lite {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_lite_01.png" alt="gray_02" width="250" height="250"><img src="assets/img/product_pics/core/m5go/m5go_lite_04.png" alt="gray_04" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-NEW-Lite-IoT-Development-Board-Kit-ESP32-MPU9250-Grove-16MFlash-DHT12-Temperature-Humidity-Sensor-Module/32965981279.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5GO Lite</mark>**は**ENV unit**と**M5Core White**のコンパクトなキットです。[M5GO IOT Starter Kit](ja/core/m5go_iot_starter_kit)のシンプルなバージョンです。

M5GO Liteは[UiFlow](http://flow.m5stack.com)やArduino IDEを使用してプログラミングすることができます。

教育用のコースなども用意しています。興味がある方は、お気軽にこちらのメールアドレスへご連絡ください。<tech@m5stack.com>

**<mark>メモ:</mark>**

*各コアの主な仕様は以下の表の通りです。更に詳細な情報が知りたい方は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_ja.md)から。*

<img src="assets/img/product_pics/core/core_comparison_04_ja.png">

<img src="assets/img/product_pics/core/core_comparison_05_ja.png">

## 特徴

- サポートする開発環境
  - Arduino
  - ESP-IDF
  - MicroPython
- TF Card サポート(最大16GB)

## パッケージ内容

- 1x M5Core(白)
- 1x M5GO Base
- 1x Units
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