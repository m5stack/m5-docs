# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.webp" width="30%" height="30%">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stickc/m5stickc_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/stick-c)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**M5StickC** 是一款精致小巧的开发板.它作为 M5Stick 的升级版本，提供了更多的拓展接口与按键,拥有出色性能的同时兼具低功耗特性.无论是用作编程学习还是项目开发, M5StickC 都能够提供可靠的硬件支持.

*它能做什么?*
这个小巧玲珑的开发工具，能够激发你无限的创作可能. M5StickC 能够帮助你快速的搭建物联网产品原型，简化整个的开发过程.即便是刚开始接触编程开发的初学者，也能够搭建出一些有趣的应用，并应用到实际生活中.

M5StickC 是 M5Stack 产品系列中的核心设备之一，该产品系列建立在不断发展的硬件和软件生态系统中.它有着许多兼容的拓展功能模块，丰富开源代码、活跃的论坛社区，这些资源都可以在你的开发过程中为你提供最优服务.

**开关机操作：**

* 开机：按复位按键，持续至少 2 秒

* 关机：按复位按键，持续至少 6 秒

**注意：**

* M5StickC 支持的波特率: 1200 ~115200, 250K, 500K, 750K, 1500K

* 外壳颜色只有橙色在售

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_02.png" width=50% height=50%>



**注意：** 

M5StickC仅支持WIN10&Linux&MAC免驱，其余操作系统则需要用户自行安装驱动程序.

安装步骤：1，点击下方链接，下载驱动安装包. 2.连接设备，并打开电脑设备管理器端口选项。 3，右键点击未能识别的设备，进行手动更新. 

<a href="https://www.ftdichip.com/Drivers/VCP.htm">驱动下载连接</a>



## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP3 2开发
- 4 MByte Flash + 520K RAM
- 6 轴 IMU: MPU6886
- Red LED
- 红外发射管
- 麦克风
- 按键x2, LCD(0.96 寸), 电源/复位按键x1
- 2.4G天线：Proant 440
- 80 mAh 锂电池
- 拓展接口
- Grove 接口
- 可穿戴 & 可固定
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_03.jpg" width=50% height=50%>


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

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickC/EasyLoader_M5StickC_FactoryTest.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 原理图

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/m5stickC.jpg">

- [PDF Download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/20191118__StickC_A04_3110_Schematic_Rebuild_PinMap.pdf)

## 管脚映射

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" width="300px">

电源结构框图

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.webp" width="300px">

**红色 LED & 红外发射管 IR & 按键 BUTTON A & 按键 BUTTON B**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>红色 LED</td><td>LED 管脚</td><td> </td><td> </td><td> </td></tr>
 <tr><td>红外发射管 IR</td><td> </td><td>发射管引脚</td><td> </td><td> </td></tr>
<tr><td>按键 BUTTON A</td><td> </td><td> </td><td>按键管脚</td><td> </td></tr>
<tr><td>按键 BUTTON B</td><td> </td><td> </td><td> </td><td>按键管脚</td></tr>
</table>

**彩色TFT屏幕** 

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

**六轴IMU (SH200Q/MPU6886) & 电源管理芯片 (AXP192)**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>六轴姿态传感器</td><td>SCL</td><td>SDA</td>
 <tr><td>电源管理芯片</td><td>SCL</td><td>SDA</td>
</table>

**电源管理芯片 (AXP192)**

<table>
 <tr><td>Microphone</td><td>RTC</td><td>TFT backlight</td><td>TFT IC</td><td>ESP32/3.3V MPU6886/SH200Q</td><td>5V GROVE</td>
 <tr><td>LDOio0</td><td>LDO1</td><td>LDO2</td><td>LDO3</td><td>DC-DC1</td><td>IPSOUT</td>
</table>



## 包含

-  1x M5StickC
-  1x Type-C USB(20cm)

## 相关链接

-  **数据手册**

-  **datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [ST7735S](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ST7735S_v1.1_en.pdf)
    - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [SH200Q](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SH200Q_en.pdf)
    - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_cn.pdf)
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)


## 版本变更

<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>上市日期</th>
            <th>产品变动</th>
        </tr>
        </thead>    
        <tbody>
        <tr>
            <td>2019.3</td>
            <td>首次发售</td>
        </tr>
        <tr>
            <td>2019.8</td>
            <td>SH200Q变更为MPU6886</td>
        </tr>
        <tr>
            <td>2019.10</td>
            <td>升级底部,添加铜螺母</td>
        </tr>
        <tbody>
    </table>
</div>


## 例程

**Arduino**

- [M5StickC 出厂测试例程](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

- [M5StickC 自动贩卖机](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5StickC_Slot)

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StickC%20Slot%20machine%20demo.mp4" type="video/mp4">
</video>


## 相关视频

- **M5StickC 的案例 - 计数器**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" type="video/mp4">
</video>

- **M5StickC 的案例 - 测试 DSD**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Simple_Watch_Device.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   var quickstart_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>