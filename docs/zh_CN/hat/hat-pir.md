# PIR HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U054</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\pir_hat\pir_hat_01.webp"><img src="assets\img\product_pics\hat\pir_hat\pir_hat_02.webp"></div>

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

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>12g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*25*20mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>40*42*30mm</td>
   </tr>
 </table>

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_PIR.pdf)**

<img src="assets\img\product_pics\hat\pir_hat\pir_hat_04.webp" width="50%" height="50%">s


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_PIR_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_PIR_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PIR_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>实时显示显示PIR HAT监测电平.</p>
        </div>
    </div>
</div>

## 案例程序

- **UIFlow**

打开 http://flow.m5stack.com 点击 Demo 载入uiflow例程

<img src="assets/img/product_pics/hat/pir_hat/pir.webp">

- **Arduino**

[点击此处](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/PIR)获取完整程序


### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO36</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT PIR</td><td>OUT</td><td>3.3V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickccompatible-hat-pir-sensor';


   anchor_search(purchase_link);
   scrollFunc();

</script>