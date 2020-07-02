# M5StickC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K016-C</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_plus_01.webp"></div>

## Description

**M5StickC Plus** is powered by ESP32-PICO-D4 with Bluetooth 4.0 and WiFi.It's an upgrade big screen product of [M5StickC](#/en/core/m5stickc.md).The compact body is integrated with rich hardware resources, such as infrared, RTC, microphone, led, IMU, buttons, PMU,etc. Compared with StickC, a buzzer is added and the big screen is upgraded to a 1.14-inch, 135 * 240 resolution LCD Screen.Compared with the previous display area, the display area is increased by 18.7%, and the battery capacity is 120mAh.It also supports HAT and Unit series products.

**Power switch operation：**

* Power on ：Long press power button for 2 seconds

* Power off ：Short press power button for 6 seconds

**Notice:**

* Baud rate supported by M5StickC Plus: 1200 ~115200, 250K, 500K, 750K, 1500K


## Product Features

- ESP32-based
- Built-in 6-Axis IMU
- Red LED
- IR transmitter
- Microphone
- Buttons, LCD(1.14 inch)
- Built-in Lipo Battery
- Extendable Socket
- Built-in Buzzer
- Wearable & Wall mounted
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


## Include

-  1x M5StickC Plus
-  1x USB Type-C(20cm)


## Applications

- Internet of things terminal controller
- Wearable devices
- Stem education product
- DIY creation

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash Memory</td>
      <td>4MB</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Port</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD screen</td>
      <td>1.14 inch, 135*240 Colorful TFT LCD, ST7789v2</td>
   </tr>
   <tr>
      <td>Button</td>
      <td>Custom button x 2 </td>
   </tr>
   <tr>
      <td>LED</td>
      <td>RED LED</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>IR</td>
      <td>Infrared transmission </td>
   </tr>
   <tr>
      <td>MIC</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>RTC</td>
      <td>BM8563</td>
   </tr>
   <tr>
      <td>PMU</td>
      <td>AXP192</td>
   </tr>  
   <tr>
      <td>Battery</td>
      <td>120 mAh @ 3.7V</td>
   </tr> 
   <tr>
      <td>Antenna</td>
      <td>2.4G 3D Antenna</td>
   </tr>
   <tr>
      <td>PIN port</td>
      <td>G0, G26, G36</td>
   </tr>
   <tr>
      <td>Operating Temperature </td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>15.1g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>15.1g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48.2 x 25.5 x 13.7mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>48.2 x 25.5 x 13.7mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/M5StickV/M5StickT/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickC_Plus_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5StickC_Plus_FactoryTest.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5StickC_Plus.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Accelerometer, microphone, LED, IR, RTC, Bluetooth and other hardware tests. Press A or B to switch test items.</p>
        </div>
    </div>
</div>

## Schematic

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/m5stickc_plus.webp">

- [PDF Download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/20191118__StickC_A04_3110_Schematic_Rebuild_PinMap.pdf)

## PinMap

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_plus_04.webp" width="300px">

Power structure block diagram

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_plus_05.webp" width="300px">

**RED LED & IR Transmitter & BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 </td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td><td>GPIO2</td></tr>
 <tr><td>RED LED</td><td>LED Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR Transmitter</td><td> </td><td>Transmitter Pin</td><td> </td><td> </td></tr>
<tr><td>BUTTON A</td><td> </td><td> </td><td>Button Pin</td><td> </td></tr>
<tr><td>BUTTON B</td><td> </td><td> </td><td> </td><td>Button Pin</td></tr>
<tr><td>Buzzer</td><td> </td><td> </td><td> </td><td></td><td>Buzzer Pin</td></tr>
</table>

**TFT LCD**

Driver IC：ST7789v2

Resolution：135 * 240

<table>
 <tr><td>ESP32 </td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFT LCD</td><td>TFT_MOSI</td><td>TFT_CLK</td><td>TFT_DC</td><td>TFT_RST</td><td>TFT_CS</td></tr>
</table>

**GROVE PORT**

<table>
 <tr><td>ESP32 </td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE port</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**MIC (SPM1423)**

<table>
 <tr><td>ESP32 </td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>MICPHONE</td><td>SCL</td><td>SDA</td></tr>
</table>

**6-Axis posture sensor (SH200Q/MPU6886) & power management IC (AXP192)**

<table>
 <tr><td>ESP32 </td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>6-Axis IMU sensor</td><td>SCL</td><td>SDA</td>
 <tr><td>power management IC</td><td>SCL</td><td>SDA</td>
</table>

**AXP192**

<table>
 <tr style="font-weight:bold;text-align:center"><td>Microphone</td><td>RTC</td><td>TFT backlight</td><td>TFT IC</td><td>ESP32/3.3V MPU6886</td><td>5V GROVE</td>
 <tr style="font-weight:bold;text-align:center"><td>LDOio0</td><td>LDO1</td><td>LDO2</td><td>LDO3</td><td>DC-DC1</td><td>IPSOUT</td>
</table>

## Related Link

-  **datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_en.pdf)
    - [ST7789]()
    - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_en.pdf)
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)

## Example

**Arduino**

- [M5StickC Plus facory test code](https://github.com/m5stack/M5StickC_Plus/tree/master/examples/Basics/FactoryTest)

## Video

<video width="500" height="315" controls>
        <source src="" type="video/mp4">
    </video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stick-c-plus';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5stickc/m5stickc_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>