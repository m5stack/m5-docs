# BTC底座

<img src="assets/img/product_pics/module/module_btc_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_02.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.69f6425e8Agsbh&id=559647865340)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.69f6425e8Agsbh&id=559647865340)** -->


# 描述

BTC模块是一款包含DHT12(温湿度)传感器的底座。有了BTC底座之后，可以方便给M5Core充电。

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
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GND</td><td>GPIO21</td><td>3V3</td></tr>
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
