# JOYSTICK

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U024</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_joystick_01.webp"></div>

## Description

**JOYSTICK**,  we have two types of JOYSTICKs one is build on a panle compatible with FACES Kit, this is the M5Unit version of **JOYSTICK**

JOYSTICK is very similar to the 'analog' joystick on PS2 (PlayStation 2) controllers. The X and Y axes are two 10k potentiometers which control 2D movement by generating analog signals. The joystick also has a push button that could be used for special applications. Therefore, the entire Unit can output X-Y motion signals in both directions and Z direction.

As designed in the schematic, the Joystick X dimension is connected to pin A0 of MEGA328, the Joystick Y dimension is connected to pin A1 on MEGA328, the Joystick Z dimension is connected to pin A2 on MEGA328.

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_02.webp" width="50%" height="50%">

This Unit communicates with the M5Core via the GROVE A interface. It's I2C address is 0x52. By reading the data transferred from JOSTICK, you can obtain the motion information of JOYSTICK.

## Product Features

-  Output value of X, Y direction: 10 ~ 250
-  Output value of Z direction is (0: released; 1: pressed)
-  Software Development Platform : Arduino, UIFlow(Blockly, Python)
-  Two Lego-compatible holes

## Include

- 1x JOYSTICK Unit
- 1x Grove Cable

## Applications

- Game Controller
- Robot remote control


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>X、Y Axis output value range</td>
      <td>10-250</td>
   </tr>
   <tr>
      <td>Z Axis output value range</td>
      <td>0-1</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>11g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>27g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*32mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>75*45*30mm</td>
   </tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Joystick_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Joystick_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Joystick_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Show joystick XY data and button status.</p>
        </div>
    </div>
</div>

## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>JOYSTICK Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/unit/joystick_sch.webp">

## Example

### 1. Arduino IDE

The code below is incomplete(just for usage).To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/JOYSTICK)

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_04.webp">

### 2. UIFlow

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_03.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/joystick-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>