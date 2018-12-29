# GPS

<img src="assets/img/product_pics/unit/unit_gps_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_gps_grove_c.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-GPS-BDS-Mini-Unit-Board-AT6558-MAX2659-with-GROVE-Port-UART-Interface-M5GO-M5Stack/3226069_32959837627.html?spm=a2g03.12010615.8148356.4.d2df160dp0aQSw)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-GPS-BDS-Mini-Unit-Board-AT6558-MAX2659-with-GROVE-Port-UART-Interface-M5GO-M5Stack/3226069_32959837627.html?spm=a2g03.12010615.8148356.4.d2df160dp0aQSw)** -->

## Description

<mark>GPS</mark>with **AT6558** inside which is created and developed by a Chinese Company named Zhongkewei. AT6558 is capable of highly performance,supportting many types of satellite navigation system. It is capable of receiving GNSS signal from 6 satellite navigation system, and capable of joint location ,navigation,and timing . Therefore the module is able to obtain accurate global location information . You can connect it to M5Core port C with GROVE cable, and develope it with UART communication. Regards to the gps Unit , a signal amplifying chip is **MAX2659** integrated inside .

## Feature

-  Supportting many types of satellite navigation system, China BDS , USA GPS, and Russia GLONASS etc
- AT6558
    - 15mA Ultra low power comsume
    - integrated radio frequency,base band, flash
    - working temperature:-40~85℃
<!-- -  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程 -->
-  With two Lego plugin holes on the Unit, it could be more easier to compatable with Lego mountings

## 应用

- Vehicle location
- Intelligent Law enforcement location

## 相关链接

- **[Offical Video](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[Forum](http://forum.m5stack.com/)**

- **[Datasheet]** - [AT6558](http://www.icofchina.com/d/file/xiazai/2016-12-05/b1be6f481cdf9d773b963ab30a2d11d8.pdf) - [MAX2659](https://datasheets.maximintegrated.com/en/ds/MAX2659.pdf)

- **[CASIC multimode satellite navigation receiver protocol specification](http://www.icofchina.com/d/file/xiazai/2017-05-02/ea0cdd3d81eeebcc657b5dbca80925ee.pdf)**

- **[GnssToolKit3(Windows Version)](http://www.icofchina.com/d/file/xiazai/2018-05-23/2b29a8da746eec0ef1dcd9deae895298.zip)**

## Example

### 1. Arduino IDE

*If you want the complete code `GPSRaw.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/GPS/Arduino).*

```arduino
#include <M5Stack.h>

/* By default, GPS is connected with M5Core through UART2 */
HardwareSerial GPSRaw(2);

void setup() {
  M5.begin();
  GPSRaw.begin(9600);// GPS init
  Serial.println("hello");
  termInit();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()) {
    int ch = Serial.read();
    GPSRaw.write(ch);
  }
  if(GPSRaw.available()) {
    int ch = GPSRaw.read();// read GPS information
    Serial.write(ch);
    termPutchar(ch);
  }
}
```

After burnt the example code `GPSRaw.ino`, m5core and PC serial terminal will display following information

```
$GPGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5*02
$BDGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5*13
$GPGSV,1,1,00*79
$BDGSV,1,1,00*68
$GNRMC,,V,,,,,,,,,,M*4E
$GNVTG,,,,,,,,,M*2D
$GNZDA,,,,,,*56
$GPTXT,01,01,01,ANTENNA OPEN*25
```

<!-- ## Schematic

<img src="assets/img/product_pics/unit/env_sch.jpg"> -->

### PinMap

<table>
 <tr><td>M5Core(GROVE C)</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>GPS Unit</td><td>Signal Transmitter(TXD)</td><td>Signal Receiver(RXD)</td><td>5V</td><td>GND</td></tr>
</table>
