# COMMU モジュール {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_commu_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_commu_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-New-COMMU-Module-Extend-RS485-TTL-CAN-I2C-Port-with-MCP2515-TJA1051-SP3485-Development-Board/3226069_32954475633.html)**

## 概要

**<mark>COMMU</mark>**モジュールはアプリケーション設計の大部分を満たす事ができる通信インターフェースコンバータモジュールです。1つのRS-485インターフェース、１つのCANインターフェース、2つのI2Cインターフェースを備えています。M5Coreにスタックするだけで、RS-485デバイスやCANデバイスを制御する事が可能です。TTLインターフェースに注意してください。デフォルトではUARTですが、(J6, J7, J9, J10)のジャンパを変更する事でUART2に接続可能です。

## 特徴

- 2x I2C インタフェース
- 1x CAN インタフェース(コントローラ: MCP2515, トランシーバ: TJA1051)
- 1x RS-485 インタフェース(SP3485)
- 1x TTL インタフェース

## パッケージ内容

- 1x COMMU モジュール

## ピンマップ

| CAN | ESP32 |
|:---:|:-----:|
| CAN_CS   | GPIO12 |
| CAN_INT  | GPIO15 |
| CAN_SCK  | GPIO18 |
| CAN_MISO | GPIO19 |
| CAN_MOSI | GPIO23 |

| I2C Interface | ESP32 |
|:-------------:|:-----:|
| IIC_SDA | GPIO21 |
| IIC_SCL | GPIO22 |

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[データシート](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **データシート** - [MCP2515](http://ww1.microchip.com/downloads/en/devicedoc/20001801h.pdf) - [TJA1051](https://www.nxp.com/docs/en/data-sheet/TJA1051.pdf) - [SP3485](https://www.exar.com/ds/sp3485.pdf)

## サンプルコード

### Arduino IDE

#### CAN通信

COMMUでCAN通信を行うためのサンプルコードです。

[MCP_CAN_lib file](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/DependentLibrary/MCP_CAN_lib)を`C:\Users\<user_name>\Documents\Arduino\libraries`配下にコピーします。そして`commu_can_transmitter.ino`と`commu_can_receiver.ino`を2つのM5Coreにそれぞれ書き込みます。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/CAN)*

```arduino
/*
    commu_can_transmitter.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// 宣言
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// 初期化
M5.begin();
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Change to normal mode to allow messages tobe transmitted */
CAN0.setMode(MCP_NORMAL);

// データ送信
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

// 宣言
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// 初期化
M5.begin();
/* Initialize MCP2515 running at 16MHz with a baudrate of 500kb/s */
/* and the masks and filters disabled. */
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Set operation mode to normal so theMCP2515 sends acks to received data. */
CAN0.setMode(MCP_NORMAL);
pinMode(CAN0_INT, INPUT);// Configuring pin for /INT input

// 受信データ読み込み
CAN0.readMsgBuf(&rxId, &len, rxBuf);
```

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_01.png" width="50%" height="50%">

#### RS485通信

COMMUでRS485通信を行うためのサンプルコードです。

[example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/RS485)を ２つのM5Coreにそれぞれ書き込みます。そしてAボタンを押すと、データの送受信が行われます。

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_02.png" width="50%" height="50%">

# 回路図

<img src="assets/img/product_pics/module/commu_sch.png">
