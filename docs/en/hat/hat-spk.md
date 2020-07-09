# SPK HAT

<el-tag effect="plain">SKU:U055</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\spk_hat\spk_hat_01.webp"><img src="assets\img\product_pics\hat\spk_hat\spk_hat_02.webp"></div>

## Description

**SPK HAT** is an M5StickC compatible speaker, integrated PAM8303 amplifier (3w single channel type D power amplifier), High PSRR and differential inputs eliminate noise and rf interference, thus it has the characteristics of simple functions and high audio reproduction.

## Product Features

- Ultra-low EMI interference, 20dB better than FCC class B standard at 300MHz
- Voltage 5 v power supply, with 4 Ω load power output 3 w, 10% of the total harmonic distortion.
- Ultra-low noise without input
- Power range: 2.8V～5.5V
- Shortcut protection.

## Package Includes 

- 1x SPK Hat

## Applications

- MP4/MP3

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>13g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>25*24*14mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>40*42*30mm</td>
   </tr>
 </table>

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT SPK</td><td>SD</td><td>IN-</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

- **[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Hat/StickHat_SPK.pdf)**

<img src="assets\img\product_pics\hat\spk_hat\spk_hat_04.webp" width="50%" height="50%">

## Related Link

- **[PAM8303 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/PAM8303_en.pdf)**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_Speaker_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_Speaker_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/SPK_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Drive the SPK HAT speaker to play a tone every second.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino

[Click here to download Arduino code](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/SPEAKER)

### 2. UIFlow

Open http://flow.m5stack.com and Load Demo

<img src="assets\img\product_pics\hat\spk_hat\spk.webp" >

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-speaker-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>