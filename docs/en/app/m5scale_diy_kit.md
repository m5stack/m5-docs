# M5SCALE DIY Kit {docsify-ignore-all}

<img src="assets\img\product_pics\app\m5scale_diy_kit\m5scale_diy_kit_01.jpg" width="30%" height="30%"> 

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/m5scale-diy-kit)**

## Description

**M5SCALE DIY Kit** is a DIY kit of M5 that implements a digital scale, which makes it more of an Application-approach development kit. 

The overall structure is made of acrylic material. The electronic part is the main controller, M5StickC and a  WEIGH unit.  

A cantilever beam-sensor is used to detecting the bend over forced on top of the scale by object weight. 

it will transfer the deformation into a voltage signal and as an input of WEIGH sensor which will be captured and read by M5stickC.

Other than that, there also some small components that is included in the kit, you have the total freedom to assembly the whole thing and reprogram it as you like. 

The software is open-sourced on GitHub, you can program it either with UIflow or Arduino. 

The lego holes on bottom board allow you to place more M5 sensors for extension functions, Plus M5StickC is wifi available, you have the freedom to build something impressive. 

<img src="assets\img\product_pics\app\m5scale_diy_kit\m5scale_diy_kit_02.jpg" width="30%" height="30%">

## Product Feature

- Dimension : 
  - Finish Assembly：100mm * 100mm * 43mm
  - Cantilever beam-sensor：80mm * 12.7mm * 12.7mm
- DIY Digital Scale
- M5StickC + WEIGH
- Measurement Range: 10KG (in default code)
- Open source code
- Lego Holes 
- Acrylic material
- Load cell technical parameters:
     - Range: 20kg
     - Output sensitivity: 1.0±0.1mV/V
     - Lead wire: power line (red), signal positive (white), signal negative (green), ground wire (black)

## Package Includes

-  1x M5SCALE DIY Kit
-  1x User Manual


<img src="assets\img\product_pics\app\m5scale_diy_kit\m5scale_diy_kit_03.jpg" width="30%" height="30%">

## Application

- High precision electronic scale
- Small range weighing machine






## Links

- **[M5StickC Product Page](en/core/m5stickc)**

- **[Weight Unit Product Page](en/unit/weight)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/M5SCALE_DIY_KIT/EasyLoader_APP_M5Scale_diy_kit.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.



## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5SCALE_DIY_kit/Arduino/M5SCALE_DIY_kit).*

```arduino
#include"HX711.h"
#include<M5StickC.h>

int Weight = 0;
void setup() {
  M5.begin();
  M5.Lcd.setRotation(1);
  M5.Lcd.setTextColor(TFT_GREEN, TFT_BLACK);
  M5.Lcd.setTextDatum(MC_DATUM);
  M5.Lcd.drawString("SCALE", 80, 0, 4);  
   Init_Hx711();
   Get_Gross();   //clear the weight
   M5.Lcd.setTextColor(TFT_RED, TFT_BLACK);  
   Serial.begin(115200);
     
}
 
void loop() {  
   M5.update(); 
//   if (M5.BtnA.wasReleased()) {
//      Get_Maopi();
//    }
     Weight = Get_Weight();
     M5.Lcd.setCursor(40,30,4);
     M5.Lcd.fillRect(0, 30, 160, 30, TFT_BLACK);
     M5.Lcd.printf("%d g", Weight);
     M5.Lcd.fillRect(0, 70, 160, 10, TFT_BLACK);
     M5.Lcd.fillRect(0, 70, Weight*0.016, 10, TFT_YELLOW);
     delay(100);  

}
```