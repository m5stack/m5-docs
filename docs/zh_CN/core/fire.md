# FIRE {docsify-ignore-all}

<img src="assets/img/product_pics/core/fire/product_pic_fire.png" alt="fire_01" width="350" height="350"> <img src="assets/img/product_pics/core/fire/m5_fire_01.png" width="350" height="350">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.bcec425e3VR4TD&id=571494244869)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**M5Stack FIRE Kit** 是M5Stack开发套件系列中的一款，主打高性能的开发套件.它作为Gray套件的升级版，除了内置9轴IMU传感器之外，它还提供了更多的硬件资源：16M Flash, 4M PSRAM, 增强型 Base（M5GO 底座和M5GO 充电底座），更大容量的电池等.对于对硬件性能方面有所要求的开发者来说,Fire是一个非常不错的选择.

我们可以在很多的应用场景中使用IMU姿态传感器用作:检测加速度、角度、轨迹延伸等数据.根据这些去制作出相关的产品，如运动数据采集器，3D远程手势控制器等.


<img src="img/m5go_charger_10.png" width="50%" height="50%"><img src="img/m5go_charger_09.png" width="50%" height="50%">

M5Stack Fire 配有三个可分离部件. 顶部与其他的M5主机一样，放置了电路板，芯片，LCD屏幕，2.4G天线，，各种电子元器件以及一些接口组件.中间部分称为 [M5GO 底座](https://docs.m5stack.com/#/zh_CN/base/m5go_bottom)，提供锂电池，[M-BUS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/M-BUS.png) 总线母座，LED条和三个GROVE拓展端口. 位于最底部的是充电底座，可以与 M5GO 底座通过 POGO 引脚进行连接，进行充电.

<img src="assets/img/product_pics/core/fire/m5_fire_06.png">

快速成型，超低门槛，直达产品级，M5Stack 开发板会是你物联网开发的不二之选.传统开发板只能用作验证和学习，M5的出现赋予了开发板更多的可能性，M5Stack 开发板采用了工业级外壳，再加上精致的外观设计，整体性能稳定，除了验证和学习的功能之外，还可以加速开发和产品化的进程.采用**ESP32**物联网芯片.集成 Wi-Fi 和蓝牙模块，拥有4MB的SPI闪存，双核低功耗的它在多种应用场景中有着非凡表现.由30多个M5Stack [可堆叠模块](https://docs.m5stack.com/#/zh_CN/?id=module)，40 多个[可扩展单元](https://docs.m5stack.com/#/zh_CN/?id=unit)组成的硬件拓展体系，能够快速的帮助你搭建和验证你的物联网产品.

支持的开发平台和程序语言：Arduino，[UIFlow](http://flow.m5stack.com) 的 Blockly 语言，Micropython. 无论你的开发和编程能力处在何种水平，M5Stack都将协助你，逐步的将想法变为现实.

如果你开发过 ESP8266，你会发现 ESP32 是 ESP8266 的完美升级版.相比之下，ESP32 具有更多 GPIO ，更多的模拟输入和两个模拟输出，多个外设接口（如备用UART）.官方开发平台 ESP-IDF 已经移植了 FreeRTOS ，借助双核与实时操作系统，能使你更加高效的去组织你的程序代码，优化程序的执行效率.

## 产品特性

- 5V 直流电源
- USB Type-C
- 基于ESP32开发
- 16 MB Flash 
- 4 MB PSRAM
- MPU9250
- 扬声器，按键x3，LCD屏幕（320 * 240），电源/复位按键x1
- 2.4G天线：Proant 440
- TF 卡插槽（最大可拓展16GB）
- 电池总线母座和600 mAh锂电池
- 可拓展的引脚与接口
- Grove 接口
- M-Bus总线母座 & 引脚
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


### ESP32特性

- 240 MHz双核Tensilica LX6微控制器，性能达到 600 DMIPS
- 集成520 KB SRAM
- 集成的802.11b/g/n HT40 Wi-Fi收发器，基带，堆栈和LWIP
- 集成双模蓝牙（经典和BLE）
- 霍尔传感器
- 10x 电容触摸功能接口
- 32 kHz晶体振荡器
- 每个GPIO引脚都支持PWM/定时器 输入/输出
- SDIO master/salve 50MHz
- 支持SD卡接口

### 外设的管脚映射

**LCD 屏幕 & TF 卡**

*LCD 像素：320x240*
*TF 卡最大支持 16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>MOSI</td><td>/</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
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

**九轴姿态传感器 MPU9250**

*I2C 地址 0x68*

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

**LED 灯条 & 麦克风 & 扬声器**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td><td>GPIO25</td></tr>
 <tr><td>LED Bar</td><td>SIG Pin</td><td> </td><td> </td></tr>
 <tr><td>MIC</td><td> </td><td>MIC Pin</td><td> </td></tr>
<tr><td>Speaker</td><td> </td><td> </td><td>Speaker Pin</td></tr>
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
      <td>16MB Flash + 4MB PSRAM </td>
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
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9341</td>
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
      <td>600mAh @ 3.7V, inside  vb</td>
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

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">

## 包含

-  1x Fire Controller
-  1x M5GO 底座
-  1x M5GO 充电底座
-  10x 杜邦线
-  1x Type-C USB
-  1x 使用手册

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf) - [AK8963](https://www.akm.com/akm/en/file/datasheet/AK8963C.pdf)

- **寄存器手册** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**

## 相关视频

**m5stack 的简介**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>

**m5stack 的案例 - Piu UI framework with Moddable SDK**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/run-time-display-rotation.mp4" type="video/mp4">
</video>
