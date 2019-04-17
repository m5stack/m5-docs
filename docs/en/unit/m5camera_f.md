# M5CameraF - FishEye Lens (4MB PSRAM) {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_f_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_f_07.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**:electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Fish-eye-Camera-Module-OV2640-Fisheye-Mini-Camera-Unit-Demoboard-with-ESP32-PSRAM-Development/3226069_32973208335.html?spm=a2g1y.12024536.productList_5885013.subject_2)**

## Description

The **<mark>M5CameraF</mark>** is a camera unit based on ESP32 chip and OV2640 **<mark>including PSRAM</mark>**, **<mark>160° Fisheye Lens</mark>**. You can even program it through ESP-IDF or Arduino IDE.

<img src="assets/img/product_pics/unit/unit_m5camera_f_04.png">

This Unit reserves the weld of the 9-axis gyroscope (MPU6050), Temperature and humidity pressure sensor (BME280) and **Digital silicon microphone (SPM1423)**. If you need those devices, you can Self-weld them or purchase those version thraightly. Additionally, M5CameraF also reserves the weld of battery. The size of the battery that can be accommodated in the case corresponds to a battery capacity of **80mAh**.

**Note: M5CameraF is named differently when different hardware is selected. They follow the rules below.**

*M5CameraF_#_#... means optional hardware name follows "M5CameraF".*

* If configured with MPU6050, will be named M5CameraF_6050
* If also configured with  microphone, will be named  M5CameraF_6050_MIC
* If also configured with  BME280, will be named  M5CameraF_6050_MIC_BME280
* If also configured with  battery, will be named  M5CameraF_6050_MIC_BME280_BAT

<img src="assets/img/product_pics/unit/unit_m5camera_f_02.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_f_03.png" width="100%" height="100%">

## Feature

- ESP32 specifications
    + Dual-core Tensilica LX6 microprocessor
    + Up to 240MHz clock frequency
    + **4MB PSRAM**
    + **4MB Flash memory**
    + Integrated 802.11 BGN WiFi transceiver
    + Integrated dual-mode Bluetooth (classic and BLE)
    + Hardware accelerated encryption (AES, SHA2, ECC, RSA-4096)
- CP2104 USB-to-TTL converter
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
    + Field of View : **160 degree**
    + Maxmium Pixel: 200W
- Sensor best resolution: 1600 * 1200
- 尺寸：23.5 × 48 × 23.5mm

## Include

- 1x M5CameraF
- 1x LEGO Adapter
- 1x Wall/1515
- 1x Type-C USB Cable

<img src="assets/img/product_pics/unit/unit_m5camera_f_05.png" width="50%" height="50%">

## PinMap

**Camera Interface PinMap**

| *Interface*             | *Camera Pin*| *M5CameraF*  |
| :-------------------  | :--------:| :------:  |
| SCCB Clock            | SIOC     |IO23       |
| SCCB Data             | SIOD         |**IO22**       |
| System Clock          | XCLK     |IO27       |
| Vertical Sync         | VSYNC        |**IO25**       |
| Horizontal Reference  | HREF     |IO26       |
| Pixel Clock           | PCLK     |IO21       |
| Pixel Data Bit 0      | D2       |IO32       |
| Pixel Data Bit 1      | D3       |IO35       |
| Pixel Data Bit 2      | D4       |IO34       |
| Pixel Data Bit 3      | D5       |IO5        |
| Pixel Data Bit 4      | D6       |IO39       |
| Pixel Data Bit 5      | D7       |IO18       |
| Pixel Data Bit 6      | D8       |IO36       |
| Pixel Data Bit 7      | D9       |IO19       |
| Camera Reset          | RESET    |IO15       |
| Camera Power Down     | PWDN     | *see Note 1* |
| Power Supply 3.3V     | 3V3      | 3V3       |
| Ground                | GND      | GND       |

**GROVE Interface**

| *Grove*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | **IO13**      |
| SDA               | **IO4**      |
| 5V            | 5V        |
| GND           | GND       |

**LED Interface**

| *LED*         | *M5CameraF*  |
| :-----------: | :------:  |
| LED_Pin       | IO14      |

**<mark>The following tables are Reserved Chip Interfaces</mark>**

**BME280 Interface**

*It's IIC address is 0x76.*

| *BME280*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |


**MPU6050 Interface**

*It's IIC address is 0x68.*

| *MPU6050*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |

**MIC(SPM1423) Interface**

| *MIC(SPM1423)*     | *M5CameraF*  |
| :-----------: | :------:  |
| CLK           |IO4|
| DATA           |IO2|

**<mark>NOTE:</mark>**

1. **Camera Power Down** pin does not need to be connected to ESP32 GPIO. Instead it may be pulled down to ground with 10 kOhm resistor.

2. We have several kinds of camera boards, the following figures show the main differece with them.

    If you want to **view** the detailed defference with them, please click [here](https://shimo.im/sheets/gP96C8YTdyjGgKQC).

    If you want to **download** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx).

    <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_en.png">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

<!-- - **[The comparison between ESP32CAM and M5Camera](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/hardware_diff_with_ESP32CAM_M5Camera.md)** -->

## Code

### Firmware

- **[M5Camera Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/FishEye)**

<img src="assets/img/product_pics/unit/unit_m5camera_f_06.png" width="50%" height="50%">

## Schematic

### Power circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### Chip peripheral circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USB to serial port part of the circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">
<!-- ### Example

- **[Color recognition](https://github.com/m5stack/Applications-cam)**

- **[Face recognition](https://github.com/m5stack/esp-who)** -->

<!-- ```arduino
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/M5CAMERA)for Specific example. -->

<!-- ## Schematic -->

<!-- <img src="assets/img/product_pics/unit/m5camera_sch.JPG"> -->

<!-- ### PinMap -->

<!-- <table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>M5CAMERA Unit</td><td>SCL</td><td>SDA</td></tr>
</table> -->