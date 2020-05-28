# Module FACES FINGER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A066</div>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_finger/faces_finger_01.webp"><img src="assets/img/product_pics/module/faces_finger/faces_finger_02.webp"></div>

## 描述

**FACE-FINGER** 是一款兼容 FACE 套件的指纹识别面板.内部集成 FPC1020A 电容式指纹识别模组,具备多指纹录入、图像处理、特征值提取、指纹比对、搜索等功能.支持设定不同安全级别，能够为您的项目提供稳定可靠的指纹添加、验证、管理机制.

## 产品特性

- FACES套件兼容
- 串口通讯：UART2（16/17）
- 电容式识别
- 指纹搜索、比对

## 包含

-  1x FACES Finger 模块

## 应用

- 指纹考勤机
- 指纹储物柜


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>感应阵列尺寸</td>
      <td>160*160像素</td>
   </tr>
   <tr>
      <td>像素分辨率</td>
      <td>256灰度级（8位）</td>
   </tr>
   <tr>
      <td>安全等级</td>
      <td>0-9级，默认等级 5</td>
   </tr>
   <tr>
      <td>解析度</td>
      <td>508DPI</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>20g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>43g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>58.2*54.2*10mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
   <tr>
      <td>材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_FINGER.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
<tr><td>M5Core</td><td>U2RXD(16)</td><td>U2TXD(17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACESE FINGER</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/module/faces_finger/faces_finger_04.webp">
<img src="assets/img/product_pics/module/faces_finger/faces_finger_05.webp">

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Modules/FACE_FINGER.pdf)**

## 相关连接

- **Datasheet**
  - [FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)
  - [FINGER 串口通信协议](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)

## 案例程序

### 1.Arduino IDE

 - [请点击此处获取Arudino代码 ](https://github.com/m5stack/M5Stack/tree/master/examples/Face/FINGER)

### 2. UIFlow

 - [获取完整代码点击此处下载](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_FINGER/UIFlow)

<img src="assets/img/product_pics/module/faces_finger/finger.webp">

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/FACES-Finger.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/finger-print-fpc-1020a-panel-for-m5-faces';


   anchor_search(purchase_link);
   scrollFunc();

</script>