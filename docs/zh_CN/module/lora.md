# LORA - LoRa节点模块(433MHz) {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_03.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.70.6c2275f4nUJEfh&id=559302217850)**

## 描述

**<mark>LoRa</mark>** 是内置了Ra-02小模组的LoRa模块。堆叠了M5Core之后，你可以用UIFlow、Arduino和MicroPython来编程它。

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

?> 如果堆叠了LoRa模块之后，上电，可是M5Core不能正常显示或者有其他显示问题时，建议在`m5.begin();`语句之前加入如下语句。因为GPIO5连接到LoRa模块的NSS引脚，该引脚在系统上电的时候需要上拉，从而避免LCD不能显示。

```arduino
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
```

## 例程

### Arduino IDE

这是两个LORA模块点对点通信的例程，两个节点相互发送和接收信息。成功发送出信息，则屏幕上回答应蓝色字符串；成功接收对方的信息，则在屏幕上打印黄色字符串；如果Lora初始化失败，则屏幕上打印红色信息。

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA/Arduino)*

```arduino
#include <M5Stack.h>
#include <M5LoRa.h>

//declaration
String outgoing;                     // outgoing message
byte msgCount = 0;                   // count of outgoing messages
byte localAddress = 0xBB;            // address of this device
byte destination = 0xFF;             // destination to send to

//initialization
M5.begin();
LoRa.setPins();                      // set CS, reset, IRQ pin
LoRa.begin(433E6);                   // initialize ratio at 915 MHz

//send message
void sendMessage(String outgoing) {
  LoRa.beginPacket();                // start packet
  LoRa.write(destination);           // add destination address
  LoRa.write(localAddress);          // add sender address
  LoRa.write(msgCount);              // add message ID
  LoRa.write(outgoing.length());     // add payload length
  LoRa.print(outgoing);              // add payload
  LoRa.endPacket();                  // finish packet and send it
  msgCount++;                        // increment message ID
}

//receive message
void onReceive(int packetSize) {
  if (packetSize == 0) return;       // if there's no packet, return
  int recipient = LoRa.read();       // recipient address
  byte sender = LoRa.read();         // sender address
  byte incomingMsgId = LoRa.read();  // incoming msg ID
  byte incomingLength = LoRa.read(); // incoming msg length

  String incoming = "";

  while (LoRa.available()) {
    incoming += (char)LoRa.read();
  }
}

onReceive(LoRa.parsePacket());
```

<img src="assets/img/product_pics/module/module_example/LORA/example_module_lora_02.png">

## 原理图

<img src="assets/img/product_pics/module/lora_sch.png">