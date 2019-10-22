# FINGER HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\finger_hat\finger_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\finger_hat\finger_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\finger_hat\finger_hat_03.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/all/products/m5stickc-fingerprint-hatf1020sc)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**



## 描述

**FINGER Hat**是一款指纹识别传感器. 内部集成 FPC1020SC 电容式指纹识别模组,具备多指纹录入、图像处理、特征值提取、指纹比对、搜索等功能.
采用UART通信协议、紧凑的外观设计、与低功耗能带给项目可靠的安全级别的同时，提供最佳的用户便利性.如果你想要为你的项目添加生物指纹识别功能，并希望其具备稳定可靠的添加、验证、管理机制那么FINGER HAT 是一个不错的解决方案.

UART 参数设置:
- 波特率(默认: 19200bps)
- 起始位(1 bit)
- 停止位(1 bit)
- 校验位(无)


## 产品特性

- 指纹容量:  150
- 误识率:    <0.001%（安全等级为3时）
- 拒识率:    <0.1%（安全等级为3时）
- 比对模式:  1:1 验证/1:N识别
- 安全等级:  1-5（默认为3）
- 电流:      <20μA
- 响应时间:  指纹预处理<0.45S
- 输出格式:  用户名、图像、特征值
- 特征值大小: 193Byte
- 通讯接口:   UART
- 通讯波特率: 9600-115200（默认为19200）
- 工作温度:   -10° - 60°
- 相对湿度:   20% - 80%

## 包含

- 1x FINGER HAT

## 应用

- 指纹考勤
- 替代密码认证
- 身份识别




## 原理图

<img src="assets/img/product_pics/hat/finger_hat/finger_hat_04.jpg" width="50%" height="50%">




## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/FINGER/EasyLoader_StickC_HAT_FINGER.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 例程

- **[Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/finger-hat/Arduino/FINGER)**


## 相关链接

-  **Datasheet** - [FPC1020A DataSheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)


## 相关视频
**Demo** 

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/FINGER-HAT.mp4" type="video/mp4" >
</video>
