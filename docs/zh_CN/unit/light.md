# LIGHT - 光线传感Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_light_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.52.3a93425e5PQbBs&id=577601079444)**

## 描述

<mark>LIGHT</mark>是一款光线传感器，内置光敏电阻和10K的可调电阻，可以通过调节可调电阻，从而改变触发信号的光强阈值。Unit的GRVE接口可以输出数字信号或者光强对应的模拟信号(电压信号)。

LIGHT在光强弱的时候，数字引脚输出高电平，即数字信号"1"，否则输出"0"。

## 特性

-  10K可调电阻
-  模拟或数字信号输出
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino)。*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  dacWrite(25, 0);// disable the speak noise

  pinMode(26, INPUT);// set LIGHT Pin
}

uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

void loop() {
  analogRead_value = analogRead(36);// read analog value of LIGHT
  digitalRead_value = digitalRead(26);
  delay(10);
}
```

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_01.png" width="28%" height="28%"> <img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_02.png" width="69%" height="69%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow)。

## 原理图

<img src="assets/img/product_pics/unit/light_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>光线传感Unit</td><td>模拟值输出引脚</td><td>数字值输出引脚</td><td>5V</td><td>GND</td></tr>
</table>