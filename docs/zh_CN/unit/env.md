# ENV - 温湿度和压力传感器 {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_env.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_env_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-1172588101.29.f64c4476tugBw5&id=578200145474)**

## 描述

**<mark>ENV</mark>**是一款集成DHT12(环境温湿度传感器)和压强传感器BMP280的Unit，这个Unit连接了M5Core之后能很方便的读取环境中的温湿度值和大气压强。接M5Core的GROVE A口。

## 特性

-  温度测量
    - 范围: 20 ~ 60℃
    - 精度: ±0.2℃
-  湿度测量
    - 范围: 20 ~ 95℃
    - 精度: 0.1%
-  气压测量
    - 范围: 300 ~ 1100hPa
    - 精度: ±1hPa
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

这是ENV的例程，能读取温湿度值和气压值。可是在编译程序之前需要先安装库 `Adafruit BMP280 Library`，然后拷贝 `Adafruit_Sensor.h` 到 `Adafruit BMP280 Library` 的安装路径 `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library` 下。

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV)。*

```arduino
/*
    Install Adafruit BMP280 Library first.
*/
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include "Adafruit_Sensor.h"
#include <Adafruit_BMP280.h>

// new two objects
DHT12 dht12;
Adafruit_BMP280 bme;

// initialization
M5.begin();
Wire.begin();
bme.begin();

// read data
float tmp = dht12.readTemperature();
float hum = dht12.readHumidity();
float pressure = bme.readPressure();
```

<!-- ```arduino
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>
DHT12 dht12; //Preset scale CELSIUS and ID 0x5c.
Adafruit_BMP280 bme;

void setup() {
    M5.begin();
    Wire.begin();

    if (!bme.begin()){
      Serial.println("Could not find a valid BMP280 sensor, check wiring!");
      while (1);
    }
}

void loop() {
    float tmp = dht12.readTemperature();
    float hum = dht12.readHumidity();
    float pressure = bme.readPressure();
}
``` -->

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png">

## 原理图

<img src="assets/img/product_pics/unit/env_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV温湿度和压力传感器Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
