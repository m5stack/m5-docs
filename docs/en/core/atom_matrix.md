# ATOM Matrix {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_01.webp" width="30%" ><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_02.webp" width="30%" ><img src="assets/img/product_pics/core/minicore/atom/atom_matrix_06.webp" width="30%" >


## Description

**ATOM Matrix** is the most compact development board in the M5Stack development kit series yet with a size of only 24 * 24mm. It provides more GPIO pins and is very suitable for handy and miniature embedded device development. The main control adopts the ESP32-PICO-D4 chip, which comes integrated with Wi-Fi and Bluetooth technologies and has 4MB of integrated SPI flash memory. The Atom board provides an Infra-Red LED along with the 5*5 RGB LED matrix on the panel, a built-in IMU sensor (MPU6886), and a PH2.0 interface. A general purpose programmable button is provied below the RGB Led matrix to enable users to add input support to their various projects. The on-board USB interface (Type-C) enables rapid program uploading and execution. One M2 screw hole is provided on the back for mounting the board.

<mark>NOTE: We have set the brightness of RGB LED limited to 20. Pls DO NOT set it higher to avoid damaging the LED and acrylic screen.</mark>

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_03.webp" width="30%" height="30%">


## Product Features

- USB Type-C
- ESP32 PICO-based
- 4 MByte flash
- 1 Programmable button 
- 5 * 5 RGB LED matrix panel   
- Infra-red LED
- Reset button 
- 2.4G SMD Antenna: Proant 440
- MPU6886 Inertial Sensor
- 6* GPIO (Dupont Pins)
- GROVE/4Pin PH2.0 interface
- Program Platform:[Arduino](http://www.arduino.cc) [UIFlow](http://flow.m5stack.com)
- Product Size：24 * 24 * 14mm 
- Product weight：1g 

### ESP32 Features

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

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
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

## Peripherals Pin Map

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_04.webp" width="40%" height="40%">

<table>
 <tr><td>RGB Led</td><td>G27</td></tr>
 <tr><td>Btn</td><td>G39</td></tr>
 <tr><td>IR</td><td>G12</td></tr>
 <tr><td>SCL</td><td>G21</td></tr>
 <tr><td>SDA</td><td>G25</td></tr>
</table>

## Include

-  1x ATOM Matrix

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_05.webp" width="40%" height="40%">

## Example

### 1. Arduino IDE

*To get the code, please click [here](https://github.com/m5stack/M5Atom)。*

## Links

- **Datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_en.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_MATRIX.mp4" type="video/mp4" >
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/atom-matrix-esp32-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/atom/atom_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>