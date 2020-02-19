# Base Node {docsify-ignore-all}

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">


## Description

**Node**, like its namesake, is a smart node with full-featured functions in a IoT application scenarios. Together with M5Stack Core, it can be programmed as an intelligent speaker like Echo. Node provides more hardware resources:  built-in high-fidelity audio codec chip，MIC, DHT12, IR emitter ...

ESP32 provides an Audio Develope Platform called ESP-ADF.
ESP-ADF supports development of audio applications for the Espressif Systems ESP32 chip in the most comprehensive way. With ESP-ADF, you can easily add features, develop audio applications from simple to complex:

- Music player or recorder supports audio formats such as MP3, AAC, FLAC, WAV, OGG, AMR, TS, EQ, Downmixer, Sonic, G.711, SPEEX ...
- Play music from sources: HTTP, HLS(HTTP Live Streaming), SPIFFS, SDCARD, A2DP-Source, A2DP-Sink, HFP ...
- Integrate Media services such as: DLNA, WeChat ...
Internet Radio
- Voice recognition and integration with online services such as Alexa, DuerOS, and more.

## Product Feature

* 1x 12 RGBs
* 1x temperature & humidity sensor(DHT12),which can display its own status and perception surrounding environment.
* 4x IR Transmitter LEDs at four corners and 2x IR Receivers
* 2x MIC
- 1x HiFi stereo codec chip ( Up to 24bit DAC )
- 1x 500mAh lithium battery

<img src="assets/img/product_pics/base/node_04.png" width="50%" height="50%">

## PinMap

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2</td><td>GPIO34</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>Codec Chip</td><td>I2S_CLK</td><td>I2S_WS</td><td>I2S_BCK</td><td>I2S_IN</td><td>I2S_OUT</td><td>I2C_SDA</td><td>I2C_SCL</td><td>L_OUT1</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>node base</td><td>RGBLed(SK6812)</td><td>IR_Receive</td><td>IR_Send</td><td>DHT12_SDA</td><td>DHT12_SCL</td></tr>
</table>

## Include

-  1x Node Module
-  Wall holder
-  4x screws
-  4x Type-C USB Cable

### Weight and Size

- Package Size(LxWxH): 106mm * 66mm * 40mm
- Package Weight: 108g

<img src="assets/img/product_pics/base/node_05.png" width="50%" height="50%">

## Applications

-  Intelligent IOT node
-  Webradio
-  Intelligent sound box

<img src="assets/img/product_pics/base/node_03.png" width="50%" height="50%">

## Related Link

- **Datasheet** -  [WM8978](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/WM8978%20_en.pdf)

## Example

- [Voice control RGB light circle ( Chinese )](https://github.com/m5stack/esp-adf/blob/master/examples/get-started/M5Node/main/play_mp3_example.c)

<img src="assets/img/product_pics/base/base_example/example_base_node_01.png">

## Video

**NODE Case - Voice Recognition**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Node%20Module.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/node-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>