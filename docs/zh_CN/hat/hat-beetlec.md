# BeetleC {docsify-ignore-all}

<img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_02.jpg" width="30%" height="30%">

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)**&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/products/beetlec-w-o-m5stickc)**&nbsp;



## 描述

**BeetleC**是一款兼容M5StickC的可编程小车底座，底座主要部分由双电机驱动器、双路减速电机、控制芯片、7个可编程RGB LED以及亚克力轮等部件组成，其极度简洁的外观设计与拓展性极强、具备网络通信能力的控制器方案，能够带用户不一样的机器小车控制体验.

Beetlec底座需要结合M5StickC控制器使用.在底座上，配备了两个由STM32F030驱动的直流减速电机，电路连接至M5StickC的顶部插槽，最终实现控制.

车身外观是略微倾斜的，由正面和背面的车轮尺寸不同，如图所示.此外，电源开关位于机身前部.


<img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_03.jpg" width="30%" height="30%">

## 产品特性

- 可编程小车
- 远程控制
- 双电机驱动器
- 7xRGB LED
- 简洁的设计
- 内置电池：底座（80ma）.
- 平稳控制


## 重量尺寸

- 尺寸：70mm * 50mm * 25mm
- 前轮直径：⌀25mms
- 后轮直径：⌀14mm
- 产品重量：102g


## 应用

- 远程电机控制
- 无线小车控制

## 包含

- 1x BeetleC底座


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/BeetleC/EasyLoader_BeetleC.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 操作步骤

### 基本配置

- 通过顶部拓展端口将M5StickC连接到beetlec底座.
- 按复位按钮打开M5StickC.
- 检查硬件反馈：
    - Base的7个LED将依次点亮3次.
    - 按下按钮A，前轮将前后旋转500ms.
- 使用手机或计算机进行Wi-Fi扫描，搜索并连接ssid名称"beetle",密码为"12345678"加上屏幕上显示的mac地址开头.
- 然后打开浏览器并输入```192.168.4.1 / ctl```. 加载页面后，控制页面如图显示.

### 控制页面

<img src="assets\img\product_pics\hat\beetlec_hat\beetlec_hat_04.jpg" width="40%">

- 向上推动控制杆以加速车轮，向下推动减速.
- 底部有四个颜色的螺栓.彩色块用于打开底部的所有RGB LED指定的颜色. 黑色挡将关闭灯.

## 例程

- **UIFlow**

<img src="assets\img\product_pics\hat\beetlec_hat\beetlec.png" width="60%" height="60%">

### Arduino IDE

[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/beetleC/stickC/beetleC)，获取完整程序.

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/BeetleC_01.mp4" type="video/mp4">
</video>

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/BeetleC_02.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';


   anchor_search(purchase_link);
   scrollFunc();

</script>cript>