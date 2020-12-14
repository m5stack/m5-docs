# Timer Camera F {docsify-ignore-all}

<el-tag effect="plain">SKU:U082-F</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/timercamera_f/timercamera_f_01.webp"></div>

## Tutorial&Quick-Start

Choose the development platform you want to use, view the corresponding tutorial&quick-Start.

<a href="/#/en/quick_start/timer_cam/quick_start_cameratool"><el-tag effect="plain">Camera-Tool</el-tag></a>
<a href="/#/en/quick_start/timer_cam/quick_start_uiflow"><el-tag effect="plain">UIFlow</el-tag></a>
<a href="/#/en/quick_start/timer_cam/quick_start_arduino"><el-tag effect="plain">Arduino</el-tag></a>

## Description

The **Timer Camera F** is a fisheye camera module based on ESP32-D0WDQ6-V3 with 8M PSRAM and 4M Flash on board. 3.0 megapixel camera (OV3660) with a 120° viewing angle and a maximum resolution of 1600 x 1200 photos can be captured. The camera features an ultra-low-power design, and the internal integrated RTC (BM8563) draws out the IRQ signal, which can be used for sleep and timer wake-up (sleep current down to 2μA). The built-in 270mAh battery provides more than one month of battery life with timed pictures (one per hour) enabled. The module supports WiFi image transfer and USB port debugging, and the HY2.0-4P output on the bottom can be used to expand other peripherals. The on-board LED status indicator and reset button facilitate program development and debugging. In terms of application, M5Stack provides a number of simple and efficient application development methods and interfaces for the TimerCAM series, making it easy for users to use and develop their applications. (including PC/Mobile photo shooting APP, cloud image HTTP interface for timer shooting, cloud AI recognition interface (not online yet), etc.)

>The low-power power management solution adopted by the Timer Camera series is different from the CORE and StickC devices. When in use, the PWR button is used as a power-on button(long press 2s). If you need to shut down the device, you need to use the software API or press the Reset button on the PCB.

## Product Features

- Design based on esp32
- WiFi image transmission
- Timed sleep wake up
- Status indicator
- Ultra low power design
- Built-in 270mAh battery
- Programming platform：ESP-IDF/Arduino/UIFlow

## Includes

- 1x Timer Camera F
- 1x LEGO Adapter
- 1x Wall-1515
- 1x Type-C USB(20cm)

## Applications

- Take pictures regularly
- Remote video monitoring

## FISH EYE LENS Comparison Normal LENS

<img src="assets/img/product_pics/unit/timercamera_f/timercam_comparison.webp">

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
      <td>Battery</td>
      <td>270mAh</td>
   </tr>
   <tr>
      <td>Image Sensor</td>
      <td>OV3660</td>
   </tr>
   <tr>
      <td>Maximum resolution</td>
      <td>300w pixels</td>
   </tr>
   <tr>
      <td>Output format</td>
      <td>8-/10-Bit RAW, RGB and YCbCr output, compression.</td>
   </tr>
   <tr>
      <td>Maximum image transmission rate</td>
      <td>
         2040x1536: 15fps /
         1080p: 20fps /
         720p: 45fps	 /
         XGA(1024x768) : 45fps /
         VGA(640x480) : 60fps /
         QVGA(320x240) : 120fps
      </td>
   </tr>
   <tr>
      <td>FOV</td>
      <td>120°</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>44g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*22.6mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/TIMECAM/EasyLoader_TimerCamera_AP.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/TIMECAM/EasyLoader_TimerCamera_AP.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/timercam_f_video.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Connect the TimerCAM hotspot(AP)，input password 12345678 and open 192.168.4.1 in the browser to view the image. If you need to use the timing photo function, please refer to the quick start guide</p>
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

### Arduino

- **[TimerCamera X-Arduino](https://github.com/m5stack/TimerCam-arduino)**

### Source code

- **[TimerCamera X](https://github.com/m5stack/TimerCam-idf)**

 ### Firmware

**You can download and burn firmware with [M5Burner](https://m5stack.com/pages/download)**

### Tutorial

**[Use Camera-Tool](en/quick_start/timer_cam/quick_start_cameratool) to take pictures**

**[Use HTTP Cloud Image Interface Service-UIFlow](en/quick_start/timer_cam/quick_start_uiflow) to get pictures**

**[Use Arduino IDE](en/quick_start/timer_cam/quick_start_arduino) development**

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/products/esp32-psram-timer-camera-fisheye-ov3660';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/timer_cam/quick_start_list';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>
