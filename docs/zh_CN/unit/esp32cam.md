# ESP32CAM - 摄像头（无PSRAM） {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_esp32cam_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_02.png" width="65%" height="65%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.46.6c2275f4nUJEfh&id=570594844588)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>ESP32Cam</mark>** 是一款基于 ESP32 芯片，集成 OV2640 摄像头驱动芯片的摄像头模块，但**不带 including PSRAM，也就是模块的 RAM 只有 520KB**。您可以通过 ESP-IDF 来编程摄像头功能。

同时，ESP32CAM Unit 还预留了 9 轴陀螺仪 (MPU6050)、大气压 3 合 1 传感器 (BME280)和**模拟麦克风  (SPQ2410)** 的焊接口，如果您需要这些器件，可以焊接到对应位置上。ESP32CAM Unit 还预留了电池接口，如果您需要做可移动的摄像头，那么可以焊接手头的锂电池到对应位置上。

**注意：选配不同硬件时，ESP32CAM 的命名不一样，遵循以下规则**

*ESP32CAM_#_#... 即 ESP32CAM 后跟选配的硬件。*

* 如果选配 MPU6050，则命名为 ESP32CAM_6050
* 如果还选配了麦克风 SPQ2410，则命名为 ESP32CAM_6050_MIC
* 如果还选配了温湿度气压传感器 BME280，则命名为 ESP32CAM_6050_BME280

<img src="assets/img/product_pics/unit/unit_esp32cam_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_esp32cam_06.png" width="100%" height="100%">

因为模块可以生成 WIFI 热点 AP，所以可以用手机、PC 或其他设备通过 WIFI 无线获取摄像头图片，也可以通过模块的GROVE 接口有线获取摄像头图片。

## 特性

- ESP32 模组特性
    + 集成双核 Tensilica LX6
    + 高达 240MHz 的时钟频率
    + **520KB RAM**
    + **4MB Flash memory**
    + 集成 802.11 BGN WiFi 和双模蓝牙(经典蓝牙和 BLE)
    + 硬件加密 (AES, SHA2, ECC, RSA-4096)
- CP2104 USB 转串口
- OV2640 # 摄像头驱动
    - 输出格式 (8-bit):
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
    + 可视范围: **65 degree**
    + 最大像素: 200W（由于本模块内存比较小，所以摄像头能拍摄 200W 像素图像，可是板子无法获取和处理，最大为 800 * 600 的 JPEG 格式图片）
- 尺寸：20.5 × 46.5 × 11.5mm

## 包含

- 1x ESP32CAM Unit

## 管脚映射

**摄像头驱动芯片 OV2640 接口**

| *接口*             | *OV2640 引脚*| *ESP32Cam*    |
| :-------------------  | :--------:| :--------:  |
| SCCB Clock            | SIOC      | IO23        |
| SCCB Data             | SIOD      | IO25        |
| System Clock          | XCLK      | IO27        |
| Vertical Sync         | VSYNC     | IO22        |
| Horizontal Reference  | HREF      | IO26        |
| Pixel Clock           | PCLK      | IO21        |
| Pixel Data Bit 0      | D2        | IO17        |
| Pixel Data Bit 1      | D3        | IO35        |
| Pixel Data Bit 2      | D4        | IO34        |
| Pixel Data Bit 3      | D5        | IO5         |
| Pixel Data Bit 4      | D6        | IO39        |
| Pixel Data Bit 5      | D7        | IO18        |
| Pixel Data Bit 6      | D8        | IO36        |
| Pixel Data Bit 7      | D9        | IO19        |
| Camera Reset          | RESET     | IO15        |
| Camera Power Down     | PWDN      |*see Note 1* |
| Power Supply 3.3V     | 3V3       | 3V3         |
| Ground                | GND       | GND         |

**GROVE 接口**

| *Grove*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4        |
| SDA           | IO13        |
| 5V            | 5V          |
| GND           | GND         |

**LED 接口**

| *LED*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| LED_Pin           | IO16        |

**<mark>以下为预留的 IC 接口</mark>**

**BME280 接口**

*IIC 地址是 0x76*

| *BME280*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |


**MPU6050 接口**

*IIC 地址是 0x68*

| *MPU6050*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |

**麦克风(SPQ2410) 接口**

| *SPQ2410*            | *ESP32Cam*  |
| :-----------: | :------:  |
| OUT           | IO32      |

**<mark>注意：</mark>**

1. **Camera Power Down 引脚** 没必要连接到 ESP32 的引脚。

2. 我们有几个版本的摄像头板子，下图是它们主要区别的比较。

    如果想**查看**详细的资源对比，请点击[这里](https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041)。

    如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx)。

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

<!-- - **[ESP32CAM和M5Camera的硬件对比](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/hardware_diff_with_ESP32CAM_M5Camera_zh_CN.md)** -->

## 代码

### 固件

- **[ESP32CAM 固件](https://github.com/m5stack/m5stack-cam-psram/tree/NoPsram)**


<!-- ### 例程

- **[颜色识别](https://github.com/m5stack/Applications-cam)**

- **[人脸识别](https://github.com/m5stack/esp-who)** -->

## 相关视频

**ESP32CAM case - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/esp32cam_webcam_01.mp4" type="video/mp4">
</video>

**M5Camera 的应用 - 02**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/The%20M5Camera%20works.mp4" type="video/mp4">
</video>