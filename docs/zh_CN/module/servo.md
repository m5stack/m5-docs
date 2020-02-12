# Module SERVO {docsify-ignore-all}

<img src="assets\img\product_pics\module\servo\servo_01.jpg" width="30%"><img src="assets\img\product_pics\module\servo\servo_02.jpg" width="30%"><img src="assets\img\product_pics\module\servo\servo_03.jpg" width="30%">



## 描述

**SERVO** 是M5Stack堆叠模块系列中的一款，舵机驱动模块.拥有12个舵机驱动通道，最大功率14瓦，可同时驱动多个 SERVO 舵机.采用直流电源输入设计用于功率补充,并通过 M-BUS，自动为顶部的 M5Core 供电.将这一种简单快捷的舵机驱动方式应用在你的项目中，将提升你的开发效率.

SERVO 基于 MEGA328 芯片进行 I2C 通信(0x53).

## 产品特性

-  12x 舵机驱动通道
-  DC 输入: 5-7V
-  DC 连接器类型: XT30 (母头)
-  电源设配器接口: 5.5mm x 2.1mm
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：24.5g

## 包含

-  1x M5Stack Servo 模块
-  1x 常规公对公 XT30 DC 连接器

## 应用

-  人形机器人
-  仿生多关节机器人
-  3轴舵机云台

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[SERVO 固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_Servo.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">


## 案例程序

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/Arduino).*

```arduino
#include <Arduino.h>
#include <M5Stack.h>
#include <Wire.h>

#define SERVO_ADDR 0x53
void setup() {
    M5.begin(true, false, true);
    M5.Lcd.setTextFont(4);
    M5.Lcd.setCursor(70, 100);
    M5.Lcd.print("Servo Example");

    Wire.begin(21, 22, 100000);
}

// addr 0x01 means "control the number 1 servo by us"
void Servo_write_us(uint8_t number, uint16_t us) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x00 | number);
    Wire.write(us & 0x00ff);
    Wire.write(us >> 8 & 0x00ff);
    Wire.endTransmission();
}

// addr 0x11 means "control the number 1 servo by angle"
void Servo_write_angle(uint8_t number, uint8_t angle) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x10 | number);
    Wire.write(angle);
    Wire.endTransmission();
}

void loop() {
    for(uint8_t i = 0; i < 12; i++){
        Servo_write_us(i, 700);
        // Servo_write_angle(i, 0);
    }
    delay(1000);
    for(uint8_t i = 0; i < 12; i++){
        Servo_write_us(i, 2300);
        // Servo_write_angle(i, 180);
    }
    delay(1000);
}
```

### 2. UIFlow

想要探索最简单的Servo编程驱动方式吗？快试试Blockly编程平台[UIFlow](http://flow.m5stack.com).

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow).*

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.png">

## 原理图

<img src="assets/img/product_pics/module/servo_sch.png">

## 相关视频

**SERVO 的使用教程**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Servo/E4%20-%20Servo%20Demo(UIFlow%20Tutorials%205).mp4" type="video/mp4">
</video>

**SERVO 的案例**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Servo.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/servo-module';


   anchor_search(purchase_link);
   scrollFunc();

</script>