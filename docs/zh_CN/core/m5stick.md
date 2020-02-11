# M5Stick {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="300" height="300">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="gray_02" width="300" height="300">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/stick)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**M5Stick** 是一款迷你的 IoT 开发板.集成 ESP32 芯片，具备蓝牙与 WiFi 功能以及 IMU 姿态传感器，无论是用作编程学习还是项目开发, Stick 都能够提供可靠的硬件支持.

*它能做什么?*
这个小巧玲珑的开发工具，能够激发你无限的创作可能.Stick 能够帮助你快速的搭建物联网产品原型，简化整个的开发过程.即便是刚开始接触编程开发的初学者，也能够搭建出一些有趣的应用，并应用到实际生活中.


M5stick 是 M5Stack 产品系列中的核心设备之一，该产品系列建立在不断发展的硬件和软件生态系统中.它有着许多兼容的拓展功能模块，丰富开源代码、活跃的论坛社区，这些资源可以使你在开发过程中获得最大的支持.

**下图为按键 A 和安装孔的位置指示**

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_06.png">

**开关机操作：**

* 开机：按复位按键，单击

* 关机：按复位按键，双击

## 产品特性


- 5V 直流电源
- USB Type-C
- 基于ESP32开发
- 4 MByte 闪存
- MPU9250(只有灰色款配备)
- Blue LED
- 蜂鸣器
- 红外发射管
- 按键x1, OLED(1.3寸), 电源/复位按键x1
- 2.4G天线：Proant 440
- 80 mAh 锂电池
- Grove 接口
- 可穿戴 & 可固定
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

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5Stick/EasyLoader_M5Stick_FactoryTest.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

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




## 包含

-  1x M5Stick
-  1x USB Type-C(20cm)

**灰色版本:**
-  一些配件: `WATCH BELT`, `WALL` and `BRICK`

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_07.png" width=40% height=40%>
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_08.png" width=40% height=40%>

## 原理图

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

完整原理图请点击[这里](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick)。

## 相关链接

-  **数据手册** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) - [MPU9250](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/PS-MPU-9250A-01-v1.1_en.pdf)

- **寄存器手册** - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

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

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" type="video/mp4">
</video>

- **m5stick 的案例 - .obj 模型查看器**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/Obj%20Model%20Viewer.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   var quickstart_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>