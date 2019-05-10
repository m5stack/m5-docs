# Module GoPlus {docsify-ignore-all}

<img src="assets/img/product_pics/module/goplus/goplus_p1.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/goplus/goplus_p2.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-GOPLUS-Module-with-MEGA328P-IR-Transmitter-and-Receiver-suit-for-ESP32-Kit/3226069_33010785963.html?spm=2114.12010615.8148356.2.14c97842qJv4YA)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-PLUS-Module-Encoder-Module-with-MEGA328P-500mAh-Battery-ISP-IR-Transmitter-UART-GPIO/3226069_32949278724.html?spm=a2g1x.12024536.productList_5885013.pic_1)**-->

## Description

**GoPlus** is a enhanced M5 module. It features an all-in-one motor driver module, provides a combination of several M5 Modules and Units(SERVO, PbHUB, IR).

comes with 2x DC motor channel, 4x Servo motor channel, IR transmitter, IR receiver, 3x extend PORT B(GPIO Port). This Module can surely help build more complicated and organized motor applications.

Communication Protocol: IIC (0x61).

## Product Features

-  2x DC motor channel
-  4x Servo motor channel
-  IR transmitter & receiver
-  3x extend PORT B
-  MEGA328P
-  LV8548MC

## Include

-  1x M5Stack GoPlus Module

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- Datasheet - **[LV8548MC](https://www.onsemi.cn/PowerSolutions/document/ANDLV8548MC-D.PDF)**

- Driver firmware - **[GoPlus](https://github.com/m5stack/GoPlus/tree/master/src)**

- Test Code - **[GoPlus](https://github.com/m5stack/GoPlus/tree/master/test)**

<!-- ## Example

### Arduino IDE

*The Code below `plus_read_encoder.ino` is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/Arduino).*

```arduino
/*
* Read data from the gear potentiometer
* Send infrared light
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
``` -->

## Schematic

<img src="assets/img/product_pics/module/goplus/goplus_sch.png">
