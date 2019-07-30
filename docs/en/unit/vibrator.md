# Unit VIBRATOR MOTOR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/vibrator_motor/unit_vibrator_motor_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/vibrator_motor/unit_vibrator_motor_02.jpg" width="30%" height="30%">
***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/vibration-motor-unit)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**


## Description

**Vibrator Motor** is consist of an N20 Motor and a metal eccentric wheel. <br>

This N20 motor is has a 5V supply voltage. The output shaft has a rotational speed of 8800 RPM.  Specifications can be seen below.
With this product, you can implement a vibration function to your application.<br>

These days miniature vibrating motors are used in a wide range of products, not just phone and consumer electronics, but also included such as tools, scanners, medical instruments, GPS trackers, and control sticks. Vibrator motors are also the main actuators for haptic feedback which is an inexpensive way to increase a product's value and differentiate it from the competition.

<br><br><br>
<img src="assets/img/product_pics/unit/vibrator_motor/unit_vibrator_motor_03.jpg" width="30%" height="30%">

### Product Features

- single-direction rotation
- Product Size：32.2mm x 24.2mm x 12.2mm
- Product weight：9.2g

## Include

- 1x VIBRATOR MOTOR unit
- 1x GROVE Cable

## Application

- Vibration message functions 



## Dcumentation

  
## Schematic
<img src="assets/img/product_pics/unit/fan/unit_fan_04.jpg">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_VIBRATOR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FAN).*

```arduino
#include <M5Stack.h>

const int motor_pin = 21;
int freq = 10000;
int ledChannel = 0;
int resolution = 10;
void setup() {
  // put your setup code here, to run once:
  M5.begin();
  M5.Lcd.setCursor(120, 110, 4);
  M5.Lcd.println("MOTOR");
  ledcSetup(ledChannel, freq, resolution);
  ledcAttachPin(motor_pin, ledChannel);

}
// 0 - 1024 
void loop() {
  // put your main code here, to run repeatedly:
    ledcWrite(ledChannel, 512);//0°
    delay(1000);
    ledcWrite(ledChannel, 0);//90°
    delay(1000);
    //ledcWrite(ledChannel, 30);//180°
    //delay(1000);

}
```
## Video

- **[Demo Video](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Vibrator.mp4)**

