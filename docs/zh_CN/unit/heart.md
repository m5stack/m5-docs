# HEART - 血氧心率传感器

<img src="assets/img/product_pics/unit/unit_heart_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.7a46425eWmFRNi&id=583999638264)**

## 描述

**<mark>HEART</mark>**是一款能够非侵入式检测血氧和心率的Unit，集成MAX30110模块，其原理是通过红外led灯照射，检测红血球携带氧气和非携带氧气情况数量变化情况，能够得到心率的ADC值，包含两个发光二极管和一个光检测器。unit接入M5Core的GROVE A口之后，只需要将手指紧贴在unit的MAX30110模块上，即可读出生理信息。

## 特性

-  低噪声
-  能输出具体的血氧值和心率值
<!-- -  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程 -->
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [MAX30100](https://datasheets.maximintegrated.com/en/ds/MAX30110.pdf)

- **[MAX30100lib](https://github.com/oxullo/Arduino-MAX30100)**

## 例程

### 1. Arduino IDE

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEART/Arduino)。*

```arduino
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

## 原理图

<img src="assets/img/product_pics/unit/heart_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>血氧心率Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
