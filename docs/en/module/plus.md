# Module PLUS {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M019</div>

<img src="assets/img/product_pics/module/module_plus_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_plus_02.png" width="30%" height="30%">


## Description

**PLUS** is a enhanced M5 module comes with Lipo battery(500mAh), gear potentiometer, IR transmitter, extend PORT B(GPIO Port), PORT C(UART Port) from M5 core and a Microphone soldering pad. Powered with MEGA328, it could be a great upgrade of the hardwre resources by adding up PLUS to your work.

Communication Protocol: IIC (0x62).

## Product Features

-  500mAh Battery
-  Programmable gear potentiometer
-  IR transmitter
-  Including PORT B and PORT C
- Product Size：54.2mm x 54.2mm x 12.8mm
- Product weight：20.5g

## Include

-  1x M5Stack PLUS Module

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/firmware_328p)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_PLUS.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## Example

### Arduino IDE

*The Code below `plus_read_encoder.ino` is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/Arduino).*

```arduino
/*
* Read data from the gear potentiometer
* Send infrared light
*/
#include <Arduino.h>
#include <M5Stack.h>

#define IrPin 13
#define PLUS_ADDR 0x62

// declaration
int32_t number = 0;
uint8_t press = 0;

// initialization
M5.begin(true, false, false);
Wire.begin();
ledcSetup(1, 38000, 10); ledcAttachPin(IrPin, 1);// IR Pin setting

// read data
Wire.requestFrom(PLUS_ADDR, 2);
while(Wire.available()) {
    int8_t encode = Wire.read();
    uint8_t press_n = Wire.read();
    number += encode;
    if(press_n == 0xff) {
        press = 0;//encoder was pressed
    }
    else {
        press = 1;//encoder was releaed
    }
}
```

### UIFLOW

<img src="assets/img/product_pics/module/module_plus_03.jpg">

- [click here to get UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/UIFLOW). 

## Schematic

<img src="assets/img/product_pics/module/plus_sch.png">

## Video

**PLUS Case - Page flipping and selection of menu interface**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Encoder.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/plus-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>