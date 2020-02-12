# PIR HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\pir_hat\pir_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\pir_hat\pir_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\pir_hat\pir_hat_03.jpg" width="30%" height="30%">


## 描述

**PIR Hat**是一款兼容M5SticKC的人体红外传感器,它属于"被动式热释电红外探测器",通过检测由人体或物体发射、反射的红外辐射进行判断工作.当检测到红外时、输出高电平，并进行一段时间的延时（期间保持高电平且允许重复触发）,直至触发信号消失（恢复低电平）.

*注意: 检测触发后存在2秒延时.*

## 产品特性

- 检测距离: 500cm
- 延时时间: 2s
- 感应范围: < 100°
- 静态电流: < 60uA
- 工作温度: -20 - 80 °C

## 包含

- 1x PIR Hat

## 应用

- 人体感应灯具
- 安防产品
- 自动感应电器设置

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_PIR.pdf)**

<img src="assets\img\product_pics\hat\pir_hat\pir_hat_04.jpg" width="50%" height="50%">s

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/PIR/EasyLoader_StickC_HAT_PIR.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)


## 案例程序

- **UIFlow**

打开 http://flow.m5stack.com 点击 Demo 载入uiflow例程

<img src="assets/img/product_pics/hat/pir_hat/pir.png">

- **Arduino**

[点击此处](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/PIR)获取完整程序


### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO36</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT PIR</td><td>OUT</td><td>3.3V</td><td>GND</td></tr>
</table>

<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-unit/products/m5stickccompatible-hat-pir-sensor';


   anchor_search(购买链接);
   scrollFunc();

</script>