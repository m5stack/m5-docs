# M5CameraX - 摄像头（内置PSRAM） {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_x_01.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/unit/unit_m5camera_x_07.png" width="30%" height="30%"> -->


<!-- <br><img src="assets/img/product_pics/unit/m5camera_03.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/m5camera_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.550e425eB8OqGB&id=587046526441)**

<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.550e425eB8OqGB&id=587046526441)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

## 描述

**<mark>M5CameraX</mark>**是一款基于 ESP32 芯片，集成 OV2640 摄像头驱动芯片的摄像头模块，并集成了 **<mark>PSRAM</mark>**，镜头采用 **<mark>鱼眼镜头</mark>**，你可以通过 ESP-IDF 或 Arduino IDE 来编程摄像头功能。

<img src="assets/img/product_pics/unit/unit_m5camera_f_04.png">

这个 Unit 还预留了 9 轴陀螺仪 (MPU6050) 、温湿度气压传感器 (BME280) 和**数字硅晶麦克风 (SPM1423)**的焊接口，如果你需要这些器件，可以自行焊接到对应位置上或者直接购买选配指定硬件版本的 M5CameraX。M5CameraX Unit 还预留了电池接口。外壳内可以容纳的电池大小对应电池容量为 **80mAh**。

**注意：选配不同硬件时，M5CameraX 的命名不一样，遵循以下规则**

*M5CameraX_#_#... 即 M5CameraX 后跟选配的硬件。*

* 如果选配 MPU6050，则命名为 M5CameraX_6050
* 如果还选配了麦克风 SPM1423，则命名为 M5CameraX_6050_MIC
* 如果还选配了温湿度气压传感器 BME280，则命名为 M5CameraX_6050_BME280
* 如果还选配电池，则命名为 M5CameraX_6050_MIC_BME280_BAT

<img src="assets/img/product_pics/unit/unit_m5camera_f_02.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_f_03.png" width="100%" height="100%">

因为模块可以生成 WIFI 热点 AP，所以可以用手机、PC 或其他设备通过 WIFI 无线获取摄像头图片，也可以通过模块的 GROVE 接口有线获取摄像头图片。

## 特性

- ESP32 模组特性
    + 集成双核 Tensilica LX6
    + 高达 240MHz 的时钟频率
    + **4MB pSRAM**
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
    + 可视范围: **160 度**
    + 最大像素: 200W
- 传感器最大分辨率：1600 * 1200
- 尺寸：23.5 × 48 × 23.5mm

## 包含

- 1x M5CameraX
- 1x LEGO 适配件
- 1x Wall/1515
- 1x Type-C USB 线

<img src="assets/img/product_pics/unit/unit_m5camera_f_05.png" width="50%" height="50%">

## 管脚映射

**摄像头驱动芯片 OV2640 接口**

| *接口*             | *OV2640 引脚*| *M5CameraX*  |
| :-------------------  | :--------:| :------:  |
| SCCB Clock            | SIOC     |IO23       |
| SCCB Data             | SIOD         |**IO22**       |
| System Clock          | XCLK     |IO27       |
| Vertical Sync         | VSYNC        |**IO25**       |
| Horizontal Reference  | HREF     |IO26       |
| Pixel Clock           | PCLK     |IO21       |
| Pixel Data Bit 0      | D2       |IO32       |
| Pixel Data Bit 1      | D3       |IO35       |
| Pixel Data Bit 2      | D4       |IO34       |
| Pixel Data Bit 3      | D5       |IO5        |
| Pixel Data Bit 4      | D6       |IO39       |
| Pixel Data Bit 5      | D7       |IO18       |
| Pixel Data Bit 6      | D8       |IO36       |
| Pixel Data Bit 7      | D9       |IO19       |
| Camera Reset          | RESET    |IO15       |
| Camera Power Down     | PWDN     | *see Note 1* |
| Power Supply 3.3V     | 3V3      | 3V3       |
| Ground                | GND      | GND       |

**GROVE 接口**

| *Grove*         | *M5CameraX*  |
| :-----------: | :------:  |
| SCL           | **IO13**      |
| SDA               | **IO4**      |
| 5V            | 5V        |
| GND           | GND       |

**LED 接口**

| *LED*        | *M5CameraX*  |
| :-----------:| :------:  |
| LED_Pin      | IO14      |

**<mark>以下为预留的IC接口</mark>**

**BME280 接口**

*IIC 地址是 0x76*

| *BME280*         | *M5CameraX*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |


**MPU6050 接口**

*IIC 地址是 0x68*

| *MPU6050*         | *M5CameraX*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |

**MIC(SPM1423) 接口**

| *SPM1423*     | *M5CameraX*  |
| :-----------: | :------:  |
| CLK           |IO4|
| DATA           |IO2|

**<mark>注意：</mark>**

1. **Camera Power Down 引脚** 没必要连接到 ESP32 的引脚。

2. 我们有几个版本的摄像头板子，下图是它们主要区别的比较。

    如果想**查看**详细的资源对比，请点击[这里](https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041)。

    如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx)。

    <img src="assets/img/product_pics/unit/camera_comparison_zh_CN.png">


<!-- <img src="assets/img/product_pics/unit/unit_m5camera_03.png" width="60%" height="60%"> -->

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)


## 代码

### 固件

- **[M5CameraX 固件](https://github.com/m5stack/m5stack-cam-psram/tree/master)**

<img src="assets/img/product_pics/unit/unit_m5camera_f_06.png" width="50%" height="50%">

<!-- ### 例程

- **[颜色识别](https://github.com/m5stack/Applications-cam)**

- **[人脸识别](https://github.com/m5stack/esp-who)** -->



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

<!-- ## 相关视频

**M5Camera 的应用 - 网页查看远程监控对象**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAyNDcyMTQ5Ng==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**M5Camera 的应用 - M5Camera 与 M5Core 图传**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI5MjUzMg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
