# M5StickV {docsify-ignore-all}

<el-tag effect="plain">SKU:K027</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_01.webp"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_02.webp"></div>

## 教程&快速上手

选择你想使用的开发平台，查看对应的教程&快速上手。

<a href="/#/zh_CN/quick_start/unitv/v_function"><el-tag effect="plain">V-Function</el-tag></a>
<a href="/#/zh_CN/related_documents/v-training"><el-tag effect="plain">V-Training</el-tag></a>
<a href="/#/zh_CN/quick_start/m5stickv/m5stickv_quick_start_maixpy"><el-tag effect="plain">Maixpy</el-tag></a>

## 描述

**M5Stick-V RISC-V AI 摄像头**

**M5Stick-V**是一款搭载Kendryte K210的AIOT（AI + IOT）摄像头，集成双核64位RISC-V CPU和最先进的神经网络处理器边缘计算片上系统（SoC）

M5stickV AI 摄像头具备机器视觉能力，配备OmniVision OV7740图像传感器，采用OmniPixel®3-HS技术，提供相比同类最佳的低光灵敏度，支持多种视觉识别能力的它（ 如实时获取被检测目标的大小与坐标 • 实时获取被检测目标的种类），并且能够在低功耗情况下进行卷积神经网络计算，因此M5StickV会是一个很好的零门槛机器视觉嵌入式解决方案,支持MicroPython开发环境，这使得你在使用M5stick-V上进行项目开发时，程序代码将会更加精简.

**开关机操作：**

* 开机：按复位按键，持续至少 2 秒

* 关机：按复位按键，持续至少 6 秒

### 产品特性:
- 双核 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)
- 双精度 FPU 
- 神经网络处理器（KPU） / 0.8Tops
- 可编程 IO 阵列 (FPIOA)
- 双硬件512点16位复数FFT
- SPI, I2C, UART, I2S, RTC, PWM, 定时器支持
- AES, SHA256 加速器
- 直接内存存取控制器  (DMAC)
- 支持 Micropython
- 固件加密支持

## 包含

-  1x M5StickV
-  1x USB Type-C(100cm)
-  1x 支架
-  1x 六角扳手

## 应用
- 面部识别/检测
- 物体检测/分类
- 实时获取目标的大小和坐标
- 实时获取检测到的目标类型
- 形状识别
- 视频/显示
- 游戏模拟器

## 常见驱动问题

>UnitV/M5StickV/M5StickC/ATOM主控在部分系统中，可能无法免驱工作，用户可以通过手动安装[FTDI驱动](https://ftdichip.com/drivers/vcp-drivers/)修复该问题。

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>Kendryte K210</td>
      <td>双核 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)</td>
   </tr>
   <tr>
      <td>SRAM</td>
      <td>8MiB</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16M</td>
   </tr>
   <tr>
      <td>输入电压</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>KPU神经网络参数大小</td>
      <td>5.5MiB - 5.9MiB</td>
   </tr>
   <tr>
      <td>主机接口</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>RGBW x 1</td>
   </tr>
   <tr>
      <td>按键</td>
      <td>自定义按键 x 2</td>
   </tr>
   <tr>
      <td>IPS屏幕</td>
      <td>1.14 TFT, 135*240, ST7789</td>
   </tr>
   <tr>
      <td>摄像头</td>
      <td>OV7740</td>
   </tr>
   <tr>
      <td>FOV</td>
      <td>55°</td>
   </tr>
   <tr>
      <td>PMU</td>
      <td>AXP192</td>
   </tr>
   <tr>
      <td>锂电池</td>
      <td>200mAh</td>
   </tr>
   <tr>
      <td>外部存储</td>
      <td>TF-card(microSD)</td>
   </tr>
   <tr>
      <td>MEMS六轴传感器</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>23g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>82g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*22mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>144*44*43mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## TF-card(microSD)测试

M5StickV目前并不能识别所有类型的TF-card(microSD)，我们对一些常见的TF-card进行了测试，测试结果如下.

<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_08.webp" width="30%" height="30%">

<table class="table_center">
   <tr style="font-weight:bold" >
      <td>品牌</td>
      <td>内存</td>
      <td>类型</td>
      <td>传输速度</td>
      <td>分区格式</td>
      <td>测试结果</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>8G</td>
      <td>HC</td>
      <td>Class4</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>16G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>Kingston</td>
      <td>64G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>exFAT</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>16G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>64G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>SanDisk</td>
      <td>128G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>XIAKE</td>
      <td>16G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK(紫色)</td>
   </tr>
   <tr>
      <td>XIAKE</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>FAT32</td>
      <td>OK</td>
   </tr>
   <tr>
      <td>XIAKE</td>
      <td>64G</td>
      <td>XC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
   <tr>
      <td>TURYE</td>
      <td>32G</td>
      <td>HC</td>
      <td>Class10</td>
      <td>/</td>
      <td>NO</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickV_v5.1.2.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5StickV.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>搭载Maixpy固件，测试摄像头，屏幕图形显示功能，单击HOME键可开关背部补光灯.</p>
        </div>
    </div>
</div>

## 功能描述

### KENDRYTE K210 

Kendryte K210 是集成机器视觉能力的系统级芯片 (SoC)。使用台积电 (TSMC) 超低功耗的 28 纳米先进制程，具有双核 64 位处理器，拥有较好的功耗性能，稳定性与可靠性。该方案力求零门槛开发，可在最短时效部署于用户的产品中，赋予产品人工智能.<br><br>
- 具备机器视觉能力
- 更好的低功耗视觉处理速度与准确率 
- 具备卷积人工神经网络硬件加速器 KPU，可高性能进行卷积人工神经网络运算
- TSMC 28nm 先进制程，温度范围-40°C 到 125°C，稳定可靠
- 支持固件加密，难以使用普通方法破解 
- 独特的可编程 IO 阵列，使产品设计更加灵活
- 低电压，与相同处理能力的系统相比具有更低功耗
- 3.3V/1.8V 双电压支持，无需电平转换，节约成本

### CPU

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

### OV7740

- 支持输出格式：RAW RGB和YUV
- 支持图像尺寸：VGA，QVGA，CIF或其他更小尺寸
- 支持太阳黑子消除
- 支持内部和外部帧同步
- 标准SCCB串行接口
- 数字视频端口（DVP）并行输出接口 
- 嵌入式一次性可编程（OTP）存储器
- 片上锁相环（PLL）
- 用于内核的嵌入式1.5 V稳压器
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

### MAX98357

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

### AXP192

- 工作电压: 2.9V - 6.3V(AMR：-0.3V~15V)
- 可配置的智能电源选择系统
- 自适应USB或AC适配器输入的电流和电压限制
- 内部理想二极管的电阻低于100mΩ

### MPU6886

#### 陀螺仪功能

- 数字输出X，Y和Z轴角速率传感器（陀螺仪），用户可编程满量程范围为±250 dps，±500 dps，±1000 dps和±2000 dps，集成16- 位ADC
- 数字可编程低通滤波器
- 低功率陀螺仪操作
- 工厂校准的灵敏度比例因子
- 镜头尺寸：1/5“
- 自我测试

#### 加速度计功能

- 数字输出X，Y和Z轴加速度计，可编程满量程范围为±2g，±4g，±8g和±16g，集成16位ADC
- 用户可编程中断
- 唤醒动作中断，用于应用处理器的低功耗操作
- 自我测试

#### SPI/I2C双通信模式


<mark>注意事项:当前M5Stack发行的M5StickV存在两种版本，用户编程使用时需根据其对应的引脚映射进行不同的配置，具体区别如下.</mark>

- I2C单模式(蓝色PCB)版本的M5StickV电路设计中，MPU6886仅支持用户配置其通信模式为I2C，其引脚映射为SCL-28,SDA-29.

- SPI/I2C双模式(黑色PCB)版本的M5StickV电路设计中，MPU6886支持用户配置其通信模式为SPI或I2C，其引脚映射为SCL-26,SDA-27.,使用时，可通过切换CS引脚电平来切换模式(高电平1为I2C模式，低电平0为SPI模式)
- 具体引脚映射如下图所示：

<img src="assets\img\product_pics\core\minicore\m5stickv\m5stickv_mpu6886_sch.webp">

## 相关链接

-  **Datasheet**

    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [SH200Q](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SH200Q_en.pdf)

-  **Web page** 
   - [sipeed](https://maixpy.sipeed.com/en/)
-  **Quick Start Guide** 
   - [M5StickV Guide](https://docs.m5stack.com/#/zh_CN/quick_start/m5stickv/m5stickv_quick_start)
-  **Github** 
   - [API](https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv)

## 原理图

<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_04.webp" width="30%" height="30%">

- [K210_CAM](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/k210_CAMv2.pdf)

## 案例程序

-  **Maixpy参考示例** [Example](https://docs.m5stack.com/#/zh_CN/related_documents/M5StickV-Maixpy)

## 版本变更

<table>
   <thead>
      <tr> 
         <th>上市日期</th>
         <th>产品变动</th>
         <th>备注：</th>
      </tr>
   </thead>    
   <tbody>
      <tr>
         <td>2019.7</td>
         <td>首次发售</td>
         <td>/</td>
      </tr>
      <tr>
         <td>2020.3</td>
         <td>电路支持配置MPU6886使用SPI或I2C协议进行通信。I2C引脚变更SCL(28=>26),SDA(29=>27)</td>
         <td>程序上驱动片选引脚CS进行模式修改，高电平1为I2C模式，低电平0为SPI模式。</td>
      </tr>
      <tr>
         <td>2020.3</td>
         <td>增加麦克风</td>
         <td>/</td>
      </tr>
      <tr>
         <td>2020.4</td>
         <td>添加支架配件</td>
         <td>/</td>
      </tr>
   <tbody>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stickv';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5stickv/m5stickv_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>