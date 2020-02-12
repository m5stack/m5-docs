# Module ENCODER {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_encoder_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_encoder_02.png" width="30%" height="30%">


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
-  产品尺寸：58.2mm x 54.2mm x 10mm
-  产品重量：17g

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

- **[ENCODER 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/firmware_328p/FacesEncoder328)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_FACES_encoder.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## 案例程序

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

### UIFlow

<img src="assets/img/product_pics/module/module_example/ENCODER/encoder.png">


<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-module/products/encoder-module';


   anchor_search(购买链接);
   scrollFunc();

</script>