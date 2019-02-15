# ESP32CAM {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_esp32cam_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_02.png" width="65%" height="65%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ESP32-Camera-Module-Development-Board-OV2640-Camera-Type-C-Grove-Port-3D-Wifi-Antenna/3226069_32881414545.html)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ESP32-Camera-Module-Development-Board-OV2640-Camera-Type-C-Grove-Port-3D-Wifi-Antenna/3226069_32881414545.html)** -->

## Description

**<mark>ESP32Cam</mark>** is a tiny unit based on ESP32 chip and OV2640. You can even program it through ESP-IDF. But to compare with [M5Camera](m5camera.md), ESP32CAM <mark>does not integrates PSRAM</mark>.

The ESP32Cam equips the ESP32 with everything necessary to program, run and develop on the wonderful chip. It also features a LiPo charger , so your ESP32Cam project can be battery-powered and truly wireless.

Additionally, the board reserved the Welding positions of MPU6050,BME280 and an **analog MIC**.

Because the module can generate WIFI hotspot AP, So you can use your mobile phone, PC or other device to get the camera image wirelessly via WIFI, or wirely via GRVOE interface.

<img src="assets/img/product_pics/unit/unit_esp32cam_03.png" width="65%" height="65%">

## Include

- 1x M5 Camera
- 1x Type-C USB Cable


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
    + CCD size : 1/4inch
    + Field of View : 78 degree
    + Maxmium Pixel: 200W (Because of the small RAM, the board can't obtain it. It can output images up to 1024*768.)
- Sensor best resolution: 1600 * 1200
- Dimension: 25mm x 24mm
- Weight: 5g

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

| *BME280*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |


**MPU6050 Interface**

| *MPU6050*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |

**MIC(SPQ2410) Interface**

| *MPU6050*            | *ESP32Cam*  |
| :-----------: | :------:  |
| SCL           | IO32      |

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

- **[The comparison between ESP32CAM and M5Camera](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/hardware_diff_with_ESP32CAM_M5Camera.md)**

## Code

### Firmware

- **[ESP32CAM Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/normal)**

<!-- ## Schematic

<img src="assets/img/product_pics/unit/esp32cam_sch.JPG"> -->
