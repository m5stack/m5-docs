# Unit JOYSTICK

<img src="assets/img/product_pics/units/M5GO_Unit_joystick_01.png" width="30%" height="30%"><img src="assets/img/product_pics/units/M5GO_Unit_joystick_02.png" width="30%" height="30%"><img src="assets/img/product_pics/units/unit_joystick_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-New-Joystick-Unit-MEGA328P-I2C-Grove-Connector-Compatible-X-Y-Axis-Button-for-ESP32/3226069_32921785624.html?spm=a2g1x.12024536.productList_2187621.10)**

## Description

This Unit is a joystick unit the same as game controller button that can be detected the X-Y axis offset and whether the joystick be pressed

## Feature

-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

```c++
#define JOY_ADDR 0x52

//disable the speak noise
dacWrite(25, 0);
Wire.begin(21, 22, 400000);
Wire.requestFrom(JOY_ADDR);
while(Wire.available())
{
    x_data  = Wire.read();//x
    y_data  = Wire.read();//x
    button_data  = Wire.read();//x
}
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/Arduino)for Specific example.

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/JOYSTICK/example_unit_joystick_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/units/unit_example/JOYSTICK/example_unit_joystick_02.png" width="58%" height="58%">

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow)for Specific example.

## Schematic

<!-- <img src="assets/img/product_pics/units/joystick_sch.JPG"> -->

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>JOYSTICK Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>