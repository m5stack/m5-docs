# RS485 HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U067</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_01.webp"><img src="assets\img\product_pics\hat\rs485_hat\rs485_hat_02.webp"></div>

## 描述

**RS485 HAT** 是一款兼容M5SticKC的RS485转换器.内部集成SP485EEN，主要部分由一个485自动收发器电路和一个DC-DC降压电路组成（可以将输入电压降至5V）

RS485是一种标准，用于定义串行通信系统的驱动器和接收器的电气特性，广泛用于工业领域。 支持多点系统. 

该产品用于将TTL标准转换为RS485标准。 如果外部串行设备是RS485标准，可以通过该模块实现TTL转换RS485协议的实现设备之间的通信.

## 产品特性

- 内置SP485EEN
- 内置自动收发电路
- 内置DC-DC降压电路
- AOZ1282CI
- 输入电压: DC 12 V
- 波特率：115200
- 开发平台: Arduino, UIFlow(Blockly, Python)

## 包含

- 1x RS485 HAT
- 1x 4 Pin 3.96 端子

## 应用

- RS485多点系统
- 工业领域的串行通信.

## 相关链接

-  **Datasheet** - [SP485EEN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)

## 原理图

<img src="assets/img/product_pics/hat/rs485_hat/rs485_hat_04.webp" width="80%" height="80%">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/RS485/EasyLoader_RS485_HAT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

<a href="#zh_CN\uiflow\RS485">RS485使用说明</a>

### Arduino IDE

[请点击此处下载代码](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/RS485)

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>TX</td><td>RX</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RS485_HAT.mp4" type="video/mp4" >
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-rs485-hat-aoz1282ci';
   anchor_search(purchase_link);
   scrollFunc();

</script>ript>