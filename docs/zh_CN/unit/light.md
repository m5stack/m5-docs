# LIGHT - 光线传感Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_light.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_light_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.52.3a93425e5PQbBs&id=577601079444)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>LIGHT</mark>** 是一款集成**光敏电阻和 10K 的可调电阻**的 Unit。光敏电阻对光线十分敏感，其在无光照时，呈高阻状态，10K，光照越强，阻值就越低，随着光照强度的升高，电阻值迅速降低，电阻值可小至 1K 欧姆以下。您可以旋转可调电阻，改变调节光线强度触发 Unit 输出高或低电平的光强阈值。

该 Unit 的 GRVE 接口可以输出数字信号或者光强对应的模拟信号(电压信号)。在光照弱的时候，数字引脚输出高电平，即数字信号 "1" ，否则输出 "0" 。

该 Unit 与 M5core 通过 Grove B 接口通信。

## 特性

-  可调节测量阈值 (通过改变 Unit 上的 10K 可调电阻)
-  模拟或数字信号输出
-  GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
-  Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x LIGHT Unit
- 1x Grove 线

## 应用

- 光控开关
- 太阳能庭院灯
- 红外监控摄像头

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino)。*

```arduino
#include <M5Stack.h>

// declaration
uint16_t analogRead_value = 0;
uint16_t digitalRead_value = 0;

// initialization
M5.begin();
dacWrite(25, 0);// disable the speak noise
pinMode(26, INPUT);// LIGHT Pin setting

// read data
analogRead_value = analogRead(36);// read analog value of LIGHT
digitalRead_value = digitalRead(26);
```

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_04.png">

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_03.png">

## 原理图

<img src="assets/img/product_pics/unit/light_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口 B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>光线传感 Unit</td><td>模拟值输出引脚</td><td>数字值输出引脚</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**LIGHT 的教程**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%20iot%20lighting%20part%202%20-%20light%20sensor%20control.mp4" type="video/mp4">
</video>

**LIGHT 的应用**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Light%20Units.mp4" type="video/mp4">
</video>