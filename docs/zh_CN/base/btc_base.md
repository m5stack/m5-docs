# Base BTC {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_btc_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_02.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-base/products/btc-standing-base)**


# 描述

**BTC** 是一款集成了"DHT12"的温湿度传感器底座，除了用作固定M5Core之外，运用其内置的温湿度传感器能够制作环境监测器或是一些与环境数据采集相关的应用.

**注意:**

* 兼容BTC底座的有 [BASIC](https://docs.m5stack.com/#/zh_CN/core/basic) 与 [GRAY](https://docs.m5stack.com/#/zh_CN/core/gray) 两款主控，当将USB线连接BTC底座，仅对M5Core的电路板进行供电，并不会为其内部的锂电池充电.只有将USB线连接至M5Core时，才会对M5Core电池充电且同时为电路板供电.

* 当M5Core连接至BTC底座后，将无法同时控制 ENV Unit.这是因为在 BTC 已经内置了DHT12传感器，两者将产生 I2C 地址冲突.

#  特性

-  内置DHT12

#  套件清单

-  Type-C USB
-  2x M3x16螺丝
-  六角扳手

<img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_btc_03.png" width="30%" height="30%">

#  管脚映射

**DHT12**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
 <tr><td>DHT12</td><td>SCL</td><td>GND</td><td>SDA</td><td>3V3</td></tr>
</table>

<img src="assets/img/product_pics/module/module_btc_dht12_pinmap.png">

## 相关链接

- **[DHT12 数据手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**

## 例程

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino).*

```arduino
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.

void setup() {
    M5.begin();
    Wire.begin();
    M5.Lcd.setBrightness(10);
    Serial.println(F("ENV Unit(DHT12 and BMP280) test..."));
}

void loop() {
    float tmp = dht12.readTemperature();
    float hum = dht12.readHumidity();
    Serial.printf("Temperatura: %2.2f*C  Humedad: %0.2f%%\r\n", tmp, hum);

    M5.Lcd.setCursor(0, 0);
    M5.Lcd.setTextColor(WHITE, BLACK);
    M5.Lcd.setTextSize(3);
    M5.Lcd.printf("Temp: %2.1f  \r\nHumi: %2.0f%%  \r\n", tmp, hum);

    delay(100);
}
```
