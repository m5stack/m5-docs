# PIR ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_pir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_pir_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-PIR-Sensor-Human-Body-Infrared-PIR-Motion-Sensor-Detector-Module-GPIO-GROVE-Connector/3226069_32931794651.html)**

## 概要

**<mark>PIR</mark>**ユニットは人間の動き（モーション）を検出する事が可能な赤外線センサーユニットです。誰かが通りすぎたかどうかを検知します。赤外線の変化を検知すると一定時間(ディレイタイムの間)HIGHを出力します。検知し続けている間はHIGHのままですが、人が離れたらLOWを出力します。

**Grove port B**でM5Coreと通信します。

## 特徴

- 測定可能距離 150cm
- ディレイタイム: 2s
- 検知範囲: < 100°
- 待機電流: < 60uA
- 動作温度: -20 - 80 °C
- GROVEインターフェース、サポートプログラミング[UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)
- LEGO 互換ホール

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino IDE

*以下のソースコードは一部です。完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/Arduino)。*

```arduino
#include <M5Stack.h>

// initialization
M5.begin();
pinMode(36, INPUT);// set pir sensor pin as input

// read data
int value = digitalRead(36);// read the pin(0: not detectd 1: detected)
M5.update();
```

### 2. UIFlow

*以下のソースコードは一部です。完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_03.png">

## 回路図

<img src="assets/img/product_pics/unit/pir_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>人体赤外線誘導Unit</td><td>赤外線検知ピン</td><td> </td><td>5V</td><td>GND</td></tr>
</table>
