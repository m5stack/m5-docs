# WEIGHT - 计重Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_weight_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_weight_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.37.3a93425e5PQbBs&id=580131730176)**

## 描述

**<mark>WEIGHT</mark>** 是一款集成了专用于计重秤设计的ADC芯片 **HX711** 的计重 Unit。

* 因为 Unit 接的 GROVE 口，所以相对 Unit 里的 HX711 来说，激励电压 (Positive Supply Voltage) 是 +5V，信号输出给M5Core的电压范围是 0 ~ 5mV，施加的压力越大，对应输出的电压值越大。

* HX711 有两个输入通道A, B。相比通道 B，通道A具有可编程信号放大倍数，该 Unit 的电路设计中，使用了通道A，所以这个Unit具有可编程的放大功能。

该 unit 一端连接压力传感器，另一端通过 GROVE 线连接 M5Core，下图是连接示意

<img src="assets/img/product_pics/unit/unit_weight_04.png">

<img src="assets/img/product_pics/unit/unit_weight_03.png">

## 特性

- 可编程放大倍数：32, 64, 128
- HX711内部ADC精度：24位
- Unit输出电压范围：0 ~ 5mV
- GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
- Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

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

本例程使用10Kg量程的传感器。（单位：克）

*如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/Arduino/weight)。*

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

每次下载程序之后，需要在不放置被测物体到电子称上的情况下，按下按键A，来零点校验。然后再放被测量物体上去，屏幕上就会显示物体重量（单位是克）。

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/WEIGHT/example_unit_weight_01.png">

## 原理图

<img src="assets/img/product_pics/unit/weight_sch.png">

### 管脚映射

**如果WEIGHT接GROVE A**

<table>
 <tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>数据引脚 DAT</td><td>时钟引脚 CLK</td><td>5V</td><td>GND</td></tr>
</table>

**如果WEIGHT接GROVE B**

<table>
<tr><td>M5Core(GROVE接口B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>数据引脚 DAT</td><td>时钟引脚 CLK</td><td>5V</td><td>GND</td></tr>
</table>

**如果WEIGHT接GROVE C**

<table>
<tr><td>M5Core(GROVE接口C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>数据引脚 DAT</td><td>时钟引脚 CLK</td><td>5V</td><td>GND</td></tr>
</table>