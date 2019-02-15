# ESP32CAM - 摄像头（无PSRAM） {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_esp32cam_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_02.png" width="65%" height="65%">

<!-- <img src="assets/img/product_pics/unit/unit_esp32cam_grove_a.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.46.6c2275f4nUJEfh&id=570594844588)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.46.6c2275f4nUJEfh&id=570594844588)** -->

## 描述

**<mark>ESP32Cam</mark>**是一款基于ESP32芯片，集成OV2640摄像头驱动芯片的摄像头模块，但**不带including PSRAM，也就是模块的RAM只有520KB**。你可以通过ESP-IDF来编程摄像头功能。

同时，M5Camera Unit还预留了9轴陀螺仪(MPU6050)、大气压3合1传感器(BME280)和**模拟麦克风**的焊接口，如果你需要这些器件，可以焊接到对应位置上。M5Camera Unit还预留了电池接口，如果你需要做可移动的摄像头，那么可以焊接手头的锂电池到对应位置上。

因为模块可以生成WIFI热点AP，所以可以用手机、PC或其他设备通过WIFI无线获取摄像头图片，也可以通过模块的GROVE接口有线获取摄像头图片。

<img src="assets/img/product_pics/unit/unit_esp32cam_03.png" width="65%" height="65%">

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
    + 最大像素: 200W（由于本模块内存比较小，所以摄像头能拍摄200W像素图像，可是板子无法获取和处理）
- 尺寸：20.5 × 46.5 × 11.5mm

## 包含

- 1x ESP32Cam Unit
- 1x Type-C USB 线

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
| SCL           | IO13        |
| SDA           | IO4        |
| 5V            | 5V          |
| GND           | GND         |

**LED 接口**

| *LED*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| LED_Pin           | IO16        |

**<mark>以下为预留的IC接口</mark>**

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

| *MPU6050*            | *ESP32Cam*  |
| :-----------: | :------:  |
| SCL           | IO32      |



## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

- **[ESP32CAM和M5Camera的硬件对比](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/hardware_diff_with_ESP32CAM_M5Camera_zh_CN.md)**

## 代码

### 固件

- **[ESP32CAM 固件](https://github.com/m5stack/m5stack-cam-psram/tree/normal)**

<!-- ### 例程

- **[颜色识别](https://github.com/m5stack/Applications-cam)**

- **[人脸识别](https://github.com/m5stack/esp-who)** -->
