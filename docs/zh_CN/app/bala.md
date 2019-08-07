# Application BALA {docsify-ignore-all}

<img src="assets/img/product_pics/app/bala_1.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/bala_5.jpg" width="250" height="250">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](/zh_CN/quick_start/bala/bala_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Bala/tree/master/examples)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-application/products/bala-esp32-development-mini-self-balancing-car)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**BALA** 是一款平衡车应用.该产品是由 M5 FIRE 与 双路直流电机底座组合而成的一款自平衡机器人，其"BALA"名称的由来出自"Balance"一词的缩写.

默认预装平衡车应用程序，在运行时使用闭环算法保持垂直平衡.使用加速度计与陀螺仪姿态数据来校正其方向和位置.支持多种工作模式，如位置保持、简单模式、上升模式和操纵杆控制模式.支持智能手机或控制器远程操控.

网上有很多关于平衡车的开源代码供参考，你能够方便快捷的开发出更多有趣的功能.

使用 2 路直流驱动器模块，通过I2C总线与M5Stack FIRE通信.默认I2C地址为**0x56**.

## 产品特性

- 开发平台
   + Python
   + UIFlow
- 兼容 LEGO
- POGO Pin
- 支持 TF 卡拓展

## M5Fire 参数

型号 | M5Stack FIRE
---|---
ESP32 | 240MHz双核，600 DMIPS，520KB SRAM，Wi-Fi，双模蓝牙
Flash | 16MB Flash + 4MB PSRAM
输入 | 5V @ 500mA
接口 | TypeC x 1, GROVE(I2C+I/0+UART), Pogo Pin x 1
LCD | 2 英寸, 320x240 彩色 TFT LCD, ILI9341
扬声器 | 1W-0928
麦克风 | MEMS 模拟 BSE3729 麦克风
LED | SK6812 3535 RGB LED x 10
MEMS | BMM150+(MPU6886/SH200Q)
电池 | 内置 550mAh @ 3.7V
工作温度 | 32°F 至 104°F ( 0°C 至 40°C )
尺寸 | 54 x 54 x 21 mm
C.A.S.E | 塑料 ( PC )

## 包括

- 1x M5Stack BALA
- 1x 电机驱动
- 2x N20电机(内置编码器)
- Type-C USB

<img src="assets/img/product_pics/app/bala_2.jpg" width="250" height="250">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/BALA/EasyLoader_APP_BALA.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)，该程序仅适用于使用MPU9250/MPU6886的设备.(不支持SH200Q).


## 相关视频

**BALA 的演示**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5BALA%20.mp4" type="video/mp4">
</video>

**BALA 的演示 - 手机控制**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Iphone%20Controlled%20M5Bala%20.mp4" type="video/mp4">
</video>

**BALA 的演示 - 巡线**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5BALA.mp4" type="video/mp4">
</video>

**BALA 的演示 - 使用手机巡线**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Self-tracing%20Car.mp4" type="video/mp4">
</video>
