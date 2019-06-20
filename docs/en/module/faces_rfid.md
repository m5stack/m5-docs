# Module FACES RFID {docsify-ignore-all}

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/faces_rfid/faces_rfid_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-GOPLUS-Module-with-MEGA328P-IR-Transmitter-and-Receiver-suit-for-ESP32-Kit/3226069_33010785963.html?spm=2114.12010615.8148356.1.a8747842Ll7Apb)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**


## Description

**FACE-RFID** is another FACES kit compatible panel, with the Radio frequency identification on it. Same as RFID units,  it is MFRC522-based. The MFRC522 operates in the 13.56MHz frequency band and uses the modulation and demodulation principle to interact with the proximity RF card. 
<br>
This unit can realize the function of the card reading and writing device, to identify and record multiple card information, to encode and authority an RF card. With FACES panel, you can have an upgrade level of RFID device with a more complete and enclosed pattern.


<img src="assets/img/product_pics/module/goplus/goplus_p3.jpg" width="30%" height="30%"><img src="assets/img/product_pics/module/goplus/goplus_p4.jpg" width="30%" height="30%">


Communication Protocol: I2C.

## Product Features
- FACES bottom compatible
- Interface Serial： UART2 (16/17)
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

## Include

-  1x M5Stack GoPlus Module

## Schematic

<img src="assets/img/product_pics/module/faces_rfid/faces_rfid_04.jpg">

### PinMap

<table>
<tr><td>M5Core</td><td>SCL(22)</td><td>SDA(21)</td><td>5V</td><td>GND</td></tr>
 <tr><td>FACES RFID</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


## Document

- Datasheet **[MFRC522](**http://www.shenzhen2u.com/doc/Module/Fingerprint/710-FPC1020_PB3_Product-Specification.pdf**)**


## Code

- Driver firmware - **[GoPlus](https://github.com/m5stack/GoPlus/tree/master/src)**

- Test Code - **[GoPlus](https://github.com/m5stack/GoPlus/tree/master/test)**

## Application
- Reader­-Tag
- Security

## Video

- **[Demo Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**
