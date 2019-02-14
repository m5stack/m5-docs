# BUTTON ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](#購入リンク)**

## 概要

**<mark>BUTTON</mark>**ユニットは一つのボタンを備えたユニットです。

## 特徴

- LEGO 互換ホール
- Grove インターフェース

## サンプルコード

### 1. Arduino IDE

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino)。*

```arduino
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

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.png">

## 回路図

<img src="assets/img/product_pics/unit/button_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>Button Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 購入リンク

- [BUTTON ユニット 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/4047/)
- [BUTTON ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-ESP32-Arduino-Micropython-GPIO-Blockly/3226069_32921805637.html)