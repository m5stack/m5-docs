# Unit COLOR

<img src="assets/img/product_pics/unit/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Color-Unit-TCS34725-Color-Sensor-RGB-Color-Sensor-Development-Board-Module-GROVE-I2C-Compatible/3226069_32946957647.html?spm=a2g1x.12024536.productList_5885013.pic_5)**

## Description

**<mark>COLOR</mark>** is a unit can detecte the color of object surface which integrates **TCS3472** (a color sensor). The unit comunicates with M5Core with I2C.

## Feature

-  High precision
-  Detection range: -70℃~382.2℃
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  RGB LED Backlight Control
-  Product Color Verification

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [TCS3472](https://pdf1.alldatasheet.com/datasheet-pdf/view/560511/AMSCO/TCS3472.html)

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
// set to false if using a common cathode LED
#define commonAnode true
// our RGB -> eye-recognized gamma color
byte gammatable[256];

// new a object
Adafruit_TCS34725 tcs;
tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS,TCS34725_GAIN_4X);

// other function
static uint16_t color16(uint16_t r, uint16_t g, uint16_t b) {
	uint16_t _color;
	_color = (uint16_t)(r & 0xF8) << 8;
	_color |= (uint16_t)(g & 0xFC) << 3;
	_color |= (uint16_t)(b & 0xF8) >> 3;
  return _color;
}

// initialization
M5.begin(true, false, false);
tcs.begin();
tcs.setIntegrationTime(TCS34725_INTEGRATIONTIME_154MS);
tcs.setGain(TCS34725_GAIN_4X);

// read data
tcs.getRawData(&red, &green, &blue, &clear);
// Figure out some basic hex code for visualization
uint32_t sum = clear;
float r, g, b;
r = red; r /= sum; g = green; g /= sum; b = blue; b /= sum;
r *= 256; g *= 256; b *= 256;
uint16_t _color = color16((int)r, (int)g, (int)b);
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