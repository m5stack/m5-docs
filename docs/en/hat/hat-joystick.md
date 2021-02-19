# Joystick HAT

<el-tag effect="plain">SKU:U073</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_01.webp"><img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_02.webp"></div>

## Description

**Joystick HAT** is one of the HAT module that is specifically designed for M5StickC. We have used a STM32F030F4 microprocessor inside to implement I2C communication with M5StickC.This mini-volume joystick module supports full angular movement and center press, and outputs angular data as well as button digital signals.With the 'HAT' unified plug-in design it can provide reliable connection, in the most streamlined way. which allowes to get more HMI experience.

## Product Features

- STM32F030F4 inside
- communication protocol: I2C (address: 0x38)
- support omni-directional movement/button press


## Include

- 1x Joystick HAT

## Applications

- Game Handle
- Wireless Joystick Device

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x38</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>24*30*17mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>42*40*30mm</td>
   </tr>
 </table>

## Communication protocol

<mark>I2C address: 0x38</mark>

Register:

0x01 Read only 4 bytes, single axis value 0 ~ 4096

`0: low 8 bits of raw data on X-axis`

`1: high 8 bits of raw data on X-axis`

`2: low 8 bits of raw data on Y-axis`

`3: high 8 bits of raw data on Y-axis`

0x02 only read 3 bytes

`0: x-axis data after transform ( -127 ~ 127)`

`1: y-axis data after transform ( -127 ~ 127)`

`2: 0 or 1 (press down 0, release 1).

0x03 only write 1 bytes

`0x00: Normal mode`

`0x01: Central spot set 0`

`0x02: Maximum Calibration (Require manually rotate the joystick to get the maximum value).`

`0x03: Save central spot and Maximum Calibration value to flash, and go to Normal Mode after finish.`

> Joystick calibration method：First i2c writes register 0x03 and then sends 0x02, the joystick is rotated several times around the top, bottom, left and right, and then 0x03 is saved in register 0x03.

## Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Joystick HAT</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets\img\product_pics\hat\joystick_hat\joystick_hat_07.webp" width="60%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/Joystick/EasyLoader_Joystick_HAT.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/hat-joystick/Arduino/Joystick_hat)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/hat-joystick/UIFlow)

<img src="assets\img\product_pics\hat\joystick_hat\joystick.webp" width="60%">

<script>

   var purchase_link = 'https://m5stack.com/products/m5stickc-joystick-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>