
# RFID - 射频识别

<img src="assets/img/product_pics/unit/unit_rfid_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.57b2425efMuoxt&id=583870753197)**

## 描述

**<mark>RFID</mark>**是一款集成**MFRC522**射频识别芯片(通讯在13.56MHz频段)的Unit，利用磁场感应技术，实现进行非接触式双向信息交互，读取感应卡的信息并验证。利用该unit能实现读卡设备功能，能识别并记录多张卡信息，建立门禁系统、打卡系统、仓库货物进存和小区车辆出入登记等方面的应用。

该Unit通过GROVE线连接至M5Core的GROVE A接口，并通过IIC通信，其IIC地址为0x28。

## 特性

-  IIC速率400 ~ 3400Kbit/s
-  RC522收发缓冲: 64bytes
-  支持的RFID协议: ISO14443A、MIFARE和NTAG
-  工作温度: -20℃-85℃
-  数据保存: > 10年
-  GROVE接口，支持[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 应用

-  智能家居门禁系统
-  车辆管理
-  RFID食品安全溯源
-  RFID图书管理

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **数据手册** - [MFRC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/Arduino)。*

烧录例程RFID.ino之后，IC卡或者打开手机NFC，靠近unit，在unit附近来回移动，M5Core的屏幕上就会打印出IC卡或手机中RFID芯片的UID。

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

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_01.png" width="55%" height="55%">

<!-- ### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_02.png" width="55%" height="55%"> -->

## 原理图

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID射频识别Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
