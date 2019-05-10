# COLOR SENSOR ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Color-Unit-TCS34725-Color-Sensor-RGB-Color-Sensor-Development-Board-Module-GROVE-I2C-Compatible/32946957647.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>COLOR SENSOR</mark>**ユニットは内蔵された**TCS3472**により、対象物表面の色を検出する事ができます。  
M5CoreとI2C通信します。I2Cアドレスは**0x29**です。

**色を特定する原理:**

TCS3472には、3×4アレイのフィルタ付きフォトダイオードと16bitのA/Dコンバータが組み込まれています。12個のフォトダイオードのうち、3個は赤フィルタ、3個は緑フィルタ、3個は青フィルタ、3個はフィルタなし（クリア）です。

<img src="assets/img/product_pics/unit/color/unit_color_07.png">

対象オブジェクトの色を検出すると、TCS3472は4つのチャンネル(赤(R)、緑(G)、青(B)、クリア(C))のデータを返します。赤、緑、青(RGB)のチャンネルの値を使用して、特定の光源の色度座標(x、y)を決定する事ができます。

<img src="assets/img/product_pics/unit/color/unit_color_04.png">

色度計算の概要:

<img src="assets/img/product_pics/unit/color/unit_color_05.png">

色度座標(x、y)を取得したら、推奨の色を取得するために下図を参照します。

<img src="assets/img/product_pics/unit/color/unit_color_06.png">

## 特徴

- 検出範囲: -40℃ ~ 85℃
- Groveインターフェース、[UIFlow](http://flow.m5stack.com)と[Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## パッケージ内容

- 1x COLOR ユニット
- 1x Grove ケーブル

## アプリケーション

- 色校正
- カラートラッキングロボット

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [TCS3472](https://ams.com/documents/20143/36005/TCS3472_DS000390_2-00.pdf)

## サンプルコード

### 1. Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/Arduino)。*

```arduino
/*
  Color test
    hardware: M5Stack

  please install the Adfruit TCS34725 library first ...
*/
#include <Wire.h>
#include <M5Stack.h>
#include "Adafruit_TCS34725.h"

// declaration
uint16_t clear, red, green, blue;
#define commonAnode true // set to false if using a common cathode LED

// new a object
Adafruit_TCS34725 tcs;
tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,TCS34725_GAIN_4X);

// initialization
M5.begin(true, false, false);
tcs.begin();
tcs.setIntegrationTime(TCS34725_INTEGRATIONTIME_154MS);
tcs.setGain(TCS34725_GAIN_4X);

// read data
tcs.getRawData(&red, &green, &blue, &clear);
```

このサンプルコードを書き込んだ後、PCのシリアルターミナルにはRGBC(red, green, blue, clear)の値を表示します。

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.png">

## 回路図

<img src="assets/img/product_pics/unit/color_sch.JPG">

## ピンマップ

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>COLORユニット</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

**COLOR デモ - 01**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/Color%20Unit.mp4" type="video/mp4">
</video>
