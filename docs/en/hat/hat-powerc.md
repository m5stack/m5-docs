# PowerC HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U081</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\PowerC_hat\powerC_01.webp"><img src="assets\img\product_pics\hat\PowerC_hat\powerC_02.webp"></div>

## Description

**PowerC HAT** is a charging module specially designed for m5stickc, with built-in ip3005 high-precision lithium battery protection IC and ip5209 power management IC. It uses I2C communication protocol to carry out data transmission with m5stickc of the host computer, and can check the voltage, current and other information through programming. The back battery seat of the module can be installed with two 16340 batteries, which can be charged by the charging module, and can also be used as a charging treasure to provide external power through the battery In addition, the module provides an I2C interface for connecting I2C peripherals, a typec interface for power input, a usb-a bus for power output, with a voltage output of 5V / 1.5A and an input voltage of 5V. The module is equipped with an independent switch, which can be opened once and closed twice.

<img src="assets\img\product_pics\hat\PowerC_hat\powerC_04.webp" width="30%">

## Product Features

- Battery testing

- Mobile power bank

- Battery charger

- IIC Address 0x75

- Dimension：55mm x 35mm

- Weight：19g

## Include

- 1x PowerC HAT(include battery 2 * 750mAh)

## Communication protocol

<mark>I2C address: 0x75</mark>

## Links

- **[IP5209 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/IP5209.pdf)**
- **[IP3005 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/IP3005-INJOINIC.pdf)**

## Example

- **UIFlow**

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/PowerC/UIFlow)

<img src="assets\img\product_pics\hat\PowerC_hat\PowerC.png" width="80%">

- **Arduino**

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/PowerC/PowerC)

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_PowerC_HAT.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PowerC_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>检测当前底座电池电压以及电量信息.</p>
        </div>
    </div>
</div>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-powerc';

   anchor_search(purchase_link);
   scrollFunc();

</script>