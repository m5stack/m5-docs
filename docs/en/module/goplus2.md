# GoPlus2

<el-tag effect="plain">SKU:</el-tag>

<div class="product_pic"><img src=""></div>

## Description

**GoPlus2**  is a stackable multi-functional motor and servo control module. The master control adopts STM32F030C8T6. The module is equipped with 2-way DC motor drive interface and 4-way servo drive interface. Three PORT-B interfaces can be expanded to support infrared (IR) transmission and receive. In order to meet the requirements of multi-channel interface power supply at the same time, a DC power interface is provided for external power supply.

Communication protocol: IIC

### Product Features

-  2x DC motor interface
-  4x Servo interface
-  IR transmit & receive
-  3x expand PORT B
-  STM32F030C8T6

### Include

-  1x GoPlus2 Module

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Main control chip</td>
      <td>STM32F030C8T6</td>
   </tr>
   <tr>
      <td>Expand interface</td>
      <td>PORT-B x 3</td>
   </tr>
   <tr>
      <td>motor drive</td>
      <td>HR8833 H-bridge drive</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>43g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54*54*13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="">Windows</a>
            <a href="">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p></p>
        </div>
    </div>
</div>


## Schematic

<img src="">

## PinMap

## M-Bus Pin

<img src="assets\img\product_pics\module\module_bus.webp"/>

## Related Link

- Protocol Manual 
    - **[I2C Protocol](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/GoPlus_I2C_Protocol%20operation%20instructions.pdf)**

## Example

### Arduino

To get example code ,please [click here to download](https://github.com/m5stack/GoPlus/tree/master/test)

<img src="assets/img/product_pics/module/goplus/goplus_p5.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/goplus-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>