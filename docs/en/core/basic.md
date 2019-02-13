# M5Core BASIC

<img src="assets/img/product_pics/core/basic/basic_02.png" alt="basic_02" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_03.png" alt="basic_03" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_04.png" alt="basic_04" width="65%" height="65%">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-ESP32-Basic-Core-Development-Kit-Extensible-Micro-Control-Wifi-BLE-IoT-Prototype/3226069_32837164440.html?spm=2114.12010615.8148356.2.3b9b2de96y27jH)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**The M5Stack BASIC** is a black development kit based on **ESP32** chip composed of a black M5Core and a Bottom Base board. You can even program The M5Stack BASIC through Blockly, Arduino or MicroPython. The black core is a basic kit and **it does not own any MEMS chip(like MPU9250...)**.

The a Bottom board on the back of M5Core. It's designed for expanding gpio on M-Bus besides I2S Pins(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)for DIY. Each gpio on M-Bus is expanded as pin and port for convenience and flexibility.

## Feature

-  Programming Support: [UiFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/) and [Arduino](http://www.arduino.cc)
-  TF Card Support(Up to 16GB)

## Source PinMap

**LCD & TF Card**

*LCD Resolution: 320x240*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>

</table>

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button Pin</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE A**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td></tr>
</table>

## Parameter

<table>
   <tr style="font-weight:bold">
      <td>Source</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4M-Bytes</td>
   </tr>
   <tr>
      <td>Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>150mAh @ 3.7V</td>
   </tr>
   <tr>
      <td>Op.Temp.</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>54 x 54 x 12.5 mm</td>
   </tr>
   <tr>
      <td>C.A.S.E</td>
      <td>Plastic ( PC )</td>
   </tr>
   <tr>
      <td>Weight</td>
      <td>120g with bottom, 100g only core</td>
   </tr>
</table>

**<mark>NOTE:</mark>**

*We have several kinds of Cores, the following figures show the main differece with them. If you want the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md).*

<img src="assets/img/product_pics/core/core_comparison_04.png">

<!-- <img src="assets/img/product_pics/core/core_comparison_05.png"> -->

## Include

-  1x M5Stack BASIC
-  1x M5Stack BASIC Bottom
-  Type-C USB Cable
-  User Manual

<img src="assets/img/product_pics/core/basic/basic_06.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_07.png" width="250" height="250">

<img src="assets/img/product_pics/core/basic/basic_08.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_09.png" width="250" height="250">

<img src="assets/img/product_pics/core/basic/basic_10.png" width="50%" height="50%">

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

## Related Video

**M5Stack Instroduce**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**M5Core Cases**

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_compass.png)](https://v.youku.com/v_show/id_XNDAxNDI4MDM0OA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_imu.png)](https://v.youku.com/v_show/id_XNDAxNDMwMjAyNA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_avatar.png)](https://v.youku.com/v_show/id_XNDAxNDI3OTgwMA==.html?spm=a2hzp.8253869.0.0)

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_voice_recognition.png)](https://v.youku.com/v_show/id_XNDAxNDMwNzU5Mg==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_smart_electric_monitor.png)](https://v.youku.com/v_show/id_XNDAxNDI4NTQ0NA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_smart_home.png)](https://v.youku.com/v_show/id_XNDAxNDMxMzg2MA==.html?spm=a2hzp.8253869.0.0)

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_leap_motion.png)](https://v.youku.com/v_show/id_XNDAxNDI4MjU5Mg==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_microphone_alexa.png)](https://v.youku.com/v_show/id_XNDAxNDMwNTYxNg==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_robot.png)](https://v.youku.com/v_show/id_XNDAxNDI4NDk3Ng==.html?spm=a2hzp.8253869.0.0)