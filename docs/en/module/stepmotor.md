# Module STEPMOTOR {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_stepmotor_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_03.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.png" width="30%" height="30%"> -->

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-module/products/step-motor-module-adapter-fan-module)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**STEPMOTOR** is used for stepper motor control. It is perfect for any motion project as it can drive up to 3 Stepper motors with **GRBL** control.

It is built with MEGA328P has been flashed **GRBL** firmware. The module comunicates with M5Core via I2C(0x70)

Integrated 3 DRV8825, a simple but very powerful board that can control one bipolar stepper motor at the time and allows micro stepping up to 1/32 of a step.

## Product Features

-  9-24V Power Input
-  3-way stepper motors **(X, Y, Z)**

## Include

-  1x Step Motor Module
-  12V Power (Optional)
-  1x 5V FAN Module for heat dissipation (Optional)
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：23.5g

## Applications

-  DIY 3D Printer
-  Simple Robot Arm

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

- **[DRV8825 Datasheet](https://www.pololu.com/file/0J590/drv8825.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_STEPMOTOR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The code below is incomplete. TO get complete code, please click [here](https://github.com/m5stack/stepmotor_module/tree/master/Example/Arduino).*

```adrduino
/*
    If Button A was pressed,
    stepmotor will rotate back and forth at a time
*/

#include <M5Stack.h>
#include <Wire.h>

#define STEPMOTOR_I2C_ADDR 0x70

// initialization
M5.begin();
Wire.begin();

// Controlling Protocol:
//  G<n> X<distance>Y<distance>Z<distance> F<speed>
SendCommand(STEPMOTOR_I2C_ADDR, "G1 X20Y20Z20 F500");
SendCommand(STEPMOTOR_I2C_ADDR, "G1 X0Y0Z0 F400");

// Get Data from Module.
Wire.requestFrom(STEPMOTOR_I2C_ADDR, 1);
if (Wire.available() > 0) {
  int u = Wire.read();
  if (u != 0) Serial.write(u);
}

// Send Data to Module.
while (Serial.available() > 0) {
  int inByte = Serial.read();
  SendByte(STEPMOTOR_I2C_ADDR, inByte);
}
```

### 2. UIFlow

Wanna explore the easiest way of Servo programming?? Check out the Blockly Platform at [UIFlow](flow.m5stack.com).

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Module/STEPMOTOR/UIFlow).*

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.png">

## Schematic

<img src="assets/img/product_pics/module/stepmotor_sch.png">