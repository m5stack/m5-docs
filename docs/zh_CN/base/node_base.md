# Node {docsify-ignore-all}

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/Bases-Node/tree/master/schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.16.6c2275f4nUJEfh&id=581064610318)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**<mark>Node</mark>** 是一个物联网情景中的节点/基站类底座。把 Node 装到墙上，堆叠上任意一款 M5Core 主控，这时，Node + M5Core 就是智能节点，可以与附近众多的节点或终端设备通信，可以用终端遥控器通过 Node 转发信号控制远程设备，实现多个智能终端互联。也可以实现语音识别。

* 内置 12 RGBLed ( SK6812 ) 和温湿度传感器，可以显示多种丰富的 Node 状态，同时感知周围温湿度情况
* Node 的四个角分别有一颗红外发送 LED，底部有一颗红外接收管
* Node 上下还有一对麦克风
* 内置常用于 Hi-Fi 耳机的高分辨率音频编解码芯片 WM8978

<img src="assets/img/product_pics/base/node_04.png" width="50%" height="50%">

您可以使用 M5Core 和 Node 底座实现红外遥控家电，因为内置高保真音频编解码芯片，甚至还可以实现智能音箱功能。

## 特性

- 内置红外发送与红外接收器件
- 内置 12 颗 RGBLed 灯环和温湿度传感器
- 内置 Hi-Fi 级别的音频编解码芯片 ( 高达 24 位的分辨率 )
- 内置 500mAh 的小电池

## 管脚映射

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2 ( MOSI )</td><td>GPIO34 ( MISO )</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>音频编解码芯片 WM8978</td><td>I2S_CLK ( MCLK )</td><td>I2S_WS ( LRC )</td><td>I2S_BCK ( BCK )</td><td>I2S_IN ( DACDAT )</td><td>I2S_OUT ( ADCDAT )</td><td>I2C_SDA ( SDIN )</td><td>I2C_SCL ( SCLK )</td><td>L_OUT1 ( LOUT1 )</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>RGB 灯圈</td><td>信号引脚</td><td> </td><td> </td><td> </td></tr>
 <tr><td>红外发送和接收</td><td> </td><td>IR 接收引脚</td><td>IR 发送引脚</td><td> </td><td> </td></tr>
 <tr><td>温湿度传感器</td><td> </td><td> </td><td> </td><td>I2C 数据引脚</td><td>I2C 时钟引脚</td></tr>
</table>

## 包含

-  1x Node
-  Node 的墙壁固定底座
-  4x 螺丝
-  1x Type-C USB 线

<img src="assets/img/product_pics/base/node_05.png" width="50%" height="50%">

## 应用

-  物联网中智能网络节点
-  网络收音机
-  智能音箱

<img src="assets/img/product_pics/base/node_03.png" width="50%" height="50%">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [WM8978](http://pdf1.alldatasheet.com/datasheet-pdf/view/96647/WOLFSON/WM8978.html)

## 例程

- [语音控制 RGB 灯圈 ( 中文 )](https://github.com/m5stack/esp-adf/blob/master/examples/get-started/M5Node/main/play_mp3_example.c)

<img src="assets/img/product_pics/base/base_example/example_base_node_01.png">

## 相关视频

**NODE 的演示 - 语音识别**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Node%20Module.mp4" type="video/mp4">
</video>
