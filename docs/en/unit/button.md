# Unit BUTTON

<img src="assets/img/product_pics/units/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Button-Unit-for-ESP32-Arduino-Micropython-Development-Kit-with-GROVE-GPIO-Port-Blockly/3226069_32921805637.html?spm=a2g1x.12024536.productList_2187621.8)**

## Description

The Unit BUTTON is a sigle-button unit that can be detected whether the button pressed or not

## Feature

-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

```c++
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino)for Specific example.

## Schematic

<img src="assets/img/product_pics/units/button_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>