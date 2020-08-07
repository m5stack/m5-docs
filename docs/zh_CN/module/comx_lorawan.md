# COM.LoRaWAN

<el-tag effect="plain">SKU:M031-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan/com.lorawan.webp"></div>

## 描述

**COM.LoRaWAN** 是M5Stack堆叠模块系列中的一款LoRaWAN通讯模块，支持节点到节点或LoRaWAN通讯。其中LoRaWAN模组基于ASR6501设计，封装了PSoC4000与SX1262芯片，支持868MHz频段，基于超低功耗设计，深度睡眠模式下消耗电流极低(3.5μA)。为了方便用户配置引脚，采用拨码开关对硬件串口引脚进行设置，用户只需根据需要将相应引脚拨至ON，在程序中指定引脚即可。在模块下方设计有DC电源插座，可通过外部电源供电，搭配外置天线可获得较好的信号质量。该模块特别适用于以超低功耗、超小尺寸为核心需求的远程低功耗传输应用场景。
LoRaWAN基于LoRa远距离通信网络设计的一套通讯协议和系统架构.如果按协议分层来说LoRaWAN是媒体访问控制（MAC）层,LoRa是物理层.它是由LoRa联盟维护的路由协议，主要用作管理LPWAN网关和端节点设备之间的通信的网络协议.
COM.LoRaWAN串口设置波特率：115200，停止位：1，数据位：8，校验位：无，结束符：无

?>COM.LoRaWAN的RXD/TXD可以通过设置拨码开关接入的M5Core的UART（TX(0/13/17)RX(5/15/16)），**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，建议使用剩余两组中的任意一组引脚。

?>右侧拨码开关在此模块中设置无效，无需进行设置。

## 产品特性

-  可堆叠式设计
-  支持LoRa与LoRaWAN
-  模组:基于ASR6501
-  支持频段:868MHz
-  Radio IC: SX1262
-  微处理器:PSoC® 4000 series MCU (ARM® Cortex® M0+ Core)
-  接口: UART
-  指令协议：AT命令
-  超低功耗

## 包含

-  1x LoRaWAN Module
-  1x SMA天线

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## EU868支持的主要国家及地区

**奥地利/比利时/捷克共和国/丹麦/芬兰/法国/德国/意大利/荷兰/瑞典/英国/安哥拉/安道尔/保加利亚/爱沙尼亚/印度/马耳他/菲律宾/葡萄牙/俄罗斯/西班牙/瑞士/赞比亚**

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
      <td>165*60*37mm</td>
   </tr>
 </table>

## 管脚映射

| *HTCC-AM01_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | TXD(GPIO0/13/17)    |
| TXD      | RXD(GPIO5/15/16)     |

**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得 LoRaWAN 模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 LoRaWAN 模块时，你需要将 LoRaWAN 模块左侧的拨码开关拨至剩余两组引脚中的任意一组.右侧拨码开关无需设置

## 相关链接

- **[LoRaWAN 的 AT 指令集](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/CubeCell_Series_AT_Command_User_Manual_V0.5.pdf)**

- **[LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_LoraWAN.zip">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COM_LoraWAN.zip">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.LoraWAN.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>一主一从，从机按A键发消息上报，主机接收</p>
        </div>
    </div>
</div>

## 案例程序

### Arduino IDE

[请点击此处下载完整代码](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COM_LoRaWAN/Arduino)

### UIFlow

[点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COM_LoRaWAN/UIFlow)

## 原理图

<img src="assets/img/product_pics/module/com_lorawan/com.lorawan_sch.webp">

<script>

   var purchase_link = '';


   anchor_search(purchase_link);
   scrollFunc();

</script>