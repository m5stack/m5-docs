# LIGHT

<el-tag effect="plain">SKU:U021</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/light/unit_light_01.webp"></div>

## Description

**LIGHT** is a light intensity sensor unit with an adjustable photoresistor。

A photoresistor is a light-controlled variable resistor. The resistance of a photoresistor decreases with increasing incident light intensity and vice versa.
The sensor exhibits photoconductivity which make it possible to detect the light varies based on voltage and use an AD (Analog to digital converter) to convert the digital data.

We added some extra work to strengthen the circuit, a Dual Differential Comparators **LM393**, compares the differential voltage between the photoresistor and the varistor. It could offer larger and accuracy range of light intensity.

## Product Features

- 10K adjustable resistor
- Software Development Platform: Arduino, UIFlow(Blocky,Python)
- Two Lego-compatible holes

## Include

- 1x LIGHT Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Adjustable resistance</td>
      <td>10K</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>32*24*8*mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Light_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Light_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Light_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The screen displays the current ambient light value.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/light_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LIGHT Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

The code below is incomplete. To complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/LIGHT)

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_04.webp">

### 2. UIFlow

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_03.webp">

## Video

**LIGHT - Tutorial**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%20iot%20lighting%20part%202%20-%20light%20sensor%20control.mp4" type="video/mp4">
</video>

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/light-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
