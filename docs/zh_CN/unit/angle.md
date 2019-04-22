# Unit ANGLE {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_angle_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.40.312f425eRDFbqp&id=578201949805)**

## 描述

**<mark>ANGLE</mark>** 是一个含有最高电阻为 **10K** 电位器的 Unit。电位器是具有三个引出端、阻值可由旋钮旋转调节的电阻元件。每次旋转电位器到不同位置，Unit 会输出不同的电压值 Uo。它可以被用来调整电机转速，LED 灯亮度等。具体分析如下图所示。

<img src="assets/img/product_pics/unit/angle/unit_angle_03.png">

该 Unit 的 Grove 接口是黑色，说明是模拟接口，需要连接到 M5Core 的 GROVE B 接口。

## 特性

- 输出电压范围：0 ~ 2500mV
- GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc )编程
- Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x ADC Unit
- 1x Grove 线

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino)。*

```arduino
#include <M5Stack.h>
// select the input pin for the potentiometer
int sensorPin = 36;
// last variable to store the value coming from the sensor
int last_sensorValue = 0;
// current variable to store the value coming from the sensor
int cur_sensorValue = 0;

void setup() {
  M5.begin();
  pinMode(sensorPin, INPUT);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("the value of ANGLE: ");
}

void loop() {
  // read the value from the sensor:
  cur_sensorValue = analogRead(sensorPin);
  M5.Lcd.setCursor(0, 25);
  if(abs(cur_sensorValue - last_sensorValue) > 10){//debaunce
    M5.Lcd.fillRect(0, 25, 100, 25, BLACK);
    M5.Lcd.print(cur_sensorValue);
    last_sensorValue = cur_sensorValue;
  }
  delay(50);
}
```

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_04.png">

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_03.png">

## 原理图

<img src="assets/img/product_pics/unit/angle_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>角度传感器 Unit</td><td>传感器引脚</td><td> </td><td>5V</td><td>GND</td></tr>
</table>