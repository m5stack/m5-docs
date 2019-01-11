# EXT.IO - IO拓展Unit

<img src="assets/img/product_pics/unit/unit_extio_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_extio_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.3b86425eaoE9zU&id=585289717492)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.3b86425eaoE9zU&id=585289717492)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

## 描述

**<mark>EXT.IO</mark>**是用来拓展IO引脚的Unit，集成了IO拓展芯片PCA9554PW，实现两位的IIC串口引脚控制8位并口状态，实现8位并口的输入或者输出模式。在IO口紧缺的项目中，接上这个Unit可以实现由2个引脚变成8个可以独立控制的引脚。

该Unit连接到M5Core的GRVE A接口，通过IIC通讯(IIC地址是0x27)。

## 特性

- 拓展成8个输出/输出的IO引脚
- GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- 数据手册 - **[PCA9554PW](https://pdf1.alldatasheet.com/datasheet-pdf/view/86709/PHILIPS/PCA9554PW.html)**

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>EXT.IO Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>