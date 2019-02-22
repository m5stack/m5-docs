# ADC ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_adc.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_adc_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](#購入リンク)**

## 概要

**<mark>ADC</mark>**ユニットは自己校正機能を備えた16bit ADコンバータユニットです。ESP32内蔵ADコンバータの2倍の分解能をほこり、より精細なデータを取得する事ができるようになります。変換モードは連続モードとワンショットモードの２つがあります。I2Cを使用してADCユニットからデータの取得を行う事ができます。I2Cアドレスは **<mark>0x48</mark>**です。

## 特徴

- 最大分解能 16bit
- サンプリングレート変更可能 - サンプルレート 8, 16, 32, 128Hz
- 増幅率変更可能 - 利得 1, 2, 4, 8 dB
- 0〜12Vの電圧入力を検出可能
- ２種類の変換モード - 連続モード、ワンショットモード
<!-- - サポート[UiFlow](http://flow.m5stack.com)プログラミング, [Arduino](http://www.arduino.cc)プログラミング -->
- LEGO 互換ホール

## アプリケーション

- 心電図
- 血圧計
- ダイナモメーター

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/Arduino/ADC_ADS1100).*

```arduino
#include <M5Stack.h>
#include <Wire.h>
#include "ADS1100.h"

// declaration
byte error;
int8_t address;

//new a object
ADS1100 ads;

// initialization
M5.begin(true, false, false);
ads.getAddr_ADS1100(ADS1100_DEFAULT_ADDRESS);// 0x48, 1001 000 (ADDR = GND)
ads.setGain(GAIN_ONE);          // 1x gain(default)
ads.setMode(MODE_CONTIN);       // Continuous conversion mode (default)
ads.setRate(RATE_8);            // 8SPS (default)
ads.setOSMode(OSMODE_SINGLE);   // Set to start a single-conversion
ads.begin();

// read data
address = ads.ads_i2cAddress;
Wire.beginTransmission(address);
Wire.endTransmission();
ads.Measure_Differential();
```

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ADC/example_unit_adc_01.png">

## 回路図

<img src="assets/img/product_pics/unit/adc_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [ADS1100](http://pdf1.alldatasheet.com/datasheet-pdf/view/619024/TI1/ADS1100.html)

## 購入リンク

- [ADC ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-ADC-16-I2C-ADS1100-0-12/3226069_32946953374.html)