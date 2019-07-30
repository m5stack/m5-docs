# Unit EARTH {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_earth.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_earth_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/earth-sensor-unit)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**EARTH** unit is a Soil Moisture Sensor for measuring the moisture in soil and similar materials.

The soil moisture sensor is pretty straight forward to use. The two large exposed pads function as probes for the sensor, together acting as a variable resistor. The higher moisture that is in the soil means the better the conductivity between the two so that the sensor will result in a lower resistance, and a higher SIG out.

You can read the moisture in soil by ADC.
Inside this Unit we put an extra potentiometers to
change the measurement range.

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_03.png" width="50%" height="50%">

## Product Features

-  Adjustable threshold, including 10K adjustable resistor
-  Analog & Digital output
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego-compatible holes
-  Product Size：64.4mm x 24.1mm x 8.1mm
-  Product weight：9.8g



## Include

- 1x EARTH unit
- 1x GROVE Cable

## Application

- Potted soil moisture monitoring

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Earth.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/Arduino).*

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

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.png">

## Schematic

<img src="assets/img/product_pics/unit/earth_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**EARTH Tutorial - Monitor vase soil moisture 1**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/(M5stack%20x%20Arduino)%20Do%20plants%20have%20feelings.mp4" type="video/mp4">
</video>

**EARTH Case - Monitor vase soil moisture 2**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Earth%20Unit.mp4" type="video/mp4">
</video>