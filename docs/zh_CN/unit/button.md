# BUTTON

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U027</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_button.webp"></div>

## 描述

**BUTTON** 是一个单按键 Unit，通过检测输入引脚高/低电平变化，进而判断按键状态.该 Unit 通过GROVE B端口与M5Core进行通信.

**如下图所示:**

<img src="assets/img/product_pics/unit/button/unit_button_02.webp">

**输出状态:**

<img src="assets/img/product_pics/unit/button/unit_button_03.webp">


## 产品特性

- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x BUTTON Unit
- 1x Grove 线

## 应用

- 灯座开关
- 远程控制开关

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Button_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Button_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Button_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示当前按键状态.</p>
        </div>
    </div>
</div>

## 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>Btn (GPIO36)</td><td>NC (GPIO26)</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>BUTTON Pin</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/button_sch.JPG">

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/BUTTON)

### 2. UIFlow

[请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-button-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>