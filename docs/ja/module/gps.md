# GPSモジュール

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-gps-mcx-iot-arduino-ESP32/3226069_32840757048.html)**

## 概要

**<mark>GPS</mark>**モジュールはu-bloxのNEO-M8Nを採用した小型のGPSモジュールです。

**GPS**モジュールはu-bloxのM8 GNSSエンジンにより、高い性能と受信感度を発揮します。

## 特徴

- GPS NEO-M8Nモジュール
- 高性能
- 高受信感度 (–167 dBm)
- 最大 3 GNSS 同時受信可能（GPS, Galileo, GLONASS, BeiDou/COMPASS)
- 内蔵または外付けアンテナを選択可能

## パッケージ内容

- 1x GPSモジュール
- 1x 外付けアンテナ

## アプリケーション

- 子供向けGPSブレスレット
- GPSによる物流トラッキングシステム

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[データシート](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

## サンプルコード

### Arduino IDE

*特定のルーチン`GPSRaw.ino`クリックしてください[ここで](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)。*

```arduino
#include <M5Stack.h>

/* By default, GPS is connected with M5Core through UART2 */
HardwareSerial GPSRaw(2);

void setup() {
  M5.begin();
  GPSRaw.begin(9600);// GPS init
  Serial.println("hello");
  termInit();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()) {
    int ch = Serial.read();
    GPSRaw.write(ch);
  }
  if(GPSRaw.available()) {
    int ch = GPSRaw.read();// read GPS information
    Serial.write(ch);
    termPutchar(ch);
  }
}
```

ダウンロードルーチン`GPSRaw.ino`後に, シリアルディスプレイ端末は以下の同様の情報を印刷します.

```
$GPGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5*02
$BDGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5*13
$GPGSV,1,1,00*79
$BDGSV,1,1,00*68
$GNRMC,,V,,,,,,,,,,M*4E
$GNVTG,,,,,,,,,M*2D
$GNZDA,,,,,,*56
$GPTXT,01,01,01,ANTENNA OPEN*25
```

## 回路図

<img src="assets/img/product_pics/module/gps_sch.png">
