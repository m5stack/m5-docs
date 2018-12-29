# COLOR SENSOR ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Color-Unit-TCS34725-Color-Sensor-RGB-Color-Sensor-Development-Board-Module-GROVE-I2C-Compatible/3226069_32946957647.html?spm=a2g1x.12024536.productList_5885013.pic_5)**

## 概要

**<mark>COLOR SENSOR</mark>**ユニットは内蔵された**TCS3472**により、対象物表面の色を検出する事ができます。M5StackはI2Cで値を取得可能です。

## 特徴

- 高精度
- LEGO 互換ホール

## アプリケーション

- RGB LED バックライトコントロール
- 色校正

## サンプルコード

### 1. Arduino IDE

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/Arduino).*

```arduino
/*
  Color test
    hardware: M5Stack

  please install the Adfruit TCS34725 library first ...
*/
#include <Wire.h>
#include <M5Stack.h>
#include "Adafruit_TCS34725.h"

// declaration
uint16_t clear, red, green, blue;
// set to false if using a common cathode LED
#define commonAnode true
// our RGB -> eye-recognized gamma color
byte gammatable[256];

// new a object
Adafruit_TCS34725 tcs;
tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,TCS34725_GAIN_4X);

// other function
static uint16_t color16(uint16_t r, uint16_t g, uint16_t b) {
	uint16_t _color;
	_color = (uint16_t)(r & 0xF8) << 8;
	_color |= (uint16_t)(g & 0xFC) << 3;
	_color |= (uint16_t)(b & 0xF8) >> 3;
  return _color;
}

// initialization
M5.begin(true, false, false);
tcs.begin();
tcs.setIntegrationTime(TCS34725_INTEGRATIONTIME_154MS);
tcs.setGain(TCS34725_GAIN_4X);

// read data
tcs.getRawData(&red, &green, &blue, &clear);
// Figure out some basic hex code for visualization
uint32_t sum = clear;
float r, g, b;
r = red; r /= sum; g = green; g /= sum; b = blue; b /= sum;
r *= 256; g *= 256; b *= 256;
uint16_t _color = color16((int)r, (int)g, (int)b);
```

ルーチンを燃やした後, シリアルディスプレイ端末は元の値を印刷します

下の図は、検知用の赤い紙の出力を示しています

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.png">

## 回路図

<img src="assets/img/product_pics/unit/color_sch.JPG">

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [TCS3472](https://pdf1.alldatasheet.com/datasheet-pdf/view/560511/AMSCO/TCS3472.html)