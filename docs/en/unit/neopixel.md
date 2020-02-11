# Unit RGB LED {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_neopixel.jpg" width="30%" height="30%">


## Description

**RGB LED** is a extendable strip light with RGB LED lined on. Just in case you haven’t heard about RGB LED yet, RGB LED features digitally addressable LEDs,which means each led can display RGB color and brightness individually. It is very easy to program by Single-BUS with simple protocol. Another feature is the extension and flexiblulity.You can even connect many of them up together to create a massive long LED display. It's important to note that, the brightness and the quantity of LEDs matters the most to the power consuming, if you have a bunch of them connectted up, you will need extra power supply.

*Notice: please pay attention to the direction of the input port and output port*

<img src="assets/img/product_pics/unit/unit_neopixel_02.png">

## Product Features

- Alternative length: 10cm/20cm/0.5m/1m/2m
- Sofeware Development Platform: Arduino, UIFlow(Blockly,Python)
- extendable
- Product Size：10cm/20cm/0.5m/1m/2m
- Product weight：4g/5g/12g/19g/36g

## Include

- 1x RGB LED Unit

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NEOPIXEL.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。*

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

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/NEOPIXEL/example_unit_neopixel_01.png">

<!-- ## Schematic -->

<!-- <img src="assets/img/product_pics/unit/neopixel_sch.JPG"> -->

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOPIXEL Unit</td><td> </td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Video

**Neopixel case - 01**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5stack%20Neopixel%20Cosplay%20costume%20lights%20-%20super%20simple.mp4" type="video/mp4">
</video>

**Neopixel case - 02**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Akela%20Weapons.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/neopixel-rgb-leds-cable';


   anchor_search(purchase_link);
   scrollFunc();

</script>