# StickT {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_01.jpg" width="30%" height="30%">
<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_03.webp" width="30%" height="30%">
<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_04.webp" width="30%" height="30%">


:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/stick-t)**&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**StickT** 是一款精致小巧的红外热成像仪,采用最新的FLIR Lepton 3.0长波红外（LWIR）摄像头内核,有效分辨率为160*120,成像画面清晰稳定,是大面积非接触式红外测温的优秀解决方案.其主控芯片采用了ESP32,支持WIFI与蓝牙连接,高达240Mhz的运算能力,为图像输出提供了有利保证,FPS达到7+.屏幕为1.14寸,分辨率135 * 240,此外内置硬件资源也较为丰富,在交互操作方面提供了两个可编程按键和一个拨轮编码器.内部板载一个6轴IMU(MPU6886),麦克风(SPM1423),电源管理芯片为AXP192,并内置300mAh电池.为了方便用户连接外设,在侧面提供了一个4P PH2.0接口.机身为黑色尼龙材质通过3D打印而成,此外在机身的下方提供一个M3螺丝孔和一个1/4螺丝孔用于固定.在固件方面,提供了多达5种色彩显示模式,可指定测量最大最小值或中心值,并且显示温度色域范围可调.

<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_05.webp" width="30%" height="30%">

**Lepton 3.0参数**

<table>
 <tr><td>有效像素</td><td>160*120</td>
 <tr><td>视野角度</td><td>56°</td>
 <tr><td>快速成像时间</td><td>< 500ms</td>
 <tr><td>有效帧率</td><td>8.7Hz</td>
 <tr><td>输入时钟</td><td>25MHz</td>
 <tr><td>像素尺寸</td><td>12μm</td>
 <tr><td>功耗</td><td>150 mW (典型工作);650 mW (快门拍摄);5 mW (待机)</td>
 <tr><td>动态范围</td><td>低增益-10~400°C;高增益-10~140°C</td>
 <tr><td>波长范围</td><td>8 to 14µm</td>
 <tr><td>热灵敏度</td><td>＜50 mK(0.050°C)</td>
 <tr><td>最佳温度范围</td><td>-10°C to +80°C</td>
</table>

**注意：** 

StickT仅支持WIN10&Linux&MAC(10.15以下）免驱，其余操作系统则需要用户自行安装驱动程序.

安装步骤：1，点击下方链接，下载驱动安装包. 2.连接设备，并打开电脑设备管理器端口选项。 3，右键点击未能识别的设备，进行手动更新. 

<a href="https://www.ftdichip.com/Drivers/VCP.htm">驱动下载连接</a>

<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_02.webp" width="30%" height="30%">

## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP32开发
- 4 MByte Flash + 520K RAM
- 外壳: 3D打印尼龙材质
- FLIR Lepton 3.0
- 6轴IMU: MPU6886
- 麦克风: SPM1423
- 可编程按键x2,电源按键x1
- IPS LCD(1.14 寸)
- 拨轮编码器
- 2.4G天线: Proant 440
- PMU: AXP192
- 300 mAh 锂电池
- 4P PH2.0 接口
- 重量: 26g
- 尺寸: 48 * 30 * 29mm

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

## 包含

-  1x StickT
-  1x Type-C USB(20cm)

## 应用

-  车辆发动机故障检测
-  建筑除湿保温密封性检测
-  工业炉内壁耐火材料裂痕检测
-  夜晚户外观测动物

## 使用介绍

按压复位按键进入开机画面，开机默认进入RGB显示模式，左侧为温度图像，右侧上方为电量显示，右侧下方为直方图和温度范围，温度范围随目标温度自动调整。默认靶心自动跟踪温度最大值，按压右侧A键切换跟踪模式（最小值/中心值/最大值），按压上方B键切换图像显示模式（GRAY/GOLDEN/RAINBOW/IRONBLACK/RGB），拨轮编码器控制显示灵敏度（调整显示温度色域范围），长按复位键6秒关机。

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/StickT/EasyLoader_StickT_FactoryTest.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 管脚映射

**按键 BUTTON A & 按键 BUTTON B**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO37</td><td>GPIO39</td></tr>
<tr><td>按键 BUTTON A</td><td>按键管脚</td><td></td></tr>
<tr><td>按键 BUTTON B</td><td></td><td>按键管脚</td></tr>
</table>

**彩色IPS屏幕** 

*驱动芯片：ST7789*

*分辨率：135 * 240*

<table>
 <tr><td>ESP32 芯片</td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>IPS 屏幕</td><td>MOSI</td><td>CLK</td><td>DC</td><td>RST</td><td>CS</td></tr>
</table>

**PH2.0 接口**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>PH2.0 接口</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**麦克风 MIC (SPM1423)**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>麦克风 MIC</td><td>SCL</td><td>SDA</td></tr>
</table>

**六轴IMU (MPU6886) & 电源管理芯片 (AXP192)**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>六轴姿态传感器</td><td>SCL</td><td>SDA</td>
 <tr><td>电源管理芯片</td><td>SCL</td><td>SDA</td>
</table>

**拨轮编码器**
<table>
 <tr><td>STM32 芯片</td><td>PA2</td><td>PA3</td><td>PA4</td>
 <tr><td>拨轮编码器</td><td>SW</td><td>EN_B</td><td>EN_A</td>
</table>

**电源管理芯片 (AXP192)**

<table>
 <tr><td>Microphone</td><td>RTC</td><td>TFT backlight</td><td>TFT IC</td><td>ESP32/3.3V MPU6886</td><td>5V GROVE</td>
 <tr><td>LDOio0</td><td>LDO1</td><td>LDO2</td><td>LDO3</td><td>DC-DC1</td><td>IPSOUT</td>
</table>


## 相关链接

-  **数据手册**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_cn.pdf)
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
    - [Lepton datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/lepton-3-3.5-datasheet_en.pdf)
    - [Lepton enigneering datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/flir-lepton-engineering-datasheet_en.pdf)
    - [Lepton software interface description](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/flir-lepton-software-interface-description-document_en.pdf)

    
## 例程

**Arduino**

- [StickT 出厂例程](https://github.com/m5stack/StickT/tree/master/examples/Basics/FactoryTest)

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/StickT.mp4" type="video/mp4">
</video>