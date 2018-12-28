# IR - 红外对管

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[原理图](#原理图)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.49.6dd575f4jqLzgO&id=578200569184)**

## 描述

<mark>IR</mark>是一款红外光电对管Unit，集成一对红外发送和接收管。与M5Core连接之后，可以通过M5Core来控制是否发出红外光，另外的接收管能检测是否有红外光发送给unit。

因为GROVE接口有两个信号引脚，一个控制红外发送，一个控制红外接收，所以如果要发送红外光则需要OUTPUT管脚(GPIO26)输出高电平。

## 特性

-  内置一对红外发送和接收管
-  检测距离: 2 ~ 5cm
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino)。*

```arduino
#include <M5Stack.h>

// declaration
int cur_recv_value = 0;

// initialization
M5.begin();
pinMode(ir_recv_pin, INPUT);// receiver pin
pinMode(ir_send_pin, OUTPUT);// transmitter pin
digitalWrite(ir_send_pin, 1);// send infrared light

// read data
cur_recv_value = digitalRead(ir_recv_pin);// read the status of receiver
```

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_01.png"  width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_02.png"  width="50%" height="50%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow)。

## 原理图

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>红外对管Unit</td><td>红外接收器引脚</td><td>红外发送器引脚</td><td>5V</td><td>GND</td></tr>
</table>