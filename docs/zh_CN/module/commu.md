# COMMU - 通信模块

<img src="assets/img/product_pics/module/module_commu_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_commu_02.png" width="30%" height="30%">

***

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.64.6c2275f4nUJEfh&id=580999880340)** -->

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.64.6c2275f4nUJEfh&id=580999880340)**

## 描述

<mark>COMMU</mark>是一个通讯接口转换模块，能将M5Core的IO口转换并外拓成其他类型的接口，满足多种产品设计需求。目前模块外拓2个I2C接口，MCU的TTL电平已经转换成一个CAN接口和一个RS485接口，同时也附带一个直接外拓的TTL电平接口。这意味着，当你设计产品需要用到CAN通讯或RS485通讯的设备时，可以直接使用该模块，堆叠与M5Core主控板，即可驱动对应设备，无需另外订做接口转换电路板。

COMMU模块中的TTL接口，实际上是串口接口，默认连接的是串口0，不过可以通过焊接跳转接口，可以跳转成连接串口2。跳线接口Jumper是J6, J7, J9, J10。

## 特性

-  拓展2个 I2C 接口, 1个 CAN 接口, 1个 RS485 接口, 1个 TTL 接口

## 包含

-  1x M5Stack COMMU Module

## 管脚分配

| *CAN*        | *ESP32 Chip*      |
| :----------: |:------------: |
| CAN_CS       | GPIO12         |
| CAN_INT      | GPIO15         |
| CAN_SCK      | GPIO18         |
| CAN_MISO     | GPIO19         |
| CAN_MOSI     | GPIO23         |


| *I2C Interface*   | *ESP32 Chip*      |
| :--------------:  |:------------: |
| IIC_SDA           | GPIO21         |
| IIC_SCL           | GPIO22         |

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### Arduino IDE

#### CAN通信

这是两个COMMU模块分别堆叠了M5Core之后，相互之间收发数据的例程。

先将库[MCP_CAN_lib](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/DependentLibrary/MCP_CAN_lib)放置到Arduino的库管理文件路径`C:\Users\<user_name>\Documents\Arduino\libraries`中，然后分别打开CAN的发送和接收两个程序，并分别烧录到两个m5core中。

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/CAN).*

```arduino
/*
    commu_can_transmitter.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// declaration
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// initialization
M5.begin();
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Change to normal mode to allow messages tobe transmitted */
CAN0.setMode(MCP_NORMAL);

// send data
CAN0.sendMsgBuf(0x100, 0, 8, data);
```

```arduino
/*
    commu_can_receiver.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// declaration
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// initialization
M5.begin();
/* Initialize MCP2515 running at 16MHz with a baudrate of 500kb/s */
/* and the masks and filters disabled. */
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Set operation mode to normal so theMCP2515 sends acks to received data. */
CAN0.setMode(MCP_NORMAL);
pinMode(CAN0_INT, INPUT);// Configuring pin for /INT input

// read data
CAN0.readMsgBuf(&rxId, &len, rxBuf);
```

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_01.png" width="50%" height="50%">

#### RS485通信

这是两个M5Core之间通过RS485相互收发数据的例程。

分别下载[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/RS485)到两个M5Core之后，按下按键A，然后两个core之间会相互发送数据。

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_02.png" width="50%" height="50%">

# 原理图

<img src="assets/img/product_pics/module/commu_sch.png">