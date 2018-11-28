# LoRaWAN

中文 | [English](/en/product_documents/modules/module_lorawan) | [日本語](ja/product_documents/modules/module_lorawan)

## 描述

<mark>LoRaWAN</mark>是一个内置了LoRaWAN模块的M5模块，LoRaWAN模块主要由LoRa芯片(SX1276)和ST的MCU组成，集成了完整的LoRa协议栈。 所以，在使用这个高集成度模块的时候，你可以直接将它与M5Core堆叠，通过串口发送AT命令就可以开发它，比如配置串口信息、配置射频信息(频率、带宽、发送功率等)、发送信息的内容等等。

LoRaWAN默认的串口配置：
波特率：9600；8位数据位；无奇偶校验；1位停止位。

?> **注意** 丝印"LoRaWAN"底下的5个孔是专门预留用于升级LoRaWAN模块固件。

## 特性

-  支持频段： 433/470MHz and 868/915MHz
-  支持数据率范围： 0.018-38.4kbps
-  输出功率: 17 ± 0.5dbm
-  支持 ADR(自适应数据速率)
-  内置天线

## 包含

-  1x LoRa Module

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## 管脚映射

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | GPIO17    |
| TXD      | GPIO16     |

## 文档

<!-- - **[例程](en/file_to_display_null)** -->
- **[LoRaWAN模组信息](http://wiki.ai-thinker.com/sx127x-052) (LoRaWAN)**
- **[LoRaWAN的AT指令集](http://wiki.ai-thinker.com/_media/rhf-ps01509_lorawan_class_ac_at_command_specification_-_v4.4.pdf)**
- **[旗舰店](https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2)**

<figure>
    <img src="assets/img/product_pics/modules/LoRaWAN_01.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/LoRaWAN_02.jpg" height="300" width="300">
</figure>