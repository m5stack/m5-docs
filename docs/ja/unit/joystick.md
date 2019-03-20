# JOYSTICK ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_joystick_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_joystick_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-New-Joystick-Unit-MEGA328P-I2C-Grove-Connector-Compatible-X-Y-Axis-Button-for-ESP32/3226069_32921785624.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>JOYSTICK</mark>**ユニットはコントローラーなどに利用可能なジョイスティックです。X-Y軸オフセットとボタンクリック入力を取得できます。

内部的には (X, Y, Z) 軸方向の入力はATmega328pのそれぞれ（A0, A1, A2) ピンに接続されています。

M5CoreとJoystickはI2Cで接続されます。I2Cアドレスは**0x52**です。

## 特徴

- X, Y 値の範囲 (10 ~ 250), Z方向(0: released, 1: pressed)
- Grove インターフェース、サポートプログラミング [UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)
- LEGO 互換ホール

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/Arduino)。*

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

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_03.png">

## 回路図

<img src="assets/img/product_pics/unit/joystick_sch.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVEインターフェースA)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>JOYSTICK Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

**Joystick デモ - 車椅子操作**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Joystick.mp4" type="video/mp4">
</video>

**Joystick デモ - ツリーメニュー操作**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Control%20M5%20With%20Joystick.mp4" type="video/mp4">
</video>