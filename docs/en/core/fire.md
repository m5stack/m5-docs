# M5Stack FIRE

<img src="assets/img/product_pics/core/fire/product_pic_fire.png" alt="fire_01" width="250" height="250"> <img src="assets/img/product_pics/core/fire/m5_fire_01.png" width="35%" height="35%">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-NEW-PSRAM-2-0-FIRE-IoT-Kit-Dual-Core-ESP32-16M-FLash-4M-PSRAM-Development/3226069_32847906756.html?spm=2114.12010615.8148356.10.1c93724d7cJ5rG.html)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

The M5Stack **<mark>FIRE</mark>** is a development kit based on <mark>ESP32</mark> chip. FIRE is a kit which composed of red m5core, M5Go Base and M5Go CHG. Base(for charging red m5core). You can even program The M5Stack FIRE through Blockly, Arduino or MicroPython.

The M5Stack FIRE equips the ESP32 with everything necessary to program, run and develop on the wonderchip. It also features a 9-Axis (Gyro + Accelerometer + Magnetometer) MEMS (**MPU-9250**) and a TFT LCD, so you can create a 3D remote gesture controller, a simple "Leap Motion" via M5Stack FIRE in a day in stead of couple weeks and so on.

M5Go CHG. Base is composed of POGO pin. M5Go Base is composed of PORT B, PORT C, 2 RGBLed Bars(SK6812), a microphone and a Battery(600mAh).

## Feature

-  Programming Support
    -  UiFlow
    -  MicroPython
    -  Arduino
-  Compatible LEGO
-  TF Card Support

## PinMap

*We have several kinds of m5core board on sale, click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_diff_between_m5cores.md) for their difference.*

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

-  1x M5Stack FIRE
-  1x M5GO Base
-  1x M5GO CHG BASE
-  Type-C USB Cable
-  User Manual

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## Related Video

- **m5stack instroduce**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
