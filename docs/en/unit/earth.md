# Unit EARTH

<img src="assets/img/product_pics/unit/M5GO_Unit_earth.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_earth_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Earth-Module-Grove-Compatible-Soil-monitoring-Analog-and-Digital-Output/3226069_32922643696.html?spm=2114.12010615.8148356.2.45434ff2lDdyLQ)**

## Description

**<mark>EARTH</mark>** is a moisture detective unit for measuring the moisture in soil. The soil moisture sensor is pretty straight forward to use. The two large exp osed pads function as probes for the sensor, together acting as a variable resistor. The more water that is in the soil means the better the conductivity between the pads will be and will result in a lower resistance, and a higher SIG out.
You can read the moisture in soil staright or get a digital signal(0/1) that means the high(or low) humidity.

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_03.png" width="50%" height="50%">

## Feature

-  Adjustable threshold, including 10K adjustable resistor
-  Analog & Digital output
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/Arduino).*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  dacWrite(25, 0);//disable the speak noise

  pinMode(26, INPUT);// set digital pin
}

uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

void loop() {
  analogRead_value = analogRead(36);// read analog value of EARTH
  digitalRead_value = digitalRead(26);// read digital value of EARTH
}

```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.png">

## Schematic

<img src="assets/img/product_pics/unit/earth_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>