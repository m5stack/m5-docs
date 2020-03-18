# SPK HAT

<div class="product_pic"><img src="assets\img\product_pics\hat\spk_hat\spk_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\spk_hat\spk_hat_02.jpg" width="30%" height="30%"></div>

## 描述

**SPK Hat**是一款兼容M5SticKC的扬声器,内置PAM8303功放IC（3W单通道D类音频功率放大器），高PSRR和差分输入消除了噪声和射频的干扰，因此能够高质量低失真的还原音频信号.

## 产品特性

- 超低EMI干扰，在300MHz处比FCC B类标准好20dB
- 5V电源电压下，带4Ω负载输出功率3W，总谐波失真10％
- 无输入时超低噪声
- 电源电压2.8V～5.5V
- 短路保护

## 包含

- 1x SPK Hat

## 应用

- MP4/MP3

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_SPK.pdf)**

<img src="assets\img\product_pics\hat\spk_hat\spk_hat_04.jpg" width="50%" height="50%">

## 相关链接

- **[PAM8303 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/PAM8303_en.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_Speaker_HAT.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/SPK_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>驱动SPK HAT扬声器每秒播放一次音调.</p>
        </div>
    </div>
</div>

## 案例程序

- **UIFlow**

打开 http://flow.m5stack.com 加载Demo示例

<img src="assets\img\product_pics\hat\spk_hat\spk.png">

- **Arduino**

[点击此处下载Arduino示例代码](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/SPEAKER)

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT SPK</td><td>SD</td><td>IN-</td><td>3.3V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-speaker-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>