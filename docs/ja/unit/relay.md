# RELAY ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_relay_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Mini-Relay-Unit-DC-3A-30V-AC-3A-220V-with-Triode-Driven-GROVE-Port/32922856211.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>RELAY</marK>**ユニットは大きな電力負荷を高い信頼性で安全にコントロールする事が可能です。最大 3A @ 30 VDC または 220 VACまでの負荷に対して対応しています。

## 特徴

- シングル入力
- 最大 3A @ 30 VDC または 220 VAC
- Grove インターフェース
- [UIFlow](http://flow.m5stack.com), [Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## アプリケーション

- 大きな負荷の制御
- IoTアウトレット(壁のコンセント)

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino)。*

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

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow)。*

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

**UIFlow チュートリアル**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Blinking%20a%20bulb%20with%20the%20M5%20Relay%20unit..mp4" type="video/mp4">
</video>