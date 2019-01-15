# LoRaWAN - LoRa节点模块(433/470MHz和868/915MHz)

<img src="assets/img/product_pics/module/module_lorawan_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lorawan_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.61.6c2275f4nUJEfh&id=580998112819)**

## 描述

<mark>LoRaWAN</mark>是一个内置了LoRaWAN模块的M5模块，LoRaWAN模块主要由LoRa芯片(SX1276)和ST的MCU组成，集成了完整的LoRa协议栈。 所以，在使用这个高集成度模块的时候，你可以直接将它与M5Core堆叠，通过串口发送**AT命令**就可以开发它，比如配置串口信息、配置射频信息(频率、带宽、发送功率等)、发送信息的内容等等。

LoRaWAN**默认的串口配置：**
波特率：9600；8位数据位；无奇偶校验；1位停止位。

?> 丝印"LoRaWAN"底下的5个孔是专门预留用于升级LoRaWAN模块固件。

## 特性

-  支持频段： 433/470MHz and 868/915MHz
-  支持数据率范围： 0.018-38.4kbps
-  输出功率: 17 ± 0.5dbm
-  支持 ADR(自适应数据速率)
-  内置天线

## 包含

-  1x LoRa Module

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## 管脚映射

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | U2TXD(GPIO17)    |
| TXD      | U2RXD(GPIO16)     |

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[LoRaWAN模组信息](http://wiki.ai-thinker.com/sx127x-052) (LoRaWAN)**

- **[LoRaWAN的AT指令集](http://wiki.ai-thinker.com/_media/rhf-ps01509_lorawan_class_ac_at_command_specification_-_v4.4.pdf)**

## 例程

### Arduino IDE

这是主从LORA模块点对点通信的例程，模块与M5Core之间通过AT指令通讯。

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino)。*

```arduino
/*
    Master.ino
*/

#include <M5Stack.h>

// entry test mode
String cmd_test_mode = "AT+Mode=Test";
// Configure the modem,like Freq, SF, BW, Preamble length, TX output power
String cmd_rfconf = "AT+TEST=RFCFG,472.3,8,250,8,8,20";
// send data as HEX format
String cmd_send_data = "AT+TEST=TXLRPKT,\"30 31 32 33 34 35\"";

void setup() {
  M5.begin();
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);

  delay(1000);// delay for lorawan power on
  /* LoRaWAN Init */
  Serial2.println(cmd_test_mode);
  delay(500);
  Serial2.println(cmd_rfconf);
  delay(500);
}

void loop() {
  if(M5.BtnA.wasPressed()) {
    Serial2.println(cmd_send_data);
    Serial.println(cmd_send_data);
  }
  M5.update();
}
```

```arduino
/*
    Slaver.ino
*/

#include <M5Stack.h>

// entry test mode
String cmd_test_mode = "AT+Mode=Test";
// Configure the modem,like Freq, SF, BW, Preamble length
String cmd_rfconf = "AT+TEST=RFCFG,472.3,8,250,8,8,20";
// allow to receive data
String cmd_receive_data = "AT+TEST=RXLRPKT";

void setup() {
  M5.begin();
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);
  delay(1000);// delay for lorawan power on
  /* LoRaWAN Init */
  Serial2.println(cmd_test_mode);
  delay(500);
  Serial2.println(cmd_rfconf);
  delay(500);
  Serial2.println(cmd_receive_data);
  delay(500);
}

void loop() {
  if(Serial2.available()) {
    int ch = Serial2.read();
    M5.Lcd.print((char)ch);
    Serial.write(ch);
  }
}
```

## 原理图

<img src="assets/img/product_pics/module/lorawan_sch.png">