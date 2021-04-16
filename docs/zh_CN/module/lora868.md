# Module LoRa868

<el-tag effect="plain">SKU:M029</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_lora868_01.webp"><img src="assets/img/product_pics/module/module_lora868_02.webp"></div>

## 描述

**LoRa868** 是M5Stack堆叠模块系列中的一款LoRa通信模块(工作频率为868MHz)。模块上保留了一定的拓展空间，以便你进行更多的功能设计.无论是进行基本的无线通信或是有着更多定制化元素的项目，LoRa(868MHz)模块都会是合适的选择。

## 产品特性

-  LoRa 模块: Ra-01H
-  串行通信协议: SPI
-  万能板
-  工作频率: 806~930 MHz
-  支持FSK，GFSK，MSK，GMSK，LoRa™和OOK调制模式
-  接收灵敏度：低至-141 dBm
-  可编程比特率高达300Kbps
-  内置柔性PCB天线
-  外部天线接口
-  开发平台: Arduino

## 包含

-  1x M5Stack LoRa868 模块

## 应用

-  自动抄表系统
-  楼宇自动化
-  远程灌溉系统

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>14g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## 相关链接

- **[LoRa模块信息](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/ra-01h_product_specification_cn_v1.0.pdf) (LoRa)**

- **[LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

## 原理图

-  **原理图** - [Lora Module](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Modules/module_lora_sch.pdf)

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_LoRa868_MODULE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_LoRa868_MODULE.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/LoRa868.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该案例中两台设备将互相收发消息在屏幕上进行显示.</p>
        </div>
    </div>
</div>

## 案例程序

### 1. Arduino

在本案例中，将使用两个LoRa868模块分别进行发送与接收消息.实现点对点的通信功能.

* 蓝色字符串表示发送成功.

* 黄色字符串显示收到的消息.

* 红色字符串表示初始化失败.

[请点击此处下载Arduino代码](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LORA868_SX1276/LoRa868Duplex)

## 原理图

<img src="assets/img/product_pics/module/lora_sch.webp">

## MBUS引脚定义

<img src="assets\img\product_pics\module\module_bus.webp"/>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/lora-module-868mhz';

   anchor_search(purchase_link);
   scrollFunc();

</script>