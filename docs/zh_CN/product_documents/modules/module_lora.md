# LORA模块

中文 | [English](/en/product_documents/modules/module_lora) | [日本語](ja/product_documents/modules/module_lora)

## 描述

<mark>LoRa</mark>模块是内置名为Ra-02的LoRa小模组的M5Stack系列LoRa模块。堆叠了M5Core之后，你可以用UiFlow、Arduino和MicroPython来编程它。

M5Stack LoRa模块适用于长距离通信，结合多个LoRa模块，能组成长达1-2公里的物联网低功耗通信网络。它克服了传统物联网通信中长距离可是高功耗的难点。与蓝牙WIFI等通信技术相互弥补。

## 特性

-  LoRa模块型号RA-02
-  支持FSK, GFSK, MSK, GMSK调制解调制式
-  长距离低功耗
-  内置天线

## 包含

-  1x M5Stack LoRa模块

## 应用

-  自动抄表系统
-  楼宇自动化
-  远程灌溉系统

## 相关链接

- **[官网](https://m5stack.com)**
- **[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/Lora)**
- **[LoRa模块信息](http://wiki.ai-thinker.com/lora) (LoRa)**
- **[购买链接](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html?spm=2114.12010615.8148356.22.25e96be7xE1y22.html)**

?> **Note** 如果堆叠了LoRa模块之后，上电，可是M5Core不能正常显示或者有其他显示问题时，建议在`m5.begin();`语句之前加入如下语句

```cpp
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
```
?> **Note** 因为GPIO5连接到LoRa模块的NSS引脚，该引脚在系统上电的时候需要上拉，从而避免LCD不能显示。

<figure>
    <img src="assets/img/product_pics/modules/lora_01.png" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/lora_02.jpg" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/lora_03.jpg" height="300" width="300">
</figure>