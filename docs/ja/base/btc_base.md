# BTC ベース

<img src="assets/img/product_pics/module/module_btc_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_03.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-GPS-Module-with-Internal-External-Antenna-MCX-Interface-IoT-Development-Board-for/3226069_32840757048.html?spm=2114.12010615.8148356.2.7c6c2743BZthY3)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-GPS-Module-with-Internal-External-Antenna-MCX-Interface-IoT-Development-Board-for/3226069_32840757048.html?spm=2114.12010615.8148356.2.7c6c2743BZthY3)** -->

# 概要

BTCベースはDHT12を内蔵しており、周囲の温度、湿度を検出することが可能です。あなたのM5StackとBTCベースを組み合わせて、情報表示ボード、小型のIoT集中制御デバイスとして置いておくことができます。付属のUSB Type-Cケーブルを利用することで、ベース経由でM5Stackを充電することができます。

# 特徴

- DHT12内蔵

# パッケージ内容

- USB Type-C ケーブル
- M3 x 16 ネジ
- ツール

# ピンマップ

**DHT12**

| DHT12  | ESP32  |
|:------:|:------:|
| SCL    | G22    |
| GND    | GND    |
| SDA    | G21    |
| 3V3    | 3V3    |

<img src="assets/img/product_pics/module/module_btc_dht12_pinmap.png">

# ドキュメント

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## サンプルコード

### Arduino IDE

```arduino
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> // DHT12とのI2C通信で使用

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

`BTC.ino`サンプルは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino)から。