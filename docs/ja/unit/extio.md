# EXT.IO {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_extio_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_extio_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-Extend-Serial-IO-I-O-Unit-Grove-Cable-I2C-Interface-for-Arduino-Blockly-ESP32/3226069_32966582585.html?spm=a2g03.12010615.8148356.48.3b773d71o7oNY1)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-Extend-Serial-IO-I-O-Unit-Grove-Cable-I2C-Interface-for-Arduino-Blockly-ESP32/3226069_32966582585.html?spm=a2g03.12010615.8148356.48.3b773d71o7oNY1)** -->

## 概要

**<mark>EXT.IO</mark>**ユニットはI/Oポートを拡張します。2本のI/Oピンを8ビットの汎用パラレル入出力（GPIO）に拡張可能なPCA9554PWを統合しています。

このユニットはM5CoreのGRVOE Aを経て、I2C通信で接続されます。I2Cアドレスは**0x27**です。

## 特徴

- I/O拡張数: 8
- GROVEインターフェース、[UIFlow](http://flow.m5stack.com)と[Arduino](http://www.arduino.cc)をサポート
- LEGO互換の穴

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- Datasheet
  - **[PCA9554PW](https://pdf1.alldatasheet.com/datasheet-pdf/view/86709/PHILIPS/PCA9554PW.html)**

## サンプルコード

### 1. Arduino IDE

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/Arduino)。*

```arduino
/*
    Connect to GRVOE A on M5Core
*/
#include <M5Stack.h>
#include "PCA9554.h" // Load the PCA9554 Library

// new a object
PCA9554 ioCon1(0x27);

uint8_t res;

// initialization

M5.begin();
Wire.begin();
ioCon1.twiWrite(21, 22); // GROVE A
delay(10);
res = 1;
ioCon1.twiRead(res);
Serial.printf("res:%d\r\n", res);
ioCon1.portMode0(ALLOUTPUT); //Set the port as all output

// set the specific pin
ioCon1.digitalWrite0(0, HIGH);
ioCon1.digitalWrite0(1, HIGH);
ioCon1.digitalWrite0(2, HIGH);
ioCon1.digitalWrite0(3, HIGH);
ioCon1.digitalWrite0(4, HIGH);
ioCon1.digitalWrite0(5, HIGH);
ioCon1.digitalWrite0(6, HIGH);
ioCon1.digitalWrite0(7, HIGH);

// write 0-7 HIGHT
Serial.println(ioCon1.digitalWritePort0(0xff));

// write 0-7 LOW
Serial.println(ioCon1.digitalWritePort0(0x00));
```
<img src="assets/img/product_pics/unit/unit_extio_03.png">

### 2. UIFlow

*特定のルーチンについてはここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/EXTIO/example_unit_extio_01.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>EXT.IO Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>