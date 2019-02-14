# RELAY ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_relay_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Relay-Unit-DC-3A-30V-AC-3A-220V-with-Triode-Driven-GROVE-Port/3226069_32922856211.html?spm=a2g1y.12024536.productList_5885013.subject_24)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>RELAY</marK>**ユニットは大きな電力負荷を高い信頼性で安全にコントロールする事が可能です。最大 3A @ 24 VDC または 120 VACまでの負荷に対して対応しています。

## 特徴

- シングル入力
- 最大 3A @ 24 VDC または 120 VAC
- Grove インターフェース
- サポート[UiFlow](http://flow.m5stack.com)プログラミング, [Arduino](http://www.arduino.cc)プログラミング
- LEGO 互換ホール

## アプリケーション

- 大きな負荷の制御
- IoTアウトレット(壁のコンセント)

## サンプルコード

### 1. Arduino IDE

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino).*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextFont(4);
  M5.Lcd.setTextColor(YELLOW, BLACK);
  //disable the speak noise
  dacWrite(25, 0);
  pinMode(26, OUTPUT);// RELAY Pin setting
}

void loop(void) {
  digitalWrite(26, HIGH);// RELAY Unit work
  delay(500);
  digitalWrite(26, LOW);// RELAY Unit stop work
  delay(500);
}
```

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.png">

## 回路図

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースB)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td> </td><td>リレー制御ピン</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 関連動画

<iframe width="560" height="315" src="https://www.youtube.com/embed/48JQbPso2lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>