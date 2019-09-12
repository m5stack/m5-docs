# Joystick HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_01.jpg" width="30%"> <img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_02.jpg" width="30%"> <img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_05.jpg" width="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/m5stickc-neofalsh-hat)**


## Description

**Joystick HAT** is a joystick module designed for M5SticKC. It is embedded with STM32F030F4 main control chip and uses I2C communication protocol to transmit data with host M5StickC.

This mini-volume joystick module supports full angular offset and center press, and outputs angular offset data as well as switching digital signals.

With the HAT series unified plug-in design and M5StickC reliable connection, in the most streamlined way, get more human-computer interaction input experience.

<img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_03.jpg" width="30%"> <img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_04.jpg" width="30%">

## Product Features

- onbuild STM32F030F4
- communication protocol: I2C (address: 0x38)
- support full range offset / center button

## Weight & Dimension

- Dimension：24mm x 30mm x 17mm
- Weight：3g

## Package Includes

- 1x Joystick HAT

## Application

- Game Controller
- Wireless joystick device

## Communication protocol

<mark>I2C address: 0x38</mark>

register:

0x01 Read only 4 bytes, single axis value 0 ~ 4096

`0: x-axis raw data lower 8 bits`

`1: x-axis raw data is high 8 bits`

`2: y-axis raw data lower 8 bits`

`3: y-axis raw data high 8 bits`

0x02 Read only 3 bytes

`0: Data after x-axis conversion ( -127 ~ 127)`

`1: Data after y-axis conversion (-127 ~ 127)`

`2: 0 or 1 (button pressed to 0, loosened to 1).

0x03 write only 1 bytes

`0x00: Normal mode`

`0x01: Center point zero`

`0x02: Maximum calibration (need to manually rotate the joystick to get the maximum value).`

`0x03: Save the center point and maximum data to flash, and restore to normal mode after saving.`


## Schematic

<img src="assets\img\product_pics\hat\neoflash_hat\neoflash_hat_08.jpg" width="30%"> 

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/Neoflash/EasyLoader_Neoflash_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)


## Code

- **[Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/neoflash-hat/Arduino)**


## Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Joystick HAT</td><td>SCL</td><td>SDA</td><td>3.3V</td><td>GND</td></tr>
</table>


## Video

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/Neoflash_HAT.mp4" type="video/mp4">
</video>