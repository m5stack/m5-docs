# BTC ベース {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_btc_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_03.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-GPS-Module-with-Internal-External-Antenna-MCX-Interface-IoT-Development-Board-for/3226069_32840757048.html?spm=2114.12010615.8148356.2.7c6c2743BZthY3)**

<!-- :memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-GPS-Module-with-Internal-External-Antenna-MCX-Interface-IoT-Development-Board-for/3226069_32840757048.html?spm=2114.12010615.8148356.2.7c6c2743BZthY3)** -->


## 概要

**<mark>BTC</mark>**モジュールは温度と湿度を計測することができるDHT12センサーを内蔵しています。
また充電スタンドとして利用できます。これにより小型温湿度計やBTCティッカーなどを作成する事が可能です。

## 特徴

- DHT12内蔵
- 充電スタンド

## パッケージ内容

- 1x BTC モジュール
- 1x USB Type-C ケーブル
- 2x M3x16ネジ
- 1x 六角レンチ

## ピンマップ

| DHT12        | ESP32      |
| :----------:  |:------------:|
| SCL          | G22 |
| GND          | GND |
| SDA          | G21 |
| 3V3          | 3V3 |

<figure>
    <img src="assets/img/product_pics/module/module_btc_dht12_pinmap.png">
</figure>

## サンプルコード

```clike
/*
  Example for DHT12 Sensor
*/

#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.

void setup() {
    M5.begin();
    Wire.begin();
    M5.Lcd.setBrightness(10);
    Serial.println(F("ENV Unit(DHT12 and BMP280) test..."));
}

void loop() {
    float tmp = dht12.readTemperature();
    float hum = dht12.readHumidity();
    Serial.printf("Temperatura: %2.2f*C  Humedad: %0.2f%%\r\n", tmp, hum);

    M5.Lcd.setCursor(0, 0);
    M5.Lcd.setTextColor(WHITE, BLACK);
    M5.Lcd.setTextSize(3);
    M5.Lcd.printf("Temp: %2.1f  \r\nHumi: %2.0f%%  \r\n", tmp, hum);

    delay(100);
}
```

特定の `BTC.ino`, クリック[ここで](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino).