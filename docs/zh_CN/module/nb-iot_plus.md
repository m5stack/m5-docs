# NB-IoT Plus{docsify-ignore-all}

<img src="assets\img\product_pics\module\nb-iot-plus\nb_iot_plus_01.webp" width="30%" height="30%">
<img src="assets\img\product_pics\module\nb-iot-plus\nb_iot_plus_02.webp" width="30%" height="30%">
<img src="assets\img\product_pics\module\nb-iot-plus\nb_iot_plus_03.webp" width="30%" height="30%"> 



## 描述

**NB-IoT Plus** 是M5Stack堆叠模块系列中的一款NB-IoT物联网通信模块，内部集成高性能NB-IoT全网通无线通信模组**M5311-GB(国际版)**,相较M5311-LV增加了更多频段，可支持B1/B3/B5/B8/B20/B28多个频段.内置铜制螺旋天线，并预留了ipex连接座，方便用户使用外置天线以获得更好的信号强度.模块支持休眠功能，低功耗设计可以帮助客户获得更长的终端使用寿命.M5311-GB提供丰富的外部接口和协议栈，支持外接传感器设备，为用户的产品开发提供了极大的便利.该模块特别适用于以超低功耗、超小尺寸为核心需求的智能抄表、智能穿戴、智能停车、市政管理等行业.

<img src="assets/img/product_pics/module/nb-iot-plus/NanoSIM.jpeg" width="30%" height="30%">
<img src="assets\img\product_pics\module\nb-iot-plus\nb_iot_plus_04.webp" width="30%" height="30%">
<img src="assets\img\product_pics\module\nb-iot-plus\nb_iot_plus_05.webp" width="30%" height="30%">

补充说明:

- GPIO2维持高电平2s开机
- GPIO2维持高电平8s关机
- 电源按钮长按2s开机
- 电源按钮长按8s关机
- GPIO26高电平模块复位


!>**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得NB-IoT Plus模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 NB-IoT Plus模块时，你需要将 NB-IoT Plus模块的 TXD 与 RXD 切断，然后通过飞线引至另一组 UART 引脚.

## 产品特性

- SIM卡类型: Nano
- 状态信号：两路LED指示灯
- 单路开关机按钮
- 板载天线可选：内置铜制螺旋天线（或通过跳线切换至IPEX座）
- 串行通信：Uart2 16/17
- 工作温度范围：-40°C 至+ 85°C
- NB-IoT： 支持 LTE	Cat	NB2*
- 频段:
    B1/B3/B5/B8/B20/B28
- 数据传输:
    LTE Cat NB1速率(kbps):
    - Single Tone 15.625(UL)/21.25(DL)
    - Multi  Tone 62.5(UL)/21.25(DL)
    - SMS  支持 PDU/TEXT 模式
    - 网络协议 IPv4/IPv6/UDP/TCP/CoAP/LwM2M/HTTP/MQTT/TLS
- 电气特性：
    - 电压: 3.3V
    - 耗流:
        3uA@PSM
        0.4mA@ldle	mode(DRx=1.28S)
        167mA@Tx(23dBm/15kHzST)
        54mA@Rx
    - 输出功率: 23dBm±2dB
    - 灵敏度:
        -114dBm( 无重传 )
        -130dBm( 开启重传 )

## 尺寸重量

- 产品尺寸：54mm x 54mm x 13mm
- 产品重量：9g

## 包含

-  1x NB-IoT Plus模块

## 应用

-  智能表计
-  智能停车
-  市政管理

### 部分国家运营商频段

以下内容，仅供参考.

<table>
 <tr><td>北美</td><td>B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) </td></tr>
 <tr><td>亚太</td><td>B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850),B28(700)</td></tr>
 <tr><td>欧洲</td><td> B3 (1800), B8 (900) , B20 (800) </td></tr>
 <tr><td>拉丁美洲</td><td>B2(1900), B3(1800), B5(850), B28(700) </td></tr>
 <tr><td>俄罗斯及周边国家</td><td>B3 (1800), B8 (900), B20 (800)</td></tr>
 <tr><td>南非</td><td>B3(1800), B8(900) </td></tr>
 <tr><td>中东及北非</td><td>B8(900), B20(800)</td></tr>
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

- **Datasheet** - [M5311](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_cn.pdf)

-  **AT Command** - [M5311 AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_AT_Command_Interface_Specification_en.pdf)


## 原理图

-  **原理图** - [NB-IoT Plus Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_nb_iot_sch.pdf)

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_NB-IoT-Plus_MODULE.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/NB-IoT-Plus.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a style="text-align: center; margin-top: 45px">
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>自动复位初始化LTE模块注册网络服务，本地收发MQTT消息并通过串口打印.</p>
        </div>
    </div>
</div>

## 案例程序

### Arduino IDE

*获取示例代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/NB-IoT_PLUS).*

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Module NB-IoT PLUS</td><td>RX</td><td>TX</td><td>3.3V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/m5stack-nb-iot-plus-module-m5311-gb';


   anchor_search(purchase_link);
   scrollFunc();

</script>