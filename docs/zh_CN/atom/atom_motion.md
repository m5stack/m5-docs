# ATOM Motion

<el-tag effect="plain">SKU:K050</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_01.webp"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_02.webp"></div>

## 描述

**ATOM Motion** 是适配ATOM主控系列的舵机&DC电机驱动方案，内部集成STM32控制芯片，采用I2C通信控制方式。提供4通道舵机，2通道DC电机接口。集成规格16340锂电池(容量700mAh)。

两路HY2.0-4P接口拓展，对4个PIN脚进行了引出，能够用于外接一些传感器与拓展设备。


## 产品特性

- 4通道舵机控制
- 2通道直流电机控制
- 内嵌锂电池
- HY2.0-4P拓展接口


## 管脚映射

- I2C Interface: **0x38**

<table>
 <tr><td>ATOM</td><td>G21</td><td>G25</td></tr>
 <tr><td>ATOM Motion</td><td>SCL</td><td>SDA</td></tr>
</table>

- HY2.0-4P

<table>
 <tr><td>ATOM</td><td>G23、G33</td><td>G22、G19</td></tr>
 <tr><td>ATOM Motion</td><td>PORT-B(Black)</td><td>PORT-C(Blue)</td></tr>
</table>

## I2C寄存器

- I2C Address: **0x38**                                       

<table>
 <tr><td>Function</td><td>Reg Address</td><td>Data Range</td><td>R/W</td></tr>
 <tr><td>Servo(1~4)</td><td>0x00~0x03</td><td>angle: 0-180</td><td>R/W<</td></tr>
 <tr><td>Servo(1~4)</td><td>0x10~0x17</td><td>pulse: 500-2500</td><td>R/W<</td></tr>
 <tr><td>Motor(1~2)</td><td>0x20~0x21</td><td>speed: -127-127</td><td>R/W<</td></tr>
</table>


## 原理图

<img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_sch.webp">

## 案例程序

- [Arduino代码示例](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Motion)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-h-bridge-driver-kit-drv8876';

   anchor_search(purchase_link);
   scrollFunc();

</script>

