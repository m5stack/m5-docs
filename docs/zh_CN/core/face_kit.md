# FACES Kit {docsify-ignore-all}

<el-tag effect="plain">SKU:K005</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/core/faces_kit/face_01.webp"><img src="assets/img/product_pics/core/faces_kit/face_02.webp"></div>

## 教程&快速上手

选择你想使用的开发平台，查看对应的教程&快速上手。

<a href="/#/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython"><el-tag effect="plain">UIFlow</el-tag></a>
<a href="/#/zh_CN/arduino/arduino_development"><el-tag effect="plain">Arduino</el-tag></a>

## 描述

**FACES Kit** 是一系列功能面板的集合.套件内包含了三个常用的功能面板，"GameBoy（游戏键盘）"、"Calculator（计算器键盘）"、"QWERTY（输入全键盘）".内部集成**MEGA328**处理器，通过I2C通信协议（0x08）工作在从机模式下.根据需求去运用这3个不同的功能面板，进而实现用户与M5Core之间的人机交互.

**开关机操作：**

* 开机：单击左侧红色电源键

* 关机：快速双击左侧红色电源键

## 产品特性

- 基于 ESP32 开发
- 内置陀螺仪加速计与磁力计
- 内置扬声器，按键，LCD屏幕，电源/复位按键x1
- TF卡插槽（最大可拓展16GB）
- M-BUS总线母座
- 磁吸式充电设计
- 内置锂电池
- 可拓展的引脚与接口
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## 包含

- 1x GRAY
- 1x FACES 充电座
- 1x FACES 挂绳
- 1x 面板贴纸
- 3x FACES 键盘(GameBoy, Calculator, QWERTY)
- 8x 杜邦线
- 6x M3x10 螺丝
- 1x 六角螺丝扳手
- 1x Type-C USB(100cm)

## 应用

- 游戏机
- 计算器
- 数据输入外设
- 物联网控制器

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32-D0WDQ6</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16MB(旧版4MB)</td>
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
      <td>Core底座接口</td>
      <td>PIN (G1，G2，G3，G16, G17, G18, G19, G21, G22, G23, G25, G26, G35, G36)</td>
   </tr>
   <tr>
      <td>IPS屏幕</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342C，最高亮度853nit</td>
   </tr>
   <tr>
      <td>扬声器</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>按键</td>
      <td>自定义按键 x 3</td>
   </tr>
   <tr>
      <td>天线</td>
      <td>2.4G 3D天线</td>
   </tr>
   <tr>
      <td>锂电池</td>
      <td>600mAh @ 3.7V</td>
   </tr>
    <tr>
      <td>MEMS</td>
      <td>MPU6886+BMM150</td>
   </tr>
   <tr>
      <td>2.4G天线</td>
      <td>Proant 440</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>264g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>58.2mm x 54.2mm x 18.7mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>120mm x 85mm x 65mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_FACES_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_FACES_FactoryTest.dmg">MacOS</a>
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

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## M5端口说明

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>备注:</th>
      </thead>
      <tbody>
      <tr>
         <td>PORT-A(红色)</td>
         <td>G21/22</td>
         <td>I2C</td>
      </tr>
      <tr>
         <td>PORT-B(黑色)</td>
         <td>G26/36</td>
         <td>DAC/ADC</td>
      </tr>
      <tr>
         <td>PORT-C(蓝色)</td>
         <td>G16/17</td>
         <td>UART</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC

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

## IP5306充/放电，电压参数

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

有关引脚分配和引脚重新映射的更多信息，请参考[ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)

## 相关链接

- **Datasheet**

    - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [BMM150](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)
    - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

## 原理图

- [原理图](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5-Core-Schematic(20171206).pdf)

### 底座

<img src="assets\img\product_pics\core\faces_kit\Faces_bottom_sch.webp" width="70%">

### 键盘

<img src="assets\img\product_pics\core\faces_kit\Faces_keyboard_sch.webp" width="70%">

### 计算器

<img src="assets\img\product_pics\core\faces_kit\Faces_calculator_sch.webp" width="70%">

### 游戏面板

<img src="assets\img\product_pics\core\faces_kit\Faces_gameboy_sch.webp" width="70%">

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

## 案例程序

### ArduinoIDE

- 点击[这里](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)获取Arduino示例

### GameBoy Keyboard

如果你想用 M5Core 玩一些经典小游戏，那么使用GameBoy面板和 M5Core 会是完美的方案.你需要做的就是将游戏模拟器程序上传到 M5Core 上，并连接好 GameBoy 面板.连接图如下:

ESPTool烧录游戏教程：https://docs.m5stack.com/#/zh_CN/quick_start/faces/gameboy_burn_a_nes_game

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/Faces_kit/Faces_GameBoy_BladeBuster.exe">点击此处一键烧录示例游戏</a>


另外两个面板是计算器键盘和输入全键盘，你可以将它们运用在那些需要输入信息以及复杂控制的应用场景中.
<mark>拆卸更换面板时，为降低拆卸难度，建议先拆卸M5Core，然后拆解面板.</mark>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5go-iot-starter-kit-stem-education';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>