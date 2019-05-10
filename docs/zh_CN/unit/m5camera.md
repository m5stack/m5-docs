# Unit M5CAMERA {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_02.png" width="40%" height="40%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=2013.1.20141001.1.7e6a3f17eDikoR&id=575652539758&scm=1007.12144.95220.42296_0&pvid=922f08d2-0a50-42fe-b89b-d5fef17bc52a&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%22922f08d2-0a50-42fe-b89b-d5fef17bc52a%22%2C%22x_object_id%22%3A575652539758%7D)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**M5Camera** 是一款图像识别开发板，集成ESP32（4M Flash + 520K RAM + 4M PSRAM）芯片和200万像素的摄像头（OV2640）.支持WiFi-图像传输和USB端口调试.

硬件上预装固件，通过ESP-IDF编程开发，运行WiFi-相机应用程序.默认程序输出图像尺寸为**600 * 800**，你可以通过优化程序输出更大尺寸.

这个程序是如何使用的?
- 打开手机Wi-Fi，扫描并连接名称以"m5stack-"开头的AP热点.
- 打开手机浏览器，访问192.168.4.1,进入监控页面实时获取拍摄视频.
- 视频帧率大约在每秒5-6帧.

硬件拓展支持（预留以下IC焊接接口）
- 6轴陀螺仪 (MPU6050)
- 压力传感器 (BMP280)
- **模拟MIC (SPQ2410)**
- 电池插座

<img src="assets/img/product_pics/unit/unit_m5camera_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_06.png" width="100%" height="100%">

**注意:** 有两种类型的 **M5Camera**

Model A  和  Model B,它们有着不同的电路设计、可以通过背面贴纸进行分辨.在Model A的电路设计中，MPU6050和摄像头传感器存在I2C冲突，这意味着您无法同时使用两者,现在如今Model A已经停止生产，Model B在图像质量和处理速度方面具有更好的性能

<img src="assets/img/product_pics/unit/unit_m5camera_04.png">

**注意：选配不同硬件时，M5Camera 的命名不一样，遵循以下规则**

*M5Camera_#_#... 即 M5Camera 后跟选配的硬件。*

* 如果选配 MPU6050，则命名为 M5Camera_6050
* 如果还选配了麦克风 SPM1423，则命名为 M5Camera_6050_MIC
* 如果还选配了温湿度气压传感器 BME280，则命名为 M5Camera_6050_BME280

因为模块可以生成 WIFI 热点 AP，所以可以用手机、PC 或其他设备通过 WIFI 无线获取摄像头图片，也可以通过模块的 GROVE 接口有线获取摄像头图片。目前可以实现网络摄像头、颜色识别和人脸识别功能。

## 产品特性

- ESP32 规格
    + 双核Tensilica LX6微处理器
    + 高达240MHz的时钟频率
    + **4MB PSRAM**
    + **4MB Flash memory**
    + 集成的802.11 BGN WiFi收发器
    + 集成双模蓝牙（经典和BLE）
    + 硬件加速加密（AES，SHA2，ECC，RSA-4096）
- CP2104 USB TTL
- OV2640 传感器
    - 输出格式（8位）:
        + YUV(422/420)/YCbCr422
        + RGB565/555
        + 8位压缩数据
        + 8- / 10位Raw RGB数据
    - 根据特定格式的最大图像传输速率
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - 扫描模式: 渐进式
- 相机规格
    + CCD 尺寸 : 1/4 inch
    + 视野 : **65 °**
    + 最大像素: 2M
- 传感器最佳分辨率: 1600 * 1200
- 尺寸: 40 × 49 × 13mm

## 包含

- 1x M5Camera Unit
- 1x Type-C USB

## 管脚对比

**M5Camera 有两个版本：A Model 和 B Model.**

**摄像头驱动芯片 OV2640 接口**

| *接口*             | *Camera Pin*| *M5Camera(A model)*  | *M5Camera(B model)*  |
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
| Camera Power Down     | PWDN     | *查看注意 1* | *查看注意 1* |
| Power Supply 3.3V     | 3V3      | 3V3       | 3V3       |
| Ground                | GND      | GND       | GND       |

**GROVE 接口**

| *Grove*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO13      | IO13      |
| SDA           | **IO12**      | **IO4**      |
| 5V            | 5V        | 5V        |
| GND           | GND       | GND       |

**LED 接口**

| *LED*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------:| :------:  | :------:  |
| LED_Pin      | IO14      | IO14      |

**以下为预留的IC接口**

**BME280 接口**

*IIC 地址是 0x76*

| *BMP280*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |


**MPU6050 接口**

| *MPU6050*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |

**MIC(SPM1423) 接口**

| *MIC(SPM1423)*     | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| CLK           |IO4|IO4|
| DATA           |IO2|IO2|

<img src="assets/img/product_pics/unit/unit_m5camera_03.png" width="60%" height="60%">

**注意：**

1. OV2640 芯片的 **PIN8（PDWN）**引脚为使能引脚，在该主板中通过12KΩ下拉电阻接地使能，进入工作模式.当 PIN8（PDWN）引脚上拉高电平时，将进入**Camera Power Down**模式.

2. 以下是M5相机系列几款产品的主要参数区别.

    **点击** [查看详情](https://shimo.im/sheets/gP96C8YTdyjGgKQC).

    **点击** [下载表格](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx).

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)


## 代码

### 固件

- [A Model](https://github.com/m5stack/m5stack-cam-psram/tree/ModeA)

- [B Model](https://github.com/m5stack/m5stack-cam-psram/tree/master)

### 例程

- [颜色识别](https://github.com/m5stack/Applications-cam)

- [人脸识别](https://github.com/m5stack/esp-who)

## 原理图

### 电源电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### 芯片外围电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USB 转串口电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">

## 相关视频

**M5Camera 的应用 - M5Camera 与 M5Core 图传**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Camera.mp4" type="video/mp4">
</video>

**M5Camera 的应用 - 保护布丁**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Protective-Pudding.mp4" type="video/mp4">
</video>
