# Module JOYSTICK {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_joystick_01.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- :electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->🛒**[Purchase](https://m5stack.com/collections/m5-module/products/joystick-module)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**JOYSTICK** is a control column module. A joystick is an input device consisting of a stick that pivots on a base and reports its angle or direction to the device it is controlling. Same as ENCODER, it is compatible with FACE Kit. You can have it replace the keycoard panel inside the FACE kit. Through IIC you can get the offset data form (X, Y) axis, also the button status. You can customized the LED behavior as you like.

JOYSTICK IIC address is 0x5E).

<img src="assets/img/product_pics/module/module_joystick_03.png" width="60%" height="60%">

## Product Features

-  12 RGB Led
-  IIC communication
-  Simple API for programming

## Function

**Control single RGB**

```arduino
/*
    Parameter:
        indexOfLED: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int indexOfLED, int r, int g, int b){
  Wire.beginTransmission(FACE_JOY_ADDR);
  Wire.write(indexOfLED);
  Wire.write(r);
  Wire.write(g);
  Wire.write(b);
  Wire.endTransmission();
}
```

**Read the offset of each direction**

```arduino
void get_joystick_offset(void){
  Wire.requestFrom(FACE_JOY_ADDR, 5);
  if (Wire.available()) {

    y_data_L = Wire.read();
    y_data_H = Wire.read();
    x_data_L = Wire.read();
    x_data_H = Wire.read();

    button_data = Wire.read();// Z(0: released 1: pressed)
}
```

<img src="assets/img/product_pics/module/module_joystick_02.png" width="60%" height="60%">

## Include

-  1x M5Stack JOYSTICK Module board
-  1x Joystick Bar

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/firmware_328p/FacesJoystick328)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_joystick.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### Arduino IDE

*To the complete code `faces_joystick.ino`, click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/Arduino/faces_joystick)。*

```arduino
/*
* faces_joystick.ino
*/
#include <M5Stack.h>

#define FACE_JOY_ADDR     0X5E

// declaration
uint8_t x_data_L;
uint8_t x_data_H;
uint8_t y_data_L;
uint8_t y_data_H;
uint8_t button_data;
uint16_t x_data;
uint16_t y_data;

// initialization
M5.begin();
Wire.begin();

// get data from ENCONDER
Wire.requestFrom(FACE_JOY_ADDR, 5);
if (Wire.available()) {
  y_data_L = Wire.read();
  y_data_H = Wire.read();
  x_data_L = Wire.read();
  x_data_H = Wire.read();
  button_data = Wire.read();// Z(0: released 1: pressed)
  x_data = x_data_H << 8 |x_data_L;
  y_data = y_data_H << 8 |y_data_L;
}

// IIC send data, 4bytes
Wire.beginTransmission(FACE_JOY_ADDR);
Wire.write(indexOfLED);
Wire.write(r);
Wire.write(g);
Wire.write(b);
Wire.endTransmission();
```
