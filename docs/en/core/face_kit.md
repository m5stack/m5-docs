# FACES Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/faces_kit/face_01.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_02.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_03.jpg" width="30%" height="30%" >

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/face)**&nbsp;&nbsp;&nbsp;

## Description

**FACES Kit** is a feast of functional panels, contains the most commonly used panels and keyboards with **MEGA328** processor inside, communication protocol through IIC(0x08) as slave mode. With these 3 different panels, it will be very easy to support keyboard interaction with your M5Core.

### GameBoy Keyboard
If you up for some classic video game, GameBoy panel plus M5Core is the perfect combination. All you need to do is upload an game simulator onto M5 controller, and attach the GameBoy panel underneath. this is how it looks:

*Download a gameboy game: https://docs.m5stack.com/#/en/quick_start/faces/gameboy_burn_a_nes_game*

<img src="assets/img/product_pics/core/faces_kit/face_05.jpg">

The other two panels are Calculator Keyboard and QWERTY Keyboard.
### Calculator Keyboard
<img src="assets/img/product_pics/core/faces_kit/calculator.png">

### QWERTY Keyboard

<img src="assets/img/product_pics/core/faces_kit/face_04.jpg">

### FACE Charger
Other than 3 functional panels, this development kit comes with more stuff like a charger table with Mangent and POGO pin connector.

<img src="assets/img/product_pics/core/faces_kit/charger.png">

*For more information on M5Stack series development board, please check the **Gray Kit***

## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 16 MByte flash(old：4 MByte flash)
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


### Related Link

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/download-pdf/mpu-9250-datasheet/)

- **Register Manual** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

### NOTE
**<mark>Notice1</mark>**
*The [Gray](zh_CN/core/gray) M5core is included in the FACES Kit. Similarly, other versions of M5Core can be stacked on the base of the FACES. The following picture is a comparison of their main differences.*

- *For details click [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)*

- *Download chart click[here](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_compare.jpg">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/stick_compare.jpg">


**<mark>Notice2：M5PORT EXPLAIN</mark>**<br>
*You can identify the port name and function by its color, red is PortA(21/22) mainly used for I2C, black is PortB(26/36) which can be used for AD/DA, Singel-bus communication, Blue is PortC(16/17) can be used for Uart. Correspondingly, most of the M5 Units have the Port with matched color for specify which port it should go in on the M5Core. 
Those port identification is a convenience for UIFlow (Blockly)  Users. For advanced using ,you can do you own customization, since most of the PIN on ESP32 are remapping-able.
Unfortunatly, PortA(red) can not be used as analog read in. It refers to GPIO 21 & 22 from ESP32, which doesn't have AD channel alternatives: <br>
<img src="assets/img/product_pics/core/basic/basic_notice_01.jpg"><br>
To use AD read function : 
1, Use Dupont cable refers to the pins on the side which can be used as an AD channel.
2, Get a M5GO bottom, which comes with a PortB.
3, Get a PbHUB and connect it with PortA, then you can have 6 PortBs.
For more information about Pin assignment and Pin Remapping, Please refer to EPS32 Datasheet*
<br>
**<mark>Notice3：Face Kit factory test code</mark>**<br>
The error message displayed on the screen, is actually normal, it doesn't mean something wrong with the hardware, don't worry. <br>
<img src="assets/img/product_pics/core/faces_kit/faces_kit_06.png" width="30%" hight="30%"> 


## User Work
- **[2048 Game with FACES Kit- Video](https://www.youtube.com/watch?v=ccEq0s7dU84)**
- **[2048 Game with FACES Kit- Source Code](https://github.com/phillowcompiler/2048_M5Stack)**

