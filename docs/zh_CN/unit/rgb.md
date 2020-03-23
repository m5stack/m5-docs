# RGB {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U003</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png"></div>

## 描述

**RGB** 是一款 LED 灯 Unit.集成了3颗可编程的LED灯,通过程序能够自定义其发出的颜色与亮度.支持串接多个RGB Unit 进行拓展,你可以将其运用在STEM课堂制作一些有趣的应用，如交通信号灯.或是将其运用在其他的应用项目中充当状态指示灯使用.

## 产品特性

- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x RGB Unit
- 1x Grove 线

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_RGB_UNIT_With_M5Core.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/RGB_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>驱动RGB LED点亮不同颜色.</p>
        </div>
    </div>
</div>

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino)

### 2. UIFlow

[请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/RGB/example_unit_rgb_01.png">

<!-- ## 原理图 -->

<!-- <img src="assets/img/product_pics/unit/rgb_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td>/</td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/rgb-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>