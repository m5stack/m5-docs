# JOYSTICK - 摇杆Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_joystick_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_joystick_grove_a.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/unit/M5GO_Unit_joystick_03.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.66.159c425eoqBTTY&id=577874535012)**

## 描述

**<mark>Joystick</mark>**是一款内置MEGA328芯片控制的摇杆模块，可以输出X-Y两个方向的摇杆偏移量，可以判断Z方向是否按下的。

内部电路里，摇杆的X方向与MEGA328的A0管脚相连，Y方向与MEGA328的A1管脚相连，Z方向与MEGA的A2管脚相连。

Joystick Unit同样也是与M5Core相连之后，通过PORT A(I2C)控制，其I2C地址是0x52。M5Core只需要读取0x52的I2C地址数据即可知道摇杆的偏移情况。

## 特性

-  X, Y方向的范围10~250, Z方向(0: 未按下, 1: 按下)
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/Arduino)。*

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

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_02.png" width="58%" height="58%">

## 原理图

<img src="assets/img/product_pics/unit/joystick_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>摇杆Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>