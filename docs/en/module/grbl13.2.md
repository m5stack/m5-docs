# GRBL 13.2

<el-tag effect="plain">SKU:M035</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_01.webp"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_02.webp"></div>

## Description

**GRBL 13.2** is a three-axis stepper motor driver module in the M5Stack stacking module series. It uses an ATmega328P-AU controller with three sets of DRV8825PWPR stepper motor driver chip control ways, which can drive three bipolar steppers at the same time.

Using the I2C communication interface (default address:0x70) and integrated DIP switch for adjusting motor step subdivision (maximum support of 1/32 step subdivision) and I2C address adjustment (support dual address adjustment 0x70, 0x71), You can achieve six-axis control by stacking two **GRBL 13.2** modules.

The power input interface is DC/9-24V, the motor drive current can reach 1.5A, and three sets of limit switch signal interfaces are open, which can be used to connect an external limit switch to realize the motor braking function. Suitable for a variety of stepping motor motion control scenarios, such as printers, robotic arms, etc.

## Product Features

- ATmega328P-AU controller
- Three-axis DRV8825PWPR stepper motor driver
- Drive current up to 1.5A
- Drive bipolar stepper motor
- Maximum 1/32 mode STEP subdivision

## Include

- 1x GRBL 13.2 Module

## Applications

- Printer
- scanner
- Office automation machine
- Factory automation
- robot technology


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specifications</td>
      <td>Parameters</td>
   </tr>
   <tr>
      <td>Motor driver chip</td>
      <td>DRV8825PWPR</td>
   </tr>
   <tr>
      <td>Controller chip</td>
      <td>ATmega328P-AU</td>
   </tr>
   <tr>
      <td>Maximum drive current of single channel</td>
      <td>1.5A</td>
   </tr>
   <tr>
      <td>Support maximum step subdivision</td>
      <td>1/32</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>XT2.54-4P</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>22.5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>42.3g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

  ## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_GRBL13.2.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_GRBL13.2.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/GRBL13.2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press the button to drive the three-axis stepping motor to rotate, when the lock occurs, press the button C to unlock</p>
        </div>
    </div>
</div>

## Related Link

- [DRV8825 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)

## PinMap

<table>
 <tr><td>M5Stack</td><td>GPIO21</td><td>GPIO22</td><td>5V</td><td>GND</td></tr>
 <tr><td>GRBL 13.2</td><td>SDA</td><td>SCL</td><td>VCC</td><td>GND</td></tr>
</table>


## Schematic

<img src="assets/img/product_pics/module/grbl13.2/grbl13.2_sch.webp"/>

<img src="assets/img/product_pics/module/grbl13.2/grbl13.2_03.webp">

## Step subdivision adjustment

<table>
 <tr><td>MODE2</td><td>MODE1</td><td>MODE0</td><td>STEP MODE</td></tr>
 <tr><td>0</td><td>0</td><td>0</td><td>Full step (2-phase excitation) with 71% current</td></tr>
 <tr><td>0</td><td>0</td><td>1</td><td>1/2 step (1-2 phase excitation)</td></tr>
 <tr><td>0</td><td>1</td><td>0</td><td>1/4 step (W1-2 phase excitation)</td></tr>
 <tr><td>0</td><td>1</td><td>1</td><td>1/8 step</td></tr>
 <tr><td>1</td><td>0</td><td>0</td><td>1/16 step</td></tr>
 <tr><td>1</td><td>0</td><td>1</td><td>1/32 step</td></tr>
 <tr><td>1</td><td>1</td><td>0</td><td>1/32 step</td></tr>
 <tr><td>1</td><td>1</td><td>1</td><td>1/32 step</td></tr>
</table>

## I2C address adjustment

<table>
 <tr><td>Switch</td><td>Address</td></tr>
 <tr><td>0</td><td>0x70</td></tr>
 <tr><td>1</td><td>0x71</td></tr>
</table>

## Example

- [Arduino Example Code](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/GRBL13.2)

<script>

   var purchase_link ='https://m5stack.com/products/grbl-module-13-2-stepmotor-driver-drv8825';

   anchor_search(purchase_link);
   scrollFunc();

</script>
