# Unit ANGLE

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_angle_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Angle-Unit-Potentiometer-Inside-Resistance-Adjustable-GPIO-GROVE-Co-n-nec-to-r/3226069_32931834705.html?spm=a2g1y.12024536.productList_5885013.subject_18)**

## Description

The Unit ANGLE is a potentiometer sensor that can detect rotary
angle.

## Feature

-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino).*

```arduino
#include <M5Stack.h>

// select the input pin for the potentiometer
#define sensorPin 36

// declaration
int cur_sensorValue = 0;

// initialization
M5.begin();
pinMode(sensorPin, INPUT);

// read data
cur_sensorValue = analogRead(sensorPin);
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_02.png" width="69%" height="69%">

## Schematic

<img src="assets/img/product_pics/unit/angle_sch.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>ANGLE Unit</td><td>Sensor Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>