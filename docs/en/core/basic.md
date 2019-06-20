# BASIC {docsify-ignore-all}

<img src="assets/img/product_pics/core/basic/basic_02.png" alt="basic_02" width="350" height="350"> <img src="assets/img/product_pics/core/basic/basic_03.png" alt="basic_03" width="350" height="350">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)** &nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/m5stack-official-stock-offer-esp32-basic-core-development-kit-extensible-micro-control-wifi-ble-iot-prototype-board-for-arduino)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**M5Stack BASIC Kit**, like its namesake, is a starter kit among the M5Stack development kit series.  Its modular, stackable, scalable, and portable device is powered with an ESP-32 core,  which makes it open source, low cost, full-function, and easy for developers to handle new product development on all stages include circuit design, PCB design, software, mold design and production. This Basic kit provides a friendly price and full-featured resources which makes it a good starter kit for you to explore IoT.

*Ever wanted to explore the fastest way of IoT prototyping, M5Stack development board is the perfect solution. Not like others, M5Stack development board is highly productlized, covered with industrial grade case, and **ESP32-based** development board. **ESP32** is a hybid Wi-Fi & Bluetooth chip contains a dual-core and 4MB of SPI Flash . Together with 30+ M5Stack [stackable modules](https://docs.m5stack.com/#/en/?id=module) , 40+ [extendable units](https://docs.m5stack.com/#/en/?id=unit), and different levels of program language, you can create and verify your IoT product in a very short time.
Supported development platforms and program languages: Arduino, Blockly language with [UIFlow](http://flow.m5stack.com), [Micropython](http://www.micropython.org). Regardless of what level program skill you have, M5Stack would guide you in every step of the way to realize your idea as well as to the final productilization.*

*If you ever played with ESP8266, you would realize that ESP32 is a perfect upgrade from ESP8266. In comparison, ESP32 is full-feathered with more GPIO, plenty of analog inputs and two analog outputs, multiple extra perpherials( like a spare UART ). Official development platform ESP-IDF have planted with FreeRTOS. With dual-core and real time OS you can get more organized code and much high speed processor.*

M5Stack Basic is consist with two separable parts. the upside part has all kinds of processor, chips and some other slot components.  The [bottom](https://docs.m5stack.com/#/en/base/core_bottom) part has a lithium battery, [M-BUS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/M-BUS.png) socket and extendable pins on both sides.

<img src="assets/img/product_pics/core/basic/basic_11.png">

**Notice:
1)Basic kit have no IMU sensor inside
2)GPIO0, GPIO12, GPIO13, GPIO15, GPIO34, pins that related to I2S are not extended out
3)GPIO34-39 are input-only**

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- 4 MByte flash
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (16G Maximum size)
- Battery Socket & 150 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Program Platform: [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

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


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/BASIC/EasyLoader_M5Core_BASIC_FactoryTest.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)


## Peripherals Pin Map

**LCD & TF Card**

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
 <tr><td>Button Pin</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE Port A & IP5306**

*We've use the customized I2C version of IP5306, on power management.*

*Its I2C address is 0x75. Click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) to check its datasheet*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IP5306</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Parameter

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

**<mark>Notice1：</mark>**

*Comparision Between Different Development Kits of M5*

- *For details click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *Download chart click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_en.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_en.png">

**<mark>Notice2：M5PORT EXPLAIN</mark>**
*You can identify the port name and function by its color, red is PortA(21/22) mainly used for I2C, black is PortB(26/36) which can be used for AD/DA, Singel-bus communication, Blue is PortC(16/17) can be used for Uart. Correspondingly, most of the M5 Units have the Port with matched color for specify which port it should go in on the M5Core. 
Those port identification is a convenience for UIFlow (Blockly)  Users. For advanced using ,you can do you own customization, since most of the PIN on ESP32 are remapping-able.
Unfortunatly, PortA(red) can not be used as analog read in. It refers to GPIO 21 & 22 from ESP32, which doesn't have AD channel alternatives: <br>
<img src="assets/img/product_pics/core/basic/basic_notice_01.jpg">
To use AD read function : 
1, Use Dupont cable refers to the pins on the side which can be used as an AD channel.
2, Get a M5GO bottom, which comes with a PortB.
3, Get a PbHUB and connect it with PortA, then you can have 6 PortBs.
For more information about Pin assignment and Pin Remapping, Please refer to EPS32 Datasheet*


### Kit includes

-  1x M5Stack BASIC Controller
-  1x Basic Base
-  8x Dupont
-  Type-C USB cable
-  User Manual

<img src="assets/img/product_pics/core/basic/basic_04.png" alt="basic_04" width="80%" height="80%">

<!-- <img src="assets/img/product_pics/core/basic/basic_04.png" alt="basic_04" width="80%" height="80%">

<img src="assets/img/product_pics/core/basic/basic_06.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_07.png" width="250" height="250">

<img src="assets/img/product_pics/core/basic/basic_08.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_09.png" width="250" height="250"> -->

<!-- <img src="assets/img/product_pics/core/basic/basic_10.png" width="50%" height="50%"> -->

## Learn

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)


## Related Video

**M5Stack Instroduce**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Introducing%20M5Stack.mp4" type="video/mp4">
</video>

**M5Core Cases**

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_compass.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Compass.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_imu.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/M5stack%20Gray.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_avatar.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Avatar%20Custom%20Face.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_voice_recognition.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Voice-Recognize.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_electric_monitor.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5stack%20Smart%20Electric%20Monitor.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_home.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Esplora-and-M5Stack.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_leap_motion.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Motion%20Detector.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_microphone_alexa.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5stack%20Microphone%20.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_robot.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Robot.mp4)
