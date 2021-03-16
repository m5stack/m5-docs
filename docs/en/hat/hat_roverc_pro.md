# RoverC-Pro

<el-tag effect="plain">SKU:K036-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/roverc_pro_hat/roverc_pro.webp"></div>

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

- 1x RoverC base(includes 16340(700mAh) Battery)
- 1x Claw Kit

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
            <td>x1</td>
            <td>/</td>
        </tr>
        <tr>
            <td>Servo Ext Port</td>
            <td>x2</td>
            <td>/</td>
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


## Example

?>1: This case uses RoverC and JoyC to realize wireless control through UDP communication. Please select the corresponding case program below according to the equipment you are using.

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC/tree/master/examples/KIT/JoyC_%26_RoverC'><el-tag>M5StickC</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC-Plus/tree/master/examples/KIT/JoyC_%26_RoverC'><el-tag>M5StickC Plus</el-tag></a>
   </div>
</el-card>

- Note: Before use, please make sure that the roverc is fully charged. Charging method: insert m5stickc into the roverc, and connect the USB cable for charging.
Burn the easyloader firmware of Joyc and roverc with two M5StickC respectively. Insert Joyc and roverc respectively after burning. After power on, roverc will display the MAC address name and battery power. At the same time, Joyc will scan the MAC address name of roverc. Long press the a key of M5StickC on Joyc, and the work will be matched. Left rocker up and down control front and back, left and right control translation, right rocker left and right control steering.

?>2: This case is a RoverC stand-alone control program, which is directly controlled by the main controller. Please select the corresponding case program below according to the equipment you are using.

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC/tree/master/examples/Hat/RoverC'><el-tag>M5StickC</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC-Plus/blob/master/examples/Hat/RoverC_PRO/RoverC_PRO_Arduino_Alone/RoverC_PRO_Arduino_Alone.ino'><el-tag>M5StickC Plus</el-tag></a>
   </div>
</el-card>

## Protocol

- Protocol type I2C
- I2C Address: **0x38**                                       

```clike
/*--------------------------------------------------------------------------------------------------*/
| ROVERC_MOTOR_REG       | 0x00-0x03
| ------------------------------------------------------------------------------------------------
| motor_1_reg[0]  |  R/W  |  Motor1 Speed value(-127~127)
| motor_2_reg[1]  |  R/W  |  Motor2 Speed value(-127~127)
| motor_3_reg[2]  |  R/W  |  Motor3 Speed value(-127~127)
| motor_4_reg[3]  |  R/W  |  Motor4 Speed value(-127~127)
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| ROVERC_SERVO_ANGLE_REG       | 0x10-0x11
| ------------------------------------------------------------------------------------------------
| servo_1_reg[0]  |  R/W  |  SERVO1 Angle value(0-180)
| servo_2_reg[1]  |  R/W  |  SERVO2 Angle value(0-180)
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| ROVERC_SERVO_PULSE_REG       | 0x20-0x23
| ------------------------------------------------------------------------------------------------
| servo_1_pulse_reg[0]  |  R/W  |  SERVO1 PULSE H value
| servo_1_pulse_reg[1]  |  R/W  |  SERVO1 PULSE L value
| servo_2_pulse_reg[2]  |  R/W  |  SERVO2 PULSE H value
| servo_2_pulse_reg[3]  |  R/W  |  SERVO2 PULSE L value      (pulse value:500-2500us)
/*----------------------------------------------------------------------------------------------------

```

### 2. UIFlow

<img src="assets\img\product_pics\hat\roverc_hat\roverC.webp" width="60%" height="60%">

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
