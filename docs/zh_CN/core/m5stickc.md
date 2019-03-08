# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.257b425esTi92S&id=581055502939)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

<mark>**M5StickC**</mark> 是一个包含 0.96 寸 **TFT 彩屏**(80 x 160 分辨率)、LED 灯、按键、**麦克风**、红外发射管、六轴姿态传感器 (SH200Q)和 80mAH 的电池的小型 ESP32 开发板。M5StickC 内的 ESP32 模组还内置了 4MB 的flash。你通常可以将它戴在手腕上，也可以利用我们的配件将它固定到墙上。

M5Stick有两个版本，白色外壳是无 MPU9250 的版本，灰色外壳是有 MPU9250 的版本，附送一些配件(`WATCH BELT`, `WALL` 和 `BRICK`)。

## 特性

-  支持可编程操作: Arduino, UIFlow(Blockly, MicroPython)
-  编程板可穿戴

## 管脚映射

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_02.png" alt="gray_02" width="250" height="250">

**红色 LED & 按键 BUTTON A & 按键 BUTTON B & 红外发射管 IR**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td><td>GPIO10</td></tr>
 <tr><td>红色 LED</td><td>LED 管脚</td><td> </td><td> </td><td> </td></tr>
<tr><td>按键 BUTTON A</td><td> </td><td>按键管脚</td><td> </td><td> </td></tr>
<tr><td>按键 BUTTON B</td><td> </td><td> </td><td>按键管脚</td><td> </td></tr>
<tr><td>红外发射管 IR</td><td> </td><td> </td><td> </td><td>发射管引脚</td></tr>
</table>

**TFT 屏幕**

<table>
 <tr><td>ESP32芯片</td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFT 屏幕</td><td>CS</td><td>DC</td><td>RST</td></tr>
</table>

**GROVE 接口**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE 接口</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**麦克风 MIC**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>麦克风 MIC</td><td>SCL</td><td>SDA</td></tr>
</table>

**六轴姿态传感器 SH200Q**

<table>
 <tr><td>ESP32芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>六轴姿态传感器 SH200Q</td><td>SCL</td><td>SDA</td>
</table>

**<mark>注意：</mark>**

*我们有Core有几个版本，下图是它们主要区别的比较。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">

## 包含

-  1x M5Stick 内置 80mAh-Battery
-  1x Type-C USB 线

**灰色版本:**
-  一些配件: `WATCH BELT`, `WALL` and `BRICK`

## 原理图

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

完整原理图请点击[这里](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick)。

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 例程

* **Arduino**

    - [M5Stick 出厂测试例程](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)

    - [M5Stick 手表](https://github.com/eggfly/StickWatch)

        <iframe height=498 width=510 src='https://player.youku.com/embed/XNDAzMjE0ODY0NA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* **UIFlow**

    - [白色方块游戏](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)

## 相关视频

- **m5stick 的案例 - 控制空调**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
