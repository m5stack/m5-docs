# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/item/New-Arrival-2019-M5StickC-1-of-Limited-Trial-Edition-ESP32-PICO-Mini-IoT-Development-Board-Finger/32985247364.html)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.12.7807425e3JNPRr&id=588710395351)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)** -->

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.12.7807425e3JNPRr&id=588710395351)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)** -->

## Description

<mark>**M5StickC**</mark> is a ESP32 development board with 0.96 inch **TFT color screen** (80 * 160 resolution), **Red LED**, button, **Microphone**, IR transmitter, 6-axis IMU (SH200Q) and 80 mAH battery. The ESP32 module in M5StickC also has a built-in 4MB flash. If you are wearing a strap base, you can usually wear it on your wrist.

**Switching machine operation:** Press for two seconds to turn it on, and press and hold for six seconds to turn it off.

**Note:** Only orange case of M5StickC for sale.
<!-- M5Stick有两个版本，白色外壳是无 MPU9250 的版本，灰色外壳是有 MPU9250 的版本，附送一些配件(`WATCH BELT`, `WALL` 和 `BRICK`)。 -->

## Feature

-  Programming Support: Arduino, UIFlow(Blockly, MicroPython)

## PinMap

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_06.png" alt="gray_02" width=30% height=30%>

**Red LED & IR transmitter & BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 chip</td><td>GPIO9</td><td>GPIO10</td><td>GPIO37</td><td>GPIO39</td></tr>
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

**6-axis IMU (SH200Q)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>6-axis IMU (SH200Q)</td><td>SCL</td><td>SDA</td>
</table>

**M5StickC top extended IO port**

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" alt="gray_02" width=100% height=100%>

<!-- **<mark>注意：</mark>**

*我们有Core有几个版本，下图是它们主要区别的比较。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png"> -->

## Include

-  1x M5StickC including 80mAh-Battery

<!-- ## 原理图

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

完整原理图请点击[这里](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick)。 -->

## Related Link

-  **Datasheet**

    - [ESP32-PICO](https://github.com/m5stack/M5-Schematic/blob/master/Core/esp32-pico-d4_datasheet_cn.pdf) - [ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)

    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf) - [AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet%20v1.13_cn..pdf)

## Example

* **Arduino**

    - [M5Stick Factory Test](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5StickC/Arduino/FactoryTest)

    <!-- - [M5Stick 手表](https://github.com/eggfly/StickWatch) -->



<!-- * **UIFlow**

    - [白色方块游戏](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)  -->

<!-- <img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_07.png" alt="gray_02" width=50% height=50%> -->

## Related Video

- **M5StickC Case - counter**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch1.mp4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
