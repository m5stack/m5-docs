# M5Stick {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="300" height="300">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="gray_02" width="300" height="300">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5stick/m5stick_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)** &nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp; 🛒**[Purchase](https://m5stack.com/collections/m5-core/products/m5stack-official-new-m5stick-mini-development-kit-esp32-1-3oled-80mah-battery-inside-buzzer-ir-transmitter-mpu9250-optional)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**M5Stick** is a mini M5Stack, powered by ESP32. It is a portable, easy-to-use, open source, IoT development board.

*What it can do?*
This tiny block is able to realize your idea, enlighten your creativity, and help with your IoT prototying in a very short time. It will takes away a lot of the pains form the development process.

M5stick is one of the core devices in M5Stack product series which is built in a continues growing hardware & software ecosystem. It has a lot of compatible modules & units, as well as the open source code & engineering community that will help you maximum your benefit in every step of the developing process.

**The following figure shows the position indication of Button A and Assembly hole**

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_06.png">

**Power on / off:**

* Power on: Click the reset button

* Shutdown: Double the reset button

## Feature

- 5V DC power supply
- USB Type-C
- ESP32-based
- 4 MByte Flash
- 9-Axis IMU MPU9250(only gray type)
- Red LED
- Buzzer
- IR transmitter
- 1 Buttons, OLED(1.3 inch), 1 Reset
- 2.4G Antenna: Proant 440
- 80 mAh Lipo Battery
- Extendable Socket
- Grove Port
- Wearable & Wall mounted
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

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

## PinMap

### Peripheral Pin Mapping

 <img src="assets/img/product_pics/core/minicore/m5stick/m5stick_03.png" alt="gray_04" width="300" height="300">

**blue LED &  BUTTON & BUZZER & IR Transmitter**

<table>
 <tr><td>ESP32 </td><td>GPIO17</td><td>GPIO19</td><td>GPIO26</td><td>GPIO35</td></tr>
 <tr><td> IR Transmitter</td><td>Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>Blue LED</td><td> </td><td>Pin</td><td> </td><td> </td></tr>
<tr><td>BUZZER</td><td> </td><td> </td><td> Pin</td></tr>
<tr><td>BUTTON</td><td> </td><td> </td><td> </td><td>Pin</td></tr>
</table>

**OLED Screen**

<table>
 <tr><td>ESP32</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td>
 <tr><td>OLED </td><td>CS</td><td>DC</td><td>RST</td>
</table>

**GROVE Port**

<table>
 <tr><td>ESP32 </td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE Port</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**Gray type:**

<table>
 <tr><td>ESP32</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>9-Axis posture sentsor: MPU9250</td><td>SCL</td><td>SDA</td>
</table>

**<mark>Notice：</mark>**

*Comparision Between Different Development Kits*

- *For details click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *Download chart click[here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_en.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_en.png">

## Include

-  1x M5Stick
-  1x USB Type-C cable

**Gray type:**
-  Accessories: `WATCH BELT`, `WALL/1515` and `BRICK`

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_07.png" width=40% height=40%>
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_08.png" width=40% height=40%>

## Schematic

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_sch.png" width="500" height="500">

If you want the complete schematic, please click [here](https://github.com/m5stack/M5-Schematic/tree/master/Core/m5stick).

## Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)

- **Register Manual** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

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

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" type="video/mp4">
</video>

- **m5stick Case - .obj model viewer**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/Obj%20Model%20Viewer.mp4" type="video/mp4">
</video>