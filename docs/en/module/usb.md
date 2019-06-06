# Module USB {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_usb_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_usb_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-USB-Module-USB-HOST-HID-with-MAX3421E-SPI-Interface-Output-5-Input-5-Compatible/3226069_32961627365.html?spm=2114.12010615.8148356.4.6c042548sAUbGi)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**USB** is a USB driver module, integrated **MAX3421E** which adds USB host or peripheral capability to any system with an SPI
interface.  Ever up for adding the standard USB features on your project? this M5 moudle is the perfect solution.

Series Protocol: SPI

## Product Features

-  1x UAB stadard A port
-  10x extended GPIO pins
-  extended 3v3, 5v & GND

## Including

-  1x M5Stack USB Module

## Application

-  USB keylogger
-  Read and write U disk using M5Core

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [MAX3421E](https://www.sparkfun.com/datasheets/DevTools/Arduino/MAX3421E.pdf)

## Example

### Mini Burner

>1.Mini Burner is a simple and fast program burner, and each product page has a product-related case program for Mini Burner.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Module/MiniBurner_USB_Mouse.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the Mini Burner is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)


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

## Related Video

**USB Case - Read USB device**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/USB%20Interface.mp4" type="video/mp4">
</video>