# Timer Camera X {docsify-ignore-all}

<el-tag effect="plain">SKU:U082-X</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/timercamera_x/timercamera_x.webp"></div>

## 教程&快速上手

选择你想使用的开发平台，查看对应的教程&快速上手。

<a href="/#/zh_CN/quick_start/timer_cam/quick_start_cameratool"><el-tag effect="plain">Camera-Tool</el-tag></a>
<a href="/#/zh_CN/quick_start/timer_cam/quick_start_uiflow"><el-tag effect="plain">UIFlow</el-tag></a> 
<a href="/#/zh_CN/quick_start/timer_cam/quick_start_arduino"><el-tag effect="plain">Arduino</el-tag></a>

## 描述

**Timer Camera X** 是一款基于ESP32-D0WDQ6-V3的摄像头模块，板载8M PSRAM，采用300万像素的摄像头（OV3660）, DFOV 66.5°，最高可实现拍摄2048x1536分辨率的照片，内置140mAh电池与LED状态指示灯，在指示灯下方有一颗的复位按键，方便开发调试。该摄像头主打超低功耗设计，通过RTC(BM8563)可实现定时休眠与唤醒，休眠电流可低至2μA，开启定时拍照(每小时一张)后，电池可支持连续工作一个月以上。模块支持WiFi图像传输和USB端口调试，底部HY2.0-4P端口输出，可连接其他外设。通过M5Burner烧录固件，可直接使用Camera-Tool对Timer Camera X进行设置，也可在UIFlow中对Timer Camera X数据进行处理。

>Timer Camera系列采用的低功耗电源管理方案与CORE与StickC设备有所不同，使用时，PWR按键作为开机按键使用(长按2s)，如需要使设备关机，则需要通过软件API或是按下PCB板上的复位按键。当使用外部供电时，设备将保持开机状态。

<img src="assets/img/product_pics/unit/timercamera_x/timercamera_x_reset.webp" width="400px">

## 产品特性

- 基于ESP32设计
- WIFI图像传输
- 定时休眠唤醒
- 状态指示灯
- 超低功耗设计
- 内置140mAh电池
- 编程平台：ESP-IDF/Arduino/UIFlow

## 包含

- 1x Timer Camera X
- 1x LEGO Adapter
- 1x Wall-1515
- 1x Type-C USB(20cm)

## 应用

- 定时拍照
- 远程监控

## 常见驱动问题

>TimerCAM系列在部分系统中，可能无法免驱工作，用户可以通过手动安装[FTDI驱动](https://ftdichip.com/drivers/vcp-drivers/)修复该问题。

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>PSRAM</td>
      <td>8MB</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4M</td>
   </tr>
   <tr>
      <td>图像传感器</td>
      <td>OV3660</td>
   </tr>
   <tr>
      <td>最大分辨率</td>
      <td>3百万像素</td>
   </tr>
   <tr>
      <td>输出格式</td>
      <td>8-/10-Bit RAW, RGB and YCbCr output, compression.</td>
   </tr>
   <tr>
      <td>最大图像传输速率(OV3660)</td>
      <td>
         2048x1536: 15fps /
         1080p: 20fps /
         720p: 45fps	 /
         XGA(1024x768) : 45fps /
         VGA(640x480) : 60fps /
         QVGA(320x240) : 120fps 
      </td>
   </tr>
   <tr>
      <td>DFOV</td>
      <td>66.5°</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>14g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*15mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>75*45*30mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/TIMECAM/EasyLoader_TimerCamera_AP.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/TIMECAM/EasyLoader_TimerCamera_AP.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/timer_cameraX.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>连接TimerCAM热点，密码12345678，在浏览器中打开192.168.4.1即可查看图像，如需使用定时拍照功能，请参考快速上手指南</p>
        </div>
    </div>
</div>

**摄像头驱动芯片 OV3660 接口**

| *接口*             | *Camera Pin*| *TimerCamera*  |
| :-------------------  | :--------:| :------:  |
| SCCB Clock            | SIOC     |IO23        |
| SCCB Data             | SIOD     |IO25       |
| System Clock          | XCLK     |IO27       |
| Vertical Sync         | VSYNC    |IO22       |
| Horizontal Reference  | HREF     |IO26       |
| Pixel Clock           | PCLK     |IO21       |
| Pixel Data Bit 0      | D0       |IO32       |
| Pixel Data Bit 1      | D1       |IO35       |
| Pixel Data Bit 2      | D2       |IO34       |
| Pixel Data Bit 3      | D3       |IO5        |
| Pixel Data Bit 4      | D4       |IO39       |
| Pixel Data Bit 5      | D5       |IO18       |
| Pixel Data Bit 6      | D6       |IO36       |
| Pixel Data Bit 7      | D7       |IO19       |
| Camera Reset          | RESET    |IO15       |
| Camera Power Down     | PWDN     |-1         |
| Power Supply 3.3V     | 3V3      | 3V3       |
| Ground                | GND      | GND       |

**HY2.0-4P 接口**

| *HY2.0-4P*         | *TimerCamera*  | 
| :-----------: | :------:  | 
| SCL           | IO13      | 
| SDA           | IO4       |
| 5V            | 5V        |
| GND           | GND       | 

**LED 接口**

| *LED*         | *TimerCamera*  |
| :-----------:| :------:  | 
| LED_Pin      | IO2     | 

**BAT 接口**

| *BAT*         | *TimerCamera*  |
| :-----------:| :------:  | 
| BAT_ADC_Pin     | IO38     | 
| BAT_HOLD_Pin     | IO33     | 

## 相关链接

- **数据手册** 
   - [ESP32-D0WDQ6-V3](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) 
   - [OV3660](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV3660_CSP3_DS_1.3_sida.pdf)

## 原理图

[TimerCAM_A1-ESP32_SUBSYS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/TimerCAM/TimerCAM_A1-ESP32_SUBSYS.pdf)

[TimerCAM_A2-PMS_UART](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/TimerCAM/TimerCAM_A2-PMS_UART.pdf)


## 案例程序

### Arduino

- **[TimerCamera-Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/ESP32/examples/Camera/CameraWebServer)**

### ESP-IDF

- **[FactoryTest](https://github.com/m5stack/TimerCam-idf)**
- **[Ali-OSS](https://github.com/m5stack/TimerCam-idf/tree/ali-oss)**
- **[Timer-Wake](https://github.com/m5stack/TimerCam-idf/tree/timer-wake)**


### 固件

**通过[M5Burner](https://m5stack.com/pages/download)可下载TimerCamera最新固件**

### 教程

**[使用Camera-Tool](zh_CN/quick_start/timer_cam/quick_start_cameratool)拍摄图片**

**[使用HTTP云端图片接口服务-UIFlow](zh_CN/quick_start/timer_cam/quick_start_uiflow)获取图片**

**[使用Arduino](zh_CN/quick_start/timer_cam/quick_start_arduino)开发**

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/TimerCAM.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5stack-new-arrival/products/esp32-psram-timer-camera-x-ov3660';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/timer_cam/quick_start_list';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>