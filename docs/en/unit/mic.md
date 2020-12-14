# Microphone Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U096</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/mic/mic.webp"></div>

## Description

**Microphone Unit** is a sound sensor with a built-in omni-directional electret microphone.

The signal is amplified and output by microphone preamplifier max4466. The amplifier can effectively suppress power supply noise and common mode noise, and the output signal has high sound recovery and can be used in noisy environments.

The unit can not only output analog signals, but also output digital level signals. The built-in LM393 double voltage comparator can set the comparison voltage threshold by adjusting 10K adjustable resistance.

The sensor is very suitable for acoustic electrical conversion, audio recording / sampling, FFT acoustic feedback, voice switch and other projects..

## Product Features

- Audio record/sample
- Built-in microphone preamplifier MAX4466
- Omnidirectional, 52dB sensitivity
- Digital output and analog signal
- Built-in dual independent precision voltage comparator and adjustable resistor, threshold adjustable
- Development platform: Arduino, UIFlow (Blocky, Python)
- HY2.0-4P interface
- 2X LEGO™ compatible holes

## Include

- 1x Microphone Unit
- 1x Grove Cable

## Applications

- FFT Spectrum Display
- Audio Sample / Record
- Voice Switch

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Microphone sensitivity / SNR</td>
      <td>52dB/40dB</td>
   </tr>
   <tr>
      <td>Output Signal</td>
      <td>Analog / digital</td>
   </tr>
   <tr>
      <td>Working Voltage</td>
      <td>3.3V</td>
   </tr>
   <tr>
   <td>Net weight</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_MIC_Unit_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_MIC_Unit_for_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/MIC.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Display the AD value collected by the microphone</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet**
  - [MAX4466](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX4466_V2.PDF)
  - [LM393](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/LM393.PDF)

## Schematic

<img src="assets/img/product_pics/unit/mic/mic_unit_sch.webp" width="40%">

### Pin Map

<table>
 <tr><td>M5Core(PORT B</td><td>GPIO26</td><td>GPIO36</td><td>5V</td><td>GND</td></tr>
 <tr><td>Mic Unit</td><td>26</td><td>36</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MIC_Unit)

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/microphone-unit-lm393';

   anchor_search(purchase_link);
   scrollFunc();

</script>
