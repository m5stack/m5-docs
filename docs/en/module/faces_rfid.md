# Module FACES RFID

<el-tag effect="plain">SKU:A067</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_rfid/faces_rfid_01.webp"><img src="assets/img/product_pics/module/faces_rfid/faces_rfid_02.webp"></div>

## Description

**FACE-RFID** is another FACES kit compatible panel, with the Radio frequency identification on it. Same as RFID units,  it is MFRC522-based. The MFRC522 operates in the 13.56MHz frequency band and uses the modulation and demodulation principle to interact with the proximity RF card. 
<br>
This unit can realize the function of the card reading and writing device, to identify and record multiple card information, to encode and authority an RF card. With FACES panel, you can have an upgrade level of RFID device with a more complete and enclosed pattern.

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_03.webp" width="30%" height="30%">

Communication Protocol: I2C.

## Product Features

- FACES bottom compatible
- Interface Serial： I2C (21/22)
- MFRC522

## Applications

- Reader­-Tag
- Security

## Include

-  1x FACES-RFID panel
-  1x RFID card
-  1x Fudan S50 card

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Operating frequency</td>
      <td>13.56MHz</td>
   </tr>
   <tr>
      <td>I2C data rate</td>
      <td>Fast mode: up to 400 Kbit/s; High-speed mode: up to 3400 Kbit/s</td>
   </tr>
   <tr>
      <td>Supported protocol</td>
      <td>ISO14443A, MIFARE and NTAG</td>
   </tr>
   <tr>
      <td>Data retention time</td>
      <td>> 10 years</td>
   </tr>
   <tr>
      <td>Reading and writing distance</td>
      <td> < 20 mm</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>18.4g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>52g</td>
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
      <td>Plastic(PC)</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_RFID.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

?>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_04.webp">

### PinMap

<table>
<tr><td>M5Core</td><td>SCL(22)</td><td>SDA(21)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACES RFID</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Link

- Datasheet **[MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)**

## Example

### 1. Arduino IDE

If you want the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Face/RFID)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_RFID/UIFlow)

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid.webp" width="50%" height="50%">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/rfid-rc522-panel-for-m5-faces';

   anchor_search(purchase_link);
   scrollFunc();

</script>