# NEOPIXEL {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A035</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_neopixel.webp"></div>

## 描述

**RGB LED** 是一款可编程灯条，采用灯珠SK6812.该灯条支持数字寻址，这意味着你可以单独控制灯条上的每一个单独的LED灯显示的颜色、亮度.使用单总线编程，可进行灯条拓展.需要注意的是，随着灯条连接数量的逐渐增加，伴随的功耗也会增加，因此在使用LED个数较多的RGB LED灯条时，需要额外为其提供电源.

注意：在连接时请留意输入端口与输出端口的方向.输入端口用作连接接M5Core，或RGB LED延长拓展

<img src="assets/img/product_pics/unit/unit_neopixel_02.webp">

## 产品特性

- 可选长度: 10cm/20cm/0.5m/1m/2m
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 可拓展长度

## 包含

- 1x RGB LED Unit

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NEOPIXEL.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOPIXEL Unit</td><td>/</td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 相关链接

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(中文版本)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/RGB_LED_SK6812/display_rainbow)

<img src="assets/img/product_pics/unit/unit_example/NEOPIXEL/example_unit_neopixel_02.webp">

### 2. UIFlow

[请点击此处下载UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/NEOPIXEL/example_unit_neopixel_01.webp">


## 相关视频

**Neopixel 的演示 - 01**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5stack%20Neopixel%20Cosplay%20costume%20lights%20-%20super%20simple.mp4" type="video/mp4">
</video>

**Neopixel 的演示 - 02**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Akela%20Weapons.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/neopixel-rgb-leds-cable';

   anchor_search(purchase_link);
   scrollFunc();

</script>