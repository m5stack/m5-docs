# NEOFLASH {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_neoflash_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_neoflash_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.36da425eorzBcg&id=582828472414)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.3b86425eaoE9zU&id=585289225333)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

## 描述

**<mark>NEOFLASH</mark>**是24x8阵列的Neopixel RGB LED面板。一共有192颗RGB LED。NEOFLASH上RGB LED接M5Core的GPIO26, 左上角是第一个颗LED，LED递增顺序为从左到右，从上到下。NEOFLASH还配置了3个GROVE A接口(IIC接口)方便结合Neoflash做拓展应用。

<img src="assets/img/product_pics/unit/unit_neoflash_03.png">

人体红外感应PIR传感器接M5Core的GPIO36。

## 特性

- RGB LED灯数: 192
-  GROVE接口，支持[UIFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[FastLED库说明](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED参考(中文)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## 例程

### 1. Arduino IDE

这是一个从网络上获取实时时间，并在NEOFLASH上显示的例程。当感应到有人在NEOFLASH前晃动时，显示实时时间，否则时间"消失"。

*如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOFLASH/Arduino)。*

<img src="assets/img/product_pics/unit/unit_example/NEOFLASH/example_unit_neoflash_01.png">

### 管脚映射

<table>
<tr><td>M5Core(GROVE接口B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOFLASH Unit</td><td>PIR引脚</td><td>RGB引脚</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**Neoflash 在 UIFlow 上的使用**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/NeoFlash/E1%20-%20Neoflash%20%E4%BE%8B%E7%A8%8B%EF%BC%88UIFlow%20Tutorials%202%EF%BC%89.mp4" type="video/mp4">
</video>

**Neoflash 的演示 - 闹钟**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20NeoFlash.mp4" type="video/mp4">
</video>
