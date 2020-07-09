# BalaC

<el-tag effect="plain">SKU:K038</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/BalaC/balac_01.webp"></div>

## Description

**BalaC** is a DIY dual wheel balancing car kit. BalaC uses the STM32 series chip, two motor driver ICs, and is also equipped with a rechargable replaceable battery. It incorporates a light-weight design with 360° servos. It's possible to use the UIFlow graphic interface to program the balancing car. An M5StickC is included in the package. The BalaC maintains its balance with the help of mpu6886. The real-time compensation of the servos are controlled by calculating the offset value to achieve the purpose of balancing. A LEGO compatible design allows you to change different tires. If you want to learn about PID or need an interesting programming toy product, BalaC will be a good choice

**At present, there is no stock program, you will need to write the PID code by yourself.**

## Product Features

- Based on ESP32 + STM32
- Personality DIY
- Detachable Design
- Two wheel Drive
- Replaceable battery
- Program Platform：[UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

- 1x M5StickC
- 1x BalaC Base
- 2x Wheels
- 2x Wheel Connectors
- 2x 9G Servos
- 2x Elastics
- 2x Screws
- 1x Hex key
- 1x 16340 Battery
- 1x 10cm Type-C Cable

## Application

- Balancing car

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Specification</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>ESP32-Pico-D4</td>
            <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
        </tr>
        <tr>
            <td>Servo</td>
            <td>Rotation angle: 360 °; no load speed: 0.12 seconds / 60 degrees (4.8V)</td>
        </tr>
        <tr>
            <td>Driver</td>
            <td>L9110S</td>
        </tr>
        <tr>
            <td>Slave</td>
            <td>STM32F030F4P6</td>
        </tr>
        <tr>
            <td>Communication protocol</td>
            <td>IIC: 0x38</td>
        </tr>
        <tr>
            <td>Battery</td>
            <td>16340, 3.7V, 700mAh, Li-ions rechargeable</td>
        </tr>
        <tr>
            <td>net weight</td>
            <td>162g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>206g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>30*100*105mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>148*118*42mm</td>
        </tr>
     </tbody>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/APPLICATION/EasyLoader_BalaC_APPLICATION.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/APPLICATION/EasyLoader_BalaC_APPLICATION.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/BalaC.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>After power on, press the power key for calibration. At this time, the LED flashes and the calibration is successful, and the balance can be maintained automatically</p>
        </div>
    </div>
</div>

## Example

### Arduino IDE

Click here to download [examples](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/BalaC/Arduino/Balac)

### UIFlow

(Not actual code for reference only) [Click here to download UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/BalaC/UIFlow)

<img src="assets/img/product_pics/app/BalaC/balac_05.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/bala-c-esp32-development-mini-self-balancing-car';

   anchor_search(purchase_link);
   scrollFunc();

</script>

