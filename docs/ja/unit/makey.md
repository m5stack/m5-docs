# MAKEY ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_makey_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_makey_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Makey-Unit-MEGA328P-Inside-16Key-Fruit-Paino-with-NEO-Pixel-and-BUZZER-for-ESP32/3226069_32924883456.html?spm=a2g1y.12024536.productList_5885013.subject_23)**

## 概要

**<mark>MAKEY</mark>**ユニットはATmega328Pを内蔵し、自由に使用可能な16のIOピンを備えています。I2Cでコントロール可能です。I2Cアドレスは**<mark>0x51</mark>**です。

## 特徴

- ATmega328P 内蔵
- 16 Keys Fruit Piano(PD0-7 & PB0-5)
- 1x NeoPixel pin(PC2)
- 1x Buzzer pin(PC3)
- ブザー内蔵
- Grove インターフェース
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
- LEGO 互換ホール

## アプリケーション

- フルーツピアノ
- Adafruitのライブラリを用いたRGB アプリケーション

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_05.png" width="40%" height="40%">

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY/Arduino).*

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

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/MAKEY/example_unit_makey_01.png" width="50%" height="50%">

<!-- ## 回路図

<img src="assets/img/product_pics/unit/makey_sch.JPG"> -->

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_03.png" width="30%" height="30%">

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[モジュール内のMEGA328ファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/firmware_328p)**