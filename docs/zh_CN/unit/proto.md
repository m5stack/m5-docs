# PROTO {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_proto.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_proto_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.61.3a93425e5PQbBs&id=577364213337)**

## 描述

**<mark>PROTO</mark>** 是一款空白电路板 Unit ，便于自定义的简单电路集成到 Unit 外壳中。

如果你需要定制简单电路，并希望采用 Unit 这种封装方式的话，可以直接将电路焊接到 PROTO Unit 中。最后通过 GROVE 线连接到 M5Core ，实现 M5Core 来控制你的自定义电路。

<!-- 可以自定义电路并焊接到上面的洞洞板Unit。你可以定义项目适用的电路到该Unit上，然后最终可以通过M5Core来实现控制。 -->

## 特性

-  70 孔(每个孔宽：100mil)
-  GROVE接口，支持[UIFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 原理图

<img src="assets/img/product_pics/unit/proto_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PROTO Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>