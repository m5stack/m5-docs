# RoverC

<el-tag effect="plain">SKU:K036</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_01.webp"> <img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_02.webp"></div>

## Description

**RoverC** is a programmable, omnidirectional mobile robot base compatible with M5stickC, and can be started by inserting the M5stickC. The main controller of the base is the stm32f030f4 microcontroller. The base comes with N20 worm gear motors which are directly driven by a four-channel motor driver. These motors are connected to mecanum wheels which can move in all directions. In addition, two grove compatible I2C ports are provided to facilitate the expansion for other modules. The base is also compatible with LEGO bricks and can be expanded in structure. A 18350 battery is installed on the back of the base to meet the power and endurance requirements of the car and can be controlled by an independent switch.

<img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_05.webp" width="40%" height="30%">


## Product Features

- I2C Address 0x38
- Remote Control
- Programmable
- Four-channel motor driver
- LEGO compatible
- Extra Grove ports for expansion
- Equipped with 18350(900mAh) battery holder
- Flexible movement in all directions

## Applications

- Autonomous Rover
- Mini RC surveilance car
- Smart and cognitive toys

## Include

- 1x RoverC base(includes 18350(900mAh) Battery)

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>213g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>217g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>75*75*55mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>115*85*65mm</td>
   </tr>
 </table>


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/RoverC/EasyLoader_RoverC.exe"><el-button type="primary">download EasyLoader</el-button></a>

>EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. This can be burned to the M5 device through simple steps, and a series of function verifications can be performed.

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 115200 or 750000**)


## Instructions
Before use, please make sure that the roverc is fully charged. Charging method: insert m5stickc into the roverc, and connect the USB cable for charging.
Burn the easyloader firmware of Joyc and roverc with two M5StickC respectively. Insert Joyc and roverc respectively after burning. After power on, roverc will display the MAC address name and battery power. At the same time, Joyc will scan the MAC address name of roverc. Long press the a key of M5StickC on Joyc, and the work will be matched. Left rocker up and down control front and back, left and right control translation, right rocker left and right control steering.

## Usage
Two M5StickCs will be burned into the EasyLoader firmware of JoyC and RoverC respectively. After burning, they will be inserted into JoyC and RoverC respectively. After booting, RoverC will display the hotspot name of "M5AP+2 bytes mac address", and JoyC will scan the mac address name of RoverC. Press and hold the A5 button of the M5StickC on the JoyC for 3 seconds to start scanning the hotspot of the car, and the pairing is successful. After successful pairing, the link icon is highlighted in the upper left corner of the screen, and the joystick value is displayed on the screen. The left and right joysticks are controlled up and down, the left and right controls pan, and the right rocker controls the steering.


MotorControl：

<table>
<tr><td>Motor serial number</td><td>Register address</td><td>Parameter value</td></tr>
<tr><td>01</td><td>0x00</td><td>-127~127</td></tr>
<tr><td>02</td><td>0x01</td><td>-127~127</td></tr>
<tr><td>03</td><td>0x02</td><td>-127~127</td></tr>
<tr><td>04</td><td>0x03</td><td>-127~127</td></tr>
</table>

## Example

### 1. Arduino IDE

Use with JoyC HAT, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/RoverC)

Use alone [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/RoverC_Arduino_Alone)

### 2. UIFlow

<img src="assets\img\product_pics\hat\roverc_hat\roverC.webp" width="40%" height="30%">


## Version Change

<table>
      <thead>
         <tr>
            <th>Release Date</th>
            <th>Product Change</th>
            <th>Note:</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>2019.11</td>
            <td>Initial public release</td>
            <td>/</td>
         </tr>
         <tr>
            <td>2020.5</td>
            <td>Battery changed from 16340(750mAh) to 18350(900mAh)</td>
            <td>/</td>
         </tr>
    </tbody>
</table>

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>GPIO0</td><td>5V</td><td>GND</td></tr>
 <tr><td>RoverC HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C①</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C②</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets\img\product_pics\hat\roverc_hat\roverC_user1.webp" width="30%" height="30%"><img src="assets\img\product_pics\hat\roverc_hat\roverC_user2.webp" width="30%" height="30%"><img src="assets\img\product_pics\hat\roverc_hat\roverC_user3.webp" width="30%" height="30%">

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RoverC_USER.MP4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/rovercw-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>