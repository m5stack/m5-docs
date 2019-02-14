# NEOPIXEL {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_neopixel.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-NeoPixel-RGB-LEDs-Cable-SK6812-with-GROVE-Port-2m-1m-50cm-20cm-10cm/3226069_32950831315.html?spm=a2g1x.12024536.productList_5885013.pic_0)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>NeoPixel</mark>** is a RGB LED Cable unit. You can program it using NeoPixel Lib supported by Adafruit or using [UIFlow](http://flow.m5stack.com) that will be easier. The unit comunicates with M5Core with GROVE Interface.

?> Be carefull that a Neopixel unit has input port and output port. When this unit is connected with M5Core, the input port must be attach with Core and it's output port can be attach with another neopixel unit as shown below.

<img src="assets/img/product_pics/unit/unit_neopixel_02.png">

## Feature

-  the length: 10cm/20cm/0.5m/1m/2m
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## Example

### 1. Arduino IDE

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。*

```arduino
/*
    Install FastLED library first.
*/
#include <M5Stack.h>
#include "FastLED.h"

#define Neopixel_PIN    21
#define NUM_LEDS    30

CRGB leds[NUM_LEDS];
uint8_t gHue = 0;
static TaskHandle_t FastLEDshowTaskHandle = 0;
static TaskHandle_t userTaskHandle = 0;

void setup(){
  Serial.begin(115200);
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextColor(YELLOW); M5.Lcd.setTextSize(2); M5.Lcd.setCursor(40, 0);
  M5.Lcd.println("Neopixel example");
  M5.Lcd.setTextColor(WHITE);
  M5.Lcd.setCursor(0, 25);
  M5.Lcd.println("Display rainbow effect");

  // Neopixel initialization
  FastLED.addLeds<WS2811,Neopixel_PIN,GRB>\
                         (leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(10);
  xTaskCreatePinnedToCore(FastLEDshowTask, \
                         "FastLEDshowTask", 2048, NULL, 2, NULL, 1);
}

void loop(){
}

void FastLEDshowESP32(){
    if (userTaskHandle == 0){
        userTaskHandle = xTaskGetCurrentTaskHandle();
        xTaskNotifyGive(FastLEDshowTaskHandle);
        const TickType_t xMaxBlockTime = pdMS_TO_TICKS( 200 );
        ulTaskNotifyTake(pdTRUE, xMaxBlockTime);
        userTaskHandle = 0;
    }
}

void FastLEDshowTask(void *pvParameters){
    for(;;){
        fill_rainbow(leds, NUM_LEDS, gHue, 7);// rainbow effect
        FastLED.show();// must be executed for neopixel becoming effective
        EVERY_N_MILLISECONDS( 20 ) { gHue++; }
    }
}
```

<img src="assets/img/product_pics/unit/unit_example/NEOPIXEL/example_unit_neopixel_02.png">

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/NEOPIXEL/example_unit_neopixel_01.png">



<!-- ## Schematic -->

<!-- <img src="assets/img/product_pics/unit/neopixel_sch.JPG"> -->

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOPIXEL Unit</td><td> </td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**Neopixel**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzg3NzE3NzY0MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>