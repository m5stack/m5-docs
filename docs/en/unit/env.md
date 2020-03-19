# ENV {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U001</div>

<img src="assets/img/product_pics/unit/M5GO_Unit_env.png" width="30%" height="30%">



## Description

**ENV** is a environment sensor, can be used for temperature, humidity, and atmospheric pressure measurement. Build with DHT12 and BMP280.

DHT12 is a upgradation version of DHT11 humidity temperature sensor, fully downward compatible, more precise and add I2C interface.
BMP280 is an absolute barometric pressure sensor especially designed for mobile applications, offers highest flexibility to optimize the device regarding power consumption, resolution and filter performance.


 **I2C address:DHT12(0x5C)、BMP280(0x76)**

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
-  Product Size：32.2mm x 24.2mm x 8.1mm
-  Product weight：4.2g

## Include

- 1x ENV Unit
- 1x Grove Cable

## Related Link

- **[BMP280 library](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMP280 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

- **[DHT12 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ENV_UNIT_With_M5Core.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ENV_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Display temperature, humidity and atmospheric pressure data.</p>
        </div>
    </div>
</div>


## Example

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

<img src="assets/img/product_pics/unit/unit_example/ENV/example_unit_env_05.png" width="60%">

## Schematic

<img src="assets/img/product_pics/unit/env_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-env-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>