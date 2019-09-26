# Unit FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/finger-sensor-unit)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

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

- Product Size： &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;             48.2mm x 24.2mm x 15.2mm
- Product weight：  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;         7.4g
- Fingerprint:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;	         150
- False Acceptance Rate:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    <0.001%（at Security Level:3）
- False Rejection Rate:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;     <0.1%（at Security Level:3）
- Comparison mode:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;          1:1(Authentication) /1:N (Identification)
- Security Level:    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;         1-5（Default:3）
- Quiescent Current:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;        <20μA
- Response time:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;            Fingerprint preprocessing < 0.45s
- Output format:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;            User name、finger image、feature value
- Characteristic value size: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 193 Bytes
- Communication Interface:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  UART
- Supported Baudrate:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;       9600bps-115200bps（Default:19200bps）
- Operating temperature: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;     -10°C - 60°C
- Operating humidity:  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;       20% - 80%




## Include

- 1x FINGER Unit
- 1x Grove Cable

## Application

- Fingerprint Attendance Machine
- Fingerprint Locker


## Document
- **[FPC1020 Datasheet](http://www.shenzhen2u.com/doc/Module/Fingerprint/710-FPC1020_PB3_Product-Specification.pdf)**


## Schematic

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_FINGER.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)



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


## Related Video

- **FINGER Application**


<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Fingerprint%20Unit.mp4" type="video/mp4">
</video>

- **FINGER UIflow Video Tutorial**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Finger/E7%20-%20Finger%20Demo(UIFlow%20Tutorials%208).mp4" type="video/mp4">
</video>