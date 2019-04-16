# Unit BUTTON {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.49.3a93425e5PQbBs&id=577636117298)**

## 描述

**<mark>BUTTON</mark>** 是一个瞬时单按键开关 unit。这个 Unit 内置了一个瞬时按键，这个瞬时按键能够在按压释放时会自动弹回。当按键按下时立即输出一个低电压的逻辑电平，释放时立即输出一个高电压的逻辑平。NC 引脚在该模块没有用到，Btn (GPIO36) 引脚为按钮的信号输出。

如图下图所示：

<img src="assets/img/product_pics/unit/button/unit_button_02.png">

该 Unit 与 M5Core 通过 Grove B 接口通信。

## 特性

-  GROVE 接口，支持 [UIFlow](http://flow.m5stack.com) 编程，[Arduino](http://www.arduino.cc) 编程
-  Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x BUTTON Unit
- 1x Grove 线

## 应用

- 灯座开关
- 远程控制开关

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino)。*

```arduino
#include <M5Stack.h>

// declaration
int cur_value = 0;

// initialization
M5.begin();// init
pinMode(36, INPUT);// BUTTON Pin

// read data
cur_value = digitalRead(36);// read the value of BUTTON
M5.update();
```

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_03.png">

## 原理图

<img src="assets/img/product_pics/unit/button_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE 接口 B)</td><td>Btn (GPIO36)</td><td>NC (GPIO26)</td><td>5V</td><td>GND</td></tr>
 <tr><td>单按键 Unit</td></td><td>按键引脚</td><td> </td><td>5V</td><td>GND</td></tr>
</table>