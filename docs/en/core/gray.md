# GRAY {docsify-ignore-all}

<img src="assets/img/product_pics/core/gray/gray_01.png" alt="gray_02" width="350" height="350"><img src="assets/img/product_pics/core/gray/gray_02.png" alt="gray_02" width="350" height="350">

<!-- <img src="assets/img/product_pics/core/gray/gray_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-In-Stock-ESP32-Mpu9250-9Axies-Motion-Sensor-Core-Development-Kit-Extensible-IoT-Development-Board/3226069_32836393710.html?spm=2114.12010615.8148356.12.25e96be7zRik8r.html)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**M5Stack GRAY Kit** is from one of the M5Stack development kit series, it’s a upgrade from the Basic kits. In comparison, Gray kit provide a extra IMU sensor, MPU9250.

With a IMU posture sensor, you can include posture detection in your work : accelerated speed, angulation, and trajectory detection. You can make relative products like sports data collector, 3D remote gesture controller and more.

*Ever wanted to explore the fastest way of IoT prototyping, M5Stack development board is the perfect solution. Not like others, M5Stack development board is highly productlized, covered with industrial grade case, and **ESP32-based** development board. **ESP32** is a hybid Wi-Fi & Bluetooth chip contains a dual-core and 4MB of SPI Flash . Together with 30+ M5Stack [stackable modules](https://docs.m5stack.com/#/en/?id=module), 40+ [extendable units](https://docs.m5stack.com/#/en/?id=unit), and different levels of program language, you can create and verify your IoT product in a very short time.
Supported development platforms and program languages: Arduino, Blockly language with [UIFlow](http://flow.m5stack.com), [Micropython](http://www.micropython.org). Regardless of what level program skill you have, M5Stack would guide you in every step of the way to realize your idea as well as to the final productilization.*

*If you ever played with ESP8266, you would realize that ESP32 is a perfect upgrade from ESP8266. In comparison, ESP32 is full-feathered with more GPIO, plenty of analog inputs and two analog outputs, multiple extra perpherials( like a spare UART ). Official development platform ESP-IDF have planted with FreeRTOS. With dual-core and real time OS you can get more organized code and much high speed processor.*

<img src="assets/img/product_pics/core/gray/gray_11.png">

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- 16 MByte PSRAM
- MPU9250
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (16G Maximum size)
- Battery Socket & 150 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

<img src="assets/img/product_pics/core/gray/gray_11.png">

### ESP32 Features

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

## Peripherals Pin Map

**LCD & TF card**

*LCD ：320x240*
*TF card Maximum size 16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>MOSI</td><td>/</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE A & IP5306**

*Power Management IC (IP5306) is customized I2C edition，its I2C address is 0x75. Click[here](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) to check IP5306 datasheet*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>MOSI</td><td>/</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button Pin</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE Port A & IP5306**

*Power Management IC (IP5306) is customized I2C edition，its I2C address is 0x75. Click[here](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)to check IP5306 datasheet*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IP5306</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**9-Axis Posture Sensor MPU9250**

*I2C address 0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## PARAMETER

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
      <td>16MB (old: 4MB)</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>5V @ 150mA</td>
   </tr>
   <tr>
      <td>Port</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD Screen</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9341</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>150mAh @ 3.7V</td>
   </tr>
   <tr>
      <td>Operating Temperature </td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>54 x 54 x 12.5 mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

**<mark>Notice：</mark>**

*Comparision Between Different Development Kits*

- *For details click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *Download chart click[here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">

## Include

-  1x M5Stack Gray Controller
-  1x Basic Base
-  10x Femal-male Dupont
-  Type-C USB cable
-  User Manual

<img src="assets/img/product_pics/core/gray/gray_04.png" alt="gray_04" width="80%" height="80%">

## Related Link

-  **datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/download-pdf/mpu-9250-datasheet/)

- **datasheet** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

- **[schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**

## Related Video

**m5stack instroduce**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>

**M5Core Cases**

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_compass.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Compass.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_imu.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/M5stack%20Gray.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_avatar.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Avatar%20Custom%20Face.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_voice_recognition.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Voice-Recognize.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_electric_monitor.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5stack%20Smart%20Electric%20Monitor.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_home.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Esplora-and-M5Stack.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_leap_motion.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Motion%20Detector.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_microphone_alexa.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5stack%20Microphone%20.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_robot.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Robot.mp4)
