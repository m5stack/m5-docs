# Unit PIR

<img src="assets/img/product_pics/units/M5GO_Unit_pir.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_pir_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-PIR-Sensor-Human-Body-Infrared-PIR-Motion-Sensor-Detector-Module-GPIO-GROVE-Connector/3226069_32931794651.html?spm=a2g1y.12024536.productList_5885013.subject_19)**

## Description

The Unit PIR is a human infrared sensor for M5GO that can easily detect
whether someone appears in front of it with M5GO Core.

## Feature

-  Detects the distance 150cm
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

<!-- ```c++
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR) for Specific example. -->

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/PIR/example_unit_pir_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/PIR/example_unit_pir_02.png" width="68%" height="68%">

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow) for Specific example.

## Schematic

<img src="assets/img/product_pics/units/pir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PIR Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>