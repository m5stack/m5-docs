# CarKB - QWERTY键盘 {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_cardkb_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_cardkb_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.270c425eSKImzN&id=584854269757)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.270c425eSKImzN&id=584854269757)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

## 描述

**<mark>CardKB</mark>**是一个实现QWERTY全键盘的Unit，还可以实现按键组合(Sym+Key, Shift+Key, Fn+Key)，输出更丰富的键值。与M5Core之间通过GROVE线连接，IIC通信。(IIC地址为0x5F)

**1. 键盘组合说明：**

* **无按键组合**，键盘输出第一按键值(按下键盘字母键，默认输出小写）。例如：按下"Q"，会输出小写"q"。

* **Sym+按键组合**，键盘输出第二按键值。例如：单击"Sym"之后，按下"Q"，会输出"{"。快速双击"Sym"后，锁定Sym功能，对之后每个按键都生效。

* **Shift+按键组合**，按下键盘字母键，输出大写。例如：单击"Shift"之后，按下"Q"，会输出大写"Q"。快速双击"Shift"后，锁定Shift功能，对之后每个按键都生效，每次按下字母按键都会输出大写。

* **Fn+按键组合(自定义功能按键组合)**，按下键盘按键输出第三键值，用户可以自定义键值对应的功能

**2. 按键组合与键值表**，分别是无按键组合与对应键值、Sym+按键组合与对应键值、Shift+按键组合与对应键值和Fn+按键按组合与对应键值：

<img src="assets/img/product_pics/unit/unit_cardkb_04.png">

## 特性

-  GROVE接口，IIC通讯
-  全键盘功能，多种按键组合方式

<!-- ，支持[UIFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程 -->

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[模块内MEGA328固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/firmware_328p/CardKeyBoard)**

## 例程

### 1. Arduino IDE

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/Arduino)。*

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

<!-- ### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)。* -->

<!-- <img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/1.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/2.png" width="55%" height="55%"><img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/3.png" width="55%" height="55%"> -->

<!-- <img src="assets/img/product_pics/unit/unit_example/BUTTON/example_unit_button_04.png" width="55%" height="55%"> -->

 <!-- width="30%" height="30%" -->

<!-- ## 原理图

<img src="assets/img/product_pics/unit/button_sch.JPG"> -->

### 管脚映射

<table>
 <tr><td>M5Core(GROVE接口A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>CardKB</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**CarKB 的使用演示**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Cardkb.mp4" type="video/mp4">
</video>
