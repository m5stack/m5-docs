# LAN Base {docsify-ignore-all}

<img src="assets/img/product_pics/base/lan_01.png" width="300" height="300">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-LAN-Module-with-W5500-Chip-LanProto-Ethernet-convert-Network-Module-Microcontroller-for-Arduino/3226069_32904089417.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>LAN Base</mark>** is base with integrated Ethernet chip W5500 and network interface. It meets the needs of M5Core access to wired networks.

Because M5Core integrates wireless WIFI, but there is no network interface, if you need to let M5Core access the wired network to work, then the LAN base is just right.

The LAN base is also equipped with metal rails and magnet discs for easy installation of the LAN to the wall or iron frame.

The orange HT3.96 terminal on the LAN base, this interface is not yet electrically connected, and each of its pins can be connected to any pin on the M-Bus bus.

**The figure below shows the inside of the LAN**

<img src="assets/img/product_pics/base/lan_03.png" width="350" height="350"><img src="assets/img/product_pics/base/lan_07.png" width="350" height="350">

If you need to implement RS485 communication, then use the matching pin header and TLL-to-RS485 function board to solder to the LAN base, you can realize RS485 interface, so you can communicate with RS485 device through the above HT3.96 terminal.

**TTL-to-RS485 adapter board and LAN base**

<img src="assets/img/product_pics/base/lan_04.png" width="100%" height="100%">

**The figure below shows how the TTL-to-RS485 adapter board can be combined with the LAN backplane**

*The RS485 small board is soldered to the LAN backplane. The serial port pins on the small board will be connected to the GPIO16 and GPIO17 of the LAN backplane.*

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

## Feature

- Input Supply Voltage: 9-24V
- HT3.96 port for supporting RS485
- Support RS485 communication, control RS485 device
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