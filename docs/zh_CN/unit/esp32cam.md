# Unit ESP32CAM {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_esp32cam_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_02.png" width="65%" height="65%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](zh_CN/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[代码](#代码)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.46.6c2275f4nUJEfh&id=570594844588)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**ESP32CAM** 是一款图像识别开发板，集成ESP32（4M Flash + 520K RAM）芯片和200万像素的摄像头（OV2640）.支持WiFi-图像传输和USB端口调试.

硬件上预装固件，通过ESP-IDF编程开发，运行WiFi-相机应用程序.默认程序输出图像尺寸为**600 * 800**，你可以通过优化程序输出更大尺寸.

这个程序是如何使用的?
- 打开手机Wi-Fi，扫描并连接名称以"m5stack-"开头的AP热点.
- 打开手机浏览器，访问192.168.4.1,进入监控页面实时获取拍摄视频.
- 视频帧率大约在每秒5-6帧.

硬件拓展支持（预留以下IC焊接接口）
- 6轴陀螺仪（MPU6050）
- 压力传感器（BMP280）
- **模拟MIC（SPQ2410）**
- 电池插座

**ESP32CAM** 是M5相机系列中一款广受欢迎的模块,不管是从性能或是性价比上都有着出色的表现.M5相机系列还有一些其他的相机产品能够应对项目中的不同需求，如果你需要更多存储空间，请查看M5Camera(Link)，如果您需要鱼眼镜头，请查看M5CameraF(Link).

**注意：选配不同硬件时，ESP32CAM 的命名不一样，遵循以下规则**

*ESP32CAM_#_#... 即 ESP32CAM 后跟选配的硬件。*

* 如果选配 MPU6050，则命名为 ESP32CAM_6050
* 如果还选配了麦克风 SPQ2410，则命名为 ESP32CAM_6050_MIC
* 如果还选配了温湿度气压传感器 BME280，则命名为 ESP32CAM_6050_BME280

<img src="assets/img/product_pics/unit/unit_esp32cam_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_esp32cam_06.png" width="100%" height="100%">

因为模块可以生成 WIFI 热点 AP，所以可以用手机、PC 或其他设备通过 WIFI 无线获取摄像头图片，也可以通过模块的GROVE 接口有线获取摄像头图片。

## 产品特性

- ESP32 规格
    + 双核Tensilica LX6微处理器
    + 高达240MHz的时钟频率
    + **内置 520KB RAM**
    + **4MB Flash 闪存**
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
    - 最高图像传输速率
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - 扫描模式: 渐进式
- 相机规格
    + 视野 : **65 °**
    + 最大像素: 2M
- 尺寸: 20.5 × 46.5 × 11.5mm

## 包含

- 1x ESP32CAM Unit

## 管脚映射

**相机管脚映射**

| *接口*             | *OV2640 Pin*| *ESP32Cam*    |
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

**reserved chip 接口**

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

**注意：**

1. OV2640 芯片的 **PIN8（PDWN）**引脚为使能引脚，在该主板中通过12KΩ下拉电阻接地使能，进入工作模式.当 PIN8（PDWN）引脚上拉高电平时，将进入**Camera Power Down**模式.

2. 以下是M5相机系列几款产品的主要参数区别.

    **点击** [查看详情](https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041)。

    **点击** [下载表格](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx)。

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

## 代码

### 出厂固件（WiFi传输图像）

- **[ESP32CAM 固件](https://github.com/m5stack/m5stack-cam-psram/tree/master/wifi/firmware/ESP32-Camera)**

### 例程

 - **[串口通信-ESP32CAM](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/firmware/ESP32-Camera)**

 - **[串口通信-M5Core](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/arduino)**（串口通信例程为，摄像头与M5Core之间通信）


## 相关视频

**ESP32CAM case - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/esp32cam_webcam_01.mp4" type="video/mp4">
</video>

**M5Camera 的应用 - 02**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/The%20M5Camera%20works.mp4" type="video/mp4">
</video>