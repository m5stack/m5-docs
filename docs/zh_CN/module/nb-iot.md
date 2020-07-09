# Module NB-IoT

<el-tag effect="plain">SKU:M028</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\module\nb-iot\nb_iot_01.webp"><img src="assets\img\product_pics\module\nb-iot\nb_iot_02.webp">
</div>

## 描述

**NB-IoT** 是M5Stack堆叠模块系列中的一款，NB-IoT通信模块.内部集成高性能 NB-IoT 全网通无线通信模组**M5311**.低功耗设计可以帮助客户获得更长的终端使用寿命.M5311 提供丰富的外部接口和协议栈，支持外接传感器设备，为用户的产品开发提供了极大的便利.同时支持 OneNET 云平台协议，真正实现无缝对接，快速开发.
该模块特别适用于以超低功耗、超小尺寸为核心需求的智能表计、智能穿戴、智能停车、市政管理等loT行业

<img src="assets\img\product_pics\module\nb-iot\nb_iot_03.webp" width="30%" height="30%"> <img src="assets\img\product_pics\module\nb-iot\nb_iot_04.webp" width="30%" height="30%">

补充说明:

- GPIO2维持高电平2s开机 
- GPIO2维持高电平8s 关机
- 电源按钮长按2s开机
- 电源按钮长按8s关机
- GPIO26高电平模块复位

!>**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得NB-IoT模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 NB-IoT 模块时，你需要将 NB-IoT 模块的 TXD 与 RXD 切断，然后通过飞线引至另一组 UART 引脚.

## 产品特性

- SIM卡类型: Nano
- 状态信号：两路LED指示灯
- 单路开关机按钮
- 板载天线可选：默认板载弹簧天线（或通过跳线切换至IPEX座）
- 串行通信：Uart2 16/17
- 工作温度范围：-40°C 至+ 85°C
- NB-IoT： 支持 LTE	Cat	NB2* 
- 频段:
    B3/B5/B8
- 数据传输:
    LTE Cat NB1速率(kbps):
        Single Tone 15.625(UL)/21.25(DL)
        Multi  Tone 62.5(UL)/21.25(DL)
    SMS： 支持 PDU/TEXT 模式
    SMS 支持 PDU/TEXT 模式
    网络协议 IPv4/IPv6/UDP/TCP/CoAP/LwM2M/HTTP/MQTT/TLS
- 电气特性：
    - 耗流:
        3uA@PSM
        0.4mA@ldle	mode(DRx=1.28S) 
        167mA@Tx(23dBm/15kHzST) 
        54mA@Rx
    - 输出功率: 23dBm±2dB
    - 灵敏度:
        -114dBm( 无重传 )	
        -130dBm( 开启重传 )

## 包含

-  1x Nano IoT SIM卡
-  1x NB-IoT 模块

## 应用

-  智能表计
-  智能停车
-  市政管理

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>13g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*2.8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

### 部分国家运营商频段

以下内容，仅供参考.

<table>
 <tr><td>North America</td><td>B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) </td></tr>
 <tr><td>Asia Pacific</td><td>B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850),B28(700)</td></tr>
 <tr><td>Europe:</td><td> B3 (1800), B8 (900) , B20 (800) </td></tr>
 <tr><td>Latin America</td><td>B2(1900), B3(1800), B5(850), B28(700) </td></tr>
 <tr><td>Commonwealth of Independent States</td><td>B3 (1800), B8 (900), B20 (800)</td></tr>
 <tr><td>Sub-Saharan Africa</td><td>B3(1800), B8(900) </td></tr>
 <tr><td>Middle East, North Africa</td><td>B8(900), B20(800)</td></tr>
</table>

<!-- North America: B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) 
Asia Pacific: B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850)
and B28(700); 
Europe: B3 (1800), B8 (900) and B20 (800); 
Latin America: B2(1900), B3(1800), B5(850) and B28(700) 
Commonwealth of Independent States: B3 (1800), B8 (900) and B20 (800); 
Sub-Saharan Africa: B3(1800) and B8(900); 
Middle East and North Africa: B8(900) and B20(800);  -->

## 相关链接

- **Datasheet** 
    - [M5311](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_cn.pdf)

-  **AT Command** 
    - [M5311 AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_AT_Command_Interface_Specification_en.pdf)

## 原理图

- [NB-IoT Plus Module](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Modules/module_nb_iot_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_NBIOT_MODULE.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1。EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/NB-IoT_M5311LV).

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Module NB-IoT</td><td>RX</td><td>TX</td><td>3.3V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/m5stack-nb-iot-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>