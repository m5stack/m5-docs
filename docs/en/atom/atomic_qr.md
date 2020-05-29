# ATOM QR-CODE

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K041</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_qr/atomic_qr_01.webp"></div>

## Description

**ATOM QR-CODE** is an M5Atom compatible module for reading Barcode/QR-codes. The product includes two parts: an M5Atom Lite unit and code scanning module. It supports 6 kinds of 2D codes and 19 kinds of 1D codes. It has built-in lighting LED, which can easily identify codes even in a dark environment. The green LED is convenient for focusing and aiming. The effective recognition accuracy of high-resolution CMOS imaging reaches 5mil. In addition, it has a variety of reading modes, which can be adjusted to automatic continuous trigger or manual trigger as required. The module has its own buzzer, which has different prompt sound effects in different states. The module also supports adding custom prefix/suffix to the data, defining multi-national keyboard, data editing and many other functions, it uses TTL-232 for communication, and can easily use serial port for data transmission. It can be easily used in Arduino or UIFlow programming,You can send the scanned data to the receiver for processing via wired or wireless connection through M5Atom Lite.

## Product Features
 
- Compatible with Atom Matrix/Atom Lite
- Built in lighting and focus LED
- Support Bluetooth and WiFi Based on esp32
- Support Arduino、Micropython、UIFlow
- UART/TTL communication
- Manual and automatic scanning mode
- Light and sound reminders
- Multiple output formats
- Data can be pre-edited and hidden
- Rich custom instructions
- Support RAW / GBK / Unicode
- 2D：QR Code,Mrico QR, Data Matrix, PDF417,Mrico PDF417，Aztec
- 1D：EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey,GS1 Databar,Code 11,Industrial 25，Standard 25,Plessey, Matrix 2 of 5



## Inclued

-  1x ATOM QR-CODE
-  1x M5Atom Lite
-  1x Hex Key
-  1x M2*8 Hexagon socket cup head machine screw
-  1x TYPE-C USB Cable（20cm)

## Application

- Cash register scanning
- Barcode/QR-code input device
- Warehouse inventory

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
            <td>EAN-13: 50-200mm(13mil), Code39: 40-90mm(5mil 10bytes), QR Code: 25-240mm(20mil 16bytes), Data Matrix: 50-90mm(10mil 20bytes), PDF 417: 30-130mm(6.67mil 7bytes)</td>
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
            <td>UART/TTL</td>
        </tr>
        <tr>
            <td>Voltage and Current</td>
            <td>DC 3.3V/170mA，Standby 10mA</td>
        </tr>
         <tr>
            <td>Net weight</td>
            <td>17g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td> 37g</td>
        </tr>
        <tr>
            <td>Product size</td>
            <td>48*24*18mm</td>
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

## USAGE

The scan module has been configured at the factory. M5Atom Lite has no pre-burn preset program.You need to burn the following example program for use. If you need to change the configuration, please refer to the user manual to scan the QR code for configuration. If you restore the factory settings, please scan to confirm that you are in TTL communication mode,and the baud rate setting is correct.The reading of some 1D code or 2D code needs to be enabled by scanning  qr-code of user manual to configure.

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_QRCODE_ATOM_BASE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_QRCODE_ATOM_BASE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/Atomic_QR.mp4" type="video/mp4">
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

## Scan value - Character

<img src="assets/img/product_pics/atom_base/atom_qr/atomic_qr_encode.webp" width = "50%">

## Example

- **UIFlow**

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/UIFlow) to download UIFlow example

<img src="assets/img/product_pics/atom_base/atom_qr/atomic_qr_uiflow.webp" width = "50%">

- **Arduino**

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/AtomicQR) to download Arduino example

## Related Link

- **[User manual of QR code command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomicQR/AtomicQR_Reader%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.docx)**

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/Atomic_QR.mp4" type="video/mp4" >
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-2d-1d-barcode-scanner-kit';


   var quickstart_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>

