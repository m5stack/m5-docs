# GPS模块

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.69f6425e8Agsbh&id=559647865340)**

## 描述

GPS 模块是一款内置了GPS小模组的M5Stack系列可堆叠模块。内置的GPS小模块名字为UBLOX NEO-M8N。堆叠了M5Core之后，你可以用UiFlow、Arduino和MicroPython来编程它。它都可提供全球定位信息，即使你在室外的任何地方。模块上电之后，就会一直接收定位信息。M5Core烧录[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)，堆叠了GPS模块和连接PC串口之后，屏幕和PC的串口显示终端就会打印GPS接收到的信息。

GPS Module内部默认是通过UART2(GPIO16, GPIO17)与M5Core通讯，你可以通过修改0欧姆电阻跳线修改。

## 特性

-  GPS NEO-M8N模块
-  高性能
-  高灵敏度
-  业界领先的-167dBm灵敏度

## 包含

-  1x M5Stack GPS模块
-  1x M5Stack天线

## 应用

-  儿童定位手表
-  基于GPS的物流跟踪管理

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **[GPS Info](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

## 例程

### Arduino IDE

```c++
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

烧录`GPSRaw.ino`之后，屏幕和串口显示终端会打印如下类似的信息

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

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)。

## 原理图

<img src="assets/img/product_pics/module/gps_sch.png">