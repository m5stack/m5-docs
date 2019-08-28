# PROTO PLUS HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\proto_plus_hat\hat_proto_plus_01.jpg" width="30%"> <img src="assets\img\product_pics\hat\proto_plus_hat\hat_proto_plus_02.jpg" width="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/products/m5stickc-proto-plus-hat)**&nbsp;



## 描述

**PROTO PLUS HAT** 是一款兼容M5SticKC的万能板.相比前代产品PROTO HAT，"PLUS"在设计上提供了更大的电路板面积. 结合配套的8 pin 排针能够将M5StickC顶部的拓展接口全部连接至万能板内，使得用户可以自由的在板上进行电路设计. 90°排针能够使万能板以多种角度与M5StickC进行拼接.如果你打算为你的项目添加简单的电路设计并希望通过改变电路板的拼接方式以达到节省空间的目的, HAT PROTO PLUS 会是一个不错的选择.


<img src="assets\img\product_pics\hat\proto_plus_hat\hat_proto_plus_03.jpg" width="30%">

## 产品特性

- 孔尺寸: 0.039" 1mm (CNC工艺)
- 孔间距: 0.1 in - (2.54 mm)
- 板孔数量: 168 孔

## 重量尺寸

- 单品尺寸：54mm x 23.5mm x 1mm
- 单品重量：2g


## 包含

- 1x PROTO PLUS HAT
- 1x 8 pin 排针（90°）

## 应用

- 电路原型设计
- 相关应用: [点击查看](https://www.hackster.io/kiraku-labo/balance-robot-9009db)



## 相关视频

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PROTO_PLUS_HAT.mp4" type="video/mp4">
</video>

## 例程

*以下代码仅为片段，如需获取完整代码，[请点击此处.](https://github.com/ShashaDDD/EC11Encoder).*

```arduino
#include <TaskScheduler.h>
#include <M5StickC.h>
#include <Arduino.h>
#include "RotaryEncoderWithButton.h"


//#include <SimpleTimer.h>

//RotaryEncoderWithButton rotary(2,3,4);
RotaryEncoderWithButton rotary(26,36,0);

uint32_t data;
int i;
void t1Callback();
Task t1(5, TASK_FOREVER, &RotaryEncoderWithButton::ReadAB);
Scheduler runner; 

void setup() {
	M5.begin();
	Serial.begin(115200);
	rotary.begin();

	runner.init();
  	runner.addTask(t1);

	delay(100);
	t1.enable();

}

void loop() {
	runner.execute();
}
```