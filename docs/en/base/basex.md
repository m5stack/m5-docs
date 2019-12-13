# BaseX {docsify-ignore-all}

<img src="assets\img\product_pics\base\basex\basex_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\base\basex\basex_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:🛒**[Purchase](https://m5stack.com/collections/m5-base/products/basex-industrial-board-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Video](#Video)**

## Description

**BaseX** is a special base compatible with LEGO EV3 motor. The structure design is similar to base26, supporting multiple ways of fixation, and an additional LEGO connection base is provided. When building the LEGO structure, Basex can be easily embedded in the work. Basex can be connected to 4-way (RJ11) LEGO motor at the same time, supporting angle / speed reading and control, and perfectly compatible with the original motor functions. In addition, the base provides two servo interfaces, which can directly control the rotation angle of the servo. In order to adapt to different use scenarios, a UART interface (16 / 17) and a GPIO interface (26 / 36) are provided to make access to various sensors more flexible. A 600mah battery is built in the base, which can be charged through the usb-c interface of m5core to extend the endurance. In order to improve the driving ability of the interface, the base is equipped with a DC power socket, which can be powered by an external 9-12v power supply to provide a stable 5V / 2A power supply for the motor.

<img src="assets/img/product_pics/base/basex/basex_05.jpg" width="30%" height="30%">


<img src="assets/img/product_pics/base/basex//basex_03.jpg" width="30%" height="30%"><img src="assets/img/product_pics/base/basex/basex_04.jpg" width="30%" height="30%">

## Feature

-  4-way RJ11 LEGO motor interface (maximum current 2a)
-  2-way servo interface (maximum current 2a)
-  1-way UART
-  1-way GPIO
-  On board DC-DC conversion (9 ~ 12V - > 5V / 2a)
-  Built in 600mAh battery
-  Multiple fixing methods / LEGO hole connection support

## Size and Weight

-  Size：54mm * 54mm * 32mm
-  Weight：64g

## I2C Control instructions

I2C slave address: 0x22
<table>
<tr><td>Motor Number</td><td>Register address</td><td>value</td></tr>
<tr><td>M1</td><td>0X00</td><td>-127~127</td></tr>
<tr><td>M2</td><td>0x01</td><td>-127~127</td></tr>
<tr><td>M3</td><td>0x02</td><td>-127~127</td></tr>
<tr><td>M4</td><td>0x03</td><td>-127~127</td></tr>
</table>

Encoder Read/Write range:+-31 bit data, big end mode for data storage
<table>
<tr><td>Encoder Number</td><td>Register address</td>
<tr><td>E1</td><td>0X20-0x23</td>
<tr><td>E2</td><td>0x24-0x27</td>
<tr><td>E3</td><td>0x28-0x2B</td>
<tr><td>E4</td><td>0x2C-0x2F</td>
</table>

Encoder Read/Write range:0~180°
<table>
<tr><td>Servo Number</td><td>Register address</td><td>value</td></tr>
<tr><td>Servo1</td><td>0X10</td><td>0~180</td></tr>
<tr><td>Servo2</td><td>0x11</td><td>0~180</td></tr>
</table>

## Product

-  1x BaseX
-  1x LEGO base
-  2x M3 * 5mm 304 Stainless steel hexagon socket bolt
-  2x M3 * 32mm 304 Stainless steel hexagon socket bolt
-  1x M3 内六角扳手


## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Base/BaseX.mp4" type="video/mp4">
</video>