# COM GSM

<el-tag effect="plain">SKU:M031-D</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_gsm/comx_gsm.webp">
</div>

## 描述

**COM GSM** 是一款可堆叠的2G通信模块，内置通讯模组为SIM800C，工作频率为GSM/GPRS 850/900/1800/1900MHz，以低功耗实现SMS文本和数据信息的传输,。模块带有DC电源输入，可通过外部电源提供5V-12V供电。为了方便用户配置引脚，采用拨码开关对引脚进行设置。该模块特别适用于以超低功耗、超小尺寸为核心需求的远程抄表、智能穿戴、智能停车、市政管理等loT行业。

<img src="assets/img/product_pics/module/com.x_gsm/comx_gsm_02.webp" width = "30%">

?>COM GSM的RXD/TXD可以通过设置拨码开关接入的M5Stack的UART（TX(0/13/17)RX(5/15/16)），**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，在使用GSM时会产生冲突，建议使用剩余两组中的任意一组UART引脚。

?>右侧拨码开关对GSM模块无效，无需设置。

## 产品特性

- 可堆叠设计
- 支持SMS文本、数据传输
- 可外部独立供电
- AT指令控制
- SIM卡类型: MicroSIM
- 状态信号：两路LED指示灯(电源/网络状态)
- 供电电压：3.4-4.4V
- 休眠模式下典型功耗：0.88mA
- 外置天线：2.5dB SMA天线
- 串行通信：UART 115200bsp
- 工作温度范围：-40°C 至+ 85°C

- 频段:
    - 四频850/900/1800/1900MHz
    - GPRS multi-slot class 12/10
    - GPRS mobile station class B
- 数据传输：
    - PRS class 12：最大85.6 kbps（上行/下行速率）
    - 支持PBCCH(Packet Broadcast Control Channel)
    - 编码方案：CS 1, 2, 3, 4
    - 集成TCP/IP、UDP、HTTP、FTP等协议
    - 支持USSD(Unstructured Supplementary Services Data)

## 包含

-  1x COM GSM模块
-  1x SMA天线

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
      <td>频段</td>
      <td>GSM/GPRS 850/900/1800/1900MHz</td>
   </tr>
   <tr>
      <td>网络协议</td>
      <td>TCP/IP/UDP/FTP/HTTP等</td>
   </tr>
   <tr>
      <td>天线增益</td>
      <td>2.5dB 1880-1900MHZ/2320-2370MHZ 2575-2635MHZ</td>
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
      <td>模块尺寸</td>
      <td>54*54*13.2mm</td>
   </tr>
 </table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COMX_GSM.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COMX_GSM.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.GSM.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>开机测试信号质量和入网状态</p>
        </div>
    </div>
</div>

## 相关链接

- **Datasheet**

    - [SIM800C datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM800C_datasheet.pdf)

-  **AT Command** 
    - [SIM800C AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM800_Series_AT_Command_Manual_V1.09.pdf)

## 原理图

<img src = "assets/img/product_pics/module/com.x_gsm/com.x_gsm.webp">

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>TX(GPIO0/13/17)</td><td>RX(GPIO5/15/16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>COM GSM</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

## 案例程序

### Arduino IDE

以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_GSM).

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-gsm-module-sim800c';

   anchor_search(purchase_link);
   scrollFunc();

</script>