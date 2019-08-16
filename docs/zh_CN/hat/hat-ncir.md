# M5StickC NCIR HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_03.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/m5stickc-ncir-hatmlx90614)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**NCIR Hat**是一款兼容M5SticKC的单点红外测温传感器.内置红外传感器**MLX90614**，能够测量人体或其他物体的表面温度.

与大多数接触式型传感器不同地方在于,该传感器通过测量远距离物体发射出的红外光波来检测温度.无需物理接触，这使得它比一般传感器拥有更广的测温范围: -70°C 至 + 380°C.视场角为90°，能够方便快捷的测量某一位置的平均温度.

IIC（0x5A）

## 产品特性

- 兼容M5StickC
- MLX90614ESF-AAA
- 工作电压: 4.5 to 5.5V
- 物体测温范围: -70°C ~ 382.2°C
- 环境测温范围: -40°C ~ 125 ˚C
- 室温下测量精度: ±0.5°C
- 视场角: 90°
- 开发平台: Arduino, UIFlow(Blockly, Python)

## 包含

- 1x NCIR Hat

## 应用

-  人体体温测量
-  物体 ( 生物 ) 移动检测

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_NCIR.pdf)**

<img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_04.jpg" width="50%" height="50%">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[MLX90614 Datasheet](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MLX90614-Datasheet-Melexis.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/NCIR/EasyLoader_StickC_HAT_NCIR.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 例程

- **[Arduino](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/NCIR_HAT)**

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT NCIR</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>


## 相关视频

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/NCIR-HAT.mp4" type="video/mp4">
</video>
