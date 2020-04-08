# BASIC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K001</div>

<div class="product_pic"><img src="assets/img/product_pics/core/basic/basic_02.webp"><img src="assets/img/product_pics/core/basic/basic_03.webp"></div>

## Description

**M5Stack BASIC Kit** like its namesake, is a starter kit among the M5Stack development kit series.  Its modular, stackable, scalable, and portable device is powered with an ESP-32 core,  which makes it open source, low cost, full-function, and easy for developers to handle new product development on all stages include circuit design, PCB design, software, mold design and production. This Basic kit provides a friendly price and full-featured resources which makes it a good starter kit for you to explore IoT.

Ever wanted to explore the fastest way of IoT prototyping, M5Stack development board is the perfect solution. Not like others, M5Stack development board is highly productlized, covered with industrial grade case, and **ESP32-based** development board. **ESP32** is a hybid Wi-Fi & Bluetooth chip contains a dual-core and 4MB of SPI Flash . Together with 30+ M5Stack stackable modules , 40+ extendable units, and different levels of program language, you can create and verify your IoT product in a very short time.
Supported development platforms and program languages: Arduino, Blockly language with [UIFlow](http://flow.m5stack.com), Micropython Regardless of what level program skill you have, M5Stack would guide you in every step of the way to realize your idea as well as to the final productilization.

If you ever played with ESP8266, you would realize that ESP32 is a perfect upgrade from ESP8266. In comparison, ESP32 is full-feathered with more GPIO, plenty of analog inputs and two analog outputs, multiple extra perpherials( like a spare UART ). Official development platform ESP-IDF have planted with FreeRTOS. With dual-core and real time OS you can get more organized code and much high speed processor.

M5Stack Basic is consist with two separable parts. the upside part has all kinds of processor, chips and some other slot components.  The bottom part has a lithium battery, M-BUS socket and extendable pins on both sides.

## Product Features

- ESP32-based
- Built-in Speaker, Buttons,Color LCD, Power/Reset button
- TF card slot (16G Maximum size)
- Magnetic suction at back
- Extendable Pins & Holes
- M-Bus Socket & Pins
- Program Platform: [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Includes

-  1x BASIC
-  10x Dupont
-  1x Type-C USB(20cm)
-  1x User Manual
-  1x Sticker

## Applications

- Internet of things terminal controller
- Stem education product
- DIY creation
- Smart home equipment

## Specification

<table class="table-1">
      <thead>
         <th>Resources</th>
         <th>Parameter</th>
      </thead>
      <tbody>
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
         <td>Core Bottom Port</td>
         <td>PIN (G1，G2，G3，G16, G17, G18, G19, G21, G22, G23, G25, G26, G35, G36)</td>
      </tr>
      <tr>
         <td>IPS Screen</td>
         <td>2 inch, 320x240 Colorful TFT LCD, ILI9342C</td>
      </tr>
      <tr>
         <td>Button</td>
         <td>Custom button x 3</td>
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
         <td>2.4G Antenna</td>
         <td>Proant 440</td>
      </tr>
      <tr>
         <td>Operating Temperature</td>
         <td>32°F to 104°F ( 0°C to 40°C )</td>
      </tr>
      <tr>
         <td>Size</td>
         <td>54 x 54 x 17.9 mm</td>
      </tr>
      <tr>
         <td>Case Material</td>
         <td>Plastic ( PC )</td>
      </tr>
    </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Core_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/BASIC.mp4" type="video/mp4">
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

<table class="table-1">
      <thead>
         <th>ESP32 Chip</th>
         <th>GPIO23</th>
         <th>GPIO19</th>
         <th>GPIO18</th>
         <th>GPIO14</th>
         <th>GPIO27</th>
         <th>GPIO33</th>
         <th>GPIO32</th>
         <th>GPIO4</th>
      </thead>
      <tbody>
         <tr>
            <td>ILI9342C</td>
            <td>MOSI/MISO</td>
            <td>/</td>
            <td>CLK</td>
            <td>CS</td>
            <td>DC</td>
            <td>RST</td>
            <td>BL</td>
            <td> </td>
         </tr>
         <tr>
            <td>TF Card</td>
            <td>MOSI</td>
            <td>MISO</td>
            <td>CLK</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>CS</td>
         </tr>
    </tbody>
</table>

**Button & Speaker**

<table class="table-1">
      <thead>
         <th>ESP32 Chip</th>
         <th>GPIO39</th>
         <th>GPIO38</th>
         <th>GPIO37</th>
         <th>GPIO25</th>
      </thead>
      <tbody>
         <tr>
            <td>Button Pin</td>
            <td>BUTTON A</td>
            <td>BUTTON B</td>
            <td>BUTTON C</td>
         </tr>
         <tr>
            <td>Speaker</td>
            <td>/</td>
            <td>/</td>
            <td>/</td>
            <td>DA PIN</td>
         </tr>
    </tbody>
</table>

**GROVE Port A & IP5306**

<table class="table-1">
      <thead>
         <th>ESP32 Chip</th>
         <th>GPIO22</th>
         <th>GPIO21</th>
         <th>5V</th>
         <th>GND</th>
      </thead>
      <tbody>
         <tr>
            <td>GROVE A</td>
            <td>SCL</td>
            <td>SDA</td>
            <td>5V</td>
            <td>GND</td>
         </tr>
         <tr>
            <td>IP5306</td>
            <td>SCL</td>
            <td>SDA</td>
            <td>5V</td>
            <td>GND</td>
         </tr>
    </tbody>
</table>

## IP5306 charging/discharging，Voltage parameter
<table class="table-1">
      <thead>
         <th>charging</th>
         <th>discharging</th>
      </thead>
      <tbody>
         <tr>
            <td>0.00 ~ 3.40V -> 0%</td>
            <td>4.20 ~ 4.07V -> 100%</td>
         </tr>
         <tr>
            <td>3.40 ~ 3.61V -> 25%</td>
            <td>4.07 ~ 3.81V -> 75%</td>
         </tr>
         <tr>
            <td>3.61 ~ 3.88V -> 50%</td>
            <td>3.81 ~ 3.55V -> 50%</td>
         </tr>
         <tr>
            <td>3.88 ~ 4.12V -> 75%</td>
            <td>3.55 ~ 3.33V -> 25%</td>
         </tr>
         <tr>
            <td>4.12 ~   /   -> 100%</td>
            <td>3.33 ~ 0.00V -> 0%</td>
         </tr>
    </tbody>
</table>

## M5PORT EXPLAIN

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>Note:</th>
      </thead>
      <tbody>
      <tr>
         <td>PORT-A(Red)</td>
         <td>G21/22</td>
         <td>I2C</td>
      </tr>
      <tr>
         <td>PORT-B(Black)</td>
         <td>G26/36</td>
         <td>DAC/ADC</td>
      </tr>
      <tr>
         <td>PORT-C(Blue)</td>
         <td>G16/17</td>
         <td>UART</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC

<table>
      <thead>
         <th>ADC1</th>
         <th>ADC2</th>
         <th>DAC1</th>
         <th>DAC2</th>
      </thead>
      <tbody>
      <tr>
         <td>8 channels</td>
         <td>10 channels</td>
         <td>2 channels</td>
         <td>2 channels</td>  
      </tr>
      <tr>
         <td>G32-39</td>
         <td>G0/2/4/12-15/25-27</td>
         <td>G25</td>
         <td>G26</td>
      </tr>
    </tbody>
</table>

For more information about Pin assignment and Pin Remapping, Please refer to [ESP32 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)

## Links

-  **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)
   - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

## Schematic

- [BASIC](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5-Core-Schematic(20171206).pdf)

## Version Change

<table>
      <thead>
         <th>Release Date</th>
         <th>Product Change</th>
         <th>Note:</th>
      </thead>
      <tbody>   
         <tr>
            <td>2017.7</td>
            <td>Initial public release</td>
            <td>/</td>
         </tr>
         <tr>
            <td>2019.7</td>
            <td>TN screen changed to IPS screen</td>
            <td>before use . pls upgrade your M5Stack lib to the latest version (after 0.2.8) to solve screen reverse color problem.</td>
         </tr>
         <tr>
            <td>2020.3</td>
            <td>Battery capacity changed from 150mAh to 110mAh</td>
            <td>/</td>
         </tr>
    </tbody>
</table>

## Example

### Arduino IDE

- Click[here](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)to get Arduino code

## Video

**M5Stack Instroduce**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Introducing%20M5Stack.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>