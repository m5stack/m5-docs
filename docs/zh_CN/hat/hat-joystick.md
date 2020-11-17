# Joystick HAT

<el-tag effect="plain">SKU:U073</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_01.webp"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_02.webp"></div>

## 描述

**Joystick HAT** 是一款专为M5StickC设计的摇杆模块.内嵌STM32F030F4主控芯片，采用I2C通信协议与主机M5StickC进行数据传输.

这个拥有迷你体积的遥杆模块支持进行全方位的角度偏移与中心按压，并输出角度偏移数据以及开关数字信号.

采用HAT系列统一的插接式设计与M5StickC可靠连接，用最精简的方式，获得更多人机交互输入体验.

## 产品特性

- 内嵌STM32F030F4
- 通信协议：I2C（地址：0x38）
- 支持全方位偏移/中心按键

## 包含

- 1x Joystick HAT

## 应用

- 游戏控制器
- 无线摇杆设备

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*30*17mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>42*40*30mm</td>
   </tr>
 </table>

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

<img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_07.webp" width="60%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/Joystick/EasyLoader_Joystick_HAT.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 案例程序

- **UIFlow**

<img src="assets\img\product_pics\hat\joystick_hat\joystick.webp" width="60%">

- **Arduino**

点击[此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/hat-joystick/Arduino/Joystick_hat)下载完整代码

## 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Joystick HAT</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/Joystick_HAT.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/products/m5stickc-joystick-hat';


   anchor_search(purchase_link);
   scrollFunc();

</script>