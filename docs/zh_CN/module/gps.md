# GPS - 定位导航模块 {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.69f6425e8Agsbh&id=559647865340)**

## 描述

**<mark>GPS</mark>** 是一款内置了 GPS 模组 ( NEO-M8N ) 的全球定位导航模块。

堆叠了 M5Core 之后，您可以用 [UIFlow](http://flow.m5stack.com)、 [Arduino](http://www.arduino.cc) 和 [MicroPython](http://www.micropython.org) 来编程它。烧录了程序后，只要 GPS 处于窗边或室外，它就可获取模块的全球定位信息。


模块上电之后，就会一直接收定位信息。M5Core 烧录[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)，堆叠了 GPS 模块和连接 PC 串口之后，屏幕和 PC 的串口显示终端就会打印 GPS 接收到的信息。

<img src="assets/img/product_pics/module/module_gps_07.png" width="70%" height="70%">

NEO-M8N 集成了 72 通道的 [u-blox](https://www.u-blox.com) M8 GNSS 引擎，支持多个 GNSS 系统：北斗, Galileo, GLONASS, GPS / QZSS，能同时接收 3 个 GNSS 系统的数据。

GPS 内部默认是通过 **UART2(GPIO16, GPIO17)** 与 M5Core 通讯 (可通过 [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) 更改为其他波特率通信)。

*串口参数：波特率 ( 默认为 9600bps ), 起始位 ( 1位 ), 停止位 ( 1位 ), 校验位 ( 无 )*

如果 GPIO16, GPIO17 用作了其他用途，那么您可以使用切割器切割 GPS 模块上默认连接的 TXD 和 RXD ，并使用焊接或 0Ω 电阻将它们连接到另一个端口 ( GPIO3, GPIO13, GPIO1, GPIO5 )。

*串口参数：波特率 ( 默认为 9600bps ), 数据位 ( 8 位 ), 起始位 ( 1 位 ), 停止位 ( 1 位 ), 校验位 ( 无 )*

<img src="assets/img/product_pics/module/module_gps_06.png" width="70%" height="70%">

!> **M5Stack Fire** 默认使用 GPIO16/17 连接到 PSRAM，它与 GPS 模块的 TXD/RXD（GPIO16，GPIO17） 重叠。因此，当使用 M5Stack Fire 中的 GPS 模块时，需要使用切割器切割 GPS 模块上默认连接的 TXD 和 RXD ，并使用焊接或 0Ω 电阻将它们连接到另一个端口。

## 特性

- 工作电压：2.7 ~ 3.6
- 工作温度：-40 ~ 80°C
- 天线类型：内置陶瓷天线和外置天线
- 可并发接收 3 个 GNSS 系统的数据
- 水平位置精度：最小 2.5m
- GPS 模组 ( NEO-M8N ) 内置 Flash，可通过 [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) 简单升级固件
- 支持的协议：NMEA, UBX, RTCM
- 业界领先的 -167dBm 灵敏度
- 与 NEO‑7 和 NEO‑6 系列向后兼容

## 包含

-  1x GPS 模块
-  1x 外置天线

## 应用

- 基于 GPS 的物流跟踪管理
- 无人驾驶汽车定位

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[GPS Info](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **[TinyGPS++库官网](http://arduiniana.org/libraries/tinygpsplus/)**

- **数据手册** - [NEO-M8N](https://www.u-blox.com/sites/default/files/NEO-M8-FW3_DataSheet_%28UBX-15031086%29.pdf)

- **[u-blox 协议手册](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)**

## 例程

### Arduino IDE

*具体例程`GPSRaw.ino`请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)。*

**注意：GPS 模块需要到室外才能接收到定位信息**

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

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_01.png">

**协议解读：请参考 [u-blox 协议手册](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)，以下是截取了 NMEA 协议中的 xxRMC 消息的说明作为示例**

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_02.png">


## 原理图

<img src="assets/img/product_pics/module/gps_sch.png">