# LoRaWAN {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lorawan_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lorawan_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2)**

## Description

<mark>LoRaWAN</mark> is a small LoRa terminal module built-in LoRa chip(SX1276) and ST MCU that means this module has been built with complete LoRa protocal stack. So you can develop a LoRaWAN module through UART or simple AT command with M5Core.

By default, the UART configuration: "9600, 8, n, 1"(8 bits data, no parity, 1 stop bit)

?> **Notice** The 5 holes which are under the silk screen "LoRaWAN" are designed for upgrading the firmware of LoRaWAN module.

## Feature

-  Supports 433/470MHz and 868/915MHz
-  Supports DataRate: 0.018-38.4kbps
-  Output Power: 17 ± 0.5dbm
-  Supports ADR(Adaptive Data Rate)
-  Build-in Antenna

## Include

-  1x LoRa Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## PinMap

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | GPIO17    |
| TXD      | GPIO16     |

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[LoRaWAN Info](http://wiki.ai-thinker.com/sx127x-052) (LoRaWAN)**

- **[AT command for LoRaWAN](http://wiki.ai-thinker.com/_media/rhf-ps01509_lorawan_class_ac_at_command_specification_-_v4.4.pdf)**

## Example

### Arduino IDE

This is a exmaple for communication between two LoRaWAN modules.

**Function:** Press button B for setting 433MHz as LoRaWAN operating frequency, and sending "Hello World"; Press button C for setting 868MHz as LoRaWAN operating frequency, and sending "Hello World"; Press button A for clearing screen.

**Note:** Befor compiling this program, please extract `LoRaWan_for_M5Stack.rar` to this path `C:\Users\<user_name>\Documents\Arduino\libraries`.

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino).*

```arduino
/*
    device_A.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

```arduino
/*
    device_B.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

<img src="assets/img/product_pics/module/module_example/LORAWAN/example_module_lorawan_01.png">

## Schematic

<img src="assets/img/product_pics/module/lorawan_sch.png">
