# NEOPIXEL - 灯条Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_neopixel.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.31.6c2275f4nUJEfh&id=580453719549)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>NeoPixel</mark>**是带GROVE接口的NeoPixel灯带，将NeoPixel Unit与M5Core相连，可以很方便地实现控制，特别是使用[UiFlow](http://flow.m5stack.com)来编程。

?> NeoPixel Unit有输入和输出口，在接M5Core的时候，记得看清楚Unit上的箭头(顺序)方向，一定要输入口接M5Core，然后输出口还可以通过GROVE线，接下一条NeoPixel Unit，从而串联一起。

<img src="assets/img/product_pics/unit/unit_neopixel_02.png">

## 特性

-  可选长度: 10cm/20cm/0.5m/1m/2m
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[FastLED库说明](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED参考(中文)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## 例程

### 1. Arduino IDE

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。*

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

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/NEOPIXEL/example_unit_neopixel_01.png">

<!-- ## 原理图

<img src="assets/img/product_pics/unit/neopixel_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOPIXEL Unit</td><td> </td><td>数字引脚</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**Neopixel 的演示**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzg3NzE3NzY0MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>