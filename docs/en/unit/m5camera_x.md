# M5CameraX {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U038</div>

<img src="assets/img/product_pics/unit/unit_m5camera_x_01.png" width="30%" height="30%">



## Description

**M5CameraX** is a development board for image recognition. It features an ESP32(4M Flash + 520K RAM) chip and 2-Megapixel carmera(OV2640).**M5Camera** offers plenty of storage, with an extra 4 Mbyte PSRAM.  It also supports image transmission via Wi-Fi and debuging through USB Type-C port.

The hardware comes preloaded software, programmed by ESP-IDF. It is an application to run Wi-Fi camera. The output image is size 600*800, since it's 2-Maga camera, you sure can optimize the software to output the maximum size of photos.

what this software can do?
- Power the board via USB type-C or GROVE
- Use your phone to Wi-Fi scan an AP name start with 'm5stack-' and click to connect this AP.
- Open up web browser on your phone and visit <mark>192.168.4.1</mark>
- Then here comes the picture. Video is about 5-6 frames per senconds. not super fast.


<!-- <img src="assets/img/product_pics/unit/unit_m5camera_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_06.png" width="100%" height="100%"> -->


<!-- <img src="assets/img/product_pics/unit/unit_m5camera_04.png"> -->

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
- Product Size：48.2mm x 24.2mm x 15.4mm
- Product weight：15.3g

## Include

- 1x M5CameraX
- 1x LEGO Adapter
- 1x Wall-1515
- 1x Type-C USB(20cm)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/M5-Camera-X/wifi_ap/EasyLoader_M5-Camera-X_wifi_ap.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## PinMap

**Camera Interface PinMap**

| *Interface*             | *Camera Pin*| *M5Camera(B model)*  |
| :-------------------  | :--------:| :------:  |
| SCCB Clock            | SIOC      |IO23       |
| SCCB Data             | SIOD      |**IO22**   |
| System Clock          | XCLK      |IO27       |
| Vertical Sync         | VSYNC     |**IO25**   |
| Horizontal Reference  | HREF      |IO26       |
| Pixel Clock           | PCLK      |IO21       |
| Pixel Data Bit 0      | D2        |IO32       |
| Pixel Data Bit 1      | D3        |IO35       |
| Pixel Data Bit 2      | D4        |IO34       |
| Pixel Data Bit 3      | D5        |IO5        |
| Pixel Data Bit 4      | D6        |IO39       |
| Pixel Data Bit 5      | D7        |IO18       |
| Pixel Data Bit 6      | D8        |IO36       |
| Pixel Data Bit 7      | D9        |IO19       |
| Camera Reset          | RESET     |IO15       |
| Camera Power Down     | PWDN      | *see Note 1* |
| Power Supply 3.3V     | 3V3       | 3V3       |
| Ground                | GND       | GND       |

**GROVE Interface**

| *Grove*       | *M5Camera*  |
| :-----------: | :------:  |
| SCL           |  IO13     |
| SDA           | **IO4**   |
| 5V            | 5V        |
| GND           | GND       |

**LED Interface**

| *LED*         | *M5Camera*  |
| :-----------: | :------:  |
| LED_Pin       | IO14      |

**The following tables are Reserved Chip Interfaces**

**BME280 Interface**

*It's IIC address is 0x76.*

| *BME280*      | *M5Camera*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |


**MPU6050 Interface**

*It's IIC address is 0x68.*

| *MPU6050*     | *M5Camera*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |

**MIC(SPM1423) Interface**

| *MIC(SPM1423)*  | *M5Camera*  |
| :-----------: | :------:  |
| SCL           |IO2|
| SDA           |IO4|

**NOTE:**

1. **Camera Power Down** pin does not need to be connected to ESP32 GPIO. Instead it may be pulled down to ground with 10 kOhm resistor.

2. We have several patterns of camera board, the following figures shows the main differece

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_compare.jpg">

## Related Link

- **Datasheet** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf) - [OV2640](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV2640DS_en.pdf)

## Example

### Firmware

- **[M5CameraX Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/master/wifi/wifi_sta/firmware/Camera%20X)**


### Code

 - **[Face recognition](https://github.com/m5stack/m5stack-cam-psram/tree/master/face_recognize/firmware/Camera%20X)**
 
 - **[Serial communication-M5CameraX](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/firmware/Camera%20X)**

 - **[Serial communication-M5Core](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/arduino)**（The serial communication routine is the communication between the camera and the M5Core.）

 - **[QRcode](https://github.com/m5stack/m5stack-cam-psram/tree/master/qr/firmware/Camera%20X)**

 - **[MPU6050](https://github.com/m5stack/m5stack-cam-psram/tree/master/mpu6050/firmware/Camera%20X)**（Gyro Example after soldering **MPU6050**）

### Source Code
 - **[M5Camera](https://github.com/m5stack/m5stack-cam-psram)**
 
## Schematic

### Power circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### Chip peripheral circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USB to serial port part of the circuit

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">

<script>

   var purchase_link = 'https://docs.m5stack.com/#/en/quick_start/m5camera/m5camera_quick_start';

   var quickstart_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>