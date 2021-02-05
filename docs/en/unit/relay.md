# RELAY

<el-tag effect="plain">SKU:U023</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/relay/unit_relay_01.webp"></div>

## Description

**RELAY** as it says is an M5Unit that implement a Relay functions. Relay can be used as an electrically operated switch, uses an electromagnet to mechanically operate a switch, where it is necessary to control a large power load circuit by a separate low-power signal such as digital signal output from a microprocessor.

The Relay support input voltage of up to 30V DC and 220V AC.

There are 3 pins named: ON, OFF, COM. You can program to make COM connect to ON or OFF, just by high and low out put of a digital GPIO.

## Product Features

- Single-BUS control
- Up to 3A @ 30 V DC or 220 V AC
- Software Development Platform: Arduino, UIFlow (Blockly, Python)
- Two Lego-compatible holes

## Include

- 1x RELAY Unit
- 1x Grove Cable
- 1x 3.96 soket

## Applications

- Remote control of high-power appliances, such as refrigerators, air conditioners, TVs, etc.

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>12g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>26g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*21mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Relay_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Relay_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Relay_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The relay coil is turned on and off, and the contact is used as a switch for circuit control.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td> </td><td>RELAY Controlling Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

[Click here to download the Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/RELAY)

### 2. UIFlow

[Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.webp">

## Video

**Program with UIFlow**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Blinking%20a%20bulb%20with%20the%20M5%20Relay%20unit..mp4" type="video/mp4">
</video>

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-3a-relay-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>
