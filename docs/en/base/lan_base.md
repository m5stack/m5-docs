# Base LAN {docsify-ignore-all}

<img src="assets/img/product_pics/base/lan_01.png" width="300" height="300">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-LAN-Module-with-W5500-Chip-LanProto-Ethernet-convert-Network-Module-Microcontroller-for-Arduino/3226069_32904089417.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

Although M5 core is ESP32-based, having Wi-Fi and Bluetooth intergrated, it doesn't stop you enable the Ethernet function. This **LAN** is a M5 Base that having a W5500 chip, which is a Hardwired TCP/IP embedded Ethernet controller that provides easier Internet connection to embedded systems. This Base is speciffically design for industrial application scenarioes, comes with couple of HT3.96 connectors, 485(?) metal rail and magnet discs for easy installation and fixation.

The 6 pin of HT3.96 connector are dangling, you can wired them up with the M-BUS and other circult as you like.

**The figure below shows the inner of LAN**

<img src="assets/img/product_pics/base/lan_03.png" width="350" height="350"><img src="assets/img/product_pics/base/lan_07.png" width="350" height="350">

If you need to add RS485 interface, soldering the RS485 board onto the mian board pin correspondingly.

**TTL-to-RS485 adapter board and LAN base**

<img src="assets/img/product_pics/base/lan_04.png" width="100%" height="100%">

**The figure below tells you how the TTL-to-RS485 adapter board connected onto LAN backplane**

*The serial port pins on the RS485 board will be connected to the GPIO16 and GPIO17 of the LAN backplane.*

<img src="assets/img/product_pics/base/lan_05.png" width="50%" height="50%">

## PinMap

**W5500**

| W5500  | ESP32 Chip   |
| :----: | :----------: |
| MOSI   | GPIO23       |
| MISO   | GPIO19       |
| CLK    | GPIO18       |
| CS     | GPIO26       |
| RST    | GPIO13       |
| INTn   | GPIO34       |

**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.png" width="500" height="385">

### Product Features

- Input Supply Voltage: 9-24V
- HT3.96 port for supporting RS485
- Support RS485 communication
- Easy to fixed on the wall

## Include

- 1x LAN Base
- 1x TTL-to-RS485 adapter board
- 1x pin header 20pin
- 1x metal rails and magnet discs
- 3x HT3.96 terminal
 - 2x 3pin
 - 1x 4pin
- 10x cold crimp terminal
- 3x Allen wrench
  - 1x 1.5mm
  - 1x 2mm
  - 1x 2.5mm
- 2x hexagon socket head cap screws M3x28
- 4x hexagon socket tapping screw KA2x4
- 1x countersunk head screw M3x8

<img src="assets/img/product_pics/base/lan_06.png" width="50%" height="50%">

## Application

- M5Core + LAN implementing a conveyor controller

<img src="assets/img/product_pics/base/base_example/example_base_lan_01.png" width="70%" height="70%">

- PC transmits video to Core via cable

<img src="assets/img/product_pics/base/base_example/example_base_lan_02.png" width="70%" height="70%">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [W5500](https://cdn.sparkfun.com/datasheets/Dev/Arduino/Shields/W5500_datasheet_v1.0.2_1.pdf)

## Schematic

<img src="assets/img/product_pics/base/lan_sch.JPG">

## Related Video

**LAN Case - The PC uses the UDP protocol to transmit video to the Core via the LAN cradle**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StackLovyanlauncher.mp4" type="video/mp4">
</video>