# HEART {docsify-ignore-all}

<el-tag effect="plain">SKU:U029</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_heart_01.webp"> <img src="assets/img/product_pics/unit/unit_heart_02.webp"></div>

## Description

**HEART** is built using the **MAX30100** chipset.

MAX30100 is a complete pulse oximetry and heart-rate sensor system solution designed for the demanding requirements of wearable devices.

The MAX30100 provides very small total solution size without sacrificing optical or electrical performance. Minimal external hardware components are needed for integration into a wearable device.

- How do we use this Unit to test the heart rate ?
**Put your finger on the detection area.**

- What is the communication  protocol between M5 core and this unit?
**I2C(0x57)**.

## Product Features

- Programmable Sample Rate and LED Current for Power Savings
- Ultra-Low Shutdown Current (0.7µA, typ)
- Advanced Functionality Improves Measurement Performance
- High Sample Rate Capability
- Fast Data Output Capability
- GROVE interface
- Software Develop platform: Arduino
- Two Lego-compatible holes


## Include

- 1x HEART Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x57</td>
   </tr>
   <tr>
      <td>Operating Voltage</td>
      <td>1.8V-3.3V</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>5g</td>
   </tr>
    <tr>
      <td>Gross weight</td>
      <td>18g</td>
   </tr>
    <tr>
      <td>Product Size</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Heart_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Heart_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Heart_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The screen displays the blood oxygen heart rate sensor detection value.</p>
        </div>
    </div>
</div>

## Related Link

- **Datasheet**

  - [MAX30100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX30100.pdf)

  - [MAX30100lib](https://github.com/oxullo/Arduino-MAX30100)

## Schematic

<img src="assets/img/product_pics/unit/heart_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEART Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

To get the code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/HEART_MAX30100)

<img src="assets/img/product_pics/unit/unit_example/HEART/example_unit_heart_01.webp">

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEART/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/HEART/Heart_Example.webp" width="80%" height="80%">

<!-- ### 2. UIFlow

*- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_01.webp" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_02.webp" width="58%" height="58%"> -->

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-heart-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
