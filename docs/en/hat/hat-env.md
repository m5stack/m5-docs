# ENV HAT

<el-tag effect="plain">SKU:U053</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\env_hat\env_hat_01.webp"><img src="assets\img\product_pics\hat\env_hat\env_hat_02.webp"></div>

## Description

**ENV HAT**  It is able to detect the temperature, humidity, air pressure and magnetic field. This product relates via I2C protocol which allows you to obtain 4 types of environment data thru just 2 pins, together with the tiny body, makes it a powerful application for envitonment data collecting. 

## Product Features

- temperature:
    -  Range: -20 ~ 60 ℃
- Humidity:
    -  Range: 20 ~ 95 %RH
- Air pressure:
    -  Range: 300 ~ 1100hPa

- Typical Magnetic Field：
    - ±1300μT（x，y-axis），±2500μT（z-axis）
    - magnetic field resolution: 0.3μT

## Include

- 1x ENV Hat

## Applications

- Weather Station 
- Compass

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：DHT12(0x5C),BMM150(0x10)</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>24*20*14mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>36*38*18mm</td>
   </tr>
 </table>

## Schematic

- **[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_ENV.pdf)**

<img src="assets\img\product_pics\hat\env_hat\env_hat_04.webp" width="50%" height="50%">

## Related Link

- **[BMP280 library](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMP280 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

- **[DHT12 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**

- **[BMM150 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)**

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>HAT ENV</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_ENV_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_ENV_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ENV_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Air pressure, temperature and humidity display, magnetic force count value display.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino

Please click [here](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/ENV) to get complete code

### 2. UIFlow

Open http://flow.m5stack.com and Load Demo

<img src="assets/img/product_pics/hat/env_hat/env.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-env-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>
