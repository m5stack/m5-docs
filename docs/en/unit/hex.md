# Unit HEX {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_hex_01.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/hex-neopixel-led-board)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**HEX** is a hexagona RGB LED panel. Total 37 RGB LEDs. With a input port and a output port, you can have mutiple of them in series connection.


This is how LEDs layout in the panel. Pay attention to the sequence in your code.

<img src="assets/img/product_pics/unit/unit_hex_03.png">
<br>
<img src="assets/img/product_pics/unit/hex/unit_hex_04.jpg">

## Product Features

- Total LED: 37
- Software development platform: Arduino,UIFlow(Blockly & python)
- Two Lego-compatible holes

## Include

- 1x HEX Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_HEX.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Example

### 1. Arduino IDE

FastLED library on Arduino presents excellent and colorful lighting effects.
Before compile, it is require to install the FastLED library and connect HEX to GROVE A.

RGB LED Library on Arduino

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/Arduino)。*

```arduino
/*
    Install FastLED library first.(HEX is connected to GROVE A)
 */
#include <M5Stack.h>
#include "FastLED.h"

#define Neopixel_PIN    21
#define NUM_LEDS    37

CRGB leds[NUM_LEDS];
uint8_t gHue = 0;

void setup() {
  Serial.begin(115200);
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextColor(YELLOW); M5.Lcd.setTextSize(2); M5.Lcd.setCursor(40, 0);
  M5.Lcd.println("HEX Example");
  M5.Lcd.setTextColor(WHITE);
  M5.Lcd.setCursor(0, 25);
  M5.Lcd.println("Display rainbow effect");

  // Neopixel initialization
  FastLED.addLeds<WS2811,Neopixel_PIN,GRB>/
                        (leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(10);
}

void loop(){
    fill_rainbow( leds, NUM_LEDS, gHue, 7);
    FastLED.show();// must be executed for neopixel becoming effective
    EVERY_N_MILLISECONDS( 20 ) { gHue++; }
}
```

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_03.png">

### UIFlow

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_01.png" width="50%" height="50%"> <img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_02.png" width="30%" height="30%">

### PinMap

**If HEX connected to GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**If HEX connected to GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**If HEX connected to GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>