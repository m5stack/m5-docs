# M5Stick {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="300" height="300">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="gray_02" width="300" height="300">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.257b425esTi92S&id=581055502939)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

<mark>**M5Stick**</mark> 是一个包含1.3寸OLED屏幕(64x128)，LED灯，按键，蜂鸣器，红外发射管和80mA的电池的小型ESP32开发板。你通常可以将它戴在手腕上，也可以利用我们的配件将它固定到墙上。

M5Stick有两个版本，白色外壳是无 MPU9250 的版本，灰色外壳是有 MPU9250 的版本，附送一些配件(`WATCH BELT`, `WALL` 和 `BRICK`)。

## 特性

-  支持可编程操作: Arduino, UIFlow(Blockly, MicroPython)
-  编程板可穿戴
-  灰色版本：MEMS(MPU9250)

## 管脚映射

 <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="300" height="300">

**蓝色LED&按键BUTTON&蜂鸣器BUZZER&红外发射管IR**

<table>
 <tr><td>ESP32芯片</td><td>GPIO17</td><td>GPIO19</td><td>GPIO26</td><td>GPIO35</td></tr>
 <tr><td>红外发射管IR</td><td>发射管引脚</td><td> </td><td> </td><td> </td></tr>
 <tr><td>蓝色LED</td><td> </td><td>LED管脚</td><td> </td><td> </td></tr>
<tr><td>蜂鸣器BUZZER</td><td> </td><td> </td><td>蜂鸣器管脚</td></tr>
<tr><td>按键BUTTON</td><td> </td><td> </td><td> </td><td>按键管脚</td></tr>
</table>

**OLED屏幕**

<table>
 <tr><td>ESP32芯片</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td>
 <tr><td>OLED屏幕</td><td>CS</td><td>DC</td><td>RST</td>
</table>

**GROVE接口**

<table>
 <tr><td>ESP32芯片</td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE接口</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**灰色版本:**

<table>
 <tr><td>ESP32芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>九轴姿态传感器MPU9250</td><td>SCL</td><td>SDA</td>
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

    - [M5Stick 手表](https://github.com/m5stack/StickWatch)

        <video width="500" height="315" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20Watch.mp4" type="video/mp4">
        </video>

* **UIFlow**

    - [白色方块游戏](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)

## 相关视频

- **m5stick 的案例 - 控制空调**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" type="video/mp4">
</video>
