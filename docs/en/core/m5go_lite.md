# M5GO Lite {docsify-ignore-all}

<img src="assets/img/product_pics/core/m5go/m5go_lite_01.png" alt="gray_02" width="250" height="250"><img src="assets/img/product_pics/core/m5go/m5go_lite_04.png" alt="gray_04" width="250" height="250">


<!-- <img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="250" height="250"> <img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="250" height="250"> -->

<!-- <img src="assets/img/product_pics/core/m5go/m5go_03.png" alt="gray_03" width="250" height="250"> -->

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/m5go-lite-iot-development-board-kit)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## DESCRIPTION

**M5GO Lite** is a light pack of M5GO kit, instead of having 6 M5units, M5Go-Lite provides 1 ENV + accessories and the same M5 controller as M5GO. M5Go-Lite is also  designed for STEM education.  M5GO controller itself is already a full-feathered, highly integrated, upgraded development board provides plenty of hardware resources, such as LCD screen, speaker, Led bar, 16M flash, microphone and more. Light but not least.

All M5stack development board can be programmed through Arduino IDE, WebIDE UIFlow, Micropython, and Blockly, simplifying the development process for those requiring a joint hardware and software solution. Not only does M5stack have far-reaching IoT applications in industry, agriculture, and home, but it also empowers students to learn to code in STEM classrooms.

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 16 MByte flash
- BMM150 + MPU6886
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (16G Maximum size)
- Battery Socket & 150 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- Product Size：54.2mm x 54.2mm x 17.9mm
- Product weight：159g


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


<a href="#en/related_documents/M5Burner"><button type="button" class="btn btn-primary">View firmware burning tutorial</button></a>

## PinMap

### Peripherals Pin Map

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
#### M5GO Base Port

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
 <tr><td>LED Bar</td><td>SIG Pin</td><td> </td><td> </td></tr>
 <tr><td>MIC</td><td> </td><td>MIC Pin</td><td> </td></tr>
<tr><td>Speaker</td><td> </td><td> </td><td>Speaker Pin</td></tr>
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
      <td>600mAh @ 3.7V</td>
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



**<mark>Notice1：M5PORT EXPLAIN</mark>**
*You can identify the port name and function by its color, red is PortA(21/22) mainly used for I2C, black is PortB(26/36) which can be used for AD/DA, Singel-bus communication, Blue is PortC(16/17) can be used for Uart. Correspondingly, most of the M5 Units have the Port with matched color for specify which port it should go in on the M5Core. 
Those port identification is a convenience for UIFlow (Blockly)  Users. For advanced using ,you can do you own customization, since most of the PIN on ESP32 are remapping-able.
Unfortunatly, PortA(red) can not be used as analog read in. It refers to GPIO 21 & 22 from ESP32, which doesn't have AD channel alternatives: <br>
<img src="assets/img/product_pics/core/basic/basic_notice_01.jpg">
To use AD read function : 
1, Use Dupont cable refers to the pins on the side which can be used as an AD channel.
2, Get a M5GO bottom, which comes with a PortB.
3, Get a PbHUB and connect it with PortA, then you can have 6 PortBs.
For more information about Pin assignment and Pin Remapping, Please refer to EPS32 Datasheet*

## Package Includes:

-  1x white M5GO Controller
-  1x M5GO Base
-  1x ENV Unit
-  1x GROVE Cable
-  Type-C USB Cable
-  User Manual

<img src="assets/img/product_pics/core/m5go/m5go_lite_02.png" alt="gray_02" width="270" height="270"><img src="assets/img/product_pics/core/m5go/m5go_lite_03.png" alt="gray_04" width="270" height="270">

## Related Link

-  **Datasheet**

    - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
    - [MPU6886](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MPU-6886-000193%2Bv1.1_GHIC.PDF.pdf)
    - [BMM150](http://pdf1.alldatasheet.com/datasheet-pdf/view/608913/ETC2/BMM150.html)

- **Register Manual**

    - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

## Example

### 1. Arduino IDE

M5GO + ENV to get weather data:

<img src="assets/img/product_pics/core/m5go/m5go_10.png" width=80% height=80%>

But before compiling this program, please install `Adafruit BMP280 Library` and copy `Adafruit_Sensor.h` to `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library` first.

*For more infomation, Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/m5go/m5go_lite/Arduino/ENV)*

```arduino
/*
    Install Adafruit BMP280 Library first.
*/
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include "Adafruit_Sensor.h"
#include <Adafruit_BMP280.h>

// new two objects
DHT12 dht12;
Adafruit_BMP280 bme;

// initialization
M5.begin();
Wire.begin();
bme.begin();

// read data
float tmp = dht12.readTemperature();
float hum = dht12.readHumidity();
float pressure = bme.readPressure();
```

**More examples are [here](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**

### 2. UIFlow

*For more details, click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png">

## Related Video

- **m5stack instroduce**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Introducing%20M5Stack.mp4" type="video/mp4">
</video>