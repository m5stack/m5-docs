# ATOM RS-485 Kit

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K045</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomicRS485/atom485.webp"></div>

## Description

**ATOM RS-485** is a TTL-RS485 converter designed for use with M5Atomic. It's function is for TTL level and RS485 level-conversion. RS485 is a communication protocol standard, which is used to define the electrical characteristics of drivers and receivers of a serial communication system. It supports amulti-point system and is widely used in industry. When the applications equipment needs to communicate and be controlled through RS485, ATOM RS-485 is an excellent choice. A DC/DC voltage regulator chip is integrated in the ATOM RS-485, which can directly convert the 12V voltage of RS485 to 5V to supply power for M5ATOM, avoiding the trouble of using a separate power supply.

## Product Features

- Compatible ATOM Matrix/ATOM Lite
- SP3485EE
- Built-in DC/DC
- Multipoint communication

## Include

- 1x ATOM RS-485
- 1x ATOM Lite
- 1x Hex Key
- 1x M2*8mm Hexagon socket cup head machine screw
- 1x 18cm TYPE-C Cable

## Applications

- RS485 Multipoint communication
- Industrial control node
- RS485 to WiFi

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Specification</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>External port</td>
            <td>VH-3.96 4P</td>
        </tr>
        <tr>
            <td>Conversion level</td>
            <td>5V<->12V</td>
        </tr>
        <tr>
            <td>level-conversion IC</td>
            <td>SP3485EE</td>
        </tr>
        <tr>
            <td>DC-DC</td>
            <td>A0Z1282CI</td>
        </tr>
        <tr>
            <td>net weight</td>
            <td>28g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>38g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>24*48*18mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>54*54*20mm</td>
        </tr>
        <tr>
            <td>Case material</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ATOM_RS485.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_RS485.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomicRS485.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Send and receive the message through RS485, LED is on, press the key to send the message</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet** 
    - [SP485EEN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)
    - [AOZ1282CI](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/tail485/AOZ1282CI-datasheet.pdf)

### Pin Map

<table>
 <tr><td>ATOM</td><td>GPIO22</td><td>GPIO19</td><td>5V</td><td>GND</td></tr>
 <tr><td>ATOM RS-485</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomicRS485/atomic_rs485_sch.webp">


## Example

### 1. Arduino IDE

[Click here to download Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicRS485/Arduino/AtomicRS485)

### 2. UIFlow

[Click here to download UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicRS485/UIFlow)


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-rs485-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
