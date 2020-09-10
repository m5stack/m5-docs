# ESP32CAM

<el-tag effect="plain">SKU:U007</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_esp32cam_01.webp"><img src="assets/img/product_pics/unit/unit_esp32cam_02.webp"></div>

## Description

**ESP32CAM** is a development board for image recognition. It features an ESP32(4M Flash + 520K RAM) chip and 2-Megapixel carmera(OV2640). It also supports image transmission via Wi-Fi and debuging through USB Type-C port.

The hardware comes preloaded software, programmed by ESP-IDF. It is an application to run Wi-Fi camera. The output image is size 600*800, since it's 2-Maga camera, you sure can optimize the software to output the maximum size of photos.

what this software can do?
- Power the board via USB type-C or GROVE
- Use your phone to Wi-Fi scan an AP name start with 'm5stack-' and click to connect this AP.
- Open up web browser on your phone and visit <mark>192.168.4.1</mark>
- Then here comes the picture. Video is about 5-6 frames per senconds. not super fast.

## Product Features

- ESP32 specifications
- CP2104 USB TTL
- 2M image processor
- 65° Field of View


## Include

- 1x ESP32CAM


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4MB</td>
   </tr>
   <tr>
      <td>RAM</td>
      <td>520KB</td>
   </tr>
   <tr>
      <td>Image Sensor</td>
      <td>OV2640</td>
   </tr>
   <tr>
      <td>Maximum resolution</td>
      <td>200w pixel</td>
   </tr>
   <tr>
      <td>Transmission rate</td>
      <td>UXGA/SXGA: 15fps, SVGA: 30fps, CIF: 60fps</td>
   </tr>
   <tr>
      <td>Output format</td>
      <td>YUV(422/420)/YCbCr422, RGB565/555, 8-bit compressed data</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>6g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>20.5*46.5*11.5mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
</table>


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/ESP32CAM/wifi_ap/EasyLoader__ESP32CAM_wifi_ap.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## PinMap

**Camera Interface PinMap**

| *Interface*             | *OV2640 Pin*| *ESP32Cam*    |
| :-------------------  | :--------:| :--------:  |
| SCCB Clock            | SIOC      | IO23        |
| SCCB Data             | SIOD      | IO22        |
| System Clock          | XCLK      | IO27        |
| Vertical Sync         | VSYNC     | IO25        |
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
| SCL           | IO4        |
| SDA           | IO13        |
| 5V            | 5V          |
| GND           | GND         |

**LED Interface**

| *LED*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| LED_Pin           | IO16        |

**reserved chip interfaces**

**BME280 Interface**

*I2C address 0x76.*

| *BME280*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |


**MPU6050 Interface**

*I2C address is 0x68.*

| *MPU6050*         | *ESP32Cam*    |
| :-----------: | :--------:  |
| SCL           | IO4         |
| SDA           | IO13        |

**MIC(SPQ2410) Interface**

| *SPQ2410*            | *ESP32Cam*  |
| :-----------: | :------:  |
| OUT           | IO32      |
 
**NOTE:**

1. **Camera Power Down** pin does not need to be connected to ESP32 GPIO. Instead it may be pulled down to ground with 10 kOhm resistor.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/Product_compared.pdf"><el-button type="primary">View M5 camera series/product differences</el-button>


- **Datasheet** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf) - [OV2640](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV2640DS_en.pdf)


## Schematic

- **[Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)**

## Example

### Firmware

- **[ESP32CAM Firmware](https://github.com/m5stack/M5Stack-Camera/tree/master/wifi/wifi_ap/firmware/ESP32-Camera)**

- **[Serial communication-ESP32CAM](https://github.com/m5stack/M5Stack-Camera/tree/master/uart/firmware/ESP32-Camera)**

- **[Serial communication-M5Core](https://github.com/m5stack/M5Stack-Camera/tree/master/uart/arduino/uart)**（The serial communication routine is the communication between the camera and the M5Core.）

### Arduino

- **[ESP32CAM-Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/ESP32/examples/Camera/CameraWebServer)**

## Video

**ESP32CAM Case - 01**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/esp32cam_webcam_01.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/esp32-camera';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5camera/m5camera_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>