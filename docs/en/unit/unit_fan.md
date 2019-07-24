# Unit DC MOTOR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/Fan/unit_fan_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/Fan/unit_fan_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/mini-fan-unit?variant=17365249785946)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**


## Description

**FAN** is designed with an N20 Motor and a small fan piece is included in the package.
This N20 motor is has a 5V supply voltage. The output shaft has a rotational speed of 8800 RPM.


<br><br><br>

<img src="assets/img/product_pics/unit/Fan/unit_fan_03.jpg" width="30%" height="30%">

### Product Features
- single-direction rotation
- 5V-DC
- Simple DC motor with no gear
- 60 mm mini fan paddle
- Product Size：32.2mm x 24.2mm x 12.2mm
- Product weight：9.2g

## Include

- 1x FAN unit
- 1x GROVE Cable
- 2x Plastic fan paddle 

## Application

- Electric Fan


## Dcumentation

  
## Schematic
<img src="assets/img/product_pics/unit/Fan/unit_fan_04.jpg">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_FAN.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

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


