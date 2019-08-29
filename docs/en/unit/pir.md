# Unit PIR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_pir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_pir_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/pir-module)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**PIR** is a human body infrared unit. It belongs to the "passive pyroelectric infrared detector". It detects the infrared radiation emitted and reflected by the human body or object. When infrared is detected, the output level is high and it takes a while. Delay (high during the period and allow repeated triggers) until the trigger signal disappears (restores low).

This Unit communicates with the M5Core via the GROVE B.

*Notice: This Unit has 2s delay time.*

## Feature

- Detects the distance: 150cm
- Delay time: 2s
- Sensing range: < 100°
- Quiescent current: < 60uA
- Operating temperature: -20 - 80 °C
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego installation holes
- Product Size：32.2mm x 24.2mm x 20mm
- Product weight：4.9g

## Include

- 1x PIR unit
- 1x GROVE Cable

## Application

- Human body Induction Lamp
- Security Product
- Automatic Induction Appliance Settings

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PIR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/Arduino).*

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

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow).

<img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_03.png">

## Schematic

<img src="assets/img/product_pics/unit/pir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PIR Unit</td><td>Sensor Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>