# FINGER - 指纹识别

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_grove_c.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.18.3b86425eaoE9zU&id=585289225333)**

## 描述

**<mark>FINGER</mark>**是一款集成FPC1220A的指纹识别Unit，连接M5Core，能实现多人的指纹信息录入、删除，实现身份识别。

该unit与M5Core之间通过串口(UART)通信，

串口参数：波特率(921600), 起始位(1位), 停止位(1位), 校验位(无)

## 特性

-  设置指纹识别比对等级

## 原理图

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core(GROVE接口C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER指纹识别Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

<iframe width="560" height="315" src="http://player.youku.com/embed/XMzk5NjU4NjM3Ng==" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <iframe height=498 width=510 src='http://player.youku.com/embed/XMzk5NjU4NjM3Ng==' frameborder=0 'allowfullscreen'></iframe> -->