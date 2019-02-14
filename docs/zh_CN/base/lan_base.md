# LAN底座 {docsify-ignore-all}

<img src="assets/img/product_pics/base/lan_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/lan_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/lan_03.png" width="30%" height="30%">

***
<!--
:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.6c24425eKdAPr3&id=574863427657)** -->

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.6c24425eKdAPr3&id=574863427657)**

## 描述

<mark>LAN底座</mark>是集成了以太网芯片W5500的底座，目的是提供给有让M5Core接入有线网络需求的用户。因为M5Core集成了无线WIFI，能接收无线热点的网络，可是没有网络接口，如果你需要让M5Core接入有线网络来工作的话，这个LAN底座正好合适，而且LAN底座还配备了磁铁和滑动杆，方便你装置LAN和M5Core到壁面上。

另外LAN底座还有橙色HT3.96端子，这个接口还没有电气连接，它连接不同Pin脚的时候，可以实现对应的Pin拓展。如果你需要这个接口变成RS485的拓展接口的话，那么使用配套的排针和TLL转RS485功能小板子焊接到LAN底座上面，即可实现RS485接口，从而可以通过这个HT3.96端子，通过RS485协议控制M5Core的整个功能。

如果TLL转RS485的功能小板子与LAN底板结合的话，小板子上的串口引脚将与LAN底板的GPIO1、GPIO3(UART0)连接。

## 管脚映射

**W5500以太网芯片**

| W5500       | ESP32 Chip      |
| :----------:  |:------------: |
| MOSI        | GPIO23         |
| MISO          | GPIO19            |
| CLK          | GPIO18            |
| CS          | GPIO26            |
| RST          | GPIO13            |
| INTn          | GPIO34            |

<img src="assets/img/product_pics/base/lan_04.png" width="70%" height="70%">

**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.png" width="500" height="385">

## 特性

- 允许9-24V范围的电源输入
- 3.96规格端子，可以自定义引脚
- 易于固件到墙上，方便装配


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 原理图

<img src="assets/img/product_pics/base/lan_sch.JPG">