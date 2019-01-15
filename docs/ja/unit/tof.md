# ToF ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_tof.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_tof_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-ToF-Unit-VL53L0X-Time-of-Flight-ToF-Laser-Ranging-Sensor-Breakout-Laser-Distance-Sensor/3226069_32949310300.html?spm=a2g1x.12024536.productList_5885013.pic_3)**

## 概要

**<mark>ToF</mark>**ユニットはレーザー光を使った最新の「Time-of-Flight」センサーを使用して距離を検出できるユニットです。 ほとんどの距離センサーよりも高い精度で計測可能です。I2Cで値を取得可能です。

## 特徴

- 高精度
- 測定可能距離 2m
- LEGO 互換ホール

## アプリケーション

- 1次元ジェスチャー認識

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/TOF_VL53L0X)


## サンプルコード

### 1. Arduino IDE

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino).*

```arduino
#include <M5Stack.h>
#include <Wire.h>

#define ToF_ADDR 0x29//the iic address of tof

#define SYSRANGE_START  0x00
#define RESULT_RANGE_STATUS 0x14
#define ToF_ADDR 0x29   //the IIC address of ToF

// declaration
uint16_t dist=0;

// initialization
M5.begin();
Wire.begin();// join i2c bus (address optional for master)

// read data
write_byte_data_at(VL53L0X_REG_SYSRANGE_START, 0x01);
read_block_data_at(VL53L0X_REG_RESULT_RANGE_STATUS, 12);//read 12 bytes once
// get distance
dist = makeuint16(gbuf[11], gbuf[10]);//split distance data to variable "dist"
```

<!-- ### 2. UIFlow

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow)。

<img src="assets/img/product_pics/unit/unit_example/example_unit_tof_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_tof_02.png" width="55%" height="55%"> -->

## 回路図

<img src="assets/img/product_pics/unit/tof_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TOF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [VL53L0X](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)