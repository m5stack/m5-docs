# GoPlus2

<el-tag effect="plain">SKU:</el-tag>

<div class="product_pic"><img src=""></div>

## 描述

**GoPlus2** 是一款可堆叠的多功能电机舵机控制模块。下位机采用STM32F030C8T6，模块配备2路直流电机驱动接口，4路舵机驱动接口，可扩展3个PORT-B接口，支持红外(IR)发射与接收，为了满足多路接口同时供电的要求，提供一个DC直流电源接口用于外部供电。

通信协议：IIC

### 产品特性

-  2x 直流电机驱动通道
-  4x 舵机驱动通道
-  IR 发射 & 接收
-  3x 拓展 PORT B
-  STM32F030C8T6

### 包含

-  1x GoPlus2 Module

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>主控芯片</td>
      <td>STM32F030C8T6</td>
   </tr>
   <tr>
      <td>拓展接口</td>
      <td>PORT-B x 3</td>
   </tr>
   <tr>
      <td>电机驱动</td>
      <td>HR8833 H桥驱动</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>43g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="">Windows</a>
            <a href="">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p></p>
        </div>
    </div>
</div>


## 原理图

<img src="">

## 管脚映射

## MBUS引脚定义

<img src="assets\img\product_pics\module\module_bus.webp"/>

## 参考文档

- 协议手册 
    - **[I2C协议](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/GoPlus_I2C_Protocol%20operation%20instructions.pdf)**

## 案例程序

### Arduino

- 测试程序 - **[GoPlus2](https://github.com/m5stack/GoPlus/tree/master/test)**

<img src="assets/img/product_pics/module/goplus/goplus_p5.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/goplus-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>