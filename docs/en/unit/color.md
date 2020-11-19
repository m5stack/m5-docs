# COLOR

<el-tag effect="plain">SKU:U009</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/color/unit_color_01.webp"></div>

## Description

**COLOR** is color recognition unit integrated **TCS3472**. Like its namesake, **COLOR** is able to detect color value and return RGB data to the host.

**Identify color principle:**
In the TCS3472, a 3*4 array of filtered photodiodes and a 16 bit analog-to-digital converters are embedded. Of the 12 photodiodes, 3 have red filters, 3 have green filters, 3 have blue filters and 3 have no filter(clear).

<img src="assets/img/product_pics/unit/color/unit_color_07.webp">

When detecting the color of an object, TCS3472 returns data from four channels: red(R), green(G), blue(B) and clear(C)(non-filtered). The response from the red, green and blue channels (RGB) can be used to determine a particular source’s chromaticity coordinates (x, y).

<img src="assets/img/product_pics/unit/color/unit_color_04.webp">

Chromaticity Calculation Process Overview:

<img src="assets/img/product_pics/unit/color/unit_color_05.webp">

When we get coordinates (x, y), please reference the below figure so as to get the recommended color.

<img src="assets/img/product_pics/unit/color/unit_color_06.webp">

This Unit communicates with the M5Core via the GROVE A interface(I2C). Address is 0x29.

## Product Features

- Detection range: -40℃~85℃
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego-compatible holes

## Include

- 1x COLOR Unit
- 1x Grove Cable

## Applications

- Product Color Verification
- Color tracking robot


## Specification
   
<table class="table-1">
    <thead>
        <tr>
            <th>Resources</th>
            <th>Parameter</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>IC</td>
            <td>TCS3472</td>
        </tr>
        <tr>
            <td>Workingtemperaturerange</td>
            <td>-40°C~85°C</td>
        </tr>
        <tr>
            <td>Communicationmethod</td>
            <td>IIC</td>
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
            <td>32.2*24.2*8.2mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>67*53*12mm</td>
        </tr>
    </tbody>
</table>


## Related Link

-  **Datasheet** - [TCS3472](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TCS3472_en.pdf)

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Color_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Color_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Color_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The sensor collects the current CRGB value and prints it out through the serial port.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/color_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>COLOR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/COLOR_TCS3472)

After burnt this example, PC serial terminal will print original value RGBC(red, green, blue, clear).

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.webp">

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/UIFlow)

<img src="assets/img/product_pics/unit/color/color.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/color-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>