# M5GO Lite

<img src="assets/img/product_pics/core/m5go/m5go_lite_01.png" alt="gray_02" width="250" height="250"><img src="assets/img/product_pics/core/m5go/m5go_lite_04.png" alt="gray_04" width="250" height="250">


<!-- <img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="250" height="250"> -->

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://www.aliexpress.com/store/product/M5Stack-NEW-Lite-IoT-Development-Board-Kit-ESP32-MPU9250-Grove-16MFlash-DHT12-Temperature-Humidity-Sensor-Module/3226069_32965981279.html?spm=a2g1y.12024536.productList_5885013.subject_3)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)****

## 描述

**<mark>M5GO Lite</mark>** 是一款以白色 M5Core 主控为核心，附带1个 **ENV unit** 的物联网开发套件。它是 [M5GO IOT Starter Kit](zh_CN/core/m5go_iot_starter_kit) 的简单版本。

你可以用 [UiFlow](http://flow.m5stack.com) 或 Arduino IDE 对它编程。

我们也提供了一些物联网开发课程方便你更快上手使用，如果你对这个感兴趣的话，欢迎给我司发邮件<tech@m5stack.com>。

**<mark>注意：</mark>**

*我们有Core有几个版本，下图是它们主要区别的比较，如果想查看详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

<img src="assets/img/product_pics/core/core_comparison_04_zh_CN.png">

<img src="assets/img/product_pics/core/core_comparison_05_zh_CN.png">

## 特性

-  可编程，支持 [UiFlow](http://flow.m5stack.com) , MicroPython 和 Arduino
-  支持外置 TF 卡 ( 最大 16G )

## 包含

-  1x white M5Core主控
-  1x M5GO 底座
-  1x ENV Unit
-  1x GROVE 线
-  Type-C USB 线
-  说明书

<img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="270" height="270"><img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="270" height="270">

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 例程

这是 ENV Unit 接入 M5Core 的例程，能读取温湿度值和气压值。可是在编译程序之前需要先安装库 `Adafruit BMP280 Library`，然后拷贝 `Adafruit_Sensor.h` 到 `Adafruit BMP280 Library` 的安装路径 `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library` 下。

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/m5go/m5go_lite/Arduino/ENV)。*

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

**更多例程，请点击[这里](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_02.png" width="55%" height="55%">


## 相关视频

- **m5stack的简介**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzkzMjQ4NzIyOA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>