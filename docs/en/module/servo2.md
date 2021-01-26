# Module SERVO 2

<el-tag effect="plain">SKU:M014-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/servo2/servo2.webp"></div>

##  Description

**SERVO 2** is an updated servo driver module in the M5Stack stackable module series. It uses a PCA9685 16 channel PWM controller to control 16 channel servos at the same time. The power input is 6-12V DC and two SY8368AQQC chips are used for voltage reduction.

The maximum total power output of dual channel is 35W (5V / 3.5A * 2), and the maximum output power of single channel is 25W (5V / 5A). When the battery base is used for power supply, the maximum output power is 5V / 2A. The module communicates with the host directly through I2C (the default address is 0x40) however the I2C address can be changed(0x40 - 0x47) through the dial switch. This also means that multiple Servo 2 modules can be stacked and used simultaneously. There is a power switch on the board to control the power supply of Servo 2.


>The module must use the external power supply of DC interface when driving the servo. When using the AXP192 power management chip's main control (such as CORE2), the M-BUS power mode needs to be configured as input when the program is initialized.

## Product Features

- 16x actuator drive channel
- 2X power indicator
- I2C address adjustable
- External DC power supply input: 6-12V
- DC connector type: XT60

## Include

-  1x Servo2 Module
-  1x XT60 power cable(11.5cm)

## Applications

- Humanoid robot
- Bionic multi joint robot
- 3-axis steering gear pan tilt

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>60g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_Servo2.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_Servo2.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/Servo2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Control servo rotation.</p>
        </div>
    </div>
</div>

## Schematic

<img src="assets/img/product_pics/module/servo2/servo2_sch.webp">

## Related Link

- **[PCA9685](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/PCA9685.pdf)**

## Example

### 1. Arduino IDE

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO2)


<script>

   var purchase_link = 'https://m5stack.com/collections/m5stack-new-arrival/products/servo2-module-16-channels-13-2-pca9685';

   anchor_search(purchase_link);
   scrollFunc();

</script>