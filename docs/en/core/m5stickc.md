# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5stickc/m5stickc_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/item/New-Arrival-2019-M5StickC-1-of-Limited-Trial-Edition-ESP32-PICO-Mini-IoT-Development-Board-Finger/32985247364.html)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**M5Stick-C** is a mini M5Stack, powered by ESP32. It is a portable, easy-to-use, open source, IoT development board.

*What it can do?*
This tiny block is able to realize your idea, enlighten your creativity, and help with your IoT prototying in a very short time. It will takes away a lot of the pains form the development process.

M5stickC is one of the core devices in M5Stack product series which is built in a continues growing hardware & software ecosystem. It has a lot of compatible modules & units, as well as the open source code & engineering community that will help you maximum your benefit in every step of the developing process.

**Power switch operation：**

* Power on ：Long press power button for 2 seconds

* Power on ：Short press power button for 6 seconds

**Notice:**

* Baudrate supported by M5StickC: 1200 ~115200, 250K, 500K, 750K, 1500K

* Only Orange type is available for now
  
* If you find out your M5StickC couldn't power on without a USB in, it might because the battery enter the battery protection mode, caused by low-volatge, over-charged, ver-heat ... To exit the battery protection mode, please keep charging the battery for around 40 mins. Our team is working on the solution.

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_02.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_08.png" alt="gray_02" width=50% height=50%>

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- 4 MByte Flash
- 6-Axis IMU SH200Q
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

## ESP32 Features

- 240 MHz dual core Tensilica LX6 microcontroller with 600 DMIPS
- Integrated 520 KB SRAM
- Integrated 802.11b/g/n HT40 Wi-Fi transceiver, baseband, stack and LWIP
- Integrated dual mode Bluetooth (classic and BLE)
- Hall sensor
- 10x capactive touch interface
- 32 kHz crystal oscillator
- PWM/timer input/output available on every GPIO pin
- SDIO master/salve 50MHz
- SD-card interface support

## PinMap

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_06.png" alt="gray_02" width=30% height=30%>

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

**6-Axis posture sensor (SH200Q) & power management IC (AXP192)**

<table>
 <tr><td>ESP32 </td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>6-Axis posture sensor</td><td>SCL</td><td>SDA</td>
 <tr><td>power management IC</td><td>SCL</td><td>SDA</td>
</table>

**M5StickC extendable IO at top**

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" alt="gray_02" width=100% height=100%>

## Include

-  1x M5StickC
-  1x USB Type-C cable

## Related Link

-  **datasheet**

    - [ESP32-PICO](https://github.com/m5stack/M5-Schematic/blob/master/Core/esp32-pico-d4_datasheet_cn.pdf)
    - [ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)
    - [BM8563](http://www.belling.com.cn/media/file_object/bel_product/BM8563/datasheet/BM8563_V1.1_cn.pdf)
    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)
    - [AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet%20v1.13_cn.pdf)
    - [SPM1423](https://pdf1.alldatasheet.com/datasheet-pdf/view/546596/KNOWLES/SPM1423H；M4H-B.html)

## Example

* **Arduino**

    - [M5StickC facory test code](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

    - [M5StickC Vending Machine](https://github.com/vcraftjp/M5StickC_Slot)

    <video width="500" height="315" controls>
        <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StickC%20Slot%20machine%20demo.mp4" type="video/mp4">
    </video>

## Related Video

- **M5StickC Case - counter**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" type="video/mp4">
</video>

- **M5StickC Case - Safe system**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Simple_Watch_Device.mp4" type="video/mp4">
</video>