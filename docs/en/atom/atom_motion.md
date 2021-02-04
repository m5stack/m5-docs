# ATOM Motion

<el-tag effect="plain">SKU:K053</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_01.webp"><img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_02.webp"></div>

## Description

**ATOM Motion** is a steering gear & DC motor drive base designed for the ATOM device series. It has an integrated STM32 control chip with an I2C communication control mode suitable for device communication. The base includes 4-channel steering gear and 2-channel DC motor interface. Integrated 16340 lithium battery (with capacity of 700mAh). Two-way HY2.0-4P interface expansion and 4 LED out pins which can be used to connect some sensors and expansion equipment. Suitable for multi-steering gear/motor control scenarios, such as multi-axis steering gear manipulator control or trolley motor drive.

## Product Features

- 4 channel servo control
- 2 channel DC motor control
- Removable lithium battery
- Magnetic back design
- Independent power switch
- 2 way HY2.0-4P expansion interface

## Include

- 1x ATOM Lite
- 1x ATOM Motion
- 1x M2 screw driver
- 1x M2*8 cup head screws
- 1x TYPE-C USB Cable（20cm)

## Applications

- DC motor trolley control
- Steering gear arm control

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Specification</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Removable lithium battery</td>
            <td>Specification: 16340, capacity 700mAh</td>
        </tr>
        <tr>
            <td>Interface PIN spacing</td>
            <td>2.54mm</td>
        </tr>
        <tr>
            <td>Net weight</td>
            <td>40g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>77.1g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>24*72*21mm</td>
        </tr>
        <tr>
            <td>Package dimensions<</td>
            <td>95 x 65 x 25mm</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a simple and fast program burner, which has a built-in product-related case program, which can be burned to the main control through simple steps to perform a series of functional verification.


<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_Motion.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_Motion.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_MOTION.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Control the rotation of 4 steering gears and 2 DC motors, press the ATOM center button to switch the direction of the DC motor rotation</p>
        </div>
    </div>
</div>

## PinMap

- I2C Interface

<table>
 <tr><td>ATOM</td><td>G21</td><td>G25</td></tr>
 <tr><td>ATOM Motion</td><td>SCL</td><td>SDA</td></tr>
</table>

- HY2.0-4P

<table>
 <tr><td>ATOM</td><td>G23、G33</td><td>G22、G19</td></tr>
 <tr><td>ATOM Motion</td><td>PORT-B(Black)</td><td>PORT-C(Blue)</td></tr>
</table>

## I2C register

- I2C Address: **0x38**                                       

<table>
 <tr><td>Function</td><td>Reg Address</td><td>Data Range</td><td>R/W</td></tr>
 <tr><td>Servo(1~4)</td><td>0x00~0x03</td><td>angle: 0-180</td><td>R/W</td></tr>
 <tr><td>Servo(1~4)</td><td>0x10、0x12、0x14、0x16</td><td>pulse: 500-2500</td><td>R/W</td></tr>
 <tr><td>Motor(1~2)</td><td>0x20~0x21</td><td>speed: -127-127</td><td>R/W</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_sch.webp">

## Example

- [Arduino Example Code](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Motion)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-motion-kit-with-motor-and-servo-driver-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>

