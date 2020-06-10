# PowerC HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U081</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\PowerC_hat\powerC_01.webp"><img src="assets\img\product_pics\hat\PowerC_hat\powerC_02.webp"></div>

## Description

**PowerC HAT** is a charging module specially designed for m5stickc, with built-in ip3005 high-precision lithium battery protection IC and ip5209 power management IC. It uses I2C communication protocol to carry out data transmission with m5stickc of the host computer, and can check the voltage, current and other information through programming. The back battery seat of the module can be installed with two 16340 batteries, which can be charged by the charging module, and can also be used as a charging treasure to provide external power through the battery In addition, the module provides an I2C interface for connecting I2C peripherals, a typec interface for power input, a usb-a bus for power output, with a voltage output of 5V / 1.5A and an input voltage of 5V. The module is equipped with an independent switch, which can be opened once and closed twice.

<img src="assets\img\product_pics\hat\PowerC_hat\powerC_04.webp" width="30%">

## Product Features

- Battery testing
- Mobile power bank
- Battery charger
- IIC Address 0x75

## Include

- 1x PowerC HAT(include battery 2 * 700mAh)

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>55g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>68g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>55*35*25mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>100*96*70mm</td>
   </tr>
 </table>

## Communication protocol

<mark>IP5209 I2C address: 0x75</mark>

## Links

- **[IP5209 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/IP5209.pdf)**
- **[IP3005 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/IP3005-INJOINIC.pdf)**


### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PowerC</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
<tr><td>PortA</td><td>YELLO</td><td>WHITE</td><td>RED</td><td>BLACK</td></tr>
</table>

## Example

### 1. Arduino

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/PowerC/PowerC)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/PowerC/UIFlow)

<img src="assets\img\product_pics\hat\PowerC_hat\PowerC.webp" width="80%">

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_PowerC_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_PowerC_HAT_0x1000.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PowerC_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description::</p>
            <p>Check the current base battery voltage and power information</p>
        </div>
    </div>
</div>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-powerc';

   anchor_search(purchase_link);
   scrollFunc();

</script>