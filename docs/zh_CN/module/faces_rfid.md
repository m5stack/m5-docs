# Module FACES RFID {docsify-ignore-all}

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/faces_rfid/faces_rfid_02.jpg" width="30%" height="30%">



## 描述

**FACE-RFID** 是一款兼容 FACE 套件的无线射频识别面板.内置**MFRC522**芯片，工作频率为13.56MHz. 支持读卡、写卡、识别、记录、对RF卡进行编码和授权等多个功能.利用磁场感应技术，能够实现非接触式双向信息交互、读取感应卡的信息并验证.


<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_03.jpg" width="30%" height="30%">

通信协议: I2C.

## 产品特性

- FACES套件兼容
- UART2（16/17）
- MFRC522:
    - 工作频率: 13.56 MHz
    - I2C 数据速率: 快速模式: 最高400 Kbit/s; 高速模式: 最高3400 Kbit/s
    - RC522 收发器缓冲器: 64 bytes
    - 支持的协议: ISO14443A, MIFARE and NTAG
    - 工作温度: -20℃-85℃
    - 数据保存: > 10 年
    - 读写距离: < 8 cm
- 产品尺寸：58.2mm x 54.2mm x 10mm
- 产品重量：18.4g

## 套件清单

- 1x FACES RFID 模块
- 1x RFID 卡
- 1x Fudan S50 卡

## 应用

-  智能家居门禁系统
-  车辆管理
-  智能交通
-  智能书架


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_RFID.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

*获取完整代码，[请点击此处. ](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_RFID)*

### UIFlow

*下载UIFlow示例，[请点击此处. ](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_RFID/UIFlow)*

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid.jpg" width="50%" height="50%">

## 原理图

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_04.jpg">

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Modules/FACE_RFID.pdf)**

### 管脚映射

<table>
<tr><td>M5Core</td><td>SCL(22)</td><td>SDA(21)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACES RFID</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


## 相关链接

- Datasheet **[MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)**

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/FACES-RFID.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/rfid-rc522-panel-for-m5-faces';


   anchor_search(purchase_link);
   scrollFunc();

</script>