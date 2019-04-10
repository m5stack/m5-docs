# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5stickc/m5stickc_quick_start_with_arduino_Windows)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/item/New-Arrival-2019-M5StickC-1-of-Limited-Trial-Edition-ESP32-PICO-Mini-IoT-Development-Board-Finger/32985247364.html)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

<mark>**M5StickC**</mark> is a ESP32 development board with 0.96 inch **TFT color screen** (80 * 160 resolution), **Red LED**, button, **Microphone**, IR transmitter, 6-axis IMU (SH200Q) and 80 mAH battery. The ESP32 module **ESP32-Pico** in M5StickC also has a built-in 4MB flash. If the M5StickC is equipped with watch-base and watch-belt, you can wear it on your wrist.

**Power on / off:**

* Power on: Press the reset button for at least 2 seconds

* Shutdown: Press the reset button for at least 6 seconds

**Note:**

* Baudrate supported by M5StickC: 1200 ~115200, 250K, 500K, 750K, 1500K

* Only orange case of M5StickC for sale.

## Feature

-  Programming Support: Arduino, UIFlow(Blockly, MicroPython)

## PinMap

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_06.png" alt="gray_02" width=30% height=30%>

**Red LED & IR transmitter & BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 chip</td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>Red LED</td><td>LED pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR transmitter</td><td> </td><td>transmitter pin</td><td> </td><td> </td></tr>
<tr><td>BUTTON A</td><td> </td><td> </td><td>button pin</td><td> </td></tr>
<tr><td>BUTTON B</td><td> </td><td> </td><td> </td><td>button pin</td></tr>
</table>

**TFT Screen**

*Driver IC: ST7735S*

*Resolution: 80 * 160*

<table>
 <tr><td>ESP32 chip</td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFT Screen</td><td>TFT_MOSI</td><td>TFT_CLK</td><td>TFT_DC</td><td>TFT_RST</td><td>TFT_CS</td></tr>
</table>

**GROVE interface**

<table>
 <tr><td>ESP32 chip</td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE interface</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**Microphone (SPM1423)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>Microphone</td><td>SCL</td><td>SDA</td></tr>
</table>

**6-axis IMU (SH200Q) & Power Mangement IC (AXP192)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>6-axis IMU (SH200Q)</td><td>SCL</td><td>SDA</td>
 <tr><td>Power Mangement IC (AXP192)</td><td>SCL</td><td>SDA</td>
</table>

**M5StickC top extended IO port**

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" alt="gray_02" width=100% height=100%>

## Include

-  1x M5StickC including 80mAh-Battery

## Related Link

-  **Datasheet**

    - [ESP32-PICO](https://github.com/m5stack/M5-Schematic/blob/master/Core/esp32-pico-d4_datasheet_en.pdf) - [ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)

    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf) - [AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet%20v1.13_cn.pdf) - [SPM1423](https://pdf1.alldatasheet.com/datasheet-pdf/view/546596/KNOWLES/SPM1423HM4H-B.html)

## Example

* **Arduino**

    - [M5Stick Factory Test](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

## Related Video

- **M5StickC Case - counter**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" type="video/mp4">
</video>

<!-- - **M5StickC Case - 3D mouse**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/StickC/3D_Mouse.mp4" type="video/mp4">
</video> -->

- **M5StickC Case - Test DSD**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Simple_Watch_Device.mp4" type="video/mp4">
</video>

<!-- - **M5StickC Case - Drive buzzer**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Connect-passive-buzzer-to-M5StickC.mp4" type="video/mp4">
</video> -->