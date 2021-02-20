# COM.NB-IoT

<el-tag effect="plain">SKU:M031-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_nb-iot/comx_nb-iot.webp"><img src="assets/img/product_pics/module/com.x_nb-iot/comx_nb-iot_2.webp">
</div>

## 描述

**COM.NB-IoT** 是一款可堆叠的多频段NB-IoT 无线通信模块，内置SIM7020G通讯模组，模块支持PSM和eDRX低功耗模式。同时覆盖信号广，相比较GSM，NB-IoT有很强的增益，这也使得产品在类似地下室之类的位置具备无线通讯能力。模块带有DC电源输入，可通过外部电源提供5V-12V供电。为了方便用户配置引脚，采用拨码开关对引脚进行设置。SIM7020G模块是低延迟、低功耗、低吞吐量应用的最优解决方案，非常适用于如表计、远程控制、资产跟踪、远程监控、远程医疗、共享单车等物联网应用。

?>COM.NB-IoT的RXD/TXD可以通过设置拨码开关接入的M5Stack的UART（TX(0/13/17)RX(5/15/16)），**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，建议使用剩余两组中的任意一组引脚。

?>右侧拨码开关无需设置

## 产品特性

- 可堆叠设计
- 支持低功耗模式
- 信号接入能力强
- 可外部独立供电
- AT指令控制
- SIM卡类型: MicroSIM
- 状态信号：两路LED指示灯
- 外置天线：SMA天线
- 串行通信：UART 115200bps

- 频段:
    - B1/B2/B3/B4/B5/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66/B70/B71/B85

- 数据传输:
    上行:150Kbps 下行:126Kbps

- 网络协议: 
    TCP/UDP/HTTP/HTTPS/TLS/DTLS/DNS/ NTP/PING/LWM2M/COAP/MQTT/MQTTS

## 包含

-  1x COM.NB-IoT模块
-  1x SMA天线

## 应用

-  智能表计
-  远程监控
-  共享单车

## 监管认证

• CE/FCC/GCF/PTCRB/ATEX

• RoHS/REACH

• 澳大利亚电信*(进行中)

• 沃达丰

• 德国电信

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>支持频段</td>
      <td>B1/B2/B3/B4/B5/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66/B70/B71/B85</td>
   </tr>
   <tr>
      <td>网络协议</td>
      <td>TCP/UDP/HTTP/HTTPS/TLS/DTLS/DNS/ NTP/PING/LWM2M/COAP/MQTT/MQTTS</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>UART 115200bps</td>
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
      <td>54*54*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>165*60*36mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_NB-IoT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COM_NB-IoT.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.NB-IoT.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>查看信号强度，注册入网，模块拨码开关位置5/13 ON</p>
        </div>
    </div>
</div>

## 相关链接

- **Datasheet**
    - [SIM7020G datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM7020_en.zip)
-  **AT Command** 
    - [SIM7020G AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM7020%20Series_AT%20Command%20Manual_V1.05.pdf)


## 原理图

<img src = "assets/img/product_pics/module/com.x_nb-iot/com.x_nb-iot_sch.webp">

## 案例程序

### 1. Arduino

以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_NB-IoT)

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>TX(GPIO0/13/17)</td><td>RX(GPIO5/15/16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>COM.NB-IoT</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>
<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-nb-iot-modulesim7020g';

   anchor_search(purchase_link);
   scrollFunc();

</script>