# Unit PIR

<img src="assets/img/product_pics/unit/M5GO_Unit_pir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_pir_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-PIR-Sensor-Human-Body-Infrared-PIR-Motion-Sensor-Detector-Module-GPIO-GROVE-Connector/3226069_32931794651.html?spm=a2g1y.12024536.productList_5885013.subject_19)**

## Description

**<mark>PIR</mark>** is a human infrared sensor for M5GO that can easily detect
whether someone appears in front of it with M5GO Core.

## Feature

-  Detects the distance 150cm
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/Arduino).*

```arduino
#include <M5Stack.h>

// initialization
M5.begin();
pinMode(36, INPUT);// set pir sensor pin as input

// read data
int value = digitalRead(36);// read the pin(0: not detectd 1: detected)
M5.update();
```

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow).

<img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_02.png" width="65%" height="65%">

## Schematic

<img src="assets/img/product_pics/unit/pir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PIR Unit</td><td>Sensor Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>