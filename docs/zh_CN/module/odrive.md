# ODrive

<el-tag effect="plain">SKU:M036</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_01.webp"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_02.webp"></div>

## 描述

**ODrive** 是M5Stack推出的一款高性能伺服电机驱动模块，基于开源运动控制方案`ODrive`制作，支持控制单个三相伺服电机。

兼容官方配置工具与协议

工作方式: 通过PC上位机配置电机参数，通过UART发送指令控制电机位移。

- STM32F405R6T6 + DRV8301方案
- 峰值驱动电流5A

## 产品特性

- 单个三相伺服电机驱动
- 峰值驱动电流5A
- DC电源输入接口(要求适配器支持5A)
- 通信接口：UART
- 单通道伺服电机驱动/带编码器接口

## 包含

- 单模块版本
    * 1x ODrive Module
    * 1x 3.96-3P端子
    * 1x 3.96-2P端子
    * 1x 2.54-5P端子

- 配套电机版本
    * 1x ODrive Module
    * 1x 3.96-3P端子
    * 1x 3.96-2P端子
    * 1x 2.54-5P端子
    * 1x 伺服电机(详细参数见下方规格表)

## 应用

- 高精度运动控制
- 伺服电机驱动


## 规格参数

        相数：3
        电压: 24V-DC
        额定电流: 4A
        额定功率： 62W
        额定转速：3000rpm

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>选配的伺服电机规格</td>
      <td>DRV8301</td>
   </tr>
   <tr>
      <td>电机驱动芯片</td>
      <td>DRV8301</td>
   </tr>
   <tr>
      <td>最大驱动电流</td>
      <td>5A</td>
   </tr>
   <tr>
      <td>接口类型</td>
      <td>3.96-2P(电源), 3.96-3P(电机), 2.54-5P(编码器)</td>
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

- [DRV8301 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8301.pdf)

## 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>ODrive</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


## 原理图


## 案例程序


<script>

   var purchase_link = 'https://m5stack.com/products/grbl-module-13-2-stepmotor-driver-drv8825';

   anchor_search(purchase_link);
   scrollFunc();

</script>
