# LORA模块

<img src="assets/img/product_pics/module/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_03.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.70.6c2275f4nUJEfh&id=559302217850)**

## 描述

<mark>LoRa</mark>模块是内置名为Ra-02的LoRa小模组的M5Stack系列LoRa模块。堆叠了M5Core之后，你可以用UiFlow、Arduino和MicroPython来编程它。

M5Stack LoRa模块适用于长距离通信，结合多个LoRa模块，能组成长达1-2公里的物联网低功耗通信网络。它克服了传统物联网通信中长距离可是高功耗的难点。与蓝牙WIFI等通信技术相互弥补。

## 特性

-  LoRa模块型号RA-02
-  支持FSK, GFSK, MSK, GMSK调制解调制式
-  长距离低功耗
-  内置天线

## 包含

-  1x M5Stack LoRa模块

## 应用

-  自动抄表系统
-  楼宇自动化
-  远程灌溉系统

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[LoRa模块信息](http://wiki.ai-thinker.com/lora) (LoRa)**

?> **Note** 如果堆叠了LoRa模块之后，上电，可是M5Core不能正常显示或者有其他显示问题时，建议在`m5.begin();`语句之前加入如下语句

```cpp
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
```
?> **Note** 因为GPIO5连接到LoRa模块的NSS引脚，该引脚在系统上电的时候需要上拉，从而避免LCD不能显示。

## 例程

### 1. Arduino IDE

这是主从LORA模块点对点通信的例程，模块与M5Core之间通过AT指令通讯。

```c++
/*
* Master.ino
*/
Serial2.begin(9600, SERIAL_8N1, 16, 17);

/* LoRaWAN Init */
//entry test mode
Serial2.print("AT+Mode=Test");
//Configure the modem,like Freq, SF, BW, Preamble length, TX output power
Serial2.print("AT+TEST=RFCFG,472.3,8,250,8,8,20");
//send data as HEX format
Serial2.print("AT+TEST=TXLRPKT,"00 00 01 00 00 AF 80 07 02 00 00 39"");
```

```c++
/*
* Slaver.ino
*/
Serial2.begin(9600, SERIAL_8N1, 16, 17);
/* LoRaWAN Init */
//entry test mode
Serial2.print("AT+Mode=Test");
//Configure the modem,like Freq, SF, BW, Preamble length
Serial2.print("AT+TEST=RFCFG,472.3,8,250,8,8,20");
//allow to receive data
Serial2.print("AT+TEST=RXLRPKT");
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino)。

## 原理图
