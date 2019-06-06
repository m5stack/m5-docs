# Unit LIGHT {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_light_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Light-Unit-with-Photoresistance-Grove-Port-Analog-Digital-Output-Compatible-with-M5GO-FIRE-ESP32/3226069_32920589923.html?spm=2114.12010615.8148356.4.1be27011RbDBo5)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**LIGHT** is a light intensity sensor unit with an adjustable photoresistor。

A photoresistor is a light-controlled variable resistor. The resistance of a photoresistor decreases with increasing incident light intensity, and vice versa.
It exhibits photoconductivity which make it possiable to detect the varies based on Voltage, and use a AD to convert the digital data.

We add some extra work to strengthen the circult, a Dual Differential Comparators **LM393**, compares the differntial voltage between the photoresistor and the varistor. It could offer larger and accuracy range of light intensity.

## Product Features

- 10K adjustable resistor
- Software Development Platform: Arduino, UIFlow(Blocky,Python)
- Two Lego-compatible holes

## Include

- 1x LIGHT Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### Mini Burner

>1.Mini Burner is a simple and fast program burner, and each product page has a product-related case program for Mini Burner.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_Light.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the Mini Burner is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

### 1. Arduino IDE

*The code below is incomplete. To complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino).*

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

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow).*

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