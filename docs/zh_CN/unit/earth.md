# Unit EARTH {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_earth.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_earth_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.67.3a93425e5PQbBs&id=576995412485)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**EARTH** 是一款土壤湿度传感器，用于采集土壤或是类似材料中的水分.传感器上有两个测量探头,将其插入待测量土壤中，由于水分含量越高，则拥有更好的导电性,通过测量两探头之间的电势差，并进行ADC转换,将检测结果发送给M5Core.Unit上还集成了一个10K可调电阻，用于调节检测门槛值.

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_03.png" width="50%" height="50%">

## 产品特性

- 集成10K可调电阻，用于调节阈值.
- 模拟 & 数字 输出
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc)
- 2x LEGO 兼容孔

## 包含

- 1x EARTH Unit
- 1x Grove 线

## 应用

- 盆栽土壤湿度监控

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/Arduino).*

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

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.png">

## 原理图

<img src="assets/img/product_pics/unit/earth_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**EARTH 的教程 - 监控花瓶土壤含水量**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/(M5stack%20x%20Arduino)%20Do%20plants%20have%20feelings.mp4" type="video/mp4">
</video>

**EARTH 的案例 - 监控花瓶土壤含水量**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Earth%20Unit.mp4" type="video/mp4">
</video>
