# JOYSTICK - ジョイスティック {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_joystick_01.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!-- :electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->🛒**[購入リンク](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.6c7f425eQd3OmC&id=581195019026)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>JOYSTICK</mark>**はFACES用のJOYSTICKモジュールです。使用するためには、他にFACESベースとM5Coreをスタックさせる必要があります。ジョイスティックのX,Y方向の変位量や、Z方向のクリックが取得できます。また円形に配置された12個のフルカラーLEDをコントロールすることができます。

JOYSTICKとM5Coreの間はI2C通信で接続されています。I2Cアドレスは**0x5E**です。

<img src="assets/img/product_pics/module/module_joystick_03.png" width="60%" height="60%">

## 特徴

- 12個のフルカラーLED
- I2C通信
- シンプルなプログラミングインターフェース

## 関数

**単独LED制御**

```arduino
/*
    Parameter:
        indexOfLED: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int indexOfLED, int r, int g, int b){
  Wire.beginTransmission(FACE_JOY_ADDR);
  Wire.write(indexOfLED);
  Wire.write(r);
  Wire.write(g);
  Wire.write(b);
  Wire.endTransmission();
}
```

**各方向のジョイスティック変位量とクリック取得**

```arduino
void get_joystick_offset(void){
  Wire.requestFrom(FACE_JOY_ADDR, 5);
  if (Wire.available()) {

    y_data_L = Wire.read();
    y_data_H = Wire.read();
    x_data_L = Wire.read();
    x_data_H = Wire.read();

    button_data = Wire.read();// Z(0: released 1: pressed)
}
```

<img src="assets/img/product_pics/module/module_joystick_02.png" width="60%" height="60%">

## パッケージ内容

- 1x JOYSTICKモジュール

## 関連リンク

- **[公式ビデオ](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[ATmega328pファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/firmware_328p/FacesJoystick328)**

## サンプルコード

### Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/Arduino/faces_joystick)。*

```arduino
/*
* faces_joystick.ino
*/
#include <M5Stack.h>

#define FACE_JOY_ADDR     0X5E

// declaration
uint8_t x_data_L;
uint8_t x_data_H;
uint8_t y_data_L;
uint8_t y_data_H;
uint8_t button_data;
uint16_t x_data;
uint16_t y_data;

// initialization
M5.begin();
Wire.begin();

// get data from ENCONDER
Wire.requestFrom(FACE_JOY_ADDR, 5);
if (Wire.available()) {
  y_data_L = Wire.read();
  y_data_H = Wire.read();
  x_data_L = Wire.read();
  x_data_H = Wire.read();
  button_data = Wire.read();// Z(0: released 1: pressed)
  x_data = x_data_H << 8 |x_data_L;
  y_data = y_data_H << 8 |y_data_L;
}

// I2C send data, 4bytes
Wire.beginTransmission(FACE_JOY_ADDR);
Wire.write(indexOfLED);
Wire.write(r);
Wire.write(g);
Wire.write(b);
Wire.endTransmission();
```
