# Unit ENV {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_env.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_env_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-ENV-Unit-with-DHT12-BMP280-Digital-DHT-12-Temperature-Humidity-Aire-Pressure-Sensor/3226069_32933115893.html?spm=2114.12010615.8148356.2.758c5bcbURtQtR)**


## Description

**ENV** is a environment sensor, can be used for temperature, humidity, and atmospheric pressure measurement. Build with DHT12 and BMP280.

DHT12 is a upgradation version of DHT11 humidity temperature sensor, fully downward compatible, more precise and add I2C interface.
BMP280 is an absolute barometric pressure sensor especially designed for mobile applications, offers highest flexibility to optimize the device regarding power consumption, resolution and filter performance.

## Feature

-  Temperature:
    -  measuring range: -20 ~ 60 ℃
    -  resolution: ±0.2℃
-  Humidity:
    -  measuring range: 20 ~ 95 %RH
    -  resolution: 0.1%
-  Air pressure
    -  measuring range: 300 ~ 1100hPa
    -  resolution: ±1hPa
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Include

- 1x ENV Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### Mini Burner

>1.Mini Burner is a simple and fast program burner, and each product page has a product-related case program for Mini Burner.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_ENV.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the Mini Burner is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

### 1. Arduino IDE

This is a ENV example, implemented reading temperature, humidity and atmospheric pressure function.
1, Before compiling, please install `Adafruit BMP280 Library`
2, copy `Adafruit_Sensor.h` to `C:\Users\<user_name>\Documents\Arduino\libraries\Adafruit_BMP280_Library`

*The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV).*

```arduino
/*
    Install Adafruit BMP280 Library first.
*/
#include <M5Stack.h>
#include "DHT12.h"
#include <Wire.h> //The DHT12 uses I2C comunication.
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>

// new two objects
DHT12 dht12;
Adafruit_BMP280 bme;

// initialization
M5.begin();
Wire.begin();
bme.begin();

// read data
float tmp = dht12.readTemperature();
float hum = dht12.readHumidity();
float pressure = bme.readPressure();
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png">

## Schematic

<img src="assets/img/product_pics/unit/env_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>