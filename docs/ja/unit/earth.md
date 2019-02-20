# EARTH ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_earth.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_earth_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Earth-Module-Grove-Compatible-Soil-monitoring-Analog-and-Digital-Output/32922643696.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**


## 概要

**<mark>EARTH</mark>**ユニットは土壌に含まれる水分量を検出する事ができるユニットです。土壌中の水分量をアナログ値として取得できるほか、水分量が一定値を超えているかどうかをデジタル値(0/1)として取得可能です。

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_03.png" width="50%" height="50%">

## 特徴

- 10KΩ調整抵抗による閾値調整可能
- アナログ & デジタル出力
- Grove インターフェース
- [UiFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## サンプルコード

### 1. Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/Arduino)。*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  dacWrite(25, 0);//disable the speak noise

  pinMode(26, INPUT);// set digital pin
}

uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

void loop() {
  analogRead_value = analogRead(36);// read analog value of EARTH
  digitalRead_value = digitalRead(26);// read digital value of EARTH
}

```

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.png">

## 回路図

<img src="assets/img/product_pics/unit/earth_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>アナログ値出力端子</td><td>デジタル値出力端子</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 関連動画

**EARTH チュートリアル - 土壌中の湿度モニタリング 1**

<iframe width="560" height="315" src="https://www.youtube.com/embed/nMpe686jANA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**EARTH ケース - 土壌中の湿度モニタリング 2**

<iframe width="560" height="315" src="https://www.youtube.com/embed/AaiCRt06RWM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
