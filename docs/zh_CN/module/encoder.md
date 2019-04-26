# Module ENCODER {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_encoder_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_encoder_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.12b9425efVP5Y2&id=583870225775)**

<!-- :memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.11.12b9425efVP5Y2&id=583870225775)** -->

## 描述

**ENCODER** 是一款兼容 FACE 套件的旋钮控制面板.专为旋转编码控制而设计,其内部集成Mega328微处理器，在旋钮的周围嵌入了由12个LED组成的LED灯环.
M5Core与ENCODER之间的串行通信协议是I2C（地址：0x5E）

<img src="assets/img/product_pics/module/module_encoder_03.png" width="60%" height="60%">

## 产品特性

-  12 RGB Led
-  I2C 通讯
-  简洁的API接口
-  内置Mega328
-  编码器检测

## 功能函数

**控制RGB灯圈**

```arduino
/*
    Parameter:
        led_index: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int led_index, int r, int g, int b){
    // IIC send data
    Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
    Wire.write(led_index);
    Wire.write(r);
    Wire.write(g);
    Wire.write(b);
    Wire.endTransmission();
}
```

**读取编码器增量**

```arduino
void get_encoder_increment(void){
    int temp_encoder_increment;

    // IIC read data
    Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
    if(Wire.available()){
       temp_encoder_increment = Wire.read();// get increment
       button_state = Wire.read();// get button value
    }
    if(temp_encoder_increment > 127){//anti-clockwise
        direction = 1;// flag for encoder direction
        encoder_increment = 256 - temp_encoder_increment;
    }
    else{// clockwise
        direction = 0;
        encoder_increment = temp_encoder_increment;
    }
}
```

## 包含

-  1x M5Stack ENCODER 模块
-  1x 编码器转盘

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[ENCODER 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/firmware_328p/FacesEncoder328)**

## 例程

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/Arduino/faces_encoder).*

```arduino
/*
* faces_encoder.ino
*/
#include <M5Stack.h>

#define Faces_Encoder_I2C_ADDR     0X5E

// declaration
int encoder_increment;//positive: clockwise nagtive: anti-clockwise
uint16_t encoder_value=0;
int button_state;
uint8_t direction;//0: clockwise 1: anti-clockwise
int temp_encoder_increment;

// initialization
M5.begin();
Wire.begin();

// get data from ENCONDER
Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
if(Wire.available()){
    temp_encoder_increment = Wire.read();// the first byte: increment
    button_state = Wire.read();// the second byte: button value
}

// IIC send data, 4bytes
Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
Wire.write(led_index);
Wire.write(r);
Wire.write(g);
Wire.write(b);
Wire.endTransmission();
```

<img src="assets/img/product_pics/module/module_example/ENCODER/example_faces_encoder_01.png" width="55%" height="55%">

<!-- ## 原理图 -->