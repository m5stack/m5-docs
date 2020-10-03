# Timer Camera X {docsify-ignore-all}

<el-tag effect="plain">SKU:U082-X</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/timercamera_x/timercamera_x.webp"></div>

## 描述

**Timer Camera X** 是一款基于ESP32的摄像头模块，集成ESP32芯片，板载8M PSRAM，采用300万像素的摄像头（OV3660）可视角66.5°，最高可实现拍摄1600 x 1200分辨率的照片，内置140mAh电池与LED状态指示灯，在指示灯下方有一颗隐藏的reset按键，该摄像头主打超低功耗设计，通过RTC(BM8563)可实现定时休眠与唤醒，休眠后电流仅2μA，开启定时拍照(每小时一张)后，电池可支持连续工作一个月以上。模块支持WiFi图像传输和USB端口调试，底部HY2.0-4P端口输出，可连接其他外设。通过M5Burner烧录固件，可直接使用Camera-Tool对Timer Camera X进行设置，也可在UIFlow中对Timer Camera X数据进行处理。

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
      <td>YUV(422/420)/YCbCr422,8位压缩数据,RGB565/555,8-/10位Raw RGB数据</td>
   </tr>
   <tr>
      <td>最大图像传输速率</td>
      <td>UXGA/SXGA: 15fps, SVGA: 30fps, CIF: 60fps</td>
   </tr>
   <tr>
      <td>视角</td>
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

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

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

**GROVE 接口**

| *Grove*         | *TimerCamera*  | 
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
| BAT_ADC_Pin     | IO33     | 

## 相关链接

- **数据手册** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) 
   - [OV3660](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV3660_CSP3_DS_1.3_sida.pdf)


## 案例程序

### Arduino

- **[TimerCamera-Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/ESP32/examples/Camera/CameraWebServer)**

### 源码

- **[TimerCamera X](https://github.com/m5stack/TimerCam-idf)**

### 固件

**通过[M5Burner](https://m5stack.com/pages/download)可下载TimerCamera最新固件**

<script>

   var purchase_link = 'https://m5stack.com/collections/m5stack-new-arrival/products/esp32-psram-timer-camera-x-ov3660';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/timer_cam/quick_start_list';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>