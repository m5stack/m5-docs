# Base Node {docsify-ignore-all}

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/Bases-Node/tree/master/schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-base/products/node-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**Node**, like its namesake, is a smart node with full-featured functions in a IoT application scenarios. It can be program as a intelligent speaker like Echo. Node provides more hardware resources:  built-in high-fidelity audio codec chip，MIC, DHT12, IR emitter ...

ESP32 provides an Audio Develope Platform called ESP-ADF.
ESP-ADF supports development of audio applications for the Espressif Systems ESP32 chip in the most comprehensive way. With ESP-ADF, you can easily add features, develop audio applications from simple to complex:

- Music player or recorder supports audio formats such as MP3, AAC, FLAC, WAV, OGG, AMR, TS, EQ, Downmixer, Sonic, G.711, SPEEX ...
- Play music from sources: HTTP, HLS(HTTP Live Streaming), SPIFFS, SDCARD, A2DP-Source, A2DP-Sink, HFP ...
- Integrate Media services such as: DLNA, WeChat ...
Internet Radio
- Voice recognition and integration with online services such as Alexa, DuerOS, and more.

##Product Feature

* 1x 12 RGBs
* 1x temperature & humidity sensor(DHT12),which can display its own status and perception surrounding environment.
* 4x IR Transmitter LEDs at four corners and 2x IR Receivers
* 2x MIC
- 1x HiFi stereo codec chip ( Up to 24bit DAC )
- 1x 500mAh lithium battery

<img src="assets/img/product_pics/base/node_04.png" width="50%" height="50%">

## PinMap

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2 ( MOSI )</td><td>GPIO34 ( MISO )</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>Codec Chip ( WM8978 )</td><td>I2S_CLK ( MCLK )</td><td>I2S_WS ( LRC )</td><td>I2S_BCK ( BCK )</td><td>I2S_IN ( DACDAT )</td><td>I2S_OUT ( ADCDAT )</td><td>I2C_SDA ( SDIN )</td><td>I2C_SCL ( SCLK )</td><td>L_OUT1 ( LOUT1 )</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>RGBLed(SK6812)</td><td>Signal Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR</td><td> </td><td>IR_Receive</td><td>IR_Send</td><td> </td><td> </td></tr>
 <tr><td>DHT12</td><td> </td><td> </td><td> </td><td>I2C_SDA</td><td>I2C_SCL</td></tr>
</table>

## Include

-  1x Node Module
-  Wall holder
-  4x screws
-  4x Type-C USB Cable

<img src="assets/img/product_pics/base/node_05.png" width="50%" height="50%">

## Applications

-  Intelligent IOT node
-  Webradio
-  Intelligent sound box

<img src="assets/img/product_pics/base/node_03.png" width="50%" height="50%">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [WM8978](http://pdf1.alldatasheet.com/datasheet-pdf/view/96647/WOLFSON/WM8978.html)

## Example

- [Voice control RGB light circle ( Chinese )](https://github.com/m5stack/esp-adf/blob/master/examples/get-started/M5Node/main/play_mp3_example.c)

<img src="assets/img/product_pics/base/base_example/example_base_node_01.png">

## Related Video

**NODE Case - Voice Recognition**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Node%20Module.mp4" type="video/mp4">
</video>