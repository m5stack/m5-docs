# Module FACES FINGER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A066</div>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_finger/faces_finger_01.webp"><img src="assets/img/product_pics/module/faces_finger/faces_finger_02.webp"></div>

## Description

**FACE-FINGER** is another FACES kit compatible panel, with the fingerprinter recognition module on it. Same as FINGER units, FACE-FINGER integrated the FPC1020A capacitive fingerprint recognition module and Fingerprint recognition algorithm chip. 
<br>
It can identify fingerprint information entrance, fingerprint deletion, fingerprint search, feature extraction for multiple people and so on. The unit also can be set fingerprint recognition comparison level and different security level. With FACES panel, you can have an upgrade level of Fingerprint management machine with a more complete and enclosed pattern.

Communication Protocol: UART.

## Product Features

-  FACES bottom compatible
-  Interface Serial： UART2 (16/17)
-  FPC1020A


## Include

-  1x FACES-FINGER Panel

## Applications

- Time card punching machine
- Security

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Size sensing array</td>
      <td>160*160 Pixel</td>
   </tr>
   <tr>
      <td>Pixel resolution</td>
      <td>256 grayscale levels (8 Bit)</td>
   </tr>
   <tr>
      <td>Appropriately adjustable security level</td>
      <td> 0-9, default level 5</td>
   </tr>
   <tr>
      <td>Resolution</td>
      <td>508DPI</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>20g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>43g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>58.2*54.2*10mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95*65*25mm</td>
   </tr>
   <tr>
      <td>Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_FINGER.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/module/faces_finger/faces_finger_04.webp">
<img src="assets/img/product_pics/module/faces_finger/faces_finger_05.webp">

### PinMap

<table>
<tr><td>M5Core</td><td>U2RXD(16)</td><td>U2TXD(17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## Related Link

- Protocol **[FINGER series communication protocol](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- Datasheet **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**

## Example

### 1. Arduino IDE

If you want the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Face/FINGER)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_FINGER/UIFlow)

<img src="assets/img/product_pics/module/faces_finger/finger.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/finger-print-fpc-1020a-panel-for-m5-faces';

   anchor_search(purchase_link);
   scrollFunc();

</script>