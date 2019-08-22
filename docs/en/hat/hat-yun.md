# YUN HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_01.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_02.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_03.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/m5stickc-ncir-hatmlx90614)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**YUN HAT** is a cloud-shaped multi-function environment information acquisition base. Built-in temperature and humidity sensor **SHT20**, air pressure sensor **BMP280**, photoresistor. 14 RGB LEDs. Embedded** STM32F030F4** control chip, providing a simple and efficient program call interface. Exquisite design appearance, accurate data acquisition of accurate environment and a certain decorative effect.

The base is designed for the M5StickC, and the same number of pins and spaces can be perfectly inserted into the expansion port on the top of the M5StickC. The overall structure adopts a three-layer design, and the upper and lower PCB boards serve as fixed structure and main circuit respectively, which is beneficial to the circuit. For long hours of work, the board also provides an independent external power interface. The middle layer is a light-guided acrylic component, which does not achieve a better light display effect. The acrylic outer contour cutting surface is partially polished, and the purpose is to program the control light. Effectively reduce the scattering of light, making it evenly saturated with light effects. One hook hole and two 6*4mm magnet mounting positions are reserved on the board, so users can easily install it in any corner of life.

<br>

## Product Features

- Compatible with M5StickC
- Control chip **STM32F030F4**
- Temperature and Humidity Sensor**SHT20**
- Air pressure sensor**BMP280**
- Photoresistance
- 14 x SK6812 4020 RGB LED
- Three-layer structure design:
     - 1 x hook hole
     - 2 x 6*4mm magnet mounting position
     - 1 x Acrylic profile cutting surface finishing
- Development platform: Arduino, UIFlow(Blockly, Python)

## Include

- 1x YUN HAT
- 2x Dupont

## APPLICATION

- Environmental information collection
- Smart home decoration


## Schematic

<img src="assets\img\product_pics\hat\ncir_hat\hat_ncir_04.jpg" width="50%" height="50%">

## Links

-  **datasheet**

    - [SHT20](https://www.mouser.com/ds/2/682/Sensirion_Humidity_Sensors_SHT20_Datasheet-1274196.pdf)
    - [BMP280](https://datasheet.octopart.com/BMP280-Bosch-datasheet-13691204.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/NCIR/EasyLoader_StickC_HAT_NCIR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)


## Example
- **[Arduino](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/NCIR_HAT)**

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GND</td><td>5V OUT</td><td>GPIO26</td><td>GPIO36</td><td>GPIO0</td><td>BAT</td><td>3V3</td><td>5V IN</td></tr>
 <tr><td>YUN HAT</td><td>GND</td><td>+5V</td><td>SCL</td><td>/</td><td>SDA</td><td>BAT</td><td>+3.3V</td><td>+5V IN</td></tr>
</table>

## Video
**Demo** 

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/NCIR-HAT.mp4" type="video/mp4" >
</video>

