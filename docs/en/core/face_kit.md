# FACES Kit

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K005</div>

<div class="product_pic"><img src="assets/img/product_pics/core/faces_kit/face_01.webp"><img src="assets/img/product_pics/core/faces_kit/face_02.jpg"></div>

## Description

**FACES Kit** is a feast of functional panels containing the most commonly used panels and keyboards with **MEGA328** processor inside. Communication protocol through IIC(0x08) as slave mode. With these 7 different panels, it will be very easy to support keyboard interaction with your M5Core.

### GameBoy Keyboard
If your up for some classic video games. GameBoy panel plus M5Core is the perfect combination. All you need to do is to upload an emulator onto the M5Stack and attach the GameBoy panel underneath. This is how it looks:

*Download a gameboy game: https://docs.m5stack.com/#/en/quick_start/faces/gameboy_burn_a_nes_game*

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/Faces_kit/Faces_GameBoy_BladeBuster.exe">Click here to download the one-click writer of the case game program </a>

<img src="assets/img/product_pics/core/faces_kit/face_05.jpg">

The other panels are Calculator, Keyboard, Encoder, Joystick, Fingerprint, RFID and QWERTY Keyboard.

<mark>To reduce the difficulty of disassembly when removing the replacement panel, it is recommended to remove the M5Core and then disassemble the panel.</mark>


## Product Features

- ESP32-based
- Built in 6-axis IMU
- Speaker, 3 Buttons, LCD
- TF card slot (16G Maximum size)
- Battery Socket & Lipo Battery
- Replaceable multifunction panel
- Extendable Pins & Holes
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


## Include

- 1x GRAY
- 1x FACES Charger table
- 1x FACES sling
- 1x panel sticker
- 3x FACES Keyboard(GameBoy, Calculator, QWERTY)
- 10x Femal-male dupont
- 6x M3x10 screw
- 1x hexagon screw key
- 1x Type-C USB(100cm)

## Applications

- Gameboy
- Calculator
- Input peripherals
- Internet of things terminal controller
- DIY creation


### Calculator Keyboard
<img src="assets/img/product_pics/core/faces_kit/calculator.png">

Key string values

<table class="table-1">
    <thead>
    <tr>
        <th>Key</th>
        <th>AC</th>
        <th>M</th>
        <th>%</th>
        <th>÷</th>
        <th>0-9</th>
        <th>X</th>
        <th>-</th>
        <th>+</th>
        <th>=</th>
        <th>+/-</th>
        <th>.</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Val</td>
            <td>A</td>
            <td>M</td>
            <td>%</td>
            <td>/</td>
            <td>0-9</td>
            <td>*</td>
            <td>-</td>
            <td>+</td>
            <td>=</td>
            <td>`</td>
            <td>.</td>
        </tr>
    </tbody>
</table>


<table class="table-1">
      <thead>
        <tr>
         <th>ESP32 Chip</th>
         <th>GPIO23</th>
         <th>GPIO19</th>
         <th>GPIO18</th>
         <th>GPIO14</th>
         <th>GPIO27</th>
         <th>GPIO33</th>
         <th>GPIO32</th>
         <th>GPIO4</th>
        </tr>
      </thead>
      <tbody>
         <tr>
            <td>ILI9342C</td>
            <td>MOSI/MISO</td>
            <td>/</td>
            <td>CLK</td>
            <td>CS</td>
            <td>DC</td>
            <td>RST</td>
            <td>BL</td>
            <td> </td>
         </tr>
         <tr>
            <td>TF Card</td>
            <td>MOSI</td>
            <td>MISO</td>
            <td>CLK</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>CS</td>
         </tr>
    </tbody>
</table>



Key Int Values (Int values are the ASCII value of each key)

<table><tr><th>Key</th><th>AC</th><th>M</th><th>%</th>
<th>÷</th><th>0-9</th><th>X</th><th>-</th><th>+</th><th>=</th>
<th>+/-</th><th>.</th></tr>

<tr><td>Val</td><td>65</td><td>77</td><td>37</td><td>47
</td><td>48-57</td><td>42</td><td>45</td><td>43</td>
<td>61</td><td>96</td><td>46</td></tr></table>

### QWERTY Keyboard

<img src="assets/img/product_pics/core/faces_kit/face_04.jpg">

### FACE Charger
Other than 3 functional panels, this development kit comes with more stuff like a charging base with Magnet and POGO pin connector.

<img src="assets/img/product_pics/core/faces_kit/charger.png">

*For more information on M5Stack series development board, please check the **Gray Kit***


<img src="assets/img/product_pics/core/faces_kit/faces_kit.png">


## PARAMETER

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash Memory</td>
      <td>16MB</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Port</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>IPS Screen</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342C</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
    <tr>
      <td>Button</td>
      <td>Custom button x 1</td>
   </tr>
   <tr>
      <td>Core bottom port</td>
      <td>PIN (G1，G2，G3，G16, G17, G18, G19, G21, G22, G23, G25, G26, G35, G36)</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>BMM150 + MPU6886</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>500 mAh @ 3.7V</td>
   </tr>
   <tr>
      <td>Operating Temperature </td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>108.2 x 54.2 x 18.7mm</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>264.6g</td>
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
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_FACES_FactoryTest.exe">Windows</a>
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

## Version Change

<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Release Date</th>
            <th>Product Change</th>
        </tr>
        </thead>    
        <tbody>
        <tr>
            <td>2017.12</td>
            <td>Initial public release</td>
        </tr>
        <tr>
            <td>2019.6</td>
            <td>MPU9250 changed to MPU6886+BMM150</td>
        </tr>
        <tr>
            <td>2019.7</td>
            <td>TN screen changed to IPS screen</td>
        </tr>
        <tbody>
    </table>
</div>

## PinMap

**Mega328 ISP** Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## Schematic

- [Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/M5-Core-Schematic(20171206).pdf)

### Related Link

-  **Datasheet** 

    - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [BMM150](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)

- **Register Manual** 

    - [IP5306](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/IIC_IP5306_REG_V1.4_cn.pdf)

**IP5306 charging/discharging，Voltage parameter**

<table>
   <tr style="font-weight:bold;text-align:center" >
      <td>charging</td>
      <td><td>
      <td>discharging</td>
   </tr>
   <tr>
      <td>0.00 ~ 3.40V -> 0%</td>
      <td><td>
      <td>4.20 ~ 4.07V -> 100%</td>
   </tr>
   <tr>
      <td>3.40 ~ 3.61V -> 25%</td>
      <td><td>
      <td>4.07 ~ 3.81V -> 75%</td>
   </tr>
   <tr>
      <td>3.61 ~ 3.88V -> 50%</td>
      <td><td>
      <td>3.81 ~ 3.55V -> 50%</td>
   </tr>
   <tr>
      <td>3.88 ~ 4.12V -> 75%</td>
      <td><td>
      <td>3.55 ~ 3.33V -> 25%</td>
   </tr>
   <tr>
      <td>4.12 ~   /   -> 100%</td>
      <td><td>
      <td>3.33 ~ 0.00V -> 0%</td>
   </tr>
</table>


## M5PORT EXPLAIN

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>Note:</th>
      </thead>
      <tbody>
      <tr>
         <td>PORT-A(Red)</td>
         <td>G21/22</td>
         <td>I2C</td>
      </tr>
      <tr>
         <td>PORT-B(Black)</td>
         <td>G26/36</td>
         <td>DAC/ADC</td>
      </tr>
      <tr>
         <td>PORT-C(Blue)</td>
         <td>G16/17</td>
         <td>UART</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC

<table>
      <thead>
         <th>ADC1</th>
         <th>ADC2</th>
         <th>DAC1</th>
         <th>DAC2</th>
      </thead>
      <tbody>
      <tr>
         <td>8 channels</td>
         <td>10 channels</td>
         <td>2 channels</td>
         <td>2 channels</td>  
      </tr>
      <tr>
         <td>G32-39</td>
         <td>G0/2/4/12-15/25-27</td>
         <td>G25</td>
         <td>G26</td>
      </tr>
    </tbody>
</table>

For more information about Pin assignment and Pin Remapping, Please refer to [ESP32 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)


## Example

- Click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES) to download Arduino code

<br>
**<mark>Notice3：Face Kit factory test code</mark>**<br>
The error message displayed on the screen, is actually normal, it doesn't mean something wrong with the hardware, it means that the main.py file is missing, but you can add your own, don't worry. <br>
<img src="assets/img/product_pics/core/faces_kit/faces_kit_06.png" width="30%" hight="30%"> 

## User Work
- **[2048 Game with FACES Kit- Video](https://www.youtube.com/watch?v=ccEq0s7dU84)**
- **[2048 Game with FACES Kit- Source Code](https://github.com/phillowcompiler/2048_M5Stack)**
- **[Faces Calculator in UiFlow- Video](https://www.youtube.com/watch?v=wdUhuLuq6kM&t=223s)**

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/face';
   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/m5core/m5stack_core_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>