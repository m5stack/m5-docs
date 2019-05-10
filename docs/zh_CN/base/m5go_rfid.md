# Base M5GO RFID {docsify-ignore-all}

<img src="assets/img/product_pics/base/m5go_base_03.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[管脚映射](#管脚映射)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.690a425eFsoYVX&id=584136175270)**

## 描述

**M5GO RFID** 是内置RFID的升级版 [M5GO BOTTOM](zh_CN/base/m5go_bottom) 底座。相比普通版本 [M5GO Bottom](zh_CN/base/m5go_bottom)，**底座少了磁铁和电池容量少了230mAh**，多了 **RFID 线圈** 和 **红外发射管**。

M5GO 底座由 370mAh 的电池(充满 3.7V)、M-Bus 总线接口、麦克风、红色的充电指示 LED、2条 RGB灯条 (10颗)、**RFID 线圈**、**红外发射管**、PORT B 和 PORT C 组成。

## 管脚映射

**POGO Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

*有10颗RGB灯，左右各5颗*

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**麦克风MIC**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

**GROVE接口**

| PORT B(I/O)       | ESP32 Chip    |
| :----------:  |:------------: |
| G36           | GPIO36        |
| G26           | GPIO26        |
| 5V            | 5V            |
| GND           | GND           |

| PORT C(UART2)       | ESP32 Chip    |
| :----------:  |:------------: |
| RXD           | GPIO16        |
| TXD           | GPIO17        |
| 5V            | 5V            |
| GND           | GND           |

<!-- **RFID**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        | -->

**IR发射管**

| IR Transmitter       | ESP32 Chip    |
| :----------:  |:------------: |
| IR Transmitter           | GPIO13        |

**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.png" alt="M_BUS">


## 相关链接

- **[M5GO IOT Starter Kit购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.690a425eFsoYVX&id=568283585553)**

<img src="assets/img/product_pics/base/m5go_rfid_02.png" width="65%" height="65%">

<img src="assets/img/product_pics/base/m5go_rfid_03.png" width="65%" height="65%">

<!-- ## 原理图

<img src="assets/img/product_pics/base/m5go_base_sch.png"> -->
