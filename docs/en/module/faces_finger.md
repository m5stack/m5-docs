# Module FACES FINFER {docsify-ignore-all}

<img src="assets/img/product_pics/module/faces_finger/faces_finger_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/faces_finger/faces_finger_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-GOPLUS-Module-with-MEGA328P-IR-Transmitter-and-Receiver-suit-for-ESP32-Kit/3226069_33010785963.html?spm=2114.12010615.8148356.1.a8747842Ll7Apb)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**


## Description

**FACE-FINGER** is another FACES kit compatible panel, with the fingerprinter recognition module on it. Same as FINGER units, FACE-FINGER integrated the FPC1020A capacitive fingerprint recognition module and Fingerprint recognition algorithm chip. 
<br>
It can identify fingerprint information entrance, fingerprint deletion, fingerprint search, feature extraction for multiple people and so on. The unit also can be set fingerprint recognition comparison level and different security level. With FACES panel, you can have an upgrade level of Fingerprint management machine with a more complete and enclosed pattern.

<img src="assets/img/product_pics/module/goplus/goplus_p3.jpg" width="30%" height="30%"><img src="assets/img/product_pics/module/goplus/goplus_p4.jpg" width="30%" height="30%">


Communication Protocol: UART.

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

## Include

-  1x M5Stack GoPlus Module

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

- Driver firmware - **[GoPlus](https://github.com/m5stack/GoPlus/tree/master/src)**

- Test Code - **[GoPlus](https://github.com/m5stack/GoPlus/tree/master/test)**

## Application
- Time card punching machine
- Security

## Video

- **[Demo Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**
