# ToF HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\tof_hat\tof_hat_01.jpg" width="30%"><img src="assets\img\product_pics\hat\tof_hat\tof_hat_02.jpg" width="30%"><img src="assets\img\product_pics\hat\tof_hat\tof_hat_03.jpg" width="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/m5stickc-tof-hatvl53l0x)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description


**ToF HAT** is a high precision laser-ranging sensor specifically designed for M5StickC. Integrated with **VL53L0X** and **940nm VCSEL** emitter. It can provide high precision and low latency performance on object distance detection.
The VL53L0X is a new generation Time-of-Flight (ToF) laser-ranging module housed in the smallest package on the market today, providing accurate distance measurement whatever the target reflectances, unlike conventional technologies. It can measure absolute distances up to 2m, setting a new benchmark in ranging performance levels, opening the door to various new applications. The VL53L0X integrates a leading-edge SPAD array (Single Photon Avalanche Diodes) and embeds ST’s second generation FlightSenseTM patented technology. The VL53L0X’s 940 nm VCSEL emitter (Vertical-Cavity Surface-Emitting Laser), is invisible to the human eye, coupled with internal physical infrared filters, it enables longer ranging distances, higher immunity to ambient light, and better robustness to cover glass optical crosstalk.

Communication Info: I2C, **0x29**, GPIO0/26.

<img src="assets\img\product_pics\hat\tof_hat\tof_hat_04.jpg" width="30%">

## Product Features

- High precision
- Maximum measuring distance 2m
- 940nm laser VCSEL
- Development platform: Arduino, UIFlow(Blockly, Python)
- Security:
     - Class 1 laser equipment meeting the latest standards
     - Standard IEC 60825-1: 2014 - 3rd edition


## Weight & Dimension

- Dimension：24mm x 20.3mm x 13.8mm
- Weight：3g

## Include

- 1x ToF HAT

<img src="assets\img\product_pics\hat\tof_hat\tof_hat_06.jpg" width="30%">

## Application

- Obstacle recognition
- Gesture Recognition
- Laser Ranging
- 3D structured light imaging (3D sensing)
- Camera assist (super fast auto focus and depth of field map)


## Links

- **[VL53L0X Datasheet](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)**


## Schematic

<img src="assets\img\product_pics\hat\tof_hat\tof_hat_07.jpg" width="50%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ToF/EasyLoader_ToF_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Example

- **[Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/tof-hat/Arduino/ToF_Count)**

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>ToF HAT</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>


## Video

<video width="30%" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ToF_HAT.mp4" type="video/mp4">
</video>