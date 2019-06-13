# Application Demo Board {docsify-ignore-all}

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_DemoBoard_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/Demo-Board/Demo-Board_02.jpg" width="250" height="250">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](#Quic-Start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.55a11debQawlvD&ft=t&id=595173726730)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


## Description

**Demo Board**. This is a feast of IoT stuff, powered by M5Stack. It is an all-in-one Learning board powered by ESP32, which includes anything you can imagine in an IoT + industrial application scenarios. Let's see what you can do with it:  Robotic movement, the most commonly used serial communication port(RS485 RS232), Relay control, all different types of Button control, RF reader, speaker, Microphone and more all able to develope by an M5stack core device, so you can program this board with Blockly(UIFlow), Arduino, and Micropython.  Based on application scenarios, we've partitioned them into different functional parts with the good-looking layout and full-function performance.  Here comes the most powerful IIoT learning board.

## Product Feature 
- Fully Compatible with the M5Stack stackable and extendable system
- Protoboard, M5-BUS extension
- Each module comes with an individual power switch.
- Environment Sensor set ( Temperature, Humility,  barometric pressure, light intensity, and Microphone )
- Joystick Controller
- 8 Channel of Realy output
- 4x DAC，4x ADC
- 4x4 button matrix
- 8x8 RGB LED matrix
- Encoder 
- 1x Servo
- DC-Motor(with feedback encoder)
- step motor with four-phase five-wire 
- Radio frequency identification Reader
- RS-458，RS232 series communication
  
<img src="assets/img/product_pics/app/Demo-Board/Demo-Board_03.jpg" width="250" height="250">

## Include

- 1x **Demo Board** learning board
- 1x Power Aapter
- 1x RS232 cable
- 1x RFID Card
- 1x ID Card
- 16x breadboard cable

<img src="assets/img/product_pics/app/Demo-Board/Demo-Board_04.jpg" width="250" height="250">

# Quick Start

?>[Click here to view the Quick Start](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/Demo-Board_cn.pdf)


## Specification


| **Module Name** | **working Voltage**  |**Patameter** |
| :------: | :------: | :------: |
| ADC | 5V | 4x ADC port/ADS1115 |
| DAC | 5V | 4x DAC port/DAC6574 |
| Joystick | 3.3V | axis-X/Y  potentiometer input, axis-Z button input  |
| DHT12  | 3.3V | I2C address 0x5C |
| BMP280 | 3.3V | I2C address 0x76  |
| Light | 3.3V  | A/D sampling supported, adjustable threshold  |
| Microphone| 3.3V  | A/D sampling supported, adjustable threshold |
| Relay	| 5V  | 8 channels /3A-220V-AC/3A-30V-DC  |
| Neopixel| 5V  | 8x8 LED matrix  |
| Servo  | 5V  |  10KG torsion  |
| DC-Motor | 5V  |  feedback encoder/LV8548MC|
| Stepmotor | 5V | 4-phase 5 wires LV8548MC|
| RFID | 3.3V | Read & Write distance: < 8 cm/ MFRC522 |
| RS485	| 5V  | SP485EEN-L/TR |
| RS232| 5V  | MAX232ESE |
| Encode |  | Encoder button|
| Proto |  | 170x holes |
| Keyboard|   | 4x4 button matrix  |

## Learn

**Datasheet**

- [ADS1115](http://www.ti.com/lit/ds/symlink/ads1115.pdf)

- [DAC6574](http://www.ti.com/cn/lit/ds/symlink/dac6574.pdf)

- [LV8548MC](https://www.onsemi.cn/PowerSolutions/document/ANDLV8548MC-D.PDF)

- [TPS54360](http://www.ti.com/lit/ds/symlink/tps54360.pdf)

- [RC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

- [MAX232ESE](https://pdf1.alldatasheet.com/datasheet-pdf/view/73114/MAXIM/MAX232ESE.html)

- [MAX4466](http://pdf-file.ic37.com/pdf1/MAXIM/MAX4466_datasheet_430883/702566/MAX4466_datasheet.pdf)

- [SP485EEN-L/TR](http://pdf-file.ic37.com/pdf4/EXAR/SP485_datasheet_891519/145610/SP485_datasheet.pdf)

- [BMP280](https://www.mouser.cn/pdfDocs/BST-BMP280-DS001.pdf)


## Schematic

- [M5IoT-kit](https://github.com/m5stack/M5-Schematic/tree/master/Applications/M5IoT-kit)


## Example

#### Arduino IDE

-  [**Joystick**](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/joystick)

-  [**DHT12+BMP280**](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV)

-  [**Light**](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Light)

-  [**Relay**](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Relay)

-  [**Microphone**](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/Microphone)

-  [**RGBled**](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)

-  [**Servo**](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/servo)

-  [**DC-Motor**](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/DC-Motor)

-  [**RFID**](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/RFID)
