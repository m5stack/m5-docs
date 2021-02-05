# COM.LoRaWAN

<el-tag effect="plain">SKU:M031-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan/com.lorawan.webp"></div>

## 描述

**COM.LoRaWAN915** 是M5Stack推出的适用于915MHz频率的LoRaWAN通讯模块,

模块采用Ai-Thinker Ra-07H模组方案

AT指令进行控制

## 产品特性

-  Ai-Thinker Ra-07H模组方案
-  工作频率:915MHz
-  SMA天线
-  通信接口: UART
-  指令协议：AT命令


## 包含

-  1x LoRaWAN915 Module
-  1x SMA天线

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## AU915支持的主要国家及地区

**Argentina/Australia/Bolivia/Brazil/Canada/Chile/Colombia/Dominican Republic/Ecuador/Greece Guatemala/Honduras/Jamaica/Mexico/New-Zealand/Nicaragua/Panama/Paraguay/Peru/Papua New Guinea/Salvador/United States/Uruguay**

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>40g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>75g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>165*60*36mm</td>
   </tr>
 </table>

## 管脚映射

| *HTCC-AM01_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | TXD(GPIO0/13/17)    |
| TXD      | RXD(GPIO5/15/16)     |

**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得 LoRaWAN 模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 LoRaWAN 模块时，你需要将 LoRaWAN 模块左侧的拨码开关拨至剩余两组引脚中的任意一组.右侧拨码开关无需设置

## MBUS引脚定义

<img src="assets\img\product_pics\module\module_bus.webp"/>

## 相关链接

- **[LoRaWAN 的 AT 指令集](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/CubeCell_Series_AT_Command_User_Manual_V0.5.pdf)**

- **[LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

