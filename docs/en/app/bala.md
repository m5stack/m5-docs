# Application BALA {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K014</div>

<img src="assets/img/product_pics/app/bala_1.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/bala_5.jpg" width="250" height="250">


## Description

**BALA** is short for 'Balance', like its namesake, **BALA** is a Self Balancing Robot consist of a M5 FIRE and two wheels(DC motors).

This Application product comes with preloaded software, a self-balance robot application. While there are lots of open source code on Arduino as well, We especially encourage you to modify and enhance the code yourself.

This Self Balancing Robot is a Two-wheeled Robot that balances vertically using a closed-loop algorithm. This Self Balancing Robot Features various modes like Position Hold, Simple Mode, Rise Mode and Joystick Control. This Robot is controllable by a Smartphone device or a Transmitter. Self Balancing robot uses data from the Accelerometer and Gyroscope to correct its orientation and position.

The 2 DC driver module communicates with M5Stack FIRE through I2C bus. It's default I2C address is **0x56**.

## Product Features

- Programming Support
   + Python
   + UIFlow (Blockly)
   + Arduino
- Compatible LEGO
- POGO Pin
- TF Card Support

## PARAMETER

Model | M5Stack FIRE
---|---
ESP32 | 240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth
Flash | 16MB Flash + 4MB PSRAM
Input | 5V @ 500mA
Interface | TypeC x 1, CONNEXT(I2C+I/0+UART), Pogo Pin x 1
LCD | 2 inch, 320x240 Colorful TFT LCD, ILI9341
Speaker | 1W-0928
Microphone | MEMS Analog BSE3729 Microphone
LED | SK6812 3535 RGB LED x 10
MEMS |  BMM150+(MPU6886/SH200Q)
Battery | 550mAh @ 3.7V, inside
Op.Temp. | 32°F to 104°F ( 0°C to 40°C )
Size | 54 x 54 x 21 mm
C.A.S.E | Plastic ( PC )

## Include

- 1x M5Stack BALA
- 1x Motor Driver
- 2x N20(Encoder included)
- Type-C USB Cable

<img src="assets/img/product_pics/app/bala_2.jpg" width="250" height="250">

## Weight and Size

- Product size:185mm x 108mm x 81mm
- Product weight:247g

## Sensor calibration

NOTE: Calibration required for first use！Press and hold the right C key to start the machine, and release the key after hearing the "drip" sound. The sensor will enter the calibration setting, and keep the host horizontal and still. After 3 seconds, the sensor calibration is completed, and it will automatically enter the balance mode after the calibration is completed.If you found that Bala cannot keep balance during use, it can be solved by trying to calibrate the sensor. 

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

### IMU 6050
<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/BALA/EasyLoader_APP_BALA.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

### MPU 6886
<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/BALA/EasyLoader_APP_BALA_MPU6886.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver),This program is only available for devices that use the MPU9250/MPU6886. (SH200Q is not supported).

## Example

### 1. Arduino IDE

*To get complete code, please click，[click](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/Bala).*

## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">


## Video

**BALA Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5BALA%20.mp4" type="video/mp4">
</video>

**BALA Case - Mobile phone control**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Iphone%20Controlled%20M5Bala%20.mp4" type="video/mp4">
</video>

**BALA Case - Line tracer**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5BALA.mp4" type="video/mp4">
</video>

**BALA Case - Line following using mobile camera**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Self-tracing%20Car.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/bala-esp32-development-mini-self-balancing-car';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/bala/bala_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>