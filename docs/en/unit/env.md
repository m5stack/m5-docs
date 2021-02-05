# ENV

<el-tag effect="plain">SKU:U001</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/env/unit_env_01.webp"></div>

## Description

**ENV** is a environmental sensor, can be used for temperature, humidity, and atmospheric pressure measurement.

The ENV sensor integrates DHT12 and BMP280 sensors.

DHT12 is an upgraded version of DHT11 humidity temperature sensor: complete downward compatibility, higher precision and added I2C interface.

BMP280 is an absolute barometric pressure sensor especially designed for mobile applications, offers highest flexibility to optimize the device regarding power consumption, resolution and filter performance.

 **I2C address:DHT12(0x5C)、BMP280(0x76)**

## Product Features

-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Include

- 1x ENV Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Temperature measuring range/resolution</td>
      <td>-20 ~ 60 ℃ / ±0.2℃</td>
   </tr>
   <tr>
      <td>Humidity measuring range/resolution</td>
      <td>20 ~ 95 %RH / ±0.1%</td>
   </tr>
   <tr>
      <td>Air pressure measuring range/resolution</td>
      <td>300 ~ 1100hPa / ±1hPa</td>
   </tr>
   <tr>
      <td>communication protocol</td>
      <td>I2C：DHT12(0x5C),BMP280(0x76)</td>
   </tr>
   <tr>
      <td>Operating temperature</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
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
      <td>24.2*32.2*8.1mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
   <tr>
      <td>Material</td>
      <td>Plastic(PC)</td>
   </tr>
</table>


## Related Links

- **[BMP280 library](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMP280 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

- **[DHT12 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ENV_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_ENV_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ENV_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Display temperature, humidity and atmospheric pressure data.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/env_sch.JPG">

## PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

This is a ENV example, implemented with reading temperature, humidity and atmospheric pressure functionalities.

1. Before compiling, please install `Adafruit BMP280 Library`
2. copy `Adafruit_Sensor.h` to `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library`

The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV_DHT12_BMP280)

### 2. UIFlow

[Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.webp" width="60%">

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-env-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
