# Module USB

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M020</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_usb_01.webp"><img src="assets/img/product_pics/module/module_usb_02.webp"></div>

## Description

**USB** is a USB driver module, integrated **MAX3421E** which adds USB host or peripheral capability to any system with an SPI
interface.  Ever up for adding the standard USB features on your project? this M5 moudle is the perfect solution.

## Product Features

-  Series Protocol: SPI
-  1x UAB stadard A port
-  10x extended GPIO pins
-  extended 3v3, 5v & GND
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：14.5g

## Including

-  1x M5Stack USB Module

## Applications

-  USB keylogger
-  Read and write U disk using M5Core

## Related Link

- **Datasheet** 
   - [MAX3421E](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MAX3421E_en.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_USB.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino)

**NOTE:**

Before compile this example code, you need to download the corresponding USB library from [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino/Library).
Unzip and copy this library folder to Arduino library path.( This is my path`C:\Users\<user_name>\Documents\Arduino\libraries`)

<img src="assets/img/product_pics/module/module_usb_03.webp">

<img src="assets/img/product_pics/module/module_usb_04.webp">

Download the example `usb_mouse.ino`

Plug the USB mouse into USB A port.

* Hold down the left button to draw white lines.

* Hold down the right button to draw green line.

* Press the middle wheel button to clear the screen.

<img src="assets/img/product_pics/module/module_example/USB/example_module_usb_01.webp">

## Schematic

<img src="assets/img/product_pics/module/usb_sch.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/usb-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>