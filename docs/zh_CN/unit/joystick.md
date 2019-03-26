# JOYSTICK - 摇杆 Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_joystick_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.66.159c425eoqBTTY&id=577874535012)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>JOYSTICK</mark>** 是一款内置 MEGA328 芯片控制的**摇杆**模块，与 PS2 (PlayStation 2) 手柄上的操纵杆非常相似。X 轴和 Y 轴是两个 10k 电位器，通过产生模拟信号来控制二维运动。操纵杆有一个可以用于特殊的应用的按钮 - Z 轴方向。所以整个 Unit，可以输出 X-Y 两个方向和 Z 方向的动作信号。

内部电路里，摇杆的 X 方向与 MEGA328 的 A0 管脚相连，Y方向与 MEGA328 的 A1 管脚相连，Z 方向与 MEGA 的 A2 管脚相连。

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_02.png" width="50%" height="50%">

该 Unit 与 M5Core 通过 GROVE A 接口 ( IIC ) 通信，其 I2C 地址是 0x52。Core 只需要读取 JOYSTICK 的 I2C 地址数据即可知道摇杆的偏移情况。

## 特性

-  X, Y 方向的范围：10~250, Z 方向 ( 0: 未按下, 1: 按下 )
-  GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
-  Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x JOYSTICK Unit
- 1x Grove 线

## 应用

- 游戏控制器
- 机器人远程控制

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

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_04.png">

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_03.png">

## 原理图

<img src="assets/img/product_pics/unit/joystick_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE 接口 A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>摇杆 Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**Joystick 的演示 - 遥控轮椅**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Joystick.mp4" type="video/mp4">
</video>

**Joystick 的演示 - 菜单界面的翻页与选择**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Control%20M5%20With%20Joystick.mp4" type="video/mp4">
</video>
