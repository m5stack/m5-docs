# SERVO {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_servo_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_03.png" width="30%" height="30%">

***

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-SERVO-Module-Board-12-Channels-Servo-Controller-with-MEGA328-Inside-Power-Adapter-6-24V/3226069_32951356502.html?spm=a2g1y.12024536.productList_5885011.pic_0)**

## Description

**<mark>Servo</mark>** is a servo-motor driver module which can drive 12-way servo motors simultaneously. But actually, in our experiment, because of the maximum current, the maximum number of servo motor it can drive is 9. So we will publish a upgraded version soon after.

It's too easy to drive servo motors so that you can drive many servo motors after programmed 2-3 lines code in Arduino IDE or dragged 2-3 block in UiFlow.

Servo is communicated with M5Core through GROVE interface(I2C communication). The I2C address is 0x53.

## Feature

-  Drive multi-way servo motor simultaneously
-  Support wide-voltage power input: 6-12V
-  Support programming with Arduino IDE or UiFlow

## Include

-  1x M5Stack Servo Module
-  1x 6-12V Power Interface

## Applications

-  Humanoid robot
-  Bionic multi-joint robot
-  3-axis head for camera

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/Arduino).*

```arduino
#define SERVO_ADDR 0x53 //the IIC address of SERVO Module
/*
 * control servo(CH channle) by us
 */
Wire.beginTransmission(SERVO_ADDR);
Wire.write(CH|0x00);
Wire.write(timeL);
Wire.write(timeH);
Wire.endTransmission();

/*
 * control servo(CH channle) by angle
 */
Wire.beginTransmission(SERVO_ADDR);
Wire.write(CH|0x10);
Wire.write(angle);//0-180°
Wire.endTransmission();
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow).*

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.png">

## Schematic

<img src="assets/img/product_pics/module/servo_sch.png">

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/pm3xhhnIi5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## SERVO Case

<iframe width="560" height="315" src="https://www.youtube.com/embed/FD89wBYZmeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
