# PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[管脚映射](#管脚映射)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?id=584647000573)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[管脚映射](#管脚映射)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?id=584647000573)** -->

## 描述

**<mark>PIANO</mark>** 是钢琴应用，下载[例程](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino)之后，接入 M5Core 和 [M5Core的底座](zh_CN/base/core_bottom)，即可弹奏。

PIANO 里的触摸芯片(**TS20**) 与 M5Core 之间通过 IIC 通信，IIC 地址分别是 0x6A 和 0x7A。

PIANO 需要接入[M5Core的底座](zh_CN/base/core_bottom)，如下图所示

<img src="assets/img/product_pics/app/app_piano_02.png">

## 管脚映射

**触摸芯片 TS20 & LED灯**

<table>
 <tr><td>ESP32 芯片</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>复位引脚(RESET)</td><td>使能引脚(EN)</td><td>时钟引脚(SCL)</td><td>数据引脚(SDA)</td></tr>
 <tr><td>RGB LED</td><td> </td><td> </td><td> </td><td> </td><td>信号引脚</td></tr>
</table>
