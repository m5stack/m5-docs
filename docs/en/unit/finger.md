# Unit FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_grove_c.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-Finger-Print-Unit-FPC1020A-Capacitive-Fingerprint-Identification-Module-Grove-Cable-UART-Interface-for-ESP32/3226069_32966642182.html?spm=a2g03.12010612.8148356.36.73ee56a05T9uR7)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**FINGER** Unit is a fingerprint sensor. This all-in-one fingerprint sensor makes fingerprint adding,verification,mananging super simple.

Uart protocol, Compact size and ultra-low power consumption makes it very attractive to use around M5Stack series product.  it performs fast fingerprint matching with highest security level and optimal user convenience. You can program to set the fingerprint recognition comparison level and different security level . if you ever consider secure your project with biometrics,don't forget to include this M5unit **FINGER**.

**This unit cummunicate with M5Core by UART protocol connected via PORTC**

UART settings:
- Baudrate(**default: 19200bps**)
- Start bits(1 bit)
-  Stop bits(1 bit)
-  Parity(no)

## Product Features

<img src="assets/img/product_pics/unit/unit_finger_03_en.png">

<!-- - Fingerprint recognition capacity: 150 pices
- Comparison mode: 1:N or 1:1
- Comparison level: 0 ~ 9(default: 5)
- Security level: 1 ~ 5(default: 3)
- Response time: fingerprint preprocessing < 0.45s
- Input voltage range: 3.3 ~ 6V
- Operating temperature and humidity: -10 ~ 60°, 20% ~ 80% -->

## Include

- 1x FINGER Unit
- 1x Grove Cable

## Application

- Fingerprint Attendance Machine
- Fingerprint Locker

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[FINGER communication protocol](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

## Example

### 1. Arduino IDE

*The code below is incomplete(just for usage). To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/Arduino).*

```arduino
/*
    Connect to GRVOE C on M5Core
*/
#include <M5Stack.h>
#include "finger.h"

uint8_t userNum; //User number
uint8_t res1;

// result for "res1"
#define ACK_SUCCESS    0x00
#define ACK_FAIL       0x01
#define ACK_FULL       0x04
#define ACK_NOUSER     0x05
#define ACK_USER_EXIST 0x07
#define ACK_TIMEOUT    0x08

// initialization
M5.begin();
Serial2.begin(19200, SERIAL_8N1, 16, 17);
userNum = fpm_getUserNum();
M5.Lcd.print("userNum:");
M5.Lcd.println(userNum);

// add a new user
res1 = fpm_addUser(userNum,1); //get function result

// compare your finger
res1 = fpm_compareFinger();

// delete all user
res1 = fpm_deleteAllUser();
```

## Schematic

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

- **FINGER Application**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Fingerprint%20Unit.mp4" type="video/mp4">
</video>