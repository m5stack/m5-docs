# JOYSTICK

<img src="assets/img/product_pics/module/module_joystick_01.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.6c7f425eQd3OmC&id=581195019026)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>JOYSTICK</mark>** is a joystick module in the FACES series. it need to stack FACES base and M5Core to use. JOYSTICK can output the offset of X, Y axis direction, whether the knob presses and control the lighting effects of RGB lights.

JOYSTICK communicates with M5Core through IIC(the address of IIC is 0x5E).

<img src="assets/img/product_pics/module/module_joystick_03.png" width="60%" height="60%">

## Feature

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

-  1x JOYSTICK

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/firmware_328p/FacesJoystick328)**

## Example

### Arduino IDE

*If you want the complete code `faces_joystick.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/Arduino/faces_joystick)。*

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

## Related Video

**Joystick Case - controll wheelchair**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDMwMzg5Mg==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Joystick Case - Page flipping and selection of menu interface**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDI2ODQ4MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>