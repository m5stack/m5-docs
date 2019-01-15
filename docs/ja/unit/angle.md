# ANGLE ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_angle_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](#購入リンク)**

## 概要

**<mark>ANGLE</mark>**ユニットは可変抵抗器です。回転角度検出や音量調節などに利用できます。

## 特徴

- サポート[UiFlow](http://flow.m5stack.com)プログラミング, [Arduino](http://www.arduino.cc)プログラミング
- LEGO 互換ホール

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino).*

```arduino
#include <M5Stack.h>

// select the input pin for the potentiometer
#define sensorPin 36

// declaration
int cur_sensorValue = 0;

// initialization
M5.begin();
pinMode(sensorPin, INPUT);

// read data
cur_sensorValue = analogRead(sensorPin);
```

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_02.png" width="69%" height="69%">

## 回路図

<img src="assets/img/product_pics/unit/angle_sch.png">

### ピンマッピング

<table>
<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>角度センサーUnit</td><td>センサーピン</td><td> </td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 関連情報

- [ANGLE ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-GPIO-Co-n-nec-to-r/3226069_32931834705.html)