# Timer Camera F

<el-tag effect="plain">SKU:U082-F</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/timercamera_f/timercamera_f_01.webp"></div>

## 教程&快速上手

选择你想使用的开发平台，查看对应的教程&快速上手。

<a href="/#/zh_CN/quick_start/timer_cam/quick_start_cameratool"><el-tag effect="plain">Camera-Tool</el-tag></a>
<a href="/#/zh_CN/quick_start/timer_cam/quick_start_uiflow"><el-tag effect="plain">UIFlow</el-tag></a> 
<a href="/#/zh_CN/quick_start/timer_cam/quick_start_arduino"><el-tag effect="plain">Arduino</el-tag></a>

## 描述

**Timer Camera F** 是一款基于ESP32-D0WDQ6-V3的鱼眼摄像头模块，板载8M PSRAM与4M Flash。搭载300万像素的摄像头（OV3660），DFOV 120°，最高可实现拍摄2048x1536分辨率的照片。该摄像头主打超低功耗设计，内部集成的RTC(BM8563)对IRQ信号进行了引出，可用于设备的休眠与定时唤醒(休眠电流可低至2μA)。在开启定时拍照(每小时一张)的情况下，内置的270mAh电池可为其提供一个月以上的续航能力。模块支持WiFi图像传输和USB端口调试，底部HY2.0-4P端口输出，能够用于拓展其他外设。板载的LED状态指示灯与复位按键，方便程序开发调试。应用上，M5Stack为TimerCAM系列提供了一些简洁高效的应用开发方式与接口，能够为用户使用与开发提供便捷。(包括PC/Mobile端的照片拍摄APP, 定时拍摄的云端图像HTTP接口, 云端AI识别接口(未上线)等)

>Timer Camera系列采用的低功耗电源管理方案与CORE与StickC设备有所不同，使用时，PWR按键作为开机按键使用(长按2s)，如需要使设备关机，则需要通过软件API或是按下PCB板上的复位按键。

## 产品特性

- 基于ESP32设计
- WIFI图像传输
- 定时休眠唤醒
- 状态指示灯
- 超低功耗设计
- 内置270mAh电池
- 编程平台：ESP-IDF/Arduino/UIFlow

## 包含

- 1x Timer Camera F
- 1x LEGO Adapter
- 1x Wall-1515
- 1x Type-C USB(20cm)

## 应用

- 定时拍照
- 远程监控


## 鱼眼镜头与普通镜头的成像比较

<img src="assets/img/product_pics/unit/timercamera_f/timercam_comparison.webp">

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
      <td>锂电池</td>
      <td>270mAh</td>
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
      <td>120°</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>44g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*22.6mm</td>
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
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/timercam_f_video.mp4" type="video/mp4">
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
| BAT_ADC_Pin     | IO33     | 

## 相关链接

- **数据手册** 
   - [ESP32-D0WDQ6-V3](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf) 
   - [OV3660](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV3660_CSP3_DS_1.3_sida.pdf)


## 案例程序

### Arduino

- **[TimerCamera-Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/ESP32/examples/Camera/CameraWebServer)**

### 源码

- **[TimerCamera F](https://github.com/m5stack/TimerCam-idf)**

### 固件

**通过[M5Burner](https://m5stack.com/pages/download)可下载TimerCamera最新固件**

### 教程

**[使用Camera-Tool](zh_CN/quick_start/timer_cam/quick_start_cameratool)拍摄图片**

**[使用HTTP云端图片接口服务-UIFlow](zh_CN/quick_start/timer_cam/quick_start_uiflow)获取图片**

**[使用Arduino IDE](zh_CN/quick_start/timer_cam/quick_start_arduino)开发**

<script>

   var purchase_link = 'https://m5stack.com/products/esp32-psram-timer-camera-fisheye-ov3660';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/timer_cam/quick_start_list';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>