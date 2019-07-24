# Module GPS {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_gps_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_gps_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-module/products/gps-module)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**GPS** is build with NEO-M8N, u-blox M8 concurrent GNSS modules and come with an active Antenna.

The NEO-M8 series provides high sensitivity and minimal acquisition times while maintaining low system power.

<img src="assets/img/product_pics/module/module_gps_07.png" width="70%" height="70%">

The NEO-M8N  integrates a 72-channel [u-blox](https://www.u-blox.com) M8 GNSS engine that supports multiple GNSS systems ( Beidou, Galileo, GLONASS, GPS / QZSS ) and able to receive 3 GNSS systems simultaneously.

The series communicate protocol between M5Core and GPS is UART, physically connected via **UART2 (GPIO16, GPIO17)**

If you want to Change the uart baudrate,please check here ( [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) )

**Notice: GPS signal can only be found outdoors**

*UART protocol: baud rate (default is 9600bps), data bit (8 bits), start bit (1 bit), stop bit (1 bit), Parity (none)*

<img src="assets/img/product_pics/module/module_gps_06.png" width="70%" height="70%">

!> **M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) of GPS module. Therefore, when using the GPS module with the M5Stack Fire, you might have to cut the TXD and RXD from GPS module and wire fly to another set of UART pin, if you gonna use the PSRAM.

## Product Features

- Operating voltage: 2.7 ~ 3.6
- Operating temperature: -40 ~ 80 °C
- Antenna type: built-in ceramic antenna and external antenna
- external Antenna port: SMA
- Can receive data from 3 GNSS systems concurrently
- Horizontal position accuracy: minimum 2.5m
- GPS module (NEO-M8N) Built-in Flash, so that you can upgrade firmware via [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)
- Supported protocols: NMEA, UBX, RTCM
- Industry leading -167dBm sensitivity
- Backward compatibility with NEO‐7 and NEO‐6 series
- Product Size：54.2mm x 54.2mm x 12.8mm
- Product weight：43g


## Include

-  1x GPS Module
-  1x external Antenna(cable length : 1 meter)

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

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_GPS_Raw.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)


## Example

### Arduino IDE

*To the complete code `GPSRaw.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GPS/Arduino).*

**Note: The GPS module needs placed outdoors to be able to receive GPS signal**

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
