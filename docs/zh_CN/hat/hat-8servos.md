# 8Servos HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\8servos_hat\8servos_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\hat\8servos_hat\8servos_02.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\hat\8servos_hat\8servos_04.jpg" width="30%" height="30%">

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)**&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/products/m5stickc-8servos-hat)**



## 描述

**8Servos HAT**是一款兼容M5StickC的8路舵机控制板，主控为STM32F030F4，通过I2C的方式与M5StickC进行通信，为了保证多个舵机同时工作，控制板配备了独立的16340电池底座用来供电，由独立开关进行控制，此外在控制板上集成了一颗RGB指示灯。你可以使用它来控制SG90舵机，完成一些角度的精准操作。

<img src="assets\img\product_pics\hat\8servos_hat\8servos_03.jpg" width="30%" height="30%">

## 产品特性

- 八路舵机控制
- 1xRGB LED
- 16340电池底座
- IIC协议控制

## 外形尺寸

- 尺寸：55mm * 25mm * 20mm
- 重量：33g（含电池）

## 应用

- 舵机控制器
- 机器人控制
- 智能玩具

## 包含

- 1x 8Servos-HAT
- 1x 16340电池

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/8Servos/EasyLoader_8Servos-HAT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)



## 例程

### 1. Arduino IDE

[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/8serves-hat/Arduino)，获取完整程序.


## 舵机控制说明

> 1.功能说明

	(1)八路舵机控制

	(2)板载sk6812 LED控制

> 2.通讯方式

	I2C,速率最大400HZ,地址支持自加

	设备地址：0x38

    地址	默认值	说明

    00H	0X00	CH1角度输出

    01H	0X00	CH2角度输出

    02H	0X00	CH3角度输出

    03H	0X00	CH4角度输出

    04H	0X00	CH5角度输出

    05H	0X00	CH6角度输出

    06H	0X00	CH7角度输出

    07H	0X00	CH8角度输出

> 3.I2C地址说明

	00H(R/W)舵机角度寄存器
  
	说明：

	（1）数据可连续读写

	（2）每个寄存器值表示度数可写入0-180

>	10H(R/W)舵机脉宽寄存器

    地址	默认值	说明

    10H	0X00	CH1_WIDTH[8:15]

    11H	0X00	CH1_WIDTH[0:7]

    12H	0X00	CH2_WIDTH[8:15]

    13H	0X00	CH2_WIDTH[0:7]

    14H	0X00	CH3_WIDTH[8:15]

    15H	0X00	CH3_WIDTH[0:7]

    16H	0X00	CH4_WIDTH[8:15]

    17H	0X00	CH4_WIDTH[0:7]

    18H	0X00	CH5_WIDTH[8:15]

    19H	0X00	CH5_WIDTH[0:7]

    1AH	0X00	CH6_WIDTH[8:15]

    1BH	0X00	CH6_WIDTH[0:7]

    1CH	0X00	CH7_WIDTH[8:15]

    1DH	0X00	CH7_WIDTH[0:7]

    1EH	0X00	CH8_WIDTH[8:15]

    1FH	0X00	CH8_WIDTH[0:7]

    说明：

	（1）数据可连续读写

>   20H(R/W)LED_RGB寄存器

    地址	默认值	说明

    20H	0X00	G[0:7]

    21H	0X00	R[0:7]

    22H	0X00	B[0:7]

说明：

	（1）数据可连续读写

	（2）RGB888


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/8Servos_hat.mp4" type="video/mp4">
</video>

