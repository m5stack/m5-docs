# FINGER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U008</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_finger_01.webp"><img src="assets/img/product_pics/unit/unit_finger_02.webp"></div>

## Description

**FINGER** Unit is a fingerprint sensor with FPC1020A inside. This all-in-one fingerprint sensor makes fingerprint adding,verification,mananging super simple.

Uart protocol, Compact size and ultra-low power consumption makes it very attractive to use around M5Stack series product.  it performs fast fingerprint matching with highest security level and optimal user convenience. You can program to set the fingerprint recognition comparison level and different security level . if you ever consider secure your project with biometrics,don't forget to include this M5unit **FINGER**.

**This unit cummunicate with M5Core by UART protocol connected via PORTC**

UART settings:
- Baudrate(**default: 19200bps**)
- Start bits(1 bit)
-  Stop bits(1 bit)
-  Parity(no)

## Product Features

- Use capacitive area array semiconductor fingerprint sensor
- Each pixel of the sensor has a pixel quality of 256 gray levels
- 1: N recognition and 1: 1 verification function
- Support finger 360 rotation recognition
- Fingerprint comparison and search function

## Include

- 1x FINGER Unit
- 1x Grove Cable

## Applications

- Fingerprint Attendance Machine
- Fingerprint Locker


## Specification

<table>
    <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
    </tr>
    <tr>
       <td>Fingerprint capacity</td>
       <td> 150 </td>
    </tr>
    <tr>
       <td>Security level </td>
       <td> 0-9, default 5 </td>
    </tr>
    <tr>
       <td> Output format </td>
       <td> User name, image, feature value </td>
    </tr>
    <tr>
       <td> Characteristic value size </td>
       <td> 193Byte </td>
    </tr>
    <tr>
       <td> Communication method </td>
       <td> UART (9600-115200) </td>
    </tr>
    <tr>
       <td>Working temperature </td>
       <td> -10 °C-60 °C </td>
    </tr>
    <tr>
     <td>Relative humidity </td>
     <td> 20% -80% </td>
    </tr>
   <tr>
      <td>net weight</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>20g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
</table>


## Document

- Protocol **[FINGER series communication protocol](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- Datasheet **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**

## Schematic

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Finger_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Finger_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Finger_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>FINGER UNIT use case: Press the left button to enter the fingerprint input mode. Press the middle button to enter the fingerprint identification mode.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino IDE

The code below is incomplete(just for usage). To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/FINGER_FPC1020A)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/UIFlow)

<img src="assets/img/product_pics/unit/fingerprint.webp">

- **FINGER UIflow Video Tutorial**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Finger/E7%20-%20Finger%20Demo(UIFlow%20Tutorials%208).mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/finger-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>