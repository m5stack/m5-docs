# DAC ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_dac.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_dac_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-DAC-MCP4725-I2C-Dac-12-0/32947696641.html)**

## 概要

**<mark>DAC</mark>**ユニットはデジタル信号を電圧波形、音声波形などのアナログ信号に変換することができます。 MCP4725という12ビットの高分解能DACチップを内蔵しています。このチップには不揮発性メモリ（EEPROM）が内蔵されており、DAC入力や設定データをEEPROMに書き込むことができます。このユニットはI2Cで制御することができます。I2Cアドレスは**0x60**です。

## 特徴

- 最大12bit 分解能
- 出力電圧 0 ~ 3.3V
- LEGO 互換ホール
- EEPROM内蔵

## パッケージ内容

- 1x DACユニット
- 1x Groveケーブル

## アプリケーション

- MP3オーディオプレイヤー
- ミニオシロスコープ

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

-  **データシート**
  - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DAC/Arduino)。*

```clike
/*
    hardware : m5stack uint dac
    please install adafruit MCP4725 lib
*/
#include <Wire.h>
#include <Adafruit_MCP4725.h>

// new a object
Adafruit_MCP4725 dac;

// initialization
dac.begin(0x60);
dac.setVoltage(2048, false);

// 12bit value , false mean not write EEPROM
dac.setVoltage(1024, false);// input digital value "1024" to unit
delay(1000);
dac.setVoltage(2048, false);// input digital value "2048" to unit
delay(1000);
```

## 回路図

<img src="assets/img/product_pics/unit/dac_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>DAC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
