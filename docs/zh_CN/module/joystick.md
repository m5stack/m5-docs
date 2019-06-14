# Module JOYSTICK {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_joystick_01.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.6c7f425eQd3OmC&id=581195019026)**

## 描述

**JOYSTICK** 是一款兼容 FACE 套件的摇杆控制面板.通过推动面板上的摇杆能够进行角度、方向等数据的输入.使用I2C协议通讯，能够获取摇杆的偏移数据(X,Y坐标)，以及中间按钮的状态.在摇杆的周围嵌入了由12个LED组成的LED bar，你可以根据你的需求自定义LED灯的发光形式.

JOYSTICK I2C 地址 0x5E.

<img src="assets/img/product_pics/module/module_joystick_03.png" width="60%" height="60%">

## 产品特性

-  12 RGB Led
-  I2C 通讯
-  简洁的API接口

## 功能函数

**控制RGB灯圈**

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

**读取摇杆各个方向的偏移量**

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

## 包含

-  1x M5Stack JOYSTICK 模块
-  1x Joystick 摇杆

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[JOYSTICK 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/firmware_328p/FacesJoystick328)**

## EasyLoader

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.
[点击此处下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Module/MiniBurner_Faces_Joystick.exe)

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### Arduino IDE

*以下代码仅为片段，如需获取完整代码，[请点击此处. ](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/JOYSTICK/Arduino/faces_joystick)。*

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

// IIC send data, 4bytes
Wire.beginTransmission(FACE_JOY_ADDR);
Wire.write(indexOfLED);
Wire.write(r);
Wire.write(g);
Wire.write(b);
Wire.endTransmission();
```
