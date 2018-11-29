# M5Camera

中文 | [English](/en/product_documents/units/unit_m5camera) | [日本語](ja/product_documents/units/unit_m5camera)

## 描述

<mark>M5Camera</mark>是一款基于ESP32芯片，集成OV2640摄像头驱动芯片的摄像头模块，并集成了<mark>including PSRAM</mark>。你可以通过ESP-IDF来编程摄像头功能。

同时，M5Camera Unit还预留了9轴陀螺仪(MPU6050)、大气压3合1传感器(BME280)和数字硅晶麦克风(SPM1423)的焊接口，如果你需要这些器件，可以焊接到对应位置上。M5Camera Unit还预留了电池接口，如果你需要做可移动的摄像头，那么可以焊接手头的锂电池到对应位置上。

## 包含

- 1x M5 Camera Unit
- 1x Type-C USB线

## 特性

- ESP32模组特性
    + 集成双核Tensilica LX6
    + 高达240MHz的时钟频率
    + 4MB internal SRAM
    + 4+16MB Flash memory(包括16M的PSRAM)
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
- **[例程](https://github.com/m5stack/esp32-cam-demo/tree/m5cam-psram) (ESP32)**
- **[数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) (ESP32)**
- **[数据手册](https://www.uctronics.com/download/cam_module/OV2640DS.pdf) (OV2640)**
- **[上手指南](/en/quick_start/m5camera/m5camera_quick_start)**

<figure>
    <img src="assets/img/product_pics/units/m5camera_01.jpg" height="65%" width="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/units/m5camera_02.jpg" height="65%" width="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/units/m5camera_03.jpg" height="65%" width="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/units/m5camera_04.jpg" height="65%" width="65%">
</figure>