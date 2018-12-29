# DAC ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_dac.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_dac_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-DAC-MCP4725-I2C-Dac-12-0/32947696641.html)**

## 概要

**<mark>DAC</mark>**ユニットは電圧や音などのデジタル信号をアナログ信号に変換する機能を提供します。12 bitの分解能を持つMCP4725チップを採用しており、入力値やコンフィグレーションデータは内蔵する不揮発性メモリ(EEPROM)に書き込む事が可能です。

## 特徴

- 最大12bit 分解能
- 出力電圧 0 ~ 3.3V
- LEGO 互換ホール
- EEPROM

## アプリケーション

- MP3 オーディオプレイヤー
- ミニオシロスコープ

## ドキュメント

- **GitHub**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/DAC_MCP4725)

- **データシート**
  - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)

## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ADC_ADS1100).*

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

## 回路図

<img src="assets/img/product_pics/unit/adc_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>DAC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>