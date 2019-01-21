# M5CAMERA - 摄像头（内置PSRAM）

<img src="assets/img/product_pics/unit/unit_m5camera_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_02.png" width="40%" height="40%">


<!-- <br><img src="assets/img/product_pics/unit/m5camera_03.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/m5camera_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=2013.1.20141001.1.7e6a3f17eDikoR&id=575652539758&scm=1007.12144.95220.42296_0&pvid=922f08d2-0a50-42fe-b89b-d5fef17bc52a&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%22922f08d2-0a50-42fe-b89b-d5fef17bc52a%22%2C%22x_object_id%22%3A575652539758%7D)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=2013.1.20141001.1.7e6a3f17eDikoR&id=575652539758&scm=1007.12144.95220.42296_0&pvid=922f08d2-0a50-42fe-b89b-d5fef17bc52a&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%22922f08d2-0a50-42fe-b89b-d5fef17bc52a%22%2C%22x_object_id%22%3A575652539758%7D)** -->

## 描述

**<mark>M5Camera</mark>**是一款基于 ESP32 芯片，集成 OV2640 摄像头驱动芯片的摄像头模块，并集成了 **<mark>PSRAM</mark>**。你可以通过 ESP-IDF 或 Arduino IDE 来编程摄像头功能。

同时，M5Camera Unit 还预留了9轴陀螺仪 (MPU6050) 、大气压3合1传感器 (BME280) 和**数字硅晶麦克风 (SPM1423)**的焊接口，如果你需要这些器件，可以焊接到对应位置上。M5Camera Unit 还预留了电池接口，如果你需要做可移动的摄像头，那么可以焊接手头的锂电池到对应位置上。

因为模块可以生成 WIFI 热点 AP，所以可以用手机、PC 或其他设备通过 WIFI 无线获取摄像头图片，也可以通过模块的 GROVE 接口有线获取摄像头图片。目前可以实现网络摄像头、颜色识别和人脸识别功能。

## 包含

- 1x M5 Camera Unit
- 1x Type-C USB线

## 特性


- ESP32 模组特性
    + 集成双核 Tensilica LX6
    + 高达 240MHz 的时钟频率
    + **4MB internal SRAM**
    + **4MB Flash memory**
    + 集成802.11 BGN WiFi和双模蓝牙(经典蓝牙和BLE)
    + 硬件加密(AES, SHA2, ECC, RSA-4096)
- CP2104 USB转串口
- OV2640摄像头驱动
    - 输出格式(8-bit):
        + YUV(422/420)/YCbCr422
        + RGB565/555
        + 8位的压缩数据
        + 8至10位的原始数据
    - 图片在不同格式时最大传输速率
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - 扫描模式: Progressive
- 摄像头特性
    + CCD尺寸: 1/4 寸
    + 可视范围: 78 度
    + 最大像素: 200W
- 传感器最大分辨率：1600 * 1200
- 尺寸：25mm x 24mm
- 重量: 5g

## 管脚对比

**M5Camera 有两个版本，分别为<mark>版本A和版本B</mark>。**

**摄像头驱动芯片 OV2640 接口**

| *接口*             | *OV2640 引脚*| *M5Camera(A 版本)*  | *M5Camera(B 版本)*  |
| :-------------------  | :--------:| :------:  | :------:  |
| SCCB Clock            | SIOC     |IO23       |IO23       |
| SCCB Data             | SIOD     |**IO25**       |**IO22**       |
| System Clock          | XCLK     |IO27       |IO27       |
| Vertical Sync         | VSYNC    |**IO22**       |**IO25**       |
| Horizontal Reference  | HREF     |IO26       |IO26       |
| Pixel Clock           | PCLK     |IO21       |IO21       |
| Pixel Data Bit 0      | D2       |IO32       |IO32       |
| Pixel Data Bit 1      | D3       |IO35       |IO35       |
| Pixel Data Bit 2      | D4       |IO34       |IO34       |
| Pixel Data Bit 3      | D5       |IO5        |IO5        |
| Pixel Data Bit 4      | D6       |IO39       |IO39       |
| Pixel Data Bit 5      | D7       |IO18       |IO18       |
| Pixel Data Bit 6      | D8       |IO36       |IO36       |
| Pixel Data Bit 7      | D9       |IO19       |IO19       |
| Camera Reset          | RESET    |IO15       |IO15       |
| Camera Power Down     | PWDN     | *see Note 1* | *see Note 1* |
| Power Supply 3.3V     | 3V3      | 3V3       | 3V3       |
| Ground                | GND      | GND       | GND       |

**GROVE 接口**

| *Grove*         | *M5Camera(A 版本)*  | *M5Camera(B 版本)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO13      | IO13      |
| SDA           | **IO12**      | **IO4**      |
| 5V            | 5V        | 5V        |
| GND           | GND       | GND       |

**<mark>预留的IC接口</mark>**

**BME280 接口**

*IIC 地址是 0x76*

| *BME280*         | *M5Camera(A 版本)*  | *M5Camera(B 版本)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |


**MPU6050 接口**

| *MPU6050*         | *M5Camera(A 版本)*  | *M5Camera(B 版本)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |

**MIC(SPM1423) 接口**

| *SPM1423*     | *M5Camera(A 版本)*  | *M5Camera(B 版本)*  |
| :-----------: | :------:  | :------:  |
| CLK           |IO4|IO4|
| DATA           |IO2|IO2|

**LED 接口**

| *LED*        | *M5Camera(A 版本)*  | *M5Camera(B 版本)*  |
| :-----------:| :------:  | :------:  |
| LED_Pin      | IO14      | IO14      |

Notes:

1. **Camera Power Down 引脚** 没必要连接到 ESP32 的引脚。

<img src="assets/img/product_pics/unit/unit_m5camera_03.png" width="60%" height="60%">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)


## 代码

### 固件

- **[M5Camera 固件](https://github.com/m5stack/m5stack-cam-psram/tree/master)**

### 例程

- **[颜色识别](https://github.com/m5stack/Applications-cam)**

- **[人脸识别](https://github.com/m5stack/esp-who)**



<!-- ## 例程 -->

<!-- ### 1. Arduino IDE

```arduino
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/M5CAMERA/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/example_unit_m5camera_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_m5camera_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/M5CAMERA/UIFlow)。 -->

<!-- ## 原理图 -->

<!-- <img src="assets/img/product_pics/unit/m5camera_sch.JPG"> -->

<!-- ### 管脚映射 -->

<!-- <table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>M5CAMERA Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table> -->