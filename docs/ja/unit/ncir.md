# NCIR ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_ncir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_ncir_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-NCIR-Unit-MLX90614-Contactless-Temperature-Sensor-Module-70C-382-2C-GROVE-I2C-Development-Board/32947772098.html)**

## 概要

**<mark>NCIR</mark>**は赤外線センサー内蔵ユニットMLX 90614です。 人体や他の物体の表面の温度を測定するために使用します。

他の温度センサーとは異なり、MLX90614は遠くの物体から反射された赤外線を測定するので、物理的に触れることなく温度を検出できます。測定したい場所にセンサーを向けるだけで、放射された赤外線を測定して温度を検出します。測定対象に触れる必要がないため、ほとんどのデジタルセンサーよりも広い温度範囲（-70℃ 〜 +380℃）を検出できます。90度の視野にわたり測定可能なので、その領域の平均温度を容易に検出することもできます。Grove Aインタフェースを介してM5Coreと通信します。I2Cアドレスは**0x5A**です。

## 特徴

- 動作電圧: 4.5 ~ 5.5V
- 検出温度範囲: -70℃ ~ +382.2℃
- 室温下测量精度: ±0.5°C
- 視野角: 90°
- GROVEインターフェースサポート、[UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## 包含

- 1x NCIR ユニット
- 1x Grove ケーブル

## アプリケーション

- 体温測定
- 動き検出

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [MLX90614](https://pdf1.alldatasheet.com/datasheet-pdf/view/218977/ETC2/MLX90614.html)

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NCIR)。*

```clike
#include <M5Stack.h>
#include <Wire.h>

#define NCIR_ADDR 0x5A

// declaration
uint16_t result;
float temperature;

// initialization
Wire.begin();
M5.begin();

// read data
Wire.beginTransmission(NCIR_ADDR);Wire.write(0x07);Wire.endTransmission(false);
Wire.requestFrom(NCIR_ADDR, 2);
result = Wire.read();// Receive DATA
result |= Wire.read() << 8;// Receive DATA

// store temperature value
temperature = result * 0.02 - 273.15;
```

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_04.png">

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NCIR/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_03.png">

## 回路図

<img src="assets/img/product_pics/unit/ncir_sch.JPG">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
