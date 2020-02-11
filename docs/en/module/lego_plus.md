# Module LEGO+ {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lego_plus_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_lego_plus_02.png" width="60%" height="60%">



## Description

**LEGO+** is a LEGO DC Motor Driver module. It's build with MEGA328 and L293DD, implemented 4 driver channels. A DC power input is designed for power supplement. Through M-BUS the DC in can automaticlly power the M5 core at top.

Series Communication: IIC (0x56).

LEGO motor is one of the Technic pieces form LEGO. The purpose of LEGO Technic is to create more advanced models with more complex technical functions, compared to the simpler brick-building properties of normal Lego.

## Product Features

- DC Power input: 6-12V
- DC Connector Type: XT30 (female)
- 4x LEGO motor port
- 2x IIC GROVE port (extend PORTA from M5 Core)
- L293DD: PUSH-PULL Driver Chip
- Product Size：54.2mm x 54.2mm x 12.8mm
- Product weight：27.5g

## Include

-  1x LEGO+ module
-  1x 10cm LEGO cable
-  1x DC connector

## Related Link

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)**


<!-- ### 1. Arduino IDE -->

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LEGO_PLUS.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">


## Example

### 1. Arduino

*To get the complete Arduino code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LEGO_PLUS/LEGO_Test).*

### 2. UIFlow

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/UIFlow)。*

<img src="assets/img/product_pics/module/module_example/LEGO_PLUS/example_module_lego_plus_03_en.png">

## Schematic

<img src="assets/img/product_pics/module/lego_plus_sch.png">

### Arduino 328p frimware

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)*

## NOTE

If you want to change the firmware inside **MEGA328 chip** which has implemented the motor driver code by default, you can overwrite through **ISP** port. Below shows the location of ISP port.

<img src="assets/img/product_pics/module/module_lego_plus_03.png">

## Video

**LEGO+ - Build a tank**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5%20Tank.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/lego-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>