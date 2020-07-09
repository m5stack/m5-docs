# BUTTERFLY

<el-tag effect="plain">SKU:A041-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/app/butterfly/butterfly_01.webp"><img src="assets/img/product_pics/app/butterfly/butterfly_02.webp"></div>

## Description

**BUTTERFLY** This is an upgrade of old Butterfly. In comparison, this new launcher has packed with a microprocessor MEGA328 and 18 RGB LEDs. It also has a Lipo battery assembly onto the device, plus two ports for power, serial communication, and connection.  One standout feather is that you can have many devices connected in serial, and control them independently. Therefore you can create a very nice effect. 
<br><br>
<img src="assets/img/product_pics/app/butterfly/5.webp"  height="300px">
<br><br>
The mechanism of series communication:  the devices are connected in series. to identified a certain device and to sent an instruction to a certain device, we will attach an 'id' variable with the command, which will be sent from the controller(M5 core) to the serial connection, in this process, the 'id' variable will minus 1 by each device at each time when the command passes through the line. The device that got id = 0,  will execute the command. 
<br><br>
So, 
1, Each of them can be controlled independently, they are allowed to constrain the led color, blink mode, brightness and servo status which is used to launch the butterflies.
2,  As we can see from the video below, from LED demonstration, the delay is obvious, if there is a 100ms delay for every device, and we have 10 in total the last device will have a 1s delay. To optimate this delay, we could program the first device to wait for the last device. However, based on the protocol, a delay will exist no matter what.
<br><br><br>
<img src="assets/img/product_pics/app/butterfly/butterfly_03.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/butterfly_04.webp" width="30%" height="30%">

## Product Features

- Serial extendable
- 18x RGB LED
- UART serial communication
- UIflow (graphic/blockly language allowed) 

## Include

- BUTTERFLY Launcher
- Butterfly paper model
- Cable
- Rubber band 

## Applications

- Fashion Tech
- Stem Education

## Specification
   
<table class="table-1">
    <thead>
      <tr>
         <th>Resources</th>
         <th>Parameter</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td> Battery capacity </td>
            <td> 120mA </td>
        </tr>
        <tr>
            <td> RGB LED </td>
            <td> x 18 </td>
        </tr>
        <tr>
            <td> Communication method </td>
            <td> UART </td>
        </tr>
        <tr>
            <td>net weight</td>
            <td>68g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>68g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>45*35*32mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>110*110*30mm</td>
        </tr>
    </tbody>
</table>


## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Example

### 1. Arduino IDE

Please click，[here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/butterfly) to download code

## Assembly-Steps

### Button Function (see from LED side)

- Right: single- press to power on, double press to power off.
- Left: long-press until the led cricle changed to another color, release the button. Then short press it will adjust the servo arm. repeat the above the process to get the right position.

### Load Butterfly Pattern

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/Butterfly/butterfly_assembly_steps.mp4" type="video/mp4" >
</video>

### Power up the system(if you want connect more than 10)
<br><br>
<img src="assets/img/product_pics/app/butterfly/6.webp" width="30%" height="30%">
<br><br><br>
*Notice:*<br> 
1) Add a power supply at the end of the line, either with (grove 2 usbA cable + power bank) or (wall plug)<br>
2) grove 2 usbA cable <br>
3) wall plug with GROVE male port 

*recommended step:* <br>
1) wire up the devices with m5go at beginning and additional power supply at end.   
2) use the uiflow test code to test the line make sure every units is working normally.    
3) use the button on the device to load the butterfly.  
4) Program the button on M5GO to launch the butteryfly         

## Developement Environment Set-up

Regarding the coding, We have encapsulated a specific Block on UIFLow. so that you can program your project as easy as possible. 
I will show you how to set up the develope environment on UIflow<br>
1, Navigate to Custom, click open *m5d <br>
2, Choose butterfly.m5d <br>
3, Unfold Custom, there appears the butterfly program block. <br><br><br>
<img src="assets/img/product_pics/app/butterfly/1.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/2.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/3.webp" width="30%" height="30%">
<img src="assets/img/product_pics/app/butterfly/4.webp" width="30%" height="30%">

## Video

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/Butterfly/butterfly.mp4" type="video/mp4" >
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/butterfly-launcher';

   anchor_search(purchase_link);
   scrollFunc();

</script>