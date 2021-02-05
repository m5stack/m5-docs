# BUTTON

<el-tag effect="plain">SKU:U027</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/button/unit_button_01.webp"></div>

## Description

**BUTTON** is a single button Unit. The button status can be detected by the input pin by simply capturing the high/low electrical level. If the button is pressed, the signal level will be ***high*** if the button is released, the signal level will be ***low***.

**As shown in the figure below:**

<img src="assets/img/product_pics/unit/button/unit_button_02.webp"  width="50%" height="50%">

**Output status:**

<img src="assets/img/product_pics/unit/button/unit_button_03.webp">

This unit communicates with M5Core through GROVE B port.

## Product Features

-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Include

- 1x BUTTON Unit
- 1x Grove Cable

## Applications

- Lamp holder switch
- Remote control switch


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>4g</td>
   </tr>
      <tr>
      <td>Gross weight</td>
      <td>16g</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Button_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Button_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Button_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The screen displays the current button status.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/button_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>Btn (GPIO36)</td><td>NC (GPIO26)</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>BUTTON Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

The code below is incomplete (just for reference). To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/BUTTON)

### 2. UIFlow

[Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.webp">

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-button-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
