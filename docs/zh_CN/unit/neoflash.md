# NEOFLASH {docsify-ignore-all}

<el-tag effect="plain">SKU:A042</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/neoflash/unit_neoflash_01.webp"><img src="assets/img/product_pics/unit/unit_neoflash_02.webp"></div>

## 描述

**NEOFLASH** 是一款RGB LED灯板.集成 192 个 RGB LED（24x8），与 PIR 人体感应 Unit,且提供 3 个I2C拓展接口.灯板通过PORT B接口与M5Core进行连接.（RGB LED连接GPIO26、PIR人体感应连接至GPIO36.）灯板背部安装磁铁，可以将其放置在金属物体表面吸附固定.

<img src="assets/img/product_pics/unit/unit_neoflash_03.webp">

人体红外感应PIR传感器接M5Core的GPIO36。

## 产品特性

- 人体感应
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x NeoFlash Unit
- 1x HY2.0-4P线缆

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>x 192</td>
   </tr>
   <tr>
      <td>PORTA接口</td>
      <td>x 3</td>
   </tr>
   <tr>
      <td>孔数量</td>
      <td>40</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>119g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>131g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>220*53*10mm</td>
   </tr>   
   <tr>
      <td>包装尺寸</td>
      <td>220*59*10mm</td>
   </tr>
</table>



## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NEOFLASH.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
<tr><td>M5Core(PORT B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOFLASH Unit</td><td>PIR Pin</td><td>RGB Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 相关链接

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(中文版本)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## 案例程序

### Arduino IDE

该案例将展示基于网络的PIR人体感应时钟.当检测到人体靠近时，灯板点亮显示实时时间，当检测信号消失，则熄灭灯板.

- [请点击此处下载Arduino示例代码](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NEOFLASH_SK6812_PIR)

<img src="assets/img/product_pics/unit/unit_example/NEOFLASH/example_unit_neoflash_01.webp">

### UIFlow

打开 http://flow.m5stack.com 点击 Demo 载入uiflow例程

<img src="assets/img/product_pics/unit/neoflash.webp">


## 相关视频

**Neoflash 在 UIFlow 上的使用**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/NeoFlash/E1%20-%20Neoflash%20%E4%BE%8B%E7%A8%8B%EF%BC%88UIFlow%20Tutorials%202%EF%BC%89.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/neoflash-acrylic-light-board';

   anchor_search(purchase_link);
   scrollFunc();

</script>