# GPSモジュール {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Stock-Offer-GPS-Module-with-Internal-External-Antenna-MCX-Interface-IoT-Development-Board-for/32840757048.html)**

## 概要

**<mark>GPS</mark>**モジュールはu-bloxのNEO-M8Nを採用した小型のGPSモジュールです。

M5Coreにスタックしたら[UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)または[MicroPython](http://www.micropython.org)を利用してプログラムすることができます。プログラムを書き込んだら、外や窓際に置いているだけで、GPSモジュールはグローバルポジション情報を取得することができます。

M5Coreの電源を入れて。[サンプル](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)を書き込んだら、スクリーンに串口GPSモジュールが受け取った情報を表示します。

<img src="assets/img/product_pics/module/module_gps_07.png" width="70%" height="70%">

NEO-M8Nは、複数のGNSSシステム（Beidou、Galileo、GLONASS、GPS / QZSS）をサポートする72チャンネルの[u-blox](https://www.u-blox.com)M8 GNSSエンジンを統合しており、3つのGNSSシステムから同時にデータを受信できます。

GPSモジュールはデフォルトでは**UART2(GPIO16, GPIO17)**でM5Coreと通信します。 ([u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)を通して、ボーレートを変更可能）

GPIO16、GPIO17を他の目的に使用する場合は、GPSモジュールにデフォルトで接続されているTXDとRXDをカッターで切断し、ハンダまたは0Ω抵抗を使用してそれらを別のポート（GPIO3、GPIO13、GPIO1、GPIO5）に接続する必要があります。

*シリアル接続：ボーレート(デフォルト 9600bps)、データビット数 (8ビット)、スタートビット(1ビット)、ストップビット(1ビット)、 パリティ(なし)*

<img src="assets/img/product_pics/module/module_gps_06.png" width="70%" height="70%">

!> **M5Stack Fire**ではPSRAMとの接続にGPIO16/17を使用しており、デフォルトではGPSモジュールのTXD/RXD(GPIO16, GPIO17)と重複しています。その為、M5Stack FireからGPSモジュールを利用する場合は、GPSモジュール上のTXDとRXDのデフォルトパターンをカッターなどでカットし、半田や0Ω抵抗を用いて別のポートにつなぎ変える必要があります。

## 特徴

- NEO-G8N搭載
- 動作電圧: 2.7 ~ 3.6
- 動作温度: -40 ~ 80°C
- アンテナタイプ: 内蔵または外付けアンテナを選択可能
- 3つのGNSSシステムデータを受信可能
- 水平位置精度：最小 2.5m
- u-center-just-for-Windowsによる簡単なファームウェアアップグレードのためのフラッシュ内蔵
- 高受信感度 (–167 dBm)
- 最大 3 GNSS 同時受信可能（GPS, Galileo, GLONASS, BeiDou/COMPASS)
- NEO‐7およびNEO‐6シリーズとの下位互換性

## パッケージ内容

- 1x GPSモジュール
- 1x 外付けアンテナ

## アプリケーション

- 子供向けGPSブレスレット
- GPSによる物流トラッキングシステム

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**
- **[フォーラム](http://forum.m5stack.com/)**
- **データシート**
  - [NEO-M8N](https://www.u-blox.com/sites/default/files/NEO-M8-FW3_DataSheet_%28UBX-15031086%29.pdf)
- **[GPS情報](https://www.u-blox.com/zh/product/neo-m8-series)**
- **[TinyGPS++ライブラリ公式](http://arduiniana.org/libraries/tinygpsplus/)**
- **[u-bloxプロトコルマニュアル](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)**


## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)。*

```clike
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

`GPSRaw.ino`を実行後、シリアルターミナルには以下の情報が表示されます。

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_01.png">

**プロトコル：[u-bloxプロトコルマニュアル](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)を参考にしてください。以下は、NMEAプロトコルでxxRMCメッセージを取得する例です。**

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_02.png">

## 回路図

<img src="assets/img/product_pics/module/gps_sch.png">
