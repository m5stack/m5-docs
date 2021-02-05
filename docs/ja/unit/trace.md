# TRACE - ライントレースユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_trace_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_trace_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-TRACE-Board-for-Lidar-Bot-Mini-Car-M5BALA-Balance-Car-with-MEGA328-4-IR/32974626338.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>TRACE</mark>**は4つのIRセンサとATmega328pが組み込まれたライントレースユニットです。白地に黒線または黒地に白線のライントレースが可能です。

M5CoreとはGROVE Aで接続し、I2Cで通信を行います。I2Cアドレスは**0x5A**です。

<img src="assets/img/product_pics/unit/unit_trace_03.png" width="60%" height="60%">

## 特徴

- 動作範囲: 対象とセンサ-反射面の距離が11mm以内
- GROVE インターフェース, [UIFlow](http://flow.m5stack.com) と [Arduino](http://www.arduino.cc)をサポート

## パッケージ内容

- 1x TRACE ユニット
- 1x Grove ケーブル

## 応用例

- ライントレーサーロボット

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[ATmega328pのファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/firmware_328p)**

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/Arduino)。*

```arduino
#include <M5Stack.h>
#include "Wire.h"

#define TRACE_ADDR 0x5a

// 宣言部
#define VALUE_SPLIT
uint8_t value;
int SensorArray[4] = {0};

// 初期化
m5.begin();
Serial.begin(115200);
Wire.begin();


// データ読み取り
Wire.beginTransmission(TRACE_ADDR);
Wire.write(0x00);
Wire.endTransmission();
Wire.requestFrom(TRACE_ADDR,1);
while(Wire.available()){
    value = Wire.read();
}
SensorArray[3] = (value&0x08)>>3;
SensorArray[2] = (value&0x04)>>2;
SensorArray[1] = (value&0x02)>>1;
SensorArray[0] = (value&0x01)>>0;
```

<img src="assets/img/product_pics/unit/unit_trace_04.png">

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/TRACE/example_unit_trace_01.png">

## 回路図

<img src="assets/img/product_pics/unit/trace_sch.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TRACE Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

**TRACE Case**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/lidarbot.mp4" type="video/mp4">
</video>