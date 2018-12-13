# M5Core BASIC

<img src="assets/img/product_pics/core/basic/basic_02.jpg" alt="basic_02" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_03.jpg" alt="basic_03" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_04.jpg" alt="basic_04" width="65%" height="65%">

* * *

:memo:**[Description](#Description)**|:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**|:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)** | :electric_plug:**[Schematic](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)** | 🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-ESP32-Basic-Core-Development-Kit-Extensible-Micro-Control-Wifi-BLE-IoT-Prototype/3226069_32837164440.html?spm=2114.12010615.8148356.2.3b9b2de96y27jH)**:clapper:**[Related Video](#Related-Video)**

## Description

**The M5Stack BASIC** is a black development kit based on **ESP32** chip composed of a black M5Core and a Bottom Base board. You can even program The M5Stack BASIC through Blockly, Arduino or MicroPython. The black core is a basic kit and **it does not own any MEMS chip(like MPU9250...)**.

The a Bottom board on the back of M5Core. It's designed for expanding gpio on M-Bus besides I2S Pins(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)for DIY. Each gpio on M-Bus is expanded as pin and port for convenience and flexibility.

## Feature

-  Programming Support: [UiFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/) and [Arduino](http://www.arduino.cc)
-  TF Card Support(Up to 16GB)

## Source PinMap

*We have several kinds of M5Cores, There is [their difference in schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_diff_between_m5cores.md).*

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

<!-- ## PinMap

**Speak**

| Speak Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| Speak Pin        | GPIO25         |

**Button**

| Button Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| BUTTON A        | GPIO39         |
| BUTTON B          | GPIO38            |
| BUTTON C          | GPIO37            |

**GROVE A**

| GROVE A(I2C)       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |
| 5V            | 5V            |
| GND           | GND           |

**LCD**

| ILI9341       | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | /            |
| CLK          | GPIO18            |
| CS          | GPIO14            |
| DC          | GPIO27            |
| RST          | GPIO33            |
| BL          | GPIO32            |

**TF Card**

| TFCard Pin      | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | GPIO19            |
| CLK          | GPIO18            |
| CS          | GPIO4            |

**M-Bus**

<figure>
  <!-- <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="300" height="231">
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="400" height="308"> -->
  <!-- <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="500" height="385">
</figure> -->

## Parameter

<!-- | Source        | Parameter      |
| :----------:  |:------------: |
| <mark>ESP32</mark>         | 240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth         |
| Flash          | 4M-Bytes            |
| Input          | 5V @ 500mA            |
| Interface          | TypeC x 1, GROVE(I2C+I/0+UART) x 1            |
| LCD          | 2 inch, 320x240 Colorful TFT LCD, ILI9342            |
| Speaker          | 1W-0928            |
| Battery          | 150mAh @ 3.7V, inside  vb            |
| Op.Temp.          | 32°F to 104°F ( 0°C to 40°C )            |
| Size          | 54 x 54 x 12.5 mm            |
| C.A.S.E          | Plastic ( PC )            |
| Weight          | 120g with bottom, 100g only core            | -->

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

## Include

-  1x M5Stack BASIC
-  1x M5Stack BASIC Bottom
-  Type-C USB Cable
-  User Manual

<img src="assets/img/product_pics/core/basic/basic_06.jpg" alt="basic_06" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_07.jpg" alt="basic_07" width="250" height="250">

<img src="assets/img/product_pics/core/basic/basic_08.jpg" alt="basic_08" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_09.jpg" alt="basic_09" width="250" height="250">

<img src="assets/img/product_pics/core/basic/basic_10.jpg" alt="basic_10" width="50%" height="50%">

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

## Related Video

- **m5stack's instroduce**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
