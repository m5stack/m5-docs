# M5Core2

<el-tag effect="plain">SKU:K010</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/core/core2/core2_01.webp"><img src="assets/img/product_pics/core/core2/core2_02.webp"></div>

## Tutorial&Quick-Start

Choose the development platform you want to use, view the corresponding tutorial&quick-Start.

<a href="/#/en/quick_start/core2/m5stack_core2_get_started_MicroPython"><el-tag effect="plain">UIFlow</el-tag></a> <a href="/#/en/arduino/arduino_core2_development"><el-tag effect="plain">Arduino</el-tag></a>

## Description

**M5Core2** is the second generation core device in the M5Stack development kit series, which further enhances the functions of the original generation of cores. 

The MCU is an ESP32 model D0WDQ6-V3 and has dual core Xtensa® 32-bit 240Mhz LX6 processors that can be controlled separately. WiFi and Bluetooth are supported as standard and it includes an on board 16MB Flash and 8MB PSRAM, USB TYPE-C interface for charging, downloading of programs and serial communication, a 2.0-inch integrated capacitive touch screen, and a built-in vibration motor. 

M5Core2 also features a built-in RTC module which can provide accurate timing. The power supply is managed by an AXP192 power management chip, which can effectively control the power consumption of the base and a built-in green LED power indicator helps to notify the user of battery level. The battery capacity has been upgraded to 390mAh, which can power the core for much longer than the previous model. 

The M5Core2 retains the TF-card(microSD) slot and speakers. However, in order to ensure higher quality sound output, the I2S digital audio interface power amplifier chip is used to effectively prevent signal distortion. There are independent power and reset buttons on the left side and bottom of the base. 

The 3 icons on the front of the screen are capacitive buttons which are programmable. There is a small expansion board on the back of the base with a 6-axis IMU sensor and microphone.
The development platform and programming language supported by M5Stack Core2: Arduino, [UIFlow](http://flow.m5stack.com) (using Blockly, MicroPython language) No matter what level of your development and programming skills, M5Stack will help You gradually turn your ideas into reality.


**Power on/off:**

* Power on: click the  power button 

* Power off: press the power button for 6s

Restart: Click the RST button at the bottom


## Product Features

- ESP32-based, built-in Bluetooth,WiFi
- 16M Flash，8M PSRAM
- Built-in speaker, power indicator, vibration motor, RTC, I2S amplifier, capacitive touch screen, power button, reset button
- TF card slot (16G Maximum size)
- Built-in lithium battery, equipped with power management chip
- Independent small board built-in 6-axis IMU, PDM microphone
- M-Bus Socket & Pins
- Program Platform: [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

-  1x M5Stack Core2
-  1x Type-C USB(20cm)

## Applications

- Internet of things terminal controller
- Stem education product
- DIY creation
- Smart home equipment

## Specification

<table class="table-1">
      <thead>
      <tr>
         <th>Resources</th>
         <th>Parameter</th>
      </tr>
      </thead>
      <tr>
         <td>ESP32-D0WDQ6-V3</td>
         <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
      </tr>
      <tr>
         <td>Flash</td>
         <td>16MB</td>
      </tr>
      <tr>
         <td>PSRAM</td>
         <td>8MB</td>
      </tr>
      <tr>
         <td>Input Voltage</td>
         <td>5V @ 500mA</td>
      </tr>
      <tr>
         <td>Interface</td>
         <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
      </tr>
      <tr>
         <td>IPS LCD Screen</td>
         <td>2.0"@320*240 ILI9342C</td>
      </tr>
      <tr>
         <td>Touch Screen</td>
         <td>FT6336U</td>
      </tr>
      <tr>
         <td>Speaker</td>
         <td>1W-0928</td>
      </tr>
      <tr>
         <td>LED</td>
         <td>Green power indicator light</td>
      </tr>
      <tr>
         <td>Button</td>
         <td>Power button, RST button, Virtual screen button*3</td>
      </tr>
      <tr>
         <td>Vibration reminder</td>
         <td>Vibration motor</td>
      </tr>
      <tr>
         <td>MIC</td>
         <td>SPM1423</td>
      </tr>
      <tr>
         <td>I2S Power Amplifier</td>
         <td>NS4168</td>
      </tr>
      <tr>
         <td>6-axis IMU</td>
         <td>MPU6886</td>
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
         <td>USB Chip</td>
         <td>CP2104</td>
      </tr>
      <tr>
         <td>DC-DC Boost</td>
         <td>SY7088</td>
      </tr>
      <tr>
         <td>TF card slot</td>
         <td>16G Max.</td>
      </tr>
      <tr>
         <td>Lithium Battery</td>
         <td>390mAh @ 3.7V</td>
      </tr>
      <tr>
         <td>Antenna</td>
         <td>2.4G 3D antenna</td>
      </tr>
      <tr>
         <td>Operating temperature</td>
         <td>32°F to 104°F ( 0°C to 40°C )</td>
      </tr>
      <tr>
         <td>Net Weight</td>
         <td>52g</td>
      <tr>
         <td>Gross Weight</td>
         <td>70g</td>
      </tr>
      <tr>
         <td>Product Size</td>
         <td>54 x 54 x 16mm</td>
      </tr>
      <tr>
         <td>Package Size</td>
         <td>75 x 60 x 20mm</td>
      </tr>
      <tr>
         <td>Case Material</td>
         <td>Plastic ( PC )</td>
      </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Core2_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Core2_FactoryTest.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/CORE2%20.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>This case will perform hardware running tests for speakers, wifi, buttons, accelerometer, TF-card(microSD), screen, etc.</p>
        </div>
    </div>
</div>


## PinMap

**LCD & TF card**

LCD ：320x240
TF card Maximum size 16GB

<table>
 <tr><td>ESP32 Chip</td><td>GPIO38</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td><td>GPIO15</td><td></td><td> </td><td> </td></tr>
 <tr><td>AXP192 Chip</td><td> </td><td> </td><td> </td><td> </td><td> </td><td>AXP_IO4</td><td>AXP_DC3</td><td>AXP_LDO2</td></tr>
 <tr><td>ILI9342C</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td>PWR</td></tr>
</table>

<table>
<tr><td>ESP32 Chip</td><td>GPIO38</td><td>GPIO23</td><td>GPIO18</td><td>GPIO4</td></tr>
<tr><td>TF Card</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td></tr>
</table>

**CAP.TOUCH**

<table>
 <tr><td>ESP32 chip</td><td>GPIO21</td><td>GPIO22</td><td>GPIO39</td></tr>
 <tr><td>AXP192</td><td></td><td></td><td></td><td>AXP_IO4</td></tr>
 <tr><td>FT6336U</td><td>SDA</td><td>SCL</td><td>INT</td><td>RST</td></tr>
</table>

**Mic & NS4168**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO12</td><td>GPIO0</td><td>GPIO2</td><td>AXP_IO2</td><td>GPIO34</td></tr>
 <tr><td>NS4168</td><td>BCLK</td><td>LRCK</td><td>DATA</td><td>SPK_EN</td> </td></tr>
 <tr><td>Mic</td><td></td><td>CLK</td><td></td><td></td><td>DATA</td></tr>
</table>

**AXP Power Indicator Light**

<table>
 <tr><td>AXP192</td><td>AXP_IO1</td><td>AXP_LDO3</td></tr>
 <tr><td>Green LED</td><td>Vcc</td></tr>
 <tr><td>Vibration motor</td><td></td><td>Vcc</td></tr>
</table>

**RTC**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td><td></td></tr>
 <tr><td>AXP192</td><td></td><td></td><td>AXP_PWR</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td><td>INT</td></tr>
</table>

**IMU(3-axis gyroscope & 3-axis accelerometer)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
</table>

**USB to serial chip**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>


**Internal I2C connection**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>AXP192</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>FT6336U</td><td>SDA</td><td>SCL</td></tr>
</table>


**Charging current measured value**
<table>
 <tr><td>charging current</td><td>Fully charged current(Power OFF)</td><td>Fully charged current(Power ON）</td></tr>
 <tr><td>0.219A</td><td>0.055A</td><td>0.147A</td></tr>
</table>


## M5Core2 M-BUS Schematic diagram

<img class="pic" src="assets/img/product_pics/core/core2/core2_mbus.webp" width = "50%">

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
         <td>G32/33</td>
         <td>I2C</td>
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

## Related Link

-  **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
   - [FT6336U](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/Ft6336GU_Firmware%20%E5%A4%96%E9%83%A8%E5%AF%84%E5%AD%98%E5%99%A8_20151112-%20EN.xlsx)  
   - [NS4168](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/NS4168_CN_datasheet.pdf)
   - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
   - [ILI9342C](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ILI9342C-ILITEK.pdf)
   - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_en.pdf)
   - [ATECC608A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ATECC608A-TNGTLS-CryptoAuthentication-Data-Sheet-DS40002112B.pdf)


-  **API**

   - [Arduino API](en/arduino/arduino_home_page?id=m5core2_api)

## Schematic

<img class="pic" src="assets/img/product_pics/core/core2/core2_sch.webp" width = "50%">

- [Core2-Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/CORE2_V1.0_SCH.pdf)

<img class="pic" src="assets/img/product_pics/core/core2/core2_sch_02.webp" width = "50%">

- [Core2 Expansion board-Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/CORE2_EXT_Board.pdf)

## Example

### Arduino IDE

- Click[here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Core2/Arduino) to get Arduino code

### Tutorial

- [UIFlow](/#/en/quick_start/core2/m5stack_core2_get_started_MicroPython)
- [Arduino](/#/en/arduino/arduino_core2_development)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5stack-core2-esp32-iot-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/core2/m5stack_core2_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>