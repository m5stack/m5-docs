# Node Base {docsify-ignore-all}

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/Bases-Node/tree/master/schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-NODE-Samrt-Speaker-WM8978-Audio-Development-Board-I2S-Module-with-DHT12-Sensor-MIC-IR/3226069_32949773234.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>Node</mark>** is a base as a intelligent node in the IOT. If stacked a M5Core, it will be a intelligent node that can communicate with surrounding equipments via IR, Bluetooth or WIFI.

* Including 12 RGBs and one temperature and humidity sensor(DHT12), it means <mark>Node</mark> can display its own status and perception surrounding environment.
* There are 4 IR Transmitter LED at four corners and two IR Receiver
* There are two MIC
* A Codec chip(WM8978) inside that is often used to be applied for Hi-Fi Speaker.

<img src="assets/img/product_pics/base/node_04.png" width="30%" height="30%">

## Feature

-  Including 12 RGBLed
-  Including a HiFi stereo codec chip(Up to 24bit DAC)
-  Including a lithium battery interface

## PinMap

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2 ( MOSI )</td><td>GPIO34 ( MISO )</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>Codec Chip ( WM8978 )</td><td>I2S_CLK ( MCLK )</td><td>I2S_WS ( LRC )</td><td>I2S_BCK ( BCK )</td><td>I2S_IN ( DACDAT )</td><td>I2S_OUT ( ADCDAT )</td><td>I2C_SDA ( SDIN )</td><td>I2C_SCL ( SCLK )</td><td>L_OUT1 ( LOUT1 )</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>RGBLed ( SK6812 )</td><td>Signal Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR</td><td> </td><td>IR_Receive</td><td>IR_Send</td><td> </td><td> </td></tr>
 <tr><td>DHT12</td><td> </td><td> </td><td> </td><td>I2C_SDA</td><td>I2C_SCL</td></tr>
</table>

## Include

-  1x Node Module
-  Wall holder
-  4x screws
-  4x Type-C USB Cable


## Applications

-  Intelligent IOT node
-  Webradio
-  Intelligent sound box

<img src="assets/img/product_pics/base/node_03.png" width="30%" height="30%">

## Related Link

- **数据手册** - [WM8978](http://pdf1.alldatasheet.com/datasheet-pdf/view/96647/WOLFSON/WM8978.html)

## Example

* Temperature and Humidity Sensor (DHT12)

    https://github.com/m5stack/Bases-Node/tree/master/example/dht12

* RGB Light Circle

    https://github.com/m5stack/Bases-Node/tree/master/example/rgbled/NeoPixelFunRandomChange

* Audio codec (WM8978)

    https://github.com/m5stack/esp-adf/tree/master/NODE_example

## Related Video

**NODE Case - Voice Recognition**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Node%20Module.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
