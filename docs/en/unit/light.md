# Unit LIGHT

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_light_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Light-Unit-with-Photoresistance-Grove-Port-Analog-Digital-Output-Compatible-with-M5GO-FIRE-ESP32/3226069_32920589923.html?spm=2114.12010615.8148356.4.1be27011RbDBo5)**

## Description

The Unit light is a light sensor unit with an adjustable resistor that can detect the lightironmental light intensity.
You can read analog signal(lightironmental light intensity) staright or get a digital signal(0/1) that means whether the light exists or not.


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

```arduino
//disable the speak noise
dacWrite(25, 0);

analogRead_value = analogRead(36);//get analog value of LIGHT(0-4095)
digitalRead_value = digitalRead(26);//0: sense the ligth 1: do not sense
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino) for Specific example.

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_02.png" width="69%" height="69%">

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow) for Specific example.


## Schematic

<img src="assets/img/product_pics/unit/light_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LIGHT Unit</td><td>Ain</td><td>Din</td><td>5V</td><td>GND</td></tr>
</table>