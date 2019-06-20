 # Unit RFID {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_rfid_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/rfid-sensor-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**RFID** 是一款射频识别 Unit.内置**MFRC522**芯片，工作频率为13.56MHz.支持读卡、写卡、识别、记录、对RF卡进行编码和授权等多个功能.利用磁场感应技术，实现进行非接触式双向信息交互，读取感应卡的信息并验证.能够运用在门禁系统、打卡系统、仓库货物进存和小区车辆出入登记等需要进行信息验证的应用场景.

该 Unit 通过GROVE A IIC（0x28）与M5Core连接.

## 产品特性

- 工作频率: 13.56 MHz
- I2C 数据速率: 快速模式: 最高400 Kbit/s; 高速模式: 最高3400 Kbit/s
- RC522 收发器缓冲器: 64 bytes
- 支持的协议: ISO14443A, MIFARE and NTAG
- 工作温度: -20℃-85℃
- 数据保存: > 10 年
- 读写距离: < 8 cm
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

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


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RFID.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/Arduino).*

烧录例程 RFID.ino 后，当设备运行. 使用IC卡或手机NFC放置在 RFID Unit 上.M5Core屏幕上将打印出其ID信息.

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

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/UIFlow).*

使用[UIFlow](flow.m5stack.com)下载该案例程序到M5Core中后将感应卡放置在 RFID Unit 上.M5Core屏幕将显示打印其对应的ID信息.

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_02.png">

## 原理图

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
