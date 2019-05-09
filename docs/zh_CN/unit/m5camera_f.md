# Unit M5CameraF {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_f_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_f_07.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.550e425eB8OqGB&id=587046526441)**

## 描述

**M5CameraF** 是一款图像识别开发板，集成ESP32（4M Flash + 520K RAM + 4M PSRAM）芯片和200万像素的摄像头（OV2640）.支持WiFi-图像传输和USB端口调试.

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

<img src="assets/img/product_pics/unit/unit_m5camera_f_02.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_f_03.png" width="100%" height="100%">

<img src="assets/img/product_pics/unit/unit_m5camera_f_04.png">

这个 Unit 还预留了 9 轴陀螺仪 (MPU6050) 、温湿度气压传感器 (BME280) 和**数字硅晶麦克风 (SPM1423)**的焊接口，如果您需要这些器件，可以自行焊接到对应位置上或者直接购买选配指定硬件版本的 M5CameraF。M5CameraF Unit 还预留了电池接口。外壳内可以容纳的电池大小对应电池容量为 **80mAh**。

**注意：选配不同硬件时，M5CameraF 的命名不一样，遵循以下规则**

*M5CameraF_#_#... 即 M5CameraF 后跟选配的硬件。*

* 如果选配 MPU6050，则命名为 M5CameraF_6050
* 如果还选配了麦克风 SPM1423，则命名为 M5CameraF_6050_MIC
* 如果还选配了温湿度气压传感器 BME280，则命名为 M5CameraF_6050_BME280
* 如果还选配电池，则命名为 M5CameraF_6050_MIC_BME280_BAT

因为模块可以生成 WIFI 热点 AP，所以可以用手机、PC 或其他设备通过 WIFI 无线获取摄像头图片，也可以通过模块的 GROVE 接口有线获取摄像头图片。

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
        + 8-/10位Raw RGB数据
    - 根据特定格式的最大图像传输速率
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - 扫描模式: 渐进式
- 相机规格
    + 视野 : **160 °**
    + 最大像素: 2M
- 传感器最佳分辨率: 1600 * 1200
- 尺寸：23.5 × 48 × 23.5mm

## 包含

- 1x M5CameraF
- 1x LEGO 适配件
- 1x Wall/1515
- 1x Type-C USB 线

<img src="assets/img/product_pics/unit/unit_m5camera_f_05.png" width="50%" height="50%">

## 管脚映射

**相机管脚映射**

| *接口*             | *Camera Pin*| *M5CameraF*  |
|:-------------------  | :--------:| :------:  |
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

| *Grove*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | **IO13**      |
| SDA               | **IO4**      |
| 5V            | 5V        |
| GND           | GND       |

**LED 接口**

| *LED*        | *M5CameraF*  |
| :-----------:| :------:  |
| LED_Pin      | IO14      |

**The following tables are Reserved Chip 接口**

**BME280 接口**

*IIC 地址是 0x76*

| *BME280*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |


**MPU6050 接口**

*IIC 地址是 0x68*

| *MPU6050*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |

**MIC(SPM1423) 接口**

| *SPM1423*     | *M5CameraF*  |
| :-----------: | :------:  |
| CLK           |IO4|
| DATA           |IO2|

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

- **[M5CameraF 固件](https://github.com/m5stack/m5stack-cam-psram/tree/FishEye)**

<img src="assets/img/product_pics/unit/unit_m5camera_f_06.png" width="50%" height="50%">

## 原理图

### 电源电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### 芯片外围电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USB 转串口电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">
