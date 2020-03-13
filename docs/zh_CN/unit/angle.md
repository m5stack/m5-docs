# ANGLE {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%">



## 描述

**ANGLE** 是一款旋钮开关输入Unit，其内置了一个**10K**的电位器,通过旋转旋钮能够改变其内部的电阻值.

电位器是具有三个引出端、阻值可按某种变化规律调节的电阻元件.根据此原理，ESP32通过端口B获取电位器输出电压的大小，再经过AD转换得到对应的映射数据.在"音量，亮度调节，或是电机调速"等需要连续信号控制的应用场景中，Angle Unit会是一个不错的选择.


*在M5Stack产品体系中，通场Grove接口的颜色代表其使用的通信协议类型.*
- 黑色: 单总线 (AD ,DA ,GPIO)
- 红色: I2C
- 蓝色：UART
- 白色：其他(取决于主设备)

<img src="assets/img/product_pics/unit/angle/unit_angle_03.png">

## 产品特性

- 输出电压范围: 0 ~ 2500mV
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc) .
- 2x LEGO 兼容孔

## 包含

- 1x ADC Unit
- 1x Grove 线

## 尺寸重量

- 包装尺寸:73mm x 46mm x 30mm
- 包装重量:23g

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Angle_UNIT_With_M5Core.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Angle_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示旋钮模拟值数据.</p>
        </div>
    </div>
</div>

## 案例程序

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino).*

功能说明：在屏幕上显示， Angle Unit输入电压的映射数值.（范围为0~4095）

```arduino
#include <M5Stack.h>
// select the input pin for the potentiometer
int sensorPin = 36;
// last variable to store the value coming from the sensor
int last_sensorValue = 0;
// current variable to store the value coming from the sensor
int cur_sensorValue = 0;

void setup() {
  M5.begin();
  pinMode(sensorPin, INPUT);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("the value of ANGLE: ");
}

void loop() {
  // read the value from the sensor:
  cur_sensorValue = analogRead(sensorPin);
  M5.Lcd.setCursor(0, 25);
  if(abs(cur_sensorValue - last_sensorValue) > 10){//debaunce
    M5.Lcd.fillRect(0, 25, 100, 25, BLACK);
    M5.Lcd.print(cur_sensorValue);
    last_sensorValue = cur_sensorValue;
  }
  delay(50);
}
```

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_04.png">

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_03.png">

## 原理图

<img src="assets/img/product_pics/unit/angle_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>ANGLE Unit</td><td>Sensor Pin</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/angle-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>