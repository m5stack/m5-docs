# IR ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_ir_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Mini-Infrared-Unit-IR-Remote-Reflective-Sensor-with-Receiver-and-Transmitter-GPIO-GROVE-Connector/32933215001.html)**

## 概要

**<mark>IR</mark>**ユニットは赤外線送受信機能をもったユニットです。障害物回避ロボット、ライントレーサーなどを作る事が可能です。

GROVEインターフェースには2つの信号ピンが存在し、1つは受信を、もう1つは送信を制御します。送信時はOUTPUTピン(GPIO26)をハイレベルで出力する必要があります。

## 特徴

- IR送受信機
- 検出距離 2 ~ 5cm
- サポート[UIFlow](http://flow.m5stack.com)プログラミング, [Arduino](http://www.arduino.cc)プログラミング
- LEGO 互換ホール

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino)。*

```clike
#include <M5Stack.h>

// 宣言
int cur_recv_value = 0;

// 初期化
M5.begin();
pinMode(ir_recv_pin, INPUT);// 受信ピンを入力設定
pinMode(ir_send_pin, OUTPUT);// 送信ピンを出力設定
digitalWrite(ir_send_pin, 1);// 赤外線送信

// データ読み取り
cur_recv_value = digitalRead(ir_recv_pin);// 受信側の状態を読み取り
```

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_03.png">

## 回路図

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>赤外線チューブUnit</td><td>赤外線受光ピン</td><td>赤外線送信機ピン</td><td>5V</td><td>GND</td></tr>
</table>
