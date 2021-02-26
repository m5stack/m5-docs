# Dual BUTTON ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_dual_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_dual_button_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-New-Mini-Dual-Button-Unit-Mini-with-GROVE-Port-Cable-Connector-Compatible-with-FIRE/32923126250.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>Dual BUTTON</mark>**ユニットは2つのボタンが搭載されたユニットです。ボタンが押されるとLを出力し、リリースされるとHを出力します。ボタンA(青色)はGPIO36、ボタンB(赤色)はGPIO26に接続されています。Grove Bポートで利用します。

<img src="assets/img/product_pics/unit/dual_button/unit_dual_button_05.png" width="50%" height="50%">

**信号出力:**

<img src="assets/img/product_pics/unit/dual_button/unit_dual_button_08.png">

## 特徴

- GROVEインターフェースサポート、[UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## パッケージ内容

- 1x Dual BUTTON ユニット
- 1x Grove ケーブル

## アプリケーション

- ゲームコントローラー
- リモコンスイッチ

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino

*完全ナソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/Arduino)。*

```clike
#include <M5Stack.h>

// declaration
int cur_value_red = 0;
int cur_value_blue = 0;

// initialization
M5.begin();
pinMode(26, INPUT);// Red Button Pin setting
pinMode(36, INPUT);// Blue Button Pin setting

// read data
cur_value_red = digitalRead(26);
cur_value_blue = digitalRead(36);
M5.update();
```

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/example_unit_dual_button_05.png">

## 回路図

<img src="assets/img/product_pics/unit/dual_button_sch.png">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>DUAL_BUTTON Unit</td><td>青いボタンピン</td><td>赤いボタンピン</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

**DUAL BUTTON デモ - ゲームコントロール VARIOUS2**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Game-VARIOUS2.mp4" type="video/mp4">
</video>
