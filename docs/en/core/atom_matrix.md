# ATOM Matrix

<el-tag effect="plain">SKU:C008-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_01.webp"><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_03.webp"></div>

## Tutorial&Quick-Start

Choose the development platform you want to use, view the corresponding tutorial&quick-Start.

<a href="/#/en/quick_start/atom/atom_quick_start_uiflow"><el-tag effect="plain">UIFlow</el-tag></a>
<a href="/#/en/arduino/arduino_development"><el-tag effect="plain">Arduino</el-tag></a>

## Description

**ATOM Matrix** , which has a size of only 24 * 24mm, is the most compact development board in the M5Stack development kit series. It provides more GPIO pins and is very suitable for handy and miniature embedded device development. The main control adopts the ESP32-PICO-D4 chip, which comes integrated with Wi-Fi and Bluetooth technologies and has 4MB of integrated SPI flash memory. The Atom board provides an Infra-Red LED along with the 5 * 5 RGB LED matrix on the panel, a built-in IMU sensor (MPU6886), and a HY2.0 interface. A general purpose programmable button is provied below the RGB Led matrix to enable users to add input support to their various projects. The on-board USB interface (Type-C) enables rapid program uploading and execution. One M2 screw hole is provided on the back for mounting the board.

<mark>Note: When using FastLED lib, the recommended brightness of RGB LED is 20. Please do not set it to a high brightness value to avoid damage to the LED and acrylic screen. (In ATOM lib, we have mapped its appropriate brightness range to 0~100)</mark>

## Product Features

- ESP32 PICO-based
- Programmable button
- 5 * 5 RGB LED matrix panel(WS2812C)
- Buitl-in Infra-red LED
- Built-in MPU6886 Inertial Sensor
- Extendable Pins & Holes
- Program Platform:[Arduino](http://www.arduino.cc) [UIFlow](http://flow.m5stack.com)

## Include

-  1x ATOM Matrix

## Applications

- Internet of things terminal controller
- IoT node
- Wearable peripherals

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4MB</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Port</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>PIN Port</td>
      <td>G19, G21，G22，G23，G25, G33</td>
   </tr>
   <tr>
      <td>RGB LED </td>
      <td>WS2812C 2020 x 25</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>IR</td>
      <td>Infrared transmission </td>
   </tr>
   <tr>
      <td>Button</td>
      <td>Custom button x 1</td>
   </tr>
   <tr>
      <td>Antenna</td>
      <td>2.4G 3D Antenna</td>
   </tr>
   <tr>
      <td>Operating Temperature</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>3g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>14g</td>
   </tr>
      <tr>
      <td>Product Size</td>
      <td>24 x 24 x 14 mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>24 x 24 x 14 mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_ATOM%20_Matrix_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_MATRIX.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Test whether the RGB LED and keys work normally by using the matrix screen text scroll display and key count function.</p>
        </div>
    </div>
</div>

## Pin Map

<table>
 <tr><td>RGB Led</td><td>G27</td></tr>
 <tr><td>Btn</td><td>G39</td></tr>
 <tr><td>IR</td><td>G12</td></tr>
 <tr><td>SCL</td><td>G21</td></tr>
 <tr><td>SDA</td><td>G25</td></tr>
</table>


## Schematic

<img src="assets\img\product_pics\core\minicore\atom\ATOM_MATRIX_SIMPLE_CIRCUT_20200514.webp">

## Related Link

- **Datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_en.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [WS2812C-2020](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/WS2812C-2020_V1.2.pdf)

## Example

### 1. Arduino IDE

- To get the code, please click [here](https://github.com/m5stack/M5Atom)
- <mark>Before compiling the program, please configure the development board as M5StickC</mark>

### 2. UIFlow

- Click [here](https://docs.m5stack.com/#/en/quick_start/atom/atom_quick_start) to view UIFlow example

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/atom-matrix-esp32-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/atom/atom_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>