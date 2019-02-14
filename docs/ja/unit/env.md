# ENV ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_env.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_env_grove_a.png" width="30%" height="30%">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-ESP32-Basic-Core-Development-Kit-Extensible-Micro-Control-Wifi-BLE-IoT-Prototype/3226069_32837164440.html?spm=2114.12010615.8148356.2.3b9b2de96y27jH)**

## 概要

**<mark>ENV</mark>**ユニットは周辺の温度・湿度・気圧を取得する事ができます。

## 特徴

- 温度:
  - 計測範囲: 20 ~ 60℃
  - 精度: ±0.2℃
- 湿度:
  - 計測範囲: 20 ~ 95℃
  - 精度: 0.1%
- 気圧:
  - 計測範囲: 300 ~ 1100hPa
  - 精度: ±1hPa
- サポート[UiFlow](http://flow.m5stack.com)プログラミング, [Arduino](http://www.arduino.cc)プログラミング
- LEGO 互換ホール

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino IDE

以下はENVユニット向けのサンプルコードです。周囲の温度、湿度、気圧を計測します。事前準備として、`Adafruit BMP280 Library`をインストールする必要があります。Arduino IDEの`Preferences`->`追加のボードマネージャURL`に`https://adafruit.github.io/arduino-board-index/package_adafruit_index.json`を追記したのち、`スケッチ`->`ライブラリをインクルード`->`ライブラリを管理`->`Adafruit BMP280`と検索します。

*以下のコードは一部抜粋です。完全なコードは[こちらから](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV).*

```arduino
/*
    Install Adafruit BMP280 Library first.
*/
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>

// new two objects
DHT12 dht12;
Adafruit_BMP280 bme;

// initialization
M5.begin();
Wire.begin();
bme.begin();

// read data
float tmp = dht12.readTemperature();
float hum = dht12.readHumidity();
float pressure = bme.readPressure();
```

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png">

## 回路図

<img src="assets/img/product_pics/unit/env_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>