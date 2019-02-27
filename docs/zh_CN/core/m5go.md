# M5GO IOT Starter Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_04" width="250" height="250">

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.1b28425eUFn3DY&id=568283585553)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>M5GO IOT Starter Kit</mark>** 是一款以白色 M5Core 主控为核心，附带 6个units(ENV, IR, RGB, PIR, ANGLE, HUB) 和 [M5GO 底座](zh_CN/base/m5go_bottom)的物联网开发套件。

你可以用 [UiFlow](http://flow.m5stack.com) 或 Arduino IDE 对它编程。

我们也提供了一些物联网开发课程方便你更快上手使用，如果你对这个感兴趣的话，欢迎给我司发邮件 <tech@m5stack.com>。

<!-- **充电指示说明：**在充电过程中，底座上的红色 LED 会闪烁，充满了常亮。

<img src="assets/img/product_pics/core/m5go/m5go_07.png" width="50%" height="50%"><img src="assets/img/product_pics/core/m5go/m5go_08.png" width="50%" height="50%"> -->

## 特性

-  可编程，支持 [UiFlow](http://flow.m5stack.com), MicroPython 和 Arduino
-  支持外置TF卡 (最大16G)

## 外设的管脚映射

#### 主板管脚

**LCD 屏幕 & TF 卡**

*LCD像素：320x240*
*TF卡最大支持16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF卡</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**按键 & 喇叭**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>按键引脚</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>喇叭</td><td> </td><td> </td><td> </td><td>喇叭引脚</td></tr>
</table>

**GROVE 接口 A**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**九轴姿态传感器 MPU9250**

*I2C地址为0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

#### M5GO 底座管脚

**GROVE 接口 B**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE B</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>

**GROVE 接口 C**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LED 灯条 & 麦克风 MIC**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td><td>GPIO25</td></tr>
 <tr><td>LED灯条</td><td>SIG管脚</td><td> </td><td> </td></tr>
 <tr><td>麦克风MIC</td><td> </td><td>MIC管脚</td><td> </td></tr>
</table>

## 参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash闪存</td>
      <td>16MB Flash</td>
   </tr>
   <tr>
      <td>输入电压</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD屏幕</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342</td>
   </tr>
   <tr>
      <td>喇叭</td>
      <td>1W-0928</td>
   </tr>
      <tr>
      <td>麦克风</td>
      <td>MEMS Analog BSE3729 Microphone</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>SK6812 3535 RGB LED x 10</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU9250</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>550mAh @ 3.7V, inside  vb</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>54 x 54 x 21 mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

**<mark>注意：</mark>**

*我们有 Core 有几个版本，下图是它们主要区别的比较。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04_zh_CN.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05_zh_CN.png">

## 包含

-  1x white M5Core主控
-  1x M5GO 底座
-  6x Units(ENV, IR, RGB, PIR, ANGLE, HUB)
-  4x LEGO 接插件
-  3x GROVE 线
-  Type-C USB 线
-  说明书

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 相关视频

- **m5stack 的简介**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzkzMjQ4NzIyOA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>