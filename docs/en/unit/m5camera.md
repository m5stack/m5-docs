# M5CAMERA {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_02.png" width="40%" height="40%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/item/M5Stack-Oficial-ESP32-WROVER-com-M-dulo-de-C-mera-PSRAM-OV2640-Tipo-C-Grove-Porta/32909972455.html?spm=a2g03.12010108.1000013.1.28487d58Cog3fX&pvid=7b101d99-7f75-4eba-9b6c-3dbf826a6f7d&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.90158.0&scm-url=1007.13339.90158.0&scm_id=1007.13339.90158.0)**

<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)** -->

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/item/M5Stack-Oficial-ESP32-WROVER-com-M-dulo-de-C-mera-PSRAM-OV2640-Tipo-C-Grove-Porta/32909972455.html?spm=a2g03.12010108.1000013.1.28487d58Cog3fX&pvid=7b101d99-7f75-4eba-9b6c-3dbf826a6f7d&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.90158.0&scm-url=1007.13339.90158.0&scm_id=1007.13339.90158.0)** -->

## Description

The **<mark>M5Camera</mark>** is a camera unit based on ESP32 chip and OV2640 **<mark>including PSRAM</mark>**. You can even program it through ESP-IDF or Arduino IDE.

**There are two versions of M5Camera Unit: A Model and B Model.**

<img src="assets/img/product_pics/unit/unit_m5camera_04.png">

This Unit reserves the weld of the 9-axis gyroscope (MPU6050), Temperature and humidity pressure sensor (BME280) and **Digital silicon microphone (SPM1423)**. If you need those devices, you can Self-weld them or purchase those version thraightly. Additionally, M5Camera also reserves the weld of battery.

**Note: M5Camera is named differently when different hardware is selected. They follow the rules below.**

*M5Camera_#_#... means optional hardware name follows "M5Camera".*

* If configured with MPU6050, will be named M5Camera_6050
* If also configured with  microphone, will be named  M5Camera_6050_MIC
* If also configured with  BME280, will be named  M5CameraX_6050_MIC_BME280

<img src="assets/img/product_pics/unit/unit_m5camera_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_06.png" width="100%" height="100%">



## Include

- 1x M5 Camera
- 1x Type-C USB Cable


## Feature

- ESP32 specifications
    + Dual-core Tensilica LX6 microprocessor
    + Up to 240MHz clock frequency
    + **4MB pSRAM**
    + **4MB Flash memory**
    + Integrated 802.11 BGN WiFi transceiver
    + Integrated dual-mode Bluetooth (classic and BLE)
    + Hardware accelerated encryption (AES, SHA2, ECC, RSA-4096)
- CP2104 USB-to-TTL convertor
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
    + CCD size : 1/4inch
    + Field of View : **78 degree**
    + Maxmium Pixel: 200W
- Sensor best resolution: 1600 * 1200
- Dimension: 25mm x 24mm
- Weight: 5g

## PinMap

**There are two versions of M5Camera Unit: <mark>A Model</mark> and <mark>B Model</mark>.**

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

**<mark>The following tables are Reserved Chip Interfaces</mark>**

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

**<mark>NOTE:</mark>**

1. **Camera Power Down** pin does not need to be connected to ESP32 GPIO. Instead it may be pulled down to ground with 10 kOhm resistor.

2. We have several kinds of camera boards, the following figures show the main differece with them. If you want the detailed defference with them, please click [here](https://shimo.im/sheets/gP96C8YTdyjGgKQC).

<img src="assets/img/product_pics/unit/camera_comparison.png">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

## Code

### Firmware

- **[M5Camera Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/master)**

### Example

- **[Color recognition](https://github.com/m5stack/Applications-cam)**

- **[Face recognition](https://github.com/m5stack/esp-who)**

<!-- ## Related Video

**M5Camera Application - Web page view remote monitoring object**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**M5Camera Application - Image transmission between M5Camera and M5Core**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI5MjUzMg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
