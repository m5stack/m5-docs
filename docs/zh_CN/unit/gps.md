# Unit GPS {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_gps_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_grove_c.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.51a6425e6lnUwE&id=583664452054)**

## 描述

**<mark>GPS</mark>**是一款集成中科微北斗导航芯片 AT6558 和信号放大芯片 MAX2659 的 Unit。AT6558 是车载设备级别的芯片，性能强悍，支持多种卫星导航系统，以 56 通道接收卫星信号，同时接收六个卫星导航系统的 GNSS 信号，并且实现联合定位、导航和授时，获得准确的全球位置信息。AT6558 能够在城市、峡谷、高架下面等弱信号的地方，以及汽车内部任何位置可以快速、准确地定位。使得模块可广泛用于车载监控、公交车报站、车载导航、船载导航、笔记本导航等产品上。

Unit 还内置了信号放大器 **MAX2659**。

该 Unit 接 M5Core 的 GROVE C(UART) 口之后，M5Core 通过串口与它通讯。

串口参数：波特率 ( 默认为 9600bps ), 起始位 ( 1位 ), 停止位 ( 1位 ), 校验位 ( 无 )

## 特性

- 功能规范
  - 定位精度：2.5米（CEP50，开阔地）
  - 通道：56
  - 支持 BDS/GPS/GLONASS 卫星导航系统的单系统定位，或者任意组合的多系统联合定位
  - 支持 D-GNSS 差分定位
  - 定位更新频率：1-10Hz
  - 最大高度：1800 米
  - 最大速度：515 m/s
  - 最大加速度：<= 4 G
- 低功耗
  - BDS/GPS 双模连续运行：<23mA（@3.3V）
  - 待机：<10uA（@3.3V）
- 灵敏度
  - 跟踪：-162dBm
  - 捕捉：-148dBm
  - 冷启动：-146dBm
- 启动时间
  - 冷启动：35 秒
  - 温启动：32 秒
  - 热启动：1 秒
- 工作温度：-40~85℃
- Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x GPS Unit
- 1x Grove 线

## 应用

- 车载、船载定位与导航
- 高精度授时
- 智能执法定位

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [AT6558](http://www.icofchina.com/d/file/xiazai/2016-12-05/b1be6f481cdf9d773b963ab30a2d11d8.pdf) - [MAX2659](https://datasheets.maximintegrated.com/en/ds/MAX2659.pdf)

- **[TinyGPS++ 库官网](http://arduiniana.org/libraries/tinygpsplus/)**

- **[AT6558 的信息](http://www.icofchina.com/pro/dingwei/2016-07-29/5.html)**

- **[CASIC 多模卫星导航接收机协议规范](http://www.icofchina.com/d/file/xiazai/2017-05-02/ea0cdd3d81eeebcc657b5dbca80925ee.pdf)**

- **[上位机软件 GnssToolKit3(Windows版本)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

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

烧录例程 `GPSRaw.ino` 之后，屏幕和串口显示终端会打印如下类似的信息

```
$GNGGA,063012.000,2234.87140,N,11357.22414,E,1,06,4.2,7.3,M,0.0,M,,*7D
$GNGLL,2234.87140,N,11357.22414,E,063012.000,A,A*4C
$GPGSA,A,3,01,09,11,18,23,,,,,,,,6.3,4.2,4.7*32
$BDGSA,A,3,13,,,,,,,,,,,,6.3,4.2,4.7*21
$GPGSV,3,1,10,01,54,164,33,04,,,22,08,46,019,,09,23,230,24*40
$GPGSV,3,2,10,11,81,200,12,18,65,110,26,23,14,195,25,27,18,041,*78
$GPGSV,3,3,10,28,10,300,15,30,33,319,*7C
$BDGSV,1,1,01,13,43,195,29*5A
$GNRMC,063012.000,A,2234.87140,N,11357.22414,E,0.69,171.74,240419,,,A*7A
$GNVTG,171.74,T,,M,0.69,N,1.27,K,A*2C
$GNZDA,063012.000,24,04,2019,00,00*46
$GPTXT,01,01,01,ANTENNA OPEN*25
```

**分析：**

**$GNRMC,063012.000,A,2234.87140,N,11357.22414,E,0.69,171.74,240419,,,A*7A**

表示定位信息为 UTC 时间为 06 时 30 分 12 秒，北纬 22.58119°，东经 113.95357°，日期为 2019 年 04 月 24 日

<img src="assets/img/product_pics/unit/gps/unit_gps_06.png">

<img src="assets/img/product_pics/unit/gps/unit_gps_05.png">


## 原理图

<img src="assets/img/product_pics/unit/gps_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE 接口 C)</td><td>ESP32 串口 2 接收引脚 U2RXD(GPIO16)</td><td>ESP32 串口 2 发送引脚 U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>北斗导航 Unit</td><td>信号发送引脚 TXD</td><td>信号接收引脚 RXD</td><td>5V</td><td>GND</td></tr>
</table>
