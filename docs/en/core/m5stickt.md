# StickT {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_01.jpg" width="30%" height="30%">
<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_03.webp" width="30%" height="30%">
<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_04.webp" width="30%" height="30%">

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/m5-stickt-esp32-thermal-camera-development-kit-lepton-3-0)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**StickT**is an exquisite and compact infrared thermal imaging camera. It adopts the latest FLIR Lepton 3.0 long-wave infrared (LWIR) camera core with an effective resolution of 160 * 120 for a clear and stable image. As it is a large area non-contact infrared sensor, it is a good solution for temperature measurement. Its main control chip is Espressif’s ESP32, which has built-in support for Wi-Fi and Bluetooth connections, and computing speeds of up to 240Mhz. This provides a favorable guarantee for image output with a FPS reaching 7 and above. The screen is 1.14 inches and has a resolution of 135 * 240. The device comes with a rich variety of hardware resources: An on-board 6-axis Inertial Measurement Unit, a digital microphone and  a power management chip and a built-in 300mAh battery, all embedded into the device. In terms of interactive operation, two programmable buttons and a rotary encoder are provided. In order to facilitate users to connect more peripherals, a 4 Pin PH2.0 interface with I2C support is provided at the bottom. The body is 3D printed from high quality Black Nylon filament. In addition, an M3 screw hole and a 1/4" screw hole are provided underside for easy mounting.

<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_05.webp" width="30%" height="30%">

**Lepton 3.0 Parameter**

<table>
 <tr><td>Effective Pixels</td><td>160*120</td>
 <tr><td>Field of view</td><td>56°</td>
 <tr><td>Fast imaging time</td><td>< 500ms</td>
 <tr><td>Effective Frame Rate</td><td>8.7Hz</td>
 <tr><td>Input Clock</td><td>25MHz</td>
 <tr><td>Pixel Size</td><td>12μm</td>
 <tr><td>Low operating power</td><td>150 mW (operating), 650 mW (during shutter event), 5 mW (standby)</td>
 <tr><td>Scene Dynamic Range</td><td>Low Gain Mode: -10 to 400°C; High Gain Mode: -10 to 140°C</td>
 <tr><td>Spectral Range</td><td>8 to 14µm</td>
 <tr><td>Thermal Sensitivity</td><td>＜50 mK(0.050°C)</td>
 <tr><td>Optimum Temperature Range</td><td>-10°C to +80°C</td>
</table>

**Notice:**

StickT only supports WIN10 & Linux & MAC(<10.15) free drive, the rest of the operating system requires users to install the driver.

Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device and open the Computer Device Manager port option. 3. Right click on the unrecognized device and perform a manual update.

<a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>

<img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_02.webp" width="30%" height="30%">

## Feature

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: Nylon 3D print
- FLIR Lepton 3.0
- 4 MByte Flash
- 6-Axis IMU: MPU6886
- Microphone:SPM1423
- 2 Buttons, 1 Reset
- IPS LCD(1.14 inch)
- 2.4G Antenna: Proant 440
- 300 mAh Lipo Battery
- PMU: AXP192
- Dial encoder
- 4P PH2.0 Interface
- Wight: 26g
- Size: 48 * 30 * 29mm

## ESP32 Features

- 240 MHz dual core Tensilica LX6 microcontroller with 600 DMIPS
- Integrated 520 KB SRAM
- Integrated 802.11b/g/n HT40 Wi-Fi transceiver, baseband, stack and LWIP
- Integrated dual mode Bluetooth (classic and BLE)
- Hall sensor
- 32 kHz crystal oscillator
- PWM/timer input/output available on every GPIO pin
- SDIO master/salve 50MHz

## Include

-  1x StickT
-  1x USB Type-C(20cm)

## Application
- Car engine failure check
- Building dehumidification insulation sealing test
- Industrial furnace inner wall refractory crack
- Outdoor observation of animals at night

## Usage
Press the reset button to power on. The default display screen is RGB display mode. The left side is the temperature image, the upper right is the power display, and the lower right is the histogram and temperature range. The temperature range is automatically adjusted with the target temperature. The default bulls-eye automatically tracks the maximum temperature. Press the right button-A to switch the tracking mode (minimum / center / maximum value), press the button-B to switch the image display mode (GRAY / GOLDEN / RAINBOW / IRONBLACK / RGB). Dial encoder controls the display sensitivity (adjust the display temperature and color gamut), and long press the reset button for 6 seconds to turn off.

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/StickT/EasyLoader_StickT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

## PinMap

**BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 </td><td>GPIO37</td><td>GPIO39</td></tr>
<tr><td>BUTTON A</td><td>Button Pin</td><td></td></tr>
<tr><td>BUTTON B</td><td></td><td>Button Pin</td></tr>
</table>

**IPS LCD**

*Driver IC：ST7789*

*Resolution：135 * 240*

<table>
 <tr><td>ESP32 </td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>IPS LCD</td><td>MOSI</td><td>CLK</td><td>DC</td><td>RST</td><td>CS</td></tr>
</table>

**PH2.0 PORT**

<table>
 <tr><td>ESP32 </td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>PH2.0 port</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
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

**Dial Encoder**
<table>
 <tr><td>STM32</td><td>PA2</td><td>PA3</td><td>PA4</td>
 <tr><td>Encoder</td><td>SW</td><td>EN_B</td><td>EN_A</td>
</table>

## Related Link

-  **datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_cn.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [AXP192](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/AXP192_datasheet_cn.pdf)
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
    - [Lepton datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/lepton-3-3.5-datasheet_en.pdf)
    - [Lepton enigneering datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/flir-lepton-engineering-datasheet_en.pdf)
    - [Lepton software interface description](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/flir-lepton-software-interface-description-document_en.pdf)

## Example

* **Arduino**

    - [StickT Factory Test](https://github.com/m5stack/M5Stack/tree/master/examples/StickT/FactoryTest)


## Related Video

- **m5stick Case - Remote control air conditioner**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/StickT.mp4" type="video/mp4">
</video>
