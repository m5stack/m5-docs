# M5GO Lite

<img src="assets/img/product_pics/core/m5go/m5go_lite_01.png" alt="gray_02" width="250" height="250"><img src="assets/img/product_pics/core/m5go/m5go_lite_04.png" alt="gray_04" width="250" height="250">


<!-- <img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="250" height="250"> -->

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-NEW-Lite-IoT-Development-Board-Kit-ESP32-MPU9250-Grove-16MFlash-DHT12-Temperature-Humidity-Sensor-Module/3226069_32965981279.html?spm=a2g1y.12024536.productList_5885013.subject_3)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## 描述

**<mark>M5GO Lite</mark>** is a small kit which consists of one **ENV unit** and a **white M5Core**(based on <mark>ESP32</mark> chip). It's a simple version of [M5GO IOT Starter Kit](en/core/m5go_iot_starter_kit).

You can program M5GO Lite with [UiFlow](http://flow.m5stack.com) or Arduino IDE.

We also supply some courses for teaching IOT programming. If you are interesting in it, contact us through Email <tech@m5stack.com> please.

**<mark>NOTE:</mark>**

*We have several kinds of Cores, the following figures show the main differece with them. If you want the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md).*

<img src="assets/img/product_pics/core/core_comparison_04.png">

<img src="assets/img/product_pics/core/core_comparison_05.png">

## 特性

-  Programming Support
    -  Arduino
    -  ESP-IDF
    -  MicroPython
-  TF Card Support (Up to 16G)

## 包含

-  1x white M5Core
-  1x M5GO Base
-  1x Units
-  1x GROVE Cables
-  Type-C USB Cable
-  User Manual

<img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="270" height="270"><img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="270" height="270">

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 例程

This is a example for reading temperature, humidity and atmospheric pressure after ENV unit was connected with M5Core. But before compiling this program, please install `Adafruit BMP280 Library` and copy `Adafruit_Sensor.h` to `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library` first.

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/m5go/m5go_lite/Arduino/ENV)。*

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

**For more examples, click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Basics) please.**

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_02.png" width="55%" height="55%">


## Related Video

- **m5stack instroduce**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>