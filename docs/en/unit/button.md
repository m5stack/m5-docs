# Unit BUTTON {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Button-Unit-for-https://github.com/m5stack/m5-prduct-docsESP32-Arduino-Micropython-Development-Kit-with-GROVE-GPIO-Port-Blockly/3226069_32921805637.html?spm=a2g1x.12024536.productList_2187621.8)**

## Description

**BUTTON** is a single button Unit. The button status can be detected by the input pin status,simply capture the high/low electrical level.

**As shown in the figure below:**

<img src="assets/img/product_pics/unit/button/unit_button_02.png"  width="50%" height="50%">

**Output status:**

<img src="assets/img/product_pics/unit/button/unit_button_03.png">

This unit communicates with M5Core through GROVE B port.

## Feature

-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Include

- 1x BUTTON Unit
- 1x Grove Cable

## APPLICATION

- Lamp holder switch
- Remote control switch

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### Mini Burner

>1.Mini Burner is a simple and fast program burner, and each product page has a product-related case program for Mini Burner.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_Button.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the Mini Burner is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

### 1. Arduino IDE

*The code below is incomplete(just for usage). To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
int cur_value = 0;

// initialization
M5.begin();// init
pinMode(36, INPUT);// BUTTON Pin

// read data
cur_value = digitalRead(36);// read the value of BUTTON
M5.update();
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.png">

## Schematic

<img src="assets/img/product_pics/unit/button_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>Btn (GPIO36)</td><td>NC (GPIO26)</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>BUTTON Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>