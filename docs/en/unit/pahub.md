# PaHUB

<el-tag effect="plain">SKU:U040</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/pahub/pahub_p1.webp"><img src="assets/img/product_pics/unit/pahub/pahub_p3.webp"></div>

## Description

**PaHUB** is an expander for the I2C GROVE PORTA (red port on M5Core) the PaHUB allows to extend the PORTA for up to 6 ports, it's still one PORTA but now with the ability to switch between different sensor connected to one single port.

If you want connect multiple I2C slave devices and some of them may sharing the same address, this unit can resolve I2C address conflicts.

At the Unit PaHUB's heart is an **TCA9548A** produced by TI. The TCA9548A device has eight bidirectional translating switches that can be controlled through the I2C bus. The SCL/SDA upstream pair fans out to downstream pairs, or channels. Any individual SCn/SDn channel or combination of channels can bi-selected, determined by the contents of the programmable control register.

Technically this Unit allows multiple levels of nesting, for example you can wire PaHUBs to the root PaHUB to get more seats for your I2C slave devices, if you have 7 of them you can have up to 36 I2C GROVE ports, which makes it easier to get your project more organized.

The I2C address of this unit is 0x70 (can be changed by resistors).

*Notice: Please pay attention to the channel order while programing*

<img src="assets/img/product_pics/unit/pahub/pahub_p2.webp" width="30%" height="30%">

## Product Features

- I2C GROVE PORTA Expander
- Two Lego-compatible holes
- Nested allowed
- 1-to-6

## Include

- 1x PaHUB Unit
- 1x Grove Cable

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C: 0x70(can be modified by resistance A0, A1, A2)</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>19g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*12mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## Links

- Datasheet - **[TCA9548A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TCA9548A_en.pdf)**

## Schematic

<img src="assets/img/product_pics/unit/pahub/pahub_sch.webp" width="50%">

Referring to the schematic diagram and the TCA9548A data sheet, it can be seen that the Unit can modify the I2C address of the device by controlling the level combination of the A0 ~ A2 pins. (Default address is 0x70)

Three chip resistance welding positions are reserved on the PCB of the Unit, which are A0-A2, as shown in the figure below.

<img src="assets\img\product_pics\unit\pahub\pahub_p5.webp" width="50%">

After soldering a 0 ohm resistor, the corresponding pin will change from low to high, and the pin level combination and its corresponding I2C address are shown in the table below.

<img src="assets\img\product_pics\unit\pahub\pahub_p4.webp" width="50%">

## Example

- protovol type - I2C
- address - 0x70

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PaHUB.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/PaHUB_TCA9548A)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PaHUB/UIFlow)

<img src="assets/img/product_pics/unit/pahub/pahub.webp" width="80%" height="80%">

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/pahub-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
