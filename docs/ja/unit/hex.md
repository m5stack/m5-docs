# HEX {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_hex_01.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-HEX-NeoPixel-LED-Board-with-WS6812-37pcs-NeoPixel-Three-GROVE-Port-and-Power-Input/32961683136.html)**

## 概要

**<mark>HEX</mark>**は37個のフルカラーLEDを備えた六角形LEDパネルユニットです。複数のHEXを直列に接続する事が可能です。

LEDの番号は下図の通りです。

<img src="assets/img/product_pics/unit/unit_hex_03.png">

## 特徴

- フルカラーLED: 37個
- GROVEインターフェース、[UIFlow](http://flow.m5stack.com)と[Arduino](http://www.arduino.cc)をサポート

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[FastLEDライブラリ](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLEDリファレンス(中国語)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## サンプルコード

### 1. Arduino IDE

このサンプルコードはHEXを虹色にグラデーション表示します。プログラムを実行する前に、あらかじめFastLEDライブラリをインストールしてください。HEXとM5Coreは`GROVE A`で接続してください。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/Arduino)。*

```arduino
/*
    プログラムを実行する前に、あらかじめFastLEDライブラリをインストールしてください。(HEXをGROVE Aに接続)
 */
#include <M5Stack.h>
#include "FastLED.h"

#define Neopixel_PIN    21
#define NUM_LEDS    37

CRGB leds[NUM_LEDS];
uint8_t gHue = 0;

void setup() {
  Serial.begin(115200);
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextColor(YELLOW); M5.Lcd.setTextSize(2); M5.Lcd.setCursor(40, 0);
  M5.Lcd.println("HEX Example");
  M5.Lcd.setTextColor(WHITE);
  M5.Lcd.setCursor(0, 25);
  M5.Lcd.println("Display rainbow effect");

  // Neopixel初期化
  FastLED.addLeds<WS2811,Neopixel_PIN,GRB>/
                        (leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(10);
}

void loop(){
    fill_rainbow( leds, NUM_LEDS, gHue, 7);
    FastLED.show();// must be executed for neopixel becoming effective
    EVERY_N_MILLISECONDS( 20 ) { gHue++; }
}
```

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_03.png">

### UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_01.png" width="50%" height="50%"> <img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_02.png" width="30%" height="30%">

### ピンマップ

**HEXをGROVE Aに接続**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**HEXをGROVE Bに接続**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**HEXをGROVE Cに接続**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>