# ATOM TF-CARD

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K044</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomicTF/atomictf_01.webp" ><img src="assets/img/product_pics/atom_base/atomicTF/atomictf_02.webp"></div>

## Description

**ATOM TF-CARD** is an Atomic based TF-card(microSD)  module.It has a self elastic TF card slot, which can support up to 16GB capacity TF cards. You can save important configuration files and user data in the program to TF card, or call these files at any time during the program operation. The use of TF card reading and writing module can greatly reduce the occupation of precious flash space by external resource files.

## Product Features

- Compatible with ATOM Matrix/ ATOM Lite
- Up to 16G TF card
- FAT/FAT32 format
- Self elastic TF-card (microSD)  slot

## Include

- 1x ATOM TF-CARD
- 1x ATOM Lite
- 1x M2 HEX Key
- 1x M2*3mm Hexagon self tapping screw
- 1x M2*8mm Hexagon socket cup head machine screw
- 1x 18cm TYPE-C Cable

## Application

- Data saving
- File reading and writing
- Logging
- Self elastic slot

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Support type</td>
      <td>16G FAT/FAT32 MicroSD</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>23g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>33g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>24*48*18mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>54*54*20mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atomic_TF.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomicTF.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomicTF.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>SD card read-write file test, serial output view</p>
        </div>
    </div>
</div>

### PinMap

<table class="table-1">
      <thead>
         <th>ATOM</th>
         <th>GPIO19</th>
         <th>GPIO23</th>
         <th>GPIO33</th>
      </thead>
      <tbody>
         <tr>
            <td>ATOM TF-CARD</td>
            <td>MOSI</td>
            <td>CLK</td>
            <td>MISO</td>
         </tr>
    </tbody>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomicTF/atomicTF_sch.webp">

## Example

### 1. Arduino IDE

- Click [Here to download Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicTF)

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>
