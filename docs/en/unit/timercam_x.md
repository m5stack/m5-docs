# TimerCAM X {docsify-ignore-all}

<el-tag effect="plain">SKU:</el-tag>

<div class="product_pic"><img src=""></div>

## Description

**TimerCAM X**  is a camera module based on ESP32, integrated with ESP32 chip and 8M-PSRAM. The camera (ov3660) with 3 million pixels can view 66.5 ° and shoot 1600 x at most 1200 resolution photo, built-in 140mAh battery and LED status indicator, featuring ultra-low power consumption design. Through RTC (BM8563), timing sleep and wake-up can be realized. The standby current is only 2μA. After timing photo taking function(one photo per hour) is turned on, the battery can work continuously for more than one month. The module supports WiFi image transmission and USB port debugging. The bottom HY2.0-4P port output can be connected to other peripherals. Through M5burner burning firmware, timecam can be set directly with Camera-Tool, and Timecam data can be processed in UIFlow.

## Product Features

- Design based on esp32
- WiFi image transmission
- Timed sleep wake up
- Status indicator
- Ultra low power design
- Built in battery

## Includes

- 1x Timercam X

## Applications

- Take pictures regularly
- Remote video monitoring

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
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
      <td>Image Sensor</td>
      <td>OV3660</td>
   </tr>
   <tr>
      <td>Maximum resolution</td>
      <td>3M pixels</td>
   </tr>
   <tr>
      <td>Output format</td>
      <td>YUV(422/420)/YCbCr422,RGB565/555,8-bit compressed data,8-/10-bit Raw RGB data</td>
   </tr>
   <tr>
      <td>Maximum image transmission rate</td>
      <td>UXGA/SXGA: 15fps, SVGA: 30fps, CIF: 60fps</td>
   </tr>
   <tr>
      <td>FOV</td>
      <td>66.5°</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>14g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>24*48*13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>75*45*30mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="">Windows</a>
            <a href="">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p></p>
        </div>
    </div>
</div>

## PinMap

**Camera Interface PinMap**

| *Interface*             | *Camera Pin*| *TimerCamera*  |
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

**GROVE Interface**

| *Grove*         | *TimerCamera*  | 
| :-----------: | :------:  | 
| SCL           | IO13      | 
| SDA           | IO4       |
| 5V            | 5V        |
| GND           | GND       | 

**LED Interface**

| *LED*         | *TimerCamera*  |
| :-----------:| :------:  | 
| LED_Pin      | IO2     | 

**BAT Interface**

| *BAT*         | *TimerCamera*  |
| :-----------:| :------:  | 
| BAT_ADC_Pin     | IO33     | 

## Related Link

- **datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf) 
   - [OV3660](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/OV3660_CSP3_DS_1.3_sida.pdf)


## Example

### Firmware

- **[Timercam Firmware]()**

### Arduino

- **[TimerCamera-Arduino]()**

### Source code

 - **[Timercam]()**

<script>

   var purchase_link = '';

   var quickstart_link = '';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>