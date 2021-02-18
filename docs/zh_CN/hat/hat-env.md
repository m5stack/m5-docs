# ENV HAT

<el-tag effect="plain">SKU:U053</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\env_hat\env_hat_01.webp"><img src="assets\img\product_pics\hat\env_hat\env_hat_02.webp"></div>

## 描述

**ENV HAT**是一款兼容M5SticKC的多功能环境传感器，内部集成DHT12、BMP280和BMM150，能够检测温度、湿度、大气压值、三轴磁力计数据,该模块采用的统一的I2C协议接口，因此在引脚上没有过多的占用.对于希望同时拥有精致体积与丰富功能的项目来说，**ENV Hat**是一个不错的选择.

## 产品特性

- 温度:
    -  测量范围: -20 ~ 60 ℃
- 湿度:
    -  测量范围: 20 ~ 95 %RH
- 大气压:
    -  测量范围: 300 ~ 1100hPa

- 磁场范围典型：
    - ±1300μT（x，y轴），±2500μT（z轴）
    - 磁场分辨率约为0.3μT

## 包含

- 1x ENV Hat

## 应用

- 气象站
- 指南针

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*20*14mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>36*38*18mm</td>
   </tr>
 </table>

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_ENV.pdf)**

<img src="assets\img\product_pics\hat\env_hat\env_hat_04.webp" width="50%" height="50%">

## 相关链接

- **[BMP280 库](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMP280 数据手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

- **[DHT12 数据手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**

- **[BMM150 数据手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_ENV_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_ENV_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ENV_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>气压、温湿度显示，磁力计数值显示.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT ENV</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino

[点击此处](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/ENV)，获取完整程序.

### 2. UIFlow

打开 http://flow.m5stack.com 点击Demo载入UIFlow例程

<img src="assets/img/product_pics/hat/env_hat/env.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-env-hat';


   anchor_search(purchase_link);
   scrollFunc();

</script>