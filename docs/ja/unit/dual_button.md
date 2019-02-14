# Dual BUTTON ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_dual_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_dual_button_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](#購入リンク)**

## 概要

**<mark>Dual BUTTON</mark>**ユニットは2つのボタンが搭載されたユニットです。

## 特徴

- LEGO 互換ホール
- Grove インターフェース

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/Arduino).*

```arduino
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

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/UIFlow).*

<!-- <img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/1.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/2.png" width="55%" height="55%"><img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/3.png" width="55%" height="55%"> -->

<img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/example_unit_dual_button_05.png">

## 回路図

<img src="assets/img/product_pics/unit/dual_button_sch.png">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>DUAL_BUTTON Unit</td><td>青いボタンピン</td><td>赤いボタンピン</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 購入リンク

- [Dual BUTTON ユニット 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/4048/)
- [Dual BUTTON ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-M5GO-ESP32-Micropython/3226069_32923126250.html)