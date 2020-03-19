# PaHUB

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U040</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/pahub/pahub_p1.jpg"><img src="assets/img/product_pics/unit/pahub/pahub_p3.jpg"></div>

## Description

**PaHUB**, is a expander for I2C GROVE PORTA(red port on M5Core). 1-to-6. If you want connect mutiple I2C slave devices and some of them may sharing the same address, this unit can resolve I2C address conflicts.

At the Unit PaHUB's heart is an **TCA9548A** produced by TI. The TCA9548A device has eight bidirectional translating switches that can be controlled through the I2C bus. The SCL/SDA upstream pair fans out to downstream pairs, or channels. Any individual SCn/SDn channel or combination of channels can beselected, determined by the contents of the
programmable control register.

Technically this Unit allows mutiple levels of nesting, for example you can wire PaHUBs to the root PaHUB to get more seats for your I2C slave devices, if you have 7 of them you can have up to 36 I2C GROVE ports, which makes it easier to get your project more organized.

The I2C address of this unit is 0x70 (changable by resistors).

*Notice: Please pay attention to the channel order while programing*

<img src="assets/img/product_pics/unit/pahub/pahub_p2.jpg" width="30%" height="30%">

## Product Features

- I2C GROVE PORTA Expander
- Two Lego-compatible holes
- Nested allowed
- 1-to-6
- Product Size：48.2mm x 24.2mm x 11mm
- Product weight：6.7g

## Learn 

- The connections of the I2C data path are controlled by the same I2C master device that is switched tocommunicate with multiple I2C slaves. After the successful acknowledgment of the slave address (hardwareselectable by A0, A1, and A2 pins), a single 8-bit control register is written to or read from to determine the selected channels.
  
- Functional Block Diagram

<img src="assets/img/product_pics/unit/pahub/pahub_learn_diagram.jpg">

## Kit includes

- 1x PaHUB Unit
- 1x Grove Cable

## Links

- Datasheet - **[TCA9548A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TCA9548A_en.pdf)**

## Schematic

<img src="assets/img/product_pics/unit/pahub/pahub_sch.png" width="50%">

Referring to the schematic diagram and the TCA9548A data sheet, it can be seen that the Unit can modify the I2C address of the device by controlling the level combination of the A0 ~ A2 pins. (Default address is 0x70)

Three chip resistance welding positions are reserved on the PCB of the Unit, which are A0-A2, as shown in the figure below.

<img src="assets\img\product_pics\unit\pahub\pahub_p5.jpg" width="50%">

After soldering a 0 ohm resistor, the corresponding pin will change from low to high, and the pin level combination and its corresponding I2C address are shown in the table below.

<img src="assets\img\product_pics\unit\pahub\pahub_p4.jpg" width="50%">

## Example

- protovol type - I2C
- address - 0x70

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PaHUB.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

### 1. Arduino IDE

The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PaHUB/Arduino)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PaHUB/UIFlow)

<img src="assets/img/product_pics/unit/pahub/pahub.png" width="50%" height="50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/pahub-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>