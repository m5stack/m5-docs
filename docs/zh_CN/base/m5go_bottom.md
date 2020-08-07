# Base M5GO BOTTOM

<el-tag effect="plain">SKU:A014</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/base/m5go_base_04.webp"><img src="assets/img/product_pics/base/m5go_base_05.webp"></div>

## 描述

**M5GO BOTTOM** 是一款 M5Core 增强型通用底座，兼容M5Core各型号主机。相比基础型[Core Bottom](https://docs.m5stack.com/#/en/base/core_bottom)而言，增强型底座配备了更大容量的锂电池(500mAh)，内部集成麦克风，LED 灯条，并拓展出两个HY2.0 接口(PROT B/PORT C)等，其背面兼容乐高孔，同时引出pogo pin可用于连接支持的I2C设备(如BALA)或磁吸式充电底座。

## 产品特性

- 兼容M5Core
- 集成Mic/LED灯条/HY2.0 接口
- 可直接在UIFlow中使用
- 兼容乐高积木
- 可配置磁吸充电底座

## 包含

- 1x M5GO BOTTOM
- 2x M3x16 螺丝

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>31g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>49g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## 管脚映射

**Pogo Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

*M5GO 底座内置 10 个RGB LED*

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**MIC**

模拟输入麦克风 

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

**GROVE**

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

**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.webp" alt="M_BUS">

<img src="assets/img/product_pics/base/m5go_base_01.webp" width="65%" height="65%">

<img src="assets/img/product_pics/base/m5go_base_02.webp" width="65%" height="65%">

## 相关链接

- **[M5GO IoT Starter Kit购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.690a425eFsoYVX&id=568283585553)**

## 原理图

<img src="assets/img/product_pics/base/m5go_base_sch.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/battery-bottom-charging-base';


   anchor_search(purchase_link);
   scrollFunc();

</script>