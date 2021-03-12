# GoPlus2

<el-tag effect="plain">SKU:M025-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/goplusII/GoPlus2.webp"></div>

## Description

**GoPlus2**  is a stackable multi-functional motor and servo control module. The master control integrates the STM32F030C8T6 chipset. The module is equipped with 2-way DC motor drive interface and 4-way servo drive interface. Three PORT-B interfaces(Analog Input,Digital Output,Digital Input) can be expanded. Built-in 500mAh battery and support infrared (IR) transmission and receive. In order to meet the requirements of multi-channel interface power supply at the same time, a DC power interface is provided for external power supply, battery can be charged through the M5Core with USB-C.

Communication protocol: I2C(0x38)

### Product Features

-  2x DC motor interface
-  4x Servo interface
-  IR transmit & receive
-  3x expand PORT B
-  STM32F030C8T6
-  Built in 500mAh battery

### Include

-  1x GoPlus2 Module
-  2x DC Motor Cable

## Application

- Actuator / motor driver
- Acquisition and control of multiple input and output signals
- Infrared controller
- DIY Toy base

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Main control chip</td>
      <td>STM32F030C8T6</td>
   </tr>
   <tr>
      <td>Expand interface</td>
      <td>DC Motor x 2,PORT-B x 3, Servo x 4</td>
   </tr>
   <tr>
      <td>motor drive</td>
      <td>HR8833 H-bridge drive</td>
   </tr>
   <tr>
      <td>IR</td>
      <td>Transmit and Receive</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>500mAh</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x38</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>38g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>58g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*54*13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_GoPlus2.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_GoPlus2.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/GoPlus2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Servo, motor, portb and IR test, press ButtonB to switch</p>
        </div>
    </div>
</div>


## Schematic

<img src="assets/img/product_pics/module/goplusII/goplusII_sch.webp">

## PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO35</td><td>GPIO5</td></tr>
 <tr><td>IR</td><td>Receive</td><td>Transmission</td></tr>
</table>

## Related Link

- Protocol Manual
    - **[GoPlus2 I2C Protocol](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/GO%20PLUS2%20Guide.docx)**

## Example

### Arduino

To get example code, please [click here to download](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GoPLUS2)

<el-divider content-position="right">Last updated: 2021-1-22</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/goplus2-dc-motor-and-servo-driver-module-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>
