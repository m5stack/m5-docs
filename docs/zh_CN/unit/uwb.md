# UWB

<el-tag effect="plain">SKU:U010</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/tof/unit_tof_01.webp"><img src="assets/img/product_pics/unit/tof/unit_tof_02.webp"></div>

## 描述

**UWB** 是M5Stack推出的一款具备室内定位技术的无线通信Unit. 该设计采用基于Decawave的DW1000设计的超宽带（UWB）收发器模组。
集成天线，RF电路，电源管理和时钟电路。用于双向测距或TDOA定位系统中，定位精度:10厘米，数据速率:6.8 Mbps的数据速率，内置STM32，集成测距算法，AT指令控制。


UWB技术是一种使用1GHz以上频率带宽的无线载波通信技术。
它不采用正弦载波，而是利用纳秒级的非正弦波窄脉冲传输数据，
因此其所占的频谱范围很大，尽管使用无线通信，
使用UWB技术可在非常宽的带宽上传输信号
但其数据传输速率可以达到几百兆比特每秒以上。

## 产品特性

- 高精度
- 内置STM32集成测距算法
- AT指令控制
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 套件清单

- 1x UWB Unit
- 1x Grove 线

## 应用

- 室内定位

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## 相关链接

- **[VL53L0X Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/VL53L0X_en.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ToF_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_ToF_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ToF_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示当前测距数据.</p>
        </div>
    </div>
</div>

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ToF_VL53L0X)

### 2. UIFlow

[请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.webp">

## 原理图

[ToF Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Units/UNIT_TOF.pdf)

<img src="assets/img/product_pics/unit/tof/unit_tof_sch_01.webp">

### 管脚映射

<table>
 <tr><td>M5Core</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>UWB Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
