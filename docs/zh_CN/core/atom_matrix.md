# ATOM Matrix {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_01.webp" width="350" height="350"><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_02.webp" width="350" height="350"><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_05.webp" width="350" height="350">

<!-- <img src="assets/img/product_pics/core/gray/gray_03.png" alt="gray_03" width="250" height="250"> -->

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/Atom/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/atom-matrix-esp32-development-kit)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**ATOM Matrix** 是M5Stack开发套件系列中一款非常小巧的开发板，其大小只有24 * 24mm，提供更多GPIO供用户自定义，非常适合做嵌入式的智能硬件。主控采用ESP32-PICO-D4方案，集成Wi-Fi和蓝牙模块，拥有4MB的SPI闪存，板载Infra-Red，面板上有5*5 RGB Led矩阵、内置IMU姿态传感器（MPU6886),在Neo Led矩阵下方隐藏一颗可编程按键，板载Type-C接口可以快速实现程序上传下载，此外还提供一个PH2.0 4P接口用于连接外设。背面具有一个M2螺丝孔用于固定。
支持的开发平台和程序语言：Arduino，[UIFlow](http://flow.m5stack.com) 的 Blockly 语言，Micropython. 无论你的开发和编程能力处在何种水平，M5Stack 都将协助你，逐步的将想法变为现实.

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_03.webp" width="30%" height="30%">

## 产品特性

- USB Type-C
- 基于ESP32开发
- 4 MByte flash
- MPU6886(SCL/SDA: 21/25)
- 1* 复位按键  
- 1* 可编程按键  
- 5*5 RGB Led Matrix
- 1* 红外Led
- GPIO *6 杜邦接口
- 4P PH2.0接口
- 2.4G天线：Proant 440
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- 产品尺寸：24 * 24 * 14mm 
- 产品重量：1g

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

<!--

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickC/EasyLoader_M5StickC_FactoryTest.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为Atom烧录时，请将波特率设置在750000或115200**)

-->

## 外设的管脚映射

<table>
 <tr><td>RGB Led</td><td>G27</td></tr>
 <tr><td>Btn</td><td>G39</td></tr>
 <tr><td>IR</td><td>G12</td></tr>
 <tr><td>SCL</td><td>G21</td></tr>
 <tr><td>SDA</td><td>G25</td></tr>
</table>

## 包含

-  1x ATOM Matrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_04.webp" width="40%" height="40%">

## 相关链接

- **数据手册**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)

## 相关视频

**ATOM Matrix的简介**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_MATRIX.mp4" type="video/mp4">
</video>

