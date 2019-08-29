# FIRE {docsify-ignore-all}

<img src="assets/img/product_pics/core/fire/product_pic_fire.png" alt="fire_01" width="350" height="350"> <img src="assets/img/product_pics/core/fire/m5_fire_01.png" width="350" height="350">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/fire-iot-development-kit)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**M5Stack FIRE Kit** is a upgrade from the Gray kits,except the 9-Axis IMU sensor. It provides more hardware resources : 16M Flash + 4M PSRAM , enhanced Base (M5GO Base and M5GO CHG Base), larger battery, etc.

With a IMU posture sensor, you can include posture detection in your work : accelerated speed, angulation, and trajectory deection. You can make relative products like sports data collector, 3D remote gesture controller and more.

**FIRE** is M5 Core device. Its modular, stackable, scalable, and portable device is powered with an ESP-32 core,  which makes it open source, low cost, full-function, and easy for developers to handle new product development on all stages include circuit design, PCB design, software, mold design and production.

<img src="assets/img/product_pics/base/m5go_charger_10.png" height="300px">&nbsp;&nbsp;<img src="assets/img/product_pics/base/m5go_charger_09.png" height="300px">

M5Stack Fire comes with three separable parts. The top part ,just like Basic and Gray Kit, has all kinds of processors, chips ,scokets, 2.4G antenna etc, such as ESP32, power management IC , a LCD screen and some other interface components.  The middle part is called [M5GO base](https://docs.m5stack.com/#/en/base/m5go_bottom) provides a lithium battery, [M-BUS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/M-BUS.png) socket , LED bar and two more GROVE Port. The bottom part is a charge table,can be connect to the M5GO base via POGO pins.
<br><br>
<img src="assets/img/product_pics/core/fire/m5_fire_06.png">

*Ever wanted to explore the fastest way of IoT prototyping, M5Stack development board is the perfect solution. Not like others, M5Stack development board is highly productlized, covered with industrial grade case, and **ESP32-based** development board. **ESP32** is a hybid Wi-Fi & Bluetooth chip contains a dual-core and 4MB of SPI Flash . Together with 30+ M5Stack [stackable modules](https://docs.m5stack.com/#/en/?id=module), 40+ [extendable units](https://docs.m5stack.com/#/en/?id=unit), and different levels of program language, you can create and verify your IoT product in a very short time.
Supported development platforms and program languages: Arduino, Blockly language with [UIFlow](http://flow.m5stack.com), [Micropython](http://www.micropython.org). Regardless of what level program skill you have, M5Stack would guide you in every step of the way to realize your idea as well as to the final productilization.*

*If you ever played with ESP8266, you would realize that ESP32 is a perfect upgrade from ESP8266. In comparison, ESP32 is full-feathered with more GPIO, plenty of analog inputs and two analog outputs, multiple extra perpherials( like a spare UART ). Official development platform ESP-IDF have planted with FreeRTOS. With dual-core and real time OS you can get more organized code and much high speed processor.*

**Notice1:**

The newly-produced M5Core replaces the screen with better display performance and higher viewing angle, so it has some compatibility problems with the old Arduino library. When using the old library for screen driving, it will produce reverse color display. You can open the Arduino. The library management option will upgrade your M5Stack library to the latest version (after 0.2.8) to solve this problem.

<img src="assets\img\product_pics\core\basic\lib_01.jpg" width="40%">
<br><br><br>
<img src="assets\img\product_pics\core\basic\lib_02.jpg" width="40%">

**Notice2:**

There are two versions of IMU sensors (MPU6886 and SH200Q) currently available on the Fire host, which are basically identical in function.To identify the IMU sensor, you can use python code to scan the I2C address MPU6886(0x68)/SH200Q（0x6c)

**Notice3:**

The GPIO 16 / 17 in Fire is connected to the PSRAM by default, so when you connect or stack other function modules, you need to avoid conflicts with these two pins to prevent the device from working properly and causing instability.

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 16 MB Flash
- 4 MB PSRAM
- BMM150 + SH200Q/MPU6886
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (16G Maximum size)
- Battery Socket & 500 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- Product Size：54.2mm x 54.2mm x 30.5mm
- Product weight：62.3g


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


### M5GO Bottom

[Click to view details parameters](en/base/m5go_bottom)

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

**IP5306 charging/discharging，Voltage parameter**

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>charging</td>
      <td><td>
      <td>discharging</td>
   </tr>
   <tr>
      <td>0.00 ~ 3.40V -> 0%</td>
      <td><td>
      <td>4.20 ~ 4.07V -> 100%</td>
   </tr>
   <tr>
      <td>3.40 ~ 3.61V -> 25%</td>
      <td><td>
      <td>4.07 ~ 3.81V -> 75%</td>
   </tr>
   <tr>
      <td>3.61 ~ 3.88V -> 50%</td>
      <td><td>
      <td>3.81 ~ 3.55V -> 50%</td>
   </tr>
   <tr>
      <td>3.88 ~ 4.12V -> 75%</td>
      <td><td>
      <td>3.55 ~ 3.33V -> 25%</td>
   </tr>
   <tr>
      <td>4.12 ~   /   -> 100%</td>
      <td><td>
      <td>3.33 ~ 0.00V -> 0%</td>
   </tr>
</table>

**6-Axis MotionTracking Sensor MPU6886**

*MPU6886 I2C address 0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU6886</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**3-Axis Geomagnetic Sensor BMM150**

*BMM150 I2C address 0x10*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>BMM150</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

### M5GO Base Port

**GROVE Port B**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE B</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>

**GROVE Port C**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LED Bar & Micphone & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td><td>GPIO25</td></tr>
 <tr><td>Hardwares</td><td>SIG Pin</td><td>MIC Pin</td><td> Speaker Pin</td></tr>
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
      <td>16MB</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>5V @ 600mA</td>
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
      <td>MEMS</td>
      <td>BMM150 + SH200Q/MPU6886</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>500mAh @ 3.7V</td>
   </tr>
   <tr>
      <td>Operating Temperature </td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>54 x 54 x 21 mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>



**<mark>Notice1：M5PORT EXPLAIN </mark>**
You can identify the port name and function by its color, red is PortA(21/22) mainly used for I2C, black is PortB(26/36) which can be used for DA/AD, Singel-bus communication, Blue is PortC(16/17) can be used for Uart. Correspondingly, most of the M5 Units have the Port with matched color for specify which port it should go in on the M5Core. 
Those port identification is a convenience for UIFlow (Blockly)  Users. For advanced using ,you can do you own customization, since most of the PIN on ESP32 are remapping-able.
Unfortunatly, PortA(red) can not be used as analog read in. It refers to GPIO 21 & 22 from ESP32, which doesn't have AD channel alternatives:

- ADC1(8 channels atteched to GPIOs 32-39)
- ADC2(10 channels atteched to GPIOs 0，2，4，12-15，25-27)

To use AD read function : 
1, Use Dupont cable refers to the pins on the side which can be used as an AD channel.
2, Get a M5GO bottom, which comes with a PortB.
3, Get a PbHUB and connect it with PortA, then you can have 6 PortBs.
For more information about Pin assignment and Pin Remapping, Please refer to EPS32 Datasheet

## Include

-  1x M5Stack Fire Controller
-  1x M5GO Base( LEGO compatible)
-  1x M5GO CHG Base
-  10x Femal-male Dupont
-  Type-C USB cable
-  User Manual

## Related Link

-  **Datasheet** 

    - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
    - [MPU6886](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MPU-6886-000193%2Bv1.1_GHIC.PDF.pdf)
    - [BMM150](http://pdf1.alldatasheet.com/datasheet-pdf/view/608913/ETC2/BMM150.html)
    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)

- **Register Manual** 

    - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)


## Related Video

**m5stack instroduce**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Introducing%20M5Stack.mp4" type="video/mp4">
</video>

**m5stack Case - Piu UI framework with Moddable SDK**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/run-time-display-rotation.mp4" type="video/mp4">
</video>