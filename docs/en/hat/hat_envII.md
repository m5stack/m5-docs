# ENV II

<el-tag effect="plain">SKU:U001-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/envII/envII_01.webp"></div>

## Description

**ENV II** is an environment sensor which can sense temperature, humidity and atmospheric pressure. It is built with SHT30, BMP280 and BMM150 sensors, it is programmed over I2C. SHT30 is a digital temperature and humidity sensor with high precision and low power consumption. BMP280 is an absolute barometric pressure sensor which is especially designed for mobile applications. BMM150 is a magnetometer, which can be used to monitor the change of magnetic field and the direction of magnetic field.It offers the highest flexibility to optimize the device regarding power consumption, resolution and filter performance.

## Product Features

-  Measurement of temperature, humidity, air pressure and magnetic field
-  High-precision
-  Support IIC
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes


## Include

- 1x ENV II HAT
- 1x Grove Cable(5cm)

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
            <td>Max temperature measuring range</td>
            <td>-40 ~ 120 ℃</td>
        </tr>
        <tr>
            <td>Typical temperature tolerance</td>
            <td>0 ~ 60 ℃/±0.2℃</td>
        </tr>
        <tr>
            <td>Humidity measuring range</td>
            <td>10 ~ 90 %RH / ±2%</td>
        </tr>
        <tr>
            <td>Air pressure measuring range</td>
            <td>300 ~ 1100hPa / ±1hPa</td>
        </tr>
        <tr>
            <td>Communication protocol</td>
            <td>I2C：SHT30(0x44),BMP280(0x76),BMM150(0x10)</td>
        </tr>
        <tr>
            <td>Operating temperature range</td>
            <td>32°F to 104°F ( 0°C to 40°C )</td>
        </tr>
        <tr>
            <td>Magnetic field range typical</td>
            <td>±1300μT (x, y-axis), ±2500μT (z-axis), resolution 0.3μT</td>
        </tr>
        <tr>
            <td>net weight</td>
            <td>4g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>8g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td></td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>35*36*18mm</td>
        </tr>
        <tr>
            <td>Case material</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>


## Comparison between SHT30 and DHT12

<table class="table-1">
    <thead>
    <tr>
        <th>/</th>
        <th>SHT30</th>
        <th>DHT12</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Max temperature measuring range</td>
            <td>-40 ~ 120 ℃</td>
            <td>-20 ~ 60 ℃</td>
        </tr>
        <tr>
            <td>Typical temperature resolution</td>
            <td>0 ~ 60 ℃/±0.2℃</td>
            <td>±0.2℃</td>
        </tr>
        <tr>
            <td>Humidity measuring range/resolution</td>
            <td>10 ~ 90 %RH / ±2%</td>
            <td>20 ~ 95 %RH/0.1%</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ENV2_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_ENV2_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ENVII.MP4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Display temperature, humidity and atmospheric pressure data.</p>
        </div>
    </div>
</div>

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV II HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Link

  - **[BMP280 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

  - **[SHT30 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)**

  - **[bmm150 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)**

## Schematic

<img src="assets/img/product_pics/unit/envII_sch.webp">

## Example

### 1. Arduino IDE

This is an ENV example - implementing reading temperature, humidity and atmospheric pressure function.
1, Before compiling, please install `Adafruit BMP280 Library`
2, copy `Adafruit_Sensor.h` to `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library`

The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENVII/Arduino)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENVII/UIFlow)

<img src="assets/img/product_pics/unit/envII/envII_03.webp" width="60%">

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/env-ii-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
