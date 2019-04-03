# MAKEY ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_makey_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_makey_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Makey-Unit-MEGA328P-Inside-16Key-Fruit-Paino-with-NEO-Pixel-and-BUZZER-for-ESP32/3226069_32924883456.html)**

## 概要

**<mark>MAKEY</mark>**ユニットはATmega328Pを内蔵し、自由に使用可能な16本のIOピンを備えています。GroveポートAで接続し、I2Cで通信します。I2Cアドレスは**0x51**です。

*注意事項:**

1）ユニットのブザーで鳴らす場合

ユニットのGNDホールに接続したデュポン線の端を左手に持ちます。

もうひとつ別のデュポン線の端を右手に持ちます。右手のデュポン線をユニットのトーンホールに触れさせると、MAKEYから対応する音が鳴ります。

2）M5Coreのスピーカーで鳴らす場合

**GroveポートA**でM5Coreにユニットを接続し、こちらの[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version)を書き込みます。

あとはMakeyで鳴らすのと同じで、ユニットのGNDホールに接続したデュポン線の端を左手に持ちます。

もうひとつ別のデュポン線の端を右手に持ちます。右手のデュポン線をユニットのトーンホールに触れさせると、M5Coreから対応する音が鳴ります。

## 特徴

- ATmega328P 内蔵
- ブザー内蔵
- GROVEインターフェース、プログラミングサポート [UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)
- LEGO 互換ホール

## パッケージ内容

- 1x MAKEY ユニット
- 1x GROVE ケーブル

## アプリケーション

- フルートピアノ

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_05.png" width="40%" height="40%">

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[モジュール内のMEGA328ファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/firmware_328p)**

## サンプルコード

### 1. Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version)。*

```arduino
#include <M5Stack.h>
#include <Wire.h>

// initialization
M5.begin();
pinMode(21, INPUT); pinMode(22, INPUT);
Wire.begin();// Init I2C

// read data
Wire.requestFrom(MAKEY_ADDR, 2);
while (Wire.available()) {
  Key1 = Wire.read();//read data from MAKEY
  Key2 = Wire.read();//read data from MAKEY
  tone_key = (Key2<<8) | Key1;// the following picture will explain "tone_key"
}
```

<img src="assets/img/product_pics/unit/unit_example/MAKEY/tone_key_pitch_zh_CN.png">

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_04.png" width="30%" height="30%">

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/MAKEY/example_unit_makey_02.png">

## 回路図

<img src="assets/img/product_pics/unit/makey_sch.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_03.png" width="30%" height="30%">
