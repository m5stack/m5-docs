# Tail485

<div class="badge badge-pill badge-primary product_sku_tag">SKU:T002</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/tail485/tail485_01.webp"></div>

## Description

**Tail485** is a RS485 converter designed for ATOM, which is used for converting RS485 signals to TTL. RS485 is a standard defining the electrical characteristics of drivers and receivers for use in serial communications systems, widely used in the industrial field. It facilitates long distance communication in electrically noisy environments.  Multipoint systems are supported. When the project equipment needs to communicate and control through RS485, it is a good choice to use RS485 unit for interface type switching. A DC / DC voltage regulator chip is integrated in the tail485 module, which can directly convert the 12V voltage of RS485 to 5V to supply power for USB typeC interface, avoiding the inconvenience of a separate power supply.

## Product Features

- Adapted for ATOM Matrix/ATOM Lite form factor
- Built in DC / DC
- SP485EEN-L

## Inclued

- 1x Tail485

## Application

- RS485 Multipoint communication

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
            <td>Line Transceiver IC</td>
            <td>SP485EEN-L</td>
        </tr>
        <tr>
            <td>Step-down IC</td>
            <td>AOZ1282CI</td>
        </tr>
        <tr>
            <td>Size</td>
            <td>30 x 24 x 9mm</td>
        </tr>
        <tr>
            <td>Weight</td>
            <td>5g</td>
        </tr>
        <tr>
            <td>Case material</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast firmware burner, which has a case specific program related to the product. It can flash the device quickly and simply in order to perform a test or verification of the devices function.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_TAIL485_ATOM_BASE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_TAIL485_ATOM_BASE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/Tail485.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press button to send "hello",when received message the led will flashed.</p>
        </div>
    </div>
</div>

## Links

-  **Datasheet** 
  - [SP485EEN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)
  - [AOZ1282CI](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/tail485/AOZ1282CI-datasheet.pdf)

### PinMap

<table>
 <tr><td>ATOM</td><td>GPIO26(TX)</td><td>GPIO32(RX)</td><td>5V</td><td>GND</td></tr>
 <tr><td>Tail485</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/tail485/tail485_08.webp">


## Example

### 1. Arduino IDE

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Tail485/Tail485)

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Tail485/UIFlow)

<img src="assets/img/product_pics/atom_base/tail485/tail485_09.webp" width = "50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atom-tail485';

   anchor_search(purchase_link);
   scrollFunc();

</script>
