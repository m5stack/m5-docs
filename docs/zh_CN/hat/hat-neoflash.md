# Neoflash HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_01.jpg" width="30%"> <img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_02.jpg" width="30%"> <img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_05.jpg" width="30%">

***




## 描述

**Neoflash HAT** 是一款专为M5SticKC设计的矩阵RGB LED灯板.这块尺寸面积仅有58x23.5mm的PCB板总共嵌入了126颗可编程RGB LED灯，允许用户自由的设置它的颜色与亮度，除了实现炫酷的彩色灯光效果以外，采用7x18矩阵设计的它能够带来良好的数字显示体验.

在使用灯板制作一些数据显示应用时，使用配套的黑茶色亚克力板，能够有效增强显示效果.结合配套/默认的两90°组弯曲排针，**Neoflash HAT**能够以两种角度安装到M5StickC上.如果你打算为你的项目添加一个精致小巧的LED矩阵屏幕的话，Neoflash HAT 会是一个不错的选择.

<img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_03.jpg" width="30%"> <img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_04.jpg" width="30%">

## 产品特性

- 单像素点的三基色颜色：
    - 可实现0 ~ 256级亮度显示
    - 完成16777216种颜色的全真色彩显示
    - 24位RGB控制数据: 每种颜色8位
- RGB LED数量: 126 个
- 孔间距: 0.1 in - (2.54 mm)
- 孔尺寸: 0.039" 1mm (CNC工艺)
- 安装方式: 紧贴背面（默认）/水平拼接

## 重量尺寸

- 单品尺寸：58mm x 23.5mm x 1mm
- 单品重量：2g

## 包含

- 1x Neoflash HAT
- 2x 8 pin 2.54mm弯曲排针（90°）
- 1x 2mm黑茶色亚克力板
- 2x 15cm 固定线(#71、0.4mm)



## 应用

- LED矩阵显示屏
- 数字时钟
- 彩色灯光展示


>矩阵灯板/亚克力板穿线方式示意图

<img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_06.jpg" height="300px"><img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_07.jpg" height="300px">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/Neoflash/EasyLoader_Neoflash_HAT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 例程

- **[Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/neoflash-hat/Arduino)**


## 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>Neoflash HAT</td><td>DATA</td><td>5V</td><td>GND</td></tr>
</table>


## 相关视频

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/Neoflash_HAT.mp4" type="video/mp4">
</video>