# M5Stick {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png" alt="gray_02" width="300" height="300">
<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png" alt="gray_02" width="300" height="300">

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
- Case Material: PC + ABS
- 4 MByte Flash
- 9-Axis IMU MPU9250(only gray type)
- Blue LED
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
- 32 kHz crystal oscillator
- PWM/timer input/output available on every GPIO pin
- SDIO master/salve 50MHz

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5Stick/EasyLoader_M5Stick_FactoryTest.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

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
 <tr><td>ESP32</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO18</td><td>GPIO23</td>
 <tr><td>OLED </td><td>CS</td><td>DC</td><td>RST</td><td>D0</td><td>D1</td>
</table>

**GROVE Port**

<table>
 <tr><td>ESP32 </td><td>GPIO13</td><td>GPIO25</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE Port</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
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

**Gray version M5Stick:**

<table>
 <tr><td>ESP32</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>9-Axis posture sentsor: MPU9250</td><td>SCL</td><td>SDA</td>
</table>


## Include

-  1x M5Stick
-  1x USB Type-C(20cm)

## Weight and Size

- Package size:85mm x 55mm x 31mm
- Package weight:65g

**Gray type:**
-  Accessories: `WATCH BELT`, `WALL/1515` and `BRICK`

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


## Video

- **m5stick Case - Remote control air conditioner**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5Stick%20controll%20AC.mp4" type="video/mp4">
</video>

- **m5stick Case - .obj model viewer**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/Obj%20Model%20Viewer.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stick';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5stick/m5stick_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>