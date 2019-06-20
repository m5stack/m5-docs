# Unit JOYSTICK {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_joystick_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/joystick-unit)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**JOYSTICK**,  we have two types of JOYSTICKs one is build on a panle compatible with FACES Kit, this is the M5Unit version of **JOYSTICK**

JOYSTICK is very similar to the 'analog' joystick on PS2 (PlayStation 2) controllers. The X and Y axes are two 10k potentiometers which control 2D movement by generating analog signals. The joystick also has a push button that could be used for special applications. Therefore, the entire Unit can output X-Y motion signals in both directions and Z direction.

As designed in the schematic, the Joystick X dimension is connected to pin A0 of MEGA328, the Joystick Y dimension is connected to pin A1 on MEGA328, the Joystick Z dimension is connected to pin A2 on MEGA328.

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_02.png" width="50%" height="50%">

This Unit communicates with the M5Core via the GROVE A interface. It's I2C address is 0x52. By reading the data transferred from JOSTICK, you can obtain the motion information of JOYSTICK.

## Product Features

-  Output value of X, Y direction: 10 ~ 250
-  Output value of Z direction is (0: released; 1: pressed)
-  Software Development Platform : Arduino, UIFlow(Blockly, Python)
-  Two Lego-compatible holes

## Include

- 1x JOYSTICK Unit
- 1x Grove Cable

## Application

- Game Controller
- Robot remote control

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Joystick.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### 1. Arduino IDE

*The code below is incomplete(just for usage).To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/Arduino).*

```arduino
#include <M5Stack.h>
#include "Wire.h"

#define JOY_ADDR 0x52

// declaration
uint8_t x_data, y_data, button_data;
char data[100];

// initialization
M5.begin();
M5.Lcd.clear();
dacWrite(25, 0);//disable the speak noise
Wire.begin(21, 22, 400000);


// read data
Wire.requestFrom(JOY_ADDR, 3);
if (Wire.available()) {
  x_data = Wire.read();// X(range: 10~250)
  y_data = Wire.read();// Y(range: 10~250)
  button_data = Wire.read();// Z(0: released 1: pressed)
  sprintf(data, "x:%d y:%d button:%d\n", x_data, y_data, button_data);
}
```

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_04.png">

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_03.png">

## Schematic

<img src="assets/img/product_pics/unit/joystick_sch.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>JOYSTICK Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**Joystick Case - controll wheelchair**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Joystick.mp4" type="video/mp4">
</video>

**Joystick Case - Page flipping and selection of menu interface**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Control%20M5%20With%20Joystick.mp4" type="video/mp4">
</video>
