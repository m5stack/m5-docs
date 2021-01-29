# PIR HAT

<el-tag effect="plain">SKU:U054</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\pir_hat\pir_hat_01.webp"><img src="assets\img\product_pics\hat\pir_hat\pir_hat_02.webp"></div>

## Description

**PIR HAT** is an M5StickC compatible human body induction sensor, it belongs to "Passive pyroelectric infrared detector", that detect the infrared come from the human body. When the infrared is detected, the sensor will output HIGH and last for two seconds until the next detecting round.

*Notice: There exist 2 seconds delay*

## Product Features

- Detecting Range: 500cm
- Delay time: 2s
- Induction Angle: < 100°
- IDDQ : < 60uA
- Op.T: -20 - 80 °C

## Include 

- 1x PIR Hat

## Applications

- Hunman body induction lamp
- Security product
- Auto-induction 

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>12g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>24*25*20mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>40*42*30mm</td>
   </tr>
</table>

## Schematic

<img src="assets\img\product_pics\hat\pir_hat\pir_hat_04.webp" width="50%" height="50%">

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO36</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT PIR</td><td>OUT</td><td>5V</td><td>GND</td></tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_PIR_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_PIR_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PIR_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The real-time display shows the PIR HAT monitoring level.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino

 Please click [here](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/PIR) to get complete code

### 2. UIFlow

Open http://flow.m5stack.com and click Demo to load

<img src="assets\img\product_pics\hat\pir_hat\pir.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickccompatible-hat-pir-sensor';

   anchor_search(purchase_link);
   scrollFunc();

</script>