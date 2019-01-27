# EARTH - 土壤湿度Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_earth.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_earth_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.67.3a93425e5PQbBs&id=576995412485)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>EARTH</mark>** 是一款用于测量土壤、水果等固态物体含水量的Unit。被测物体不同的含水量(湿度)，导致Unit返回的电阻值不同，从而能判断被测物体的含水量。

Unit可以输出0/1的数字信号，也可以直接输出被测物体反映的模拟量，可以调节Unit上的电位器来改变测量阈值。

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_03.png" width="50%" height="50%">

## 特性

-  可调节测量阈值(通过改变Unit上的10K可调电阻)
-  数字或模拟信号输出
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/Arduino)。*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  dacWrite(25, 0);//disable the speak noise

  pinMode(26, INPUT);// set digital pin
}

uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

void loop() {
  analogRead_value = analogRead(36);// read analog value of EARTH
  digitalRead_value = digitalRead(26);// read digital value of EARTH
}

```

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.png">

## 原理图

<img src="assets/img/product_pics/unit/earth_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>土壤湿度Unit</td><td>模拟值输出引脚</td><td>数字值输出引脚</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**EARTH 的教程 - 监控花瓶土壤含水量**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzg0MjE0MjI0MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>