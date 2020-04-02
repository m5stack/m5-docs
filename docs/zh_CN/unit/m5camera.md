# M5CAMERA {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U017</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/m5camera/unit_m5camera_01.jpg"><img src="assets/img/product_pics/unit/m5camera/unit_m5camera_02.jpg"></div>

## 描述

**M5Camera** 是一款图像识别开发板，集成ESP32（4M Flash + 520K RAM + 4M PSRAM）芯片和200万像素的摄像头（OV2640）.支持WiFi-图像传输和USB端口调试.

硬件上预装固件，通过ESP-IDF编程开发，运行WiFi-相机应用程序.默认程序输出图像尺寸为**600 * 800**，你可以通过优化程序输出更大尺寸.

这个程序是如何使用的?
- 打开手机Wi-Fi，扫描并连接名称以"m5stack-"开头的AP热点.
- 打开手机浏览器，访问<mark>192.168.4.1</mark>,进入监控页面实时获取拍摄视频.
- 视频帧率大约在每秒5-6帧.

<img src="assets/img/product_pics/unit/unit_m5camera_05.png" width="50%">


<img src="assets/img/product_pics/unit/unit_m5camera_06.png" width="50%">

<img src="assets/img/product_pics/unit/m5camera/unit_m5camera_03.jpg" width="50%">

## 产品特性

- 基于ESP32设计
- WIFI图像传输
- CP2104 USB TTL

## 包含

- 1x M5Camera
- 4x LEGO积木
- 1x Type-C USB(20cm)

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4M</td>
   </tr>
   <tr>
      <td>RAM</td>
      <td>4MB</td>
   </tr>
   <tr>
      <td>图像传感器</td>
      <td>OV2640</td>
   </tr>
   <tr>
      <td>最大分辨率</td>
      <td>2百万像素</td>
   </tr>
   <tr>
      <td>输出格式</td>
      <td>YUV(422/420)/YCbCr422,8位压缩数据,RGB565/555,8-/10位Raw RGB数据</td>
   </tr>
   <tr>
      <td>最大图像传输速率</td>
      <td>UXGA/SXGA: 15fps, SVGA: 30fps, CIF: 60fps</td>
   </tr>
   <tr>
      <td>视角</td>
      <td>65°</td>
   </tr>
   <tr>
      <td>最佳分辨率</td>
      <td>1600x1200</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>23.5 × 48 × 23.5mm</td>
   </tr>
   <tr>
      <td>重量</td>
      <td>18.7g</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/M5-Camera-B/wifi_ap/EasyLoader_M5CAMERA_B_wifi_ap.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 管脚映射

**摄像头驱动芯片 OV2640 接口**

| *接口*             | *Camera Pin* | *M5Camera*  |
| :-------------------  | :--------:| :------:  |
| SCCB Clock            | SIOC     |IO23       |
| SCCB Data             | SIOD     |**IO22**       |
| System Clock          | XCLK     |IO27       |
| Vertical Sync         | VSYNC    |**IO25**       |
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
| Camera Power Down     | PWDN     | / |
| Power Supply 3.3V     | 3V3      | 3V3       |
| Ground                | GND      | GND       |

**GROVE 接口**

| *Grove*         | *M5Camera*  |
| :-----------: | :------:  |
| SCL           | IO13      |
| SDA           | **IO4**      |
| 5V            | 5V        |
| GND           | GND       |

**LED 接口**

| *LED*         |*M5Camera*  |
| :-----------:| :------:  |
| LED_Pin      | IO14      |

**以下为预留的IC接口**

**BME280 接口**

*IIC 地址是 0x76*

| *BMP280*      |*M5Camera*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |


**MPU6050 接口**

| *MPU6050*     | *M5Camera*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |

**MIC(SPM1423) 接口**

| *MIC(SPM1423)*     | *M5Camera*  |
| :-----------: | :------: |
| CLK           |IO4|
| DATA           |IO2|

<img src="assets/img/product_pics/unit/m5camera/unit_m5camera_04.jpg" width="30%" height="30%">

**注意：**

1. OV2640 芯片的 **PIN8（PDWN）**引脚为使能引脚，在该主板中通过12KΩ下拉电阻接地使能，进入工作模式.当 PIN8（PDWN）引脚上拉高电平时，将进入**Camera Power Down**模式.

2. 以下是M5相机系列几款产品的主要参数区别.

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_compare.jpg">

## 相关链接

- **数据手册** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) - [OV2640](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV2640DS_en.pdf)


## 案例程序

### 出厂固件（WiFi传输图像）

- **[M5Camera](https://github.com/m5stack/m5stack-cam-psram/tree/master/wifi/wifi_sta/firmware/Camera%20B)**

### 例程

 - **[人脸识别](https://github.com/m5stack/m5stack-cam-psram/tree/master/face_recognize/firmware/Camera%20B)**
 
 - **[串口通信-M5Camera](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/firmware/Camera%20B)**

 - **[串口通信-M5Core](https://github.com/m5stack/m5stack-cam-psram/tree/master/uart/arduino)**（串口通信例程为，摄像头与M5Core之间通信）

 - **[QRcode识别](https://github.com/m5stack/m5stack-cam-psram/tree/master/qr/firmware/Camera%20B)**

 - **[MPU6050](https://github.com/m5stack/m5stack-cam-psram/tree/master/mpu6050/firmware/Camera%20B)**（焊接**MPU6050**芯片后，陀螺仪的例程）


### 源码

 - **[M5Camera](https://github.com/m5stack/m5stack-cam-psram)**

## 原理图

### 电源电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### 芯片外围电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USB 转串口电路

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">

## 相关视频

**M5Camera 的应用 - M5Camera 与 M5Core 图传**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Camera.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/esp-32-camera-psram';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5camera/m5camera_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>