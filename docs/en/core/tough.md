# TOUGH

<!-- <el-tag effect="plain">SKU:K010</el-tag> -->

<!-- <div class="product_pic"><img class="pic" src="assets/img/product_pics/core/tough/tough_01.webp"><img class="pic" src="assets/img/product_pics/core /tough/tough_02.webp"></div> -->

## Description

**TOUGH** is the embedded master control for industrial scenarios in the M5Stack development kit series. The main control ESP32 model is D0WDQ6-V3, with two Xtensa® 32-bit LX6 processors that can be controlled separately, the main frequency is up to 240Mhz, supports WiFi and Bluetooth functions, onboard 16MB Flash and 8MB PSRAM, and can be through TYPE-C interface Download programs and powerful configuration to meet the resource overhead of complex applications. The front is equipped with a 2.0-inch resistive touch screen. The built-in RTC module can provide accurate timing function. The power supply part is equipped with AXP192 power management chip. At the same time, the fuselage is equipped with a TF-card (microSD) card slot and speakers, and a power amplifier chip with I2S digital audio interface can effectively prevent audio signal distortion.

## Product Features

- Based on ESP32 development board, support WiFi, Bluetooth
- 16M Flash, 8M PSRAM
- Built-in speaker, power indicator, RTC, I2S power amplifier, resistive touch screen, power button, reset button
- TF card slot (support up to 16GB)
- Development platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## contains

- 1x M5Stack TOUGH
- 1x Type-C USB(20cm)

## Application

- Industrial Controller

## Specifications

<table>
   <tr style="font-weight:bold">
      <td>Master control resources</td>
      <td>Parameters</td>
   </tr>
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
      <td>Input voltage</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Host interface</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>IPS LCD screen</td>
      <td>2.0"@320*240 ILI9342C</td>
   </tr>
   <tr>
      <td>Resistive touch screen driver IC</td>
      <td>NS2009</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>I2S power amplifier</td>
      <td>NS4168</td>
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
      <td>USB chip</td>
      <td>CP2104</td>
   </tr>
   <tr>
      <td>DC-DC boost</td>
      <td>SY7088</td>
   </tr>
   <tr>
      <td>TF card slot</td>
      <td>Support up to 16G</td>
   </tr>
   <tr>
      <td>Lithium battery interface</td>
      <td>MX1.25mm in-line 2P</td>
   </tr>
   <tr>
      <td>Antenna</td>
      <td>2.4G 3D antenna</td>
   </tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development)

- **Windows** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Tough_FactoryTest.exe)

## Pin mapping

**LCD screen & TF Card**

LCD pixels: 320x240
TF card supports up to 16GB

<table>
 <tr><td>ESP32 Chip</td><td>GPIO38</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td><td>GPIO15</td><td></td><td> </td><td> </td></tr>
 <tr><td>AXP192 Chip</td><td> </td><td> </td><td> </td><td> </td><td> </td><td>AXP_IO4</td><td>AXP_LD03</td><td>AXP_LDO2</td></tr>
 <tr><td>ILI9342C</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td>PWR</td></tr>
</table>

<table>
<tr><td>ESP32 Chip</td><td>GPIO38</td><td>GPIO23</td><td>GPIO18</td><td>GPIO4</td></tr>
<tr><td>TF Card</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td></tr>
</table>

**Resistive touch screen**

<table>
 <tr><td>ESP32 chip</td><td>GPIO21</td><td>GPIO22</td><td>GPIO39</td></tr>
 <tr><td>Res.TOUCH/NS2009</td><td>SDA</td><td>SCL</td><td>PENIRQ</td></tr>
</table>

**NS4168 power amplifier**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO12</td><td>GPIO0</td><td>GPIO2</td><td>AXP_IO2</td></tr>
 <tr><td>NS4168</td><td>BCLK</td><td>LRCK</td><td>DATA</td><td>SPK_EN</td></tr>
</table>

**RTC**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td><td></td></tr>
 <tr><td>AXP192</td><td></td><td></td><td>AXP_PWR</td><td>AXP_LDO1</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td><td>INT</td><td>PWR</td></tr>
</table>

**USB to serial download**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>

**Internal I2C connection**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>AXP192</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>NS2009</td><td>SDA</td><td>SCL</td></tr>
</table>

## TOUGH M-BUS schematic

<img class="pic" src="assets/img/product_pics/core/core2/core2_mbus.webp" width = "50%">

## M5Core2 port description

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>Remarks:</th>
      </thead>
      <tbody>
      <tr>
         <td>PORT-A (red)</td>
         <td>G32/33</td>
         <td>I2C</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC can map pin

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


For more information about pin assignments and pin remapping, please refer to [ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)


## Related Links

- **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
   - [NS4168](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/NS4168_CN_datasheet.pdf)
   - [ILI9342C](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/ILI9342C-ILITEK.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_en.pdf)
   - [NS2009](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/tough/NS2009_C219024.pdf)

- **API** 

   - [Arduino API](zh_CN/arduino/arduino_home_page?id=tough_api)


## Schematic

<img src="assets/img/product_pics/core/tough/tough_sch.webp">

## Example

### Arduino IDE

- [FactoryTest](https://github.com/m5stack/M5Tough/tree/master/examples/Basics/FactoryTest)
- [M5Tough-Lib](https://github.com/m5stack/M5Tough)

<script>
   anchor_search();
   scrollFunc();
</script>