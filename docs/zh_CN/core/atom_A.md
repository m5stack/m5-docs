# ATOM {docsify-ignore-all}

<img src="assets/img/product_pics/core//minicore/atom/atom_A_01.webp" width="350" height="350"><img src="assets/img/product_pics/core/minicore/atom/atom_A_02.webp" width="350" height="350">

<!-- <img src="assets/img/product_pics/core/gray/gray_03.png" alt="gray_03" width="250" height="250"> -->

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/atom/atom_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/Atom_A/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/atomA-development-core)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**ATOM** 是M5Stack开发套件系列中一款非常小巧的开发板，其大小只有24*24mm，由于没有屏幕，非常适合做嵌入式的智能家居和玩具开发。主控采用了ESP32-Pico方案，集成Wi-Fi和蓝牙模块，内置3D天线，拥有4MB的SPI闪存，提供Infra-Red、RGB LED、按键、IMU姿态传感器和PH2.0接口，此外可通过6个GPIO连接外部设备。板载Type-C接口可以快速实现程序上传下载。

支持的开发平台和程序语言：Arduino，[UIFlow](http://flow.m5stack.com) 的 Blockly 语言，Micropython. 无论你的开发和编程能力处在何种水平，M5Stack 都将协助你，逐步的将想法变为现实.


<img src="assets/img/product_pics/core/atom/atom_A_03.webp">

## 产品特性

- USB Type-C
- 基于ESP32开发
- 16 MByte flash
- MPU6886(SCL/SDA: 21/25)
- 复位按键*1 可编程按键*1 RGB LED*1 IR*1
- 2.4G天线：Proant 440
- 多达6个可拓展的GPIO引脚与4P PH2.0接口
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

### ESP32特性

- 240 MHz双核Tensilica LX6微控制器，性能达到 600 DMIPS
- 集成520 KB SRAM
- 集成的802.11b/g/n HT40 Wi-Fi收发器，基带，堆栈和LWIP
- 集成双模蓝牙（经典和BLE）
- 霍尔传感器
- 10x 电容触摸功能接口
- 32 kHz晶体振荡器
- 每个GPIO引脚都支持PWM/定时器 输入/输出
- SDIO master/salve 50MHz
- 支持SD卡接口

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickC/EasyLoader_M5StickC_FactoryTest.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 外设的管脚映射

<img src="assets/img/product_pics/minicore/atom/atom_A_02.webp">


## 包含

-  1x ATOM
-  1x Type-C USB(20cm)

<img src="assets/img/product_pics/core/minicore/atom/atom_A_04.webp" width="80%" height="80%">

## 相关链接

- **数据手册**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>
