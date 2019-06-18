# Unit RGB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rgb_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-RGB-Unit-with-NeoPixel-RGB-LED-Light-x3-GPIO-GROVE-Connector/3226069_32929809133.html?spm=a2g1y.12024536.productList_5885013.subject_21)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**RGB** is LED Unit include 3 individual LEDs. It is also one of the Unit from M5GO Kit. Each one can display anycolor based on RGB value. One feature of this Unit is extension, which means you can have mutiple of them wired together.

This is a very useful piece on STEM class, students can program it to realize some of cool applications, for example a traffic light.

## Product Features

- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes

## Include

- 1x RGB Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RGB.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino).*

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

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/RGB/example_unit_rgb_01.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td> </td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>