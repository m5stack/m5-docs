# RGB {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U003</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png"></div>

## 描述

**RGB** 是一款 LED 灯 Unit.集成了3颗可编程的LED灯,通过程序能够自定义其发出的颜色与亮度.支持串接多个RGB Unit 进行拓展,你可以将其运用在STEM课堂制作一些有趣的应用，如交通信号灯.或是将其运用在其他的应用项目中充当状态指示灯使用.

## 产品特性

- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x RGB Unit
- 1x Grove 线

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RGB.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino)

### 2. UIFlow

[请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/RGB/example_unit_rgb_01.png">

<!-- ## 原理图 -->

<!-- <img src="assets/img/product_pics/unit/rgb_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td>/</td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/rgb-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>