# ADC HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U069</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\adc_hat\adc_hat_01.webp"><img src="assets\img\product_pics\hat\adc_hat\adc_hat_02.webp"></div>

## 描述

**ADC Hat**是一款兼容M5SticKC的AD转换模块，内部集成ADC转换芯片ADS1100，具备全差分、16位、自校准、Δ-Σ模/ 数转换等特性,使得用户能够非常轻松的获得精确的测量结果.ADS1100包含一个具有可调增益的Δ-Σ A / D转换器内核，一个时钟发生器和一个I2C接口,允许-5~ + 5V的差分输入，但我们通过增加该IC的外围电路设计将输入限制为0~12V

## 产品特性

- 输入电压: 0-12V
- 开发平台: Arduino, UIFlow(Blockly, MicroPython)
- ADS1100: 
    - 16位无漏失码
    - 连续自校准
    - 单循环转换
    - 内置可编程增益放大器（增益倍数 = 1, 2, 4, 8）
    - 低噪声：4μVp-p
    - 可编程数据速率：8SPS至128SPS
    - 内部系统时钟
    - I2C 接口

## 包含

- 1x ADC HAT
- 1x 2 Pin 3.96 端子

## 应用

-  模拟信号捕获

## 相关链接

-  **Datasheet** - [ADS1100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/ads1100_en.pdf)

## 原理图

<img src="assets/img/product_pics/hat/adc_hat/adc_hat_04.webp" width="80%" height="80%">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ADC/EasyLoader_ADC_HAT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

- **UIFlow**

打开 http://flow.m5stack.com 点击Demo载入UIFlow例程

<img src="assets/img/product_pics/hat/adc_hat/adc.webp" width="80%" height="80%">

- **Arduino IDE**

以下代码仅为片段，如需获取完整代码，[请点击此处.](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/ADC)

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ADC-DAC-HAT.mp4" type="video/mp4" >
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-adc-hat';


   anchor_search(purchase_link);
   scrollFunc();

</script>

