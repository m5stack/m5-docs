# ATOMIC QR-CODE READER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomic/atomic_qr_01.webp"></div>

## Description

**ATOMIC QR-CODE READER** is a kit of scanning modules for reading Barcode/QR-codes, The product includes two parts: M5Atom Lite and code scanning module,it supports 6 kinds of 2D codes and 19 kinds of 1D codes. It has built-in lighting LED, which can easily identify even in dark environment. The green LED is convenient for focusing and aiming. The effective recognition accuracy of high-resolution CMOS imaging reaches 5mil. In addition, it has a variety of reading modes, which can be adjusted to automatic continuous trigger or manual trigger as required. The module has its own buzzer, which has different prompt sound effects in different states, and the module supports adding custom Prefix suffix to data, defining multi-national keyboard, data editing and many other functions. You can send the scanned data to the receiver for processing in wired or wireless way through M5Atom Lite。

## Product Features

- Compatible with Atom Matrix/Atom Lite
- Built in lighting and focus LED
- TTL-232 communication
- Manual and automatic scanning mode
- Light and sound reminders
- Multiple output formats
- Data can be pre-edited and hidden
- Rich custom instructions
- 2D：QR Code,Mrico QR, Data Matrix, PDF417,Mrico PDF417，Aztec
- 1D：EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey,GS1 Databar,Code 11,Industrial 25，Standard 25,Plessey, Matrix 2 of 5



## Inclued

-  1x ATOMIC QR-CODE READER
-  1x M5Atom Lite
-  1x TYPE-C USB Cable（20cm)

## Application

- Cash register scanning
- Barcode/QR-code input
- Warehouse inventory

<img src="assets/img/product_pics/atom_base/atomic/ATOMIC.gif" width = 30%>

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
            <td>Sensor</td>
            <td>640x480 CMOS</td>
        </tr>
        <tr>
            <td>Illumination</td>
            <td>White LED</td>
        </tr>
        <tr>
            <td>Focus</td>
            <td>GreenLED</td>
        </tr>
        <tr>
            <td>Read QR code type</td>
            <td>QR Code,Mrico QR, Data Matrix, PDF417,Mrico PDF417，Aztec</td>
        </tr>
        <tr>
            <td>Read Barcode type</td>
            <td>EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey, GS1 Databar,Code 11,Industrial 25, Standard 25,Plessey, Matrix 2 of 5</td>
        </tr>
        <tr>
            <td>Recognition reading accuracy</td>
            <td>≥5mil</td>
        </tr>
        <tr>
            <td>Reading range</td>
            <td>EAN-13: 50-200mm(13mil), Code39: 40-90mm(5mil 10字节), QR Code: 25-240mm(20mil 16字节), Data Matrix: 50-90mm(10mil 20字节), PDF 417: 30-130mm(6.67mil 7字节)</td>
        </tr>
        <tr>
            <td>Contrast ratio</td>
            <td>≥25%</td>
        </tr>
        <tr>
            <td>Scanning angle</td>
            <td>Rotate 360°， Pitch ±55°， Yaw ±55°</td>
        </tr>
        <tr>
            <td>FOV</td>
            <td>Horizontal 34°，Vertical 28°</td>
        </tr>
        <tr>
            <td>Communication interface</td>
            <td>TTL-232</td>
        </tr>
        <tr>
            <td>Voltage and Current</td>
            <td>DC 3.3V/170mA，Standby 10mA</td>
        </tr>
         <tr>
            <td>Net weight</td>
            <td>g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td> g</td>
        </tr>
        <tr>
            <td>Product size</td>
            <td>50*24*17mm</td>
        </tr>
        <tr>
            <td>Package size</td>
            <td>55*55*20mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_UIFlow_v1.4.5.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5GO.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press the button to scan, and the scanning results will be displayed through the serial port</p>
        </div>
    </div>
</div>

### PinMap

<table>
 <tr><td>M5Atom</td><td>GPIO23</td><td>GPIO33</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>QR-CODE READER</td><td>TRIG</td><td>DLED</td><td>3.3V</td><td>GND</td></tr>
</table>


## Schematic

<img src="assets/img/product_pics/hat/finger_hat/finger_hat_04.webp" width="50%" height="50%">


## USAGE

The scan module has been configured at the factory. If you need to change the configuration, please refer to the user manual to scan the QR code for configuration. If you restore the factory settings, please scan to confirm that you are in TTL communication mode,and the baud rate setting is correct。




## Example

- **UIFlow**

Click[here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/Arduino/AtomicQR)to download UIFlow example

<img src="assets/img/product_pics/atom_base/atomic_qr/atomic_qr.webp">

- **Arduino**

Click[here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/Arduino/AtomicQR)to download Arduino example

## Related Link

- **[Instruction description of QR code](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomicQR/AtomicQR_Reader%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.docx)**

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomicQR.mp4" type="video/mp4" >
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atomic_qr_kit';


   var quickstart_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>

