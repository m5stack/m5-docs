# M5Stick {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="250" height="250">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="gray_02" width="250" height="250">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)** &nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp; 🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-New-M5Stick-Mini-Development-Kit-ESP32-1-3-OLED-80mAh-Battery-Inside-Buzzer-IR/3226069_32947692973.html?spm=a2g1y.12024536.productList_5885011.subject_1)**

<!-- &nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)** -->

## Description

<mark>**M5Stick**</mark> is a mini esp32 development board including 1.3' OLED Screen(64x128), led, button, buzzer, IR Transmitter, 80mAh-Battery and **optional MEMS(MPU9250)**. Usually, you can put it on your wrist with `WATCH BELT` or band it on the wall with `WALL` or `BRICK`.

There are two version of it. White version does not contain MPU9250, gray version contains MPU9250 and some accessories(likes `WATCH BELT`, `WALL` and `BRICK`).

## Feature

-  Programming Support: Arduino, UIFlow(Blockly, MicroPython)
-  Wearable
-  Gray version: MEMS(MPU9250)

## PinMap

 <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="250" height="250">

**Blue LED&BUTTON&BUZZER&IR Transmitter**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO17</td><td>GPIO19</td><td>GPIO26</td><td>GPIO35</td></tr>
 <tr><td>IR Transmitter</td><td>Transmitter Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>Blue LED</td><td> </td><td>LED Pin</td><td> </td><td> </td></tr>
<tr><td>BUZZER</td><td> </td><td> </td><td>BUZZER Pin</td></tr>
<tr><td>BUTTON</td><td> </td><td> </td><td> </td><td>BUTTON Pin</td></tr>
</table>

**OLED**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td>
 <tr><td>OLED</td><td>CS</td><td>DC</td><td>RST</td>
</table>

**GROVE Interface**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE Interface</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**Gray Version:**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>9-axis attitude sensor(MPU9250)</td><td>SCL</td><td>SDA</td>
</table>

**<mark>NOTE:</mark>**

*We have several kinds of Cores, the following figures show the main differece with them.*

- *If you want to **view** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md).*

- *If you want to **download** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx).*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05.png">

## Include

-  1x M5Stick including 80mAh-Battery
-  1x Type-C USB Cable

**Gray Version:**
-  Some accessories: `WATCH BELT`, `WALL` and `BRICK`

## Schematic

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

If you want the complete schematic, please click [here](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick).

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## Example

* **Arduino**

    - [M5Stick Factory Test](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)

    - [M5Stick Watch](https://github.com/eggfly/StickWatch)

        <iframe width="560" height="315"        src="https://www.youtube.com/embed/kw5ut5MAkZw" frameborder="0"     allow="accelerometer; autoplay; encrypted-media; gyroscope;      picture-in-picture" allowfullscreen></iframe>

* **UIFlow**

    - [White square game](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)

<!-- ## Related Video

- **m5stack instroduce**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
