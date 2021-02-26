# HEART {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_heart_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Newest-Mini-Heart-Rate-Unit-MAX30100-Module-Sensor-for-Arduino-Low-Power-Heart-Rate-Oxygen/3226069_32960528289.html)**

## 概要

**<mark>HEART</mark>** は **MAX30100**(pulse oximeter chip)を内蔵しています。赤血球中の酸素量と非運搬酸素量を赤外LED照明によって検出することができ、心拍数のAD値も取得可能です。 MAX30100は2個の発光ダイオードと1個の光検出器を内蔵しています。ユニットをM5CoreのGROVE Aポートに接続し、指を置くことでデータを取得できます。

## 特徴

- 低ノイズ
- 血中酸素濃度および心拍値を取得可能
- GROVE インターフェース、[Arduino](http://www.arduino.cc)をサポート
- LEGO互換ホール

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [MAX30100](https://datasheets.maximintegrated.com/en/ds/MAX30110.pdf)

- **[MAX30100lib](https://github.com/oxullo/Arduino-MAX30100)**

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEART/Arduino)。*

```clike
/*
    Install MAX30100lib Library first.

    MAX30100_RawData.ino
*/
#include <Wire.h>
#include "MAX30100.h"

#define SAMPLING_RATE   MAX30100_SAMPRATE_100HZ
#define IR_LED_CURRENT  MAX30100_LED_CURR_50MA
#define RED_LED_CURRENT MAX30100_LED_CURR_27_1MA
// set HIGHRES_MODE to true only
// when setting PULSE_WIDTH to MAX30100_SPC_PW_1600US_16BITS
#define PULSE_WIDTH MAX30100_SPC_PW_1600US_16BITS
#define HIGHRES_MODE    true

// new a object
MAX30100 sensor;

void setup()
{
    Serial.begin(115200);
    Serial.print("Initializing MAX30100..");
    if (!sensor.begin()) {
        Serial.println("FAILED");
        for(;;);
    } else {
        Serial.println("SUCCESS");
    }
    sensor.setMode(MAX30100_MODE_SPO2_HR);
    sensor.setLedsCurrent(IR_LED_CURRENT, RED_LED_CURRENT);
    sensor.setLedsPulseWidth(PULSE_WIDTH);
    sensor.setSamplingRate(SAMPLING_RATE);
    sensor.setHighresModeEnabled(HIGHRES_MODE);
}

void loop()
{
    uint16_t ir, red;
    sensor.update();
    while (sensor.getRawValues(&ir, &red)) {
        Serial.print(ir);
        Serial.print('\t');
        Serial.println(red);
    }
}
```

<img src="assets/img/product_pics/unit/unit_example/HEART/example_unit_heart_01.png">

<!-- ### 2. UIFlow

*- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_02.png" width="58%" height="58%"> -->

## 回路図

<img src="assets/img/product_pics/unit/heart_sch.JPG">

### ピンマップ

<table>
<tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEART Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>