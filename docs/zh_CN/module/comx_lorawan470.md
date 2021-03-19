# COM.LoRaWAN470

<el-tag effect="plain">SKU:M031-C2</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_01.webp"><img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_03.webp"><img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_04.webp"></div>

## 描述

**COM.LoRaWAN470** 是M5Stack推出的适用于470MHz频率的LoRaWAN通讯模块。模块采用ASR6501方案，支持远距离通信的同时兼具超低功耗与高灵敏度特性。模组集成LoRaWAN协议栈，采用串口通信接口(使用AT指令集进行控制)，使用时可作为采集节点大量接入网关进行数据收集管理。

提供外部电源接口(通过切换拨码开关可以调整5V/12V两种电压电源输入)，该模块适合应用于长距离的低功耗物联网通信应用，如环境监测节点部署等。

## 产品特性

-  ASR6501
-  工作频率:470MHz
-  SMA天线
-  通信接口: UART
-  指令协议：AT命令

## 包含

-  1x LoRaWAN470 Module
-  1x SMA天线

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## CN470支持的主要国家及地区

**中国**

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>UART波特率</td>
      <td>115200</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>35g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>72g</td>
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

<table>
 <tr><td>CORE</td><td>RX</td><td>TX</td></tr>
 <tr><td>SW DIP-6拨码开关</td><td>G17/G0/G13</td><td>G16/G5/G15</td></tr>
</table>

## 主控兼容情况

<table>
 <tr><td>CORE</td><td>RX</td><td>TX</td></tr>
 <tr><td>SW DIP-6拨码开关</td><td>G17/G0/G13</td><td>G16/G5/G15</td></tr>
</table>

?>**M5Stack FIRE** 中的 GPIO 16 / 17 默认与PSRAM连接，若该模块的TXD/RXD使用GPIO16，GPIO17将与其产生冲突。因此，当使用**M5Stack FIRE**去驱动该模块时，你需要将拨码开关拨至剩余两组引脚中的任意一组.

<img src="assets/img/product_pics/module/com_lorawan470/com.lorawan470_02.webp">

## 相关链接

- [COM.LoRaWAN470 AT指令集](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/COM.LoRaWAN.Ra-07.asr6501-asr6502-at-commands-introduction-v4.3.pdf)

- [LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)

## 原理图

- 模块插接底板

<img src="assets/img/product_pics/module/com_lorawan/com.lorawan_sch.webp">

## 案例程序

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/COM_LoRaWAN470)

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.LoRaWAN470.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://item.taobao.com/item.htm?ft=t&id=639100397855';

   anchor_search();
   scrollFunc();

</script>