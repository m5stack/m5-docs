# M5GO Lite {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_lite_01.png" alt="gray_02" width="250" height="250"><img src="assets/img/product_pics/core/m5go/m5go_lite_04.png" alt="gray_04" width="250" height="250">


<!-- <img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="250" height="250"> -->

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://www.aliexpress.com/store/product/M5Stack-NEW-Lite-IoT-Development-Board-Kit-ESP32-MPU9250-Grove-16MFlash-DHT12-Temperature-Humidity-Sensor-Module/3226069_32965981279.html?spm=a2g1y.12024536.productList_5885013.subject_3)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)****

## 描述

**<mark>M5GO Lite</mark>** 是一款以白色 M5Core 主控为核心，附带1个 **ENV unit** 和 [M5GO 底座](zh_CN/base/m5go_bottom)的物联网开发套件。它是 [M5GO IOT Starter Kit](zh_CN/core/m5go_iot_starter_kit) 的简单版本。

你可以用 [UIFlow](http://flow.m5stack.com) 或 Arduino IDE 对它编程。

我们也提供了一些物联网开发课程方便你更快上手使用，如果你对这个感兴趣的话，欢迎给我司发邮件<tech@m5stack.com>。

## 特性

-  可编程，支持 [UIFlow](http://flow.m5stack.com) , MicroPython 和 Arduino
-  支持外置 TF 卡 ( 最大 16G )

## 外设的管脚映射

#### 主板管脚

**LCD屏幕&TF卡**

*LCD像素：320x240*
*TF卡最大支持16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF卡</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**按键&喇叭**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>按键引脚</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>喇叭</td><td> </td><td> </td><td> </td><td>喇叭引脚</td></tr>
</table>

**GROVE接口A**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**九轴姿态传感器MPU9250**

*I2C地址为0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

#### M5GO底座管脚

**GROVE接口B**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE B</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>

**GROVE接口C**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LED灯条&麦克风MIC&喇叭Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td><td>GPIO25</td></tr>
 <tr><td>LED灯条</td><td>SIG管脚</td><td> </td><td> </td></tr>
 <tr><td>麦克风MIC</td><td> </td><td>MIC管脚</td><td> </td></tr>
<tr><td>喇叭</td><td> </td><td> </td><td>Speaker管脚</td></tr>
</table>

## 参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash闪存</td>
      <td>16MB Flash</td>
   </tr>
   <tr>
      <td>输入电压</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD屏幕</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342</td>
   </tr>
   <tr>
      <td>喇叭</td>
      <td>1W-0928</td>
   </tr>
      <tr>
      <td>麦克风</td>
      <td>MEMS Analog BSE3729 Microphone</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>SK6812 3535 RGB LED x 10</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU9250</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>550mAh @ 3.7V, inside  vb</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>54 x 54 x 21 mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

**<mark>注意：</mark>**

*我们有Core有几个版本，下图是它们主要区别的比较。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04_zh_CN.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05_zh_CN.png">

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