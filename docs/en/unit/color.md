# Unit COLOR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Color-Unit-TCS34725-Color-Sensor-RGB-Color-Sensor-Development-Board-Module-GROVE-I2C-Compatible/3226069_32946957647.html?spm=a2g1x.12024536.productList_5885013.pic_5)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>COLOR</mark>** is color recognition unit with integrated **TCS3472** chip.

**Identify color principle:**

In the TCS3472, a 3*4 array of filtered photodiodes and a 16 bit analog-to-digital converters are embedded. Of the 12 photodiodes, 3 have red filters, 3 have green filters, 3 have blue filters and 3 have no filter(clear).

<img src="assets/img/product_pics/unit/color/unit_color_07.png">

When detecting the color of an object, TCS3472 returns data from four channels: red(R), green(G), blue(B) and clear(C)(non-filtered). The response from the red, green and blue channels (RGB) can be used to determine a particular source’s chromaticity coordinates (x, y).

<img src="assets/img/product_pics/unit/color/unit_color_04.png">

Chromaticity Calculation Process Overview:

<img src="assets/img/product_pics/unit/color/unit_color_05.png">

When we get coordinates (x, y), please reference the below figure so as to get the recommended color.

<img src="assets/img/product_pics/unit/color/unit_color_06.png">

This Unit communicates with the M5Core via the GROVE A interface. It's I2C address is 0x29.

## Feature

-  Detection range: -40℃~85℃
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Include

- 1x COLOR Unit
- 1x Grove Cable

## Application

- Product Color Verification
- Color tracking robot

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [TCS3472](https://ams.com/documents/20143/36005/TCS3472_DS000390_2-00.pdf)

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/Arduino).*

```arduino
/*
  Color test
    hardware: M5Stack

  please install the Adfruit TCS34725 library first ...
*/
#include <Wire.h>
#include <M5Stack.h>
#include "Adafruit_TCS34725.h"

// declaration
uint16_t clear, red, green, blue;
#define commonAnode true // set to false if using a common cathode LED

// new a object
Adafruit_TCS34725 tcs;
tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,TCS34725_GAIN_4X);

// initialization
M5.begin(true, false, false);
tcs.begin();
tcs.setIntegrationTime(TCS34725_INTEGRATIONTIME_154MS);
tcs.setGain(TCS34725_GAIN_4X);

// read data
tcs.getRawData(&red, &green, &blue, &clear);
```

After burnt this example, PC serial terminal will print original value RGBC(red, green, blue, clear).

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.png">

<!-- ### 2. UIFlow -->
<!--
<img src="assets/img/product_pics/unit/unit_example/example_unit_color_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_color_02.png" width="55%" height="55%">

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/UIFlow).* -->

## Schematic

<img src="assets/img/product_pics/unit/color_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>COLOR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**COLOR Case - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/Color%20Unit.mp4" type="video/mp4">
</video>