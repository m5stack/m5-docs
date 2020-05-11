# Base Node

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M017</div>

<div class="product_pic"><img src="assets/img/product_pics/base/node_01.webp"><img src="assets/img/product_pics/base/node_02.webp"></div>

## 描述

**Node**, 是一款物联网智能节点底座.内置高保真音频解码芯片、麦克风、DHT12、IR收发器、LED灯( SK6812 )等硬件资源.与M5Core结合使用能够支持多节点终端互联、设备控制与信息传输.

不仅如此，功能强大的Node同样适用于智能音频设备开发.使用M5Core作为控制核心，运用EPS32 提供的 ESP-ADF 音频开发平台，能够以最全面的方式进行Espressif Systems ESP32芯片的音频应用开发，丰富的应用案例能够逐步指导添加新的功能，完成由简单到复杂的音频应用功能:

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

<img src="assets/img/product_pics/base/node_04.webp" width="50%" height="50%">

## 管脚映射

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2</td><td>GPIO34</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>Codec Chip</td><td>I2S_CLK</td><td>I2S_WS</td><td>I2S_BCK</td><td>I2S_IN</td><td>I2S_OUT</td><td>I2C_SDA</td><td>I2C_SCL</td><td>L_OUT1</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>node base</td><td>RGBLed(SK6812)</td><td>IR_Receive</td><td>IR_Send</td><td>DHT12_SDA</td><td>DHT12_SCL</td></tr>
</table>

## 包含

-  1x Node Module
-  1x 固定底座
-  4x 螺丝
  - 2x M3x12
  - 2x M3x18
-  4x Type-C USB

<img src="assets/img/product_pics/base/node_05.webp" width="50%" height="50%">

## 应用

-  物联网智能节点
-  网络收音机
-  智能音箱

<img src="assets/img/product_pics/base/node_03.webp" width="50%" height="50%">

## 相关链接

- **数据手册** - [WM8978](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/WM8978%20_en.pdf)

## 案例程序

- [语音控制 RGB 灯圈](https://github.com/m5stack/esp-adf/blob/master/examples/get-started/M5Node/main/play_mp3_example.c)

<img src="assets/img/product_pics/base/base_example/example_base_node_01.webp">

### 原理图

<img src="assets/img/product_pics/base/node_sch_01.webp">

<img src="assets/img/product_pics/base/node_sch_02.webp">

## 相关视频

**NODE 的演示 - 语音识别**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Node%20Module.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/node-module';


   anchor_search(purchase_link);
   scrollFunc();

</script>