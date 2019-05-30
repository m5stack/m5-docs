# FACES Kit {docsify-ignore-all}

**[GameBoy Keyboard](#gameBoy-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Calculator Keyboard](#calculator-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[QWERTY Keyboard](#qeerty-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[FACES Charger](#faces-charger)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Related Link](#Related-Link)**

**FACES Kit** is a feast of functional panels, contains the most commonly used panels and keyboards with **MEGA328** processor inside, communication protocol through IIC(0x08) as slave mode. With these 3 different panels, it will be very easy to support keyboard interaction with your M5Core.

If you up for some classic video game, GameBoy panel plus M5Core is the perfect combination. All you need to do is upload an game simulator onto M5 controller, and attach the GameBoy panel underneath. this is how it looks:

*Download a gameboy game: https://docs.m5stack.com/#/en/quick_start/faces/gameboy_burn_a_nes_game*

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">

The other two panels are Calculator Keyboard and QWERTY Keyboard.

<img src="assets/img/product_pics/core/faces_kit/calculator.png">

### QWERTY Keyboard

<img src="assets/img/product_pics/core/faces_kit/qwerty.png">

Other than 3 functional panels, this development kit comes with more stuff like a charger table with Mangent and POGO pin connector.

<img src="assets/img/product_pics/core/faces_kit/charger.png">

*For more information on M5Stack series development board, please check the **Gray Kit***

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- 4 MByte PSRAM
- MPU9250
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (16G Maximum size)
- Battery Socket & 150 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

- 1x GRAY M5Stack Controller(M5Core)
- 1x FACES Charger table
- 1x FACES sling
- 1x panel sticker
- 3x FACES Keyboard(GameBoy, Calculator, QWERTY)
- 10x Femal-male dupont
- 6x M3x10 screw
- 1x hexagon screw key

<img src="assets/img/product_pics/core/faces_kit/faces_kit.png">

## Download the factory test code (Win)

1. Go to [M5stack](https://m5stack.com/download) and download  M5Burner.
2. Connect FACES to PC thru Type-C.
3. Find `FACES Kit` firmware and click **Burn**

<img src="assets/img/product_pics/core/faces_kit/download_faces_firmware_01.png">

<img src="assets/img/product_pics/core/faces_kit/download_faces_firmware_02.png">


### Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/download-pdf/mpu-9250-datasheet/)

- **Register Manual** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

- **[M5Core Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**

- **[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)**

- **[Panel Firmware](https://github.com/m5stack/FACES-Firmware)**

- **[Purchase](https://www.aliexpress.com/item/M5Stack-NEW-Offer-ESP32-Open-Source-Faces-Pocket-Computer-with-Keyboard-Gameboy-Calculator-for-Micropython-Arduino/32843973578.html?gps-id=pcStoreJustForYou&scm=1007.23125.122752.0&scm_id=1007.23125.122752.0&scm-url=1007.23125.122752.0&pvid=76f21b54-ba10-40cd-86f9-4bf4f522a9a9&spm=a2g1y.12024536.smartJustForYou_39076158.14)**

### NOTE

*The [Gray version](zh_CN/core/gray) core is configured in the FACES Kit, and our Core has several versions. Similarly, other versions of Core can be stacked on the base of the FACES. The following picture is a comparison of their main differences, which is convenient for you to use.*

- *If you want to **view** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md).*

- *If you want to **download** the detailed defference with them, please click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx).*

<!-- <img src="assets/img/product_pics/core/core_comparison_04.png"> -->

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_en.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_en.png">


**<mark>Notice：M5PORT EXPLAIN</mark>**
*You can identify the port name and function by its color, red is PortA(21/22) mainly used for I2C, black is PortB(26/36) which can be used for AD/DA, Singel-bus communication, Blue is PortC(16/17) can be used for Uart. Correspondingly, most of the M5 Units have the Port with matched color for specify which port it should go in on the M5Core. 
Those port identification is a convenience for UIFlow (Blockly)  Users. For advanced using ,you can do you own customization, since most of the PIN on ESP32 are remapping-able.
Unfortunatly, PortA(red) can not be used as analog read in. It refers to GPIO 21 & 22 from ESP32, which doesn't have AD channel alternatives: 
<img src="assets/img/product_pics/core/basic/basic_notice_01.jpg">
To use AD read function : 
1, Use Dupont cable refers to the pins on the side which can be used as an AD channel.
2, Get a M5GO bottom, which comes with a PortB.
3, Get a PbHUB and connect it with PortA, then you can have 6 PortBs.
For more information about Pin assignment and Pin Remapping, Please refer to EPS32 Datasheet*
