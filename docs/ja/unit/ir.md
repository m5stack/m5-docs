# IR ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](#購入リンク)**

## 概要

**<mark>IR</mark>**ユニットは赤外線送受信機能をもったユニットです。障害物回避ロボット、ライントレーサーなどを作る事が可能です。

## 特徴

- IR送受信機
- 検出距離 2 ~ 5cm
- サポート[UiFlow](http://flow.m5stack.com)プログラミング, [Arduino](http://www.arduino.cc)プログラミング
- LEGO 互換ホ

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
int cur_recv_value = 0;

// initialization
M5.begin();
pinMode(ir_recv_pin, INPUT);// receiver pin
pinMode(ir_send_pin, OUTPUT);// transmitter pin
digitalWrite(ir_send_pin, 1);// send infrared light

// read data
cur_recv_value = digitalRead(ir_recv_pin);// read the status of receiver
```

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_03.png"  width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_02.png"  width="50%" height="50%">

## 回路図

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>赤外線チューブUnit</td><td>赤外線受光ピン</td><td>赤外線送信機ピン</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 購入リンク

- [IR ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-Ir-GPIO/3226069_32933215001.html)