# Unit ACCEL {docsify-ignore-all}

<img src="assets/img/product_pics/unit/accel/accel_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/accel/accel_02.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/unit/accel/accel_03.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[原理图](#原理图)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://www.aliexpress.com/store/product/M5Stack-Official-ADC-Unit-16-Bit-I2C-GROVE-ADS1100-Module-0V-to-12V-analog-to-digital/3226069_32946953374.html?spm=a2g1x.12024536.productList_5885013.pic_7)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**ACCEL** 是一款运动数据传感器. 内部集成**ADXL345**三轴加速度计.可测量范围高达±16g（13位分辨率）的加速度数据.输出数据格式为16位二进制补码，可通过SPI（3线或4线）或I2C数字接口访问. 在该Unit中，采用了I2C通信接口.
<br>

*什么是加速度计？*<br>
加速度计是一种加速力的测量设备。这些力可能是静态的(如重力). 或者是动态的由加速度计的移动或振动引起.
<br>
*加速度计的数据可以做什么?*<br>
通过测量由于重力引起的加速度，你可以计算出设备相对于水平面的倾斜角度。通过分析动态加速度，你可以分析出设备移动的方式


## 产品特性

- 体积小
- 低功耗
- 3轴加速度计

## 套件清单

- 1x ACCEL unit
- 1x GROVE Cable


## 应用

-  建筑和结构监测
-  导航
-  方向感应

  
## 原理图

<img src="assets/img/product_pics/unit/accel/accel_04.jpg">

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT-ACC.pdf)**

## 相关链接

- **[-数据手册](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/ADXL345_cn.pdf)**


### PinMap

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ACC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ACCEL.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)
## 相关视频

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/ACCEL.mp4" type="video/mp4">
</video>
