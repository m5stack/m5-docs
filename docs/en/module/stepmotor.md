# Module STEPMOTOR

<el-tag effect="plain">SKU:M012</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_stepmotor_01.webp"> <img src="assets/img/product_pics/module/module_stepmotor_02.webp"></div>

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.webp" width="30%" height="30%"> -->

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

## Applications

-  DIY 3D Printer
-  Simple Robot Arm

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr> 
      <td>net weight</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>34g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*12.8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## Related Link

- **[The Firmware of inside MEGA328](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

- **[DRV8825 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_STEPMOTOR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

?>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## MBUS PinMap

<img src="assets\img\product_pics\module\module_bus.webp"/>

## Schematic

<img src="assets/img/product_pics/module/stepmotor_sch.webp">

## Example

### 1. Arduino IDE

The code below is incomplete. TO get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/STEPMOTOR)

### 2. UIFlow

Wanna explore the easiest way of Servo programming?? Check out the Blockly Platform at [UIFlow](flow.m5stack.com)

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Module/STEPMOTOR/UIFlow)

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/step-motor-module-adapter-fan-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>