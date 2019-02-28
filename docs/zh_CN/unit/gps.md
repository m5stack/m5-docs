# GPS - 北斗导航 {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_gps_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_grove_c.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.51a6425e6lnUwE&id=583664452054)**

## 描述

**<mark>GPS</mark>**是一款集成中科微北斗导航芯片 AT6558 和信号放大芯片 MAX2659 的 Unit。AT6558 是车载设备级别的芯片，性能强悍，支持多种卫星导航系统，同时接收六个卫星导航系统的 GNSS 信号，并且实现联合定位、导航和授时，获得准确的全球位置信息。

该 Unit 接 M5Core 的 GROVE C(UART) 口之后，M5Core 通过串口与它通讯。

## 特性

- 功能规范
  - 定位精度：2.5米（CEP50，开阔地）
  - 支持BDS/GPS/GLONASS卫星导航系统的单系统定位，或者任意组合的多系统联合定位
  - 最大定位更新频率：10Hz
  - 支持D-GNSS差分定位
- 低功耗
  - BDS/GPS双模连续运行：<23mA（@3.3V）
  - 待机：<10uA（@3.3V）
- 工作温度：-40~85℃
<!-- -  GROVE接口，支持[UIFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程 -->
- Unit内置两个Lego插件孔，方便与Lego件结合

## 应用

- 车载、船载定位与导航
- 高精度授时
- 智能执法定位

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [AT6558](http://www.icofchina.com/d/file/xiazai/2016-12-05/b1be6f481cdf9d773b963ab30a2d11d8.pdf) - [MAX2659](https://datasheets.maximintegrated.com/en/ds/MAX2659.pdf)

- **[TinyGPS++库官网](http://arduiniana.org/libraries/tinygpsplus/)**

- **[AT6558的信息](http://www.icofchina.com/pro/dingwei/2016-07-29/5.html)**

- **[CASIC多模卫星导航接收机协议规范](http://www.icofchina.com/d/file/xiazai/2017-05-02/ea0cdd3d81eeebcc657b5dbca80925ee.pdf)**

- **[上位机软件GnssToolKit3(Windows版本)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

## 例程

### Arduino IDE

*具体例程`GPSRaw.ino`请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/Arduino)。*

```arduino
#include <M5Stack.h>

/* By default, GPS is connected with M5Core through UART2 */
HardwareSerial GPSRaw(2);

void setup() {
  M5.begin();
  GPSRaw.begin(9600);// GPS init
  Serial.println("hello");
  termInit();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()) {
    int ch = Serial.read();
    GPSRaw.write(ch);
  }
  if(GPSRaw.available()) {
    int ch = GPSRaw.read();// read GPS information
    Serial.write(ch);
    termPutchar(ch);
  }
}
```

烧录例程`GPSRaw.ino`之后，屏幕和串口显示终端会打印如下类似的信息

```
$GPGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5*02
$BDGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5*13
$GPGSV,1,1,00*79
$BDGSV,1,1,00*68
$GNRMC,,V,,,,,,,,,,M*4E
$GNVTG,,,,,,,,,M*2D
$GNZDA,,,,,,*56
$GPTXT,01,01,01,ANTENNA OPEN*25
```

## 原理图

<img src="assets/img/product_pics/unit/gps_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口C)</td><td>ESP32串口2接收引脚U2RXD(GPIO16)</td><td>ESP32串口2发送引脚U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>北斗导航Unit</td><td>信号发送引脚TXD</td><td>信号接收引脚RXD</td><td>5V</td><td>GND</td></tr>
</table>
