# FINGER - 指纹识别

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_grove_c.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.3b86425eaoE9zU&id=585289225333)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.3b86425eaoE9zU&id=585289225333)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

## 描述

**<mark>FINGER</mark>**是一款指纹识别Unit，该unit集成了FPC1020A电容式指纹识别模块，集成了指纹识别算法芯片。连接M5Core，能实现多人的指纹信息录入、指纹删除、指纹比对、指纹搜索、特征提取等功能。可以设置指纹识别对比等级和安全级别。

该unit与M5Core之间通过串口(UART)通信

串口参数：波特率(默认为19200bps), 起始位(1位), 停止位(1位), 校验位(无)

## 特性

- 指纹容量: 150枚
- 比对模式 1:N 识别/ 1:1 验证
- 指纹识别比对等级范围: 0 ~ 9, 默认为5
- 安全等级范围: 1 ~ 5, 默认为3
- 响应时间 指纹预处理< 0.45 s
- 输入电压范围: 3.3 ~ 6V
- 工作温湿度范围: -10 ~ 60°, 20% ~ 80%

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

<!-- ## 例程

### 1. Arduino IDE -->

## 原理图

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core(GROVE接口C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER指纹识别Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

- **FINGER 的演示**

<iframe height=498 width=510 src="http://player.youku.com/embed/XNDAxMjI1ODU2MA==" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <iframe height=498 width=510 src='http://player.youku.com/embed/XMzk5NjU4NjM3Ng==' frameborder=0 'allowfullscreen'></iframe> -->