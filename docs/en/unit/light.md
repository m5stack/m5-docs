# Unit LIGHT {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/light-sensor-unit)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**LIGHT** is a light intensity sensor unit with an adjustable photoresistor。

A photoresistor is a light-controlled variable resistor. The resistance of a photoresistor decreases with increasing incident light intensity, and vice versa.
It exhibits photoconductivity which make it possiable to detect the varies based on Voltage, and use a AD to convert the digital data.

We add some extra work to strengthen the circult, a Dual Differential Comparators **LM393**, compares the differntial voltage between the photoresistor and the varistor. It could offer larger and accuracy range of light intensity.

## Product Features

- 10K adjustable resistor
- Software Development Platform: Arduino, UIFlow(Blocky,Python)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 8.5mm
- Product weight：8.8g

## Include

- 1x LIGHT Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Light.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

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