# 灰色升级版M5Core

:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)** | :bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)** | :electric_plug:**[Schematic](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)** | 🛒**[Purchase](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-1172588101.23.f64c4476tugBw5&id=559226082388)**|**[M-Bus](#mbus)**

## 描述

**M5Core GRAY**是一款基于**ESP32**芯片(集成Wi-Fi和蓝牙)的灰色开发板，内置MEMS传感器(**MPU9250**)。你可以用[UiFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/)和[Arduino](http://www.arduino.cc)来编程它.

这个灰色主板包含3个按键、喇叭、LCD(320x240)、TF卡插槽、九轴陀螺仪MPU9250。

底座的设计用于拓展M-Bus总线的Pin管脚出来，以方便DIY和产品设计，每个Pin脚都引出来做成了排针或排母形式，非常方便(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34这几个关于I2S功能的引脚没引出)。


## 特性

-  可编程，支持[UiFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/)和[Arduino](http://www.arduino.cc)
-  支持外置TF卡(最大16G)

## 外设的管脚映射

*我们有几种M5Core的版本，点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_diff_between_m5cores_zh_CN.md)查看他们在硬件配置上比较*

**LCD屏幕&TF卡**

*LCD像素：320x240*
*TF卡最大支持16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF卡</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>

</table>

**按键&喇叭**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>按键引脚</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>喇叭</td><td> </td><td> </td><td> </td><td>喇叭引脚</td></tr>
</table>

**GROVE接口A**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td></tr>
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
      <td>4M-Bytes</td>
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

## 包含

-  1x M5Stack GRAY 主控
-  1x M5Core 底座
-  Type-C USB 线
-  说明书

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

<img src="assets/img/product_pics/core/gray/gray_01.jpg" alt="gray_01" width="250" height="250"> <img src="assets/img/product_pics/core/gray/gray_02.jpg" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/gray/gray_03.jpg" alt="gray_03" width="250" height="250">

<img src="assets/img/product_pics/core/gray/gray_04.jpg" alt="gray_04" width="65%" height="65%">

<figure>
  <img src="assets/img/product_pics/core/gray/gray_05.jpg" alt="gray_05" width="40%" height="40%">
</figure>

<!-- <figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="basic_05" width="40%" height="40%">
</figure> -->

<span id = "mbus"></span>

**M-Bus总线**

<figure>
  <!-- <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="300" height="231">
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="400" height="308"> -->
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="500" height="385">
</figure>