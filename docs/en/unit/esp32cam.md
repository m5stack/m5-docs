# ESP32CAM {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_esp32cam_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_02.png" width="65%" height="65%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ESP32-Camera-Module-Development-Board-OV2640-Camera-Type-C-Grove-Port-3D-Wifi-Antenna/3226069_32881414545.html)**

## Description

**<mark>ESP32Cam</mark>** is a camera unit based on ESP32 chip and OV2640. You can even program it through ESP-IDF. But to compare with [M5Camera](m5camera.md), ESP32CAM <mark>does not integrates PSRAM</mark>.

This Unit reserves the weld of the 9-axis gyroscope (MPU6050), Temperature and humidity pressure sensor (BME280) and **analog MIC (SPQ2410)**. If you need those devices, you can Self-weld them or purchase those version thraightly. Additionally, M5CameraF also reserves the weld of battery.

**Note: ESP32CAM is named differently when different hardware is selected. They follow the rules below.**

*ESP32CAM_#_#... means optional hardware name follows "ESP32CAM".*

* If configured with MPU6050, will be named ESP32CAM_6050
* If also configured with  microphone, will be named  ESP32CAM_6050_MIC
* If also configured with  BME280, will be named  ESP32CAM_6050_MIC_BME280

<img src="assets/img/product_pics/unit/unit_esp32cam_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_esp32cam_06.png" width="100%" height="100%">

Because the module can generate WIFI hotspot AP, So you can use your mobile phone, PC or other device to get the camera image wirelessly via WIFI, or wirely via GRVOE interface.

## Feature

- ESP32 specifications
    + Dual-core Tensilica LX6 microprocessor
    + Up to 240MHz clock frequency
    + **512KB internal RAM**
    + **4MB Flash memory**
    + Integrated 802.11 BGN WiFi transceiver
    + Integrated dual-mode Bluetooth (classic and BLE)
    + Hardware accelerated encryption (AES, SHA2, ECC, RSA-4096)
- CP2104 USB TTL
- OV2640 sensor
    - Output Formats(8-bit):
        + YUV(422/420)/YCbCr422
        + RGB565/555
        + 8-bit compressed data
        + 8-/10-bit Raw RGB data
    - Maximum Image Transfer Rate
        + UXGA/SXGA: 15fps
        + SVGA: 30fps
        + CIF: 60fps
    - Scan Mode: Progressive
- Camera specifications
    + Field of View : **78 degree**
    + Maxmium Pixel: 200W (Because of the small RAM, the board can't obtain it. It can output images up to 800*600 JPEG.)
- 尺寸：20.5 × 46.5 × 11.5mm

## Include

- 1x M5 Camera

## PinMap

**Camera Interface PinMap**

| *Interface*             | *OV2640 Pin*| *ESP32Cam*    |
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

**GROVE Interface**

| *Grove*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO13        |
| SDA           | IO4        |
| 5V            | 5V          |
| GND           | GND         |

**LED Interface**

| *LED*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| LED_Pin           | IO16        |

**<mark>The following tables are Reserved Chip Interfaces</mark>**

**BME280 Interface**

*It's IIC address is 0x76.*

| *BME280*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |


**MPU6050 Interface**

*It's IIC address is 0x68.*

| *MPU6050*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |

**MIC(SPQ2410) Interface**

| *MPU6050*            | *ESP32Cam*  |
| :-----------: | :------:  |
| SCL           | IO32      |

**<mark>NOTE:</mark>**

1. **Camera Power Down** pin does not need to be connected to ESP32 GPIO. Instead it may be pulled down to ground with 10 kOhm resistor.

2. We have several kinds of camera boards, the following figures show the main differece with them. If you want the detailed defference with them, please click [here](https://shimo.im/sheets/gP96C8YTdyjGgKQC).

<img src="assets/img/product_pics/unit/camera_comparison.png">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

<!-- - **[The comparison between ESP32CAM and M5Camera](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/hardware_diff_with_ESP32CAM_M5Camera.md)** -->

## Code

### Firmware

- **[ESP32CAM Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/normal)**

<!-- ## Schematic

<img src="assets/img/product_pics/unit/esp32cam_sch.JPG"> -->
