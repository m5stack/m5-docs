# GRBL 13.2

<el-tag effect="plain">SKU:M035</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_01.webp"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_02.webp"></div>

## 描述

**GRBL 13.2** 是M5Stack堆叠模块系列中的一款三轴步进电机驱动模块，采用ATmega328P-AU控制器搭配三组DRV8825PWPR步进电机驱动芯片控制方案，能够同时驱动三台双极步进电机联动。提供I2C通信接口(addr:0x70)并集成拨码开关用于调节电机步进细分(最大支持1/32步进细分)与I2C地址调节(支持双地址调节0x70,0x71)，这意味着你可以通过堆叠两块**GRBL 13.2**模块实现六轴控制。电源输入接口为DC/9-24V，电机驱动电流可达1.5A，开放三组限位开关信号接口，能够用于外接限位开关实现电机制动功能。适用于多种步进电机运动控制场景，如打印机，机械臂等。

## 产品特性

- ATmega328P-AU 控制器
- 三轴DRV8825PWPR步进电机驱动器
- 驱动电流可达1.5A
- 驱动双极步进电机
- 最大1/32模式STEP细分

## 包含

- 1x GRBL 13.2 Module

## 应用

- 打印机
- 扫描仪
- 办公自动化机器
- 工厂自动化
- 机器人技术


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>电机驱动芯片</td>
      <td>DRV8825PWPR</td>
   </tr>
   <tr>
      <td>控制器芯片</td>
      <td>ATmega328P-AU</td>
   </tr>
   <tr>
      <td>单通道最大驱动电流</td>
      <td>1.5A</td>
   </tr>
   <tr>
      <td>支持最大步进细分</td>
      <td>1/32</td>
   </tr>
   <tr>
      <td>接口类型</td>
      <td>XT2.54-4P</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>22.5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>42.3g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

 ## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_GRBL13.2.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_GRBL13.2.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/GRBL13.2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下按钮驱动三轴步进电机转动，当发生锁定时按下按键C解锁</p>
        </div>
    </div>
</div>


## 相关链接

- [DRV8825 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)

## 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO21</td><td>GPIO22</td><td>5V</td><td>GND</td></tr>
 <tr><td>GRBL 13.2</td><td>SDA</td><td>SCL</td><td>VCC</td><td>GND</td></tr>
</table>


## 原理图

<img src="assets/img/product_pics/module/grbl13.2/grbl13.2_sch.webp"/>

<img src="assets/img/product_pics/module/grbl13.2/grbl13.2_03.webp">

## 步进细分调节

<table>
 <tr><td>MODE2</td><td>MODE1</td><td>MODE0</td><td>STEP MODE</td></tr>
 <tr><td>0</td><td>0</td><td>0</td><td>Full step (2-phase excitation) with 71% current</td></tr>
 <tr><td>0</td><td>0</td><td>1</td><td>1/2 step (1-2 phase excitation)</td></tr>
 <tr><td>0</td><td>1</td><td>0</td><td>1/4 step (W1-2 phase excitation)</td></tr>
 <tr><td>0</td><td>1</td><td>1</td><td>1/8 step</td></tr>
 <tr><td>1</td><td>0</td><td>0</td><td>1/16 step</td></tr>
 <tr><td>1</td><td>0</td><td>1</td><td>1/32 step</td></tr>
 <tr><td>1</td><td>1</td><td>0</td><td>1/32 step</td></tr>
 <tr><td>1</td><td>1</td><td>1</td><td>1/32 step</td></tr>
</table>

## I2C地址调节

<table>
 <tr><td>Switch</td><td>Address</td></tr>
 <tr><td>0</td><td>0x70</td></tr>
 <tr><td>1</td><td>0x71</td></tr>
</table>

## 案例程序

- [Arduino Example Code](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/GRBL13.2)

<script>

   var purchase_link = 'https://m5stack.com/products/grbl-module-13-2-stepmotor-driver-drv8825';

   anchor_search(purchase_link);
   scrollFunc();

</script>
