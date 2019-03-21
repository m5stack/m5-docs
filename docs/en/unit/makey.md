# Unit MAKEY {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_makey.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_makey_grove_a.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_makey_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Makey-Unit-MEGA328P-Inside-16Key-Fruit-Paino-with-NEO-Pixel-and-BUZZER-for-ESP32/3226069_32924883456.html?spm=a2g1y.12024536.productList_5885013.subject_23)**

## Description

**<mark>MAKEY</mark>** is a unit with built-in MEGA328P chip, buzzer and RGB led, with 16 pins.

This Unit communicates with the M5Core via the GROVE A interface. It's I2C address is 0x51.

**Instructions:**

1）Just the buzzer on the unit sounds

A DuPont line or a common wire is connected to the GND hole of the unit, and the other end of this DuPont line is held in the left hand;

Another DuPont line holds the right hand at one end, the other end of this DuPont line touches the tone hole on the unit, and MAKEY will emit the corresponding tone.

2）Speaker sounds on m5core

Unit is connected to the interface A of m5core through the GROVE line, and burns [example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version).

A DuPont line or a common wire is connected to the GND hole of the unit, And the other end of this DuPont line is held in the left hand;

Another DuPont line holds the right hand at one end, the other end of this DuPont line touches the tone hole on the unit, and m5core will emit the corresponding tone.

## Feature

- Arduino Mega328p Controller
- Buzzer inside
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego installation holes

## Include

- 1x MAKEY unit
- 1x GROVE Cable

## Application

- Fruit piano

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_05.png" width="40%" height="40%">

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/firmware_328p)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version).*

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

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/MAKEY/example_unit_makey_02.png">

## Schematic

<img src="assets/img/product_pics/unit/makey_sch.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MAKEY Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_03.png" width="30%" height="30%">