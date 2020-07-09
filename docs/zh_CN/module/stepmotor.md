# Module STEPMOTOR

<el-tag effect="plain">SKU:M012</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_stepmotor_01.webp"><img src="assets/img/product_pics/module/module_stepmotor_02.webp"></div>

<!-- <img src="assets/img/product_pics/module/module_stepmotor_04.webp" width="30%" height="30%"> -->

## 描述

**STEPMOTOR** 是M5Stack堆叠模块系列中的一款，步进电机驱动模块.该模块能够通过 **GRBL** 库同时驱动3个步进电机.因此非常适合应用在运动控制项目.

模块内置MEGA328P，并且搭载**GRBL**固件,通过I2C（0x70）与M5Core通信.

集成 3 片由 DRV8825 芯片组成的步进电机驱动板，一个简单但非常强大的电路板，可以控制一个双极步进电机，并允许微步进高达1/32步。

## 产品特性

-  电源输入：9-24V
-  控制3路步进电机 **(X, Y, Z)**

## 包含

-  1x Step Motor 模块
-  1x 12V 电源 (选配)
-  1x 5V FAN 模块，用于散热 (选配)

## 应用

-  DIY 3D 打印机
-  搭建机械臂

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>34g</td>
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

- **[STEPMOTOR 固件](https://github.com/m5stack/stepmotor_module/tree/master/Firmware%20for%20stepmotor%20module/GRBL-Arduino-Library)**

- **[DRV8825 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_STEPMOTOR.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例代码](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/STEPMOTOR)

### 2. UIFlow

想要探索最简单的 Step motor 编程驱动方式吗？快试试Blockly编程平台[UIFlow](flow.m5stack.com).

[请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Module/STEPMOTOR/UIFlow).*

<img src="assets/img/product_pics/module/module_example/STEPMOTOR/example_module_stepmotor_01.webp">

## 原理图

<img src="assets/img/product_pics/module/stepmotor_sch.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/step-motor-module-adapter-fan-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>