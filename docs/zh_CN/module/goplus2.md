# GoPlus2

<el-tag effect="plain">SKU:M025-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/goplusII/GoPlus2.webp"></div>

## 描述

**GoPlus2** 是一款可堆叠的多功能电机舵机控制模块。下位机采用STM32F030C8T6，模块配备2路直流电机驱动接口，4路舵机驱动接口，可扩展3个PORT-B接口，满足模拟输入、数字输入输出的需求，同时支持红外(IR)发射与接收。模块提供一个DC直流电源接口用于外部供电，此外模块内部有500mAh电池，可通过M5Core主机对其充电。

通信协议：I2C(0x38)

### 产品特性

-  2x 直流电机驱动通道
-  4x 舵机驱动通道
-  IR 发射 & 接收
-  3x 拓展 PORT B
-  电源指示灯
-  内置500mAh电池
-  主控芯片STM32F030C8T6

### 包含

-  1x GoPlus2 Module
-  2x DC Motor 连接线

## 应用

- 舵机/电机驱动器
- 多路输入输出信号采集与控制
- 红外控制器
- DIY玩具底座

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
      <td>外设接口</td>
      <td>DC Motor x 2,PORT-B x 3, Servo x 4</td>
   </tr>
   <tr>
      <td>电机驱动</td>
      <td>HR8833 H桥驱动</td>
   </tr>
   <tr>
      <td>红外</td>
      <td>发射与接收功能</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>500mAh</td>
   </tr>
   <tr>
      <td>通信协议</td>
      <td>I2C：0x38</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>58g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_GoPlus2.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_GoPlus2.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/GoPlus2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>舵机,电机,portB及IR测试，按下B键切换</p>
        </div>
    </div>
</div>


## 原理图

<img src="assets/img/product_pics/module/goplusII/goplusII_sch.webp">

## 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO35</td><td>GPIO5</td></tr>
 <tr><td>IR</td><td>接收</td><td>发送</td></tr>
</table>

## 参考文档

- 协议手册 
    - **[GoPlus2 I2C协议](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/GO%20PLUS2%20%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E.docx)**

## 案例程序

### Arduino

点击[此处获取](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GoPLUS2)示例程序

<el-divider content-position="right">Last updated: 2021-1-22</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/goplus2-dc-motor-and-servo-driver-module-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>