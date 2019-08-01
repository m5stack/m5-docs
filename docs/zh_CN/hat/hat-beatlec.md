# BeatleC {docsify-ignore-all}

<img src="assets\img\product_pics\hat\beatlec_hat\beatlec_hat_01.jpg" width="30%" height="30%">

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**


## 描述

**BeatleC**是一款迷你机器人小车，采用了双电机驱动器和7个可编程RGB LED，极其简洁的外观设计和板载ESP32的M5StickC小巧主控，使其成为一款独一无二的迷你机器人小车.

它的机身由两部分组成（M5StickC控制器和BeatleC底座.）在底座上，配备了两个由STM32F030驱动的直流减速电机，电路连接至M5StickC的顶部插槽，最终实现控制.

车身外观是略微倾斜的，由正面和背面的车轮尺寸不同，如图所示.此外，电源开关位于机身前部.

<img src="assets\img\product_pics\hat\beatlec_hat\beatlec_hat_02.jpg" width="50%" height="30%">

## 产品特性

- 小型机器人车
- 基于ESP32（提供Wi-Fi和蓝牙）
- 无线可控
- 双电机驱动器
- 7xRGB LED
- 简洁的设计
- 内置电池：底座（80ma）,M5StickC（80ma）.
- 平稳控制
- 尺寸：70mm * 50mm * 32mm
- 前轮直径：25mm⌀
- 后轮直径：14mm⌀


## 应用

- 远程电机控制
- 无线机器人控制


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/BeatleC/EasyLoader_BeatleC.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 操作步骤

### 基本配置

- 通过顶部拓展端口将M5StickC连接到beatleC底座.
- 按复位按钮打开M5StickC.
- 检查硬件反馈：
    - Base的7个LED将依次点亮3次.
    - 按下按钮A，前轮将前后旋转500ms.
- 使用手机或计算机进行Wi-Fi扫描，搜索并连接ssid名称以“beatle”加上屏幕上显示的mac地址开头.
- 然后打开浏览器并输入```192.168.4.1 / ctl```. 加载页面后，控制页面如图显示.

### 控制页面

<img src="assets\img\product_pics\hat\beatlec_hat\beatlec_hat_03.png" width="40%" height="30%">

- 向上推动控制杆以加速车轮，向下推动减速.
- 底部有四个颜色的螺栓.彩色块用于打开底部的所有RGB LED指定的颜色. 黑色挡将关闭灯.

## Code

### 1. Arduino IDE

*[点击此处]，获取完整程序(https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/beatleC/stickc/Arduino).*

## 相关视频

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/BeatleC_01.mp4" type="video/mp4">
</video>

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/BeatleC_02.mp4" type="video/mp4">
</video>