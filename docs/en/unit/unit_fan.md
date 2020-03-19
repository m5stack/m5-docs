# DC MOTOR {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U063</div>

<img src="assets/img/product_pics/unit/Fan/unit_fan_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/Fan/unit_fan_02.jpg" width="30%" height="30%">



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

## Applications

- Electric Fan

## Dcumentation

  
## Schematic
<img src="assets/img/product_pics/unit/Fan/unit_fan_04.jpg">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_FAN.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

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

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FAN/UIFlow)。*

<img src="assets/img/product_pics/unit/fan.png" >

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-fan-unit?variant=17365249785946';


   anchor_search(purchase_link);
   scrollFunc();

</script>