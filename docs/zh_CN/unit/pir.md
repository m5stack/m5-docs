# Unit PIR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_pir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_pir_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.46.3a93425e5PQbBs&id=578444443796)**

## 描述

**PIR** 是一款人体红外 Unit.它属于"被动式热释电红外探测器",通过检测由人体或物体发射、反射的红外辐射进行判断工作.当检测到红外时、输出高电平，并进行一段时间的延时（期间保持高电平且允许重复触发）,直至触发信号消失（恢复低电平）.

该 Unit 通过GROVE B与M5Core进行通信.

*注意: 检测触发后存在2秒延时.*

## 产品特性

- 检测距离: 150cm
- 延时时间: 2s
- 感应范围: < 100°
- 静态电流: < 60uA
- 工作温度: -20 - 80 °C
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

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

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/Arduino).*

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

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PIR/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/PIR/example_unit_pir_03.png">

## 原理图

<img src="assets/img/product_pics/unit/pir_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PIR Unit</td><td>Sensor Pin</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>