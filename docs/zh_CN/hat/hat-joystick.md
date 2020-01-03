# Joystick HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_01.jpg" width="30%"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_02.jpg" width="30%"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_03.jpg" width="30%">
***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/products/m5stickc-joystick-hat)**


## 描述

**Joystick HAT** 是一款专为M5StickC设计的摇杆模块.内嵌STM32F030F4主控芯片，采用I2C通信协议与主机M5StickC进行数据传输.

这个拥有迷你体积的遥杆模块支持进行全方位的角度偏移与中心按压，并输出角度偏移数据以及开关数字信号.

采用HAT系列统一的插接式设计与M5StickC可靠连接，用最精简的方式，获得更多人机交互输入体验.


<img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_04.jpg" width="30%"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_05.jpg" width="30%">

## 产品特性

- 内嵌STM32F030F4
- 通信协议：I2C（地址：0x38）
- 支持全方位偏移/中心按键

## 重量尺寸

- 单品尺寸：24mm x 30mm x 17mm
- 单品重量：3g

## 包含

- 1x Joystick HAT

<img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_06.jpg" width="30%">

## 应用

- 游戏控制器
- 无线摇杆设备

## 通信协议

<mark>I2C地址: 0x38</mark>

寄存器:

0x01 只读  4 bytes, 单轴数值 0 ~ 4096

`0: x轴原始数据低八位`

`1: x轴原始数据高八位`

`2: y轴原始数据低八位`

`3: y轴原始数据高八位`

0x02 只读 3 bytes

`0: x轴换算后数据 ( -127 ~ 127)`

`1: y轴换算后数据 (-127 ~ 127)`

`2: 0 or 1 (按键按下为0, 松开为1)`

0x03 只写 1 bytes

`0x00: 普通模式`

`0x01: 中心点校零`

`0x02: 最大值校准(需手动旋转摇杆获取最大值)`

`0x03: 保存中心点及最大值数据至flash, 保存后恢复至普通模式 `

> 摇杆校准方法：先i2c写寄存器0x03 然后发送 0x02,摇杆绕上下左右反复转圈几次,然后寄存器0x03写0x03保存.

## 原理图

<img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_07.jpg" width="60%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/Joystick/EasyLoader_Joystick_HAT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## Code

- **UIFlow**

<img src="assets\img\product_pics\hat\joystick_hat\joystick.png" width="60%">

- **[Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/hat-joystick/Arduino/Joystick_hat)**


## 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Joystick HAT</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/Joystick_HAT.mp4" type="video/mp4">
</video>