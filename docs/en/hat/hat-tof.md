# ToF HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\env_hat\env_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\env_hat\env_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\env_hat\env_hat_03.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/m5stickc-yun-hatsh20-bmp280-sk6812)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description


**ToF HAT** is a high-precision laser ranging sensor designed for M5SticKC. It integrates ST laser ranging chip **VL53L0X**, **940nm VCSEL** transmitter, and measures the laser signal to the measured The round-trip time of the object can measure the absolute distance in the range of 2m in less than 30ms. The difference from the traditional ranging is that it can provide accurate distance measurement data regardless of the reflectivity of the detection target. Some distance measurement and obstacle recognition items that have certain requirements on data accuracy, **ToF HAT** can have a good performance.


Communication protocol: I2C, address is **0x29**. (GOIO 0/26)


## Product Features

- High precision
- Maximum measuring distance 2m
- 940nm laser VCSEL
- Operates in high infrared ambient light levels
- Development platform: Arduino, UIFlow(Blockly, Python)
- Security:
     - Class 1 laser equipment meeting the latest standards
     - Standard IEC 60825-1: 2014 - 3rd edition

## Weight & Dimension

- Dimension：24mm x 20.3mm x 13.8mm
- Weight：3g

## Include

- 1x ToF HAT

## Application

- Obstacle recognition
- Gesture Recognition
- Laser Ranging
- 3D structured light imaging (3D sensing)
- Camera assist (super fast auto focus and depth of field map)


## Links

- **[VL53L0X Datasheet](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)**


## Schematic

<img src="assets\img\product_pics\hat\env_hat\env_hat_04.jpg" width="50%" height="50%">

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
 <tr><td>ToF HAT</td><td>SCL</td><td>SDA</td><td>3.3V</td><td>GND</td></tr>
</table>


## Video

<video width="30%" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ToF_HAT.mp4" type="video/mp4">
</video>