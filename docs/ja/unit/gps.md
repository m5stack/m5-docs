# Unit GPS {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_gps_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_grove_c.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-GPS-BDS-Mini-Unit-Board-AT6558-MAX2659-with-GROVE-Port-UART-Interface-M5GO-M5Stack/32959837627.html)**

## 概要

**<mark>GPS</mark>**ユニットは、中科微(Zhongkewei)のナビゲーションチップ**AT6558**と信号増幅チップ**MAX2659**を統合したユニットです。 AT6558は強力な性能を備えた車載レベルのチップで、複数の衛星ナビゲーションシステムをサポートしています。同時に6つの衛星ナビゲーションシステムからGNSS信号を受信することができ、これにより、正確なグローバル位置情報を把握することができます。市街地はもちろん、渓谷や高架下においても位置情報を取得することが可能です。このモジュールは、車両監視、バス情報、カーナビゲーションなどの製品に幅広く利用されています。M5CoreとGrove Cポートで接続します。  

シリアルパラメータ：ボーレート（デフォルト:9600bps）、スタートビット（1ビット）、ストップビット（1ビット）、チェックディジット（ノーパリティ）

## 特徴

- 仕様
  - 内蔵RF, base band, flash
  - 動作温度:-40~85℃
  - 位置決め精度：2.5メートル（CEP50、広場）
  - チャンネル：56
  - BDS / GPS / GLONASS衛星ナビゲーションシステムの単一測位、任意の組合せでのマルチ測位をサポート
  - D-GNSS差動ポジショニングをサポート
  - 測位更新周波数：1〜10Hz
  - 最大高さ：1800メートル
  - 最高速度：515 m / s
  - 最大加速度：≦4 G
- 消費電力
  - BDS / GPSデュアルモード連続動作：<23mA（@ 3.3V）
  - スタンバイ：<10uA（@ 3.3V）
- 感度
  - トラッキング：-162dBm
  - キャプチャー：-148dBm
  - コールドスタート：-146dBm
- 起動時間
  - コールドスタート：35秒
  - ウォームスタート：32秒
  - ホットスタート：1秒
- 動作温度： -40〜85°C
- LEGO互換ホール

## パッケージ内容

- 1x GPSユニット
- 1x Groveケーブル

## アプリケーション

- 自動車ナビゲーションシステム
- 高精度タイミング同期
- インテリジェント通報システム

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

### 1. Arduino

*完全な `GPSRaw.ino`のソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/Arduino)。*

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

`GPSRaw.ino`を書き込んだら、シリアルターミナルで情報を確認することができます。

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

**分析：**

**$GNRMC,063012.000,A,2234.87140,N,11357.22414,E,0.69,171.74,240419,,,A*7A**

UTC 時間 06 时 30 分 12 秒，北緯 22.58119°、東経 113.95357°、日時 2019 年 04 月 24 日  

?> 緯度と経度はdddmm.mmmmmの分を60で割って、ddd.dddddに変換しています。例えば2234.87140なら34.87140 / 60 = 0.58119 なので22.58119になります。


<img src="assets/img/product_pics/unit/gps/unit_gps_06.png">

<img src="assets/img/product_pics/unit/gps/unit_gps_05.png">

## 回路図

<img src="assets/img/product_pics/unit/gps_sch.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE C)</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>GPS Unit</td><td>Signal Transmitter(TXD)</td><td>Signal Receiver(RXD)</td><td>5V</td><td>GND</td></tr>
</table>
