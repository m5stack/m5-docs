# M5Stack LORA Module

<img src="assets/img/product_pics/modules/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/modules/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/modules/module_lora_03.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html?spm=2114.12010615.8148356.22.25e96be7xE1y22.html)**

## Description

The <mark>LoRa</mark> Module is a module with small LoRa module named Ra-02.
You can program it after connected to any series of M5Stack Core through
Blockly, Arduino or MicroPython.

M5Stack LoRa Module can be used for ultra-long distance spread spectrum
communication, and compatible FSK remote modulation and demodulation
quickly, to solve the traditional wireless design can not take into
account the distance, anti-interference and power consumption

## Feature

-  LoRa Module named RA-02 supply by Ai-Thinker
-  Supports FSK, GFSK, MSK, GMSK, LoRa ™ and OOK modulation modes
-  Receive sensitivity as low as -141 dBm
-  Programmable bit rate up to 300Kbps
-  Build-in Antenna

## Include

-  1x M5Stack LoRa Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[LoRa Info](http://wiki.ai-thinker.com/lora) (LoRa)**

?> **Note** If your board LCD can't display or has some other problem, we suggest
you to add the two statements code followed by ``m5.begin();`` as shown
below
```cpp
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
```
?> **Note** Because GPIO5 who has connected NSS pin of LoRa module need be pull-up
at the moment your board(or system) power on to prevent system's LCD
can't display.
