# Unit RGB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rgb_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-RGB-Unit-with-NeoPixel-RGB-LED-Light-x3-GPIO-GROVE-Connector/3226069_32929809133.html?spm=a2g1y.12024536.productList_5885013.subject_21)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-RGB-Unit-with-NeoPixel-RGB-LED-Light-x3-GPIO-GROVE-Connector/3226069_32929809133.html?spm=a2g1y.12024536.productList_5885013.subject_21)** -->

## Description

**<mark>RGB</mark>** is a sensor including three RGB LED lights and two GROVE
ports.You can display specified color using M5GO Core through Blockly,
Arduino or MicroPython.

## Feature

-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino).*

```arduino
/*
    Install the AdaFruit NeoPixel library first
 */
#include <Adafruit_NeoPixel.h>

#define RGB_PIN 26
#define NUMPIXELS   3

// new a object
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB+NEO_KHZ800);

int delayval = 150;// delay for half a second

// initialization
pixels.begin(); // This initializes the NeoPixel library.

// display rgb
pixels.setPixelColor(0, pixels.Color(100,0,0));//parameter = (rgb index, color)
pixels.setPixelColor(1, pixels.Color(0,100,0));
pixels.setPixelColor(2, pixels.Color(0,0,100));
pixels.show(); // This sends the updated pixel color to the hardware.
```

<!-- ### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/example_unit_rgb_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_rgb_02.png" width="55%" height="55%">-->

<!-- ## 原理图 -->

<!-- <img src="assets/img/product_pics/unit/rgb_sch.JPG"> -->

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td> </td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>