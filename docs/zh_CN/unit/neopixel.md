# NEOPIXEL - 灯条Unit

<img src="assets/img/product_pics/units/M5GO_Unit_neopixel.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.31.6c2275f4nUJEfh&id=580453719549)**

## 描述

<mark>NeoPixel</mark>是带GROVE接口的NeoPixel灯带，将NeoPixel Unit与M5Core相连，可以很方便地实现控制，特别是使用[UiFlow](http://flow.m5stack.com)来编程。

?> **Tip** 注意NeoPixel Unit有输入和输出口，在接M5Core的时候，记得看清楚Unit上的箭头(顺序)方向，一定要输入口接M5Core，然后输出口还可以通过GROVE线，接下一条NeoPixel Unit，从而串联一起。

## 特性

-  可选长度: 10cm/20cm/0.5m/1m/2m
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

<!-- ```c++
DHT12 dht12; //new a object
Adafruit_BMP280 bme;

float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。 -->

### 2. UIFlow

<img src="assets/img/product_pics/units/unit_example/NEOPIXEL/example_unit_neopixel_01.png" width="60%" height="60%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/UIFlow)。

<!-- ## 原理图

<img src="assets/img/product_pics/units/neopixel_sch.JPG"> -->

<!-- ### 管脚映射 -->

<!-- <table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOPIXEL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table> -->