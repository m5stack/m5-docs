# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.png" alt="gray_02" width="400" height="400">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stickc/m5stickc_quick_start_with_arduino_Windows)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.12.7807425e3JNPRr&id=588710395351)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

<mark>**M5StickC**</mark> 是一个包含 0.96 寸 **TFT 彩屏** (80 x 160 分辨率)、**红色** LED 灯、按键、**麦克风**、红外发射管、六轴姿态传感器 (SH200Q) 和 80mAH 的电池的小型 **ESP32 开发板**。M5StickC 内的 ESP32 模组 **ESP32-Pico** 还内置了 4MB 的flash。如果 M5StickC 装配上表带底座和表带，你可以将它戴在手腕上。

**开关机操作：**

* 开机：按复位按键，持续至少 2 秒

* 关机：按复位按键，持续至少 6 秒

**注意：**

* M5StickC 支持的波特率: 1200 ~115200, 250K, 500K, 750K, 1500K

* 外壳颜色只有橙色在售

## 特性

-  支持可编程操作: Arduino, UIFlow (Blockly, MicroPython)

## 管脚映射

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_06.png" alt="gray_02" width=30% height=30%>

**红色 LED & 红外发射管 IR & 按键 BUTTON A & 按键 BUTTON B**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>红色 LED</td><td>LED 管脚</td><td> </td><td> </td><td> </td></tr>
 <tr><td>红外发射管 IR</td><td> </td><td>发射管引脚</td><td> </td><td> </td></tr>
<tr><td>按键 BUTTON A</td><td> </td><td> </td><td>按键管脚</td><td> </td></tr>
<tr><td>按键 BUTTON B</td><td> </td><td> </td><td> </td><td>按键管脚</td></tr>
</table>

**TFT 屏幕**

*驱动芯片：ST7735S*

*分辨率：80 * 160*

<table>
 <tr><td>ESP32 芯片</td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFT 屏幕</td><td>TFT_MOSI</td><td>TFT_CLK</td><td>TFT_DC</td><td>TFT_RST</td><td>TFT_CS</td></tr>
</table>

**GROVE 接口**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE 接口</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**麦克风 MIC (SPM1423)**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>麦克风 MIC</td><td>SCL</td><td>SDA</td></tr>
</table>

**六轴姿态传感器 (SH200Q) & 电源管理芯片 (AXP192)**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>六轴姿态传感器</td><td>SCL</td><td>SDA</td>
 <tr><td>电源管理芯片</td><td>SCL</td><td>SDA</td>
</table>

**M5StickC 顶部拓展的 IO 口**

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" alt="gray_02" width=100% height=100%>

## 包含

-  1x M5StickC 内置 80mAh-Battery

## 相关链接

-  **数据手册**

    - [ESP32-PICO](https://github.com/m5stack/M5-Schematic/blob/master/Core/esp32-pico-d4_datasheet_cn.pdf) - [ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)

    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf) - [AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet%20v1.13_cn.pdf) - [SPM1423](https://pdf1.alldatasheet.com/datasheet-pdf/view/546596/KNOWLES/SPM1423HM4H-B.html)

## 例程

* **Arduino**

    - [M5StickC 出厂测试例程](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

## 相关视频

- **M5StickC 的案例 - 计数器**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" type="video/mp4">
</video>

- **M5StickC 的案例 - 3D 鼠标**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/StickC/3D_Mouse.mp4" type="video/mp4">
</video>

- **M5StickC 的案例 - 测试 DSD**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Simple_Watch_Device.mp4" type="video/mp4">
</video>

- **M5StickC 的案例 - 驱动蜂鸣器**


<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Connect-passive-buzzer-to-M5StickC.mp4" type="video/mp4">
</video>
