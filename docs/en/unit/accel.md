# Unit ACCEL {docsify-ignore-all}

<img src="assets/img/product_pics/unit/accel/accel_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/accel/accel_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/3-axis-analog-accelerometer-unitadx345)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**ACCEL** is a motion sensor Unit. Integrated with ADXL 345, ACC is able to obtain 3- axis of Acceleration. ADXL 345 is a small, thin, ultralow power, 3-axis accelerometer with high resolution (13-bit) measurement at up to ±16 g. Digital output data is formatted as 16-bit twos complement and is accessible through either an SPI (3- or 4-wire) or I2C digital interface. In this Unit, we used I2C series interface. 
<br>

*What is an accelerometer?*<br>
An accelerometer is an electromechanical device that will measure acceleration forces. These forces may be static, like the constant force of gravity pulling at your feet, or they could be dynamic - caused by moving or vibrating the accelerometer.
<br>
*What are accelerometers useful for?*<br>
By measuring the amount of static acceleration due to gravity, you can find out the angle the device is tilted at with respect to the earth. By sensing the amount of dynamic acceleration, you can analyze the way the device is moving. At first, measuring tilt and acceleration doesn't seem all that exciting. However, engineers have come up with many ways to make really useful products with them.
<br><br><br>
<img src="assets/img/product_pics/unit/accel/accel_03.jpg" width="30%" height="30%">

### Product Features
- Tiny
- ultralow power
- 3-axis accelerometer

## Include

- 1x ACC unit
- 1x GROVE Cable

## Application

- Building and structural monitoring
- Navigation
- Orientation sensing


## Dcumentation
- Datasheet - **[ADXL345](https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf)** 
  
## Schematic
<img src="assets/img/product_pics/unit/accel/accel_04.jpg">

### PinMap

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ACC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ACCEL.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ACCEL).<br>
Download library ADXL345 before compile.*

```arduino
#include <M5Stack.h>
#include <ADXL345.h>

ADXL345 accel(ADXL345_ALT); // download this library before compile.
//https://github.com/jakalada/Arduino-ADXL345

// initialization
void setup() {

  M5.Lcd.setCursor(20, 100); M5.Lcd.print(" x ");
  M5.Lcd.setCursor(120, 100); M5.Lcd.print(" y ");
  M5.Lcd.setCursor(220, 100); M5.Lcd.print(" z ");
  ...
  byte deviceID = accel.readDeviceID();
}

void loop() {
    if (accel.update()) {
    M5.Lcd.fillRect(0, 130, 360, 30, BLACK);
    M5.Lcd.setCursor(15,  130); M5.Lcd.print((int)(1000*accel.getX()));
    M5.Lcd.setCursor(115, 130); M5.Lcd.print((int)(1000*accel.getY()));
    M5.Lcd.setCursor(215, 130); M5.Lcd.print((int)(1000*accel.getZ()));
    ...
}
```

## Video

- **[Demo Video](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/ACCEL.mp4)**


