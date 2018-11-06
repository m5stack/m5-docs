# COMMU

## 描述

<mark>COMMU</mark>是一个通讯接口转换模块，能将M5Core的IO口转换并外拓成其他类型的接口，满足多种产品设计需求。目前模块外拓2个I2C接口，MCU的TTL电平已经转换成一个CAN接口和一个RS485接口，同时也附带一个直接外拓的TTL电平接口。这意味着，当你设计产品需要用到CAN通讯或RS485通讯的设备时，可以直接使用该模块，堆叠与M5Core主控板，即可驱动对应设备，无需另外订做接口转换电路板。

COMMU模块中还有预留的焊接口用于电路跳转

## 特性

-  2x I2C 接口
-  1x CAN 接口
-  1x RS485 接口
-  1x TTL 接口

## 包含

-  1x M5Stack COMMU Module

## 管脚分配

| *CAN*        | *ESP32 Chip*      |
| :----------:  |:------------: |
| CAN_CS         | GPIO12         |
| CAN_INT         | GPIO15         |
| CAN_SCK         | GPIO18         |
| CAN_MISO         | GPIO19         |
| CAN_MOSI         | GPIO23         |



| *RS485*        | *ESP32 Chip*      |
| :----------:  |:------------: |
|               | GPIO25         |

| *I2C Interface*        | *ESP32 Chip*      |
| :----------:  |:------------: |
|               | GPIO26         |

| *I2C Interface*        | *ESP32 Chip*      |
| :----------:  |:------------: |
|               | GPIO26         |

| *TTL Interface*        | *ESP32 Chip*      |
| :----------:  |:------------: |
|               | GPIO26         |

## 文档

- **[原理图](zh_CN/file_to_display_null)**
- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-COMMU-Module-Extend-RS485-TTL-CAN-I2C-Port-with-MCP2515-TJA1051-SP3485-Development-Board/3226069_32954475633.html?spm=a2g1y.12024536.productList_5885013.subject_2)**

<figure>
    <img src="assets/img/product_pics/modules/commu_01.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/commu_02.jpg" height="300" width="300">
</figure>
