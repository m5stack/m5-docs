# M5StickC {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K016-C</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.webp"></div>

## 描述

**M5StickC** 是一款精致小巧的开发板.它作为 M5Stick 的升级版本，提供了更多的拓展接口与按键,拥有出色性能的同时兼具低功耗特性.无论是用作编程学习还是项目开发, M5StickC 都能够提供可靠的硬件支持.

它能做什么?
这个小巧玲珑的开发工具，能够激发你无限的创作可能. M5StickC 能够帮助你快速的搭建物联网产品原型，简化整个的开发过程.即便是刚开始接触编程开发的初学者，也能够搭建出一些有趣的应用，并应用到实际生活中.

M5StickC 是 M5Stack 产品系列中的核心设备之一，该产品系列建立在不断发展的硬件和软件生态系统中.它有着许多兼容的拓展功能模块，丰富开源代码、活跃的论坛社区，这些资源都可以在你的开发过程中为你提供最优服务.

**开关机操作：**

* 开机：按复位按键，持续至少 2 秒

* 关机：按复位按键，持续至少 6 秒

**注意：**

* M5StickC 支持的波特率: 1200 ~115200, 250K, 500K, 750K, 1500K

* 外壳颜色只有橙色在售

**注意：** 

M5StickC仅支持WIN10&Linux&MAC免驱，其余操作系统则需要用户自行安装驱动程序.

安装步骤：1，点击下方链接，下载驱动安装包. 2.连接设备，并打开电脑设备管理器端口选项。 3，右键点击未能识别的设备，进行手动更新. 

<a href="https://www.ftdichip.com/Drivers/VCP.htm">驱动下载连接</a>

## 产品特性

- 基于 ESP32开发
- 内置3轴加速计与3轴陀螺仪
- 内置Red LED
- 集成红外发射管
- 内置RTC
- 集成麦克风
- 用户按键, LCD(0.96 寸), 电源/复位按键
- 95 mAh 锂电池
- 拓展接口
- 可穿戴 & 可固定
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## 包含

-  1x M5StickC
-  1x Type-C USB(20cm)

## 应用

- 可穿戴设备
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
      <td>LCD屏幕</td>
      <td>0.96 inch, 80*160 Colorful TFT LCD, ST7735SV</td>
   </tr>
   <tr>
      <td>麦克风</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>按键</td>
      <td>自定义按键 x 2</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>红色 LED x 1</td>
   </tr>
   <tr>
      <td>RTC</td>
      <td>BM8563</td>
   </tr>   
   <tr>
      <td>PMU</td>
      <td>AXP192</td>
   </tr>   
   <tr>
      <td>IR</td>
      <td>Infrared transmission</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>天线</td>
      <td>2.4G 3D天线</td>
   </tr>
   <tr>
      <td>PIN接口</td>
      <td>G0, G26, G36</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>95 mAh @ 3.7V, inside  vb</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>15.1g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>33g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48.2*25.5*13.7mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>55*55*20mm</td>
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
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickC_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5StickC_FactoryTest.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5StickC.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>加速计，麦克风，LED，IR，RTC，蓝牙等硬件测试，单击A键或B键可切换测试项.</p>
        </div>
    </div>
</div>


## 管脚映射

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.webp" width="300px">

**电源结构框图**

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

驱动芯片：ST7735S

分辨率：80 * 160

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

## 原理图

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/m5stickC.webp">

- [原理图PDF](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/20191118__StickC_A04_3110_Schematic_Rebuild_PinMap.pdf)

## 相关链接

-  **Datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [ST7735SV](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ST7735SV_V1.3.pdf)
    - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [SH200Q](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SH200Q_en.pdf)
    - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_cn.pdf)
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)

## 结构设计文件

>[点击此处，获取M5StickC开源结构设计文件](https://github.com/m5stack/m5-structural-design-file/tree/master/M5StickC)

## 版本变更

<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>上市日期</th>
            <th>产品变动</th>
            <th>备注:</th>
        </tr>
        </thead>      
        <tbody>
        <tr>
            <td>2019.3</td>
            <td>首次发售</td>
            <td>/</td>
        </tr>
        <tr>
            <td>2019.8</td>
            <td>SH200Q变更为MPU6886</td>
            <td>/</td>
        </tr>
        <tr>
            <td>2019.10</td>
            <td>升级底部,添加铜螺母</td>
            <td>/</td>
        </tr>
        <tr>
            <td>2020.3</td>
            <td>电池容量80mAh变更为95mAh</td>
            <td>/</td>
        </tr>
        <tbody>
    </table>
</div>

## 案例程序

### ArduinoIDE

- [M5StickC 出厂测试例程](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

- [M5StickC 自动贩卖机](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5StickC_Slot)

## 相关视频

- **M5StickC 的案例 - 自动贩卖机**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StickC%20Slot%20machine%20demo.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stick-c';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5stickc/m5stickc_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>