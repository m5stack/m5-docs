# Module LTE

<el-tag effect="plain">SKU:M027</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\module\lte\lte_01.webp"> <img src="assets\img\product_pics\module\lte\lte_02.webp"></div>

## 描述

**LTE** 是M5Stack堆叠模块系列中的一款，LTE通信模块.内部集成**M8321** LTE全网通工业级通信模组. 提供 TD-LTE/FDD-LTE/WCDMA/TDSCDMA/GSM/GPRS/EDGE 的频段.丰富的 Internet 协议、行业标准接口和功能,支持多种操作系统的USB驱动程序，能够给用户带来快速且稳定的通信体验.

 <img src="assets\img\product_pics\module\lte\lte_03.webp" width="30%" height="30%">

!>**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得LTE模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 LTE 模块时，你需要将 LTE 模块的 TXD 与 RXD 切断，然后通过飞线引至另一组 UART 引脚.

## 产品特性

- SIM卡类型: Nano
- 状态信号：三路LED指示灯
- 板载麦克风
- 板载扬声器信号输出接口
- 板载USB测试点
- 单路开关机按钮
- 串行通信：Uart2 16/17
- 工作温度范围：-40°C 至+ 85°C
- 频段:
    LTE-TDD：B38/B39/B40/B41 
    LTE-FDD：B1/B3/B8△ 
    TD-SCDMA：B34/B39△ 
    WCDMA：B1/B8△ 
    GSM(MHz)：900/1800
- 数据传输:
    LTE 速率 (Mbps) LTE-FDD 50(UL)/150(DL)△　LTE-TDD 50(UL)/100(DL)
    HSPA+ 速率 (Mbps) 5.76(UL)/21.6(DL)△
    TD-SCDMA 速率 (Mbps) 2.2(UL)/2.8(DL)△
    EDGE 速率 (Kbps) 384(UL)/384(DL)
    GPRS 速率 (Kbps) 85.6(UL)/85.6(DL)
    SMS 支持 PDU/TEXT 模式
    网络协议 IPV4/IPV6/TCP/PPP/UDP/FTP/HTTP/NTP
- 耗流:
    17uA@Poweroff 
    3mA@Sleep 
    45mA@Idle

## 包含

-  1x 天线
-  1x LTE 模块

## 应用

-  安防路由
-  车载后装
-  视频监控
-  POC

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>29g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*12.8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## 相关链接

-  **Datasheet** 
    - [M8321](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M8321_cn.pdf)

-  **AT Command** 
    - [M8321 AT 指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M8321%20AT_Command_Interface_Specification_cn.pdf)
  
## 原理图

- [LTE Module](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Modules/module_lte_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LTE_MODULE.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

[请点击此处下载Arduino代码](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LTE_M8321)

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>Module LTE</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/m5stack-lte-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>