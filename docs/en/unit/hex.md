# HEX

<el-tag effect="plain">SKU:A045</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\unit\hex\unit_hex_01.webp"><img src="assets\img\product_pics\unit\hex\unit_hex_02.webp" ></div>

## Description

**HEX** is a hexagona RGB LED panel. Total 37 RGB LEDs. With a input port and a output port, you can have mutiple of them in series connection.

This is how LEDs layout in the panel. Pay attention to the sequence in your code.

<img src="assets\img\product_pics\unit\hex\unit_hex_05.webp" width="50%">

## Product Features

- Total LED: 37
- Software development platform: Arduino,UIFlow(Blockly & python)

## Include

- 1x HEX Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>WS2812 x 37</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>8g</td>
   </tr>
    <tr>
      <td>Gross weight</td>
      <td>10g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>30*35*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>50*80*10mm</td>
   </tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_HEX_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_HEX_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/HEX_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The HEX Unit light board displays a rainbow gradient.</p>
        </div>
    </div>
</div>

### PinMap

**If HEX connected to GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**If HEX connected to GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

**If HEX connected to GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEX Unit</td><td> </td><td>HEX Pin</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/hex/unit_hex_04.webp" width="50%">


## Example

### 1. Arduino IDE

FastLED library on Arduino presents excellent and colorful lighting effects.
Before compile, it is require to install the FastLED library and connect HEX to GROVE A.

RGB LED Library on Arduino

- **[FastLED Library](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLED Reference(Chinese version)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

To get the complete code,please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/HEX_SK6812)

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_03.webp">

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEX/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_01.webp" width="50%" height="50%"> <img src="assets/img/product_pics/unit/unit_example/HEX/example_unit_dual_button_02.webp" width="30%" height="30%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/hex-neopixel-led-board';

   anchor_search(purchase_link);
   scrollFunc();

</script>