# 6-Axis IMU Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U095</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/imu/imu.webp"></div>

## Description

**6-Axis IMU Unit** is a 6-axis attitude sensor with 3-axis gravity accelerometer and 3-axis gyroscope, which can calculate tilt angle and acceleration in real time. The chip adopts mpu6886, has 16 bit ADC, built-in programmable digital filter and on-chip temperature sensor, adopts I2C interface (addr:0x68) to communicate with host computer, and supports low-power mode.

## Product Features

- 3-axis gravity accelerometer and 3-axis gyroscope
- On chip temperature sensor
- 1KB FIFO
- Support low power consumption
- Development platform: Arduino, uiflow (blocky, python)
- 2X LEGO compatible holes

## Include

- 1x 6-Axis IMU Unit
- 1x Grove Cable (5cm)

## Application

- Wearable devices
- Motion tracking
- UAV attitude determination

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>I2C Interface</td>
      <td>addr:0x68</td>
   </tr>
   <tr>
      <td>Accelerometer range</td>
      <td>±2g, ±4g, ±8g, or ±16g</td>
   </tr>
   <tr>
      <td>Accelerometer noise</td>
      <td>100 μg/√Hz</td>
   </tr>
   <tr>
      <td>Gyroscope range</td>
      <td>±250, ±500, ±1000, or ±2000 degrees per second</td>
   </tr>
   <tr>
      <td>Gyroscope sensitivity error</td>
      <td>1%</td>
   </tr>
   <tr>
      <td>Gyroscope noise</td>
      <td>±4 mdps/√Hz</td>
   </tr>
   <tr>
      <td>working voltage</td>
      <td>1.71V - 3.45V</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>4g</td>
   </tr>-
   <tr>
      <td>Gross Weight</td>
      <td>9g</td>
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

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_IMU_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_IMU6886_Unit_For_M5Core_.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/IMU.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Obtain IMU acceleration, angular velocity and temperature</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet**
    - [MPU 6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)

## Schematic

<img src="assets/img/product_pics/unit/imu/imu_sch.webp" width="40%">

### Pin Map

<table>
 <tr><td>M5Core(GROVE A)</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IMU Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

[Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IMU_Unit)

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/6-axis-imu-unitmpu6886';

   anchor_search(purchase_link);
   scrollFunc();

</script>
