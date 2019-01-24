# WEIGHT Unit

<img src="assets/img/product_pics/unit/unit_weight_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_weight_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Newest-Mini-Weight-Unit-HX711-Module-Sensor-24-Bits-Weighing-Pressure-Sensor-I2C-Interface-for/32960488606.html)**

## 概要

**<mark>WEIGHT</mark>** は重量計測用ADCチップ **HX711** を搭載したUnitです。

<!-- * Unitに接続するPORT、所以相对 Unit 里的 HX711 来说，激励电压 (Positive Supply Voltage) 是 +5V，信号输出给M5Core的电压范围是 0 ~ 5mV，施加的压力越大，对应输出的电压值越大。 -->

* HX711は2つのチャンネルAとBを持ちます。チャンネルBに比べ、チャンネルAはプログラム可変倍率です。このUnitではチャンネルAを使用しています。Unitの一端は圧力センサーに、もう一端はM5Coreに接続されます。

<img src="assets/img/product_pics/unit/unit_weight_04.png">

<img src="assets/img/product_pics/unit/unit_weight_03.png">

## 特徴

- プログラム可能なズーム倍率：32, 64, 128
- HX711内部ADC精度：24 bit
- Unit出力電圧範囲：0 ~ 5mV
- GROVE インターフェース、 [UiFlow](http://flow.m5stack.com)と[Arduino](http://www.arduino.cc)をサポート
- 2つのLEGO 互換ホール

## アプリケーション

- 小型秤
- クッキングスケール

## 関連リンク

- **[公式ビデオ](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [HX711](http://www.dfrobot.com/image/data/SEN0160/hx711_english.pdf)

## サンプルコード

### 1. Arduino IDE

この例では10kgまで測れる重量計を作成します。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/Arduino/weight)。*

```arduino
/*
  This Unit connects to GRVOE B on M5Core.
*/

#include <M5Stack.h>
#include "hx711.h"

HX711 scale(36, 26);// GROVE B

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setCursor(50, 10);
  M5.Lcd.print("UNIT_WEIGHT EXAMPLE\n");
  M5.Lcd.setCursor(15, 50);
  M5.Lcd.print("Connect Unit to GROVE B");
  Serial.begin(115200);

  scale.setOffset(125184);
  scale.setScale(67.4);

  M5.Lcd.setCursor(0, 90);
  M5.Lcd.print("The weight: ");
}

void loop(){
  // Serial.println(scale.averageValue());
  float weight;
  weight = ((float)((int)((scale.getGram()+0.005)*100)))/100;
  // sprintf(&weight, "%0.2f", scale.getGram());
  Serial.print("The weight: ");
  Serial.print(weight);
  M5.Lcd.fillRect(150, 90, 100, 20, BLACK);
  M5.Lcd.setCursor(150, 90);
  M5.Lcd.print(weight);
  Serial.println(" g");
  delay(100);
}
```

### 2. UIFlow

プログラムをダウンロードするたびに、秤に何も乗っていないことを確認して、Aボタンを押したのちに、対象物を乗せて計量します。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/WEIGHT/example_unit_weight_01.png">

## 回路図

<img src="assets/img/product_pics/unit/weight_sch.png">

### ピンマップ

**PORT Aに繋いだ場合**

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DAT</td><td>CLK</td><td>5V</td><td>GND</td></tr>
</table>

**PORT Bに繋いだ場合**

<table>
<tr><td>M5Core(PORT B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DAT</td><td>CLK</td><td>5V</td><td>GND</td></tr>
</table>

**PORT Cに繋いだ場合**

<table>
<tr><td>M5Core(PORT C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DAT</td><td>CLK</td><td>5V</td><td>GND</td></tr>
</table>