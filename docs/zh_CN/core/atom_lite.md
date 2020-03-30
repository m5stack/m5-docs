# ATOM Lite{docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:C008</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/atom/atom_lite_01.webp"><img src="assets/img/product_pics/core/minicore/atom/atom_lite_02.webp"></div>

## 描述

**ATOM Lite** 是M5Stack开发套件系列中一款非常小巧的开发板，其大小只有24 * 24mm，提供更多GPIO供用户自定义，非常适合做嵌入式的智能硬件开发。主控采用了ESP32-PICO-D4方案，集成Wi-Fi和蓝牙模块，内置3D天线，拥有4MB的SPI闪存，提供Infra-Red、Neo Led、按键和PH2.0接口。板载Type-C接口可以快速实现程序上传下载，背面具有一个M2螺丝孔用于固定。

## 产品特性

- USB Type-C
- 基于ESP32开发
- 4 MByte flash
- 复位按键*1
- 可编程按键*1
- Neo Led*1
- 红外led*1
- GPIO *6 杜邦接口
- GROVE/4P PH2.0接口
- 2.4G天线：Proant 440
- 开发平台: [Arduino](http://www.arduino.cc) [UIFlow](http://flow.m5stack.com)
- 尺寸：24 * 24 * 10mm
- 重量：12g

## 包含

-  1x ATOM Lite

## 应用

- 物联网节点
- 微型控制器
- 可穿戴设备

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_ATOM%20_LITE_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_LITE.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>通过变色呼吸灯程序，测试RGB LED与按键是否工作正常.</p>
        </div>
    </div>
</div>

## 管脚映射

<table>
 <tr><td>RGB Led</td><td>G27</td></tr>
 <tr><td>Btn</td><td>G39</td></tr>
 <tr><td>IR</td><td>G12</td></tr>
</table>

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_04.webp" width="30%" height="30%">

## 案例程序

### 1. Arduino IDE

点击[这里](https://github.com/m5stack/M5Atom)获得Arduino示例

### 2. UIFlow

点击[这里](https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start)查看UIFlow相关示例

## 相关链接

- **数据手册**
    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [WS2812B-2020](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/WS2812B-2020_ZH_cn_V1.3.pdf)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/atom-lite-esp32-development-kit';


   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>

