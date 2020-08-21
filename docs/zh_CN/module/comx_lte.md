# COM.LTE(4G)

<el-tag effect="plain">SKU:M031-A</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_lte/comx_lte.webp"><img src="assets/img/product_pics/module/com.x_lte/comx_lte_2.webp">
</div>

## 描述

**COM.LTE(4G)** 是一款可堆叠的多功能LTE通信模块，内置LTE通讯模组SIM7600G，支持LTE-TDD/LTE-FDD/WCDMA和GSM等频段, 支持LTE.CAT4(下行速度为150Mbps)，支持语音通话与SMS短信。其性能稳定，外观小巧，性价比高，可以低功耗实现SMS和数据信息的传输。模块带有DC电源输入，可通过外部电源提供5V-12V供电。为了方便用户配置引脚，采用拨码开关对引脚进行设置。板载麦克风和3.5mm耳机插孔，支持带麦克风的耳机插入。该模块特别适用于需要高速网络连接的场景，如视频通话、无人机数传、工业物联网等。

<img src="assets\img\product_pics\module\nb-iot\nb_iot_03.webp" width="30%" height="30%"> <img src="assets\img\product_pics\module\nb-iot\nb_iot_04.webp" width="30%" height="30%">

?>COM.LTE（4G)的RXD/TXD可以通过设置拨码开关接入的M5Stack的UART（TX(0/13/17)RX(5/15/16)），**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，建议使用剩余两组中的任意一组引脚。

?>在使用时将音频配置引脚一侧的拨码开关全部拨到ON状态

## 产品特性

- 可堆叠设计
- 支持语音通话、SMS短信、蜂窝数据传输
- 可外部独立供电
- 内置麦克风
- AT指令控制
- SIM卡类型: MicroSIM
- 状态信号：两路LED指示灯
- 外置天线：SMA天线
- 串行通信：UART 115200bps

- 频段:
    - LTE-TDD B34/B38/B39/B40/B41
    - LTE_FDD B1/B2/B3/B4/B5/B7/B8/B12/B13/ B18/B19/B20/B25/B26/B28/B66
    - WCDMA B1/B2/B4/B5/B6/B8/B19
    - GSM/GPRS/EDGE 850/900/1800/1900MHz
- 数据传输:

- LTE Cat4
    - 上行最大速率:50Mbps
    - 下行最大速率:150Mbps

- HSPA+
    - 上行最大速率:5.76Mbps
    - 下行最大速率:42Mbps

- WCDMA
    - 上行/下行最大速率:384Kbps

- EDGE/GPRS
    - 上行/下行最大速率:236.8Kbps

- 支持协议 
    - TCP/IP/IPV4/IPV6/ Multi-PDP/FTP/FTPS/HTTP/ HTTPS/DNS
    - TLS
    - RNDIS/ECM
    - FOTA

## 认证

• CE/RCM/FCC/IC

• PTCRB/GCF

• AT&T/Verizon

• RoHS/REACH


## 包含

-  1x COM.LTE模块
-  1x SMA天线

## 应用

-  智能表计
-  视频通话
-  工业物联网

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>支持频段</td>
      <td>LTE-FDD/LTE-TDD/WCDMA/GSM</td>
   </tr>
   <tr>
      <td>网络协议</td>
      <td>TCP/IP/IPV4/IPV6/ Multi-PDP/FTP/FTPS/HTTP/ HTTPS/DNS</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>UART 115200bps</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>55g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>90g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>165*60*37mm</td>
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

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_LTE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COM_LTE.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.LTE(4G).mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>查看信号强度，注册入网，拨码开关位置5/13 ON</p>
        </div>
    </div>
</div>

## 相关链接

- **Datasheet**
    - [SIM7600G datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM7600-H%20Series_SPEC_20200528.pdf)

-  **AT Command** 
    - [SIM7600G AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM7500_SIM7600%20Series_AT%20Command%20Manual%20_V1.10.pdf)

## 原理图

<img src = "assets/img/product_pics/module/com.x_lte/com.x_lte_sch.webp">

## 案例程序

### Arduino IDE

以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_LTE)

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>TX(GPIO0/13/17)</td><td>RX(GPIO5/15/16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>COM.LTE</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-lte-modulesim7600g';

   anchor_search(purchase_link);
   scrollFunc();

</script>