# QWERTY {docsify-ignore-all}

<el-tag effect="plain">SKU:A005</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_keyboard/face_keyboard.webp"></div>

## Description

**QWERTY** is a full-featured keyboard panel adapted to FACE_BOTTOM. There are 35 keys in total, and each key can be multiplexed by combination keys to output different characters. The internal integration **MEGA328** processor, works in slave through I2C communication protocol (0x08) In computer mode, the "sym" and "Fn" function keys are used to switch between upper and lower gears, and the "aA" function key is used to switch between upper and lower case. Click the corresponding function key and the indicator light is always on to activate single-character input. Double-click the indicator light to flash. Activate continuous input and click Resume again.

## Product Features

- I2C communication(0X08)
- Multi-function button multiplexing
- Input status indicator
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

- 1x QWERTY panel

## Applications

- Data Entry
- Human-computer interaction

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication</td>
      <td>I2C(0X08)</td>
   </tr>
   <tr>
      <td>Button</td>
      <td>QWERTY full-featured keyboard</td>
   </tr>
   <tr>
      <td>Input status indicator</td>
      <td>Blue LED *2</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>41g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>58.2mm x 54.2mm x 10.4mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>95mm x 65mm x 25mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_FACES_FactoryTest.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_FACES_FactoryTest.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/FACES.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>This case will run the FACES keyboard input test program by default. Restart the selected program list to switch between different panel test items.</p>
        </div>
    </div>
</div>

## PinMap

**Mega328 ISP** Download interface pin definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Related Link

- [Ateml328P firmware](https://github.com/m5stack/FACES-Firmware/blob/master/KeyBoard.ino)

## Schematic

### Keyboard

<img src="assets\img\product_pics\core\faces_kit\Faces_keyboard_sch.webp" width="70%">


## Example

### ArduinoIDE

- Click [here to download](https://github.com/m5stack/M5Stack/tree/master/examples/Face/KEYBOARD) to get Arduino example.

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5go-iot-starter-kit-stem-education';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>