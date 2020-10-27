# ECG

<el-tag effect="plain">SKU:M031-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_nb-iot/comx_nb-iot.webp"><img src="assets/img/product_pics/module/com.x_nb-iot/comx_nb-iot_2.webp">
</div>

## 描述

<!-- 心电图（ECG）是利用心电图机从体表记录心脏每一心动周期所产生的电活动变化图形的技术 -->

## 产品特性

ADI集成前端

数字输出

内置心率统计算法

前端/数字部分，全隔离

超精密运放

## 包含

-  1x 
-  1x 

## 应用

-  智能表计
-  远程监控
-  共享单车

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
      <td>165*60*37mm</td>
   </tr>
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

### Arduino IDE

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
