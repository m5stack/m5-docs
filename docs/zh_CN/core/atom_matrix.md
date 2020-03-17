# ATOM Matrix {docsify-ignore-all}

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_01.webp"><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_02.webp"></div>

<!-- <img src="assets/img/product_pics/core/gray/gray_03.png" alt="gray_03" width="250" height="250"> -->

## 描述

**ATOM Matrix** 是M5Stack开发套件系列中一款非常小巧的开发板，其大小只有24 * 24mm，提供更多GPIO供用户自定义，非常适合做嵌入式的智能硬件。主控采用ESP32-PICO-D4方案，集成Wi-Fi和蓝牙模块，拥有4MB的SPI闪存，板载Infra-Red，面板上有5*5 RGB Led矩阵、内置IMU姿态传感器（MPU6886),在Neo Led矩阵下方隐藏一颗可编程按键，板载Type-C接口可以快速实现程序上传下载，此外还提供一个PH2.0 4P接口用于连接外设。背面具有一个M2螺丝孔用于固定。
 
<mark>注意：RGB LED的亮度限制为20，因此请不要将其设置过高的亮度数值，以免损坏LED和亚克力屏幕。</mark>

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
- GROVE/4P PH2.0接口
- 2.4G天线：Proant 440
- 开发平台: [Arduino](http://www.arduino.cc)、[UIFlow](http://flow.m5stack.com)
- 产品尺寸：24 * 24 * 14mm 
- 产品重量：1g

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_ATOM%20_Matrix_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_MATRIX.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>通过矩阵屏幕文字滚屏显示与按键计数功能,测试RGB LED与按键是否工作正常.</p>
        </div>
    </div>
</div>


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

## 案例程序

### 1. Arduino IDE

点击[这里](https://github.com/m5stack/M5Atom)获取Arduino示例

### 2. UIFlow

点击[这里](https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start)查看UIFlow相关示例

## 相关链接

- **数据手册**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [WS2812B-2020](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/WS2812B-2020_ZH_cn_V1.3.pdf)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/atom-matrix-esp32-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>