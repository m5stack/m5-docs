# ECG

<el-tag effect="plain">SKU:M031-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_nb-iot/comx_nb-iot.webp"><img src="assets/img/product_pics/module/com.x_nb-iot/comx_nb-iot_2.webp">
</div>

## 描述

**ECG** 是一款心率测量模块，能够用于人体的心率统计与心电图曲线的生成。心电图（ECG）是利用心电图机从体表记录心脏每一心动周期所产生的电活动变化图形的技术。在信号采集端，这款ECG模块集成AD8232单导联心率监护前端，采集的心电信号经过AD8603低通滤波器信号处理，由10bit-ADC(AD7476)进行模拟/数字信号输入STM32(内置心率统计算法)进行信号分析。最后将处理结果以串口通信形式对外输出，方便主控设备的获取与显示。在信号输出方面采用前端/数字全隔离设计，加强设备稳定性与安全性。

?>注意：该产品仅允许使用`5V`电源输入，在使用该产品时请严格遵守该电源输入标准，避免损坏设备或是造成人体伤害。

## 产品特性

- ADI集成前端(高信号增益G=100,带DC阻塞能力)
- 串口数据输出
- 内置心率统计算法
- 前端/数字全隔离设计
- 超精密运放

## 包含

-  1x ECG Module
-  3x 心电导联线
-  6x 导联贴

## 应用

-  生物电信号采集
-  便携式ECG
-  健身及运动心率监护仪

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>UART 115200bps</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>101g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>105*65*40mm</td>
   </tr>
 </table>


 ## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_ECG.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_ECG_Module.dmg">MacOS</a>
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
            <p>统计心率，显示心电图曲线</p>
        </div>
    </div>
</div>


## 相关链接

- **Datasheet** 
   - [AD8232](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/AD8232_datasheet_cn.pdf)
   - [AD8603](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/AD8603_datasheet_cn.pdf)
   - [AD7476](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/AD7476_datasheet_en.pdf)

- **Tool**
   - [RawDisplay-PC](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/RawDisplay.zip)
   - [UART Pass Through Firmware](https://github.com/m5stack/M5Stack/tree/master/examples/Advanced/Serial2)

?>使用PC端心率读取工具时候，设备需烧录串口透传固件，将数据转发至PC。

## 原理图

<img src = "assets/img/product_pics/module/ecg/ecg_sch.webp">

## 案例程序

### Arduino IDE

[下载Arduino示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ECG)

### 管脚映射

<table>
 <tr><td>M5Stack</td><td>TX/G13</td><td>RX/G5</td><td>5V</td><td>GND</td></tr>
 <tr><td>ECG</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-nb-iot-modulesim7020g';

   anchor_search(purchase_link);
   scrollFunc();

</script>
