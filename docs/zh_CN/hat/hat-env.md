# Hat ENV {docsify-ignore-all}

<img src="assets\img\product_pics\hat\env_hat\env_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\env_hat\env_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\env_hat\env_hat_03.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.504a1debWyi50z&ft=t&id=595958456624)**

## 描述

**Hat ENV**是一款兼容M5SticKC的多功能环境传感器，内部集成DHT12、BMP280和BMM150，能够检测温度、湿度、大气压值、三轴磁力计数据,该模块采用的统一的I2C协议接口，因此在引脚上没有过多的占用.对于希望同时拥有精致体积与丰富功能的项目来说，**Hat ENV**是一个不错的选择.


## 产品特性

- 温度:
    -  测量范围: -20 ~ 60 ℃
    -  误差: ±0.2℃
- 湿度:
    -  测量范围: 20 ~ 95 %RH
    -  误差: 0.1%
- 大气压:
    -  测量范围: 300 ~ 1100hPa
    -  误差: ±1hPa

磁场范围典型：
    - ±1300μT（x，y轴），±2500μT（z轴）
    - 磁场分辨率约为0.3μT

## 包含

- 1x ENV Hat

## 应用

- 气象站
- 指南针

## 原理图

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_ENV.pdf)**

<img src="assets\img\product_pics\hat\env_hat\env_hat_04.jpg" width="50%" height="50%">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[BMP280 的库](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMM150 数据手册](https://pdf1.alldatasheet.com/datasheet-pdf/view/608913/ETC2/BMM150.html)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ENV/EasyLoader_StickC_HAT_ENV.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
