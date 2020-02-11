# Module LEGO+ {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lego_plus_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_lego_plus_02.png" width="60%" height="60%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-module/products/lego-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**LEGO+** 是M5Stack堆叠模块系列中的一款，LEGO电机驱动模块.集成MEGA328和L293DD芯片,拥有4个电机驱动通道.采用直流电源输入设计用于功率补充,并通过M-BUS，自动为顶部的M5Core供电.

串行通信协议: I2C (地址:0x56).

使用LEGO+ 模块能够简单快速的驱动 LEGO 电机.LEGO 电机是LEGO科技系列的技术件之一，其目的是为了创造更先进、具有更强大功能的模型.相比普通LEGO简单的砖砌建筑而言, LEGO 电机能够赋予模型更多的生命力.

## 产品特性

- DC 输入: 6-12V
- DC 连接器类型: XT60 (female)
- 4x LEGO 电机接口
- 2x I2C GROVE 接口 (由M5Core的A端口进行拓展)
- L293DD: PUSH-PULL 驱动芯片
- 产品尺寸：54.2mm x 54.2mm x 12.8mm
- 产品重量：27.5g

## 包含

-  1x LEGO+ 模块
-  1x 10cm LEGO 电机线
-  1x DC 电源连接器



## 相关链接


- **[LEGO+ 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)**


<!-- ### 1. Arduino IDE -->

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LEGO_PLUS.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## 例程

### 1. Arduino

*获取完整Arduino例程 [点击这里](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LEGO_PLUS/LEGO_Test).*

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/UIFlow)。*

<img src="assets/img/product_pics/module/module_example/LEGO_PLUS/example_module_lego_plus_03_zh_CN.png">

### Arduino 328p frimware

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)*

## 原理图

<img src="assets/img/product_pics/module/lego_plus_sch.png">

## NOTE

MEGA328芯片在默认情况下已经搭载了电机驱动程序.如果你想要更改其内部固件，则可以通过 **ISP** 端口进行升级. 下图为ISP端口的位置.

<img src="assets/img/product_pics/module/module_lego_plus_03.png">

## 相关视频

**LEGO+ - 搭建坦克**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5%20Tank.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';


   anchor_search(purchase_link);
   scrollFunc();

</script>