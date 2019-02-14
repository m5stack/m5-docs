# GPS {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_gps_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_grove_c.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-GPS-BDS-Mini-Unit-Board-AT6558-MAX2659-with-GROVE-Port-UART-Interface-M5GO-M5Stack/3226069_32959837627.html)**

<!-- :memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-GPS-BDS-Mini-Unit-Board-AT6558-MAX2659-with-GROVE-Port-UART-Interface-M5GO-M5Stack/3226069_32959837627.html?spm=a2g03.12010615.8148356.4.d2df160dp0aQSw)** -->

## 概要

**<mark>GPS</mark>** に内蔵されている **AT6558** は中国の中科微(Zhongkewei)という会社によって開発されたチップで、様々なタイプの衛星ナビゲーションシステムをサポートしています。 ６衛星ナビゲーションシステムからのGNSSシグナルを受信することで、位置、ナビゲーション、タイミングなどを取得可能です。従って、正確なグローバル位置情報を把握することができます。M5CoreのポートCを介してUART通信で接続されます。信号増幅チップは**MAX2659**が内蔵されています。

## 特徴

- サポート衛星ナビシステム: China BDS, USA GPS, Russia GLONASS, EURO GALILEO, Japan QZSS
- AT6558
  - 15mA 超低消費
  - 内蔵RF, base band, flash
  - 動作温度:-40~85℃
<!-- - GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程 -->
- LEGO互換ホール

## アプリケーション

- 自動車ナビゲーションシステム
- Intelligent Law enforcement location

## 関連リンク

- **[公式ビデオ](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[データシート]**
  - [AT6558](http://www.icofchina.com/d/file/xiazai/2016-12-05/b1be6f481cdf9d773b963ab30a2d11d8.pdf)
  - [MAX2659](https://datasheets.maximintegrated.com/en/ds/MAX2659.pdf)

- **[TinyGPS++ ライブラリ](http://arduiniana.org/libraries/tinygpsplus/)**

- **[CASIC マルチモード衛星ナビゲーション受信機 プロトコル仕様](http://www.icofchina.com/d/file/xiazai/2017-05-02/ea0cdd3d81eeebcc657b5dbca80925ee.pdf)**

- **[GnssToolKit3(Windows版)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

## サンプルコード

### 1. Arduino IDE

*完全な `GPSRaw.ino`のソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/Arduino)。*

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

After burnt the example code `GPSRaw.ino`, m5core and PC serial terminal will display following information

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

<img src="assets/img/product_pics/unit/gps_sch.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE C)</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>GPS Unit</td><td>Signal Transmitter(TXD)</td><td>Signal Receiver(RXD)</td><td>5V</td><td>GND</td></tr>
</table>
