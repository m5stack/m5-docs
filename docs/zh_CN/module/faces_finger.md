# Module FACES FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/module/faces_finger/faces_finger_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/faces_finger/faces_finger_02.jpg" width="30%" height="30%">



## 描述

**FACE-FINGER** 是一款兼容 FACE 套件的指纹识别面板.内部集成 FPC1020A 电容式指纹识别模组,具备多指纹录入、图像处理、特征值提取、指纹比对、搜索等功能.支持设定不同安全级别，能够为您的项目提供稳定可靠的指纹添加、验证、管理机制.

<img src="assets/img/product_pics/module/faces_finger/faces_finger_03.jpg" width="30%" height="30%">

通信协议: UART.

## 产品特性

- FACES套件兼容
- UART2（16/17）
- FPC1020A:
    - 感应阵列尺寸：160*160像素
    - 像素分辨率：256灰度级（8位）
    - 可适当调节的安全等级 0-9，默认等级 5 
    - 工作温度：- 40 … + 85 °C
    - 储存温度：- 40 … + 85 °C
    - 解析度：508 DPI
- 产品尺寸：58.2mm x 54.2mm x 10mm
- 产品重量：20g

## 套件清单

-  1x FACES Finger 模块

## 应用

- 指纹考勤机
- 指纹储物柜


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_FINGER.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

*获取完整代码，[请点击此处. ](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_FINGER)*

### 2. UIFlow

*获取完整代码点击此处[下载](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_FINGER/UIFlow).*

<img src="assets/img/product_pics/module/faces_finger/finger.png">

## 原理图

<img src="assets/img/product_pics/module/faces_finger/faces_finger_04.jpg">
<img src="assets/img/product_pics/module/faces_finger/faces_finger_05.jpg">

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Modules/FACE_FINGER.pdf)**

### 管脚映射

<table>
<tr><td>M5Core</td><td>U2RXD(16)</td><td>U2TXD(17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACESE FINGER</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>


## 相关连接

- 通信协议 **[FINGER 串口通信协议](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- 数据手册 **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**



## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/FACES-Finger.mp4" type="video/mp4">
</video>

<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-module/products/finger-print-fpc-1020a-panel-for-m5-faces';


   anchor_search(购买链接);
   scrollFunc();

</script>