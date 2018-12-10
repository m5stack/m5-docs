# M5Camera

[中文](/zh_CN/product_documents/units/unit_m5camera) | English | [日本語](ja/product_documents/units/unit_m5camera)

## DESCRIPTION

The **<mark>M5Camera</mark>** is a tiny unit based on ESP32 chip and OV2640 <mark>including PSRAM</mark>. You can even program it through ESP-IDF.

The M5Camera equips the ESP32 with everything necessary to program, run and develop on the wonderful chip. It also features a LiPo charger (IP5306) , so your M5Camera project can be battery-powered and truly wireless. Additionally, the board reserved the Welding positions of MPU6050,BME280 and an analog MIC.


## INCLUDES

- 1x M5 Camera
- 1x Type-C USB Cable


## FEATURES

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


## DOCUMENTS
- **[Example](https://github.com/m5stack/esp32-cam-demo/tree/m5cam-psram) (ESP32)**
- **[Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) (ESP32)**
- **[Datasheet](https://www.uctronics.com/download/cam_module/OV2640DS.pdf) (OV2640)**
- **[PinMap](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/hardware_diff_with_ESP32CAM_M5Camera.md)**
- **[Quick Start](/en/quick_start/m5camera/m5camera_quick_start)**

<figure>
    <img src="assets/img/product_pics/units/m5camera_01.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/units/m5camera_02.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/units/m5camera_03.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/units/m5camera_04.jpg">
</figure>