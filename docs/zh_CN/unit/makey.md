# Unit MAKEY {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_makey_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_makey_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.51.159c425eoqBTTY&id=577636777112)**

## 描述

**MAKEY** 是一款创意键盘 Unit.该 Unit 的灵感来自一个名为Makey Makey的发明套件，它带给用户全新的交互使用概念.将日常物品连接至该 Unit，利用物体的导电性构建一个电路回路，从而模拟键盘输入或是鼠标点击的信号.例如将水果接入回路，当我们触碰水果时，将产生电信号用作控制，基于这样的交互方式能够制作水果钢琴，或是游戏控制器等应用.

该 Unit 通过GROVE A接口与M5Core进行通信，I2C地址为0x51.

**使用方法：**

1）驱动 Unit 上的蜂鸣器发出声音:

使用杜邦线（公对公），将其一端插入"GND"，当另一端短接至 Unit 上的键值的时候,蜂鸣器将发出相应的音调.


2）驱动M5Core的扬声器:
将 MAKEY Unit 连接至 M5Core 的 Grove A.并烧录该[案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version).

在 MAKEY Unit 上使用同样的方式进行"GND"短接,将驱动M5Core发出对应的音调.

## 产品特性

- Arduino Mega328p 控制器
- 内置蜂鸣器
- 内置16个音调
- 开发平台: Arduino, UIFlow(Blockly,Python)
- 2x LEGO 兼容孔

## 包含

- 1x MAKEY Unit
- 1x Grove 线

## 应用

- 水果键盘

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_05.png" width="40%" height="40%">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[Maykey 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/firmware_328p)**


## EasyLoader

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.
[点击此处下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Makey.exe)

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version).*

```arduino
#include <M5Stack.h>
#include <Wire.h>

// initialization
M5.begin();
pinMode(21, INPUT); pinMode(22, INPUT);
Wire.begin();// Init I2C

// read data
Wire.requestFrom(MAKEY_ADDR, 2);
while (Wire.available()) {
  Key1 = Wire.read();//read data from MAKEY
  Key2 = Wire.read();//read data from MAKEY
  tone_key = (Key2<<8) | Key1;// the following picture will explain "tone_key"
}
```

<img src="assets/img/product_pics/unit/unit_example/MAKEY/tone_key_pitch_zh_CN.png">

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_04.png" width="30%" height="30%">

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/MAKEY/example_unit_makey_02.png">

## 原理图

<img src="assets/img/product_pics/unit/makey_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_03.png" width="30%" height="30%">