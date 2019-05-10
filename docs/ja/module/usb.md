# USB モジュール {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_usb_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_usb_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-USB-Module-USB-HOST-HID-with-MAX3421E-SPI-Interface-Output-5-Input-5-Compatible/32961627365.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

<mark>**USB**</mark>モジュールは**MAX3421E**を内蔵したUSBコントローラです。このモジュールはM5Coreと最大通信速度26MHzのSPIインターフェースで接続され、USBホストやUSBペリフェラルとして使用できます。

## 特徴

- 最大通信速度26MHz SPIインターフェース
- 8-way GPIO入出力
- 内蔵リチウム電池コネクタ

## パッケージ内容

- 1x USBモジュール

## アプリケーション

- USBキーロガー
- USBメモリのリードライト

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
 - [MAX3421E](https://www.sparkfun.com/datasheets/DevTools/Arduino/MAX3421E.pdf)

## サンプルコード

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino)。*

**NOTE:** このサンプルを実行する前に、対応USBライブラリを[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/USB/Arduino/Library)からダウンロードします。次にArduino IDE のメニューから `スケッチ` → `ライブラリをインクルード` → `.ZIP形式のライブラリをインストール...`を選択後、ダウンロードしたファイルを選択し、取り込みます。

<img src="assets/img/product_pics/module/module_usb_03.png">

<img src="assets/img/product_pics/module/module_usb_04.png">

`usb_mouse.ino`をM5Coreに書き込みます。USBマウスをモジュールに接続します。マウスの左ボタンを押して緑色の線を描き、右ボタンで白色の線を描きます。中央のボタンを押すと画面をクリアします。

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

// 初期化
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

## 回路図

<img src="assets/img/product_pics/module/usb_sch.png">

## 関連動画

**USB デモ - USBデバイを読み込む**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/USB%20Interface.mp4" type="video/mp4">
</video>
