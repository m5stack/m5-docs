# Unit MAKEY

<img src="assets/img/product_pics/unit/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_makey_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_makey_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Makey-Unit-MEGA328P-Inside-16Key-Fruit-Paino-with-NEO-Pixel-and-BUZZER-for-ESP32/3226069_32924883456.html?spm=a2g1y.12024536.productList_5885013.subject_23)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Makey-Unit-MEGA328P-Inside-16Key-Fruit-Paino-with-NEO-Pixel-and-BUZZER-for-ESP32/3226069_32924883456.html?spm=a2g1y.12024536.productList_5885013.subject_23)** -->

## Description

**<mark>MAKEY</mark>** is a makey unit with 16 touchable pins.The Unit makey is based on Arduino Uno Mega328p chip.It communicates with M5Stack Core via GROVE(I2C).It's I2C address is 0x51.

<!-- **使用方法：**

1）只是unit上的蜂鸣器发声

一根杜邦线或普通导线接unit的GND孔，并另一端被握在左手；另一根杜邦线一端握右手，另一端触碰unit上的音调孔，就会发出对应音调。

2）m5core上的喇叭发声

unit通过GROVE线连接至m5core的接口A后，烧录[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY/Arduino)，一根杜邦线或普通导线接unit的GND孔，并另一端被握在左手；另一根杜邦线一端握右手，另一端触碰unit上的音调孔，m5core的喇叭会发出对应音调。 -->

## Feature

-  Arduino Mega328p Controller
-  16 Keys Fruit Piano(PD0-7 & PB0-5 & PC0,1), 1 NeoPixel pin(PC2) and 1 Buzzer pin(PC3)
-  Buzzer inside
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  Fruit piano
-  RGB Application with Adafruit Library

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_05.png" width="40%" height="40%">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/firmware_328p)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY/Arduino).*

```arduino
#include <M5Stack.h>
#include <Wire.h>

// initialization
M5.begin();
pinMode(21, INPUT); pinMode(22, INPUT);
Wire.begin();// Init I2C

// read data
Wire.requestFrom(MAKEY_ADDR, 2);
while (Wire.available()) {
  Key1 = Wire.read();//read data from MAKEY
  Key2 = Wire.read();//read data from MAKEY
  tone_key = (Key2<<8) | Key1;// the following picture will explain "tone_key"
}
```

<img src="assets/img/product_pics/unit/unit_example/MAKEY/tone_key_pitch_zh_CN.png">

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_04.png" width="30%" height="30%">

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MAKEY/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/MAKEY/example_unit_makey_01.png" width="50%" height="50%">

<!-- ## Schematic

<img src="assets/img/product_pics/unit/makey_sch.JPG"> -->

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_03.png" width="30%" height="30%">