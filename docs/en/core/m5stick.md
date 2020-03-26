# M5Stick

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K016</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/m5stick/m5stick_02.png"><img src="assets/img/product_pics/core/minicore/m5stick/m5stick_04.png"></div>

## Description

**M5Stick** is a mini M5Stack, powered by ESP32. It is a portable, easy-to-use, open source, IoT development board.
*What it can do?*
This tiny block is able to realize your idea, enlighten your creativity, and help with your IoT prototying in a very short time. It will takes away a lot of the pains form the development process.M5stick is one of the core devices in M5Stack product series which is built in a continues growing hardware & software ecosystem. It has a lot of compatible modules & units, as well as the open source code & engineering community that will help you maximum your benefit in every step of the developing process.

**The following figure shows the position indication of Button A and Assembly hole**

<img src="assets/img/product_pics/core/minicore/m5stick/m5stick_06.png">

**Power on / off:**

* Power on: Click the reset button

* Shutdown: Double the reset button

## Product Features

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


## Include

-  1x M5Stick
-  1x USB Type-C(20cm)


## Applications

- Wearable devices
- Internet of things terminal controller
- DIY creation

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Stick_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5Stick.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Screen LED IR buzzer Key test, click button A screen will print and display helloworld.</p>
        </div>
    </div>
</div>

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

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/stick';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5stick/m5stick_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>