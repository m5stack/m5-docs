# Unit LIGHT {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_light_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Light-Unit-with-Photoresistance-Grove-Port-Analog-Digital-Output-Compatible-with-M5GO-FIRE-ESP32/3226069_32920589923.html?spm=2114.12010615.8148356.4.1be27011RbDBo5)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

<mark>LIGHT</mark> is a light sensor unit with an adjustable resistor that can detect the lightironmental light intensity.
You can read analog signal(lightironmental light intensity) staright or get a digital signal(0/1) that means whether the light exists or not.

When light intensity is big enough, the unit will output hight level(digital signal "1"). Otherwise, it'll output low level.

## Feature

-  Adjustable threshold, including 10K adjustable resistor
-  Analog & Digital output
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

// initialization
M5.begin();
dacWrite(25, 0);// disable the speak noise
pinMode(26, INPUT);// LIGHT Pin setting

// read data
analogRead_value = analogRead(36);// read analog value of LIGHT
digitalRead_value = digitalRead(26);
```

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_04.png">

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_03.png">

## Schematic

<img src="assets/img/product_pics/unit/light_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LIGHT Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**LIGHT - Tutorial**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%20iot%20lighting%20part%202%20-%20light%20sensor%20control.mp4" type="video/mp4">
</video>

**LIGHT Application**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Light%20Units.mp4" type="video/mp4">
</video>