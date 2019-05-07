# WEIGHT - 计重Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_weight_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_weight_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.37.3a93425e5PQbBs&id=580131730176)**

## 描述

**WEIGHT** 是一款计重 Unit.集成专为高精度电子秤而设计的24位A/D转换器芯片**HX711**.芯片激励电压与GROVE口电压一致为+5V,施加的压力越大，对应输出的电压值就越大（输出电压范围0 ~ 5mV）HX711有两个输入通道A，B.在本设计中使用了通道A，与通道B相比，通道A具有可编程信号放大功能.

将 Unit 的一端连接到压力传感器、另一端则连接到M5Core.

<img src="assets/img/product_pics/unit/unit_weight_04.png">

<img src="assets/img/product_pics/unit/unit_weight_03.png">

## 产品特性

- 可编程放大倍数: 32, 64, 128
- HX711内部ADC精度: 24 bits
- 输出电压范围: 0 ~ 5mV
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- 2x LEGO 兼容孔

## 包含

- 1x WEIGHT Unit
- 1x Grove 线

## 应用

-  微型重量计
-  厨房秤

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [HX711](http://www.dfrobot.com/image/data/SEN0160/hx711_english.pdf)

## 例程

### 1. Arduino IDE

该案例使用10Kg量程的传感器.(单位:克)

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/Arduino/weight)。*

```arduino
/*
  This Unit connects to GRVOE B on M5Core.
*/

#include <M5Stack.h>
#include "hx711.h"

HX711 scale(36, 26);// GROVE B

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setCursor(50, 10);
  M5.Lcd.print("UNIT_WEIGHT EXAMPLE\n");
  M5.Lcd.setCursor(15, 50);
  M5.Lcd.print("Connect Unit to GROVE B");
  Serial.begin(115200);

  scale.setOffset(125184);
  scale.setScale(67.4);

  M5.Lcd.setCursor(0, 90);
  M5.Lcd.print("The weight: ");
}

void loop(){
  // Serial.println(scale.averageValue());
  float weight;
  weight = ((float)((int)((scale.getGram()+0.005)*100)))/100;
  // sprintf(&weight, "%0.2f", scale.getGram());
  Serial.print("The weight: ");
  Serial.print(weight);
  M5.Lcd.fillRect(150, 90, 100, 20, BLACK);
  M5.Lcd.setCursor(150, 90);
  M5.Lcd.print(weight);
  Serial.println(" g");
  delay(100);
}
```

### 2. UIFlow

每次下载程序后，需要先按下按键A进行校准.然后放置测量对象进行测量，在M5Core的屏幕上将会显示其重量.（单位:克）

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/WEIGHT/example_unit_weight_01.png">

## 原理图

<img src="assets/img/product_pics/unit/weight_sch.png">

### 管脚映射

**WEIGHT 连接到 GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**WEIGHT 连接到  GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**WEIGHT 连接到 GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>