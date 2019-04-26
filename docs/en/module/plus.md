# Module PLUS {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_plus_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_plus_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-Arrival-PLUS-Module-Encoder-Module-with-MEGA328P-500mAh-Battery-ISP-IR-Transmitter-UART-GPIO/3226069_32949278724.html?spm=a2g1x.12024536.productList_5885013.pic_1)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**PLUS** is a enhanced M5 module comes with Lipo battery(500mAh), gear potentiometer, IR transmitter, extend PORT B(GPIO Port), PORT C(UART Port) from M5 core and a Microphone soldering pad. Powered with MEGA28, it could be a great upgrade of the hardwre resources by adding up PLUS to your work.

Communication Protocol: IIC (0x62).

## Product Features

-  500mAh Battery
-  Programmable gear potentiometer
-  IR transmitter
-  Including PORT B and PORT C

## Include

-  1x M5Stack PLUS Module

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/PLUS/firmware_328p)**

## Example

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
```

## Schematic

<img src="assets/img/product_pics/module/plus_sch.png">

## Related Video

**PLUS Case - Page flipping and selection of menu interface**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Encoder.mp4" type="video/mp4">
</video>