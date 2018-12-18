# Unit ENV

<img src="assets/img/product_pics/units/M5GO_Unit_env.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**|:octocat:**[Example](Example)**| :electric_plug:**[Schematic](#Schematic)** | 🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-ENV-Unit-with-DHT12-BMP280-Digital-DHT-12-Temperature-Humidity-Aire-Pressure-Sensor/3226069_32933115893.html?spm=2114.12010615.8148356.2.758c5bcbURtQtR)**


## Description

<mark>ENV</mark> is a environment sensor for M5GO that can easily detect
temperature, humidity and air pressure with M5GO Core, including
temperature and humidity sensor and absolute barometric pressure sensor. Connect to GRVE A of M5Core.

## Features

-  Temperature:
-  measuring range: 20 ~ 60℃
-  resolution: ±0.2℃
-  Humidity:
-  measuring range: 20 ~ 95℃
-  resolution: 0.1%
-  Air pressure
-  measuring range: 300 ~ 1100hPa
-  resolution: ±1hPa
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Example

```c++
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Units/ENV)。for Specific example.

## Schematic

<img src="assets/img/product_pics/units/env_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>ENV Unit</td><td>SCL</td><td>SDA</td></tr>
</table>