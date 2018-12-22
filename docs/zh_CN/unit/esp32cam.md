# ESP32CAM - 摄像头

<img src="assets/img/product_pics/unit/M5GO_Unit_esp32cam.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.46.6c2275f4nUJEfh&id=570594844588)**

## 描述

<mark>ESP32Cam</mark>是一款基于ESP32芯片，集成OV2640摄像头驱动芯片的摄像头模块，但<mark>不带including PSRAM，也就是模块的RAM只有520KB</mark>。你可以通过ESP-IDF来编程摄像头功能。

同时，M5Camera Unit还预留了9轴陀螺仪(MPU6050)、大气压3合1传感器(BME280)和**模拟麦克风**的焊接口，如果你需要这些器件，可以焊接到对应位置上。M5Camera Unit还预留了电池接口，如果你需要做可移动的摄像头，那么可以焊接手头的锂电池到对应位置上。


## 包含

- 1x ESP32Cam Unit
- 1x Type-C USB线


## 特性

- ESP32模组特性
    + 集成双核Tensilica LX6
    + 高达240MHz的时钟频率
    + **520KB RAM**
    + **4MB Flash memory**
    + 集成802.11 BGN WiFi和双模蓝牙(经典蓝牙和BLE)
    + 硬件加密(AES, SHA2, ECC, RSA-4096)
- CP2104 USB转串口
- OV2640摄像头驱动
    - 输出格式(8-bit):
        + YUV(422/420)/YCbCr422
        + RGB565/555
        + 8-bit compressed data
        + 8-/10-bit Raw RGB data
    - 图片最大传输速率
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - 扫描模式: Progressive
- 摄像头特性
    + CCD尺寸: 1/4inch
    + 可视范围: 78 degree
    + 最大像素: 200W
- 重量: 5g


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[数据手册]** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

- **[上手指南](/en/quick_start/m5camera/m5camera_quick_start)**

## 例程

<!-- ### 1. Arduino IDE

```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ESP32CAM/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/example_unit_esp32cam_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_esp32cam_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ESP32CAM/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/unit/esp32cam_sch.JPG">

### 管脚映射

<!-- <table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ESP32CAM Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table> -->