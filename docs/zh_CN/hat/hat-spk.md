# SPK HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\spk_hat\spk_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\spk_hat\spk_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\spk_hat\spk_hat_03.jpg" width="30%" height="30%">



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

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/SPEAKER/EasyLoader_StickC_HAT_SPK.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

- **UIFlow**
Open http://flow.m5stack.com and Load Demo

<img src="assets\img\product_pics\hat\spk_hat\spk.png">

- **[Arduino](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/SPEAKER)**

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