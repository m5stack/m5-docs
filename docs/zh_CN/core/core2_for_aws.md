# Core2 for AWS

<el-tag effect="plain">SKU:K010-AWS</el-tag>

<div class="product_pic"><img class="pic" src="assets/img/product_pics/core/core2_aws/core2_aws_01.webp"><img class="pic" src="assets/img/product_pics/core/core2_aws/core2_aws_02.webp"></div>

## 教程&快速上手

选择你想使用的开发平台，查看对应的教程&快速上手。

<a href="https://edukit.workshop.aws"><el-tag effect="plain">FreeRTOS</el-tag></a>
<a href="/#/zh_CN/quick_start/core2/m5stack_core2_get_started_MicroPython"><el-tag effect="plain">UIFlow</el-tag></a>
<a href="/#/zh_CN/arduino/arduino_core2_development"><el-tag effect="plain">Arduino</el-tag></a>

## 描述

**Core2 for AWS**是AWS物联网学习项目的专属套件。它由**M5Stack Core2**核心主控和**M5GO-Bottom For AWS**拓展底座组成，并且额外定制集成了ATECC608A硬件加密，是物联网学习和安全项目构建的理想套件。

获取更多**AWS IoT EduKit**相关教程, 访问 [https://edukit.workshop.aws.](https://edukit.workshop.aws)

其核心主控**Core2**配备了ESP32-D0WDQ6-V3，具有两个可以单独控制的 Xtensa® 32-bit LX6 处理器，主频高达240Mhz，支持WiFi与蓝牙功能，板载16MB Flash与8MB PSRAM，可通过TYPE-C接口下载程序，强劲的配置满足复杂应用的资源开销。正面搭载一块2.0寸一体化电容式触摸屏，为用户带来更流畅的人机交互体验。机身内置震动马达，可提供触觉回馈和震动提醒功能。内建的RTC模块可提供精准计时功能。电源部分搭载AXP192电源管理芯片可有效控制机身功耗，内置绿色电源指示灯。同时机身内配备了TF-card(microSD)卡槽与扬声器，为了保证获得更高质量的声音效果，采用I2S数字音频接口的功放芯片，能有效防止信号失真。在机身的左侧和底部配有独立的电源按键与重启(RST)按键，屏幕正面的3个圆点属于触摸屏的一部分，可通过编写程序设置热区映射为3个虚拟按键。

**M5GO-Bottom For AWS** 是专为该定制款设计的拓展型底座，底座集成了MPU6886六轴姿态传感器，数字麦克风(SPM1423),500mAh锂电池。提供两组HY2.0-4P拓展接口将常用的ADC/DAC/UART引脚进行了引出，能够用于各类型传感器的接入。底座两侧分别为10颗可编程RGB灯(SK6812)，配合磨砂透光材质遮光条，能够提供柔和舒适发光效果。底部采用pogo pin磁吸充电接口，当吸附充电底座时，电流将经过内置的TP4057充电芯片安全的流入内部电池。除充电功能外pogo pin接口对主控I2C总线进行了引出，这使得你能够通过磁吸的方式去外接拓展。内置吸附磁铁，背面采用兼容LEGO孔设计，能够与你的其他的LEGO结构设计无缝对接。

**AWS定制款嵌入了ATECC608A硬件加密芯片，能够以硬件层次密钥的方式加强设备物联网通信过程的安全**

**开关机操作：**

* 开机：单击左侧电源键

* 关机：长按6秒左侧电源键

* 复位: 单击底侧RST按键


## 产品特性

- 基于 ESP32 开发，支持WiFi、蓝牙
- 内置ATECC608A硬件加密芯片
- 16M Flash，8M PSRAM
- 内置扬声器，电源指示灯，震动马达，RTC，I2S功放，电容式触摸屏幕，电源键，复位按键
- TF卡插槽(支持最大16GB)
- 内置锂电池,配备电源管理芯片
- 内置6轴IMU，PDM麦克风
- M-Bus bus socket
- 开发平台 [UIFlow](http://flow.m5stack.com),[FreeRTOS](https://aws.amazon.com/freertos),[MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## 包含

- 1x M5Stack Core2
- 1x M5GO Bottom2 for AWS
- 1x Type-C USB (50cm)
- 1x Hex wrench

## 应用

- 物联网控制器
- STEM教育
- DIY作品制作


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32-D0WDQ6-V3</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16MB</td>
   </tr>
   <tr>
      <td>PSRAM</td>
      <td>8MB</td>
   </tr>
   <tr>
      <td>硬件加密芯片</td>
      <td>ATECC608A</td>
   </tr>
   <tr>
      <td>输入电压</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>主机接口</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>可编程LED灯</td>
      <td>SK6812*10</td>
   </tr>
   <tr>
      <td>按键</td>
      <td>电源键、RST键、屏幕虚拟按键*3</td>
   </tr>
   <tr>
      <td>震动提醒</td>
      <td>震动马达</td>
   </tr>
   <tr>
      <td>IPS LCD屏幕</td>
      <td>2.0"@320*240 ILI9342C</td>
   </tr>
   <tr>
      <td>电容式触摸屏IC</td>
      <td>FT6336U</td>
   </tr>
   <tr>
      <td>扬声器</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>麦克风</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>I2S功放</td>
      <td>NS4168</td>
   </tr>
   <tr>
      <td>IMU</td>
      <td>MPU6886</td>
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
      <td>USB芯片</td>
      <td>CP2104</td>
   </tr>
   <tr>
      <td>DC-DC升压</td>
      <td>SY7088</td>
   </tr>
   <tr>
      <td>TF卡槽</td>
      <td>支持最大16G</td>
   </tr>
   <tr>
      <td>锂电池</td>
      <td>500mAh @ 3.7V</td>
   </tr>
   <tr>
      <td>天线</td>
      <td>2.4G 3D天线</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>68g</td>
   <tr>
      <td>毛重</td>
      <td>94g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54 x 54 x 24mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>90 x 60 x 25mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

<img class="pic" src="assets/img/product_pics/core/core2_aws/core2_aws_03.webp">

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_Core2_for_AWS_Default.exe">Windows</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/CORE2_FOR_AWS.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>Core2 for AWS出厂默认程序.</p>
        </div>
    </div>
</div>


## 管脚映射

**LCD 屏幕 & TF Card**

LCD 像素：320x240
TF 卡最大支持 16GB

<table>
 <tr><td>ESP32 Chip</td><td>GPIO38</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td><td>GPIO15</td><td></td><td> </td><td> </td></tr>
 <tr><td>AXP192 Chip</td><td> </td><td> </td><td> </td><td> </td><td> </td><td>AXP_IO4</td><td>AXP_DC3</td><td>AXP_LDO2</td></tr>
 <tr><td>ILI9342C</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td>PWR</td></tr>
</table>

<table>
<tr><td>ESP32 Chip</td><td>GPIO38</td><td>GPIO23</td><td>GPIO18</td><td>GPIO4</td></tr>
<tr><td>TF Card</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td></tr>
</table>

**CAP.TOUCH触摸屏**

<table>
 <tr><td>ESP32 chip</td><td>GPIO21</td><td>GPIO22</td><td>GPIO39</td><td></td></tr>
 <tr><td>AXP192</td><td></td><td></td><td></td><td>AXP_IO4</td></tr>
 <tr><td>FT6336U</td><td>SDA</td><td>SCL</td><td>INT</td><td>RST</td></tr>
</table>

**麦克风 & NS4168功放**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO12</td><td>GPIO0</td><td>GPIO2</td><td>AXP_IO2</td><td>GPIO34</td></tr>
 <tr><td>NS4168</td><td>BCLK</td><td>LRCK</td><td>DATA</td><td>SPK_EN</td><td> </td></tr>
 <tr><td>SPM1423</td><td></td><td>CLK</td><td></td><td></td><td>DATA</td></tr>
</table>

**AXP电源指示灯 & 震动马达**

<table>
 <tr><td>AXP192</td><td>AXP_IO1</td><td>AXP_LDO3</td></tr>
 <tr><td>Green LED</td><td>Vcc</td><td>/</td></tr>
 <tr><td>Vibration motor</td><td></td><td>Vcc</td></tr>
</table>

**RTC**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td><td></td></tr>
 <tr><td>AXP192</td><td></td><td></td><td>AXP_PWR</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td><td>INT</td></tr>
</table>

**IMU(3轴陀螺仪+3轴加速计) &Pogo Pin**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>Pogo Pin</td><td>SDA</td><td>SCL</td></tr>
</table>

**USB转串口下载**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>

**SK6812-LED**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO25</td></tr>
 <tr><td>SK6812-LED</td><td>DATA</td></tr>
</table>


**内部I2C连接**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>AXP192</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>FT6336U</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>ATECC608A</td><td>SDA</td><td>SCL</td></tr>
</table>

## M5Core2 M-BUS示意图

<img class="pic" src="assets/img/product_pics/core/core2/core2_mbus.webp" width = "50%">

## M5Core2 端口说明

**HY2.0-4P-PortA(Red)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO32</td><td>GPIO33</td></tr>
 <tr><td>PortA</td><td>GPIO32(SDA)</td><td>GPIO33(SCL)</td></tr>
</table>

## M5GO-Bottom For AWS 端口说明

**HY2.0-4P-PortB(black)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO26</td><td>GPIO36</td></tr>
 <tr><td>PortB</td><td>GPIO26(DAC)</td><td>GPIO36(ADC)</td></tr>
</table>

**HY2.0-4P-PortC(blue)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO14</td></tr>
 <tr><td>PortC</td><td>GPIO13(RXD2)</td><td>GPIO14(TXD2)</td></tr>
</table>


## ESP32 ADC/DAC可映射引脚

<table>
      <thead>
         <th>ADC1</th>
         <th>ADC2</th>
         <th>DAC1</th>
         <th>DAC2</th>
      </thead>
      <tbody>
      <tr>
         <td>8 通道</td>
         <td>10 通道</td>
         <td>2 通道</td>
         <td>2 通道</td>  
      </tr>
      <tr>
         <td>G32-39</td>
         <td>G0/2/4/12-15/25-27</td>
         <td>G25</td>
         <td>G26</td>
      </tr>
    </tbody>
</table>

**充电电流测量值**
<table>
 <tr><td>充电电流</td><td>充满后电流(关机)</td><td>充满电(开机）</td></tr>
 <tr><td>0.219A</td><td>0.055A</td><td>0.147A</td></tr>
</table>

有关引脚分配和引脚重新映射的更多信息，请参考[ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)



## 相关链接

- **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
   - [FT6336U](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/Ft6336GU_Firmware%20%E5%A4%96%E9%83%A8%E5%AF%84%E5%AD%98%E5%99%A8_20151112.xlsx)
   - [NS4168](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/NS4168_CN_datasheet.pdf)
   - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
   - [ILI9342C](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ILI9342C-ILITEK.pdf)
   - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_en.pdf)
   - [ATECC608A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ATECC608A-TNGTLS-CryptoAuthentication-Data-Sheet-DS40002112B.pdf)

- **API** 

   - [Arduino API](zh_CN/arduino/arduino_home_page?id=m5core2_api)
   
## 原理图

<img src="assets/img/product_pics/core/core2/core2_sch.webp" width="800px">

- [CORE2核心-原理图pdf](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/CORE2_V1.0_SCH.pdf)

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_aws_sch.webp" width="800px">

## 案例程序

### Arduino IDE

- [FactoryTest](https://github.com/m5stack/M5Core2/tree/master/examples/core2_for_aws)

### 教程

- [UIFlow](zh_CN/quick_start/core2/m5stack_core2_get_started_MicroPython)
- [Arduino](zh_CN/arduino/arduino_core2_development)

<el-divider content-position="right">Last updated: 2020-12-15</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/products/m5stack-core2-for-aws-esp32-iot-edukit';

   var quickstart_link = '/#/zh_CN/quick_start/core2_for_aws/quick_start_list';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>