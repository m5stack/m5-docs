# BaseX {docsify-ignore-all}

<img src="assets\img\product_pics\base\basex\basex_01.webp" width="30%" height="30%"><img src="assets\img\product_pics\base\basex\basex_02.webp" width="30%" height="30%"><img src="assets/img/product_pics/base/basex/basex_03.webp" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-base/products/basex-industrial-board-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**BaseX** 是一款兼容乐高EV3电机的专用底座，结构设计上与BASE26类似，支持多种方式进行固定，并且额外提供一个乐高连接底座，在搭建乐高结构时可以将BaseX轻松嵌入到作品中。BaseX可同时接入4路(RJ11)乐高电机，支持角度/速度的读取和控制，完美兼容原有电机功能。此外，底座提供2个舵机接口，可以直接控制舵机旋转角度,一个内置的PDM麦克风可以采集声音。为了适应不同的使用场景，提供一个UART接口（16/17)与一个GPIO接口(26/36），接入各类传感器更加灵活。底座内置一块900mAh电池，可通过M5Core的USB-C接口进行充电，延长续航时间。为了提高接口的驱动能力，在底座上配备了DC电源插孔，可以通过外部9-12V直流电源为电机供电(不能通过底座进行充电)。

<img src="assets/img/product_pics/base/basex/basex_04.webp" width="30%" height="30%">

## 产品特性

-  4路RJ11乐高电机接口（底座合计最大电流输出能力2A）
-  2路舵机驱动（底座合计最大电流输出能力2A）
-  1路UART
-  1路GPIO
-  内置PDM麦克风(GPIO 34)
-  板载DC-DC转换(9 ~ 12V输入，仅为电机独立供电)
-  内置900mAh电池
-  多种固定方式/支持乐高孔连接

## 尺寸重量

-  尺寸：54mm * 54mm * 32mm
-  重量：64g

## 应用

- 乐高编码电机/舵机控制器
- 乐高玩具DIY智能控制

## I2C控制说明

I2C 从机地址: 0x22
<table>
<tr><td>功能</td><td>寄存器地址</td><td>值</td></tr>
<tr><td>SERVO1_ANGLE_ADDR</td><td>0X00</td><td>0~180</td></tr>
<tr><td>SERVO2_ANGLE_ADDR</td><td>0x01</td><td>0~180</td></tr>
<tr><td>SERVO1_PULSE_ADDR</td><td>0x10</td><td>(uint16_t)500~2500</td></tr>
<tr><td>SERVO2_PULSE_ADDR</td><td>0x12</td><td>(uint16_t)500~2500</td></tr>
<tr><td>MOTOR1_PWM_DUTY_ADDR</td><td>0x20</td><td>-127~127</td></tr>
<tr><td>MOTOR2_PWM_DUTY_ADDR</td><td>0x21</td><td>-127~127</td></tr>
<tr><td>MOTOR3_PWM_DUTY_ADDR</td><td>0x22</td><td>-127~127</td></tr>
<tr><td>MOTOR4_PWM_DUTY_ADDR</td><td>0x23</td><td>-127~127</td></tr>
<tr><td>MOTOR1_ENCODER_ADDR</td><td>0x30</td><td>int32_t</td></tr>
<tr><td>MOTOR2_ENCODER_ADDR</td><td>0x34</td><td>int32_t</td></tr>
<tr><td>MOTOR3_ENCODER_ADDR</td><td>0x38</td><td>int32_t</td></tr>
<tr><td>MOTOR4_ENCODER_ADDR</td><td>0x3C</td><td>int32_t</td></tr>
<tr><td>MOTOR1_SPEED_ADDR</td><td>0x40</td><td>-127~127</td></tr>
<tr><td>MOTOR2_SPEED_ADDR</td><td>0x41</td><td>-127~127</td></tr>
<tr><td>MOTOR3_SPEED_ADDR</td><td>0x42</td><td>-127~127</td></tr>
<tr><td>MOTOR4_SPEED_ADDR</td><td>0x43</td><td>-127~127</td></tr>
</table>

I2C 电机地址: 
<table>
<tr><td>电机编号</td><td>电机地址</td></tr>
<tr><td>MOTOR1</td><td>0x50</td></tr>
<tr><td>MOTOR2</td><td>0x60</td></tr>
<tr><td>MOTOR3</td><td>0x70</td></tr>
<tr><td>MOTOR4</td><td>0x80</td></tr>
</table>

配置方法
电机地址 + nBit
<table>
<tr><td>位</td><td>值</td></tr>
<tr><td>0</td><td>电机运行模式</td></tr>
<tr><td>1</td><td>position-p(3)</td></tr>
<tr><td>2</td><td>position-i(1)</td></tr>
<tr><td>3</td><td>position-d(15)</td></tr>
<tr><td>4|5|6|7</td><td>position-point</td></tr>
<tr><td>8</td><td>position-max-speed</td></tr>
<tr><td>9</td><td>speed-p</td></tr>
<tr><td>10</td><td>speed-i</td></tr>
<tr><td>11</td><td>speed-d</td></tr>
<tr><td>12</td><td>speed-point</td></tr>
</table>
<table>
<tr><td>电机运行模式</td><td>值</td>
<tr><td>Normal</td><td>0X00</td>
<tr><td>Position</td><td>0x01</td>
<tr><td>Encoder</td><td>0x02</td>
</table>

## 套件清单

-  1x BaseX
-  1x 乐高底座
-  2x M3 * 5mm 304不锈钢内六角螺栓
-  2x M3 * 32mm 304不锈钢内六角螺栓
-  1x M3内六角扳手

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Base/EasyLoader_BaseX.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 例程

### 1. Arduino IDE

[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BaseX)，获取完整程序.

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Base/BaseX.mp4" type="video/mp4">
</video>