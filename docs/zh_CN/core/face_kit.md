# FACES Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/faces_kit/face_01.webp" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_02.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_03.jpg" width="30%" height="30%" >



## 描述

**FACES Kit** 是一系列功能面板的集合.套件内包含了三个常用的功能面板，"GameBoy（游戏键盘）"、"Calculator（计算器键盘）"、"QWERTY（输入全键盘）".内部集成**MEGA328**处理器，通过I2C通信协议（0x08）工作在从机模式下.根据需求去运用这3个不同的功能面板，进而实现用户与M5Core之间的人机交互.

### GameBoy Keyboard

如果你想用 M5Core 玩一些经典小游戏，那么使用GameBoy面板和 M5Core 会是完美的方案.你需要做的就是将游戏模拟器程序上传到 M5Core 上，并连接好 GameBoy 面板.连接图如下:


*下载游戏：https://docs.m5stack.com/#/zh_CN/quick_start/faces/gameboy_burn_a_nes_game*

*EasyLoader(仅提供win10版本)*：<a href="">点击此处，下载案例游戏程序一键烧录器</a>

<img src="assets/img/product_pics/core/faces_kit/face_05.jpg">

另外两个面板是计算器键盘和输入全键盘，你可以将它们运用在那些需要输入信息以及复杂控制的应用场景中.
<mark>拆卸更换面板时，为降低拆卸难度，建议先拆卸M5Core，然后拆解面板.</mark>

### Calculator Keyboard

<img src="assets/img/product_pics/core/faces_kit/calculator.png">

### QWERTY Keyboard

<img src="assets/img/product_pics/core/faces_kit/face_04.jpg">

### FACE Charger

除了三个功能面板之外，套件内还提供了 Face 的专用充电座（充电座内置磁铁，能够稳定的吸附主机，并通过 POGO pin 对主机进行充电），杜邦线等配件.

<img src="assets/img/product_pics/core/faces_kit/charger.png">

关于本套件中的主机"Gray"的更多信息，请点击查看**Gray套件**

**注意：** 

新生产的M5Core更换了显示效果与可视角更加优质的屏幕，因此与旧版的Arduino库产生了一些兼容性问题，使用旧版程序库进行屏幕驱动时会产生反色显示的现象，您可以打开Arduino的库管理选项将您的M5Stack库升级至最新版本（0.2.8以后）来解决这个问题.

<img src="assets\img\product_pics\core\basic\lib_01.jpg" width="40%">
<br><br><br>
<img src="assets\img\product_pics\core\basic\lib_02.jpg" width="40%">

## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP32 开发
- 16 MByte flash(旧版：4 MByte flash)
- BMM150 + MPU6886
- 扬声器，按键x3，LCD屏幕（320 * 240），电源/复位按键x1
- 2.4G天线：Proant 440
- TF卡插槽（最大可拓展16GB）
- 电池总线母座和 600 mAh 锂电池
- 可拓展的引脚与接口
- Grove 接口
- M-Bus总线母座 & 引脚
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- 产品尺寸：58.2mm x 54.2mm x 18.7mm
- 产品重量：264.6g


## 套件清单:

- 1x GRAY
- 1x FACES 充电座
- 1x FACES 挂绳
- 1x 面板贴纸
- 3x FACES 键盘(GameBoy, Calculator, QWERTY)
- 8x 杜邦线
- 6x M3x10 螺丝
- 1x 六角螺丝扳手
- 1x Type-C USB(100cm)

<img src="assets/img/product_pics/core/faces_kit/faces_kit.png">

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_FACES_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/FACES.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该案例将默认运行FACES键盘输入测试程序，重启选择程序列表可以切换不同的面板测试项.</p>
        </div>
    </div>
</div>


### 相关链接

- **数据手册**

    - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [BMM150](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)

- **寄存器手册** 

    - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)


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
            <td>2017.12</td>
            <td>首次发售</td>
        </tr>
        <tr>
            <td>2019.6</td>
            <td>MPU9250变更为MPU6886+BMM150</td>
        </tr>
        <tr>
            <td>2019.7</td>
            <td>TN屏幕变更为IPS屏幕</td>
        </tr>
        <tbody>
    </table>
</div>


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">



**<mark>Notice：M5PORT 说明 </mark>**
*不同颜色的GROVE端口分别代表不同的功能.红色的PortA（21/22），为默认的I2C协议接口，黑色的PortB（26/36）, 支持DA/AD转换与信号总线通信.蓝色的PortC（16/17）, 支持Uart串口通信.在使用Unit进行功能拓展的时候，只需要匹配二者的端口的颜色，相应的进行连接即可正常使用.不仅提供简洁的硬件连接方式，还支持引脚的重映射.PortA（红色）被作为信号总线连接至是ESP32的GPIO21/22 ，没有AD通道转换方案，因此不能用作模拟输入使用.

- ADC1(8 通道 GPIO 32-39)
- ADC2(10 通道 GPIO 0，2，4，12-15，25-27)

使用AD读取功能:
1，使用杜邦线连接机身侧面的能够AD转换的引脚.
2，堆叠一个M5GO底座，使用其提供PortB.
3，使用PbHUB连接至PortA，拓展出6个PortB.
有关引脚分配和引脚重映射的更多信息，请查阅[ESP32数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

<br>
**<mark>注意3：Face Kit 出厂程序</mark>**<br>
出厂程序由于没有main.py文件，因此错误信息提示是正常的，并不意味着硬件问题,请放心使用. <br>
<img src="assets/img/product_pics/core/faces_kit/faces_kit_06.png" width="30%" hight="30%">

## 案例程序

- [例程](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)

## 用户作品
- **[2048 Game with FACES Kit- Video](https://www.youtube.com/watch?v=ccEq0s7dU84)**
- **[2048 Game with FACES Kit- Source Code](https://github.com/phillowcompiler/2048_M5Stack)**

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5go-iot-starter-kit-stem-education';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>