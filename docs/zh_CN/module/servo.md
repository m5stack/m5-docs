# Module SERVO

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M014</div>

<div class="product_pic"><img src="assets\img\product_pics\module\servo\servo_01.webp"><img src="assets\img\product_pics\module\servo\servo_02.webp"></div>

## 描述

**SERVO** 是M5Stack堆叠模块系列中的一款，舵机驱动模块.拥有12个舵机驱动通道，最大功率14瓦，可同时驱动多个 SERVO 舵机.采用直流电源输入设计用于功率补充,并通过 M-BUS，自动为顶部的 M5Core 供电.将这一种简单快捷的舵机驱动方式应用在你的项目中，将提升你的开发效率.SERVO 基于 MEGA328 芯片进行 I2C 通信(0x53).

## 产品特性

-  12x 舵机驱动通道
-  DC 输入: 5-7V
-  DC 连接器类型: XT30 (母头)
-  电源设配器接口: 5.5mm x 2.1mm
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：24.5g

## 包含

-  1x M5Stack Servo 模块
-  1x 常规公对公 XT30 DC 连接器

## 应用

-  人形机器人
-  仿生多关节机器人
-  3轴舵机云台

## 相关链接

- **[SERVO 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_Servo_MODULE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_Servo_MODULE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/SERVO_MODULE.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>控制舵机旋转角度.</p>
        </div>
    </div>
</div>

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino代码](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/SERVO)

### 2. UIFlow

想要探索最简单的Servo编程驱动方式吗？快试试Blockly编程平台[UIFlow](http://flow.m5stack.com)

[请点击此处下载Arduino示例代码](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow)

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.webp">

## 原理图

<img src="assets/img/product_pics/module/servo_sch.webp">

## 相关视频

**SERVO 的使用教程**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Servo/E4%20-%20Servo%20Demo(UIFlow%20Tutorials%205).mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/servo-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>