# BASIC {docsify-ignore-all}

<img class="pic" src="assets/img/product_pics/core/basic/basic_02.png"><img class="pic" src="assets/img/product_pics/core/basic/basic_03.png">



## 描述

**M5Stack BASIC** 是M5Stack开发套件系列中的一款，拥有超高性价比与丰富案例资源的入门级开发套件.对于开发新手来说, Basic 是不二之选.

快速成型，超低门槛，直达产品级，M5Stack 开发板会是你物联网开发的不二之选.传统开发板只能用作验证和学习，M5的出现赋予了开发板更多的可能性，M5Stack 开发板采用了工业级外壳，再加上精致的外观设计，整体性能稳定，除了验证和学习的功能之外，还可以加速开发和产品化的进程.采用**ESP32**物联网芯片.集成Wi-Fi和蓝牙模块，拥有  4MB 的 SPI 闪存，双核低功耗的它在多种应用场景中有着非凡表现.由 30 多个 M5Stack [可堆叠模块](https://docs.m5stack.com/#/zh_CN/?id=module)，40 多个[可扩展单元](https://docs.m5stack.com/#/zh_CN/?id=unit)组成的硬件拓展体系，能够快速的帮助你搭建和验证你的物联网产品.

支持的开发平台和程序语言：Arduino，[UIFlow](http://flow.m5stack.com) (采用Blockly ，MicroPython语言). 无论你的开发和编程能力处在何种水平，M5Stack 都将协助你，逐步的将想法变为现实.

如果你开发过 ESP8266，你会发现 ESP32 是 ESP8266 的完美升级版.相比之下，ESP32 具有更多 GPIO ，更多的模拟输入和两个模拟输出，多个外设接口（如备用UART）.官方开发平台 ESP-IDF 已经移植了 FreeRTOS，借助双核与实时操作系统，能使你更加高效的去组织你的程序代码，优化程序的执行效率.

M5Stack Basic 由两个可分离部分堆叠组成. 顶部放置了电路板，芯片，各种电子元器件和一些接口组件.底部放置了锂电池，[M-BUS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/M-BUS.png) 总线母座和边缘的拓展引脚.

<img src="assets/img/product_pics/core/basic/basic_11.png">

**注意：**

新生产的M5Core更换了显示效果与可视角更加优质的屏幕，因此与旧版的Arduino库产生了一些兼容性问题，使用旧版程序库进行屏幕驱动时会产生反色显示的现象，您可以打开Arduino的库管理选项将您的M5Stack库升级至最新版本（0.2.8以后）来解决这个问题.

<img src="assets\img\product_pics\core\basic\lib_01.jpg" width="40%">
<br><br><br>
<img src="assets\img\product_pics\core\basic\lib_02.jpg" width="40%">


## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP32 开发
- 扬声器，按键x3，LCD屏幕（320 * 240），电源/复位按键x1
- 2.4G天线：Proant 440
- TF卡插槽（最大可拓展16GB）
- 电池总线母座和150 mAh锂电池
- 可拓展的引脚与接口
- Grove 接口
- M-Bus总线母座 & 引脚
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- 产品尺寸：58.2mm x 54.2mm x 17.9mm
- 产品重量：47.2g

### ESP32特性

- 240 MHz双核 Tensilica LX6 微控制器，性能达到 600 DMIPS
- 集成520 KB SRAM
- 集成的 802.11b/g/n HT40 Wi-Fi 收发器，基带，堆栈和 LWIP
- 集成双模蓝牙（经典和BLE）
- 4 MByte 闪存
- 霍尔传感器
- 10x 电容触摸功能接口
- 32 kHz晶体振荡器
- 每个 GPIO 引脚都支持 PWM/定时器 输入/输出
- SDIO master/salve 50MHz
- 支持SD卡接口

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/BASIC/EasyLoader_M5Core_BASIC_FactoryTest.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 外设的管脚映射

**LCD 屏幕 & TF 卡**

*LCD 像素：320x240*
*TF 卡最大支持 16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9342C</td><td>MOSI/MISO</td><td>/</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF卡</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**按键 & 喇叭**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>按键引脚</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>喇叭</td><td> </td><td> </td><td> </td><td>DA PIN</td></tr>
</table>

**GROVE 接口 A & IP5306**

*电源管理芯片 (IP5306) 是定制 I2C 版本，它的 I2C 地址是 0x75。点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)查看 IP5306 的寄存器手册。*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IP5306</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
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
      <td>4MB</td>
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
      <td>IPS屏幕</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342C</td>
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
</table>

**<mark>Notice：M5PORT 说明 </mark>**
*不同颜色的GROVE端口分别代表不同的功能.红色的PortA（21/22），为默认的I2C协议接口，黑色的PortB（26/36）, 支持DA/AD转换与信号总线通信.蓝色的PortC（16/17）, 支持Uart串口通信.在使用Unit进行功能拓展的时候，只需要匹配二者的端口的颜色，相应的进行连接即可正常使用.不仅提供简洁的硬件连接方式，还支持引脚的重映射.PortA（红色）被作为信号总线连接至是ESP32的GPIO21/22 ，没有AD通道转换方案，因此不能用作模拟输入使用.

- ADC1(8 通道 GPIO 32-39)
- ADC2(10 通道 GPIO 0，2，4，12-15，25-27)

使用AD读取功能:
1，使用杜邦线连接机身侧面的能够AD转换的引脚.
2，堆叠一个M5GO底座，使用其提供PortB.
3，使用PbHUB连接至PortA，拓展出6个PortB.
有关引脚分配和引脚重映射的更多信息，请查阅[ESP32数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)


## 套件清单

-  1x BASIC
-  10x 杜邦线
-  1x Type-C USB(20cm)
-  1x 使用手册
-  1x 贴纸

<img src="assets/img/product_pics/core/basic/basic_04.png" alt="basic_04" width="80%" height="80%">

<img src="assets/img/product_pics/core/basic/basic_10.png" width="50%" height="50%">

## 相关链接

-  **Datasheet** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

## 原理图

- [原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)

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
            <td>2017.7</td>
            <td>首次发售</td>
        </tr>
        <tr>
            <td>2019.7</td>
            <td>TN屏幕变更为IPS屏幕</td>
        </tr>
        <tbody>
    </table>
</div>


## 相关视频

**M5Stack 的简介**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>


**M5Core 的作品**

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_compass.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Compass.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_imu.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/M5stack%20Gray.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_avatar.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Avatar%20Custom%20Face.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_voice_recognition.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Voice-Recognize.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_electric_monitor.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5stack%20Smart%20Electric%20Monitor.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_home.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Esplora-and-M5Stack.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_leap_motion.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Motion%20Detector.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_microphone_alexa.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5stack%20Microphone%20.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_robot.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Robot.mp4)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>