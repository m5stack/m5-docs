# UnitV {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit-v/unit_v_01.webp" width="30%" height="30%">
<img src="assets/img/product_pics/unit/unit-v/unit_v_02.webp" width="30%" height="30%">
<img src="assets/img/product_pics/unit/unit-v/unit_v_04.webp" width="30%" height="30%">



## 描述

**UNIT-V**是一款搭载Kendryte K210的AI视觉处理摄像头单元，集成双核64位RISC-V CPU和最先进的神经网络处理器边缘计算片上系统.UNIT-V AI摄像头体积非常小巧，适合嵌入到各种设备当中，具备机器视觉处理能力，支持多种图像识别能力（ 如实时获取被检测目标的大小与坐标 • 实时获取被检测目标的种类），并且能够在低功耗情况下进行卷积神经网络计算，因此UNIT-V会是一个很好的零门槛机器视觉嵌入式解决方案.它支持MicroPython开发环境，这使得你在使用UNIT-V上进行项目开发时，程序代码将会更加精简.搭载OV2640 200万像素图像传感器，是机器视觉项目的理想选择.机身配备两个可编程按键，正面有一颗RGB LED指示灯，方便进行状态显示.底部提供一个兼容GROVE的PH2.0*4P接口和一个TYPE-C接口，可以与主控设备进行连接.支持TF卡扩展内存，相关素材及模型文件调用使用更方便.

<img src="assets/img/product_pics/unit/unit-v/unit_v_05.jpg" width="30%" height="30%">

### 产品特性:
- 双核 64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(Normal)
- 双精度 FPU
- 8MiB 64bit 片上 SRAM     
- 神经网络处理器（KPU） / 0.8Tops
- 可编程 I/O 阵列 (FPIOA)
- AES, SHA256 加速器
- 直接内存存取控制器  (DMAC)
- 支持 MicroPython
- 固件加密支持
- 板载硬件资源:
    - Flash:  16M
    - 摄像头 :OV2640
    - 按键:  button * 2
    - 指示灯:  RGB LED
    - 外部存储:  TF card/Micro SD
    - 接口:  PH2.0/兼容GROVE

## 应用/UNIT-V可以做什么
- 面部识别/检测
- 物体检测/分类
- 实时获取目标的大小和坐标
- 实时获取检测到的目标类型
- 形状识别
- 视频录制

### 尺寸重量

- 尺寸：4mm * 2.5mm * 1.5mm
- 重量：4g

### 包含

-  1x Unit V(包含20cm 4P连接线与USB-C连接线)

### 关于 KENDRYTE K210 
Kendryte K210 是集成机器视觉能力的系统级芯片 (SoC)。使用台积电 (TSMC) 超低功耗的 28 纳米先进制程，具有双核 64 位处理器，拥有较好的功耗性能，稳定性与可靠性。该方案力求零门槛开发，可在最短时效部署于用户的产品中，赋予人工智能应用.
- 具备机器视觉能力
- 更好的低功耗视觉处理速度与准确率 
- 具备卷积人工神经网络硬件加速器 KPU，可高性能进行卷积人工神经网络运算
- TSMC 28nm 先进制程，温度范围-40°C 到 125°C，稳定可靠
- 支持固件加密，难以使用普通方法破解 
- 独特的可编程 IO 阵列，使产品设计更加灵活
- 低电压，与相同处理能力的系统相比具有更低功耗
- 3.3V/1.8V 双电压支持，无需电平转换，节约成本

本产品搭载基于 RISC-V ISA 的双核心 64 位的高性能低功耗 CPU，具备以下特性
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

### 关于 OV2640
- 支持输出格式（8位）：
  - YUV(422/420)/YCbCr422
  - RGB565/555
  - 8位压缩数据
  - 8-/10位Raw RGB数据
- 根据特定格式的最大图像传输速率
  - UXGA/SXGA: 15fps
  - SVGA: 30fps
  - CIF: 60fps
- 扫描模式: 渐进式
- 相机规格
  - CCD 尺寸 : 1/4 inch
  - 视野 : 65 °
  - 最大像素: 2M
  - 传感器最佳分辨率: 1600 * 1200
  - 尺寸: 40 × 49 × 13mm


### SD卡测试

Unit V目前并不能识别所有类型的MicroSD卡，我们对一些常见的MicroSD卡进行了测试，测试结果如下.

<img src="assets\img\product_pics\unit\unit-v/unit-v-08.jpg" width="40%" height="40%">

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


## 相关链接

-  **Web page** - [sipeed](https://maixpy.sipeed.com/zh/)
-  **数据手册** - [K210](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/kendryte_datasheet.pdf)

### 案例程序

*完整代码下载 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/UnitV/track_ball)*

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/unitV.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/unitv-ai-camera';

   anchor_search(purchase_link);
   scrollFunc();

</script>