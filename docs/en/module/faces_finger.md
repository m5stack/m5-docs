# Module FACES FINFER {docsify-ignore-all}

<img src="assets/img/product_pics/module/faces_finger/faces_finger_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/faces_finger/faces_finger_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-module/products/finger-print-fpc-1020a-panel-for-m5-faces)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**


## Description

**FACE-FINGER** is another FACES kit compatible panel, with the fingerprinter recognition module on it. Same as FINGER units, FACE-FINGER integrated the FPC1020A capacitive fingerprint recognition module and Fingerprint recognition algorithm chip. 
<br>
It can identify fingerprint information entrance, fingerprint deletion, fingerprint search, feature extraction for multiple people and so on. The unit also can be set fingerprint recognition comparison level and different security level. With FACES panel, you can have an upgrade level of Fingerprint management machine with a more complete and enclosed pattern.

Communication Protocol: UART.
<br><br><br>
<img src="assets/img/product_pics/module/faces_finger/faces_finger_03.jpg" width="30%" height="30%">


## Product Features

-  FACES bottom compatible
-  Interface Serial： UART2 (16/17)
-  FPC1020A
    - Size sensing array: 192*192 Pixel
    - Pixel resolution: 256 grayscale levels (8 Bit)
    - The supply voltage VDD:  typical 1.8 V
    - TX Supply voltage Internal generated: <3.3 V
    - Supply current image: Typical ~5 mA
    - Supply current sleep mode: Typical when detecting finger 10 µA
    - Supply current deep sleep: Typical <10 µA
    - Clock frequency: Serial SPI communication <12 MHz
    - Operating temperature: - 40 … + 85 °C
    - Storage temperature : - 40 … + 85 °C
    - Resolution: 508 DPI
-  Product Size：58.2mm x 54.2mm x 10mm
-  Product weight：20g

## Include

-  1x FACES-FINGER Panel


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_FINGER.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Schematic

<img src="assets/img/product_pics/module/faces_finger/faces_finger_04.jpg">
<img src="assets/img/product_pics/module/faces_finger/faces_finger_05.jpg">

### PinMap

<table>
<tr><td>M5Core</td><td>U2RXD(16)</td><td>U2TXD(17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>


## Document
- 
- Protocol **[FINGER series communication protocol](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- Datasheet **[FPC1020](http://www.shenzhen2u.com/doc/Module/Fingerprint/710-FPC1020_PB3_Product-Specification.pdf)**


## Code

<br>

## Application
- Time card punching machine
- Security

## Video

**Demo**
<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/FACES-Finger.mp4" type="video/mp4">
</video>
