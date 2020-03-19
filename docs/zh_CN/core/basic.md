# BASIC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K001</div>

<div class="product_pic"><img class="pic" src="assets/img/product_pics/core/basic/basic_02.png"><img class="pic" src="assets/img/product_pics/core/basic/basic_03.png"></div>

## 描述

**M5Stack BASIC** 是M5Stack开发套件系列中的一款，拥有超高性价比与丰富案例资源的入门级开发套件.对于开发新手来说, Basic 是不二之选.

快速成型，超低门槛，直达产品级，M5Stack 开发板会是你物联网开发的不二之选.传统开发板只能用作验证和学习，M5的出现赋予了开发板更多的可能性，M5Stack 开发板采用了工业级外壳，再加上精致的外观设计，整体性能稳定，除了验证和学习的功能之外，还可以加速开发和产品化的进程.采用**ESP32**物联网芯片.集成Wi-Fi和蓝牙模块，拥有  4MB 的 SPI 闪存，双核低功耗的它在多种应用场景中有着非凡表现.由 30 多个 M5Stack [可堆叠模块](https://docs.m5stack.com/#/zh_CN/?id=module)，40 多个[可扩展单元](https://docs.m5stack.com/#/zh_CN/?id=unit)组成的硬件拓展体系，能够快速的帮助你搭建和验证你的物联网产品.

支持的开发平台和程序语言：Arduino，[UIFlow](http://flow.m5stack.com) (采用Blockly ，MicroPython语言). 无论你的开发和编程能力处在何种水平，M5Stack 都将协助你，逐步的将想法变为现实.

如果你开发过 ESP8266，你会发现 ESP32 是 ESP8266 的完美升级版.相比之下，ESP32 具有更多 GPIO ，更多的模拟输入和两个模拟输出，多个外设接口（如备用UART）.官方开发平台 ESP-IDF 已经移植了 FreeRTOS，借助双核与实时操作系统，能使你更加高效的去组织你的程序代码，优化程序的执行效率.

M5Stack Basic 由两个可分离部分堆叠组成. 顶部放置了电路板，芯片，各种电子元器件和一些接口组件.底部放置了锂电池，[M-BUS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/M-BUS.png) 总线母座和边缘的拓展引脚.

## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP32 开发
- 扬声器，按键x3，LCD屏幕（320 * 240），电源/复位按键x1
- 2.4G天线：Proant 440
- TF卡插槽（最大可拓展16GB）
- 电池总线母座和110 mAh锂电池
- 可拓展的引脚与接口
- Grove 接口
- M-Bus总线母座 & 引脚
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- 产品尺寸：58.2mm x 54.2mm x 17.9mm
- 产品重量：47.2g

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Core_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/BASIC.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该案例将执行喇叭，wifi，按键，加速计，SD卡，屏幕等硬件运行测试.</p>
        </div>
    </div>
</div>

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
 <tr><td>按键引脚</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td><td>  /</td></tr>
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
      <td>110mAh @ 3.7V</td>
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

有关引脚分配和引脚重新映射的更多信息，请参考[ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)


## 套件清单

-  1x BASIC
-  10x 杜邦线
-  1x Type-C USB(20cm)
-  1x 使用手册
-  1x 贴纸

## 相关链接

-  **Datasheet** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

## 原理图

- [原理图](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5-Core-Schematic(20171206).pdf)

## 版本变更

<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr> 
            <th>上市日期</th>
            <th>产品变动</th>
            <th>备注：</th>
        </tr>
        </thead>    
        <tbody>
        <tr>
            <td>2017.7</td>
            <td>首次发售</td>
            <td>/</td>
        </tr>
        <tr>
            <td>2019.7</td>
            <td>TN屏幕变更为IPS屏幕</td>
            <td>请将您的M5Stack库升级到最新版本（v0.2.8以上），以解决屏幕反色问题。</td>
        </tr>
         <tr>
            <td>2020.3</td>
            <td>电池容量150mAh变更为110mAh</td>
            <td>/</td>
         </tr>
        <tbody>
    </table>
</div>


## Example

- [Arduino Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)

## 相关视频

**M5Stack 的简介**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   var quickstart_link = '/#/zh_CN/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>