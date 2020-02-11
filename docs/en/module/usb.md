# Module USB {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_usb_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_usb_02.png" width="30%" height="30%">


## Description

**USB** is a USB driver module, integrated **MAX3421E** which adds USB host or peripheral capability to any system with an SPI
interface.  Ever up for adding the standard USB features on your project? this M5 moudle is the perfect solution.

Series Protocol: SPI

## Product Features

-  1x UAB stadard A port
-  10x extended GPIO pins
-  extended 3v3, 5v & GND
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：14.5g

## Including

-  1x M5Stack USB Module

## Application

-  USB keylogger
-  Read and write U disk using M5Core

## Related Link

- **Datasheet** - [MAX3421E](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MAX3421E_en.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_USB.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Example

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino).*

**NOTE:**

Before compile this example code, you need to download the corresponding USB library from [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino/Library).
Unzip and copy this library folder to Arduino library path.( This is my path`C:\Users\<user_name>\Documents\Arduino\libraries`)

<img src="assets/img/product_pics/module/module_usb_03.png">

<img src="assets/img/product_pics/module/module_usb_04.png">

Download the example `usb_mouse.ino`

Plug the USB mouse into USB A port.

* Hold down the left button to draw white lines.

* Hold down the right button to draw green line.

* Press the middle wheel button to clear the screen.

```arduino
#include <M5Stack.h>
#include <SPI.h>
#include <Usb.h>
#include <hiduniversal.h>
#include <hidboot.h>
#include <usbhub.h>
#include "M5Mouse.h"

// new objects
USB Usb;
USBHub  Hub(&Usb);
HIDBoot<USB_HID_PROTOCOL_MOUSE> HidMouse(&Usb);
MouseRptParser  Prs;

// initialization
M5.begin();
Usb.Init();
HidMouse.SetReportParser(0,(HIDReportParser*)&Prs);

// handle event coming from usb device
Usb.Task();
if(Usb.getUsbTaskState() == USB_STATE_RUNNING)
{
  Mouse_Pointer(mou_px, mou_py);
  mou_px = 0;
  mou_py = 0;
  /* left button pressed: draw white point */
  if (mou_button == 1)
    M5.Lcd.drawCircle(StaPotX, StaPotY, 1, WHITE);
  /* right button pressed: draw green point */
  if (mou_button == 2)
    M5.Lcd.drawCircle(StaPotX, StaPotY, 1, GREEN);
  /* middle button pressed: clear screen */
  if (mou_button == 4)
    M5.Lcd.fillScreen(BLACK);
}
```

<img src="assets/img/product_pics/module/module_example/USB/example_module_usb_01.png">

## Schematic

<img src="assets/img/product_pics/module/usb_sch.png">

## Video

**USB Case - Read USB device**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/USB%20Interface.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/usb-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>