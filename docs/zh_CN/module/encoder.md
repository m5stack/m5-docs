# ENCODER - 旋转编码

<img src="assets/img/product_pics/module/module_encoder_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_encoder_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.12b9425efVP5Y2&id=583870225775)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.12b9425efVP5Y2&id=583870225775)** -->

## 描述

<mark>ENCODER</mark>是一款FACES系列中的旋转编码器模块，需要堆叠了FACES底座和主控M5Core来使用。能输出旋转角度大小，旋钮是否按下这些信息。

IIC地址为0X5E

## 特性

-  12颗RGB灯
-  3.5 mm耳机插孔和麦克风(麦克风位置需要用户自行焊接O欧姆电阻来使能)
-  Parameter:
-  GSM/GPRS
-  支持频宽：850/900/1800/1900MHz

## 管脚映射

*SIM800与M5Core堆叠之后，它们之间通过UART2通信*

**SIM800**

| SIM800 Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| TXD        | U2RXD(GPIO16)         |
| RXD        | U2TXD(GPIO17)         |
| RST        | GPIO5         |

## 包含

-  1x SIM800L模块

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

<!-- -  **[SIM800L信息](http://simcomm2m.com/En/module/detail.aspx?id=138)** (SIM800L) -->

<!-- ## 例程

### Arduino IDE -->

<!-- 这是通过串口显示终端发送命令来实现SIM800模块发短信的例程。

```arduino
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
``` -->

<!-- ## 原理图 -->