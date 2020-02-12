# Unit HEX {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_hex_01.jpg" width="30%" height="30%">



## 描述

**HEX** 是一款六边形Neopixel灯板.一共嵌入37个Neopixel灯珠，提供输入、输出端口，这意味着你可以将多个Neopixel进行串联.


以下为HEX灯板中的LED布局排序方式

<img src="assets/img/product_pics/unit/unit_hex_03.png">

<br>
<img src="assets/img/product_pics/unit/hex/unit_hex_04.jpg">

## 产品特性

- LED灯总数: 37
- 开发平台: Arduino,UIFlow(Blockly & python)

## 包含

- 1x HEX Unit
- 1x Grove 线

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_HEX.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 案例程序

- **UIFlow**



### Arduino IDE

在Arduino中使用第三库FastLED，能够为你的Neopixel提供出色的灯光特效.在进行程序编译前，需要安装FastLED，并将HEX连接到GROVE A.

Neopixel Library on Arduino

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(中文版本)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/Arduino)。*

```arduino
/*
    Install FastLED library first.(HEX is connected to GROVE A)
 */
#include <M5Stack.h>
#include "FastLED.h"

#define Neopixel_PIN    21
#define NUM_LEDS    37

CRGB leds[NUM_LEDS];
uint8_t gHue = 0;

void setup() {
  Serial.begin(115200);
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextColor(YELLOW); M5.Lcd.setTextSize(2); M5.Lcd.setCursor(40, 0);
  M5.Lcd.println("HEX Example");
  M5.Lcd.setTextColor(WHITE);
  M5.Lcd.setCursor(0, 25);
  M5.Lcd.println("Display rainbow effect");

  // Neopixel initialization
  FastLED.addLeds<WS2811,Neopixel_PIN,GRB>/
                        (leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(10);
}

void loop(){
    fill_rainbow( leds, NUM_LEDS, gHue, 7);
    FastLED.show();// must be executed for neopixel becoming effective
    EVERY_N_MILLISECONDS( 20 ) { gHue++; }
}
```

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_03.png">

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_01.png" width="50%" height="50%"> <img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_02.png" width="30%" height="30%">

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


<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-unit/products/hex-neopixel-led-board';


   anchor_search(购买链接);
   scrollFunc();

</script>