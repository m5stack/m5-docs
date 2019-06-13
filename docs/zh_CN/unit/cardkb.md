# Unit CarKB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_cardkb_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_cardkb_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.270c425eSKImzN&id=584854269757)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**CardKB** 是一款功能齐全的QWERTY键盘.如果你想要实现一些复杂的键盘输入交互,仅仅依靠N5Core上的3个按键恐怕有些难度.面对这一难题 CardKB ，横空出世.

使用 CardKB Unit 不仅能够实现全键盘输入，还支持多种按键组合（Sym + Key，Shift + Key，Fn + Key）输出更丰富的键值.该 Unit 通过GROVE A端口（IIC接口）与M5Core通信. I2C地址为0x5F.

**1. 按钮组合说明:**

* **按下单个按键**,键盘将输出第一键值（字母键值则输出小写形式）. 例如，按下"Q"，键盘将输出"q"（小写形式）.

* **Sym+key**, 键盘将输出第二键值.例如，单击"Sym"后，按下"Q"，键盘将输出"{". 双击"Sym"锁定功能,之后按下的任意按键都将输出第二键值.再次双击"Sym"进行解锁.

* **Shift+key**, 键盘将输出字母的大写形式.例如，单击"Shift"后，按下"Q"，键盘将输出"Q"（大写形式）.双击"Shift"锁定功能，之后按下的任意按键都将输出大写形式，再次双击"Shift"进行解锁.

* **Fn+key(自定义功能键组合)**, 键盘将输出第三键值.你可以自定义按下的按键其对应的功能.

<img src="assets/img/product_pics/unit/unit_cardkb_04.png">

## 产品特性

- 全键盘输入，多种按键组合.
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc)

## 包含

- 1x CardKB Unit
- 1x Grove 线

## 应用

- M5Stack Core 的键盘外设

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[CardKB 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/firmware_328p/CardKeyBoard)**

## 例程

### Mini Burner

>1.Mini Burner是一个简洁快速的程序烧录器，每一个产品页面里的Mini Burner都提供了一个与产品相关的案例程序.
[点击此处下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_CardKB.exe)

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.Mini Burner烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/Arduino)。*

```arduino
#include <Wire.h>
#include <M5Stack.h>

#define CARDKB_ADDR 0x5F

void setup()
{
  M5.begin();
  Serial.begin(115200);
  Wire.begin();
  pinMode(5, INPUT);
  digitalWrite(5, HIGH);
  M5.Lcd.fillScreen(BLACK);
  M5.Lcd.setCursor(1, 10);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setTextSize(2);
  M5.Lcd.printf("IIC Address: 0x5F\n");
  M5.Lcd.printf(">>");
}
void loop()
{
  Wire.requestFrom(CARDKB_ADDR, 1);
  while (Wire.available())
  {
    char c = Wire.read(); // receive a byte as characterif
    if (c != 0)
    {
      M5.Lcd.printf("%c", c);
      Serial.println(c, HEX);
     // M5.Speaker.beep();
    }
  }
}
```

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_01.png" width="80%" height="80%">

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_02.png">

<!-- ### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)。* -->

<!-- <img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/1.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/2.png" width="55%" height="55%"><img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/3.png" width="55%" height="55%"> -->

<!-- <img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_04.png" width="55%" height="55%"> -->

 <!-- width="30%" height="30%" -->

<!-- ## 原理图

<img src="assets/img/product_pics/unit/button_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>CardKB</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**CarKB 的使用演示**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Cardkb.mp4" type="video/mp4">
</video>
