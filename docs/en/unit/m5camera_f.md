# Unit M5CameraF {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_f_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_f_07.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/fish-eye-camera-module-ov2640)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**M5CameraF** is a development board for image recognition. It features an ESP32(4M Flash + 520K RAM) chip and 2-Megapixel carmera(OV2640).**M5CameraF** offers plenty of storage, with an extra 4 Mbyte PSRAM.  It also supports image transmission via Wi-Fi and debuging through USB Type-C port.

<img src="assets/img/product_pics/unit/unit_m5camera_f_04.png">

The hardware comes preloaded software, programmed by ESP-IDF. It is an application to run Wi-Fi camera. The output image is size 600*800, since it's 2-Maga camera, you sure can optimize the software to output the maximum size of photos.

what this software can do?
- Power the board via USB type-C or GROVE
- Use your phone to Wi-Fi scan an AP name start with 'm5stack-' and click to connect this AP.
- Open up web browser on your phone and visit 192.168.4.1
- Then here comes the picture. Video is about 5-6 frames per senconds. not super fast.

The hardware also comes with some reserved weld pad, just in case you want put these chips back on board.
- 9-axis gyroscope (MPU6050)
- pressure sensor (BME280)
- **Digital silicon microphone (SPM1423)**
- Lipo Battery power pins

<img src="assets/img/product_pics/unit/unit_m5camera_f_02.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_f_03.png" width="100%" height="100%">


**Note: M5CameraF is named differently when different hardware is selected. They follow the rules below.**

*M5CameraF_#_#... means optional hardware name follows "M5CameraF".*

* If configured with MPU6050, will be named M5CameraF_6050
* If also configured with  microphone, will be named  M5CameraF_6050_MIC
* If also configured with  BME280, will be named  M5CameraF_6050_MIC_BME280
* If also configured with  battery, will be named  M5CameraF_6050_MIC_BME280_BAT

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
    + Field of View : **160 degree**
    + Maxmium Pixel: 2-Mega
- Sensor best resolution: 1600 * 1200
- Size：23.5 × 48 × 23.5mm

## Include

- 1x M5CameraF
- 1x LEGO Adapter
- 1x Wall/1515
- 1x Type-C USB Cable

<img src="assets/img/product_pics/unit/unit_m5camera_f_05.png" width="50%" height="50%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/M5-Camera-F/wifi_ap/EasyLoader_M5-Camera-F_wifi_ap.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

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

**The following tables are Reserved Chip Interfaces**

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

- **[M5Camera Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/master/wifi/firmware/Camera%20F)**

<img src="assets/img/product_pics/unit/unit_m5camera_f_06.png" width="50%" height="50%">

### Example

 - **[Serial communication-M5CameraF](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/firmware/Camera%20F)**

 - **[Serial communication-M5Core](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/arduino)**（The serial communication routine is the communication between the camera and the M5Core.）

 - **[QRcode](https://github.com/m5stack/m5stack-cam-psram/tree/master/qr/firmware/Camera%20F)**

 - **[MPU6050](https://github.com/m5stack/m5stack-cam-psram/tree/master/mpu6050/firmware/Camera%20F)**（Gyro Example after soldering **MPU6050**）

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