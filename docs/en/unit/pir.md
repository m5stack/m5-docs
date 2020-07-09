# PIR

<el-tag effect="plain">SKU:U004</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_pir.webp"></div>

## Description

**PIR** is a human body infrared unit. It belongs to the "passive pyroelectric infrared detector". It detects the infrared radiation emitted and reflected by the human body or object. When infrared is detected, the output level is high and it takes a while. Delay (high during the period and allow repeated triggers) until the trigger signal disappears (restores low).

This Unit communicates with the M5Core via the GROVE B.

*Notice: This Unit has 2s delay time.*

## Product Features

- Detects the distance: 500cm
- latency time: 2s
- Sensing range: < 100°
- Quiescent current: < 60uA
- Operating temperature: -20 - 80 °C
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego installation holes

## Include

- 1x PIR unit
- 1x GROVE Cable

## Applications

- Human body Induction Lamp
- Security Product
- Automatic Induction Appliance Settings


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
      <td>20g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>32*24*12mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_PIR_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_PIR_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/PIR_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>IR sends a signal and if the remote control signal is received, the screen displays detected.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/pir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PIR Unit</td><td>Sensor Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/PIR)

### 2. UIFlow

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_03.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/pir-module';


   anchor_search(purchase_link);
   scrollFunc();

</script>