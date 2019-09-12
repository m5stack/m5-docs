# Unit RGB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_rgb.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/rgb-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**RGB** 是一款 LED 灯 Unit.集成了3颗可编程的LED灯,通过程序能够自定义其发出的颜色与亮度.支持串接多个RGB Unit 进行拓展,你可以将其运用在STEM课堂制作一些有趣的应用，如交通信号灯.或是将其运用在其他的应用项目中充当状态指示灯使用.

## 产品特性

- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x RGB Unit
- 1x Grove 线

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RGB.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/Arduino).*

```arduino
/*
    Install the AdaFruit NeoPixel library first
 */
#include <Adafruit_NeoPixel.h>

#define RGB_PIN 26
#define NUMPIXELS   3

// new a object
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB+NEO_KHZ800);

int delayval = 150;// delay for half a second

// initialization
pixels.begin(); // This initializes the NeoPixel library.

// display rgb
pixels.setPixelColor(0, pixels.Color(100,0,0));//parameter = (rgb index, color)
pixels.setPixelColor(1, pixels.Color(0,100,0));
pixels.setPixelColor(2, pixels.Color(0,0,100));
pixels.show(); // This sends the updated pixel color to the hardware.
```

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RGB/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/RGB/example_unit_rgb_01.png">

<!-- ## 原理图 -->

<!-- <img src="assets/img/product_pics/unit/rgb_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RGB Unit</td><td>/</td><td>Signal Pin</td><td>5V</td><td>GND</td></tr>
</table>