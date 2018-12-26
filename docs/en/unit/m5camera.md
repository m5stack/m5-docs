# Unit M5CAMERA

<img src="assets/img/product_pics/unit/m5camera_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/m5camera_02.png" width="30%" height="30%"><br><img src="assets/img/product_pics/unit/m5camera_03.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/m5camera_04.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ESP32-WROVER-with-PSRAM-Camera-Module-OV2640-Type-C-Grove-Port-Mini-Camera-Development/3226069_32909972455.html?spm=2114.12010612.8148356.24.57e2724dWGWCCC)**

## Description

The **<mark>M5Camera</mark>** is a tiny unit based on ESP32 chip and OV2640 <mark>including PSRAM</mark>. You can even program it through ESP-IDF.

The M5Camera equips the ESP32 with everything necessary to program, run and develop on the wonderful chip. It also features a LiPo charger (IP5306) , so your M5Camera project can be battery-powered and truly wireless. Additionally, the board reserved the Welding positions of MPU6050,BME280 and an analog MIC.


## Include

- 1x M5 Camera
- 1x Type-C USB Cable


## Feature

- ESP32 specifications
    + Dual-core Tensilica LX6 microprocessor
    + Up to 240MHz clock frequency
    + 4MB internal SRAM
    + 4MB Flash memory
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
    + Maxmium Pixel: 200W
- Sensor best resolution: 1600 * 1200
- Dimension: 25mm x 24mm
- Weight: 5g


## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[Datasheet]** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

- **[PinMap](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/hardware_diff_with_ESP32CAM_M5Camera.md)**

- **[Quick Start](/en/quick_start/m5camera/m5camera_quick_start)**

## Example

<!-- ```arduino
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/M5CAMERA)for Specific example. -->

## Schematic

<!-- <img src="assets/img/product_pics/unit/m5camera_sch.JPG"> -->

### PinMap

<!-- <table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>M5CAMERA Unit</td><td>SCL</td><td>SDA</td></tr>
</table> -->