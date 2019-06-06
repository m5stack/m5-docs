# Module USB {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_usb_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_usb_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.1dbd425eDUpt0Z&id=583599151180)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**USB** 是M5Stack堆叠模块系列中的一款，USB驱动模块.集成了**MAX3421E**芯片，能够为任何带有SPI的系统添加USB主机或是外设功能接口.如果你想为你的设备添加标准的USB接口,这款USB模块会完美的解决方案.

通讯协议: SPI

## 产品特性

-  1x UAB 标准端口 A
-  10x GPIO 引脚拓展
-  拓展 3v3, 5v & GND

## 包含

-  1x M5Stack USB 模块

## 应用

-  USB 键盘记录
-  M5Core U盘读写器

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [MAX3421E](https://www.sparkfun.com/datasheets/DevTools/Arduino/MAX3421E.pdf)

## 例程

### Mini Burner

>1.Mini Burner是一个简洁快速的程序烧录器，每一个产品页面里的Mini Burner都提供了一个与产品相关的案例程序.
[点击此处下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Module/MiniBurner_USB_Mouse.exe)

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.Mini Burner烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino).*

**注意:**
在编译该程序前，你需要[点击此处下载相应的USB库](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino/Library).
并将其解压缩到Arduino库路径中.(`C:\Users\<user_name>\Documents\Arduino\libraries`)

<img src="assets/img/product_pics/module/module_usb_03.png">

<img src="assets/img/product_pics/module/module_usb_04.png">

下载演示程序 `usb_mouse.ino`
将鼠标接入 USB 模块的 A 端口.

* 按住左按键拖动绘制白线.

* 按住右按键拖动绘制绿线.

* 按中间滚轮按钮清除屏幕.

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

## 相关视频

**USB 的案例 - 读取 USB 设备**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/USB%20Interface.mp4" type="video/mp4">
</video>
