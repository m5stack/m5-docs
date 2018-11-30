# LAN底座

中文 | [English](/en/product_documents/bases/lan_base) | [日本語](ja/product_documents/bases/lan_base)

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


**M-Bus**

<figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="500" height="500">
</figure>

## 特性

- 允许9-24V范围的电源输入
- 3.96规格端子，可以自定义引脚
- 易于固件到墙上，方便装配


## 相关链接

- **[原理图](https://github.com/m5stack/M5GO/blob/master/hardware/schematics/M5GO_Base.pdf)**
- [例程](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/W5500)
- **[M5GO IOT Starter Kit购买链接](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html?spm=2114.12010615.8148356.2.52385ab04i7vIu)**

<figure>
    <img src="assets/img/product_pics/bases/lan_01.jpg" width="65%" height="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/bases/lan_02.jpg" width="65%" height="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/bases/lan_03.jpg" width="65%" height="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/bases/lan_04.png" width="65%" height="65%">
</figure>