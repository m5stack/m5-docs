# Node

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">

***

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](https://github.com/m5stack/M5StackModule-Node/tree/master/example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.16.6c2275f4nUJEfh&id=581064610318)** -->

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/Bases-Node/tree/master/schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.16.6c2275f4nUJEfh&id=581064610318)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

<mark>Node</mark>是一个物联网情景中的节点/基站类底座。把Node装到墙上，堆叠上任意一款M5Core主控，这时，Node+M5Core就是智能节点，可以与附近众多的节点或终端设备通信，可以用终端遥控器通过Node转发信号控制远程设备，实现多个智能终端互联。
* 内置12 RGBLed(SK6812)和温湿度传感器，可以显示多种丰富的Node状态，同时感知周围温湿度情况
* Node的四个角分别有一颗红外发送LED，底部有一颗红外接收管
* Node上下还有一对麦克风
* 内置常用于Hi-Fi耳机的高分辨率音频编解码芯片WM8978

<img src="assets/img/product_pics/base/node_04.png" width="30%" height="30%">

你可以使用M5Core和Node底座实现智能家居中红外遥控设备，蓝牙wifi遥控设备的转发节点，因为内置高保真音频编解码芯片，甚至还可以实现智能音箱功能

## 特性

-  内置12颗RGBLed灯环和温湿度传感器
-  内置Hi-Fi级别的音频编解码芯片(高达24位的分辨率)
-  内置500mAh的小电池

## 管脚映射

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2 ( MOSI )</td><td>GPIO34 ( MISO )</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>音频编解码芯片 WM8978</td><td>I2S_CLK ( MCLK )</td><td>I2S_WS ( LRC )</td><td>I2S_BCK ( BCK )</td><td>I2S_IN ( DACDAT )</td><td>I2S_OUT ( ADCDAT )</td><td>I2C_SDA ( SDIN )</td><td>I2C_SCL ( SCLK )</td><td>L_OUT1 ( LOUT1 )</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>RGB 灯圈 SK6812</td><td>信号引脚</td><td> </td><td> </td><td> </td></tr>
 <tr><td>红外发送和接收</td><td> </td><td>IR接收引脚</td><td>IR发送引脚</td><td> </td><td> </td></tr>
 <tr><td>温湿度传感器 DHT12</td><td> </td><td> </td><td> </td><td>I2C数据引脚</td><td>I2C时钟引脚</td></tr>
</table>

## 包含

-  1x Node
-  Node的墙壁固定底座
-  4x 螺丝
-  1x Type-C USB线

<img src="assets/img/product_pics/base/node_03.png" width="30%" height="30%">

## 应用

-  物联网中智能网络节点
-  网络收音机
-  智能音箱

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [WM8978](http://pdf1.alldatasheet.com/datasheet-pdf/view/96647/WOLFSON/WM8978.html)

## 例程

* 温湿度传感器 (DHT12)

    https://github.com/m5stack/Bases-Node/tree/master/example/dht12

* RGB 灯圈

    https://github.com/m5stack/Bases-Node/tree/master/example/rgbled/NeoPixelFunRandomChange

* 音频编解码 (WM8978)

    https://github.com/m5stack/esp-adf/tree/master/NODE_example

## 相关视频

**NODE 的演示 - 语音识别**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDMxMjI2NA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
