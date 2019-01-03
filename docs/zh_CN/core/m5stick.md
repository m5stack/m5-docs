# M5Stick

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_01.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="250" height="250">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stick_get_started_arduino)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.257b425esTi92S&id=581055502939)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

<mark>**M5Stick**</mark> 是一个包含1.3寸OLED屏幕(64x128)，LED灯，按键，蜂鸣器，红外发射管和80mA的电池的小型ESP32开发板。你通常可以将它戴在手腕上，也可以利用我们的配件将它固定到墙上。

M5Stick有两个版本，灰色外壳是无PSRAM的版本，白色外壳是有MPU9250的版本，附送一些配件(`WATCH BELT`, `WALL` 和 `BRICK`)。

## 特性

-  支持可编程操作: Arduino, UiFlow(Blockly, MicroPython)
-  编程板可穿戴
-  可选：MEMS(MPU9250)

## 管脚映射

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

**可选:**

<table>
 <tr><td>ESP32芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>九轴姿态传感器MPU9250</td><td>SCL</td><td>SDA</td>
</table>

## 包含

-  1x M5Stick 内置 80mAh-Battery
-  1x Type-C USB 线

**MPU9250 版本:**
-  一些配件: `WATCH BELT`, `WALL` and `BRICK`

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

## 相关视频

- **m5stack的简介**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzkzMjQ4NzIyOA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>