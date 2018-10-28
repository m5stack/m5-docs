# M5Stack LORA Module

## DESCRIPTION

The <mark>LoRa</mark> Module is a module with small LoRa module named Ra-02.
You can program it after connected to any series of M5Stack Core through
Blockly, Arduino or MicroPython.

M5Stack LoRa Module can be used for ultra-long distance spread spectrum
communication, and compatible FSK remote modulation and demodulation
quickly, to solve the traditional wireless design can not take into
account the distance, anti-interference and power consumption

## FEATURES

-  LoRa Module named RA-02 supply by Ai-Thinker
-  Supports FSK, GFSK, MSK, GMSK, LoRa ™ and OOK modulation modes
-  Receive sensitivity as low as -141 dBm
-  Programmable bit rate up to 300Kbps
-  Build-in Antenna

## INCLUDES

-  1x M5Stack LoRa Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## DOCUMENTS

- **[WebSite](https://m5stack.com)**
- **[Example](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/Lora)**
- **[LoRa Info](http://wiki.ai-thinker.com/lora) (LoRa)**
- **[GitHub](https://github.com/m5stack/M5Stack)**
- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html?spm=2114.12010615.8148356.22.25e96be7xE1y22.html)**

?> **Note** If your board LCD can't display or has some other problem, we suggest
you to add the two statements code followed by ``m5.begin();`` as shown
below
```cpp
    m5.begin();
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
```
?> **Note** Because GPIO5 who has connected NSS pin of LoRa module need be pull-up
at the moment your board(or system) power on to prevent system's LCD
can't display.
