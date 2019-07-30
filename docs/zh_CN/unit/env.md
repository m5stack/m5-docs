# Unit ENV {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_env.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_env_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/mini-env-sensor-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**ENV** 是一款环境传感器,内部集成DHT12和BMP280，用于检测温度、湿度、大气压值数据.DHT12是DHT11湿度温度传感器的升级版本，完全向下兼容，测量数值更精确,并添加了I2C接口.BMP280是一款专为移动应用而设计的绝对气压传感器，具有较高的精准度.适合应用在一些小型低功耗终端上.对于需要对环境数据进行快速采集检测的项目来说, ENV Unit是一个兼顾性能与性价比的不错选择.

## 产品特性

- 温度:
    -  测量范围: -20 ~ 60 ℃
    -  误差: ±0.2℃
- 湿度:
    -  测量范围: 20 ~ 95 %RH
    -  误差: 0.1%
- 大气压:
    -  测量范围: 300 ~ 1100hPa
    -  误差: ±1hPa
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x ENV Unit
- 1x Grove 线

## 应用

- 气象站
- 储谷仓环境监控

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[BMP280 的库](https://github.com/adafruit/Adafruit_BMP280_Library)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ENV.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

该案例将使用 ENV Unit ，实现温度、湿度、大气压数据的读取.
1, 在进行程序编译前，请安装`Adafruit BMP280 Library`
2, 并将`Adafruit_Sensor.h`复制至`C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library`

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV).*

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

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png">

## 原理图

<img src="assets/img/product_pics/unit/env_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
