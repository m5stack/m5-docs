# Step Motor Module {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_stepmotor_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_stepmotor_03.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.png" width="30%" height="30%"> -->

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-Stepmotor-Module-for-Arduino-ESP32-GRBL-12C-Step-Motor-MEGA328P-similar-as-12V/3226069_32889109142.html?spm=2114.12010612.8148356.17.50511b9b5ViNuz)**

## Description

This is a <mark>StepMotor Driver Module</mark> built in MEGA328P MCU which has been burnt <mark>GRBL</mark> firmware used to control stepper motors. The module comunicates with M5Core via I2C. It's I2C address is 0x70.

## Feature

-  9-24V Power Input
-  Driver 3-way stepper motors<mark>(X, Y, Z)</mark>
-  Including a lithium battery interface

## Include

-  1x Step Motor Module
-  12V Power
-  1x 5V FAN Module for heat dissipation

## Applications

-  DIY 3D Printer
-  Simple Robot Arm

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/stepmotor_module/tree/master/Example/Arduino).*

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

*If you want the complete code, please click [here](https://github.com/m5stack/stepmotor_module/tree/master/Example/UIFlow).*

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.png">

## Schematic

<img src="assets/img/product_pics/module/stepmotor_sch.png">