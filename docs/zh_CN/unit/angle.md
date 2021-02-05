# ANGLE

<el-tag effect="plain">SKU:U005</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/angle/unit_angle_01.webp"></div>

## 描述

**ANGLE** 是一款旋钮开关输入Unit，其内置了一个**10K**的电位器,通过旋转旋钮能够改变其内部的电阻值.

电位器是具有三个引出端、阻值可按某种变化规律调节的电阻元件.根据此原理，ESP32通过端口B获取电位器输出电压的大小，再经过AD转换得到对应的映射数据.在"音量，亮度调节，或是电机调速"等需要连续信号控制的应用场景中，Angle Unit会是一个不错的选择.

在M5Stack产品体系中，通场HY2.0-4P接口的颜色代表其使用的通信协议类型.
- 黑色: 单总线 (AD ,DA ,GPIO)
- 红色: I2C
- 蓝色：UART
- 白色：其他(取决于主设备)

<img src="assets/img/product_pics/unit/angle/unit_angle_03.webp">

## 产品特性

- HY2.0-4P 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc) .
- 2x LEGO 兼容孔

## 包含

- 1x ADC Unit
- 1x HY2.0-4P线缆

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>输出电压</td>
      <td>0 ~ 2500mV</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>6g</td>
   </tr>
      <tr>
      <td>毛重</td>
      <td>23g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32*24*22mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>73*46*30mm</td>
   </tr>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Angle_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Angle_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Angle_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示旋钮模拟值数据.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(PORT B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>ANGLE Unit</td><td>Sensor Pin</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/angle_sch.webp">


## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ANGLE)

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_03.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/angle-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>