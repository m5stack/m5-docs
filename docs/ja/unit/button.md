# BUTTON ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-HMI-Unit-Kit-Including-4-Sensor-Joystick-Dual-Button-Button-CardKB-Mini-Keyboard-IoT/33001105045.html)**

## 概要

**<mark>BUTTON</mark>**ユニットは一つのボタンを備えたユニットです。ボタンが押されるとL、リリースされるとHを出力します。  
NCピンは使用されていません。信号ポートはBtn(GPIO36)です。Grove Bポートで通信します。

**ユニット図：**

<img src="assets/img/product_pics/unit/button/unit_button_02.png">

**信号出力：**

<img src="assets/img/product_pics/unit/button/unit_button_03.png">

## 特徴

- GROVEインターフェースサポート、[UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## パッケージ内容

- 1x BUTTON ユニット
- 1x Grove ケーブル

## アプリケーション

- 電灯スイッチ
- リモコンスイッチ

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino)。*

```clike
#include <M5Stack.h>

// declaration
int cur_value = 0;

// initialization
M5.begin();// init
pinMode(36, INPUT);// BUTTON Pin

// read data
cur_value = digitalRead(36);// read the value of BUTTON
M5.update();
```

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.png">

## 回路図

<img src="assets/img/product_pics/unit/button_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>Button Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>
