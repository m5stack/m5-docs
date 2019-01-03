# USB - USB外设驱动模块

<img src="assets/img/product_pics/module/module_usb_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_usb_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.1dbd425eDUpt0Z&id=583599151180)**

## 描述

<mark>USB模块</mark>是一款USB控制器，内置了USB芯片MAX3421E。堆叠了M5Core之后，通过通信速率可高达26MHz的SPI接口与M5Core连接，即可作USB外设又可作USB主机。

## 特性

-  高达26MHz的SPI接口
-  8路GPIO输入输出
-  内置锂电池接口

## 包含

-  1x USB模块

## 应用

-  USB键盘记录器
-  M5Core读写U盘

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[数据手册](https://www.sparkfun.com/datasheets/DevTools/Arduino/MAX3421E.pdf)** (MAX3421E)

## 例程

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino)。*

烧录例程`usb_mouse.ino`，USB鼠标接入模块之后，按住左键并拖动鼠标描绘白色线条；按住右键，描述绿色线条；按下中间滚轮键，清屏。

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

## 原理图

<img src="assets/img/product_pics/module/usb_sch.png">