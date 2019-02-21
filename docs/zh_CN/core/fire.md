# M5Stack FIRE {docsify-ignore-all}

<img src="assets/img/product_pics/core/fire/product_pic_fire.png" alt="fire_01" width="250" height="250"> <img src="assets/img/product_pics/core/fire/m5_fire_01.png" width="35%" height="35%">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.bcec425e3VR4TD&id=571494244869)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>FIRE</mark>** 是一款基于 **ESP32** 芯片(集成 Wi-Fi 和蓝牙)的升级版开发板，包括红色的主板、M5GO 底座和 M5GO 充电底座。你可以用 [UiFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/) 或 [Arduino](http://www.arduino.cc) 来编程它. 这个红色主板包含 3 个按键、喇叭、LCD(320x240)、TF 卡插槽、**MPU9250**。

[M5GO 底座](zh_CN/base/m5go_bottom)内置 PORT B, PORT C, 2 个 RGBLed 灯条 (SK6812), 一个麦克风和一个电池 (550mAh)。

[M5GO CHG. 底座](zh_CN/base/m5go_charger)包含 POGO Pin。FIRE 主控通过 POGO Pin 与这个充电底座连接，而且主控和底座都内置磁铁，所以主控随意放置，都可很好地吸附到充电底座上。

**充电指示说明：**在充电过程中，底座上的红色 LED 会闪烁，充满了常亮。

<img src="assets/img/product_pics/base/m5go_charger_10.png" width="50%" height="50%"><img src="assets/img/product_pics/base/m5go_charger_09.png" width="50%" height="50%">

## 特性

-  可编程，支持[UiFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/)或[Arduino](http://www.arduino.cc)
-  支持外置 TF 卡(最大 16G)
-  支持 LEGO 件

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

**GROVE 接口C **

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LED 灯条&麦克风 MIC &喇叭 Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td><td>GPIO25</td></tr>
 <tr><td>LED灯条</td><td>SIG管脚</td><td> </td><td> </td></tr>
 <tr><td>麦克风MIC</td><td> </td><td>MIC管脚</td><td> </td></tr>
<tr><td>喇叭</td><td> </td><td> </td><td>Speaker管脚</td></tr>
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
      <td>16MB Flash + 4MB pSRAM </td>
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
   <tr>
      <td>重量</td>
      <td>120g with bottom, 100g only core</td>
   </tr>
</table>

**<mark>注意：</mark>**

*我们有 Core 有几个版本，下图是它们主要区别的比较，如果想查看详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04_zh_CN.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05_zh_CN.png">

## 包含

-  1x M5Stack FIRE 主控
-  1x M5GO 底座
-  1x M5GO CHG. 充电底座
-  Type-C USB 线
-  说明书

## 相关链接

-  **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf) - [AK8963](https://www.akm.com/akm/en/file/datasheet/AK8963C.pdf)

## 相关视频

**m5stack 的简介**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzkzMjQ4NzIyOA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- **M5Core 的作品**

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_compass.png)](https://v.youku.com/v_show/id_XNDAxNDI4MDM0OA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_imu.png)](https://v.youku.com/v_show/id_XNDAxNDMwMjAyNA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_avatar.png)](https://v.youku.com/v_show/id_XNDAxNDI3OTgwMA==.html?spm=a2hzp.8253869.0.0)

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_voice_recognition.png)](https://v.youku.com/v_show/id_XNDAxNDMwNzU5Mg==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_smart_electric_monitor.png)](https://v.youku.com/v_show/id_XNDAxNDI4NTQ0NA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_smart_home.png)](https://v.youku.com/v_show/id_XNDAxNDMxMzg2MA==.html?spm=a2hzp.8253869.0.0)

[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_leap_motion.png)](https://v.youku.com/v_show/id_XNDAxNDI4MjU5Mg==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_microphone_alexa.png)](https://v.youku.com/v_show/id_XNDAxNDMwNTYxNg==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/case_img/core_robot.png)](https://v.youku.com/v_show/id_XNDAxNDI4NDk3Ng==.html?spm=a2hzp.8253869.0.0) -->
