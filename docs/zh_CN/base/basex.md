# BaseX {docsify-ignore-all}

<img src="assets\img\product_pics\base\basex\basex_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\base\basex\basex_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-base/products/basex-industrial-board-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**BaseX** 是一款兼容乐高EV3电机的专用底座，结构设计上与BASE26类似，支持多种方式进行固定，并且额外提供一个乐高连接底座，在搭建乐高结构时可以将BaseX轻松嵌入到作品中。BaseX可同时接入4路(RJ11)乐高电机，支持角度/速度的读取和控制，完美兼容原有电机功能。此外，底座提供2个舵机接口，可以直接控制舵机旋转角度。为了适应不同的使用场景，提供一个UART接口（16/17)与一个GPIO接口(26/36），接入各类传感器更加灵活。底座内置一块600mAh电池，可通过M5Core的USB-C接口进行充电，延长使用续航时间。为了提高接口的驱动能力，在底座上配备了DC电源座，可以通过外部9-12V电源供电，为电机提供稳定的5V/2A电源。

<img src="assets/img/product_pics/base/basex/basex_05.jpg" width="30%" height="30%">


<img src="assets/img/product_pics/base/basex//basex_03.jpg" width="30%" height="30%"><img src="assets/img/product_pics/base/basex/basex_04.jpg" width="30%" height="30%">

## 产品特性

-  4路RJ11乐高电机接口（最大电流2A）
-  2路舵机驱动（最大电流2A）
-  1路UART
-  1路GPIO
-  板载DC-DC转换(9 ~ 12V -> 5V/2A)
-  内置600mAh电池
-  多种固定方式/支持乐高孔连接

## 尺寸重量

-  尺寸：54mm * 54mm * 32mm
-  重量：64g

## I2C控制说明

I2C从机地址: 0x22
<table>
<tr><td>电机编号</td><td>寄存器地址</td><td>取值范围</td></tr>
<tr><td>M1</td><td>0X00</td><td>-127~127</td></tr>
<tr><td>M2</td><td>0x01</td><td>-127~127</td></tr>
<tr><td>M3</td><td>0x02</td><td>-127~127</td></tr>
<tr><td>M4</td><td>0x03</td><td>-127~127</td></tr>
</table>

编码器读写范围:+-31位数据,采用大端模式存储数据
<table>
<tr><td>编码器编号</td><td>寄存器地址</td>
<tr><td>E1</td><td>0X20-0x23</td>
<tr><td>E2</td><td>0x24-0x27</td>
<tr><td>E3</td><td>0x28-0x2B</td>
<tr><td>E4</td><td>0x2C-0x2F</td>
</table>

舵机读写范围:0~180°
<table>
<tr><td>舵机编号</td><td>寄存器地址</td><td>取值范围</td></tr>
<tr><td>Servo1</td><td>0X10</td><td>0~180</td></tr>
<tr><td>Servo2</td><td>0x11</td><td>0~180</td></tr>
</table>

## 套件清单

-  1x BaseX
-  1x 乐高底座
-  2x M3 * 5mm 304不锈钢内六角螺栓
-  2x M3 * 32mm 304不锈钢内六角螺栓
-  1x M3内六角扳手


## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Base/BaseX.mp4" type="video/mp4">
</video>