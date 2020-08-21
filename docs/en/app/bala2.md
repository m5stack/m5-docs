# BALA2

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K014</div>

<div class="product_pic"><img src="assets/img/product_pics/app/bala_1.webp"> <img src="assets/img/product_pics/app/bala_5.webp"></div>

## Description

**BALA2** is short for 'Balance', like its namesake, it's the second generation product. **BALA2** is a Self Balancing Robot consist of a M5Stack Gray and two wheels(DC motors).The base uses STM32F030C8T6 as the main control, two-way encoding motor drive, built-in 1200mAh battery.This application product comes with preloaded software, a self-balance robot application.
This Self Balancing Robot is a Two-wheeled Robot that balances vertically using a closed-loop algorithm. You can control it to walk freely through programming, or you can combine WiFi and Bluetooth to develop remote control functions. This Robot is controllable by a Smartphone device or a Transmitter. The BALA2 base contains a wealth of interfaces. In addition to the conventional PortB and PortC, it also supports 8-channel servos, of which 4 channels can be directly connected, and the remaining 4 channels need to be connected from the inside of the base. Even if you have never been in contact with the balance car program, you can quickly complete the programming and control it through UIFlow. Self Balancing robot uses data from the Accelerometer and Gyroscope to correct its orientation and position.The 2 DC driver module communicates with M5Stack Gray through I2C bus. 

## Product Features

- 9-DOF IMU
- Two-wheel drive, PID control balance
- Grove extension ports
- 8-channel servo drive, 4-channel external connection, 4-channel built-in
- Support WiFi/Bluetooth, programmable
- Built-in speaker
- TF Card Support
- Compatible LEGO
- Programming Support
   + Python
   + UIFlow (Blockly)
   + Arduino


## Include

- 1x M5Stack Gray + BALA2
- 2x Wheel conncetor
- 4x Connector
- 2x Bricks
- 1x Hex wrench
- Type-C USB Cable

## Applications

- Balancing car

<img src="assets/img/product_pics/app/bala_2.webp" width="250" height="250">

## Sensor calibration

NOTE: Calibration required for first use！Press and hold the right C key to start the machine, and release the key after hearing the "drip" sound. The sensor will enter the calibration setting, and keep the host horizontal and still. After 3 seconds, the sensor calibration is completed, and it will automatically enter the balance mode after the calibration is completed.If you found that Bala cannot keep balance during use, it can be solved by trying to calibrate the sensor.

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz Dual Core，600 DMIPS，520KB SRAM，Wi-Fi，Dual-mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash/RAM</td>
      <td>16MB Flash + 4MB PSRAM</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2.0 inch, 320x240 Color TFT LCD, ILI9342C</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>BMM150+MPU6886</td>
   </tr>
   <tr>
      <td>Motor Driver</td>
      <td>HR8833</td>
   </tr>
   <tr>
      <td>Base Controller</td>
      <td>STM32F030</td>
   </tr>
   <tr>
      <td>Ports</td>
      <td>GROVE I2C*1/UART*1/GPIO*1/SERVO*4(+4 Extendable Channel)</td>
   </tr>
   <tr>
      <td>Battery Capacity</td>
      <td>1200mAh</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54 x 54 x 21 mm</td>
   </tr>
   <tr>
      <td>Package dimensions</td>
      <td>185*108*81mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic</td>
   </tr>
 </table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

### IMU 6050
<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/BALA/EasyLoader_APP_BALA.exe"><el-button type="primary">download EasyLoader</el-button></a>

### MPU 6886
<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/BALA/EasyLoader_APP_BALA_MPU6886.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

?>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver),This program is only available for devices that use the MPU9250/MPU6886. (SH200Q is not supported).

## PARAMETER

Model | M5Stack Gray
---|---
ESP32 | 240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth
Flash | 16MB Flash + 4MB PSRAM
Input | 5V @ 500mA
Interface | TypeC x 1, CONNEXT(I2C+I/0+UART), Pogo Pin x 1
LCD | 2 inch, 320x240 Colorful TFT LCD, ILI9341
Speaker | 1W-0928
Microphone | MEMS Analog BSE3729 Microphone
MEMS |  BMM150+MPU6886
Op.Temp. | 32°F to 104°F ( 0°C to 40°C )
Size | 54 x 54 x 21 mm
C.A.S.E | Plastic ( PC )

## Example

### 1. Arduino IDE

To get complete code, please click，[click](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/BALA)

## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Video

**BALA Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5BALA%20.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/bala-esp32-development-mini-self-balancing-car';

   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/bala/bala_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>