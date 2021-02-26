# ToF ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_tof.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_tof_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-ToF-Unit-VL53L0X-Time-of-Flight-ToF-Laser-Ranging-Sensor-Breakout-Laser-Distance-Sensor/32949310300.html)**

## 概要

**<mark>ToF</mark>**ユニットは940nmのレーザー光を使って距離を測定する「Time-of-Flight」型のセンサー(VL53L0X)ユニットです。 他の測距センサーに比べて精度が高く、ミリ単位で計測可能です。（最大測定距離2メートル）データ取得時間は30ミリ秒と高速です。ポートAを利用して通信を行います。I2Cで値を取得可能で、I2Cアドレスは**0x29**です。

## 特徴

- 高精度
- 測定可能距離: 最大2m
- レーザー波長: 940nm
- GROVEポートサポート、[UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)プログラミングサポート
- LEGO 互換ホール

## パッケージ内容

- 1x ToFユニット
- 1x Groveケーブル

## アプリケーション

- ジェスチャーコントロール
- レーザー測距
- 3D構造化光イメージング（3Dセンシング）
- カメラアシスト（超高速オートフォーカスと被写界深度マップ）

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [VL53L0X](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino)。*

```clike
#include <M5Stack.h>
#include <Wire.h>

#define ToF_ADDR 0x29//the I2C address of tof

#define SYSRANGE_START  0x00
#define RESULT_RANGE_STATUS 0x14
#define ToF_ADDR 0x29   //the I2C address of ToF

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

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.png">

## 回路図

<img src="assets/img/product_pics/unit/tof_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TOF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
