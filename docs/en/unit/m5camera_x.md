# Unit M5CameraX {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_x_01.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.550e425eB8OqGB&id=587046526441)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## Description

**M5CameraX** is a development board for image recognition. It features an ESP32(4M Flash + 520K RAM) chip and 2-Megapixel carmera(OV2640).**M5Camera** offers plenty of storage, with an extra 4 Mbyte PSRAM.  It also supports image transmission via Wi-Fi and debuging through USB Type-C port.

The hardware comes preloaded software, programmed by ESP-IDF. It is an application to run Wi-Fi camera. The output image is size 600*800, since it's 2-Maga camera, you sure can optimize the software to output the maximum size of photos.

what this software can do?
- Power the board via USB type-C or GROVE
- Use your phone to Wi-Fi scan an AP name start with 'm5stack-' and click to connect this AP.
- Open up web browser on your phone and visit 192.168.4.1
- Then here comes the picture. Video is about 5-6 frames per senconds. not super fast.

The hardware also comes with some reserved weld pad, just in case you want put these chips back on board.
- 9-axis gyroscope (MPU6050)
- pressure sensor (BME280)
- **Analog MIC (SPQ2410)**
- Lipo Battery power pins

<!-- <img src="assets/img/product_pics/unit/unit_m5camera_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_06.png" width="100%" height="100%"> -->

**Please notice:** There are 2 types of **M5Camera**
- Model A  &  Model B
- They have different circuits, can be identified by backside sticker
- Model A is halt production. The new coming **M5Camera** is just Model B
- In Model A circult design MPU6050 and camera sensor have I2C conflict, which means you can't use both at the same time.
- Model B have better performance on image quality and processing speed.

<!-- <img src="assets/img/product_pics/unit/unit_m5camera_04.png"> -->

This Unit reserves the weld of the 9-axis gyroscope (MPU6050), Temperature and humidity pressure sensor (BME280) and **Digital silicon microphone (SPM1423)**. If you need those devices, you can Self-weld them or purchase those version thraightly. Additionally, M5Camera also reserves the weld of battery.

## Product Features

- ESP32 specifications
    + Dual-core Tensilica LX6 microprocessor
    + Up to 240MHz clock frequency
    + **4MB PSRAM**
    + **4MB Flash memory**
    + Integrated 802.11 BGN WiFi transceiver
    + Integrated dual-mode Bluetooth (classic and BLE)
    + Hardware accelerated encryption (AES, SHA2, ECC, RSA-4096)
- CP2104 USB-to-TTL converter
- ESP32-WROVER (PCB Antenna)
- OV2640 sensor
    - Output Formats(8-bit):
        + YUV(422/420)/YCbCr422
        + RGB565/555
        + 8-bit compressed data
        + 8-/10-bit Raw RGB data
    - Maximum Image Transfer Rate according to specific format
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - Scan Mode: Progressive
- Camera specifications
    + CCD size : 1/4 inch
    + Field of View : **65 degree**
    + Maxmium Pixel: 2M
- Sensor best resolution: 1600 * 1200
- Dimension: 40 × 49 × 13mm

## Include

- 1x M5CameraX
- 1x Wall-1515
- 1x Type-C USB Cable

## PinMap

**Camera Interface PinMap**

| *Interface*             | *Camera Pin*| *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-------------------  | :--------:| :------:  | :------:  |
| SCCB Clock            | SIOC      |IO23       |IO23       |
| SCCB Data             | SIOD      |**IO25**       |**IO22**       |
| System Clock          | XCLK      |IO27       |IO27       |
| Vertical Sync         | VSYNC     |**IO22**       |**IO25**       |
| Horizontal Reference  | HREF      |IO26       |IO26       |
| Pixel Clock           | PCLK      |IO21       |IO21       |
| Pixel Data Bit 0      | D2        |IO32       |IO32       |
| Pixel Data Bit 1      | D3        |IO35       |IO35       |
| Pixel Data Bit 2      | D4        |IO34       |IO34       |
| Pixel Data Bit 3      | D5        |IO5        |IO5        |
| Pixel Data Bit 4      | D6        |IO39       |IO39       |
| Pixel Data Bit 5      | D7        |IO18       |IO18       |
| Pixel Data Bit 6      | D8        |IO36       |IO36       |
| Pixel Data Bit 7      | D9        |IO19       |IO19       |
| Camera Reset          | RESET     |IO15       |IO15       |
| Camera Power Down     | PWDN      | *see Note 1* | *see Note 1* |
| Power Supply 3.3V     | 3V3       | 3V3       | 3V3       |
| Ground                | GND       | GND       | GND       |

**GROVE Interface**

| *Grove*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO13      | IO13      |
| SDA           | **IO12**      | **IO4**      |
| 5V            | 5V        | 5V        |
| GND           | GND       | GND       |

**LED Interface**

| *LED*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| LED_Pin       | IO14      | IO14      |

**The following tables are Reserved Chip Interfaces**

**BME280 Interface**

*It's IIC address is 0x76.*

| *BME280*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |


**MPU6050 Interface**

*It's IIC address is 0x68.*

| *MPU6050*         | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |

**MIC(SPM1423) Interface**

| *MIC(SPM1423)*     | *M5Camera(A model)*  | *M5Camera(B model)*  |
| :-----------: | :------:  | :------:  |
| SCL           |IO2|IO2|
| SDA           |IO4|IO4|

**NOTE:**

1. **Camera Power Down** pin does not need to be connected to ESP32 GPIO. Instead it may be pulled down to ground with 10 kOhm resistor.

2. We have several patterns of camera board, the following figures shows the main differece

    **view** click [here](https://shimo.im/sheets/gP96C8YTdyjGgKQC).

     <!--**download** click [here](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx).-->

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_en.jpg">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

## Code

### Firmware

- **[M5CameraX Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/master/wifi/firmware/Camera%20X)**


### Example

 - **[Face recognition](https://github.com/m5stack/m5stack-cam-psram/tree/master/face_recognize/firmware/Camera%20X)**
 
 - **[Serial communication-M5CameraX](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/firmware/Camera%20X)**

 - **[Serial communication-M5Core](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/arduino)**（The serial communication routine is the communication between the camera and the M5Core.）

 - **[QRcode](https://github.com/m5stack/m5stack-cam-psram/tree/master/qr/firmware/Camera%20X)**

 - **[MPU6050](https://github.com/m5stack/m5stack-cam-psram/tree/master/mpu6050/firmware/Camera%20X)**（Gyro Example after soldering **MPU6050**）


## Schematic

### Power circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### Chip peripheral circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USB to serial port part of the circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">

