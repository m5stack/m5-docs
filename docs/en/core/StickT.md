# StickT {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_T_01.webp" alt="gray_02" width="300" height="300">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_T_02.webp" alt="gray_02" width="300" height="300">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)** &nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/stick)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**M5Stick** is a mini M5Stack, powered by ESP32. It is a portable, easy-to-use, open source, IoT development board.

*What it can do?*
This tiny block is able to realize your idea, enlighten your creativity, and help with your IoT prototying in a very short time. It will takes away a lot of the pains form the development process.

M5stick is one of the core devices in M5Stack product series which is built in a continues growing hardware & software ecosystem. It has a lot of compatible modules & units, as well as the open source code & engineering community that will help you maximum your benefit in every step of the developing process.

**The following figure shows the position indication of Button A and Assembly hole**

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_T_03.webp">

**Power switch operation：**

* Power on ：Long press power button for 2 seconds

* Power off ：Short press power button for 6 seconds

**Notice:**

* Baudrate supported by M5StickC: 1200 ~115200, 250K, 500K, 750K, 1500K

* Only Orange type is available for now

## Feature

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 4 MByte Flash
- Red LED
- 2 Buttons, TFT(1.3 inch)
- 80 mAh Lipo Battery
- Grove Port
- Wearable & Wall mounted

## ESP32 Features

- 240 MHz dual core Tensilica LX6 microcontroller with 600 DMIPS
- Integrated 520 KB SRAM
- Integrated 802.11b/g/n HT40 Wi-Fi transceiver, baseband, stack and LWIP
- Integrated dual mode Bluetooth (classic and BLE)
- Hall sensor
- 32 kHz crystal oscillator
- PWM/timer input/output available on every GPIO pin
- SDIO master/salve 50MHz

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5Stick/EasyLoader_M5StickT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

## Schematic

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickT/m5stickT.jpg">

- [PDF Download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5StickC/20191118__StickC_A04_3110_Schematic_Rebuild_PinMap.pdf)

## PinMap

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" width="300px">

Power structure block diagram

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.webp" width="300px">

**RED LED & IR Transmitter & BUTTON A & BUTTON B**

<table>
 <tr><td>ESP32 </td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>RED LED</td><td>LED Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR Transmitter</td><td> </td><td>Transmitter Pin</td><td> </td><td> </td></tr>
<tr><td>BUTTON A</td><td> </td><td> </td><td>Button Pin</td><td> </td></tr>
<tr><td>BUTTON B</td><td> </td><td> </td><td> </td><td>Button Pin</td></tr>
</table>

**TFT LCD**

*Driver IC：ST7735S*

*Resolution：80 * 160*

<table>
 <tr><td>ESP32 </td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFT LCD</td><td>TFT_MOSI</td><td>TFT_CLK</td><td>TFT_DC</td><td>TFT_RST</td><td>TFT_CS</td></tr>
</table>

**GROVE PORT**

<table>
 <tr><td>ESP32 </td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE port</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
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

<table>
 <tr><td>ESP32</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td>
 <tr><td>OLED </td><td>CS</td><td>DC</td><td>RST</td>
</table>

**GROVE Port**

<table>
 <tr><td>ESP32 </td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE Port</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Include

-  1x M5Stick
-  1x USB Type-C(20cm)

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_07.png" width=40% height=40%>
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_08.png" width=40% height=40%>

## Schematic

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

To complete schematic, click [here](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick).

## Related Link

-  **Datasheet** - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf) - [MPU9250](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/PS-MPU-9250A-01-v1.1_en.pdf)

- **Register Manual** - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

## Example

* **Arduino**

    - [M5Stick Factory Test](https://github.com/m5stack/M5Stack/tree/master/examples/Stick/FactoryTest)

    - [M5Stick Watch](https://github.com/m5stack/StickWatch)

        <video width="500" height="315" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20Watch.mp4" type="video/mp4">
        </video>

* **UIFlow**

    - [White square game](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow)


## Related Video

- **m5stick Case - Remote control air conditioner**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" type="video/mp4">
</video>

- **m5stick Case - .obj model viewer**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/Obj%20Model%20Viewer.mp4" type="video/mp4">
</video>