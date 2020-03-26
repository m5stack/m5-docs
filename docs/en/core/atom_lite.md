# ATOM Lite

<div class="badge badge-pill badge-primary product_sku_tag">SKU:C008</div>

<div class="product_pic"><img src="assets/img/product_pics/core/minicore/atom/atom_lite_01.webp"><img src="assets/img/product_pics/core/minicore/atom/atom_lite_02.webp"></div>

## Description

**Atom Lite** is a very compact development board in the M5Stack development kit series with a size of only 24 * 24mm. It provides more GPIO for user customization which is very suitable for embedded smart home devices and in making smart toys. The main control adopts the ESP32-PICO chip which comes integrated with Wi-Fi and Bluetooth technologies and has a 4MB of integrated SPI flash memory. Atom Lite board provides an Infra-Red LED, a RGB LED, buttons, and a PH2.0 interface. In addition, it can connect to external sensors and actuators through 6 GPIOs. The on-board Type-C USB interface enables rapid program upload and execution.

## Product Features

- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 4 MByte flash
- 1* Reset button  
- 1* RGB led  
- 1* Programmable button  
- 1* Infra-red
- 2.4G Antenna: Proant 440
- 6* GPIO (Dupont Pins)
- GROVE/4P PH2.0 interface
- Program Platform: [Arduino](http://www.arduino.cc) [UIFlow](http://flow.m5stack.com)
- Size：24 * 24 * 10mm 
- Weight：12g 


## Include

-  1x ATOM Lite

## Applications

- Internet of things terminal controller
- IoT node
- Wearable peripherals

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_ATOM%20_LITE_FactoryTest.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_LITE.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Through the color-changing breathing light program, test whether the RGB LED and buttons are working properly.</p>
        </div>
    </div>
</div>

## Peripherals Pin Map

<table>
 <tr><td>RGB Led</td><td>G27</td></tr>
 <tr><td>Btn</td><td>G39</td></tr>
 <tr><td>IR</td><td>G12</td></tr>
</table>



## Example

### 1. Arduino IDE

To get the code, please click [here](https://github.com/m5stack/M5Atom)

### 2. UIFlow

Click [here](https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start) to view UIFlow example

## Links

- **Datasheet**

    - [ESP32-PICO](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_en.pdf)
    - [WS2812B-2020](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/WS2812B-2020_EN.PDF)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/atom-lite-esp32-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/atom/atom_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>