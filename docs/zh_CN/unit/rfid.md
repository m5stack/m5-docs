 # RFID - 射频识别 {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_rfid_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.57b2425efMuoxt&id=583870753197)**

## 描述

**<mark>RFID</mark>**是一款集成 **MFRC522** 射频识别芯片的Unit。MFRC522 工作在 13.56MHz 频段，利用调制解调原理，与感应卡交互数据。MFRC522 支持 MIFARE 更高速的非接触式通信，双向数据传输速率高达 424 kbit/s。利用该unit能实现读卡设备功能，能识别并记录多张卡信息，建立门禁系统、打卡系统、仓库货物进存和小区车辆出入登记等方面的应用。

该 Unit 与 M5Core 通过 GROVE A 接口 ( IIC ) 通信，其 I2C 地址是 0x28 。

## 特性

- IIC 速率：快速模式：最高 400Kbit/s；高速模式：最高 3400Kbit/s
- RC522 收发缓冲: 64 bytes
- 支持的 RFID 协议: ISO 14443A、MIFARE 和 NTAG
- 工作温度: -20℃-85℃
- 数据保存: > 10 年
- 读写距离：< 8 cm
- GROVE 接口，支持 [UIFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc) 编程
- Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x RFID Unit
- 1x Grove 线

## 应用

-  智能家居门禁系统
-  车辆管理
-  智能交通
-  智能书架

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [MFRC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/Arduino)。*

烧录例程 RFID.ino 之后，IC 卡或者打开手机 NFC，靠近 unit，在 unit 附近来回移动，M5Core 的屏幕上就会打印出 IC 卡或手机中 RFID 芯片的 UID。

```arduino
/*
    RFID.ino
*/
#include <Wire.h>
#include "MFRC522_I2C.h"
#include <M5Stack.h>

// 0x28 is i2c address on SDA. Check your address with i2cscanner if not match.
MFRC522 mfrc522(0x28);   // Create MFRC522 instance.

// initialization
M5.begin(); Serial.begin(115200); Wire.begin();
/* Init MFRC522 */
mfrc522.PCD_Init();
/* Show details of PCD - MFRC522 Card Reader details */
ShowReaderDetails();

// get the uid of available card
mfrc522.PICC_IsNewCardPresent();// scan for a new card
mfrc522.PICC_ReadCardSerial();// read data
// a new card is selected. The UID and SAK is saved at mfrc522.uid structor.
for (byte i = 0; i < mfrc522.uid.size; i++) {
  Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
  Serial.print(mfrc522.uid.uidByte[i], HEX);
}

// other function
void ShowReaderDetails() {
  /* Get the MFRC522 software version */
  byte v = mfrc522.PCD_ReadRegister(mfrc522.VersionReg);
  if (v == 0x91) Serial.print(F(" = v1.0"));
  else if (v == 0x92) Serial.print(F(" = v2.0"));
  else Serial.print(F(" (unknown)"));
}
```

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_01.png" width="100%" height="100%">

### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/UIFlow)。*

通过 [UIFlow](flow.m5stack.com) 打开并烧录例程之后，放置感应卡到 Unit 表面，屏幕上会显示 “ True ” 和卡的 UID 号。

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_02.png">

## 原理图

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core ( GROVE 接口 A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID 射频识别 Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
