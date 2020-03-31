# M5Stick {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K016</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png"><img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png"></div>

## 描述

**M5Stick** 是一款迷你的 IoT 开发板.集成 ESP32 芯片，具备蓝牙与 WiFi 功能以及 IMU 姿态传感器，无论是用作编程学习还是项目开发, Stick 都能够提供可靠的硬件支持.
*它能做什么?*
这个小巧玲珑的开发工具，能够激发你无限的创作可能.Stick 能够帮助你快速的搭建物联网产品原型，简化整个的开发过程.即便是刚开始接触编程开发的初学者，也能够搭建出一些有趣的应用，并应用到实际生活中.
M5stick 是 M5Stack 产品系列中的核心设备之一，该产品系列建立在不断发展的硬件和软件生态系统中.它有着许多兼容的拓展功能模块，丰富开源代码、活跃的论坛社区，这些资源可以使你在开发过程中获得最大的支持.

**下图为按键 A 和安装孔的位置指示**

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/m5stick/m5stick_06.png"></div>

**开关机操作：**

* 开机：按复位按键，单击

* 关机：按复位按键，双击

## 产品特性

- 基于ESP32开发
- 9自由度姿态传感器(只有灰色款配备)
- 内置LED
- 集成蜂鸣器
- 集成红外发射管
- 自定义按键, OLED(1.3寸), 电源/复位按键x1
- 内置锂电池
- Grove 接口
- 可穿戴 & 可固定
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


## 包含

-  1x M5Stick
-  1x USB Type-C(20cm)

## 应用

- 物联网控制器
- STEM教育
- DIY作品
- 智能家居设备

## 规格参数

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
      <td>4MB Flash</td>
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
      <td>OLED屏幕</td>
      <td>1.3 inch</td>
   </tr>
   <tr>
      <td>蜂鸣器</td>
      <td>有源蜂鸣器 x 1</td>
   </tr>
   <tr>
      <td>按键</td>
      <td>自定义按键 x 1</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>Blue LED x 1</td>
   </tr>
   <tr>
      <td>IR</td>
      <td>Infrared transmission x 1</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU9250(灰色版)</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>80 mAh @ 3.7V, inside  vb</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>24 x 47 x 19 mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Stick_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5Stick.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕 LED IR 蜂鸣器 按键测试，单击按键A屏幕将打印显示helloworld.</p>
        </div>
    </div>
</div>

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
 <tr><td>ESP32芯片</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO18</td><td>GPIO23</td>
 <tr><td>OLED屏幕</td><td>CS</td><td>DC</td><td>RST</td><td>D0</td><td>D1</td>
</table>

**GROVE接口**

<table>
 <tr><td>ESP32芯片</td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE接口</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**IP5306充/放电，电压参数**

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>充电</td>
      <td><td>
      <td>放电</td>
   </tr>
   <tr>
      <td>0.00 ~ 3.40V -> 0%</td>
      <td><td>
      <td>4.20 ~ 4.07V -> 100%</td>
   </tr>
   <tr>
      <td>3.40 ~ 3.61V -> 25%</td>
      <td><td>
      <td>4.07 ~ 3.81V -> 75%</td>
   </tr>
   <tr>
      <td>3.61 ~ 3.88V -> 50%</td>
      <td><td>
      <td>3.81 ~ 3.55V -> 50%</td>
   </tr>
   <tr>
      <td>3.88 ~ 4.12V -> 75%</td>
      <td><td>
      <td>3.55 ~ 3.33V -> 25%</td>
   </tr>
   <tr>
      <td>4.12 ~   /   -> 100%</td>
      <td><td>
      <td>3.33 ~ 0.00V -> 0%</td>
   </tr>
</table>

**灰色版本:**

<table>
 <tr><td>ESP32芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>九轴姿态传感器MPU9250</td><td>SCL</td><td>SDA</td>
</table>


**灰色版本:**
-  一些配件: `WATCH BELT`, `WALL` and `BRICK`

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_07.png" width=40% height=40%>

## 原理图

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

- [原理图](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5-Core-Schematic(20171206).pdf)

## 相关链接

-  **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) 
   - [MPU9250](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/PS-MPU-9250A-01-v1.1_en.pdf)
   - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

## 案例程序

### ArduinoIDE

- [M5Stick 出厂测试例程](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)

- [M5Stick 手表](https://github.com/m5stack/StickWatch)

### UIFlow

- [白色方块游戏](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)

<!--## 相关视频

- **m5stick 的案例 - 控制空调**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" type="video/mp4">
</video>
-->
<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stick';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5stick/m5stick_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>