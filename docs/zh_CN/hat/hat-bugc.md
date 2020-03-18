# BugC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K033</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\bugc_hat\bugc_hat_01.jpg"> <img src="assets\img\product_pics\hat\bugc_hat\bugc_hat_02.jpg"></div>

## 描述

**BugC** 是一款兼容M5StickC的可编程机器人底座，底座主要部分由四路电机驱动器、四路直流电机、控制芯片为STM32F030F4、2个可编程RGB LED以及电池座和独立开关等部件组成，外观小巧运动灵活.
Bugc底座需要结合M5StickC控制器使用.在底座上，配备了四个由STM32F030驱动的直流减速电机，电路连接至M5StickC的顶部插槽，通过I2C协议(0x38)通信，最终实现控制.

## 产品特性

- 可编程机器人
- 远程控制
- 四路电机驱动器
- 2xRGB LED
- 简洁的设计
- 配备电池底座
- 运动灵活

## 外形尺寸和重量

- 尺寸：55mm * 40mm * 25mm
- 输出轴：⌀0.81mm
- 重量：34g

## 电机说明

- 额定电压: 3.7V DC
- 额定转速: 15000-2000rpm
- 额定电流: 50mA
- 堵转电流: 70mA
- 绝缘电阻: 10MΩ

## 应用

- 远程电机控制
- 机器人控制
- 智能玩具

## 包含

- 1x BugC底座
- 1x 16340电池(750mAh)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/BugC/EasyLoader_BugC.exe"><button type="button" class="btn btn-primary">点击此处下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

- **UIFlow**

<img src="assets\img\product_pics\hat\bugc_hat\bugc.png" width="30%" height="30%">

- **Arduino**

[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/BugC/bugC)获取完整代码

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/bugC.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/products/bugc-w-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>