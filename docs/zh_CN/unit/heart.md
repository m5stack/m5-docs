# HEART {docsify-ignore-all}

<el-tag effect="plain">SKU:U029</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_heart_01.webp"> <img src="assets/img/product_pics/unit/unit_heart_02.webp"></div>

## 描述

**HEART** 是一款血氧心率传感器.集成**MAX30100**，提供完整的脉搏血氧仪和心率传感器系统解决方案.这是一款非插入式的血氧心率传感器,集成了两个红外发光二极管和一个光检测器.其检测原理是通过红外 led 灯照射，检测携带氧气和非携带氧气的红血球数量比例，从而得到血氧含量.

**测试方式: 程序运行后，将手指放置在检测区域.**

**Heart Unit 通过 I2C 协议与 M5Core 进行通信 I2C地址:0x57**

## 产品特性

- 可编程采样率和LED电流，以节省功耗
- 超低关断电流 (0.7µA, 典型值)
- 高测量性能
- 高采样率
- 内置温度传感器校准
- 快速数据输出
- 血氧浓度检测、心率检测
- 软件开发平台: Arduino
- 2x LEGO 兼容孔

## 包含

- 1x HEART Unit
- 1x HY2.0-4P线缆

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通讯协议</td>
      <td>IIC：0x57</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>1.8V-3.3V</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>5g</td>
   </tr>
      <tr>
      <td>毛重</td>
      <td>18g</td>
   </tr>
      <tr>
      <td>产品尺寸</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Heart_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Heart_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Heart_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示血氧心率传感器检测值.</p>
        </div>
    </div>
</div>


### 管脚映射

<table>
<tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEART Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/heart_sch.JPG">

## 相关链接

- **Datasheet** 
  - [MAX30100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX30100.pdf)

  - [MAX30100 lib](https://github.com/oxullo/Arduino-MAX30100)

## 案例程序

### Arduino IDE

- [请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/HEART_MAX30100)

<img src="assets/img/product_pics/unit/unit_example/HEART/example_unit_heart_01.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-heart-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>