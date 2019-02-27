# M5GO IOT Starter Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_04" width="250" height="250">

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html?spm=2114.12010615.8148356.4.44fa29faDagj56)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>M5GO IOT Starter Kit</mark>** is a kit designed for learning IOT programming which consists of 6 units(ENV, IR, RGB, PIR, ANGLE, HUB), one white M5Core(based on <mark>ESP32</mark> chip) and a [M5GO bottom](en/base/m5go_bottom).

Programming M5GO with [UiFlow](http://flow.m5stack.com) or Arduino IDE.

We also supply some courses for teaching IOT programming. If you are interesting in it, contact us through Email <tech@m5stack.com> please.

## Feature

-  Programming Support
    -  Arduino
    -  ESP-IDF
    -  MicroPython
-  TF Card Support (Up to 16G)

## PinMap

#### MainBoard Pinmap

**LCD & TF Card**

*LCD Pixel：320x240*
*Maximum storage of TF Card: 16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341(LCD Driver)</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE A**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**9-axis IMU sensor(MPU9250)**

*I2C Address: 0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

#### M5GO Base Pinmap

**GROVE B**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE B</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>

**GROVE C**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LED Bar & MicroPhone**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td></tr>
 <tr><td>LED Bar</td><td>SIG Pin</td><td> </td></tr>
 <tr><td>MicroPhone</td><td> </td><td>MIC Pin</td></tr>
</table>

## PARAMETER

<table>
   <tr style="font-weight:bold">
      <td>M5Core Source</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash & PSRAM</td>
      <td>16MB Flash + 4MB pSRAM </td>
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
      <td>Microphone</td>
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
      <td>Battery</td>
      <td>550mAh @ 3.7V, inside  vb</td>
   </tr>
   <tr>
      <td>Op.Temp.</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>54 x 54 x 21 mm</td>
   </tr>
   <tr>
      <td>C.A.S.E</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

**<mark>NOTE:</mark>**

*We have several kinds of Cores, the following figures show the main differece with them.*

- *If you want to **view** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md).*

- *If you want to **download** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx).*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05.png">

## Include

-  1x white M5Core
-  1x M5GO Base
-  6x Units
-  4x LEGO Accessories
-  3x GROVE Cables
-  Type-C USB Cable
-  User Manual

<img src="assets/img/product_pics/core/m5go/m5go_04.png" width="500">

<img src="assets/img/product_pics/core/m5go/m5go_05.png" width="500">

<img src="assets/img/product_pics/core/m5go/m5go_06.png" width="500">

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## Related Video

- **m5stack instroduce**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>