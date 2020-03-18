# GRAY {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K002</div>

<div class="product_pic"><img src="assets/img/product_pics/core/gray/gray_01.webp"><img src="assets/img/product_pics/core/gray/gray_02.png"></div>

<!-- <img src="assets/img/product_pics/core/gray/gray_03.png" alt="gray_03" width="250" height="250"> -->

## Description

**M5Stack GRAY Kit** is from one of the M5Stack development kit series, it’s a upgrade from the Basic kits. In comparison, Gray kit provide a extra IMU sensor,  BMM150 + MPU6886.

With a IMU posture sensor, you can include posture detection in your work : accelerated speed, angulation, and trajectory detection. You can make relative products like sports data collector, 3D remote gesture controller and more.

**GRAY** is M5 Core device. Its modular, stackable, scalable, and portable device is powered with an ESP-32 core,  which makes it open source, low cost, full-function, and easy for developers to handle new product development on all stages include circuit design, PCB design, software, mold design and production.

Ever wanted to explore the fastest way of IoT prototyping, M5Stack development board is the perfect solution. Not like others, M5Stack development board is highly productlized, covered with industrial grade case, and **ESP32-based** development board. **ESP32** is a hybid Wi-Fi & Bluetooth chip contains a dual-core and 4MB of SPI Flash . Together with 30+ M5Stack [stackable modules](https://docs.m5stack.com/#/en/?id=module), 40+ [extendable units](https://docs.m5stack.com/#/en/?id=unit), and different levels of program language, you can create and verify your IoT product in a very short time.
Supported development platforms and program languages: Arduino, Blockly language with [UIFlow](http://flow.m5stack.com), [Micropython](http://www.micropython.org). Regardless of what level program skill you have, M5Stack would guide you in every step of the way to realize your idea as well as to the final productilization.

If you ever played with ESP8266, you would realize that ESP32 is a perfect upgrade from ESP8266. In comparison, ESP32 is full-feathered with more GPIO, plenty of analog inputs and two analog outputs, multiple extra perpherials( like a spare UART ). Official development platform ESP-IDF have planted with FreeRTOS. With dual-core and real time OS you can get more organized code and much high speed processor.

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 16 MB Flash
- BMM150 + MPU6886
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (Up to 16GB support)
- Battery Socket & 110 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- Product Size：54.2mm x 54.2mm x 17.9mm
- Product weight：49.2g

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Core_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/GRAY.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>This case will perform hardware running tests for speakers, wifi, buttons, accelerometer, SD card, screen, etc.</p>
        </div>
    </div>
</div>

## Peripherals Pin Map

**LCD & TF card**

LCD ：320x240
TF card Maximum size 16GB

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
  <tr><td>ILI9342C</td><td>MOSI/MISO</td><td>/</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE A & IP5306**

Power Management IC (IP5306) is customized I2C edition，its I2C address is 0x75. Click[here](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) to check IP5306 datasheet

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button Pin</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE Port A & IP5306**

We've use the customized I2C version of IP5306, on power management.

Its I2C address is 0x75. Click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) to check its datasheet

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

MPU6886 I2C address 0x68

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU6886</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**3-Axis Geomagnetic Sensor BMM150**

BMM150 I2C address 0x10

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>BMM150</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
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
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Port</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>IPS Screen</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342C</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>110mAh @ 3.7V</td>
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

**<mark>Notice1：M5PORT EXPLAIN</mark>**
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
-  1x Gray
-  10x Femal-male Dupont
-  1x Type-C USB(20cm)
-  1x User Manual
-  1x Sticker

## Schematic

-  **Schematic** - [BASIC](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)

## Links

-  **Datasheet** 

    - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [BMM150](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)

- **Register Manual** 

    - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

- **[schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5-Core-Schematic(20171206).pdf)**

## Version Change

<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Release Date</th>
            <th>Product Change</th>
        </tr>
        </thead>    
        <tbody>
        <tr>
            <td>2017.9</td>
            <td>Initial public release</td>
        </tr>
        <tr>
            <td>2017.12</td>
            <td>MPU6050+MAG3110 changed to MPU9250</td>
        </tr>
        <tr>
            <td>2019.6</td>
            <td>MPU9250 changed to MPU6886+BMM150</td>
        </tr>
        <tr>
            <td>2019.7</td>
            <td>TN screen changed to IPS screen</td>
        </tr>
        <tbody>
    </table>
</div>

## Video

**m5stack instroduce**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Introducing%20M5Stack.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/grey-development-core';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>