# Module DC MOTOR

<el-tag effect="plain">SKU:M021</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_lego_plus_01.webp"></div>

## 描述

**DC Motor** 是M5Stack堆叠模块系列中的一款，DC Motor电机驱动模块.集成MEGA328和L293DD芯片,拥有4个电机驱动通道.采用直流电源输入设计用于功率补充,并通过M-BUS，自动为顶部的M5Core供电.
使用DC Motor模块能够简单快速的驱动RJ12接口编码电机，比如乐高ev3电机（本产品不附属于乐高或被乐高认可，LEGO是乐高集团公司的商标）。

## 产品特性

- 通信协议: I2C (地址:0x56)
- DC 输入: 6-12V
- DC 连接器类型: XT30 (female)
- 4x 电机接口
- 兼容乐高EV3电机
- 2x I2C GROVE 接口 (由M5Core的A端口进行拓展)
- L293DD: PUSH-PULL 驱动芯片

## 包含

-  1x DC MOTOR 模块
-  1x 10cm 电机线
-  1x DC 电源连接器


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>48g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*12mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## 相关链接

- **[LEGO DC Motor Driver 328P固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)**

<!-- ### 1. Arduino IDE -->

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LEGO_PLUS.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

?>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## MBUS引脚定义

<img src="assets\img\product_pics\module\module_bus.webp"/>

## 案例程序

### 1. Arduino

[点击这里获取完整Arduino例程](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LEGO_PLUS)

### 2. UIFlow

[请点击此处获取UIFlow例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/UIFlow)

<img src="assets/img/product_pics/module/module_example/LEGO_PLUS/example_module_lego_plus_03_zh_CN.webp">

## 原理图

<img src="assets/img/product_pics/module/lego_plus_sch.webp">

## NOTE

MEGA328芯片在默认情况下已经搭载了电机驱动程序.如果你想要更改其内部固件，则可以通过 **ISP** 端口进行升级. 下图为ISP端口的位置.

<img src="assets/img/product_pics/module/module_lego_plus_03.webp">

## 相关视频

**LEGO+ - 搭建坦克**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5%20Tank.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/lego-module';


   anchor_search(purchase_link);
   scrollFunc();

</script>