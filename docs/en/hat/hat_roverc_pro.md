# RoverC-Pro

<el-tag effect="plain">SKU:K036-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/roverc_pro_hat/roverc_pro.webp">

## Description

**RoverC-Pro** is a programmable Mecanum wheel omnidirectional mobile robot base. Compatible with M5StickC/M5StickC PLUS, it can be initialised by just inserting M5StickC/M5StickC PLUS. The main control chip is STM32F030C6T6, and it incorporates four N20 worm gear motors to drive the wheels directly by the motor driver. 

The PRO version provides a gripping mechanism controlled by a servo for gripping objects. The base provides two dedicated servo control drivers. In addition, it also provides two Grove-compatible I2C connectors to facilitate the expansion of other modules. The base is compatible with Lego and can be expanded structurally. There is an 16340 (700mAh) battery on the back, from which the battery can be replaced. It can be recharged through M5StickC/M5StickC PLUS. The power of the base is controlled by an independent switch.

## Product Features

- I2C Address 0x38
- Remote Control
- Gripping mechanism
- Programmable
- Four-channel motor driver
- LEGO compatible
- Extra Grove ports for expansion
- Equipped with 16340(700mAh) battery holder
- Flexible movement in all directions

## Applications

- Autonomous Rover
- Mini RC surveilance car
- Smart and cognitive toys

## Include

- 1x RoverC base(includes 18350(900mAh) Battery)
- 1x Claw Kit

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>187g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>245g</td>
   <tr>
      <td>Product Size</td>
      <td>120 x 75 x 58mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>115 x 85 x 65mm</td>
   </tr>
 </table>

## RoverC PRO and RoverC comparison

<table class="table-1">
    <thead>
    <tr>
        <th>/</th>
        <th>RoverC PRO</th>
        <th>RoverC</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Servo Gripper</td>
            <td>●</td>
            <td>-</td>
        </tr>
        <tr>
            <td>2 Servo Pin</td>
            <td>●</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Battery</td>
            <td>Removable</td>
            <td>Non-removable</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_RoverC_PRO_Alone.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_ROVERC_PRO_Alone.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RoverC.Pro.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press the ButtonA to hold the object and release the clamp after moving it back and forth</p>
        </div>
    </div>
</div>


MotorControl：

<table>
<tr><td>Motor serial number</td><td>Register address</td><td>Parameter value</td></tr>
<tr><td>01</td><td>0x00</td><td>-127~127</td></tr>
<tr><td>02</td><td>0x01</td><td>-127~127</td></tr>
<tr><td>03</td><td>0x02</td><td>-127~127</td></tr>
<tr><td>04</td><td>0x03</td><td>-127~127</td></tr>
</table>

<table>
<tr><td>Servo number</td><td>Angle(Register address)</td><td>Parameter value</td><td>Pulse(Register address)</td><td>Parameter value</td></tr>
<tr><td>01</td><td>0x10</td><td>0~180°</td><td>0x20</td><td>500~2500ms</td></tr>
<tr><td>02</td><td>0x11</td><td>0~180°</td><td>0x21</td><td>500~2500ms</td></tr>
</table>

## Example

### 1. Arduino IDE

Use with JoyC HAT(without servo gripper), please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/RoverC)
Before use, please make sure that the RoverC is fully charged. Charging method: insert M5StickC/M5StickC Plus into the RoverC, and connect the USB cable for charging.Burn the easyloader firmware of JoyC and RoverC with two M5StickC respectively. Insert JoyC and RoverC respectively after burning. After power on, RoverC will display the MAC address name and battery level. At the same time, JoyC will scan for the MAC address of RoverC. Long press the A key of M5StickC on Joyc, and the two will be paired. Left thumbstick controlls forward and back motion, left and right control translation, right thumbstick controls left and right steering.

Independent(with servo gripper) usage [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/RoverC_PRO_Arduino_Alone)
0ppp
### 2. UIFlow

<img src="assets\img\product_pics\hat\roverc_hat\roverC.webp" width="40%" height="30%">

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>GPIO0</td><td>5V</td><td>GND</td></tr>
 <tr><td>RoverC HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C①</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C②</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/roverc-prow-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>
