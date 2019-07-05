# Base Node {docsify-ignore-all}

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/Bases-Node/tree/master/schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-base/products/node-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**Node**, 是一款物联网智能节点底座.内置高保真音频解码芯片、麦克风、DHT12、IR收发器、LED灯( SK6812 )等硬件资源.支持多节点终端互联，进设备控制与信息传输.

不仅如此，功能强大的Node同样适用于智能音频设备开发.使用由 EPS32 提供的 ESP-ADF 音频开发平台，能够以最全面的方式进行Espressif Systems ESP32芯片的音频应用开发，丰富的应用案例能够逐步指导添加新的功能，完成由简单到复杂的音频应用功能:

- 支持多种音频格式，如MP3，AAC，FLAC，WAV，OGG，AMR，TS，EQ，Downmixer，Sonic，G.711，SPEEX等
- 多种音频播放源：HTTP，HLS（HTTP直播），SPIFFS，SDCARD，A2DP-Source，A2DP-Sink，HFP等
- 整合媒体服务，如：DLNA，WeChat，Internet Radio等
- 语音识别、集成Alexa，DuerOS等在线服务

## 产品特性

* 1x 12 RGBs
* 1x 温湿度传感器（DHT12）
* 4x 红外发射器（位于边缘四角），1x 红外接收器（位于底边）.
* 2x 麦克风
- 1x HiFi 立体声编解码芯片 ( 24位分辨率 )
- 1x 500mAh 锂电池

<img src="assets/img/product_pics/base/node_04.png" width="50%" height="50%">

## 管脚映射

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2 ( MOSI )</td><td>GPIO34 ( MISO )</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>Codec Chip ( WM8978 )</td><td>I2S_CLK ( MCLK )</td><td>I2S_WS ( LRC )</td><td>I2S_BCK ( BCK )</td><td>I2S_IN ( DACDAT )</td><td>I2S_OUT ( ADCDAT )</td><td>I2C_SDA ( SDIN )</td><td>I2C_SCL ( SCLK )</td><td>L_OUT1 ( LOUT1 )</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>RGBLed(SK6812)</td><td>Signal Pin</td><td>/</td><td>/</td><td>/</td><td>/</td></tr>
 <tr><td>IR</td><td>/</td><td>IR_Receive</td><td>IR_Send</td><td>/</td><td>/</td></tr>
 <tr><td>DHT12</td><td>/</td><td>/</td><td>/</td><td>I2C_SDA</td><td>I2C_SCL</td></tr>
</table>

## 包含

-  1x Node Module
-  1x 固定底座
-  4x 螺丝
  - 2x M3x12
  - 2x M3x18
-  4x Type-C USB

<img src="assets/img/product_pics/base/node_05.png" width="50%" height="50%">

## 应用

-  物联网智能节点
-  网络收音机
-  智能音箱

<img src="assets/img/product_pics/base/node_03.png" width="50%" height="50%">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [WM8978](http://pdf1.alldatasheet.com/datasheet-pdf/view/96647/WOLFSON/WM8978.html)

## 例程

- [语音控制 RGB 灯圈](https://github.com/m5stack/esp-adf/blob/master/examples/get-started/M5Node/main/play_mp3_example.c)

<img src="assets/img/product_pics/base/base_example/example_base_node_01.png">

### 原理图

<img src="assets/img/product_pics/base/node_sch_01.png">

<img src="assets/img/product_pics/base/node_sch_02.png">

## 相关视频

**NODE 的演示 - 语音识别**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Node%20Module.mp4" type="video/mp4">
</video>
