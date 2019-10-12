# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.jpg" width="30%" height="30%">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5stickc/m5stickc_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/stick-c)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**M5StickC** is a mini M5Stack, powered by ESP32. It is a portable, easy-to-use, open source, IoT development board.

*What it can do?*
This tiny block is able to realize your idea, enlighten your creativity, and help with your IoT prototying in a very short time. It will takes away a lot of the pains form the development process.

M5stickC is one of the core devices in M5Stack product series which is built in a continues growing hardware & software ecosystem. It has a lot of compatible modules & units, as well as the open source code & engineering community that will help you maximum your benefit in every step of the developing process.

**Power switch operation：**

* Power on ：Long press power button for 2 seconds

* Power off ：Short press power button for 6 seconds

**Notice:**

* Baudrate supported by M5StickC: 1200 ~115200, 250K, 500K, 750K, 1500K

* Only Orange type is available for now
  
<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_02.png" width=50% height=50%>



**Notice:**

M5StickC only supports WIN10 & Linux & MAC free drive, the rest of the operating system requires users to install the driver.

Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device and open the Computer Device Manager port option. 3. Right click on the unrecognized device and perform a manual update.

<a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 4 MByte Flash
- 6-Axis IMU: MPU6886/SH200Q
- Red LED
- IR transmitter
- Microphone
- 2 Buttons, LCD(0.96 inch), 1 Reset
- 2.4G Antenna: Proant 440
- 80 mAh Lipo Battery
- Extendable Socket
- Grove Port
- Wearable & Wall mounted
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- Product Size：48.2mm x 25.5mm x 13.7mm
- Product weight：15.1g

**Notice:**

There are two versions of IMU sensors (MPU6886 and SH200Q) currently available on the M5StickC host, which are basically identical in function.


<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_03.jpg" width=50% height=50%>


## ESP32 Features

- 240 MHz dual core Tensilica LX6 microcontroller with 600 DMIPS
- Integrated 520 KB SRAM
- Integrated 802.11b/g/n HT40 Wi-Fi transceiver, baseband, stack and LWIP
- Integrated dual mode Bluetooth (classic and BLE)
- Hall sensor
- 32 kHz crystal oscillator
- PWM/timer input/output available on every GPIO pin
- SD-card interface support

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickC/EasyLoader_M5StickC_FactoryTest.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## PinMap

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" width="300px">

Power structure block diagram

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.jpg" width="300px">

**RED LED & IR Transmitter & BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 </td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>RED LED</td><td>LED Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR Transmitter</td><td> </td><td>Transmitter Pin</td><td> </td><td> </td></tr>
<tr><td>BUTTON A</td><td> </td><td> </td><td>Button Pin</td><td> </td></tr>
<tr><td>BUTTON B</td><td> </td><td> </td><td> </td><td>Button Pin</td></tr>
</table>

**TFT LCD**

*Driver IC：ST7735S*

*Resolution：80 * 160*

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
 <tr><td>6-Axis posture sensor</td><td>SCL</td><td>SDA</td>
 <tr><td>power management IC</td><td>SCL</td><td>SDA</td>
</table>

**AXP192**

<table>
 <tr style="font-weight:bold;text-align:center"><td>Microphone</td><td>RTC</td><td>TFT backlight</td><td>TFT IC</td><td>ESP32/3.3V MPU6886/SH200Q</td><td>5V GROVE</td>
 <tr style="font-weight:bold;text-align:center"><td>LDOio0</td><td>LDO1</td><td>LDO2</td><td>LDO3</td><td>DC-DC1</td><td>IPSOUT</td>
</table>

## Include

-  1x M5StickC
-  1x USB Type-C cable

## Related Link

-  **datasheet**

    - [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf)
    - [ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)
    - [BM8563](http://www.belling.com.cn/media/file_object/bel_product/BM8563/datasheet/BM8563_V1.1_cn.pdf)
    - [MPU6886](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MPU-6886-000193%2Bv1.1_GHIC.PDF.pdf)
    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)
    - [AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet_v1.1_en_draft_2211.pdf)
    - [SPM1423](https://pdf1.alldatasheet.com/datasheet-pdf/view/546596/KNOWLES/SPM1423HM4H-B.html)

## Example

* **Arduino**

    - [M5StickC facory test code](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

    - [M5StickC Vending Machine](https://github.com/vcraftjp/M5StickC_Slot)

    <video width="500" height="315" controls>
        <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StickC%20Slot%20machine%20demo.mp4" type="video/mp4">
    </video>

## Related Video

- **M5StickC Case - counter**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" type="video/mp4">
</video>

- **M5StickC Case - Safe system**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Simple_Watch_Device.mp4" type="video/mp4">
</video>