# Module FACES FINGER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A066</div>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_finger/faces_finger_01.jpg"><img src="assets/img/product_pics/module/faces_finger/faces_finger_02.jpg"></div>

## Description

**FACE-FINGER** is another FACES kit compatible panel, with the fingerprinter recognition module on it. Same as FINGER units, FACE-FINGER integrated the FPC1020A capacitive fingerprint recognition module and Fingerprint recognition algorithm chip. 
<br>
It can identify fingerprint information entrance, fingerprint deletion, fingerprint search, feature extraction for multiple people and so on. The unit also can be set fingerprint recognition comparison level and different security level. With FACES panel, you can have an upgrade level of Fingerprint management machine with a more complete and enclosed pattern.

Communication Protocol: UART.

## Product Features

-  FACES bottom compatible
-  Interface Serial： UART2 (16/17)
-  FPC1020A
    - Size sensing array: 160*160 Pixel
    - Pixel resolution: 256 grayscale levels (8 Bit)
    - Appropriately adjustable security level 0-9, default level 5
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

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/module/faces_finger/faces_finger_04.jpg">
<img src="assets/img/product_pics/module/faces_finger/faces_finger_05.jpg">

### PinMap

<table>
<tr><td>M5Core</td><td>U2RXD(16)</td><td>U2TXD(17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## Document

- Protocol **[FINGER series communication protocol](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- Datasheet **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**

## Example

### Arduino IDE

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_FINGER)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_FINGER/UIFlow)

<img src="assets/img/product_pics/module/faces_finger/finger.png">

## Applications
- Time card punching machine
- Security

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/finger-print-fpc-1020a-panel-for-m5-faces';

   anchor_search(purchase_link);
   scrollFunc();

</script>