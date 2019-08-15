# FACES Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/faces_kit/face_01.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_02.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_03.jpg" width="30%" height="30%" >

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;:bulb:**[Quick Start](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)**&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-core/products/face)**&nbsp;&nbsp;&nbsp;

## Description

**FACES Kit** is a feast of functional panels containing the most commonly used panels and keyboards with **MEGA328** processor inside. Communication protocol through IIC(0x08) as slave mode. With these 7 different panels, it will be very easy to support keyboard interaction with your M5Core.

### GameBoy Keyboard
If your up for some classic video games. GameBoy panel plus M5Core is the perfect combination. All you need to do is to upload an emulator onto the M5Stack and attach the GameBoy panel underneath. This is how it looks:

*Download a gameboy game: https://docs.m5stack.com/#/en/quick_start/faces/gameboy_burn_a_nes_game*

<img src="assets/img/product_pics/core/faces_kit/face_05.jpg">

The other panels are Calculator, Keyboard, Encoder, Joystick, Fingerprint, RFID and QWERTY Keyboard.
### Calculator Keyboard
<img src="assets/img/product_pics/core/faces_kit/calculator.png">

Key string values

<table><tr><th>Key</th><th>AC</th><th>M</th><th>%</th>
<th>÷</th><th>0-9</th><th>X</th><th>-</th><th>+</th><th>=</th>
<th>+/-</th><th>.</th></tr>
<tr><td>Val</td><td>A</td><td>M</td><td>%</td><td>/</td>
<td>0-9</td><td>*</td><td>-</td><td>+</td><td>=</td><td>`</td>
<td>.</td></tr></table>

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


**Notice:**

The newly-produced M5Core replaces the screen with better display performance and higher viewing angle, so it has some compatibility problems with the old Arduino library. When using the old library for screen driving, it will produce reverse color display. You can open the Arduino. The library management option will upgrade your M5Stack library to the latest version (after 0.2.8) to solve this problem.

<img src="assets\img\product_pics\core\basic\lib_01.jpg" width="40%">
<br><br><br>
<img src="assets\img\product_pics\core\basic\lib_02.jpg" width="40%">


## Product Features

- 5V DC power supply
- USB Type-C
- ESP32-based
- Case Material: PC + ABS
- 16 MByte flash(old：4 MByte flash)
- BMM150 + MPU6886
- Speaker, 3 Buttons, LCD(320*240), 1 Reset
- 2.4G Antenna: Proant 440
- TF card slot (16G Maximum size)
- Battery Socket & 650 mAh Lipo Battery
- Extendable Pins & Holes
- Grove Port
- M-Bus Socket & Pins
- Development Platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)
- Product Size：108.2mm x 54.2mm x 18.7mm
- Product weight：264.6g

## Include

- 1x GRAY M5Stack Controller(M5Core)
- 1x FACES Charger table
- 1x FACES sling
- 1x panel sticker
- 3x FACES Keyboard(GameBoy, Calculator, QWERTY)
- 10x Femal-male dupont
- 6x M3x10 screw
- 1x hexagon screw key
- 1x Type-C USB

<img src="assets/img/product_pics/core/faces_kit/faces_kit.png">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/Faces_kit/EasyLoader_Faces_kit.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)Before burning firmware for Faces, please click "Erase" for a memory erase.

## PinMap

**Mega328 ISP** Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

### Related Link

-  **Datasheet** 

    - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
    - [MPU6886](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MPU-6886-000193%2Bv1.1_GHIC.PDF.pdf)
    - [BMM150](http://pdf1.alldatasheet.com/datasheet-pdf/view/608913/ETC2/BMM150.html)
    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)

- **Register Manual** 

    - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)


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





**<mark>Notice1：M5PORT EXPLAIN</mark>**<br>
You can identify the port name and function by its color, red is PortA(21/22) mainly used for I2C, black is PortB(26/36) which can be used for DA/AD, Single-bus communication, Blue is PortC(16/17) which can be used for Uart. Correspondingly, most of the M5 Units have the Port with matched color to specify which port it should go in on the M5Core. 
Those port identifications are a convenience for UIFlow (Blockly) users. For advanced users ,you can do your own customization, since most of the PIN on ESP32 are remap-able.
Unfortunatly, PortA(red) can not be used as analog read in. It refers to GPIO 21 & 22 from ESP32, which doesn't have AD channel alternatives: 

- ADC1(8 channels atteched to GPIOs 32-39)
- ADC2(10 channels atteched to GPIOs 0，2，4，12-15，25-27)

To use AD read function : 
1, Use Dupont cable refers to the pins on the side which can be used as an AD channel.
2, Get a M5GO bottom, which comes with a PortB.
3, Get a PbHUB and connect it with PortA, then you can have 6 PortBs.
For more information about Pin assignment and Pin Remapping, Please refer to EPS32 Datasheet
<br>
**<mark>Notice3：Face Kit factory test code</mark>**<br>
The error message displayed on the screen, is actually normal, it doesn't mean something wrong with the hardware, it means that the main.py file is missing, but you can add your own, don't worry. <br>
<img src="assets/img/product_pics/core/faces_kit/faces_kit_06.png" width="30%" hight="30%"> 


## User Work
- **[2048 Game with FACES Kit- Video](https://www.youtube.com/watch?v=ccEq0s7dU84)**
- **[2048 Game with FACES Kit- Source Code](https://github.com/phillowcompiler/2048_M5Stack)**
- **[Faces Calculator in UiFlow- Video](https://www.youtube.com/watch?v=wdUhuLuq6kM&t=223s)**
