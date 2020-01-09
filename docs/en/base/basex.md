# BaseX {docsify-ignore-all}

<img src="assets\img\product_pics\base\basex\basex_01.webp" width="30%" height="30%"><img src="assets\img\product_pics\base\basex\basex_02.webp" width="30%" height="30%"><img src="assets/img/product_pics/base/basex/basex_03.webp" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:🛒**[Purchase](https://m5stack.com/collections/m5-base/products/basex)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Video](#Video)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**BaseX** is a special base compatible with LEGO EV3 motor. The structure design is similar to base26, supporting multiple ways of fixation, and an additional LEGO connection base is provided. When building the LEGO structure, Basex can be easily embedded in the work. Basex can be connected to 4-way (RJ11) LEGO motor at the same time, supporting angle / speed reading and control, and perfectly compatible with the original motor functions. In addition, the base provides two servo interfaces, which can directly control the rotation angle of the servo.There is a motherboard PDM microphone for sound collection. In order to adapt to different use scenarios, a UART interface (16 / 17) and a GPIO interface (26 / 36) are provided to make access to various sensors more flexible. A 900mah battery is built in the base, which can be charged through the usb-c interface of m5core to extend the endurance. In order to improve the driving ability of the interface, the base is equipped with a DC power socket, which can be powered by an external 9-12v power supply to provide a stable power supply for the motor.

<img src="assets/img/product_pics/base/basex/basex_04.webp" width="30%" height="30%">

## Feature

-  4-way RJ11 LEGO motor interface (total maximum output current 2A)
-  2-way servo interface (total maximum output current 2A)
-  1-way UART
-  1-way GPIO
-  On board PDM microphone (GOIO 34)
-  On board DC-DC conversion (9 ~ 12V,independent power supply for the motor only)
-  Built in 900mAh battery
-  Multiple fixing methods / LEGO hole connection support

## Size and Weight

-  Size：54mm * 54mm * 32mm
-  Weight：64g

## Application

- Encoder motor / servo controller
- LEGO DIY intelligent control

## I2C Control instructions

I2C Slave address: 0x22
<table>
<tr><td>Function</td><td>Register address</td><td>Value</td></tr>
<tr><td>SERVO1_ANGLE_ADDR</td><td>0X00</td><td> 0~180</td></tr>
<tr><td>SERVO2_ANGLE_ADDR</td><td>0x01</td><td> 0~180</td></tr>
<tr><td>SERVO1_PULSE_ADDR</td><td>0x10</td><td>(uint16_t) 500~2500</td></tr>
<tr><td>SERVO2_PULSE_ADDR</td><td>0x12</td><td>(uint16_t)500~2500</td></tr>
<tr><td>MOTOR1_PWM_DUTY_ADDR</td><td>0x20</td><td> -127~127</td></tr>
<tr><td>MOTOR2_PWM_DUTY_ADDR</td><td>0x21</td><td> -127~127</td></tr>
<tr><td>MOTOR3_PWM_DUTY_ADDR</td><td>0x22</td><td> -127~127</td></tr>
<tr><td>MOTOR4_PWM_DUTY_ADDR</td><td>0x23</td><td> -127~127</td></tr>
<tr><td>MOTOR1_ENCODER_ADDR</td><td>0x30</td><td> int32_t</td></tr>
<tr><td>MOTOR2_ENCODER_ADDR</td><td>0x34</td><td> int32_t</td></tr>
<tr><td>MOTOR3_ENCODER_ADDR</td><td>0x38</td><td> int32_t</td></tr>
<tr><td>MOTOR4_ENCODER_ADDR</td><td>0x3C</td><td> int32_t</td></tr>
<tr><td>MOTOR1_SPEED_ADDR</td><td>0x40</td><td> -127~127</td></tr>
<tr><td>MOTOR2_SPEED_ADDR</td><td>0x41</td><td> -127~127</td></tr>
<tr><td>MOTOR3_SPEED_ADDR</td><td>0x42</td><td> -127~127</td></tr>
<tr><td>MOTOR4_SPEED_ADDR</td><td>0x43</td><td> -127~127</td></tr>
</table>

I2C Motor address: 
<table>
<tr><td>Motor number</td><td>Motor Address</td></tr>
<tr><td>MOTOR1</td><td>0x50</td></tr>
<tr><td>MOTOR2</td><td>0x60</td></tr>
<tr><td>MOTOR3</td><td>0x70</td></tr>
<tr><td>MOTOR4</td><td>0x80</td></tr>
</table>

Mode config method: Motor address + nByte
<table>
<tr><td>Byte</td><td>Value</td></tr>
<tr><td>0</td><td>Run mode</td></tr>
<tr><td>1</td><td>position-p(3)</td></tr>
<tr><td>2</td><td>position-i(1)</td></tr>
<tr><td>3</td><td>position-d(15)</td></tr>
<tr><td>4|5|6|7</td><td>position-point(Low effective)</td></tr>
<tr><td>8</td><td>position-max-speed</td></tr>
<tr><td>9</td><td>speed-p</td></tr>
<tr><td>10</td><td>speed-i</td></tr>
<tr><td>11</td><td>speed-d</td></tr>
<tr><td>12</td><td>speed-point</td></tr>
</table>
<table>
<tr><td>Motor run mode</td><td>Value</td>
<tr><td>Normal</td><td>0X00</td>
<tr><td>Position</td><td>0x01</td>
<tr><td>Encoder</td><td>0x02</td>
</table>

## Product

-  1x BaseX
-  1x LEGO base
-  2x M3 * 5mm 304 Stainless steel hexagon socket bolt
-  2x M3 * 32mm 304 Stainless steel hexagon socket bolt
-  1x M3 wrench

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Base/EasyLoader_BaseX.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1. EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. This can be burned to the M5 device through simple steps, and a series of function verifications can be performed.

>After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 115200 or 750000**)

?>3. Currently EasyLoader is only available for Windows operating system,  Before installing and using the Easyloader for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/BaseX)*

### 2. UIFlow

*To get complete code, please click， [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BASEX/UIFlow).*

<img src="assets/img/product_pics/base/basex/basex.png">

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Base/BaseX.mp4" type="video/mp4">
</video>