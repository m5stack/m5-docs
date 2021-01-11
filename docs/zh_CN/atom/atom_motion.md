# ATOM Motion

<el-tag effect="plain">SKU:K050</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_01.webp"><img src="assets/img/product_pics/atom_base/atom_hdriver/atom_hdriver_02.webp"></div>

## 描述

**ATOM Motion** 是适配ATOM主控系列的舵机&DC电机驱动方案，内部集成

提供4通道舵机，2通道DC电机接口。不具备独立供电，因此仅建议用于负载场景。

两路HY2.0-4P接口拓展，对4个PIN脚进行了引出，能够用于外接一些传感器与拓展设备。


## 产品特性

4 channel servo
2 channel DC motor


## 管脚映射

<table>
 <tr><td>ATOM</td><td>G22</td><td>G19</td><td>G23</td><td>G33</td></tr>
 <tr><td>Hdriver</td><td>FAULT</td><td>IN1</td><td>IN2</td><td>VIN-1/10</td></tr>
</table>

## I2C寄存器

- I2C Address: **0x38**

<table>
 <tr><td>Function</td><td>Reg Address</td><td>Data Range</td><td>R/W</td></tr>
 <tr><td>Servo</td><td></td><td>/</td><td>CLK</td><td>CS</td></tr>
 <tr><td>Motor</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>



