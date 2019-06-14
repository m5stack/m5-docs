# Module GPS {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.69f6425e8Agsbh&id=559647865340)**

## 描述

**GPS** 是M5Stack堆叠模块系列中的一款，卫星定位模块.基于NEO-M8N模组开发，配备有源天线.

NEO-M8能够做到花费少量的时间，进行高灵敏度采集，并且保持系统低功耗.

NEO-M8N 集成了 72 通道的 [u-blox](https://www.u-blox.com) M8 GNSS 引擎，支持多个 GNSS 系统：北斗, Galileo, GLONASS, GPS / QZSS，允许同时接收 3 个 GNSS 系统的数据。

<img src="assets/img/product_pics/module/module_gps_07.png" width="70%" height="70%">

M5Core与GPS模块之间使用UART通信协议，通过连接引脚**UART2 (GPIO16, GPIO17)**实现通讯.

如果你想要更改串口波特率，请点击 ( [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) )查看.

*注意: 为了使 GPS 模块获得良好信号，请在使用时将模块放置在室外.*

*UART协议：波特率（默认为9600bps），数据位（8位），起始位（1位），停止位（1位），校验位（无）*

<img src="assets/img/product_pics/module/module_gps_06.png" width="70%" height="70%">

**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得GPS模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 GPS 模块时，你需要将 GPS 模块的 TXD 与 RXD 切断，然后通过飞线引至另一组 UART 引脚.

## 产品特性

- 工作电压：2.7 ~ 3.6
- 工作温度：-40 ~ 80°C
- 天线类型：内置陶瓷天线和外置天线
- 外部天线端口：SMA
- 可以同时从3个GNSS系统接收数据
- 水平位置精度：最小 2.5m
- GPS 模组 (NEO-M8N) 内置闪存, 通过[u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)升级固件
- 支持协议: NMEA, UBX, RTCM
- 行业领先的 -167dBm 灵敏度
- 与 NEO‑7 和 NEO‑6 系列向后兼容

## 包含

-  1x M5Stack GPS 模块
-  1x 外置天线(长度: 1 m)


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


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_GPS_Raw.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### Arduino IDE

*具体例程`GPSRaw.ino`请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino)。*

**注意: 为了使 GPS 模块获得良好信号，请在使用时将模块放置在室外.**

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

**协议规范:**

请参考 [u-blox 8 / u-blox M8 Receiver Description - Manual](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)了解更多信息, 下表是NMEA协议中xxRMC消息的指令.

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_02.png">


## 原理图

<img src="assets/img/product_pics/module/gps_sch.png">