# HEX

<img src="assets/img/product_pics/unit/unit_hex_01.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-New-HEX-NeoPixel-LED-Board-with-WS6812-37pcs-NeoPixel-Three-GROVE-Port-and-Power-Input/3226069_32961683136.html?spm=a2g03.12010615.8148356.2.d4652ef23dWS29)**

## Description

**<mark>HEX</mark>** is a hexagon RGB LED unit built in 37 RGB. And you can connect many HEXs in series one by one.

This's a figure about HEX serial number.

<img src="assets/img/product_pics/unit/unit_hex_03.png">

## Feature

-  The number of RGB: 37
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## Example

### 1. Arduino IDE

This is a HEX example that displays gradient rainbow color. Before compiling this example, you need to install FastLED library and connect HEX to GROVE A of M5Core.

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/Arduino)。*

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

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_01.png" width="50%" height="50%"> <img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_02.png" width="30%" height="30%">

### PinMap

**If HEX was connected to GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**If HEX was connected to GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**If HEX was connected to GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>