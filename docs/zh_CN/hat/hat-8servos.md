# 8Servos HAT

<el-tag effect="plain">SKU:U076</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\8servos_hat\8servos_01.webp"> <img src="assets\img\product_pics\hat\8servos_hat\8servos_02.webp"></div>

## 描述

**8Servos HAT**是一款兼容M5StickC的8路舵机控制板，主控为STM32F030F4，通过I2C的方式与M5StickC进行通信，为了保证多个舵机同时工作，控制板配备了独立的16340电池底座用来供电，由独立开关进行控制，此外在控制板上集成了一颗RGB指示灯。你可以使用它来控制SG90舵机，完成一些角度的精准操作。

## 产品特性

- 八路舵机控制
- 1xRGB LED
- 16340电池底座
- IIC协议控制(0x38)

## 应用

- 舵机控制器
- 机器人控制
- 智能玩具

## 包含

- 1x 8Servos-HAT
- 1x 16340电池(700mAh)

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>27g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*24*20mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>75*46*29mm</td>
   </tr>
 </table>

<img src="assets\img\product_pics\hat\8servos_hat\8servos_05.webp" width="50%">


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_8Servos_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_8Servos_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/8Servos_hat.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该测试程序将测试8Servos HAT模块每个端口的舵机驱动功能是否正常.</p>
        </div>
    </div>
</div>

## 引脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3V3V</td><td>GND</td></tr>
 <tr><td>8Servos</td><td>SDA</td><td>SCL</td><td>Vin</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/8serves-hat/Arduino)

### 2. UIFlow

<img src="assets\img\product_pics\hat\8servos_hat\8servos.webp" width="30%" height="30%">


## 舵机控制说明

> 1.功能说明

	(1)八路舵机控制

	(2)板载sk6812 LED控制

> 2.通讯方式

	I2C,速率最大400HZ,地址支持自加

	设备地址：0x38

    地址	默认值	说明

    00H	0X00	CH1角度输出

    01H	0X00	CH2角度输出

    02H	0X00	CH3角度输出

    03H	0X00	CH4角度输出

    04H	0X00	CH5角度输出

    05H	0X00	CH6角度输出

    06H	0X00	CH7角度输出

    07H	0X00	CH8角度输出

> 3.I2C地址说明

	00H(R/W)舵机角度寄存器

	说明：

	（1）数据可连续读写

	（2）每个寄存器值表示度数可写入0-180

>	10H(R/W)舵机脉宽寄存器

    地址	默认值	说明

    10H	0X00	CH1_WIDTH[8:15]

    11H	0X00	CH1_WIDTH[0:7]

    12H	0X00	CH2_WIDTH[8:15]

    13H	0X00	CH2_WIDTH[0:7]

    14H	0X00	CH3_WIDTH[8:15]

    15H	0X00	CH3_WIDTH[0:7]

    16H	0X00	CH4_WIDTH[8:15]

    17H	0X00	CH4_WIDTH[0:7]

    18H	0X00	CH5_WIDTH[8:15]

    19H	0X00	CH5_WIDTH[0:7]

    1AH	0X00	CH6_WIDTH[8:15]

    1BH	0X00	CH6_WIDTH[0:7]

    1CH	0X00	CH7_WIDTH[8:15]

    1DH	0X00	CH7_WIDTH[0:7]

    1EH	0X00	CH8_WIDTH[8:15]

    1FH	0X00	CH8_WIDTH[0:7]

    说明：

	（1）数据可连续读写

>   20H(R/W)LED_RGB寄存器

    地址	默认值	说明

    20H	0X00	G[0:7]

    21H	0X00	R[0:7]

    22H	0X00	B[0:7]

说明：

	（1）数据可连续读写

	（2）RGB888

<script>

   var purchase_link = 'https://m5stack.com/products/m5stickc-8servos-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>