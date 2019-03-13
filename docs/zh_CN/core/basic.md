# 基础版本M5Core {docsify-ignore-all}

<img src="assets/img/product_pics/core/basic/basic_02.png" alt="basic_02" width="350" height="350"> <img src="assets/img/product_pics/core/basic/basic_03.png" alt="basic_03" width="350" height="350">

<!-- <img src="assets/img/product_pics/core/basic/basic_06.png" width="250" height="250"> -->

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.11.2bb86d62zW1YQG&id=557295147801&abbucket=8)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**M5Core BASIC** 是一款基于 **ESP32** 芯片(集成 Wi-Fi 和蓝牙)的基础版开发板，包括黑色的主板和[底座](zh_CN/base/core_bottom)。你可以用 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/) 或 [Arduino](http://www.arduino.cc) 来编程它.

这个黑色主板包含 3 个按键、喇叭、LCD (320x240)、 TF 卡插槽。底座的设计用于拓展 M-Bus 总线的Pin 管脚出来，以方便 DIY 和产品设计，每个 Pin 脚都引出来做成了排针或排母形式，非常方便 (GPIO0, GPIO12, GPIO13, GPIO15, GPIO34 这几个关于 I2S 功能的引脚没引出)。

**注意，这款基础版 M5Core 不包含任何陀螺仪等姿态传感器**

<img src="assets/img/product_pics/core/basic/basic_07.png" width="350" height="350"><img src="assets/img/product_pics/core/basic/basic_08.png" width="350" height="350">

<!-- <img src="assets/img/product_pics/core/basic/basic_09.png" width="350" height="350"> -->

## 特性

-  可编程，支持 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/) 和 [Arduino](http://www.arduino.cc)
-  支持外置 TF 卡(最大 16G)

## 外设的管脚映射

**LCD 屏幕 & TF 卡**

*LCD 像素：320x240*
*TF 卡最大支持 16GB*

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

**GROVE 接口 A & IP5306**

*电源管理芯片 (IP5306) 是定制 I2C 版本，它的 I2C 地址是 0x75。点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)查看 IP5306 的寄存器手册。*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IP5306</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
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
      <td>16MB (旧: 4MB)</td>
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
      <td>电池</td>
      <td>150mAh @ 3.7V</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>54 x 54 x 12.5 mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
   <tr>
      <td>重量</td>
      <td>120g with bottom, 100g only core</td>
   </tr>
</table>

**<mark>注意：</mark>**

*我们有 Core 有几个版本，下图是它们主要区别的比较。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">

## 包含

-  1x M5Stack BASIC 主控
-  1x M5Core 底座
-  10x 杜邦线
-  Type-C USB 线
-  说明书

<img src="assets/img/product_pics/core/basic/basic_04.png" alt="basic_04" width="80%" height="80%">

<!-- <img src="assets/img/product_pics/core/basic/basic_06.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_07.png" width="250" height="250"> -->

<!-- <img src="assets/img/product_pics/core/basic/basic_09.png" width="250" height="250"> -->

<img src="assets/img/product_pics/core/basic/basic_10.png" width="50%" height="50%">

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

## 相关视频

**M5Stack的简介**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzkzMjQ4NzIyOA==' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**M5Core 的作品**

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_compass.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Compass.mp4)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_imu.png)](https://v.youku.com/v_show/id_XNDAxNDMwMjAyNA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_avatar.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Avatar%20Custom%20Face.mp4)

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_voice_recognition.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Voice-Recognize.mp4)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_smart_electric_monitor.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5stack%20Smart%20Electric%20Monitor.mp4)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_smart_home.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Smart%20Home.mp4)

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_leap_motion.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Motion%20Detector.mp4)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_microphone_alexa.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5stack%20Microphone%20.mp4)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_robot.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Robot.mp4)



<!-- [![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_neogeo_mini_controller.png)](https://v.youku.com/v_show/id_XNDAxNDI3ODk5Ng==.html?spm=a2hzp.8253869.0.0) -->




<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->


<!-- **语音识别**&nbsp; &nbsp; &nbsp; &nbsp; **与 Alexa 的互动**

<iframe height=249 width=255 src='https://player.youku.com/embed/XNDAxNDMwNzU5Mg==' frameborder="0" allow="accelerometer; autoplay; " allowfullscreen></iframe> <iframe height=249 width=255 src='https://player.youku.com/embed/XNDAxNDMwNTYxNg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**M5Core 的演示 - 语音识别**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**与 Alexa 的互动**

<iframe height=249 width=255 src='https://player.youku.com/embed/XNDAxNDI4MjU5Mg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe height=249 width=255 src='https://player.youku.com/embed/XNDAxNDI3ODk5Ng==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**M5Core 的演示 - 语音识别**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**与 Alexa 的互动**

<iframe height=249 width=255 src='https://player.youku.com/embed/XNDAxNDI3Njc5Ng==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe height=249 width=255 src='https://player.youku.com/embed/XNDAxNDI4NTQ0NA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->



<!-- **M5Core 的演示 - 与 Alexa 的互动** -->

<!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDMwNTYxNg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- **M5Core 的演示 - 与 Leap Motion 的结合** -->

<!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI4MjU5Mg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- **M5Core 的演示 - 与 NeoGeo Mini 控制器的结合** -->

<!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI3ODk5Ng==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- **M5Core 的演示 - 与 电子琴的结合** -->

<!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI3Njc5Ng==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- **M5Core 的演示 - 智能电子仪表** -->

<!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI4NTQ0NA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->