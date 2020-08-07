# GAMEPAD {docsify-ignore-all}

<el-tag effect="plain">SKU:A004</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/faces_gamepad/face_gamepad.webp"></div>

## Description

**GAMEPAD** is a gamepad panel adapted to FACE_BOTTOM. It contains commonly used up/down/left/right, A/B buttons and start/pause, 8 buttons, adapted to the controller layout of classic game consoles such as FC and GAMEBOY. You can burn the game simulator firmware to load the game freely, or write the game by yourself. The panel integrates **MEGA328** processor, working in slave mode through I2C communication protocol (0x08).

## Product Features

- I2C communication(0X08)
- Adapt to FACE_Bottom
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

- 1x GAMEPAD panel

## Applications

- Gamepad
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
      <td>Up/Down/Left/Right/A/B/Start/Pause</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>38g</td>
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

- [Ateml328P firmware](https://github.com/m5stack/FACES-Firmware/blob/master/GameBoy.ino)

## Schematic

### GAMEBOY

<img src="assets\img\product_pics\core\faces_kit\Faces_gameboy_sch.webp" width="70%">

## Example

### ArduinoIDE

- Click [here to download](https://github.com/m5stack/M5Stack/tree/master/examples/Face/Snake_Gameboy) Arduino example.

### GamePad

If you want to use M5Core to play some classic games, then using GameBoy panel and M5Core will be the perfect solution. All you need to do is upload the game simulator program to M5Core and connect to the GameBoy panel. The connection diagram is as follows:

ESPTool burning game tutorial：https://docs.m5stack.com/#/zh_CN/quick_start/faces/gameboy_burn_a_nes_game

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/Faces_kit/Faces_GameBoy_BladeBuster.exe">Click here to burn the sample game with one click</a>


<script>

   var purchase_link = '';

   var quickstart_link = '';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>