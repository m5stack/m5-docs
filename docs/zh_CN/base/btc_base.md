# BTC底座

<img src="assets/img/product_pics/module/module_btc_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_02.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://www.aliexpress.com/store/product/M5Stack-New-BTC-Ticker-DHT12-Digital-Humidity-Temperature-Sensor-ESP32-for-Micropython-Bitcoin-Price-Ticker-with/3226069_32852302770.html?spm=2114.12010615.8148356.2.3a8d51c2LV8jni)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://www.aliexpress.com/store/product/M5Stack-New-BTC-Ticker-DHT12-Digital-Humidity-Temperature-Sensor-ESP32-for-Micropython-Bitcoin-Price-Ticker-with/3226069_32852302770.html?spm=2114.12010615.8148356.2.3a8d51c2LV8jni)** -->


# 描述

**<mark>BTC</mark>** 是一款包含 **DHT12(温湿度)传感器**的底座。

**注意：**

* 虽然 M5Core [BASIC](zh_CN/core/basic) 或 [GRAY](zh_CN/core/gray) 接在 BTC 底座上，可是插入USB线之后，不能通过 BTC 不能给它充电。实际上每个 Core 都内置了充电芯片 (IP5306)，接入 Type-C USB 线之后，就能给底座上的电池充电，不需要专门的充电模块。

* 在 M5Core BASIC 接上 BTC 底座之后，不能再控制 ENV Unit，因为 BTC 已经内置了 DHT12 传感器，会 IIC 地址冲突。


#  特性

-  内置DHT12

#  包含

-  Type-C USB线
-  M3 x 16
-  Tools

<img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_btc_03.png" width="30%" height="30%">

#  管脚映射

**DHT12**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
 <tr><td>DHT12</td><td>SCL</td><td>GND</td><td>SDA</td><td>3V3</td></tr>
</table>

<img src="assets/img/product_pics/module/module_btc_dht12_pinmap.png">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### Arduino IDE

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BTC/Arduino)。*

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
