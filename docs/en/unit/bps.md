# Barometric Pressure Unit {docsify-ignore-all}

<el-tag effect="plain">SKU:U090</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/bps/bps.webp"></div>

## Description

**Barometric Pressure Unit** is a barometer unit, which integrates the Bosch BMP280 pressure sensor to measure atmospheric pressure and estimate the altitude. The relative accuracy can reach ± 0.12hpa, equivalent to ± 1m height difference. At the same time, the temperature drift coefficient is very low, which can reach 1.5 PA / K, that is, the temperature drift is 12.6 cm / K. in addition, there is an integrated temperature sensor in the chip.

## Product Features

- Air pressure sensor, with temperature sensor on chip, can be measure simultaneously
- The accuracy is ± 0.12hpa
- Temperature drift coefficiency 1.5pa/k
- Supports periodic measurement
- Integrated 5-segment filter
- Support low power consumption
- Development platform: Arduino, UIFlow (Blockly, Python)
- 2x LEGO™ compatible holes

## Include

- 1x Barometric Pressure Unit
- 1x Grove Cable (5cm)

## Application

- height detector
- Weather station

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>Air pressure measurement range</td>
      <td>300 - 1100 hPa(+9000m ~ -500m)</td>
   </tr>
   <tr>
      <td>Relative accuracy</td>
      <td>0.12hPa</td>
   </tr>
   <tr>
      <td>Absolute accuracy</td>
      <td>1hPa</td>
   </tr>
   <tr>
      <td>Temperature measurement range</td>
      <td>-40 ~ +85°C</td>
   </tr>
   <tr>
      <td>Temperature resolution</td>
      <td>0.01°C</td>
   </tr>
   <tr>
      <td>Pressure resolution</td>
      <td>0.16Pa</td>
   </tr>
   <tr>
      <td>Temperature coefficient offset</td>
      <td>1.5 Pa/K(12.6 cm/K)</td>
   </tr>
   <tr>
      <td>Current consumption</td>
      <td>2.7μA @ 1 Hz sampling rate</td>
   </tr>
   <tr>
      <td>Voltage</td>
      <td>1.71V - 3.6V</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x76</td>
   </tr>
   <tr>
   <td>Net Weight</td>
      <td>8g</td>
   </tr>-
   <tr>
      <td>Gross Weight</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>Produce Size</td>
      <td>24*24*13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>35*36*18mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a precise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_BPS_Unit_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_BPS_Unit_For_M5Core_.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/BPS.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Obtain atmospheric pressure and chip temperature, estimate altitude</p>
        </div>
    </div>
</div>

## Related Links

-  **Datasheet**
    - [BMP 280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)

## Schematic

<img src="assets/img/product_pics/unit/bps/bps_sch.webp" width="40%">

### Pin Map

<table>
 <tr><td>M5Core(GROVE A)</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>BMP Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BPS_Unit)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BPS_Unit/UIFlow)

<img src="assets/img/product_pics/unit/bps/BPS_Example.webp">


<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/barometric-pressure-unitbmp280';

   anchor_search(purchase_link);
   scrollFunc();

</script>
