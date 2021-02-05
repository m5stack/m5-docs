# UWB

<el-tag effect="plain">SKU:U100</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/uwb/uwb_01.webp"></div>

## Description

**UWB** is a Unit which integrates the UWB(Ultra Wide Band) communication protocol which uses nanosecond pulses to locate objects and define position and orientation. The design uses the Ai-ThinkerBU01 Transceiver module which is based on Decawave's DW1000 design. The internal STM32 chip with its integrated ranging algorithm，is capable of 10cm positioning accuracy and also supports  AT command control. Applications include: Indoor wireless tracking/range finding of assets，which works by triangulating the  position of the base station/s and tag (the base station resolves the position information and outputs it to the tag).

The firmware currently carried by this Unit only supports the transmission of ranging information, and does not currently support the transmission of custom information. When in use, it supports the configuration of 4 base station devices (using different IDs), and only a single tag device is allowed to operate at the same time.

## Product Features

- Positioning Accuracy :10cm
- Internal STM32 Integrated ranging algorithm
- AT Command control
- Serial communication (baud rate: 115200)
- Simple Usage，No need for RF Calibration
- IEEE 802.15.4-2011 UWB Standard
- Support two-way ranging and TDOA
- Development Platform: Arduino, UIFlow(Blockly, Python)
- 2x LEGO™ Technic friction pin holes

## Includes

- 1x UWB Unit
- 1x HY2.0-4P Port

## Applications

- Indoor tracking 
- Accurate range finding

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>19g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>Packaging Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>   

## Related Link

- **[AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uwb/uwb_unit_at_command_en.pdf)**
- **[BU01-specification](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uwb/nodemcu-bu01-specification_1_14.pdf)**
- **[DW1000 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uwb/dwm1000-datasheet-1.pdf)**

## EasyLoader

EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host Please click here to view the CP210X driver installation tutorial, M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_UWB_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_UWB_UNIT_With_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/UWB_VIDEO.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Case Desription:</p>
            <p>The screen displays the current ranging data between the tag device and the base station point.</p>
        </div>
    </div>
</div>

## Example 

### Arduino

- [Arduino Example Program](https://github.com/m5stack/M5Stack/blob/master/examples/Unit/UWB_DW1000/UWB_DW1000.ino)

## Schematic

<img src="assets/img/product_pics/unit/uwb/uwb_sch_01.webp">
<img src="assets/img/product_pics/unit/uwb/uwb_sch_02.webp">

### Pinout

- Serial communication (baud rate: 115200)

<table>
 <tr><td>M5Core</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>UWB Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/products/ultra-wideband-uwb-unit-indoor-positioning-module-dw1000';

   anchor_search(purchase_link);
   scrollFunc();

</script>