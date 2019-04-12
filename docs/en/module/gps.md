# GPS {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-GPS-Module-with-Internal-External-Antenna-MCX-Interface-IoT-Development-Board-for/3226069_32840757048.html?spm=2114.12010615.8148356.2.7c6c2743BZthY3)**

## Description

**<mark>GPS</mark>** is a global positioning navigation module with built-in GPS module (NEO-M8N).

After stacking M5Core, you can use [UIFlow](http://flow.m5stack.com), [Arduino](http://www.arduino.cc) and [MicroPython](http://www.micropython). Once the program is burned, as long as the GPS is at the window or outdoors, it can obtain global positioning information for the module.

<img src="assets/img/product_pics/module/module_gps_07.png" width="70%" height="70%">

The NEO-M8N which integrates a 72-channel [u-blox](https://www.u-blox.com) M8 GNSS engine that supports multiple GNSS systems ( Beidou, Galileo, GLONASS, GPS / QZSS ) can receive up to 3 GNSS systems simultaneously.

The GPS internal default is to communicate with M5Core via **UART2 (GPIO16, GPIO17)** ( Change to other baud rate communication via [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) )

If GPIO16, GPIO17 is used for other purposes, you can use a cutter to cut the TXD and RXD that are connected by default on the GPS module and connect them to another port (GPIO3, GPIO13, GPIO1, GPIO5) using solder or 0Ω resistors.

*The parameter of UART: baud rate (default is 9600bps), data bit (8 bits), start bit (1 bit), stop bit (1 bit), Parity (none)*

<img src="assets/img/product_pics/module/module_gps_06.png" width="70%" height="70%">

!> **The M5Stack Fire** uses GPIO16 / 17 to connect to PSRAM by default, it overlaps with TXD / RXD (GPIO16, GPIO17) of GPS module. Therefore, when using the GPS module from the M5Stack Fire, it is necessary to cut the TXD and RXD default patterns on the GPS module with a cutter and connect them to another port using solder or 0Ω resistance.

## Feature

- Operating voltage: 2.7 ~ 3.6
- Operating temperature: -40 ~ 80 °C
- Antenna type: built-in ceramic antenna and external antenna
- Can receive data from 3 GNSS systems concurrently
- Horizontal position accuracy: minimum 2.5m
- GPS module (NEO-M8N) Built-in Flash, so that you can upgrade firmware via [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)
- Supported protocols: NMEA, UBX, RTCM
- Industry leading -167dBm sensitivity
- Backward compatibility with NEO‐7 and NEO‐6 series

## Include

-  1x GPS Module
-  1x external Antenna

## Application

- GPS-based logistics tracking management
- Driverless car positioning

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **[GPS Info](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **[TinyGPS++ library](http://arduiniana.org/libraries/tinygpsplus/)**

- **Data Sheet** - [NEO-M8N](https://www.u-blox.com/sites/default/files/NEO-M8-FW3_DataSheet_%28UBX-15031086%29.pdf)

- **[u-blox Protocol Manual](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)**

## Example

### Arduino IDE

*If you want the complete code `GPSRaw.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino).*

**Note: The GPS module needs to be outdoors to receive location information**

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

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_01.png">

**Protocol Specification:**

Please refer to the [u-blox 8 / u-blox M8 Receiver Description - Manual](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf), The following table is a description of the xxRMC message in the NMEA protocol as an example.

<img src="assets/img/product_pics/module/module_example/GPS/example_module_gps_02.png">

## Schematic

<img src="assets/img/product_pics/module/gps_sch.png">
