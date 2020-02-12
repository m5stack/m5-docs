# Module PLUS {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_plus_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_plus_02.png" width="30%" height="30%">



## 描述

**PLUS** 是M5Stack堆叠模块系列中的一款，功能增强型模块.模块配备了锂电池（500mAh）、齿轮电位器、红外发射器.集成MEGA328，提供麦克风接口焊盘，并且对M5Core的端口PORT B(GPIO),PORT C(UART)进行的拓展.PLUS模块能够升级你的硬件资源，为你带来更好的开发体验.

通讯协议: I2C (0x62).

**注意：**

PLUS 上的PORT C 和 PORT B 的丝印画反了，使用时请注意。黑色的座子是 PORT B，也即 GPIO，蓝色的座子是 PORT C，也即 UART。

## 产品特性

-  500mAh 锂电池
-  可编程齿轮电位器
-  红外发射器
-  PORT B & PORT C
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：20.5g

## 包含

-  1x M5Stack PLUS 模块


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[PLUS 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/firmware_328p)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_PLUS.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## 案例程序

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/Arduino).*

```arduino
/*
* 读取齿轮电位器的数据和发送红外光线
*/
#include <Arduino.h>
#include <M5Stack.h>

#define IrPin 13
#define PLUS_ADDR 0x62

// declaration
int32_t number = 0;
uint8_t press = 0;

// initialization
M5.begin(true, false, false);
Wire.begin();
ledcSetup(1, 38000, 10); ledcAttachPin(IrPin, 1);// IR Pin setting

// read data
Wire.requestFrom(PLUS_ADDR, 2);
while(Wire.available()) {
    int8_t encode = Wire.read();
    uint8_t press_n = Wire.read();
    number += encode;
    if(press_n == 0xff) {
        press = 0;//encoder was pressed
    }
    else {
        press = 1;//encoder was releaed
    }
}
```

### UIFLOW

<img src="assets/img/product_pics/module/module_plus_03.jpg">

- [点击此处，获取UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/UIFLOW). 

## 原理图

<img src="assets/img/product_pics/module/plus_sch.png">

## 相关视频

**PLUS 的演示 - 菜单界面的翻页与选择**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Encoder.mp4" type="video/mp4">
</video>

<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-module/products/plus-module';


   anchor_search(购买链接);
   scrollFunc();

</script>