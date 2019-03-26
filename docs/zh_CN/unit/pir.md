# PIR - 人体红外 Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_pir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_pir_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.46.3a93425e5PQbBs&id=578444443796)**

## 描述

**<mark>PIR</mark>** 是一款集成小型人体感应模块的 Unit。用于感应人体活动的 Unit，通过该 Unit 可以感知 Unit 前面是否有人经过，适用于做人体感应方面的项目。

可重复触发方式：感应到红外时输出高电平，在延时时间段内，如果有人体在其感应范围活动，其输出将一直保持高电平，直到人离开后才延时将高电平变为低电平 ( 感应模块检测到人体的每次活动后会自己顺延一个延时时间段，并且以最后一次活动的时间为延时时间的起始点 )。

该 Unit 与 M5Core 通过 GROVE B 接口通信。

## 特性

- 检测距离：150cm
- 延时时间：2s
- 感应范围：< 100°
- 静态电流：< 60uA
- 工作温度：-20 - 80°C
- GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
- Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x PIR Unit
- 1x Grove 线

## 应用

- 人体感应灯具
- 安防产品
- 自动感应电器设置

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/Arduino)。*

```arduino
#include <M5Stack.h>

// initialization
M5.begin();
pinMode(36, INPUT);// set pir sensor pin as input

// read data
int value = digitalRead(36);// read the pin(0: not detectd 1: detected)
M5.update();
```

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_03.png">

## 原理图

<img src="assets/img/product_pics/unit/pir_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core ( GROVE 接口 B )</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>人体红外感应 Unit</td><td>红外感应引脚</td><td> </td><td>5V</td><td>GND</td></tr>
</table>