# Core M5StickV {docsify-ignore-all}


<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_07.jpg" width="30%" height="30%">


***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5stickv/m5stickv_quick_start)&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/stickv)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**M5Stick-V RISC-V AI 摄像头**

**M5Stick-V**是一款搭载Kendryte K210的AIOT（AI + IOT）摄像头，集成双核64位RISC-V CPU和最先进的神经网络处理器的边缘计算片上系统（SoC）

<br><br>
M5stickV AI 摄像头具备机器视觉能力，支持多种视觉识别能力的它（ 如实时获取被检测目标的大小与坐标 • 实时获取被检测目标的种类），并且能够在低功耗情况下进行卷积神经网络计算，因此M5StickV会是一个很好的零门槛机器视觉嵌入式解决方案
<br><br>
支持MicroPython开发环境，这使得你在使用M5stick-V上进行项目开发时，程序代码将会更加精简.

<br><br>

配备OmniVision OV7740图像传感器，采用OmniPixel®3-HS技术，提供相比同类最佳的低光灵敏度，是机器视觉项目的理想选择.

M5StickV不仅具备视觉识别能力，其内置的嵌入式APU  - 音频处理器. 能够进行一系列机器听觉工作，同时配备I2S D类DAC的扬声器，MEMS麦克风，IPS屏幕，6轴IMU，200mAh锂电池等硬件，能够为你的项目提供极好的硬件条件.

<br><br><br>
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_03.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp;
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_06.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp;
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_05.jpg" width="30%" height="30%"><br>

### 产品特性:
- 双核 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)
- 双精度 FPU
- 8MiB 64bit 片上 SRAM     
- 神经网络处理器（KPU） / 0.8Tops
- 可编程 IO 阵列 (FPIOA)
- 双硬件512点16位复数FFT
- SPI, I2C, UART, I2S, RTC, PWM, 定时器支持
- AES, SHA256 加速器
- 直接内存存取控制器  (DMAC)
- 支持 Micropython
- 固件加密支持
- 板载硬件资源:
    - Flash:  16M.
    - TFT:  ST7789. 135*240 IPS 1.14  SPI
    - 摄像头 :OV7740
    - PCM: MAX98357
    - 电源管理IC: AXP192
    - 按键:  Front and side.
    - 锂电池:  200mAh. 
    - 指示灯:  RGBW .
    - 外部存储:  TF card/Micro SD
    - 麦克风:  MSM261S4030HOR.
    - 六轴IMU传感器:  MPU6886/SH200Q. 
    - 接口:  CONNEXT.

**注意:**

目前发售的M5StickV存在两种IMU传感器版本（MPU6886与SH200Q.），要识别IMU传感器，可以使用python代码扫描I2C地址 MPU6886(0x68)/SH200Q（0x6c)


### 包含
- M5Stick-V 
- Tpye-C USB


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_0630.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录


### 功能描述
#### 1.1   KENDRYTE K210 
Kendryte K210 是集成机器视觉与机器听觉能力的系统级芯片 (SoC)。使用台积电 (TSMC) 超低功耗的 28 纳米先进制程，具有双核 64 位处理器，拥有较好的功耗性能，稳定性与可靠性。该方案力求零门槛开发，可在最短时效部署于用户的产品中，赋予产品人工智能.<br><br>
- 具备机器视觉能力
- 具备机器听觉能力
- 更好的低功耗视觉处理速度与准确率 
- 具备卷积人工神经网络硬件加速器 KPU，可高性能进行卷积人工神经网络运算
- TSMC 28nm 先进制程，温度范围-40°C 到 125°C，稳定可靠
- 支持固件加密，难以使用普通方法破解 
- 独特的可编程 IO 阵列，使产品设计更加灵活
- 低电压，与相同处理能力的系统相比具有更低功耗
- 3.3V/1.8V 双电压支持，无需电平转换，节约成本

##### 1.1.1 CPU
本芯片搭载基于 RISC-V ISA 的双核心 64 位的高性能低功耗 CPU，具备以下特性：

- 核心数量：  双核处理器
- 处理器位宽:   64-bit CPU 400MHz
- 标称频率:   400MHz 
- 指令集扩展:  IMAFDC
- 浮点处理单元(FPU):  双精度
- 平台中断管理:  PLIC
- 本地中断管理:  CLINT
- 指令缓存:  32KiB x 2
- 数据缓存:  32KiB x 2
- 片上 SRAM:  8MiB


#### 1.2    OV7740
- 支持输出格式：RAW RGB和YUV
- 支持图像尺寸：VGA，QVGA，CIF或其他更小尺寸
- 支持太阳黑子消除
- 支持内部和外部帧同步
- 标准SCCB串行接口
- 数字视频端口（DVP）并行输出接口 
- 嵌入式一次性可编程（OTP）存储器
- 片上锁相环（PLL）
- 用于内核的嵌入式1.5 V稳压器

##### 1.2.1 规格
- 阵列尺寸：656 x 488
- 电源： - 内核：1.5VDC±5％ - 模拟：3.3V±5％ -  I / O：1.7~3.47V
- 温度范围： - 工作：-30°C至70°C  - 稳定图像：0°C至50°C
- 输出格式： -  8/10位原始RGB数据 -  8位YUV
- 镜头尺寸：1/5"
- 输入时钟频率：6~27 MHz
- 最大图像传输速率：VGA（640x480）：60 fps  -  QVGA（320 x 240）：120 fp
- 灵敏度：6800 mV /（Lux-sec）
- 最大曝光间隔：502 x tROW
- 像素尺寸：4.2μm×4.2μm
- 图像面积：2755.2μm×2049.6μm
- 封装/管芯尺寸： -  CSP3：4185μm×4345 μm-COB：4200μm×4360μm


#### 1.3    MAX98357
- 单电源工作(2.5V至5.5V)
- 3.2W输出功率：4Ω，5V
- 2.4mA静态电流
- 92% 效率(RL = 8Ω,POUT = 1W)
- 22.8µVRMS输出噪声(AV = 15dB)
- 1kHz时，0.015% THD+N
- 无需MCLK
- 8kHz至96kHz采样速率 
- 支持左声道、右声道以及(左声道/2 + 右声道/2)输出
- 成熟的边沿速率控制可使D类放大器输出无需滤波
- 1kHz下，具有77dB PSRR
- 低RF敏感度，可抑制GSM发射的TDMA噪声
- 喀嗒声抑制电路

#### 1.4    AXP192
- 工作电压: 2.9V - 6.3V(AMR：-0.3V~15V)
- 可配置的智能电源选择系统
- 自适应USB或AC适配器输入的电流和电压限制
- 内部理想二极管的电阻低于100mΩ

#### 1.5    MPU6886

##### 1.5.1陀螺仪功能
MPU-6886中的三轴MEMS陀螺仪具有多种功能：
- 数字输出X，Y和Z轴角速率传感器（陀螺仪），用户可编程满量程范围为±250 dps，±500 dps，±1000 dps和±2000 dps，集成16- 位ADC
- 数字可编程低通滤波器
- 低功率陀螺仪操作
- 工厂校准的灵敏度比例因子
- 镜头尺寸：1/5“
- 自我测试

##### 1.5.2 加速度计功能
MPU-6886中的三轴MEMS加速度计包括多种功能：
- 数字输出X，Y和Z轴加速度计，可编程满量程范围为±2g，±4g，±8g和±16g，集成16位ADC
- 用户可编程中断
- 唤醒动作中断，用于应用处理器的低功耗操作
- 自我测试


## 应用/ M5Stick-V可以做什么？
- 面部识别/检测
- 物体检测/分类
- 实时获取目标的大小和坐标
- 实时获取检测到的目标类型
- 形状识别
- 视频/音频记录/显示
- 游戏模拟器


## 相关链接

-  **Web page** - [sipeed](https://maixpy.sipeed.com/en/)
-  **Quick Start Guide** - [M5StickV Guide](https://docs.m5stack.com/#/en/quick_start/m5stickv/m5stickv_quick_start)

-  **数据手册**

    - [MPU6886](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MPU-6886-000193%2Bv1.1_GHIC.PDF.pdf)
    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)

## 原理图
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_04.jpg" width="30%" height="30%">