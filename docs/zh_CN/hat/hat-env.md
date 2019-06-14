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

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[BMP280 的库](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMM150 数据手册](https://pdf1.alldatasheet.com/datasheet-pdf/view/608913/ETC2/BMM150.html)**

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
