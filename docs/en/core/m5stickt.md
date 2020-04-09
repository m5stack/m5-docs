# M5StickT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K016-T</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_01.webp"><img src="assets/img/product_pics/core/minicore/m5stickt/m5stick_T_03.webp"></div>

## Description

**M5StickT**is an exquisite and compact infrared thermal imaging camera. It adopts the latest FLIR Lepton 3.0 long-wave infrared (LWIR) camera core with an effective resolution of 160 * 120 for a clear and stable image. As it is a large area non-contact infrared sensor, it is a good solution for temperature measurement. Its main control chip is Espressif’s ESP32, which has built-in support for Wi-Fi and Bluetooth connections, and computing speeds of up to 240Mhz. This provides a favorable guarantee for image output with a FPS reaching 7 and above. The screen is 1.14 inches and has a resolution of 135 * 240. The device comes with a rich variety of hardware resources: An on-board 6-axis Inertial Measurement Unit, a digital microphone and  a power management chip and a built-in 300mAh battery, all embedded into the device. In terms of interactive operation, two programmable buttons and a rotary encoder are provided. In order to facilitate users to connect more peripherals, a 4 Pin PH2.0 interface with I2C support is provided at the bottom. The body is 3D printed from high quality Black Nylon filament. In addition, an M3 screw hole and a 1/4" screw hole are provided underside for easy mounting.


## Product Features

- ESP32-based
- Case Material: Nylon 3D print
- FLIR Lepton 3.0
- Built-in 6-Axis IMU，microphone
- Buttons and dial encoder
- IPS LCD(1.14 inch)
- built-in Lipo Battery
- GROVE/4P PH2.0 Interface


## Include

-  1x M5StickT
-  1x USB Type-C(20cm)

## Applications

- Car engine failure check
- Building dehumidification insulation sealing test
- Industrial furnace inner wall refractory crack
- Outdoor observation of animals at night

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

M5StickT only supports WIN10 & Linux & MAC(<10.15) free drive, the rest of the operating system requires users to install the driver.

Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device and open the Computer Device Manager port option. 3. Right click on the unrecognized device and perform a manual update.

<a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>


## Usage
Press the reset button to power on. The default display screen is RGB display mode. The left side is the temperature image, the upper right is the power display, and the lower right is the histogram and temperature range. The temperature range is automatically adjusted with the target temperature. The default bulls-eye automatically tracks the maximum temperature. Press the right button-A to switch the tracking mode (minimum / center / maximum value), press the button-B to switch the image display mode (GRAY / GOLDEN / RAINBOW / IRONBLACK / RGB). Dial encoder controls the display sensitivity (adjust the display temperature and color gamut), and long press the reset button for 6 seconds to turn off.

## Specification

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
      <td>LCD screen</td>
      <td>1.14 inch, 135*240 Colorful TFT LCD, ST7789</td>
   </tr>
   <tr>
      <td>Button</td>
      <td>Custom button x 2 </td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>MIC</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>Power Manager</td>
      <td>AXP192</td>
   </tr>  
   <tr>
      <td>Battery</td>
      <td>300 mAh @ 3.7V</td>
   </tr> 
   <tr>
   <td>2.4G Atenna</td>
      <td>Proant 440</td>
   </tr>
   <tr>
      <td>Thermal</td>
      <td>Lepton 3.0</td>
   </tr>
   <tr>
      <td>Encoder</td>
      <td>Dial encoder</td>
   </tr>
   <tr>
      <td>Operating Temperature </td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>48 * 30 * 29mm</td>
   </tr>
   <tr>
      <td>Weight</td>
      <td>26g</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickT_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5StickT_FactoryTest_0x1000.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/StickT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Thermal imaging operation instructions: A button to switch tracking mode, B button to switch display mode, dial to adjust sensitivity.</p>
        </div>
    </div>
</div>

## PinMap

**BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 </td><td>GPIO37</td><td>GPIO39</td></tr>
<tr><td>BUTTON A</td><td>Button Pin</td><td></td></tr>
<tr><td>BUTTON B</td><td></td><td>Button Pin</td></tr>
</table>

**IPS LCD**

Driver IC：ST7789

Resolution：135 * 240

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

- **3D Printer STL File**
   - [STL](https://github.com/m5stack/m5-structural-design-file/tree/master/M5StickT)

## Example

### Arduino IDE

- If you want the complete code, please click [here](https://github.com/m5stack/M5-StickT/tree/master/M5_StickC_Lepton_opensource_v1)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5-stickt-esp32-thermal-camera-development-kit-lepton-3-0';

   anchor_search(purchase_link);
   scrollFunc();

</script>