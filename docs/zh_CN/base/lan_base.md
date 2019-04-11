# LAN 底座 {docsify-ignore-all}

<img src="assets/img/product_pics/base/lan_01.png" width="300" height="300">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.6c24425eKdAPr3&id=574863427657)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>LAN 底座</mark>**是集成了以太网芯片 W5500 和网络接口的底座，满足 M5Core 接入有线网络的需求。

因为 M5Core 集成了无线 WIFI，能接收无线热点的网络，可是没有网络接口，如果您需要让 M5Core 接入有线网络来工作的话，那么 LAN 底座正好合适。

LAN 底座还配备了金属滑轨和磁铁圆片，方便您装置 LAN 到壁面或铁架上。

LAN 底座上橙色 HT3.96 端子，这个接口还没有电气连接，它的每个引脚可以连接到 M-Bus 总线上的任意引脚上。

**下图所示为 LAN 的内部**

<img src="assets/img/product_pics/base/lan_03.png" width="350" height="350"><img src="assets/img/product_pics/base/lan_07.png" width="350" height="350">

如果您需要实现 RS485 通信的话，那么使用配套的排针和 TLL 转 RS485 功能小板子焊接到 LAN 底座上面，即可实现RS485接口，从而可以通过上述的 HT3.96 端子与 RS485 设备通信。

**TTL-to-RS485 转接板子 与 LAN 底座**

<img src="assets/img/product_pics/base/lan_04.png" width="100%" height="100%">

**下图所示为 TTL-to-RS485 转接板子如何与 LAN 的底板结合**

*RS485 小板子与 LAN 底板焊接在一起，小板子上的串口引脚将与 LAN 底板的 GPIO16、 GPIO17 连接*

<img src="assets/img/product_pics/base/lan_05.png" width="50%" height="50%">

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


**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.png" width="500" height="385">

## 特性

- 外接电源范围：9 ~ 24V
- 3.96 规格端子，可以自定义引脚
- 支持 RS485 通信，控制 RS485 设备
- 易于固件到墙上，方便装配

## 包含

- 1x LAN 底座
- 1x TTL-to-RS485 转接板
- 1x 排针 20pin
- 1x 金属滑轨和磁铁圆片
- 3x HT3.96 端子
 - 2x 3pin
 - 1x 4pin
- 10x 冷压端子
- 3x 内六角扳手
 - 1x 1.5mm
 - 1x 2mm
 - 1x 2.5mm
- 2x 内六角螺丝 M3x28
- 4x 内六角自攻螺丝 KA2x4
- 1x 埋头螺丝 M3x8

<img src="assets/img/product_pics/base/lan_06.png" width="50%" height="50%">

## 应用

- M5Core + LAN 实现传输带控制器

<img src="assets/img/product_pics/base/base_example/example_base_lan_01.png" width="70%" height="70%">

- PC 通过有线传输视频到 Core

<img src="assets/img/product_pics/base/base_example/example_base_lan_02.png" width="70%" height="70%">


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [W5500](https://cdn.sparkfun.com/datasheets/Dev/Arduino/Shields/W5500_datasheet_v1.0.2_1.pdf)

## 原理图

<img src="assets/img/product_pics/base/lan_sch.JPG">

## 相关视频

**LAN 案例 - PC 使用 UDP 协议通过 LAN 底座实现有线传输视频给 Core**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StackLovyanlauncher.mp4" type="video/mp4">
</video>
