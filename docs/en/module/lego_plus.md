# LEGO+ (LEGO DC Motor Driver)

<img src="assets/img/product_pics/module/module_lego_plus_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_lego_plus_02.png" width="60%" height="60%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-MEGA328-4-DC-10-DC-I2C/3226069_32961587834.html)**

## Description

**<mark>LEGO+</mark>** is a LEGO DC Motor Driver module. It's built in MEGA328 chip for driving and manage each motor port. The module also owns DC Power port, so that when the load current is too large after driving many motors, you can power those system through external power supply.

LEGO+ module communicates with M5Core through IIC. The IIC address is 0x56.

## Feature

- Input voltage range of DC Power: 6-12V

## Include

-  1x LEGO+ module
-  1x 10cm LEGO cable
-  1x DC connector

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)**

## Example

<!-- ### 1. Arduino IDE -->



### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/UIFlow)。*

<img src="assets/img/product_pics/module/module_example/LEGO_PLUS/example_module_lego_plus_03_en.png">

## Schematic

<img src="assets/img/product_pics/module/lego_plus_sch.png">

## NOTE

If you want to change the firmware of **MEGA328 chip** which used to driver those LEGO Motors, you can update it through **ISP** port. The following picture is the pin-mapping of ISP port.

<img src="assets/img/product_pics/module/module_lego_plus_03.png">
