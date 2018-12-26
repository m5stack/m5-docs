# Unit MAKEY

<img src="assets/img/product_pics/unit/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_makey_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Makey-Unit-MEGA328P-Inside-16Key-Fruit-Paino-with-NEO-Pixel-and-BUZZER-for-ESP32/3226069_32924883456.html?spm=a2g1y.12024536.productList_5885013.subject_23)**

## Description

The Unit makey is a makey unit with 16 touchable pins.The Unit makey is based on Arduino Uno Mega328p chip.It communicates with M5Stack Core via GROVE(I2C).It's I2C address is 0x51.

## Feature

-  Arduino Mega328p Controller
-  16 Keys Fruit Piano(PD0-7 & PB0-5), 1 NeoPixel pin(PC2) and 1 Buzzer pin(PC3)
-  Buzzer inside
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  Makey Application
-  RGB Application with Adafruit Library

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

<!-- ```arduino
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY)for Specific example. -->

## Schematic

<img src="assets/img/product_pics/unit/makey_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>