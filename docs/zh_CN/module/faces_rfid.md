# Module FACES RFID

<el-tag effect="plain">SKU:A067</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_rfid/faces_rfid_01.webp"> <img src="assets/img/product_pics/module/faces_rfid/faces_rfid_02.webp"></div>

## 描述

**FACE-RFID** 是一款兼容 FACE 套件的无线射频识别面板.内置**MFRC522**芯片，工作频率为13.56MHz. 支持读卡、写卡、识别、记录、对RF卡进行编码和授权等多个功能.利用磁场感应技术，能够实现非接触式双向信息交互、读取感应卡的信息并验证.

## 产品特性

- FACES套件兼容
- IIC通讯协议(0x28)
- MFRC522

## 包含

- 1x FACES RFID 模块
- 1x RFID 卡
- 1x Fudan S50 卡

## 应用

-  智能家居门禁系统
-  车辆管理
-  智能交通
-  智能书架

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>工作频率</td>
      <td>13.56MHz</td>
   </tr>
   <tr>
      <td>I2C速率</td>
      <td>快速模式: 最高400 Kbit/s; 高速模式: 最高3400 Kbit/s</td>
   </tr>
   <tr>
      <td>支持协议</td>
      <td>ISO14443A, MIFARE and NTAG</td>
   </tr>
   <tr>
      <td>数据保存时间</td>
      <td>> 10 年</td>
   </tr>
   <tr>
      <td>读写距离</td>
      <td> < 8cm</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>18.4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>52g</td>
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
      <td>Plastic(PC)</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_RFID.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

?>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
<tr><td>M5Core</td><td>SCL(22)</td><td>SDA(21)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACES RFID</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_04.webp">

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Modules/FACE_RFID.pdf)**

## 相关链接

- **Datasheet** 
  - [MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)

## 案例程序

### 1.Arduino IDE

 - [获取完整Arduino代码请点击此处](https://github.com/m5stack/M5Stack/tree/master/examples/Face/RFID)

### 2.UIFlow

 - [下载UIFlow示例请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_RFID/UIFlow)

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid.webp" width="50%" height="50%">


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/FACES-RFID.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/rfid-rc522-panel-for-m5-faces';


   anchor_search(purchase_link);
   scrollFunc();

</script>