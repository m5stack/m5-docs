# Module FACES RFID {docsify-ignore-all}

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/faces_rfid/faces_rfid_02.jpg" width="30%" height="30%">


## Description

**FACE-RFID** is another FACES kit compatible panel, with the Radio frequency identification on it. Same as RFID units,  it is MFRC522-based. The MFRC522 operates in the 13.56MHz frequency band and uses the modulation and demodulation principle to interact with the proximity RF card. 
<br>
This unit can realize the function of the card reading and writing device, to identify and record multiple card information, to encode and authority an RF card. With FACES panel, you can have an upgrade level of RFID device with a more complete and enclosed pattern.


<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_03.jpg" width="30%" height="30%">

Communication Protocol: I2C.

## Product Features
- FACES bottom compatible
- Interface Serial： I2C (21/22)
-  MFRC522:
    - Operating frequency: 13.56 MHz
    - I2C data rate: Fast mode: up to 400 Kbit/s; High-speed mode: up to 3400 Kbit/s
    - RC522 Transceiver Buffer: 64 bytes
    - Supported protocol: ISO14443A, MIFARE, and NTAG
    - Operate temperature: -20℃-85℃
    - How long data be saved for > 10 years
    - Reading and writing distance: < 8 cm
    - Program Platform: Arduino, UIFlow(Blockly, Python)
    - Two Lego installation holes
-  Product Size：58.2mm x 54.2mm x 10mm
-  Product weight：18.4g

## Include

-  1x FACES-RFID panel
-  1x RFID card
-  1x Fudan S50 card

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_RFID.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_04.jpg">

### PinMap

<table>
<tr><td>M5Core</td><td>SCL(22)</td><td>SDA(21)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACES RFID</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


## Document

- Datasheet **[MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)**

## Example

### Arduino IDE

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_RFID)*

### UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/FACES_RFID/UIFlow)*

## Applications
- Reader­-Tag
- Security

## Video

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/FACES-RFID.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/rfid-rc522-panel-for-m5-faces';

   anchor_search(purchase_link);
   scrollFunc();

</script>