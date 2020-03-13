# FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%">


## Description

**FINGER** Unit is a fingerprint sensor with FPC1020A inside. This all-in-one fingerprint sensor makes fingerprint adding,verification,mananging super simple.

Uart protocol, Compact size and ultra-low power consumption makes it very attractive to use around M5Stack series product.  it performs fast fingerprint matching with highest security level and optimal user convenience. You can program to set the fingerprint recognition comparison level and different security level . if you ever consider secure your project with biometrics,don't forget to include this M5unit **FINGER**.

**This unit cummunicate with M5Core by UART protocol connected via PORTC**

UART settings:
- Baudrate(**default: 19200bps**)
- Start bits(1 bit)
-  Stop bits(1 bit)
-  Parity(no)

## Product Features

- Fingerprint:  	         150
- Capacitive area array semiconductor fingerprint sensor
- The sensor has a pixel quality of 256 gray levels per pixel
- 1:N recognition and 1:1 verification
- Support finger 360 Rotate recognition
- Security level that can be adjusted appropriately 0-9, default level 5
- Output format:             User name、finger image、feature value
- Characteristic value size: 193 Bytes
- Communication Interface:   UART
- Supported Baudrate:        9600bps-115200bps（Default:19200bps）
- Operating temperature:     -10°C - 60°C
- Operating humidity:        20% - 80%




## Include

- 1x FINGER Unit
- 1x Grove Cable

## Weight and Size

- Package size:67mm x 53mm x 12mm
- Package weight:20g

## Applications

- Fingerprint Attendance Machine
- Fingerprint Locker

## Document

- Protocol **[FINGER series communication protocol](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- Datasheet **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**

## Schematic

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Finger_UNIT_With_M5Core.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Finger_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>IR sends a signal and if the remote control signal is received, the screen displays detected.</p>
        </div>
    </div>
</div>



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

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/UIFlow).*

<img src="assets/img/product_pics/unit/fingerprint.png">


## Video

- **FINGER Application**


<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Fingerprint%20Unit.mp4" type="video/mp4">
</video>

- **FINGER UIflow Video Tutorial**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Finger/E7%20-%20Finger%20Demo(UIFlow%20Tutorials%208).mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/finger-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>