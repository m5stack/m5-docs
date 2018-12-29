# LIGHT ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_light_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Light-Unit-with-Photoresistance-Grove-Port-Analog-Digital-Output-Compatible-with-M5GO-FIRE-ESP32/3226069_32920589923.html?spm=2114.12010615.8148356.4.1be27011RbDBo5)**

## 概要

**<mark>LIGHT</mark>**ユニットは調整抵抗付き明るさセンサーです。明るさをアナログ値として、光のオンオフをデジタル値(0/1)として取得できます。

## 特徴

- 10KΩ調整抵抗による閾値調整可能
- アナログ & デジタル出力
- Grove インターフェース
- LEGO 互換ホール

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

// initialization
M5.begin();
dacWrite(25, 0);// disable the speak noise
pinMode(26, INPUT);// LIGHT Pin setting

// read data
analogRead_value = analogRead(36);// read analog value of LIGHT
digitalRead_value = digitalRead(26);
```

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_01.png" width="28%" height="28%"> <img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_02.png" width="69%" height="69%">

## 回路図

<img src="assets/img/product_pics/unit/light_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LIGHT Unit</td><td>アナログ値出力端子</td><td>デジタル値出力端子</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**