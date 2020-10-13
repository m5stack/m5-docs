# BalaC

<el-tag effect="plain">SKU:K038</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/BalaC/balac_01.webp"></div>

## 描述

**BalaC** 是一款可以DIY的双轮平衡车，其底座采用STM32系列主控，板载2颗电机驱动IC，带有电源指示灯，配备可更换的充电电池。轻巧的设计以及360°舵机的驱动形式，让你可以利用UIFlow图形界面就能写出平衡程序。套装内含有StickC，借助内置的MPU6886进行姿态解算，通过计算偏移值控制舵机实时补偿，达到平衡的目的。兼容乐高的设计可以让你更换不同的轮胎，如果你想学习PID方面的相关内容，或者需要一款有趣的编程玩具产品，那么BalaC也许是不错的选择。

**目前出厂无任何程序，PID代码需要自行编写**

## 产品特性

- 基于ESP32+STM32
- 个性DIY
- 可拆卸设计
- 双轮电机驱动
- 可更换电池
- 编程平台：[UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


## 包含

-  1x M5StickC
-  1x BalaC Base
-  2x 轮胎
-  2x 轮胎适配器 
-  2x 9G 舵机
-  2x 橡皮筋
-  2x 螺丝
-  1x 内六角扳手
-  1x 16340 700mAh电池
-  1x 10cm Type-C Cable

## 应用

- 平衡车

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32-Pico-D4</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>舵机</td>
      <td>旋转角度:360°；无负载速度：0.12秒/60度(4.8V)</td>
   </tr>
   <tr>
      <td>驱动器</td>
      <td>L9110S</td>
   </tr>
   <tr>
      <td>通讯下位机</td>
      <td>STM32F030F4P6</td>
   </tr>
   <tr>
      <td>通讯协议</td>
      <td>IIC: 0x38</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>16340，700mAh可充电锂电池</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>162g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>206g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>30*100*105mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>148*118*42mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/APPLICATION/EasyLoader_BalaC_APPLICATION.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/APPLICATION/EasyLoader_BalaC_APPLICATION.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/BalaC.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>开机后短按电源键进行校准，此时led闪烁，校准成功即可自动保持平衡.</p>
        </div>
    </div>
</div>

## 示例程序

### Arduino IDE

点击此处 [下载示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/BalaC/Arduino/Balac)

### UIFlow

点击此处下载代码（仅供参考，不可直接使用） [UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/BalaC/UIFlow)

<img src="assets/img/product_pics/app/BalaC/balac_05.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/bala-c-esp32-development-mini-self-balancing-car';

   var quickstart_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>

