# Base LAN

<el-tag effect="plain">SKU:K012-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/base/lan_01.webp"></div>

## Description

Although M5 core is ESP32-based, having Wi-Fi and Bluetooth intergrated, it doesn't stop you enable the Ethernet function. This **LAN** is a M5 Base that having a W5500 chip, which is a Hardwired TCP/IP embedded Ethernet controller that provides easier Internet connection to embedded systems. This Base is speciffically design for industrial application scenarioes, comes with couple of HT3.96 connectors, 485 metal rail and magnet discs for easy installation and fixation.The 6 pin of HT3.96 connector are dangling, you can wired them up with the M-BUS and other circuit as you like.

**The figure below shows the inner of LAN**

<img src="assets/img/product_pics/base/lan_03.webp" width="350" height="350"><img src="assets/img/product_pics/base/lan_07.webp" width="350" height="350">

If you need to add RS485 interface, soldering the RS485 board onto the mian board pin correspondingly.

**TTL-to-RS485 adapter board and LAN base**

<img src="assets/img/product_pics/base/lan_04.webp" width="60%">

**The figure below tells you how the TTL-to-RS485 adapter board connected onto LAN backplane**

The serial port pins on the RS485 board will be connected to the GPIO16 and GPIO17 of the LAN backplane.

<img src="assets/img/product_pics/base/lan_05.webp" width="50%" height="50%">


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
- 10x cold crimp terminal（red Copper Lugs）
- 3x Allen wrench
  - 1x 1.5mm
  - 1x 2mm
  - 1x 2.5mm
- 2x hexagon socket head cap screws M3x28
- 4x hexagon socket tapping screw KA2x4
- 1x countersunk head screw M3x8

<img src="assets/img/product_pics/base/lan_06.webp" width="50%" height="50%">

## Applications

- M5Core + LAN implementing a conveyor controller

<img src="assets/img/product_pics/base/base_example/example_base_lan_01.webp" width="70%" height="70%">

- PC transmits video to Core via cable

<img src="assets/img/product_pics/base/base_example/example_base_lan_02.webp" width="70%" height="70%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/BASE/EasyLoader_LAN_BASE.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1. EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. This can be burned to the M5 device through simple steps, and a series of function verifications can be performed.

>After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 115200 or 750000**)

?>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>32g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>132g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*54*28mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>105*65*4mm</td>
   </tr>
 </table>


## Related Link

- **Datasheet** - [W5500](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/W5500_datasheet_v1.0.2_1_en.pdf)

## Schematic

<img src="assets/img/product_pics/base/lan_sch.JPG">

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

<img src="assets/img/product_pics/core/M-BUS.webp" width="500" height="385">

## Example

- get example code [click here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)

## Video

**LAN Case - The PC uses the UDP protocol to transmit video to the Core via the LAN cradle**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StackLovyanlauncher.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/lan-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>