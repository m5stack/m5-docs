# RELAY - 继电器 Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_relay_grove_b.png" width="30%" height="30%">

***

:clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.55.3a93425e5PQbBs&id=577469172757)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**RELAY** 是一款继电器 Unit ，通过该 Unit 可以安全地用弱电控制强电，用 M5Core 或者手机来控制家里的电视、空调、冰箱等大功率电器。


## 特性
-  DC: 3A @ 30V; AC: 3A @ 220V
-  GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
-  Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x RELAY Unit
- 1x Grove 线

## 应用

- 大功率电器远程遥控，如冰箱、空调、电视等
- 高压电路的电子开关

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino)。*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextFont(4);
  M5.Lcd.setTextColor(YELLOW, BLACK);
  //disable the speak noise
  dacWrite(25, 0);
  pinMode(26, OUTPUT);// RELAY Pin setting
}

void loop(void) {
  digitalWrite(26, HIGH);// RELAY Unit work
  delay(500);
  digitalWrite(26, LOW);// RELAY Unit stop work
  delay(500);
}
```

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.png">

## 原理图

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY继电器Unit</td><td> </td><td>继电器控制引脚</td><td>5V</td><td>GND</td></tr>
</table>

## 视频教程

- **用 UIFlow 和 RELAY Unit 控制 家庭灯**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Blinking%20a%20bulb%20with%20the%20M5%20Relay%20unit..mp4" type="video/mp4">
</video>
