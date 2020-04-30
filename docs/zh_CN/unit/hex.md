# HEX

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A045</div>

<div class="product_pic"><img src="assets\img\product_pics\unit\hex\unit_hex_01.webp"><img src="assets\img\product_pics\unit\hex\unit_hex_02.webp"></div>

## 描述

**HEX** 是一款六边形Neopixel灯板.一共嵌入37个Neopixel灯珠，提供输入、输出端口，这意味着你可以将多个Neopixel进行串联.

以下为HEX灯板中的LED布局排序方式

<img src="assets\img\product_pics\unit\hex\unit_hex_05.webp" width="50%">

## 产品特性

- LED颜色数量：16.7万色
- 开发平台: Arduino,UIFlow(Blockly & python)

## 包含

- 1x HEX Unit
- 1x Grove 线

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>WS2812 x 37</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>50mm x 80mm x 10mm</td>
   </tr>
   <tr>
      <td>重量</td>
      <td>6g</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_HEX_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_HEX_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/HEX_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>HEX Unit灯板显示彩虹渐变色.</p>
        </div>
    </div>
</div>

### 管脚映射

**HEX 连接到 GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td>/</td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**HEX 连接到 GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td>/</td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**HEX 连接到 GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td>/</td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/hex/unit_hex_04.webp" width="50%">


## 案例程序

### 1. Arduino IDE

在Arduino中使用第三库FastLED，能够为你的Neopixel提供出色的灯光特效.在进行程序编译前，需要安装FastLED，并将HEX连接到GROVE A.

Neopixel Library on Arduino

  - [FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)

  - [FastLED Reference(中文版本)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)

  - [请点击此处下载Arduino示例代码](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/HEX_SK6812)

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_03.webp">

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_01.webp" width="50%" height="50%"> <img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_02.webp" width="30%" height="30%">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/hex-neopixel-led-board';


   anchor_search(purchase_link);
   scrollFunc();

</script>