# LORA {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_03.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html?spm=2114.12010615.8148356.22.25e96be7xE1y22.html)**

## Description

**<mark>LoRa</mark>** is a module with small LoRa module named Ra-02.
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

<!-- ?> If your board LCD can't display or has some other problem, we suggest you to add the two statements code followed by ``m5.begin();`` as shown below. Because GPIO5 who has connected NSS pin of LoRa module need be pull-up at the moment your board(or system) power on to prevent system's LCD can't display.
```arduino
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
``` -->

## Example

### Arduino IDE

This is point-to-point communication example between two LORA modules. Two lora nodes send and receive information to each other.

* If a lora send message successfully, it'll display blue string.

* If a lora receive message from another one successfully, it'll display yellow string.

* If a lora initialize unsuccessfully, it'll display red string.

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA/Arduino)*

```arduino
#include <M5Stack.h>
#include <M5LoRa.h>

//declaration
String outgoing;                     // outgoing message
byte msgCount = 0;                   // count of outgoing messages
byte localAddress = 0xBB;            // address of this device
byte destination = 0xFF;             // destination to send to

//initialization
M5.begin();
LoRa.setPins();                      // set CS, reset, IRQ pin
LoRa.begin(433E6);                   // initialize ratio at 915 MHz

//send message
void sendMessage(String outgoing) {
  LoRa.beginPacket();                // start packet
  LoRa.write(destination);           // add destination address
  LoRa.write(localAddress);          // add sender address
  LoRa.write(msgCount);              // add message ID
  LoRa.write(outgoing.length());     // add payload length
  LoRa.print(outgoing);              // add payload
  LoRa.endPacket();                  // finish packet and send it
  msgCount++;                        // increment message ID
}

//receive message
void onReceive(int packetSize) {
  if (packetSize == 0) return;       // if there's no packet, return
  int recipient = LoRa.read();       // recipient address
  byte sender = LoRa.read();         // sender address
  byte incomingMsgId = LoRa.read();  // incoming msg ID
  byte incomingLength = LoRa.read(); // incoming msg length

  String incoming = "";

  while (LoRa.available()) {
    incoming += (char)LoRa.read();
  }
}

onReceive(LoRa.parsePacket());
```

<img src="assets/img/product_pics/module/module_example/LORA/example_module_lora_02.png">

## Schematic

<img src="assets/img/product_pics/module/lora_sch.png">